import mongoose from 'mongoose';

/**
 * Sanitizes input to prevent NoSQL injection by ensuring values are primitive strings
 */
export function sanitizeString(val) {
  if (typeof val !== 'string') return '';
  // Remove MongoDB operator injection symbols if used maliciously
  return val.replace(/[$]/g, '').trim();
}

export const validateStartQuiz = (req, res, next) => {
  let { topic, difficulty, count, mode } = req.query;

  if (topic) {
    topic = sanitizeString(topic).toLowerCase();
    req.query.topic = topic;
  }

  if (difficulty) {
    difficulty = sanitizeString(difficulty).toLowerCase();
    const validDifficulties = ['easy', 'medium', 'hard', 'interview', 'mixed'];
    if (!validDifficulties.includes(difficulty)) {
      return res.status(400).json({
        success: false,
        message: 'Abe difficulty sahi choose kar! (easy, medium, hard, interview, mixed)',
      });
    }
    req.query.difficulty = difficulty;
  }

  if (count) {
    const parsedCount = parseInt(count, 10);
    if (isNaN(parsedCount) || parsedCount < 1 || parsedCount > 50) {
      return res.status(400).json({
        success: false,
        message: 'Question count 1 se 50 ke beech hona chahiye bhidu!',
      });
    }
    req.query.count = parsedCount;
  } else {
    req.query.count = 10;
  }

  if (mode) {
    mode = sanitizeString(mode).toLowerCase();
    if (!['practice', 'timed'].includes(mode)) {
      req.query.mode = 'practice';
    } else {
      req.query.mode = mode;
    }
  } else {
    req.query.mode = 'practice';
  }

  next();
};

export const validateAnswerSubmission = (req, res, next) => {
  const { sessionId, questionId, selectedOptionId } = req.body;

  if (!sessionId || typeof sessionId !== 'string') {
    return res.status(400).json({
      success: false,
      message: 'Session ID missing hai ya invalid hai bhai!',
    });
  }

  if (!questionId || !mongoose.Types.ObjectId.isValid(questionId)) {
    return res.status(400).json({
      success: false,
      message: 'Question ID invalid hai! Koi chhedkhani mat kar!',
    });
  }

  if (!selectedOptionId || typeof selectedOptionId !== 'string') {
    return res.status(400).json({
      success: false,
      message: 'Option toh select kar le pehle tick marne ke liye!',
    });
  }

  req.body.sessionId = sanitizeString(sessionId);
  req.body.questionId = sanitizeString(questionId);
  req.body.selectedOptionId = sanitizeString(selectedOptionId).toLowerCase();

  next();
};

export const validateFinishQuiz = (req, res, next) => {
  const { sessionId } = req.body;

  if (!sessionId || typeof sessionId !== 'string') {
    return res.status(400).json({
      success: false,
      message: 'Bhai sessionId chahiye quiz finish karne ke liye!',
    });
  }

  req.body.sessionId = sanitizeString(sessionId);
  next();
};
