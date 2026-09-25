import React from 'react';
import { Flame } from 'lucide-react';

export const StreakBadge = ({ streak }) => {
  const isHighStreak = streak >= 3;

  return (
    <div className={`streak-badge ${isHighStreak ? 'streak-active' : ''}`}>
      <Flame
        size={17}
        className={isHighStreak ? 'animate-flame' : ''}
        style={{ color: isHighStreak ? 'var(--amber-400)' : 'var(--text-muted)' }}
      />
      <span>{streak} Streak</span>
      {isHighStreak && (
        <span
          style={{
            fontSize: '0.7rem',
            background: 'rgba(245, 158, 11, 0.3)',
            padding: '0.1rem 0.35rem',
            borderRadius: '4px',
          }}
        >
          BONUS!
        </span>
      )}
    </div>
  );
};

export default StreakBadge;
