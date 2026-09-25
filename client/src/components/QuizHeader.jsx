import React from 'react';
import { Timer, Compass } from 'lucide-react';
import StreakBadge from './StreakBadge.jsx';
import CoreCounter from './CoreCounter.jsx';

export const QuizHeader = ({
  topic,
  mode,
  timeRemaining,
  streak,
  cores,
  earnedCores = 0,
}) => {
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const isUrgent = mode === 'timed' && timeRemaining <= 30;

  return (
    <div className="quiz-header-bar">
      <div className="quiz-topic-indicator">
        <span className="quiz-topic-tag">{topic}</span>
        {mode === 'timed' ? (
          <div className={`quiz-timer-pill ${isUrgent ? 'quiz-timer-urgent' : ''}`}>
            <Timer size={16} />
            <span>{formatTime(timeRemaining)}</span>
          </div>
        ) : (
          <div className="quiz-timer-pill" title="Practice Mode (No time pressure)">
            <Compass size={15} />
            <span>Practice</span>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        <StreakBadge streak={streak} />
        <CoreCounter cores={cores} earned={earnedCores} />
      </div>
    </div>
  );
};

export default QuizHeader;
