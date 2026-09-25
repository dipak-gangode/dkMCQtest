import React, { useEffect, useState } from 'react';
import { Diamond } from 'lucide-react';

export const CoreCounter = ({ cores, earned = 0 }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (earned > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [cores, earned]);

  return (
    <div className={`cores-badge ${animate ? 'animate-core-bounce' : ''}`}>
      <Diamond size={16} />
      <span>{cores.toLocaleString()} Cores</span>
      {earned > 0 && animate && (
        <span
          style={{
            color: 'var(--emerald-400)',
            fontSize: '0.8rem',
            marginLeft: '0.2rem',
          }}
        >
          +{earned}
        </span>
      )}
    </div>
  );
};

export default CoreCounter;
