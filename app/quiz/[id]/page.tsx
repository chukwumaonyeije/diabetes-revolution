import { notFound } from 'next/navigation';
import { getQuizById } from '@/data/quizzes';
import QuizContainer from '@/components/quiz/QuizContainer';

export async function generateStaticParams() {
  // For static export, we need to pre-generate all quiz pages
  // Add all quiz IDs here as they're created
  return [{ id: 'gdm-basics-101' }];
}

export default function QuizPage({ params }: { params: { id: string } }) {
  const quiz = getQuizById(params.id);

  if (!quiz) {
    notFound();
  }

  return <QuizContainer quiz={quiz} />;
}
