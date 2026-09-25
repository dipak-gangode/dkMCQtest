import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle, Brain, X, Check } from 'lucide-react';

export const WrongAnswerReview = ({ review = [] }) => {
  const [expandedId, setExpandedId] = useState(review[0]?.questionId || null);

  if (!review || review.length === 0) {
    return (
      <div className="topic-card" style={{ textAlign: 'center', padding: '2rem' }}>
        <h3 style={{ color: 'var(--emerald-400)', marginBottom: '0.5rem' }}>
          🔥 Ek Bhi Galat Nahi! Full Perfection!
        </h3>
        <p style={{ color: 'var(--text-secondary)' }}>
          Kamaal kar diya bhidu! Saare questions sahi maar diye! Review karne ke liye koi galat answer nahi hai!
        </p>
      </div>
    );
  }

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <h3
        style={{
          fontSize: '1.35rem',
          fontWeight: 800,
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <AlertCircle size={22} color="var(--rose-400)" />
        <span>Galtiyon Ka Post-Mortem ({review.length} Questions)</span>
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {review.map((item, idx) => {
          const isExpanded = expandedId === item.questionId;

          return (
            <div key={item.questionId || idx} className="review-item">
              <button
                type="button"
                className="review-header"
                onClick={() => toggleExpand(item.questionId)}
                aria-expanded={isExpanded}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1, paddingRight: '1rem' }}>
                  <span
                    style={{
                      background: 'rgba(244, 63, 94, 0.2)',
                      color: 'var(--rose-400)',
                      fontWeight: 800,
                      fontSize: '0.8rem',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                    }}
                  >
                    Q{idx + 1}
                  </span>
                  <span style={{ fontWeight: 600, fontSize: '0.975rem' }}>
                    {item.question}
                  </span>
                </div>

                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {isExpanded && (
                <div className="review-body animate-fade-in">
                  {item.codeSnippet && (
                    <pre className="code-block" style={{ margin: '0.25rem 0 0.85rem' }}>
                      <code>{item.codeSnippet}</code>
                    </pre>
                  )}

                  <div className="answer-comparison">
                    <div className="compare-pill compare-pill-wrong">
                      <span className="compare-label compare-label-wrong">❌ Tera Answer</span>
                      <span className="compare-value">{item.selectedOptionText}</span>
                    </div>

                    <div className="compare-pill compare-pill-correct">
                      <span className="compare-label compare-label-correct">✅ Sahi Answer</span>
                      <span className="compare-value">{item.correctOptionText}</span>
                    </div>
                  </div>

                  <div
                    style={{
                      background: 'rgba(244, 63, 94, 0.1)',
                      borderLeft: '4px solid var(--rose-500)',
                      padding: '0.75rem 1rem',
                      borderRadius: '4px',
                      color: 'var(--rose-400)',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                    }}
                  >
                    😂 Bhai Roast: {item.reaction}
                  </div>

                  <div className="explanation-box">
                    <div style={{ marginBottom: '0.75rem' }}>
                      <strong style={{ color: 'var(--rose-400)' }}>❌ Kyun Galat Hua:</strong>
                      <p style={{ color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                        {item.whySelectedWrong}
                      </p>
                    </div>

                    <div style={{ marginBottom: '0.75rem' }}>
                      <strong style={{ color: 'var(--emerald-400)' }}>✅ Sahi Answer Kyun Sahi Hai:</strong>
                      <p style={{ color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                        {item.whyCorrectRight}
                      </p>
                    </div>

                    <div>
                      <strong style={{ color: 'var(--indigo-400)' }}>💡 Deep Concept:</strong>
                      <p style={{ color: 'var(--text-primary)', marginTop: '0.25rem' }}>
                        {item.explanation}
                      </p>
                    </div>
                  </div>

                  {item.memoryTrick && (
                    <div className="memory-trick-box">
                      <div className="memory-trick-header">
                        <Brain size={16} />
                        <span>Yaad Rakh:</span>
                      </div>
                      <div className="memory-trick-text" style={{ fontSize: '0.95rem' }}>
                        {item.memoryTrick}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WrongAnswerReview;
