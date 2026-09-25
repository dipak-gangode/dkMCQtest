import fs from 'node:fs';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

import { Question } from '../src/models/Question.js';

async function checkDuplicates() {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern_quiz_db';
  await mongoose.connect(mongoUri);

  const existingQuestions = await Question.find({});
  console.log(`Existing questions in DB: ${existingQuestions.length}`);

  const raw300 = fs.readFileSync('../mern_300_mcq_questions.json', 'utf8');
  const json300 = JSON.parse(raw300);
  console.log(`Questions in 300 json: ${json300.questions.length}`);

  // Normalize helper
  const normalize = (str) => (str || '').trim().toLowerCase().replace(/[`'".,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s+/g, ' ');

  const existingByNormalizedQuestion = new Map();
  existingQuestions.forEach(q => {
    existingByNormalizedQuestion.set(normalize(q.question), q);
  });

  let normalizedMatches = 0;
  const duplicateDetails = [];
  const newQuestions = [];

  json300.questions.forEach((q, idx) => {
    const norm = normalize(q.question);
    if (existingByNormalizedQuestion.has(norm)) {
      normalizedMatches++;
      const existing = existingByNormalizedQuestion.get(norm);
      duplicateDetails.push({
        index300: idx + 1,
        id300: q.id,
        question300: q.question,
        existingId: existing._id,
        existingTopic: existing.topic,
        topic300: q.topic
      });
    } else {
      newQuestions.push(q);
    }
  });

  console.log(`\nNormalized duplicate matches found: ${normalizedMatches}`);
  console.log(`New non-duplicate questions: ${newQuestions.length}`);

  if (duplicateDetails.length > 0) {
    console.log('\nSample duplicate matches:');
    duplicateDetails.slice(0, 15).forEach(d => {
      console.log(`  [#${d.index300} ${d.id300}] (${d.topic300}) vs existing (${d.existingTopic}): "${d.question300}"`);
    });
  }

  await mongoose.disconnect();
}

checkDuplicates().catch(console.error);
