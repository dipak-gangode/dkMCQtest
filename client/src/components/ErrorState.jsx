import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ErrorState = ({
  message = 'Server ne thoda attitude dikha diya 😭',
  bhaiRoast = 'Arre bhai backend mein thoda short circuit ho gaya! Ek baar refresh maar ke retry kar!',
  onRetry,
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
          background: 'rgba(244, 63, 94, 0.15)',
          color: 'var(--rose-400)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.25rem',
        }}
      >
        <AlertTriangle size={32} />
      </div>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.65rem' }}>
        {message}
      </h2>

      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
        {bhaiRoast}
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        {onRetry && (
          <button type="button" className="btn btn-primary" onClick={onRetry}>
            <RefreshCw size={17} />
            <span>Dobara Try Karo</span>
          </button>
        )}

        <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
          <Home size={17} />
          <span>Home Pe Chalo</span>
        </button>
      </div>
    </div>
  );
};

export default ErrorState;
