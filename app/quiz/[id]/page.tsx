import { notFound } from 'next/navigation';
import { getQuizById, getAllQuizIds } from '@/data/quizzes';
import QuizContainer from '@/components/quiz/QuizContainer';

// Generate static params for all quiz IDs
export function generateStaticParams() {
  return getAllQuizIds().map((id) => ({
    id,
  }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const quiz = getQuizById(id);

  if (!quiz) {
    return {
      title: 'Quiz Not Found',
    };
  }

  return {
    title: `${quiz.title} | Diabetes Revolution`,
    description: quiz.description,
  };
}

export default async function QuizPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const quiz = getQuizById(id);

  if (!quiz) {
    notFound();
  }

  return <QuizContainer quiz={quiz} />;
}
