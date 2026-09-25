import app from '../server/src/app.js';
import { connectDB } from '../server/src/config/db.js';

/**
 * Vercel Serverless Function entry point
 * Connects to MongoDB (with global connection pooling/caching) and delegates to Express app
 */
export default async function handler(req, res) {
  try {
    await connectDB();
    return app(req, res);
  } catch (error) {
    console.error('Serverless database connection error:', error);
    return res.status(500).json({
      success: false,
      message: 'Database connection failed. Please verify MONGODB_URI in Vercel Environment Variables.',
      error: error.message,
    });
  }
}
