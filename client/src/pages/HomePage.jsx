import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, Sparkles, Zap, Brain, Trophy, Flame } from 'lucide-react';
import api from '../services/api.js';
import TopicCard from '../components/TopicCard.jsx';
import LoadingState from '../components/LoadingState.jsx';
import ErrorState from '../components/ErrorState.jsx';

export const HomePage = () => {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTopicsList = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getTopics();
      setTopics(data.topics || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopicsList();
  }, []);

  const handleSelectTopic = (topicId) => {
    navigate(`/setup?topic=${topicId}`);
  };

  const handleStartQuickQuiz = () => {
    navigate('/setup?topic=mixed');
  };

  return (
    <div className="container">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-pill">
          <Sparkles size={14} />
          <span>India Ka Sabse Dhasu MERN Practice Platform</span>
        </div>

        <h1 className="hero-title">
          Code Seekho. Questions Phodo.{' '}
          <span className="gradient-text">Cores Kamao. 🔥</span>
        </h1>

        <p className="hero-subtitle">
          MERN Stack aur Web Development ke MCQs practice karo — galat answer pe roast bhi milega aur concept bhi samajh aayega. 😂
        </p>

        <div className="hero-buttons">
          <button
            type="button"
            className="btn btn-cta"
            onClick={handleStartQuickQuiz}
          >
            <Rocket size={20} />
            <span>Start Quiz 🚀</span>
          </button>

          <a href="#topics-section" className="btn btn-secondary" style={{ padding: '0.95rem 1.75rem', fontSize: '1.05rem' }}>
            <span>Explore Topics 👇</span>
          </a>
        </div>

        {/* STATS HIGHLIGHT ROW */}
        <div className="hero-stats-row">
          <div className="hero-stat-card">
            <div className="hero-stat-val">
              {topics.length > 0
                ? `${topics.reduce((sum, t) => sum + (t.questionCount || 0), 0)}+`
                : '550+'}
            </div>
            <div className="hero-stat-label">MCQ Questions</div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-val">{topics.length || 12}</div>
            <div className="hero-stat-label">Tech Topics</div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-val">100%</div>
            <div className="hero-stat-label">Bhai Roasting 😂</div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-val">💎 Cores</div>
            <div className="hero-stat-label">Gaming Rewards</div>
          </div>
        </div>
      </section>

      {/* QUICK MIXED CHALLENGE BANNER */}
      <div
        className="topic-card"
        style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.1))',
          borderColor: 'rgba(99, 102, 241, 0.35)',
          marginBottom: '3rem',
          padding: '1.75rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <Zap size={20} color="var(--amber-400)" />
              <span style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--amber-400)', textTransform: 'uppercase' }}>
                Quick Challenge
              </span>
            </div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Full Stack Mixed Blitz: 10 Sawaal, Zero Bakwaas!
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
              HTML, CSS, JS, React, Node, Mongo, Git sabka test ek sath! Dimaag ke ghode daudao!
            </p>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate('/setup?topic=mixed&count=10')}
            style={{ padding: '0.75rem 1.5rem', fontWeight: 700 }}
          >
            <Flame size={18} />
            <span>Phodna Shuru Karo</span>
          </button>
        </div>
      </div>

      {/* TOPICS SECTION */}
      <section id="topics-section" style={{ paddingBottom: '3rem' }}>
        <div className="section-header">
          <div>
            <h2 className="section-title">Explore Topics</h2>
            <p className="section-subtitle">
              Apni pasand ka topic chuno aur conceptual questions se dimaag kholo!
            </p>
          </div>
        </div>

        {loading ? (
          <LoadingState message="Topics aur statistics load ho rahe hain..." />
        ) : error ? (
          <ErrorState
            message={error.message}
            bhaiRoast={error.bhaiRoast}
            onRetry={fetchTopicsList}
          />
        ) : (
          <div className="topics-grid">
            {topics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                onSelect={handleSelectTopic}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
