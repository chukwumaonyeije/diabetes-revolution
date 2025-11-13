import { Quiz } from '@/types/quiz';
import { gdmBasicsQuiz } from './gdm-basics';

// Export all available quizzes
export const quizzes: Quiz[] = [
  gdmBasicsQuiz,
  // Add more quizzes here as they're created
];

// Helper function to get a quiz by ID
export function getQuizById(id: string): Quiz | undefined {
  return quizzes.find((quiz) => quiz.id === id);
}

// Helper function to get quizzes by category
export function getQuizzesByCategory(category: string): Quiz[] {
  return quizzes.filter((quiz) => quiz.category === category);
}

// Helper function to get quizzes by difficulty
export function getQuizzesByDifficulty(
  difficulty: 'beginner' | 'intermediate' | 'advanced'
): Quiz[] {
  return quizzes.filter((quiz) => quiz.difficulty === difficulty);
}
