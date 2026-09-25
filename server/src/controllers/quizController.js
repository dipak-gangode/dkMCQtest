import crypto from 'node:crypto';
import mongoose from 'mongoose';
import { Question } from '../models/Question.js';
import { QuizSession } from '../models/QuizSession.js';
import { getRoastReaction } from '../services/roastEngine.js';
import {
  shuffleArray,
  calculateCoresAndStreak,
  getPerformanceBadge,
} from '../utils/helpers.js';

export const startQuiz = async (req, res, next) => {
  try {
    const { topic = 'mixed', difficulty = 'mixed', count = 10, mode = 'practice' } = req.query;

    const filter = {};

    const topicAliases = {
      'node.js': ['nodejs', 'node.js'],
      nodejs: ['nodejs', 'node.js'],
      'git-npm': ['git', 'git-npm'],
      git: ['git', 'git-npm'],
      'web-api-auth': ['auth', 'rest-api', 'web-api-auth'],
    };

    if (topic && topic !== 'mixed') {
      if (topic.includes(',')) {
        const topicList = topic.split(',').map((t) => t.trim().toLowerCase());
        const expanded = [];
        topicList.forEach((t) => {
          if (topicAliases[t]) {
            expanded.push(...topicAliases[t]);
          } else {
            expanded.push(t);
          }
        });
        filter.topic = { $in: Array.from(new Set(expanded)) };
      } else {
        const t = topic.trim().toLowerCase();
        if (topicAliases[t]) {
          filter.topic = { $in: topicAliases[t] };
        } else {
          filter.topic = t;
        }
      }
    }

    if (difficulty && difficulty !== 'mixed') {
      filter.difficulty = difficulty.toLowerCase();
    }

    const availableCount = await Question.countDocuments(filter);

    if (availableCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'Arre bhai, is topic/difficulty ke questions abhi nahi mile 😅',
        bhaiRoast: 'Topic ya difficulty change karke dekh bhidu!',
      });
    }

    // Never request more than available
    const requestedCount = parseInt(count, 10) || 10;
    const targetCount = Math.min(requestedCount, availableCount);

    // Fetch randomized sample of questions from MongoDB with explicit projection
    const samplePipeline = [
      { $match: filter },
      { $sample: { size: targetCount } },
      {
        $project: {
          correctOptionId: 0,
          explanation: 0,
          optionExplanations: 0,
          memoryTrick: 0,
          roast: 0,
          correctReaction: 0,
        },
      },
    ];
    const sampledQuestions = await Question.aggregate(samplePipeline);

    // Generate unique session ID
    const sessionId = crypto.randomUUID();

    // Prepare questions for client & session tracking
    const sessionQuestions = [];
    const clientQuestions = [];

    for (const q of sampledQuestions) {
      // Randomize option order for user
      const shuffledOptions = shuffleArray(q.options);
      const optionsOrder = shuffledOptions.map((opt) => opt.id);

      sessionQuestions.push({
        questionId: q._id,
        optionsOrder,
        answered: false,
        selectedOptionId: null,
        isCorrect: null,
        reaction: '',
        timeSpentMs: 0,
        answeredAt: null,
      });

      // Client payload NEVER receives correctOptionId, explanation, optionExplanations, memoryTrick, roast, or correctReaction!
      clientQuestions.push({
        id: q._id.toString(),
        question: q.question,
        codeSnippet: q.codeSnippet || '',
        options: shuffledOptions.map((opt) => ({
          id: opt.id,
          text: opt.text,
        })),
        topic: q.topic,
        subTopic: q.subTopic,
        difficulty: q.difficulty,
      });
    }

    const timeLimitSeconds = mode === 'timed' ? targetCount * 60 : 0; // 1 min per question in timed mode

    const session = new QuizSession({
      sessionId,
      topic: topic || 'mixed',
      difficulty: difficulty || 'mixed',
      mode,
      timeLimitSeconds,
      questions: sessionQuestions,
      totalQuestions: targetCount,
      currentIndex: 0,
      score: 0,
      cores: 0,
      streak: 0,
      bestStreak: 0,
      consecutiveMistakes: 0,
      lastReaction: '',
      isCompleted: false,
      startedAt: new Date(),
    });

    await session.save();

    res.status(200).json({
      success: true,
      sessionId,
      topic,
      difficulty,
      mode,
      timeLimitSeconds,
      totalQuestions: targetCount,
      questions: clientQuestions,
    });
  } catch (error) {
    next(error);
  }
};

