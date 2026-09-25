import { Router } from 'express';
import {
  startQuiz,
  submitAnswer,
  finishQuiz,
} from '../controllers/quizController.js';
import { getStats } from '../controllers/topicController.js';
import {
  validateStartQuiz,
  validateAnswerSubmission,
  validateFinishQuiz,
} from '../validators/quizValidator.js';

const router = Router();

// GET /api/quiz/questions
router.get('/questions', validateStartQuiz, startQuiz);

// POST /api/quiz/answer
router.post('/answer', validateAnswerSubmission, submitAnswer);

// POST /api/quiz/finish
router.post('/finish', validateFinishQuiz, finishQuiz);

// GET /api/quiz/stats
router.get('/stats', getStats);

export default router;
