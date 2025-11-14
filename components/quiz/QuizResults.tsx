'use client';

import { QuizResult } from '@/types/quiz';
import { getFeedbackMessage, formatTime } from '@/lib/quiz-utils';
import Link from 'next/link';

interface QuizResultsProps {
  result: QuizResult;
  quizTitle: string;
  onRetry: () => void;
}

export default function QuizResults({ result, quizTitle, onRetry }: QuizResultsProps) {
  const feedbackMessage = getFeedbackMessage(result.percentage);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete! 🎉</h1>
          <p className="text-gray-600">{quizTitle}</p>
        </div>

        {/* Score Circle */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <svg className="transform -rotate-90 w-32 h-32">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-gray-200"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={`${2 * Math.PI * 56}`}
                strokeDashoffset={`${2 * Math.PI * 56 * (1 - result.percentage / 100)}`}
                className={`${
                  result.percentage >= 70 ? 'text-green-500' : 'text-orange-500'
                } transition-all duration-1000`}
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-3xl font-bold text-gray-800">{result.percentage}%</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-800">{result.score}</div>
            <div className="text-sm text-gray-600">Correct</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-800">{result.totalQuestions - result.score}</div>
            <div className="text-sm text-gray-600">Incorrect</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-800">{formatTime(result.timeTaken)}</div>
            <div className="text-sm text-gray-600">Time</div>
          </div>
        </div>

        {/* Feedback */}
        <div className={`p-4 rounded-lg mb-8 ${
          result.passed ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'
        }`}>
          <p className="text-center text-lg font-medium">{feedbackMessage}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onRetry}
            className="flex-1 bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
