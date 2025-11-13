// Core types for the Diabetes Revolution quiz app

export interface QuizQuestion {
  id: string;
  question: string;
  image?: string; // Optional image URL
  options: QuizOption[];
  correctAnswer: string; // ID of the correct option
  explanation: string; // Detailed explanation shown after answering
  tags?: string[]; // For categorization (e.g., "diagnosis", "treatment", "monitoring")
}

export interface QuizOption {
  id: string;
  text: string;
  image?: string; // Optional image for the option
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  coverImage?: string;
  questions: QuizQuestion[];
  category: QuizCategory;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedMinutes: number;
}

export type QuizCategory =
  | 'basics'
  | 'diagnosis'
  | 'monitoring'
  | 'treatment'
  | 'nutrition'
  | 'complications'
  | 'postpartum';

export interface Quest {
  id: string;
  title: string;
  description: string;
  icon?: string;
  quizzes: string[]; // Array of quiz IDs
  requiredScore?: number; // Minimum score to complete quest
  isLocked?: boolean;
  prerequisiteQuest?: string; // ID of quest that must be completed first
}

export interface UserProgress {
  completedQuizzes: string[];
  completedQuests: string[];
  quizScores: Record<string, QuizScore>;
  currentQuest?: string;
}

export interface QuizScore {
  quizId: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  completedAt: Date;
  answers: UserAnswer[];
}

export interface UserAnswer {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  timeSpent?: number; // seconds
}

export interface QuizSession {
  quizId: string;
  currentQuestionIndex: number;
  answers: UserAnswer[];
  startTime: Date;
  isCompleted: boolean;
}
