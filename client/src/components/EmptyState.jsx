import React from 'react';
import { HelpCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const EmptyState = ({
  message = 'Arre bhai, is topic ke questions abhi nahi mile 😅',
  onBack,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="setup-container animate-fade-in"
      style={{ textAlign: 'center', margin: '3rem auto' }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(245, 158, 11, 0.15)',
          color: 'var(--amber-400)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.25rem',
        }}
      >
        <HelpCircle size={32} />
      </div>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.65rem' }}>
        {message}
      </h2>

      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
        Doosra topic ya difficulty chuno bhidu! Wahan bohot maal pada hai!
      </p>

      <button
        type="button"
        className="btn btn-primary"
        onClick={onBack || (() => navigate('/setup'))}
      >
        <ArrowLeft size={17} />
        <span>Doosra Topic Chuno</span>
      </button>
    </div>
  );
};

export default EmptyState;
