import React from 'react';
import { Check, X, Loader2 } from 'lucide-react';

const letterLabels = ['A', 'B', 'C', 'D', 'E', 'F'];

export const AnswerOption = ({
  option,
  index,
  isSelected,
  isCorrect,
  isCorrectRevealed,
  isLocked,
  isEvaluating,
  onSelect,
}) => {
  const letter = letterLabels[index] || option.id.toUpperCase();

  let stateClass = '';
  let statusIcon = null;

  if (isLocked) {
    if (isSelected) {
      if (isEvaluating) {
        stateClass = 'state-evaluating';
        statusIcon = <Loader2 size={18} className="animate-spin" />;
      } else if (isCorrect) {
        stateClass = 'state-correct animate-pop';
        statusIcon = <Check size={18} color="#10b981" strokeWidth={3} />;
      } else {
        stateClass = 'state-wrong animate-shake';
        statusIcon = <X size={18} color="#f43f5e" strokeWidth={3} />;
      }
    } else if (isCorrectRevealed) {
      // Reveal the correct option in green even if user selected something else
      stateClass = 'state-correct animate-pop';
      statusIcon = <Check size={18} color="#10b981" strokeWidth={3} />;
    } else {
      stateClass = 'state-dimmed';
    }
  }

  const handleClick = () => {
    if (!isLocked) {
      onSelect(option.id);
    }
  };

  return (
    <button
      type="button"
      className={`option-btn ${stateClass}`}
      onClick={handleClick}
      disabled={isLocked}
      aria-label={`Option ${letter}: ${option.text}`}
      aria-pressed={isSelected}
    >
      <div className="option-content">
        <span className="option-key">{letter}</span>
        <span className="option-text">{option.text}</span>
      </div>

      {statusIcon && <div className="option-status-icon">{statusIcon}</div>}
    </button>
  );
};

export default AnswerOption;
