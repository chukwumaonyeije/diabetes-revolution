'use client';

import { useState, useEffect } from 'react';
import { Quiz, QuizSession } from '@/types/quiz';
import {
  initializeQuizSession,
  calculateResults,
  saveQuizSession,
  loadQuizSession,
  clearQuizSession,
} from '@/lib/quiz-utils';
import QuizQuestion from './QuizQuestion';
import QuizResults from './QuizResults';

interface QuizContainerProps {
  quiz: Quiz;
}

export default function QuizContainer({ quiz }: QuizContainerProps) {
  const [session, setSession] = useState<QuizSession | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Initialize session on client side
  useEffect(() => {
    setIsClient(true);
    const savedSession = loadQuizSession(quiz.id);
    if (savedSession && !savedSession.completed) {
      setSession(savedSession);
    } else {
      const newSession = initializeQuizSession(quiz.id, quiz.questions.length);
      setSession(newSession);
    }
  }, [quiz.id, quiz.questions.length]);

  // Save session whenever it changes
  useEffect(() => {
    if (session && isClient) {
      saveQuizSession(session);
    }
  }, [session, isClient]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (!session || showExplanation) return;

    const updatedAnswers = [...session.answers];
    updatedAnswers[session.currentQuestionIndex] = answerIndex;

    setSession({
      ...session,
      answers: updatedAnswers,
    });

    setShowExplanation(true);
  };

  const handleNext = () => {
    if (!session) return;

    const isLastQuestion = session.currentQuestionIndex === quiz.questions.length - 1;

    if (isLastQuestion) {
      // Complete the quiz
      const completedSession: QuizSession = {
        ...session,
        completed: true,
        endTime: Date.now(),
      };
      setSession(completedSession);
      saveQuizSession(completedSession);
    } else {
      // Move to next question
      setSession({
        ...session,
        currentQuestionIndex: session.currentQuestionIndex + 1,
      });
      setShowExplanation(false);
    }
  };

  const handleRetry = () => {
    clearQuizSession(quiz.id);
    const newSession = initializeQuizSession(quiz.id, quiz.questions.length);
    setSession(newSession);
    setShowExplanation(false);
  };

  if (!session || !isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  if (session.completed) {
    const result = calculateResults(session, quiz);
    return <QuizResults result={result} quizTitle={quiz.title} onRetry={handleRetry} />;
  }

  const currentQuestion = quiz.questions[session.currentQuestionIndex];
  const selectedAnswer = session.answers[session.currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Quiz Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{quiz.title}</h1>
          <p className="text-gray-600">{quiz.description}</p>
        </div>

        {/* Question */}
        <QuizQuestion
          question={currentQuestion}
          questionNumber={session.currentQuestionIndex + 1}
          totalQuestions={quiz.questions.length}
          selectedAnswer={selectedAnswer}
          showExplanation={showExplanation}
          onAnswerSelect={handleAnswerSelect}
        />

        {/* Navigation */}
        {showExplanation && (
          <div className="max-w-3xl mx-auto flex justify-end">
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              {session.currentQuestionIndex === quiz.questions.length - 1
                ? 'See Results'
                : 'Next Question →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
