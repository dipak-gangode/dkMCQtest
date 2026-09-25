import assert from 'node:assert/strict';

async function verifyLiveApi() {
  console.log('🧪 Testing Live Server API Security & Integrity...\n');

  // 1. Health check
  const healthRes = await fetch('http://localhost:5000/api/health');
  assert.equal(healthRes.status, 200);
  const healthData = await healthRes.json();
  console.log('✅ Health Check Passed:', healthData.message);

  // 2. Topics check
  const topicsRes = await fetch('http://localhost:5000/api/topics');
  assert.equal(topicsRes.status, 200);
  const topicsData = await topicsRes.json();
  console.log(`✅ Topics Fetched: ${topicsData.totalTopics} topics available.`);

  // 3. Start Quiz Questions - Security verification
  const quizRes = await fetch('http://localhost:5000/api/quiz/questions?topic=mixed&count=10');
  assert.equal(quizRes.status, 200);
  const quizData = await quizRes.json();

  assert.equal(quizData.success, true);
  assert.ok(quizData.sessionId, 'SessionId must exist');
  assert.equal(quizData.questions.length, 10);

  console.log('\n🔒 Verifying Question Payload Security (No Answers Leaked):');
  for (let i = 0; i < quizData.questions.length; i++) {
    const q = quizData.questions[i];

    // Assert secret fields are strictly undefined
    assert.equal(q.correctOptionId, undefined, `Question ${i + 1} leaked correctOptionId!`);
    assert.equal(q.explanation, undefined, `Question ${i + 1} leaked explanation!`);
    assert.equal(q.optionExplanations, undefined, `Question ${i + 1} leaked optionExplanations!`);
    assert.equal(q.memoryTrick, undefined, `Question ${i + 1} leaked memoryTrick!`);
    assert.equal(q.roast, undefined, `Question ${i + 1} leaked roast!`);
    assert.equal(q.correctReaction, undefined, `Question ${i + 1} leaked correctReaction!`);

    // Check each option
    for (const opt of q.options) {
      assert.ok(opt.id, 'Option id missing');
      assert.ok(opt.text, 'Option text missing');
      assert.equal(opt.correctOptionId, undefined, 'Option leaked correctOptionId');
      assert.equal(opt.isCorrect, undefined, 'Option leaked isCorrect');
      assert.equal(opt.explanation, undefined, 'Option leaked explanation');
    }
  }
  console.log('✅ All 10 questions strictly verified: Zero answers or secrets leaked!');

  // 4. Test submitting an answer
  const sampleQ = quizData.questions[0];
  const sampleOpt = sampleQ.options[0];

  const answerRes = await fetch('http://localhost:5000/api/quiz/answer', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sessionId: quizData.sessionId,
      questionId: sampleQ.id,
      selectedOptionId: sampleOpt.id,
      timeSpentMs: 2500,
    }),
  });

  assert.equal(answerRes.status, 200);
  const answerData = await answerRes.json();
  assert.equal(answerData.success, true);
  assert.ok(typeof answerData.correct === 'boolean');
  assert.ok(answerData.correctOptionId, 'Answer API must reveal correctOptionId now');
  assert.ok(answerData.reaction, 'Reaction must exist');
  assert.ok(answerData.explanation, 'Explanation must exist');

  console.log('\n🎯 Answer Submission Test Passed:');
  console.log(`  Selected Option : ${answerData.selectedOptionId} ("${answerData.selectedOptionText}")`);
  console.log(`  Is Correct      : ${answerData.correct}`);
  console.log(`  Revealed Answer : ${answerData.correctOptionId} ("${answerData.correctOptionText}")`);
  console.log(`  Bhai Reaction   : "${answerData.reaction}"`);
  console.log(`  Explanation     : "${answerData.explanation.substring(0, 60)}..."`);

  // 5. Test alias queries: node.js
  const nodeAliasRes = await fetch('http://localhost:5000/api/quiz/questions?topic=node.js&count=5');
  assert.equal(nodeAliasRes.status, 200);
  const nodeAliasData = await nodeAliasRes.json();
  assert.equal(nodeAliasData.questions.length, 5);
  console.log('\n✅ Topic alias "node.js" successfully resolved and fetched 5 questions.');

  // 6. Test alias queries: web-api-auth
  const webApiAuthRes = await fetch('http://localhost:5000/api/quiz/questions?topic=web-api-auth&count=5');
  assert.equal(webApiAuthRes.status, 200);
  const webApiAuthData = await webApiAuthRes.json();
  assert.equal(webApiAuthData.questions.length, 5);
  console.log('✅ Topic alias "web-api-auth" successfully resolved and fetched 5 questions.');

  console.log('\n🎉 ALL LIVE API SECURITY & FUNCTIONALITY CHECKS PASSED 100%!\n');
}

verifyLiveApi().catch((err) => {
  console.error('\n❌ Verification Failed:', err);
  process.exit(1);
});
