import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

import topicRoutes from './routes/topicRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import { apiLimiter } from './middleware/rateLimiter.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

const app = express();

// Trust proxy for Vercel and reverse proxy environments
app.set('trust proxy', 1);

// Security HTTP headers
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

// CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (curl, mobile, same-origin) or any Vercel domain / localhost
      if (
        !origin ||
        origin.includes('localhost') ||
        origin.includes('127.0.0.1') ||
        origin.endsWith('.vercel.app') ||
        origin === process.env.CLIENT_URL
      ) {
        callback(null, true);
      } else {
        callback(null, true); // Allow API consumer flexibility
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Body parsers with safe request size limits
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Rate limiting on API routes
app.use('/api', apiLimiter);

// API Root info
app.get('/api', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'MERN Bhai Quiz API is live and kicking! 🔥',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      topics: '/api/topics',
      questions: '/api/quiz/questions',
      answer: '/api/quiz/answer',
      finish: '/api/quiz/finish',
      stats: '/api/quiz/stats',
    },
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: Math.round(process.uptime()),
    timestamp: new Date().toISOString(),
    message: 'Bhai ka server ekdum mast chal raha hai 🔥',
  });
});

// Mount Routes
app.use('/api/topics', topicRoutes);
app.use('/api/quiz', quizRoutes);

// 404 & Error Handlers
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
