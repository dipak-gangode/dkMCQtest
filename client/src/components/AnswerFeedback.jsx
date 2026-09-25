import React from 'react';
import ReactionMessage from './ReactionMessage.jsx';
import ExplanationCard from './ExplanationCard.jsx';
import MemoryTrick from './MemoryTrick.jsx';
import NextQuestionButton from './NextQuestionButton.jsx';

export const AnswerFeedback = ({
  feedback,
  isLastQuestion,
  onNext,
  isSubmitting,
}) => {
  if (!feedback) return null;

  const {
    correct,
    selectedOptionText,
    correctOptionText,
    reaction,
    explanation,
    whySelectedWrong,
    whyCorrectRight,
    memoryTrick,
  } = feedback;

  return (
    <div
      className={`feedback-card animate-slide-up ${
        correct ? 'correct-theme' : 'wrong-theme'
      }`}
    >
      {/* 1. Bhai-style Roast / Reaction */}
      <ReactionMessage reaction={reaction} isCorrect={correct} />

      {/* 2. Your Answer vs Correct Answer Comparison */}
      <div className="answer-comparison">
        {!correct && (
          <div className="compare-pill compare-pill-wrong">
            <span className="compare-label compare-label-wrong">❌ Tera Answer</span>
            <span className="compare-value">{selectedOptionText}</span>
          </div>
        )}

        <div className="compare-pill compare-pill-correct">
          <span className="compare-label compare-label-correct">
            {correct ? '✅ Bilkul Sahi Jawab' : '✅ Sahi Answer'}
          </span>
          <span className="compare-value">{correctOptionText}</span>
        </div>
      </div>

      {/* 3. Detailed Educational Breakdown */}
      <ExplanationCard
        isCorrect={correct}
        explanation={explanation}
        whySelectedWrong={whySelectedWrong}
        whyCorrectRight={whyCorrectRight}
      />

      {/* 4. Memory Trick */}
      {memoryTrick && <MemoryTrick trick={memoryTrick} />}

      {/* 5. Encouraging Bhai signoff & Next Question CTA */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic' }}>
          {correct ? '🔥 Momentum bana ke rakh, agla wala bhi phod!' : 'Chal koi nahi bhidu 😂 galti se hi seekhte hain!'}
        </div>
        <NextQuestionButton
          isLastQuestion={isLastQuestion}
          onNext={onNext}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
};

export default AnswerFeedback;
