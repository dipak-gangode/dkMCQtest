import React from 'react';

const difficulties = [
  { id: 'mixed', label: 'Mixed 🔥', desc: 'All Levels' },
  { id: 'easy', label: 'Easy 🐣', desc: 'Beginner' },
  { id: 'medium', label: 'Medium ⚡', desc: 'Intermediate' },
  { id: 'hard', label: 'Hard 💀', desc: 'Advanced' },
  { id: 'interview', label: 'Interview 💼', desc: 'Job Ready' },
];

export const DifficultySelector = ({ selected, onSelect }) => {
  return (
    <div className="options-pill-grid">
      {difficulties.map((diff) => {
        const isSelected = selected === diff.id;
        return (
          <button
            key={diff.id}
            type="button"
            className={`pill-option ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelect(diff.id)}
          >
            <div>{diff.label}</div>
          </button>
        );
      })}
    </div>
  );
};

export default DifficultySelector;
