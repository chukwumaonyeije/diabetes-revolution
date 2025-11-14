// Type definitions for the quiz system

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  questions: QuizQuestion[];
  estimatedTime: number; // in minutes
  imageUrl?: string;
}

export interface QuizSession {
  quizId: string;
  currentQuestionIndex: number;
  answers: (number | null)[];
  score: number;
  completed: boolean;
  startTime: number;
  endTime?: number;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  timeTaken: number; // in seconds
}
