import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api.js';
import { soundEffects } from '../utils/soundEffects.js';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  // Global persisted user stats
  const [totalCores, setTotalCores] = useState(() => {
    const saved = localStorage.getItem('mern_quiz_user_cores');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [bestLifetimeStreak, setBestLifetimeStreak] = useState(() => {
    const saved = localStorage.getItem('mern_quiz_best_streak');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [soundMuted, setSoundMuted] = useState(() => soundEffects.isMuted());

  // Active quiz session state
  const [sessionId, setSessionId] = useState(null);
  const [topic, setTopic] = useState('mixed');
  const [difficulty, setDifficulty] = useState('mixed');
  const [mode, setMode] = useState('practice');
  const [timeLimitSeconds, setTimeLimitSeconds] = useState(0);

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentScore, setCurrentScore] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [sessionCores, setSessionCores] = useState(0);

  const [isEvaluating, setIsEvaluating] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState(null);

  const [isFinishing, setIsFinishing] = useState(false);
  const [finalResult, setFinalResult] = useState(null);

  // Sync total cores to localStorage
  useEffect(() => {
    localStorage.setItem('mern_quiz_user_cores', totalCores.toString());
  }, [totalCores]);

  // Sync best streak to localStorage
  useEffect(() => {
    localStorage.setItem('mern_quiz_best_streak', bestLifetimeStreak.toString());
  }, [bestLifetimeStreak]);

  const toggleSound = () => {
    const newMuted = soundEffects.toggleMute();
    setSoundMuted(newMuted);
  };

  const startQuiz = async ({ topic = 'mixed', difficulty = 'mixed', count = 10, mode = 'practice' }) => {
    setIsEvaluating(false);
    setCurrentFeedback(null);
    setFinalResult(null);
    setCurrentIndex(0);
    setCurrentScore(0);
    setCurrentStreak(0);
    setSessionCores(0);

    const data = await api.startQuiz({ topic, difficulty, count, mode });

    setSessionId(data.sessionId);
    setTopic(data.topic);
    setDifficulty(data.difficulty);
    setMode(data.mode);
    setTimeLimitSeconds(data.timeLimitSeconds);
    setQuestions(data.questions);

    return data;
  };

  const submitOptionAnswer = async (selectedOptionId, timeSpentMs = 0) => {
    if (isEvaluating || currentFeedback || !sessionId || !questions[currentIndex]) {
      return;
    }

    setIsEvaluating(true);
    const questionId = questions[currentIndex].id;

    try {
      const result = await api.submitAnswer({
        sessionId,
        questionId,
        selectedOptionId,
        timeSpentMs,
      });

      // Play sound feedback
      if (result.correct) {
        if (result.streakBonus > 0 || result.streak >= 3) {
          soundEffects.playStreak();
        } else {
          soundEffects.playCorrect();
        }
      } else {
        soundEffects.playWrong();
      }

      // Update state
      setCurrentScore(result.score);
      setCurrentStreak(result.streak);
      setSessionCores(result.cores);

      if (result.streak > bestLifetimeStreak) {
        setBestLifetimeStreak(result.streak);
      }

      if (result.earnedCores > 0) {
        setTotalCores((prev) => prev + result.earnedCores);
      }

      setCurrentFeedback(result);
      return result;
    } finally {
      setIsEvaluating(false);
    }
  };

  const advanceNextQuestion = async () => {
    if (!sessionId) return;

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setCurrentFeedback(null);
      return { completed: false };
    } else {
      // Quiz finished!
      setIsFinishing(true);
      try {
        const result = await api.finishQuiz({ sessionId });
        setFinalResult(result);
        return { completed: true, result };
      } finally {
        setIsFinishing(false);
      }
    }
  };

  const resetQuiz = () => {
    setSessionId(null);
    setQuestions([]);
    setCurrentIndex(0);
    setCurrentFeedback(null);
    setFinalResult(null);
    setIsEvaluating(false);
  };

  const currentQuestion = questions[currentIndex] || null;

  return (
    <QuizContext.Provider
      value={{
        totalCores,
        bestLifetimeStreak,
        soundMuted,
        toggleSound,

        sessionId,
        topic,
        difficulty,
        mode,
        timeLimitSeconds,

        questions,
        currentIndex,
        currentQuestion,
        totalQuestions: questions.length,

        currentScore,
        currentStreak,
        sessionCores,

        isEvaluating,
        currentFeedback,
        isFinishing,
        finalResult,

        startQuiz,
        submitOptionAnswer,
        advanceNextQuestion,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

export default QuizContext;
