import React from 'react';
import { Target, Zap } from 'lucide-react';

export const TopicPerformance = ({ weakTopics = [], onPracticeWeak }) => {
  if (!weakTopics || weakTopics.length === 0) return null;

  const weakTopicsList = weakTopics.slice(0, 5); // top 5 weak topics

  return (
    <div className="weak-topics-card animate-slide-up">
      <div className="weak-topics-title">
        <Target size={20} />
        <span>Bhai, Thoda Yahan Practice Maar (Weak Areas):</span>
      </div>

      <div className="weak-topics-list">
        {weakTopicsList.map((wt, idx) => (
          <div key={idx} className="weak-topic-pill">
            <span>🔸 {wt.topic.toUpperCase()}: #{wt.subTopic}</span>
            <span style={{ color: 'var(--rose-400)', marginLeft: '0.4rem', fontWeight: 800 }}>
              ({wt.wrongCount} Galat)
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="btn btn-cta"
        onClick={() => onPracticeWeak(weakTopicsList.map((wt) => wt.topic))}
        style={{ width: '100%' }}
      >
        <Zap size={20} />
        <span>Weak Topics Phodo 🔥</span>
      </button>
    </div>
  );
};

export default TopicPerformance;
