import React from 'react';

export const QuestionCard = ({ question, difficulty, subTopic, codeSnippet }) => {
  const difficultyClass = `meta-difficulty-${difficulty || 'easy'}`;

  return (
    <div className="question-card animate-fade-in">
      <div className="question-meta-row">
        <span className={`meta-badge ${difficultyClass}`}>
          {difficulty}
        </span>
        {subTopic && <span className="meta-subtopic">#{subTopic}</span>}
      </div>

      <h2 className="question-text">{question}</h2>

      {codeSnippet && (
        <pre className="code-block">
          <code>{codeSnippet}</code>
        </pre>
      )}
    </div>
  );
};

export default QuestionCard;