export const submitAnswer = async (req, res, next) => {
  try {
    const { sessionId, questionId, selectedOptionId, timeSpentMs = 0 } = req.body;

    const session = await QuizSession.findOne({ sessionId });
    if (!session) {
      return res.status(404).json({
        success: false,
        message: 'Quiz session nahi mila ya expire ho gaya! Naya quiz start kar lo bhidu!',
      });
    }

    if (session.isCompleted) {
      return res.status(400).json({
        success: false,
        message: 'Ye quiz pehle hi complete ho chuka hai!',
      });
    }

    const sessionQ = session.questions.find(
      (sq) => sq.questionId.toString() === questionId
    );

    if (!sessionQ) {
      return res.status(404).json({
        success: false,
        message: 'Ye question is quiz session ka part nahi hai!',
      });
    }

    if (sessionQ.answered) {
      return res.status(400).json({
        success: false,
        message: 'Arre bhidu ye question pehle hi attempt kar chuka hai! Double click mat kar!',
      });
    }

    // Retrieve full question securely from DB with select fields
    const question = await Question.findById(questionId).select(
      '+correctOptionId +explanation +optionExplanations +memoryTrick +roast +correctReaction'
    );

    if (!question) {
      return res.status(404).json({
        success: false,
        message: 'Question database mein nahi mila!',
      });
    }

    const isCorrect =
      selectedOptionId.toLowerCase() === question.correctOptionId.toLowerCase();

    // Calculate Cores and Streak Authoritatively on Server
    const { newStreak, earnedCores, streakBonus, newCores } = calculateCoresAndStreak({
      isCorrect,
      currentStreak: session.streak,
      currentCores: session.cores,
    });

    const newConsecutiveMistakes = isCorrect ? 0 : session.consecutiveMistakes + 1;

    // Pick Bhai Roast / Reaction: use dynamic streak/comeback engine when appropriate,
    // or question-specific custom reaction/roast when available
    let reaction;
    if (isCorrect) {
      if (session.streak >= 3 || session.consecutiveMistakes >= 2) {
        reaction = getRoastReaction({
          isCorrect,
          streak: newStreak,
          consecutiveMistakes: newConsecutiveMistakes,
          lastReaction: session.lastReaction,
        });
      } else if (question.correctReaction) {
        reaction = question.correctReaction;
      } else {
        reaction = getRoastReaction({
          isCorrect,
          streak: newStreak,
          consecutiveMistakes: newConsecutiveMistakes,
          lastReaction: session.lastReaction,
        });
      }
    } else {
      if (newConsecutiveMistakes >= 2) {
        reaction = getRoastReaction({
          isCorrect,
          streak: newStreak,
          consecutiveMistakes: newConsecutiveMistakes,
          lastReaction: session.lastReaction,
        });
      } else if (question.roast) {
        reaction = question.roast;
      } else {
        reaction = getRoastReaction({
          isCorrect,
          streak: newStreak,
          consecutiveMistakes: newConsecutiveMistakes,
          lastReaction: session.lastReaction,
        });
      }
    }

    // Update session question state
    sessionQ.answered = true;
    sessionQ.selectedOptionId = selectedOptionId;
    sessionQ.isCorrect = isCorrect;
    sessionQ.reaction = reaction;
    sessionQ.timeSpentMs = timeSpentMs;
    sessionQ.answeredAt = new Date();

    // Update session aggregates
    if (isCorrect) {
      session.score += 1;
    }
    session.streak = newStreak;
    if (newStreak > session.bestStreak) {
      session.bestStreak = newStreak;
    }
    session.cores = newCores;
    session.consecutiveMistakes = newConsecutiveMistakes;
    session.lastReaction = reaction;
    session.currentIndex += 1;

    await session.save();

    // Map explanations for options
    const optionExplMap =
      question.optionExplanations instanceof Map
        ? Object.fromEntries(question.optionExplanations)
        : question.optionExplanations || {};

    const selectedOptionExpl = optionExplMap[selectedOptionId] || '';
    const correctOptionExpl = optionExplMap[question.correctOptionId] || '';

    const selectedOptionObj = question.options.find((o) => o.id === selectedOptionId);
    const correctOptionObj = question.options.find((o) => o.id === question.correctOptionId);

    const answeredCount = session.questions.filter((q) => q.answered).length;
    const isLastQuestion = answeredCount >= session.totalQuestions;

    res.status(200).json({
      success: true,
      correct: isCorrect,
      selectedOptionId,
      selectedOptionText: selectedOptionObj ? selectedOptionObj.text : '',
      correctOptionId: question.correctOptionId,
      correctOptionText: correctOptionObj ? correctOptionObj.text : '',
      reaction,
      explanation: question.explanation,
      optionExplanation: selectedOptionExpl,
      whySelectedWrong: isCorrect ? null : selectedOptionExpl,
      whyCorrectRight: correctOptionExpl,
      memoryTrick: question.memoryTrick || '',
      score: session.score,
      streak: session.streak,
      bestStreak: session.bestStreak,
      cores: session.cores,
      earnedCores,
      streakBonus,
      isLastQuestion,
    });
  } catch (error) {
    next(error);
  }
};

