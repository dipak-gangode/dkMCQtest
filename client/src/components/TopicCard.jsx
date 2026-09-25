import React from 'react';
import {
  FileCode2,
  Atom,
  Server,
  Cpu,
  Database,
  Layers,
  Code2,
  Palette,
  GitBranch,
  Network,
  ShieldCheck,
  Globe,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  FileCode2,
  Atom,
  Server,
  Cpu,
  Database,
  Layers,
  Code2,
  Palette,
  GitBranch,
  Network,
  ShieldCheck,
  Globe,
  HelpCircle,
};

export const TopicCard = ({ topic, onSelect }) => {
  const IconComponent = iconMap[topic.icon] || HelpCircle;

  return (
    <div
      className="topic-card"
      style={{ '--topic-accent': topic.color }}
      onClick={() => onSelect(topic.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(topic.id);
        }
      }}
    >
      <div className="topic-card-header">
        <div
          className="topic-icon-wrap"
          style={{ color: topic.color, borderColor: `${topic.color}33` }}
        >
          <IconComponent size={24} />
        </div>
        <span className="topic-count-pill">{topic.questionCount} Questions</span>
      </div>

      <h3 className="topic-card-title">{topic.name}</h3>
      <p className="topic-card-desc">{topic.description}</p>

      <div className="topic-card-cta">
        <span>Practice Karo</span>
        <ArrowRight size={16} />
      </div>
    </div>
  );
};

export default TopicCard;
