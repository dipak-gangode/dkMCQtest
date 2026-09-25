import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false }
);

const questionSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    subTopic: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    difficulty: {
      type: String,
      required: true,
      enum: ['easy', 'medium', 'hard', 'interview'],
      lowercase: true,
      index: true,
    },
    question: {
      type: String,
      required: true,
      trim: true,
    },
    codeSnippet: {
      type: String,
      default: '',
    },
    options: {
      type: [optionSchema],
      validate: {
        validator: function (v) {
          return Array.isArray(v) && v.length >= 2;
        },
        message: 'A question must have at least 2 options',
      },
      required: true,
    },
    // select: false protects against accidentally leaking the answer in general queries
    correctOptionId: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      select: false,
    },
    explanation: {
      type: String,
      required: true,
      select: false,
    },
    optionExplanations: {
      type: Map,
      of: String,
      default: {},
      select: false,
    },
    memoryTrick: {
      type: String,
      default: '',
      select: false,
    },
    // Optional custom roast for incorrect answer (Bhai style)
    roast: {
      type: String,
      default: '',
      select: false,
    },
    // Optional custom reaction for correct answer (Bhai style)
    correctReaction: {
      type: String,
      default: '',
      select: false,
    },
    // External ID from imported datasets (e.g., mern-mcq-001)
    externalId: {
      type: String,
      default: '',
      trim: true,
      index: true,
    },
    // Original question number from imported datasets
    questionNumber: {
      type: Number,
      default: null,
    },
    // Original topic name if mapped
    originalTopic: {
      type: String,
      default: '',
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
      index: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

// Composite index for fast topic + difficulty filtered queries
questionSchema.index({ topic: 1, difficulty: 1 });
questionSchema.index({ topic: 1, tags: 1 });

export const Question = mongoose.model('Question', questionSchema);
export default Question;
