import { QuizSession, QuizScore, UserAnswer, Quiz } from '@/types/quiz';

/**
 * Create a new quiz session
 */
export function createQuizSession(quizId: string): QuizSession {
  return {
    quizId,
    currentQuestionIndex: 0,
    answers: [],
    startTime: new Date(),
    isCompleted: false,
  };
}

/**
 * Check if an answer is correct
 */
export function checkAnswer(
  quiz: Quiz,
  questionId: string,
  selectedAnswer: string
): boolean {
  const question = quiz.questions.find((q) => q.id === questionId);
  if (!question) return false;
  return question.correctAnswer === selectedAnswer;
}

/**
 * Calculate quiz score
 */
export function calculateScore(
  quiz: Quiz,
  session: QuizSession
): QuizScore {
  const totalQuestions = quiz.questions.length;
  const correctAnswers = session.answers.filter((a) => a.isCorrect).length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  return {
    quizId: quiz.id,
    score: correctAnswers,
    totalQuestions,
    percentage,
    completedAt: new Date(),
    answers: session.answers,
  };
}

/**
 * Get feedback message based on score percentage
 */
export function getScoreFeedback(percentage: number): {
  title: string;
  message: string;
  emoji: string;
} {
  if (percentage === 100) {
    return {
      title: 'Perfect Score!',
      message:
        'Amazing! You have a great understanding of this topic. Keep up the excellent work!',
      emoji: '🌟',
    };
  } else if (percentage >= 80) {
    return {
      title: 'Great Job!',
      message:
        'You did really well! Review the questions you missed to strengthen your knowledge.',
      emoji: '🎉',
    };
  } else if (percentage >= 60) {
    return {
      title: 'Good Effort!',
      message:
        "You're on the right track. Take some time to review the explanations and try again.",
      emoji: '👍',
    };
  } else {
    return {
      title: 'Keep Learning!',
      message:
        "Don't worry! This is a learning process. Review the material and try again - you'll improve!",
      emoji: '💪',
    };
  }
}

/**
 * Save quiz progress to localStorage
 */
export function saveQuizProgress(session: QuizSession): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(
      `quiz_session_${session.quizId}`,
      JSON.stringify(session)
    );
  }
}

/**
 * Load quiz progress from localStorage
 */
export function loadQuizProgress(quizId: string): QuizSession | null {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(`quiz_session_${quizId}`);
    if (saved) {
      const session = JSON.parse(saved);
      // Convert date string back to Date object
      session.startTime = new Date(session.startTime);
      return session;
    }
  }
  return null;
}

/**
 * Clear quiz progress from localStorage
 */
export function clearQuizProgress(quizId: string): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(`quiz_session_${quizId}`);
  }
}

/**
 * Save completed quiz score
 */
export function saveQuizScore(score: QuizScore): void {
  if (typeof window !== 'undefined') {
    const scores = loadAllScores();
    scores[score.quizId] = score;
    localStorage.setItem('quiz_scores', JSON.stringify(scores));
  }
}

/**
 * Load all quiz scores
 */
export function loadAllScores(): Record<string, QuizScore> {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('quiz_scores');
    if (saved) {
      return JSON.parse(saved);
    }
  }
  return {};
}

/**
 * Get best score for a specific quiz
 */
export function getBestScore(quizId: string): QuizScore | null {
  const scores = loadAllScores();
  return scores[quizId] || null;
}
