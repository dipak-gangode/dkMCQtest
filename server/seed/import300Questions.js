import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Question } from '../src/models/Question.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

/**
 * Normalizes question text for robust duplicate comparison
 * (strips punctuation, quotes, backticks, whitespace and converts to lowercase)
 */
export const normalizeQuestionText = (text) =>
  (text || '')
    .trim()
    .toLowerCase()
    .replace(/[`'".,\/#!$%\^&\*;:{}=\-_`~()<>?]/g, '')
    .replace(/\s+/g, ' ');

/**
 * Maps raw topics from the 300 JSON to canonical platform topic slugs
 */
export const mapTopicAndTags = (rawTopic, subTopic, difficulty) => {
  const normTopic = (rawTopic || '').trim().toLowerCase();
  const normSub = (subTopic || '').trim();

  let mappedTopic = normTopic;

  if (normTopic === 'node.js') {
    mappedTopic = 'nodejs';
  } else if (normTopic === 'git-npm') {
    mappedTopic = 'git';
  } else if (normTopic === 'web-api-auth') {
    // Route authentication & security questions to 'auth', others to 'rest-api'
    const authSubTopics = ['security', 'jwt', 'sessions', 'api security'];
    if (authSubTopics.includes(normSub.toLowerCase())) {
      mappedTopic = 'auth';
    } else {
      mappedTopic = 'rest-api';
    }
  }

  const tags = Array.from(
    new Set([
      mappedTopic,
      normTopic,
      normSub.toLowerCase().replace(/\s+/g, '-'),
      (difficulty || '').toLowerCase(),
    ])
  );

  return { mappedTopic, tags };
};

/**
 * Validates a single question record
 */
export const validateQuestionRecord = (q, index) => {
  const num = q.questionNumber || index + 1;
  const qId = q.id || `rec-${num}`;

  if (!q.question || typeof q.question !== 'string' || !q.question.trim()) {
    throw new Error(`Record [#${num} (${qId})] has missing or empty question text!`);
  }

  if (!q.topic || typeof q.topic !== 'string') {
    throw new Error(`Record [#${num} (${qId})] has missing topic!`);
  }

  if (
    !q.difficulty ||
    !['easy', 'medium', 'hard', 'interview'].includes(q.difficulty.toLowerCase())
  ) {
    throw new Error(
      `Record [#${num} (${qId})] has invalid difficulty "${q.difficulty}"!`
    );
  }

  if (!Array.isArray(q.options) || q.options.length < 2) {
    throw new Error(`Record [#${num} (${qId})] has fewer than 2 options!`);
  }

  const optionIds = q.options.map((opt) => (opt.id || '').trim().toLowerCase());
  const normCorrectId = (q.correctOptionId || '').trim().toLowerCase();

  if (!normCorrectId || !optionIds.includes(normCorrectId)) {
    throw new Error(
      `Record [#${num} (${qId})] correctOptionId "${q.correctOptionId}" not found in options [${optionIds.join(', ')}]!`
    );
  }

  for (const opt of q.options) {
    if (!opt.id || !opt.text || !opt.text.trim()) {
      throw new Error(
        `Record [#${num} (${qId})] option "${opt.id}" has missing text!`
      );
    }
  }

  if (!q.explanation || typeof q.explanation !== 'string') {
    throw new Error(`Record [#${num} (${qId})] has missing explanation!`);
  }

  return true;
};

/**
 * Main import function
 */
