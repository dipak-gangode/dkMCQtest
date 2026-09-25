import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingState = ({ message = 'Questions load ho rahe hain... dimag ready rakh bhidu 🧠' }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '350px',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          width: '60px',
          height: '60px',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(99, 102, 241, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
        }}
      >
        <Loader2 size={30} className="animate-spin" color="var(--indigo-400)" />
      </div>

      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        {message}
      </h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        Database se taaza-tareen sawaal nikal rahe hain...
      </p>

      {/* Skeleton placeholders */}
      <div style={{ width: '100%', maxWidth: '500px', marginTop: '2rem' }}>
        <div className="skeleton" style={{ height: '24px', width: '70%', margin: '0 auto 1rem' }}></div>
        <div className="skeleton" style={{ height: '48px', width: '100%', marginBottom: '0.75rem' }}></div>
        <div className="skeleton" style={{ height: '48px', width: '100%' }}></div>
      </div>
    </div>
  );
};

export default LoadingState;
