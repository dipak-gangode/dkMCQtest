import fs from 'node:fs';

import path from 'node:path';
const raw300 = fs.readFileSync(path.resolve('../mern_300_mcq_questions.json'), 'utf8');
const json300 = JSON.parse(raw300);

console.log('Sample questions across topics in 300 JSON:');
const byTopic = {};
json300.questions.forEach(q => {
  if (!byTopic[q.topic]) byTopic[q.topic] = [];
  byTopic[q.topic].push(q);
});

Object.keys(byTopic).forEach(topic => {
  console.log(`\nTopic: ${topic} (Total: ${byTopic[topic].length})`);
  byTopic[topic].slice(0, 3).forEach(q => {
    console.log(` - [${q.id}] (${q.difficulty}) ${q.question}`);
  });
});
