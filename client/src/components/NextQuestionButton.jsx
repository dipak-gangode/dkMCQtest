import React, { useEffect, useRef } from 'react';
import { ArrowRight, Trophy } from 'lucide-react';

export const NextQuestionButton = ({ isLastQuestion, onNext, isSubmitting }) => {
  const buttonRef = useRef(null);

  // Auto-focus next button so pressing Space or Enter immediately proceeds
  useEffect(() => {
    buttonRef.current?.focus();
  }, []);

  return (
    <div className="feedback-actions">
      <button
        ref={buttonRef}
        type="button"
        className="btn btn-primary"
        onClick={onNext}
        disabled={isSubmitting}
        style={{
          padding: '0.85rem 1.75rem',
          fontSize: '1.05rem',
          fontWeight: 700,
        }}
      >
        {isSubmitting ? (
          <span>Loading Results...</span>
        ) : isLastQuestion ? (
          <>
            <span>Final Score & Roast Dekho</span>
            <Trophy size={18} />
          </>
        ) : (
          <>
            <span>Agla Question Phod</span>
            <ArrowRight size={18} />
          </>
        )}
      </button>
    </div>
  );
};

export default NextQuestionButton;
