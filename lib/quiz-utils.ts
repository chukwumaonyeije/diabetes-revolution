import { Quiz, QuizSession, QuizResult } from '@/types/quiz';

// Initialize a new quiz session
export function initializeQuizSession(quizId: string, totalQuestions: number): QuizSession {
  return {
    quizId,
    currentQuestionIndex: 0,
    answers: Array(totalQuestions).fill(null),
    score: 0,
    completed: false,
    startTime: Date.now(),
  };
}

// Calculate quiz results
export function calculateResults(session: QuizSession, quiz: Quiz): QuizResult {
  const correctAnswers = session.answers.filter(
    (answer, index) => answer === quiz.questions[index].correctAnswer
  ).length;

  const totalQuestions = quiz.questions.length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const timeTaken = session.endTime 
    ? Math.round((session.endTime - session.startTime) / 1000)
    : 0;

  return {
    score: correctAnswers,
    totalQuestions,
    percentage,
    passed: percentage >= 70, // 70% passing grade
    timeTaken,
  };
}

// Save quiz session to localStorage
export function saveQuizSession(session: QuizSession): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(`quiz_${session.quizId}`, JSON.stringify(session));
  }
}

// Load quiz session from localStorage
export function loadQuizSession(quizId: string): QuizSession | null {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(`quiz_${quizId}`);
    return saved ? JSON.parse(saved) : null;
  }
  return null;
}

// Clear quiz session from localStorage
export function clearQuizSession(quizId: string): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(`quiz_${quizId}`);
  }
}

// Check if answer is correct
export function isAnswerCorrect(
  quiz: Quiz,
  questionIndex: number,
  answerIndex: number
): boolean {
  return quiz.questions[questionIndex].correctAnswer === answerIndex;
}

// Get feedback message based on score percentage
export function getFeedbackMessage(percentage: number): string {
  if (percentage >= 90) return 'Excellent! You have mastered this topic! 🌟';
  if (percentage >= 80) return 'Great job! You have a strong understanding! 👏';
  if (percentage >= 70) return 'Good work! You passed! Keep learning! ✅';
  if (percentage >= 60) return 'Not bad! Review the material and try again. 📚';
  return 'Keep studying! You\'ll get there with practice! 💪';
}

// Format time in MM:SS
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
