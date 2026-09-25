import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RotateCcw, BookOpen, Home } from 'lucide-react';
import { useQuiz } from '../context/QuizContext.jsx';
import ResultSummary from '../components/ResultSummary.jsx';
import WrongAnswerReview from '../components/WrongAnswerReview.jsx';
import TopicPerformance from '../components/TopicPerformance.jsx';

export const QuizResultPage = () => {
  const navigate = useNavigate();
  const { finalResult, topic, difficulty, mode, startQuiz, resetQuiz } = useQuiz();

  useEffect(() => {
    if (!finalResult) {
      navigate('/setup');
    }
  }, [finalResult, navigate]);

  if (!finalResult) {
    return null;
  }

  const handlePlayAgain = async () => {
    await startQuiz({
      topic,
      difficulty,
      count: finalResult.totalQuestions || 10,
      mode,
    });
    navigate('/play');
  };

  const handlePracticeWeak = async (weakTopicIds) => {
    const combinedTopics = weakTopicIds.join(',');
    await startQuiz({
      topic: combinedTopics,
      difficulty: 'mixed',
      count: 10,
      mode: 'practice',
    });
    navigate('/play');
  };

  const handleChooseAnother = () => {
    resetQuiz();
    navigate('/setup');
  };

  const handleGoHome = () => {
    resetQuiz();
    navigate('/');
  };

  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <div className="result-container animate-fade-in">
        {/* HERO RESULTS & BADGE */}
        <ResultSummary result={finalResult} />

        {/* WEAK TOPICS BREAKDOWN & TARGETED PRACTICE CTA */}
        {finalResult.weakTopics && finalResult.weakTopics.length > 0 && (
          <TopicPerformance
            weakTopics={finalResult.weakTopics}
            onPracticeWeak={handlePracticeWeak}
          />
        )}

        {/* WRONG ANSWER POST-MORTEM REVIEW */}
        {finalResult.review && finalResult.review.length > 0 && (
          <WrongAnswerReview review={finalResult.review} />
        )}

        {/* BOTTOM ACTION BUTTONS */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginTop: '1.5rem',
          }}
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={handlePlayAgain}
            style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}
          >
            <RotateCcw size={18} />
            <span>Ek Aur Baar Khelte Hain 🔄</span>
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleChooseAnother}
            style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}
          >
            <BookOpen size={18} />
            <span>Naya Topic Chuno 📚</span>
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleGoHome}
            style={{ padding: '0.85rem 1.5rem', fontSize: '1rem' }}
          >
            <Home size={18} />
            <span>Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResultPage;
