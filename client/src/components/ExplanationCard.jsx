import React from 'react';
import { HelpCircle, CheckCircle, XCircle } from 'lucide-react';

export const ExplanationCard = ({
  isCorrect,
  explanation,
  whySelectedWrong,
  whyCorrectRight,
}) => {
  return (
    <div className="explanation-box">
      {!isCorrect && whySelectedWrong && (
        <div style={{ marginBottom: '0.85rem' }}>
          <div
            className="explanation-heading"
            style={{ color: 'var(--rose-400)' }}
          >
            <XCircle size={16} />
            <span>Kyun Galat Hua?</span>
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>{whySelectedWrong}</p>
        </div>
      )}

      {whyCorrectRight && (
        <div style={{ marginBottom: '0.85rem' }}>
          <div
            className="explanation-heading"
            style={{ color: 'var(--emerald-400)' }}
          >
            <CheckCircle size={16} />
            <span>Sahi Answer Kyun Sahi Hai?</span>
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>{whyCorrectRight}</p>
        </div>
      )}

      <div>
        <div
          className="explanation-heading"
          style={{ color: 'var(--indigo-400)' }}
        >
          <HelpCircle size={16} />
          <span>Concept Samajh:</span>
        </div>
        <p style={{ color: 'var(--text-primary)' }}>{explanation}</p>
      </div>
    </div>
  );
};

export default ExplanationCard;
