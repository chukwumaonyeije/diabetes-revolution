'use client';

import { QuizQuestion as QuizQuestionType } from '@/types/quiz';
import Image from 'next/image';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer: string | null;
  onSelectAnswer: (answerId: string) => void;
  showResult: boolean;
  questionNumber: number;
  totalQuestions: number;
}

export default function QuizQuestion({
  question,
  selectedAnswer,
  onSelectAnswer,
  showResult,
  questionNumber,
  totalQuestions,
}: QuizQuestionProps) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress indicator */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-sm font-medium text-gray-600">
            {Math.round((questionNumber / totalQuestions) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          {question.question}
        </h2>

        {/* Optional question image */}
        {question.image && (
          <div className="mb-6 relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src={question.image}
              alt="Question illustration"
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Answer options */}
        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            const isCorrect = option.id === question.correctAnswer;
            const showCorrectAnswer = showResult && isCorrect;
            const showIncorrectAnswer = showResult && isSelected && !isCorrect;

            let buttonClasses =
              'w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ';

            if (showCorrectAnswer) {
              buttonClasses += 'border-green-500 bg-green-50';
            } else if (showIncorrectAnswer) {
              buttonClasses += 'border-red-500 bg-red-50';
            } else if (isSelected) {
              buttonClasses += 'border-blue-500 bg-blue-50';
            } else {
              buttonClasses +=
                'border-gray-200 hover:border-blue-300 hover:bg-blue-50';
            }

            if (showResult) {
              buttonClasses += ' cursor-default';
            } else {
              buttonClasses += ' cursor-pointer';
            }

            return (
              <button
                key={option.id}
                onClick={() => !showResult && onSelectAnswer(option.id)}
                disabled={showResult}
                className={buttonClasses}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">{option.text}</span>
                  {showResult && (
                    <span className="text-2xl">
                      {isCorrect ? '✓' : isSelected ? '✗' : ''}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation (shown after answer) */}
        {showResult && (
          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <h3 className="font-bold text-lg mb-2 text-blue-900">
              Explanation:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {question.explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
