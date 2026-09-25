import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env relative to server directory
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import { Question } from '../src/models/Question.js';
import { htmlQuestions } from './questions/html.js';
import { cssQuestions } from './questions/css.js';
import { javascriptQuestions } from './questions/javascript.js';
import { reactQuestions } from './questions/react.js';
import { nodejsQuestions } from './questions/nodejs.js';
import { expressQuestions } from './questions/express.js';
import { mongodbQuestions } from './questions/mongodb.js';
import { mernQuestions } from './questions/mern.js';
import { gitQuestions } from './questions/git.js';
import { restApiQuestions } from './questions/restApi.js';
import { authQuestions } from './questions/auth.js';
import { webFundamentalsQuestions } from './questions/webFundamentals.js';
import { import300Questions } from './import300Questions.js';

const allQuestions = [
  ...htmlQuestions,
  ...cssQuestions,
  ...javascriptQuestions,
  ...reactQuestions,
  ...nodejsQuestions,
  ...expressQuestions,
  ...mongodbQuestions,
  ...mernQuestions,
  ...gitQuestions,
  ...restApiQuestions,
  ...authQuestions,
  ...webFundamentalsQuestions,
];

async function seedDatabase() {
  console.log('\n🚀 Seeding Quiz Database...\n');

  const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern_quiz_db';

  try {
    await mongoose.connect(mongoUri, { autoIndex: true });
    console.log(`Connected to MongoDB at ${mongoUri}`);

    // Validate data integrity before inserting
    const seenQuestions = new Set();
    const validatedQuestions = [];

    for (let i = 0; i < allQuestions.length; i++) {
      const q = allQuestions[i];

      // Validate core fields
      if (!q.question || !q.topic || !q.difficulty || !q.correctOptionId) {
        throw new Error(`Validation Error: Question at index ${i} is missing required fields!`);
      }

      if (!Array.isArray(q.options) || q.options.length < 2) {
        throw new Error(`Validation Error: Question "${q.question}" has less than 2 options!`);
      }

      // Validate that correctOptionId actually matches one of the option IDs
      const hasValidCorrectOption = q.options.some((opt) => opt.id === q.correctOptionId);
      if (!hasValidCorrectOption) {
        throw new Error(
          `Validation Error: correctOptionId "${q.correctOptionId}" not found in options for question "${q.question}"!`
        );
      }

      // Check duplicates (topic + question + codeSnippet)
      const uniqueKey = `${q.topic}:::${q.question.trim().toLowerCase()}:::${(q.codeSnippet || '').trim().toLowerCase()}`;
      if (seenQuestions.has(uniqueKey)) {
        console.warn(`⚠️ Warning: Duplicate question detected and skipped: "${q.question.substring(0, 40)}..."`);
        continue;
      }
      seenQuestions.add(uniqueKey);
      validatedQuestions.push(q);
    }

    console.log(`\n📋 Validated ${validatedQuestions.length} unique questions.`);

    // Clear existing questions to ensure clean state
    await Question.deleteMany({});
    console.log('Cleared existing questions collection.');

    // Insert all validated base questions
    await Question.insertMany(validatedQuestions);
    console.log(`Inserted ${validatedQuestions.length} base modular questions.`);

    // Import 300 JSON questions with validation and duplicate prevention
    await import300Questions({ isSeedPipeline: true });

    // Compute topic statistics
    const stats = await Question.aggregate([
      {
        $group: {
          _id: '$topic',
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    const topicLabels = {
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      react: 'React',
      nodejs: 'Node.js',
      express: 'Express',
      mongodb: 'MongoDB',
      mern: 'MERN',
      git: 'Git/GitHub',
      'rest-api': 'REST API',
      auth: 'Authentication',
      'web-fundamentals': 'Web Fundamentals',
    };

    console.log('\n📊 Seeding Statistics by Topic:');
    console.log('──────────────────────────────────────');
    let totalCount = 0;
    stats.forEach((st) => {
      const label = (topicLabels[st._id] || st._id).padEnd(20, ' ');
      console.log(`  ${label} : ${st.count}`);
      totalCount += st.count;
    });
    console.log('──────────────────────────────────────');
    console.log(`  Total Questions      : ${totalCount}`);
    console.log('\n🔥 Database ready bhidu! Sab questions mast tarike se seed ho gaye! 🚀\n');
  } catch (error) {
    console.error(`\n❌ Seeding Failed: ${error.message}\n`, error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
  }
}

seedDatabase();
