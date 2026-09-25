import React from 'react';
import { Brain } from 'lucide-react';

export const MemoryTrick = ({ trick }) => {
  if (!trick) return null;

  return (
    <div className="memory-trick-box animate-pop">
      <div className="memory-trick-header">
        <Brain size={18} />
        <span>Yaad Rakh Bhidu:</span>
      </div>
      <div className="memory-trick-text">{trick}</div>
    </div>
  );
};

export default MemoryTrick;
