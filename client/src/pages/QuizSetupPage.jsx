import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Flame, Compass, Timer, Sparkles, AlertCircle } from 'lucide-react';
import { useQuiz } from '../context/QuizContext.jsx';
import api from '../services/api.js';
import DifficultySelector from '../components/DifficultySelector.jsx';
import LoadingState from '../components/LoadingState.jsx';
import ErrorState from '../components/ErrorState.jsx';

const availableTopicsList = [
  { id: 'mixed', label: '🔥 Mixed (All Topics)' },
  { id: 'javascript', label: '⚡ JavaScript' },
  { id: 'react', label: '⚛️ React' },
  { id: 'nodejs', label: '🟢 Node.js' },
  { id: 'express', label: '⚙️ Express.js' },
  { id: 'mongodb', label: '🍃 MongoDB' },
  { id: 'mern', label: '📦 MERN Fullstack' },
  { id: 'html', label: '🌐 HTML' },
  { id: 'css', label: '🎨 CSS' },
  { id: 'git', label: '🌿 Git / GitHub' },
  { id: 'rest-api', label: '🔌 REST API' },
  { id: 'auth', label: '🔒 Auth & JWT' },
  { id: 'web-fundamentals', label: '🌍 Web Fundamentals' },
];

const countsList = [10, 20, 30, 50];

export const QuizSetupPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { startQuiz } = useQuiz();

  const initialTopic = searchParams.get('topic') || 'mixed';
  const initialDiff = searchParams.get('difficulty') || 'mixed';
  const initialCount = parseInt(searchParams.get('count'), 10) || 10;

  const [selectedTopic, setSelectedTopic] = useState(initialTopic);
  const [selectedDifficulty, setSelectedDifficulty] = useState(initialDiff);
  const [selectedCount, setSelectedCount] = useState(initialCount);
  const [selectedMode, setSelectedMode] = useState('practice'); // 'practice' | 'timed'

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleStart = async (e) => {
    e?.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await startQuiz({
        topic: selectedTopic,
        difficulty: selectedDifficulty,
        count: selectedCount,
        mode: selectedMode,
      });
      navigate('/play');
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingState message="Quiz questions arrange ho rahe hain... dimag ready rakh bhidu 🧠" />;
  }

  return (
    <div className="container">
      <div className="setup-container animate-fade-in">
        <div className="setup-header">
          <div className="hero-pill">
            <Sparkles size={14} />
            <span>Setup Your Arena</span>
          </div>
          <h1>Customize Your Quiz</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Topic, difficulty aur mode chuno — fir dekhte hain dimaag kitna chalta hai!
          </p>
        </div>

        {error && (
          <div
            style={{
              background: 'rgba(244, 63, 94, 0.15)',
              border: '1px solid rgba(244, 63, 94, 0.4)',
              color: 'var(--rose-400)',
              padding: '0.85rem 1rem',
              borderRadius: 'var(--radius-md)',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
            }}
          >
            <AlertCircle size={20} />
            <div>
              <strong>{error.message}</strong>
              {error.bhaiRoast && <div style={{ fontSize: '0.85rem' }}>{error.bhaiRoast}</div>}
            </div>
          </div>
        )}

        <form onSubmit={handleStart}>
          {/* 1. SELECT TOPIC */}
          <div className="setup-group">
            <label className="setup-label">1. Topic Chuno</label>
            <div className="options-pill-grid">
              {availableTopicsList.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={`pill-option ${selectedTopic === t.id ? 'selected' : ''}`}
                  onClick={() => setSelectedTopic(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. SELECT DIFFICULTY */}
          <div className="setup-group">
            <label className="setup-label">2. Difficulty Level</label>
            <DifficultySelector
              selected={selectedDifficulty}
              onSelect={setSelectedDifficulty}
            />
          </div>

          {/* 3. SELECT QUESTION COUNT */}
          <div className="setup-group">
            <label className="setup-label">3. Kitne Questions Phodoge?</label>
            <div className="options-pill-grid">
              {countsList.map((cnt) => (
                <button
                  key={cnt}
                  type="button"
                  className={`pill-option ${selectedCount === cnt ? 'selected' : ''}`}
                  onClick={() => setSelectedCount(cnt)}
                >
                  {cnt} Sawaal
                </button>
              ))}
            </div>
          </div>

          {/* 4. MODE SELECTION */}
          <div className="setup-group">
            <label className="setup-label">4. Quiz Mode</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
              <button
                type="button"
                className={`pill-option ${selectedMode === 'practice' ? 'selected' : ''}`}
                onClick={() => setSelectedMode('practice')}
                style={{ padding: '1rem', textAlign: 'left' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800 }}>
                  <Compass size={18} />
                  <span>Practice Mode</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  No timer. Aaram se soch-samajh ke seekho!
                </div>
              </button>

              <button
                type="button"
                className={`pill-option ${selectedMode === 'timed' ? 'selected' : ''}`}
                onClick={() => setSelectedMode('timed')}
                style={{ padding: '1rem', textAlign: 'left' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800 }}>
                  <Timer size={18} />
                  <span>Timed Mode</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Ghadi ki sui ticking! 1 min per question!
                </div>
              </button>
            </div>
          </div>

          {/* CTA SUBMIT BUTTON */}
          <button
            type="submit"
            className="btn btn-cta"
            style={{ width: '100%', marginTop: '1rem' }}
          >
            <Flame size={22} />
            <span>Chal Bhidu, Phodte Hain 🔥</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuizSetupPage;
