'use client';

import { useState, useEffect } from 'react';
import { Quiz, QuizSession, UserAnswer } from '@/types/quiz';
import {
  createQuizSession,
  checkAnswer,
  calculateScore,
  saveQuizProgress,
  loadQuizProgress,
  clearQuizProgress,
  saveQuizScore,
} from '@/lib/quiz-utils';
import QuizQuestion from './QuizQuestion';
import QuizResults from './QuizResults';

interface QuizContainerProps {
  quiz: Quiz;
}

export default function QuizContainer({ quiz }: QuizContainerProps) {
  const [session, setSession] = useState<QuizSession | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Initialize or load quiz session
  useEffect(() => {
    const savedSession = loadQuizProgress(quiz.id);
    if (savedSession && !savedSession.isCompleted) {
      setSession(savedSession);
    } else {
      setSession(createQuizSession(quiz.id));
    }
  }, [quiz.id]);

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const currentQuestion = quiz.questions[session.currentQuestionIndex];
  const isLastQuestion = session.currentQuestionIndex === quiz.questions.length - 1;

  const handleSelectAnswer = (answerId: string) => {
    setSelectedAnswer(answerId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;

    const isCorrect = checkAnswer(quiz, currentQuestion.id, selectedAnswer);

    const answer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect,
    };

    const updatedSession = {
      ...session,
      answers: [...session.answers, answer],
    };

    setSession(updatedSession);
    setShowExplanation(true);
    saveQuizProgress(updatedSession);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      // Quiz complete
      const finalSession = {
        ...session,
        isCompleted: true,
      };
      setSession(finalSession);

      const score = calculateScore(quiz, finalSession);
      saveQuizScore(score);
      clearQuizProgress(quiz.id);
      setIsComplete(true);
    } else {
      // Move to next question
      const updatedSession = {
        ...session,
        currentQuestionIndex: session.currentQuestionIndex + 1,
      };
      setSession(updatedSession);
      setSelectedAnswer(null);
      setShowExplanation(false);
      saveQuizProgress(updatedSession);
    }
  };

  const handleRetake = () => {
    const newSession = createQuizSession(quiz.id);
    setSession(newSession);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsComplete(false);
    clearQuizProgress(quiz.id);
  };

  if (isComplete) {
    const score = calculateScore(quiz, session);
    return <QuizResults quiz={quiz} score={score} onRetake={handleRetake} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4">
      <QuizQuestion
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={handleSelectAnswer}
        showResult={showExplanation}
        questionNumber={session.currentQuestionIndex + 1}
        totalQuestions={quiz.questions.length}
      />

      {/* Action button */}
      <div className="max-w-3xl mx-auto mt-6">
        {!showExplanation ? (
          <button
            onClick={handleSubmitAnswer}
            disabled={!selectedAnswer}
            className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="w-full py-4 bg-green-600 text-white rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
          >
            {isLastQuestion ? 'See Results' : 'Next Question →'}
          </button>
        )}
      </div>

      {/* Quiz info */}
      <div className="max-w-3xl mx-auto mt-6 text-center text-sm text-gray-500">
        <p>{quiz.title}</p>
        <p>Estimated time: {quiz.estimatedMinutes} minutes</p>
      </div>
    </div>
  );
}
