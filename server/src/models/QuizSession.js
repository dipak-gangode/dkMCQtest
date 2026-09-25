import mongoose from 'mongoose';

const sessionQuestionSchema = new mongoose.Schema(
  {
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: true,
    },
    optionsOrder: {
      type: [String],
      default: [],
    },
    answered: {
      type: Boolean,
      default: false,
    },
    selectedOptionId: {
      type: String,
      default: null,
    },
    isCorrect: {
      type: Boolean,
      default: null,
    },
    reaction: {
      type: String,
      default: '',
    },
    timeSpentMs: {
      type: Number,
      default: 0,
    },
    answeredAt: {
      type: Date,
      default: null,
    },
  },
  { _id: false }
);

const quizSessionSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    topic: {
      type: String,
      required: true,
      lowercase: true,
    },
    difficulty: {
      type: String,
      required: true,
      lowercase: true,
    },
    mode: {
      type: String,
      enum: ['practice', 'timed'],
      default: 'practice',
    },
    timeLimitSeconds: {
      type: Number,
      default: 0,
    },
    questions: [sessionQuestionSchema],
    currentIndex: {
      type: Number,
      default: 0,
    },
    totalQuestions: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      default: 0,
    },
    cores: {
      type: Number,
      default: 0,
    },
    streak: {
      type: Number,
      default: 0,
    },
    bestStreak: {
      type: Number,
      default: 0,
    },
    consecutiveMistakes: {
      type: Number,
      default: 0,
    },
    lastReaction: {
      type: String,
      default: '',
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    startedAt: {
      type: Date,
      default: Date.now,
    },
    completedAt: {
      type: Date,
      default: null,
    },
    // TTL index: auto delete session document after 48 hours
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 172800, // 48 hours in seconds
    },
  },
  {
    timestamps: true,
  }
);

export const QuizSession = mongoose.model('QuizSession', quizSessionSchema);
export default QuizSession;