export const finishQuiz = async (req, res, next) => {
  try {
    const { sessionId } = req.body;

    const session = await QuizSession.findOne({ sessionId });
    if (!session) {
      return res.status(404).json({
        success: false,
        message: 'Quiz session nahi mila!',
      });
    }

    if (!session.isCompleted) {
      session.isCompleted = true;
      session.completedAt = new Date();
      await session.save();
    }

    const totalQuestions = session.totalQuestions;
    const correct = session.score;
    const wrong = totalQuestions - correct;
    const accuracy = totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0;
    const badge = getPerformanceBadge(accuracy);

    const startTime = session.startedAt ? new Date(session.startedAt).getTime() : Date.now();
    const endTime = session.completedAt ? new Date(session.completedAt).getTime() : Date.now();
    const timeTakenSeconds = Math.max(1, Math.round((endTime - startTime) / 1000));

    // Gather question IDs to fetch details for review and weak topics
    const questionIds = session.questions.map((q) => q.questionId);
    const questionDocs = await Question.find({ _id: { $in: questionIds } }).select(
      '+correctOptionId +explanation +optionExplanations +memoryTrick +roast +correctReaction'
    );

    const questionMap = new Map();
    questionDocs.forEach((doc) => {
      questionMap.set(doc._id.toString(), doc);
    });

    // Compute Weak Topics
    const weakTopicsMap = new Map();
    const wrongAnswerReviews = [];

    for (const sq of session.questions) {
      const qDoc = questionMap.get(sq.questionId.toString());
      if (!qDoc) continue;

      if (!sq.isCorrect) {
        // Track weak topics
        const key = `${qDoc.topic}:::${qDoc.subTopic}`;
        if (!weakTopicsMap.has(key)) {
          weakTopicsMap.set(key, {
            topic: qDoc.topic,
            subTopic: qDoc.subTopic,
            wrongCount: 0,
          });
        }
        weakTopicsMap.get(key).wrongCount += 1;

        // Build wrong answer review item
        const optionExplMap =
          qDoc.optionExplanations instanceof Map
            ? Object.fromEntries(qDoc.optionExplanations)
            : qDoc.optionExplanations || {};

        const selectedOpt = qDoc.options.find((o) => o.id === sq.selectedOptionId);
        const correctOpt = qDoc.options.find((o) => o.id === qDoc.correctOptionId);

        wrongAnswerReviews.push({
          questionId: qDoc._id.toString(),
          topic: qDoc.topic,
          subTopic: qDoc.subTopic,
          question: qDoc.question,
          codeSnippet: qDoc.codeSnippet || '',
          selectedOptionId: sq.selectedOptionId || '',
          selectedOptionText: selectedOpt ? selectedOpt.text : 'Koi option nahi chuna (Timed out)',
          correctOptionId: qDoc.correctOptionId,
          correctOptionText: correctOpt ? correctOpt.text : '',
          reaction: sq.reaction || 'Arre bhai ye question chhoot gaya ya galat ho gaya!',
          explanation: qDoc.explanation,
          whySelectedWrong: optionExplMap[sq.selectedOptionId] || 'Ye option is question ka sahi answer nahi hai.',
          whyCorrectRight: optionExplMap[qDoc.correctOptionId] || qDoc.explanation,
          memoryTrick: qDoc.memoryTrick || '',
        });
      }
    }

    const weakTopics = Array.from(weakTopicsMap.values()).sort(
      (a, b) => b.wrongCount - a.wrongCount
    );

    res.status(200).json({
      success: true,
      sessionId: session.sessionId,
      topic: session.topic,
      difficulty: session.difficulty,
      mode: session.mode,
      totalQuestions,
      correct,
      wrong,
      accuracy,
      cores: session.cores,
      bestStreak: session.bestStreak,
      timeTakenSeconds,
      badge,
      weakTopics,
      review: wrongAnswerReviews,
    });
  } catch (error) {
    next(error);
  }
};
