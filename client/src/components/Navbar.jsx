import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Flame, Diamond, Volume2, VolumeX, Play } from 'lucide-react';
import { useQuiz } from '../context/QuizContext.jsx';

export const Navbar = () => {
  const { totalCores, soundMuted, toggleSound } = useQuiz();
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="brand-link" aria-label="MERN MCQ Challenge Home">
          <div className="brand-logo-icon">
            <Flame size={22} className="animate-flame" />
          </div>
          <div>
            <span>MERN MCQ</span>
            <span className="brand-badge" style={{ marginLeft: '0.5rem' }}>Bhai Edition</span>
          </div>
        </Link>

        <div className="navbar-actions">
          <div className="cores-badge" title="Aapke kul kamaye hue Cores">
            <Diamond size={16} />
            <span>{totalCores.toLocaleString()} Cores</span>
          </div>

          <button
            onClick={toggleSound}
            className="btn-icon-only"
            title={soundMuted ? 'Sound Unmute Karo' : 'Sound Mute Karo'}
            aria-label={soundMuted ? 'Sound Unmute' : 'Sound Mute'}
          >
            {soundMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          <button
            onClick={() => navigate('/setup')}
            className="btn btn-primary"
            style={{ padding: '0.45rem 1rem', fontSize: '0.875rem' }}
          >
            <Play size={15} />
            <span>Start Quiz</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
