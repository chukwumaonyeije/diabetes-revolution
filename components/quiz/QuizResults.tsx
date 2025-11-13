'use client';

import { QuizScore, Quiz } from '@/types/quiz';
import { getScoreFeedback } from '@/lib/quiz-utils';
import Link from 'next/link';

interface QuizResultsProps {
  quiz: Quiz;
  score: QuizScore;
  onRetake: () => void;
}

export default function QuizResults({ quiz, score, onRetake }: QuizResultsProps) {
  const feedback = getScoreFeedback(score.percentage);
  const incorrectAnswers = score.answers.filter((a) => !a.isCorrect);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        {/* Score display */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{feedback.emoji}</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {feedback.title}
          </h2>
          <p className="text-xl text-gray-600 mb-6">{feedback.message}</p>

          {/* Score circle */}
          <div className="inline-block">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  className="text-gray-200 stroke-current"
                  strokeWidth="10"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                />
                {/* Progress circle */}
                <circle
                  className="text-blue-600 stroke-current"
                  strokeWidth="10"
                  strokeLinecap="round"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${
                    2 * Math.PI * 40 * (1 - score.percentage / 100)
                  }`}
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-gray-900">
                  {score.percentage}%
                </span>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              {score.score} out of {score.totalQuestions} correct
            </p>
          </div>
        </div>

        {/* Question review */}
        {incorrectAnswers.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Questions to Review:
            </h3>
            <div className="space-y-2">
              {incorrectAnswers.map((answer) => {
                const question = quiz.questions.find(
                  (q) => q.id === answer.questionId
                );
                return (
                  <div
                    key={answer.questionId}
                    className="p-4 bg-red-50 border-l-4 border-red-500 rounded"
                  >
                    <p className="font-medium text-gray-900">
                      {question?.question}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRetake}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Retake Quiz
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-center"
          >
            Back to Home
          </Link>
        </div>

        {/* Educational note */}
        <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <p className="text-sm text-gray-700">
            <strong>Remember:</strong> This quiz is for educational purposes
            only. Always consult with your healthcare provider for personalized
            medical advice about gestational diabetes.
          </p>
        </div>
      </div>
    </div>
  );
}
