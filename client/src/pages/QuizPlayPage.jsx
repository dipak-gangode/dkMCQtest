import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext.jsx';
import QuizHeader from '../components/QuizHeader.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import QuestionCard from '../components/QuestionCard.jsx';
import AnswerOption from '../components/AnswerOption.jsx';
import AnswerFeedback from '../components/AnswerFeedback.jsx';
import LoadingState from '../components/LoadingState.jsx';

export const QuizPlayPage = () => {
  const navigate = useNavigate();
  const {
    sessionId,
    topic,
    difficulty,
    mode,
    timeLimitSeconds,
    questions,
    currentIndex,
    currentQuestion,
    totalQuestions,
    currentScore,
    currentStreak,
    sessionCores,
    isEvaluating,
    currentFeedback,
    isFinishing,
    submitOptionAnswer,
    advanceNextQuestion,
  } = useQuiz();

  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(timeLimitSeconds || 600);
  const questionStartTimeRef = useRef(Date.now());

  // Redirect to setup if no active session
  useEffect(() => {
    if (!sessionId || !questions || questions.length === 0) {
      navigate('/setup');
    }
  }, [sessionId, questions, navigate]);

  // Reset selectedOptionId when question changes
  useEffect(() => {
    setSelectedOptionId(null);
    questionStartTimeRef.current = Date.now();
  }, [currentIndex]);

  // Countdown timer for Timed Mode
  useEffect(() => {
    if (mode !== 'timed' || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Auto advance / finish on timeout
          handleTimeExpire();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [mode, timeRemaining]);

  const handleTimeExpire = async () => {
    const res = await advanceNextQuestion();
    if (res?.completed) {
      navigate('/result');
    }
  };

  const handleOptionSelect = async (optionId) => {
    if (selectedOptionId || isEvaluating || currentFeedback) return;

    setSelectedOptionId(optionId);
    const timeSpentMs = Date.now() - questionStartTimeRef.current;

    await submitOptionAnswer(optionId, timeSpentMs);
  };

  const handleNext = async () => {
    const res = await advanceNextQuestion();
    if (res?.completed) {
      navigate('/result');
    }
  };

  if (!currentQuestion) {
    return <LoadingState message="Question load ho raha hai... dimaag set rakh!" />;
  }

  const isLocked = Boolean(currentFeedback || isEvaluating);
  const isLastQuestion = currentIndex + 1 >= totalQuestions;

  return (
    <div className="container">
      <div className="quiz-play-container">
        {/* TOP HEADER & STATS */}
        <QuizHeader
          topic={topic}
          mode={mode}
          timeRemaining={timeRemaining}
          streak={currentStreak}
          cores={sessionCores}
          earnedCores={currentFeedback?.earnedCores || 0}
        />

        {/* PROGRESS BAR */}
        <ProgressBar current={currentIndex + 1} total={totalQuestions} />

        {/* QUESTION CARD */}
        <QuestionCard
          question={currentQuestion.question}
          difficulty={currentQuestion.difficulty}
          subTopic={currentQuestion.subTopic}
          codeSnippet={currentQuestion.codeSnippet}
        />

        {/* OPTIONS STACK */}
        <div className="options-stack">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedOptionId === option.id;
            const isCorrect = currentFeedback?.correctOptionId === option.id;
            const isCorrectRevealed = currentFeedback && currentFeedback.correctOptionId === option.id;

            return (
              <AnswerOption
                key={option.id}
                option={option}
                index={idx}
                isSelected={isSelected}
                isCorrect={isSelected && currentFeedback?.correct}
                isCorrectRevealed={isCorrectRevealed}
                isLocked={isLocked}
                isEvaluating={isEvaluating && isSelected}
                onSelect={handleOptionSelect}
              />
            );
          })}
        </div>

        {/* IMMEDIATE ANSWER FEEDBACK & ROAST BANNER */}
        {currentFeedback && (
          <AnswerFeedback
            feedback={currentFeedback}
            isLastQuestion={isLastQuestion}
            onNext={handleNext}
            isSubmitting={isFinishing}
          />
        )}
      </div>
    </div>
  );
};

export default QuizPlayPage;
