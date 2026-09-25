import React from 'react';

export const ReactionMessage = ({ reaction, isCorrect }) => {
  const emoji = isCorrect ? '🔥' : '😂';

  return (
    <div
      className="roast-header animate-slide-up"
      role="status"
      aria-live="polite"
    >
      <div className="roast-emoji" aria-hidden="true">
        {emoji}
      </div>
      <div>
        <div
          className={`roast-message ${
            isCorrect ? 'roast-correct' : 'roast-wrong'
          }`}
        >
          {reaction}
        </div>
      </div>
    </div>
  );
};

export default ReactionMessage;
