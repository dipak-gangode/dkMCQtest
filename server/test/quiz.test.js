import { test, describe, before, after } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import app from '../src/app.js';
import { connectDB } from '../src/config/db.js';

describe('MERN Quiz API & Roast Engine Test Suite', () => {
  let sessionId = '';
  let sampleQuestionId = '';
  let sampleOptions = [];

  before(async () => {
    await connectDB();
  });

  after(async () => {
    await mongoose.disconnect();
  });

  test('GET /api/health should return 200 with server status', async () => {
    const res = await request(app).get('/api/health');
    assert.equal(res.status, 200);
    assert.equal(res.body.status, 'ok');
    assert.ok(res.body.message.includes('Bhai'));
  });

  test('GET /api/topics should return list of topics with question counts', async () => {
    const res = await request(app).get('/api/topics');
    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.ok(Array.isArray(res.body.topics));
    assert.ok(res.body.topics.length >= 10);

    const jsTopic = res.body.topics.find((t) => t.id === 'javascript');
    assert.ok(jsTopic);
    assert.equal(jsTopic.name, 'JavaScript');
    assert.ok(jsTopic.questionCount >= 30);
  });

  test('GET /api/quiz/questions should start quiz and NOT leak correct answers (Answer Security)', async () => {
    const res = await request(app)
      .get('/api/quiz/questions')
      .query({ topic: 'javascript', difficulty: 'easy', count: 5 });

    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.ok(res.body.sessionId);
    assert.equal(res.body.totalQuestions, 5);
    assert.equal(res.body.questions.length, 5);

    sessionId = res.body.sessionId;
    sampleQuestionId = res.body.questions[0].id;
    sampleOptions = res.body.questions[0].options;

    // CRITICAL SECURITY ASSERTION: correctOptionId, explanation, optionExplanations, memoryTrick, roast, correctReaction MUST NOT EXIST
    for (const q of res.body.questions) {
      assert.equal(
        q.correctOptionId,
        undefined,
        'CRITICAL SECURITY FAILURE: correctOptionId was leaked in questions response!'
      );
      assert.equal(
        q.explanation,
        undefined,
        'CRITICAL SECURITY FAILURE: explanation was leaked in questions response!'
      );
      assert.equal(
        q.optionExplanations,
        undefined,
        'CRITICAL SECURITY FAILURE: optionExplanations was leaked in questions response!'
      );
      assert.equal(
        q.memoryTrick,
        undefined,
        'CRITICAL SECURITY FAILURE: memoryTrick was leaked in questions response!'
      );
      assert.equal(
        q.roast,
        undefined,
        'CRITICAL SECURITY FAILURE: roast was leaked in questions response!'
      );
      assert.equal(
        q.correctReaction,
        undefined,
        'CRITICAL SECURITY FAILURE: correctReaction was leaked in questions response!'
      );

      // Verify options are strictly { id, text }
      for (const opt of q.options) {
        assert.ok(opt.id, 'Option id must exist');
        assert.ok(opt.text, 'Option text must exist');
        assert.equal(opt.correctOptionId, undefined, 'Option leaked correctOptionId');
        assert.equal(opt.isCorrect, undefined, 'Option leaked isCorrect');
        assert.equal(opt.explanation, undefined, 'Option leaked explanation');
      }
    }
  });

  test('POST /api/quiz/answer should evaluate answer, update score/streak/cores, and return roast/reaction', async () => {
    assert.ok(sessionId, 'SessionId should be set');
    assert.ok(sampleQuestionId, 'QuestionId should be set');
    assert.ok(sampleOptions.length >= 2, 'Options should exist');

    const chosenOptionId = sampleOptions[0].id;

    const res = await request(app)
      .post('/api/quiz/answer')
      .send({
        sessionId,
        questionId: sampleQuestionId,
        selectedOptionId: chosenOptionId,
        timeSpentMs: 3500,
      });

    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.equal(typeof res.body.correct, 'boolean');
    assert.ok(res.body.reaction, 'Roast reaction must exist');
    assert.ok(res.body.correctOptionId, 'Correct option must be revealed now');
    assert.ok(res.body.explanation, 'Explanation must be shown');
    assert.equal(typeof res.body.score, 'number');
    assert.equal(typeof res.body.cores, 'number');
    assert.equal(typeof res.body.streak, 'number');

    if (res.body.correct) {
      assert.equal(res.body.score, 1);
      assert.equal(res.body.streak, 1);
      assert.ok(res.body.cores >= 100);
    } else {
      assert.equal(res.body.score, 0);
      assert.equal(res.body.streak, 0);
      assert.ok(res.body.whySelectedWrong, 'Why selected was wrong must be shown on incorrect answer');
    }
  });

  test('POST /api/quiz/answer should reject duplicate submission on same question', async () => {
    const chosenOptionId = sampleOptions[0].id;

    const res = await request(app)
      .post('/api/quiz/answer')
      .send({
        sessionId,
        questionId: sampleQuestionId,
        selectedOptionId: chosenOptionId,
      });

    assert.equal(res.status, 400);
    assert.equal(res.body.success, false);
    assert.ok(res.body.message.includes('pehle hi attempt'));
  });

  test('POST /api/quiz/answer should reject invalid questionId', async () => {
    const res = await request(app)
      .post('/api/quiz/answer')
      .send({
        sessionId,
        questionId: 'invalid-id-xyz',
        selectedOptionId: 'a',
      });

    assert.equal(res.status, 400);
    assert.equal(res.body.success, false);
  });

  test('POST /api/quiz/finish should calculate accuracy, performance badge, and return review list', async () => {
    const res = await request(app)
      .post('/api/quiz/finish')
      .send({ sessionId });

    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.equal(typeof res.body.accuracy, 'number');
    assert.ok(res.body.badge);
    assert.ok(res.body.badge.title);
    assert.ok(res.body.badge.icon);
    assert.ok(res.body.badge.bhaiMessage);
    assert.ok(Array.isArray(res.body.review));
    assert.ok(Array.isArray(res.body.weakTopics));
  });

  test('GET /api/quiz/questions with non-existent topic should return 404', async () => {
    const res = await request(app)
      .get('/api/quiz/questions')
      .query({ topic: 'quantum-computing-xyz', count: 10 });

    assert.equal(res.status, 404);
    assert.equal(res.body.success, false);
    assert.ok(res.body.message.includes('questions abhi nahi mile'));
  });

  test('GET /api/quiz/questions with topic alias "node.js" should resolve successfully', async () => {
    const res = await request(app)
      .get('/api/quiz/questions')
      .query({ topic: 'node.js', count: 5 });

    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.equal(res.body.questions.length, 5);
    for (const q of res.body.questions) {
      assert.equal(q.correctOptionId, undefined);
    }
  });

  test('Database should have 300 JSON questions with preserved fields and 555 total questions', async () => {
    const { Question } = await import('../src/models/Question.js');
    const totalCount = await Question.countDocuments();
    assert.equal(totalCount, 555, 'Total questions should be 255 base + 300 imported = 555');

    // Verify first imported question
    const q1 = await Question.findOne({ externalId: 'mern-mcq-001' }).select(
      '+correctOptionId +explanation +optionExplanations +memoryTrick +roast +correctReaction'
    );
    assert.ok(q1, 'mern-mcq-001 must exist in DB');
    assert.equal(q1.questionNumber, 1);
    assert.equal(q1.topic, 'html');
    assert.equal(q1.originalTopic, 'html');
    assert.equal(q1.correctOptionId, 'a');
    assert.ok(q1.roast, 'Roast field must be preserved');
    assert.ok(q1.correctReaction, 'correctReaction field must be preserved');
    assert.ok(q1.memoryTrick, 'memoryTrick field must be preserved');
  });

  test('Re-running import should strictly prevent duplicates (0 new inserted)', async () => {
    const { import300Questions } = await import('../seed/import300Questions.js');
    const result = await import300Questions();

    assert.equal(result.totalEvaluated, 300);
    assert.equal(result.insertedCount, 0, 'No duplicates should be inserted');
    assert.equal(result.skippedDuplicatesCount, 300, 'All 300 existing records should be skipped');
    assert.equal(result.totalInDb, 555);
  });
});