export async function import300Questions({ isSeedPipeline = false } = {}) {
  console.log('\n📦 Starting 300 MCQ Questions Import Pipeline...\n');

  // Locate JSON dataset (check workspace root and local paths)
  const candidatePaths = [
    path.resolve(__dirname, '../../mern_300_mcq_questions.json'),
    path.resolve(__dirname, '../mern_300_mcq_questions.json'),
    path.resolve(process.cwd(), 'mern_300_mcq_questions.json'),
    path.resolve(__dirname, './mern_300_mcq_questions.json'),
  ];

  let jsonPath = candidatePaths.find((p) => fs.existsSync(p));
  if (!jsonPath) {
    throw new Error(
      `Could not locate mern_300_mcq_questions.json. Checked: ${candidatePaths.join(', ')}`
    );
  }

  console.log(`📂 Found dataset at: ${jsonPath}`);
  const rawData = fs.readFileSync(jsonPath, 'utf8');
  const dataset = JSON.parse(rawData);

  const rawQuestions = dataset.questions || [];
  console.log(`📋 Total records found in dataset: ${rawQuestions.length}`);

  // Step 1: Validate all 300 records
  console.log('🔍 Validating all records integrity...');
  for (let i = 0; i < rawQuestions.length; i++) {
    validateQuestionRecord(rawQuestions[i], i);
  }
  console.log(`✅ All ${rawQuestions.length} records passed strict schema validation!`);

  // Step 2: Fetch existing questions to prevent duplicates
  console.log('🔎 Checking database for existing questions to prevent duplicates...');
  const existingDocs = await Question.find(
    {},
    { question: 1, externalId: 1, topic: 1 }
  ).lean();

  const existingNormalizedQuestions = new Set();
  const existingExternalIds = new Set();

  existingDocs.forEach((doc) => {
    existingNormalizedQuestions.add(normalizeQuestionText(doc.question));
    if (doc.externalId) {
      existingExternalIds.add(doc.externalId.trim().toLowerCase());
    }
  });

  console.log(`📊 Found ${existingDocs.length} existing questions in database.`);

  // Step 3: Filter out duplicates
  const toInsert = [];
  let skippedDuplicatesCount = 0;
  const skippedSamples = [];

  for (let i = 0; i < rawQuestions.length; i++) {
    const q = rawQuestions[i];
    const normQ = normalizeQuestionText(q.question);
    const extId = (q.id || '').trim().toLowerCase();

    const isDuplicateQuestion = existingNormalizedQuestions.has(normQ);
    const isDuplicateExternalId = extId && existingExternalIds.has(extId);

    if (isDuplicateQuestion || isDuplicateExternalId) {
      skippedDuplicatesCount++;
      if (skippedSamples.length < 5) {
        skippedSamples.push(`[${q.id || i + 1}] "${q.question.substring(0, 50)}..."`);
      }
      continue;
    }

    // Mark as seen so duplicates inside the batch itself are also prevented
    existingNormalizedQuestions.add(normQ);
    if (extId) {
      existingExternalIds.add(extId);
    }

    const { mappedTopic, tags } = mapTopicAndTags(
      q.topic,
      q.subTopic,
      q.difficulty
    );

    toInsert.push({
      topic: mappedTopic,
      originalTopic: q.topic,
      subTopic: (q.subTopic || 'general').trim().toLowerCase(),
      difficulty: q.difficulty.trim().toLowerCase(),
      question: q.question.trim(),
      codeSnippet: q.codeSnippet || '',
      options: q.options.map((opt) => ({
        id: opt.id.trim().toLowerCase(),
        text: opt.text.trim(),
      })),
      correctOptionId: q.correctOptionId.trim().toLowerCase(),
      explanation: q.explanation.trim(),
      optionExplanations: q.optionExplanations || {},
      memoryTrick: q.memoryTrick || '',
      roast: q.roast || '',
      correctReaction: q.correctReaction || '',
      externalId: q.id || '',
      questionNumber: q.questionNumber || i + 1,
      tags,
    });
  }

  console.log(`\n📋 Duplication Check Results:`);
  console.log(`  Already existing / duplicate questions skipped : ${skippedDuplicatesCount}`);
  if (skippedSamples.length > 0) {
    console.log(`  Sample skipped questions:`);
    skippedSamples.forEach((sample) => console.log(`    ⚠️ ${sample}`));
  }
  console.log(`  New unique questions ready for import          : ${toInsert.length}`);

  // Step 4: Insert new questions
  if (toInsert.length > 0) {
    await Question.insertMany(toInsert);
    console.log(`\n✨ Successfully inserted ${toInsert.length} questions into MongoDB!`);
  } else {
    console.log('\nℹ️ No new questions to insert. All 300 questions already exist in database!');
  }

  // Step 5: Overall summary statistics
  const totalInDb = await Question.countDocuments();
  console.log(`\n🏆 Total Questions in Database Now: ${totalInDb}`);

  return {
    totalEvaluated: rawQuestions.length,
    insertedCount: toInsert.length,
    skippedDuplicatesCount,
    totalInDb,
  };
}

// Standalone execution wrapper
if (process.argv[1] && process.argv[1].endsWith('import300Questions.js')) {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern_quiz_db';
  console.log(`Connecting to MongoDB at: ${mongoUri}`);

  mongoose
    .connect(mongoUri, { autoIndex: true })
    .then(async () => {
      await import300Questions();
      await mongoose.disconnect();
      console.log('MongoDB disconnected. Import pipeline complete! 🔥\n');
      process.exit(0);
    })
    .catch((err) => {
      console.error('\n❌ Import Pipeline Failed:', err);
      process.exit(1);
    });
}
