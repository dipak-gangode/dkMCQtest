import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Flame, Diamond, Clock, Target, CheckCircle2, XCircle } from 'lucide-react';

export const ResultSummary = ({ result }) => {
  const {
    totalQuestions,
    correct,
    wrong,
    accuracy,
    cores,
    bestStreak,
    timeTakenSeconds,
    badge,
  } = result;

  useEffect(() => {
    // Fire celebratory confetti if accuracy is good!
    if (accuracy >= 60) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#6366f1', '#10b981', '#f59e0b', '#06b6d4'],
        });
      } catch (e) {
        // Fallback
      }
    }
  }, [accuracy]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    if (m === 0) return `${s}s`;
    return `${m}m ${s}s`;
  };

  return (
    <div className="result-hero-card animate-pop">
      <div className="hero-pill" style={{ margin: '0 auto 1rem' }}>
        🎉 QUIZ COMPLETE BHIDU 🎉
      </div>

      <div className="result-badge-container">
        <div className="result-badge-icon animate-flame">{badge.icon}</div>
        <h2 className="result-badge-title">{badge.title}</h2>
        <span className="brand-badge">{badge.range} Accuracy</span>
        <p className="result-badge-commentary">"{badge.bhaiMessage}"</p>
      </div>

      <div className="result-stats-grid">
        <div className="result-stat-box">
          <div className="result-stat-num" style={{ color: 'var(--cyan-400)' }}>
            {correct} / {totalQuestions}
          </div>
          <div className="result-stat-label">Total Score</div>
        </div>

        <div className="result-stat-box">
          <div
            className="result-stat-num"
            style={{
              color: accuracy >= 70 ? 'var(--emerald-400)' : 'var(--amber-400)',
            }}
          >
            {accuracy}%
          </div>
          <div className="result-stat-label">Accuracy</div>
        </div>

        <div className="result-stat-box">
          <div className="result-stat-num" style={{ color: 'var(--purple-400)' }}>
            💎 {cores}
          </div>
          <div className="result-stat-label">Cores Earned</div>
        </div>

        <div className="result-stat-box">
          <div className="result-stat-num" style={{ color: 'var(--amber-400)' }}>
            🔥 {bestStreak}
          </div>
          <div className="result-stat-label">Best Streak</div>
        </div>

        <div className="result-stat-box">
          <div className="result-stat-num" style={{ color: 'var(--text-secondary)' }}>
            ⏱️ {formatTime(timeTakenSeconds)}
          </div>
          <div className="result-stat-label">Time Taken</div>
        </div>
      </div>
    </div>
  );
};

export default ResultSummary;
