import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import existing 12 questions files
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

const existingQuestions = [
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

console.log(`Existing seed questions: ${existingQuestions.length}`);

// Load 300 JSON questions
const jsonPath = path.resolve(__dirname, '../../mern_300_mcq_questions.json');
if (!fs.existsSync(jsonPath)) {
  console.error(`Cannot find file at: ${jsonPath}`);
  process.exit(1);
}

const raw = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(raw);
console.log(`Loaded JSON: "${data.datasetName}", total questions: ${data.questions.length}`);

// Validation
const errors = [];
const normalize = (str) =>
  (str || '')
    .trim()
    .toLowerCase()
    .replace(/[`'".,\/#!$%\^&\*;:{}=\-_`~()<>]/g, '')
    .replace(/\s+/g, ' ');

const existingSet = new Set();
existingQuestions.forEach((q) => {
  existingSet.add(normalize(q.question));
});

const seenIn300 = new Set();
let duplicatesWithin300 = 0;
let duplicatesAgainstExisting = 0;
const validToImport = [];

data.questions.forEach((q, idx) => {
  const num = idx + 1;
  const qId = q.id || `q-${num}`;

  // 1. Required fields
  if (!q.question || typeof q.question !== 'string' || !q.question.trim()) {
    errors.push(`[#${num} ${qId}] Missing question text`);
  }
  if (!q.topic || typeof q.topic !== 'string') {
    errors.push(`[#${num} ${qId}] Missing topic`);
  }
  if (!q.difficulty || !['easy', 'medium', 'hard', 'interview'].includes(q.difficulty.toLowerCase())) {
    errors.push(`[#${num} ${qId}] Invalid difficulty: ${q.difficulty}`);
  }
  if (!Array.isArray(q.options) || q.options.length < 2) {
    errors.push(`[#${num} ${qId}] Missing or insufficient options: ${q.options?.length}`);
  } else {
    // Check option IDs
    const optionIds = q.options.map((o) => o.id);
    if (!q.correctOptionId || !optionIds.includes(q.correctOptionId)) {
      errors.push(`[#${num} ${qId}] correctOptionId '${q.correctOptionId}' not in options [${optionIds.join(', ')}]`);
    }
  }

  if (!q.explanation || typeof q.explanation !== 'string') {
    errors.push(`[#${num} ${qId}] Missing explanation`);
  }

  // 2. Duplicate checking
  const normQ = normalize(q.question);

  if (seenIn300.has(normQ)) {
    duplicatesWithin300++;
    console.log(`⚠️ Duplicate within 300 JSON found: [#${num} ${qId}] "${q.question.substring(0, 50)}..."`);
  } else {
    seenIn300.add(normQ);

    if (existingSet.has(normQ)) {
      duplicatesAgainstExisting++;
      console.log(`⚠️ Duplicate against existing seed found: [#${num} ${qId}] "${q.question.substring(0, 50)}..."`);
    } else {
      validToImport.push(q);
    }
  }
});

console.log('\n--- VALIDATION SUMMARY ---');
console.log(`Total 300 JSON records evaluated: ${data.questions.length}`);
console.log(`Validation errors: ${errors.length}`);
if (errors.length > 0) {
  console.log('Errors:', errors);
}
console.log(`Duplicates within 300 JSON: ${duplicatesWithin300}`);
console.log(`Duplicates against existing 255 questions: ${duplicatesAgainstExisting}`);
console.log(`Valid unique new questions ready for import: ${validToImport.length}`);
