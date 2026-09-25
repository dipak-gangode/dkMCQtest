import { Question } from '../models/Question.js';

const topicMetadata = {
  javascript: {
    name: 'JavaScript',
    icon: 'FileCode2',
    color: '#f7df1e',
    bgGradient: 'from-amber-500/20 to-yellow-500/10',
    description: 'Closures, Event Loop, Promises, ES6+ aur Output questions phodo!',
  },
  react: {
    name: 'React',
    icon: 'Atom',
    color: '#61dafb',
    bgGradient: 'from-cyan-500/20 to-blue-500/10',
    description: 'Hooks, Virtual DOM, Re-renders, State, Router aur Component architecture!',
  },
  nodejs: {
    name: 'Node.js',
    icon: 'Server',
    color: '#68a063',
    bgGradient: 'from-emerald-500/20 to-green-500/10',
    description: 'Libuv, Streams, Buffers, Worker Threads aur Non-blocking I/O!',
  },
  express: {
    name: 'Express.js',
    icon: 'Cpu',
    color: '#9ca3af',
    bgGradient: 'from-slate-500/20 to-gray-500/10',
    description: 'Routing, Custom Middlewares, Error Handlers aur REST APIs!',
  },
  mongodb: {
    name: 'MongoDB',
    icon: 'Database',
    color: '#47a248',
    bgGradient: 'from-green-500/20 to-teal-500/10',
    description: 'Aggregation pipelines, Indexes, Mongoose models aur Schema design!',
  },
  mern: {
    name: 'MERN Fullstack',
    icon: 'Layers',
    color: '#8b5cf6',
    bgGradient: 'from-purple-500/20 to-indigo-500/10',
    description: 'End-to-end architecture, JWT, CORS, Race conditions aur Deployment!',
  },
  html: {
    name: 'HTML',
    icon: 'Code2',
    color: '#e34f26',
    bgGradient: 'from-orange-500/20 to-amber-500/10',
    description: 'Semantic HTML5, Forms, Accessibility, SEO tags aur Page structure!',
  },
  css: {
    name: 'CSS',
    icon: 'Palette',
    color: '#38bdf8',
    bgGradient: 'from-sky-500/20 to-blue-500/10',
    description: 'Flexbox, Grid, Specificity, Positioning, Animations aur Box Model!',
  },
  git: {
    name: 'Git / GitHub',
    icon: 'GitBranch',
    color: '#f05032',
    bgGradient: 'from-rose-500/20 to-red-500/10',
    description: 'Branching, Merge vs Rebase, Reflog, Stash aur Conflict resolution!',
  },
  'rest-api': {
    name: 'REST API',
    icon: 'Network',
    color: '#10b981',
    bgGradient: 'from-teal-500/20 to-emerald-500/10',
    description: 'HTTP Methods, Status codes, Idempotency, Caching aur API design!',
  },
  auth: {
    name: 'Authentication',
    icon: 'ShieldCheck',
    color: '#ec4899',
    bgGradient: 'from-pink-500/20 to-rose-500/10',
    description: 'Bcrypt hashing, Salts, JWT Anatomy, OAuth 2.0, Cookies aur CSRF!',
  },
  'web-fundamentals': {
    name: 'Web Fundamentals',
    icon: 'Globe',
    color: '#06b6d4',
    bgGradient: 'from-cyan-500/20 to-sky-500/10',
    description: 'DNS Lookup, TCP 3-way handshake, Browser Rendering Path aur CDN!',
  },
  'web-api-auth': {
    name: 'Web API & Auth',
    icon: 'ShieldCheck',
    color: '#10b981',
    bgGradient: 'from-teal-500/20 to-emerald-500/10',
    description: 'REST, HTTP status codes, JWT, Sessions, Caching aur API security!',
  },
  'git-npm': {
    name: 'Git & npm',
    icon: 'GitBranch',
    color: '#f05032',
    bgGradient: 'from-rose-500/20 to-red-500/10',
    description: 'Git branching, merge vs rebase, conflicts, npm packages aur security!',
  },
  'node.js': {
    name: 'Node.js',
    icon: 'Server',
    color: '#68a063',
    bgGradient: 'from-emerald-500/20 to-green-500/10',
    description: 'Libuv, Streams, Buffers, Worker Threads aur Non-blocking I/O!',
  },
};

export const getTopics = async (req, res, next) => {
  try {
    const topicStats = await Question.aggregate([
      {
        $group: {
          _id: '$topic',
          questionCount: { $sum: 1 },
          difficulties: { $addToSet: '$difficulty' },
        },
      },
      { $sort: { questionCount: -1 } },
    ]);

    const topics = topicStats.map((item) => {
      const meta = topicMetadata[item._id] || {
        name: item._id.toUpperCase(),
        icon: 'HelpCircle',
        color: '#6366f1',
        description: 'Web development practice questions',
      };

      return {
        id: item._id,
        name: meta.name,
        icon: meta.icon,
        color: meta.color,
        bgGradient: meta.bgGradient || 'from-indigo-500/20 to-purple-500/10',
        description: meta.description,
        questionCount: item.questionCount,
        difficulties: item.difficulties,
      };
    });

    res.status(200).json({
      success: true,
      totalTopics: topics.length,
      topics,
    });
  } catch (error) {
    next(error);
  }
};

export const getStats = async (req, res, next) => {
  try {
    const totalQuestions = await Question.countDocuments();
    const difficultyStats = await Question.aggregate([
      {
        $group: {
          _id: '$difficulty',
          count: { $sum: 1 },
        },
      },
    ]);

    const topicStats = await Question.aggregate([
      {
        $group: {
          _id: '$topic',
          count: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      totalQuestions,
      totalTopics: topicStats.length,
      difficultyStats,
      topicStats,
    });
  } catch (error) {
    next(error);
  }
};
