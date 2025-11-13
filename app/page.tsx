import Link from 'next/link';
import { quizzes } from '@/data/quizzes';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Diabetes Revolution 2026
          </h1>
          <p className="text-gray-600 mt-1">by Dr. Onyeije</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Learn About Gestational Diabetes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fun, bite-sized quizzes that teach you everything you need to know
            about gestational diabetes mellitus (GDM) - one question at a time.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Focused Learning
            </h3>
            <p className="text-gray-600">
              Short quests designed to help you master one topic at a time
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-4xl mb-3">🖼️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Visual & Clear
            </h3>
            <p className="text-gray-600">
              Image-driven content with simple explanations that stick
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-4xl mb-3">👨‍⚕️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Expert Verified
            </h3>
            <p className="text-gray-600">
              Created by an MFM specialist, aligned with ACOG/SMFM guidelines
            </p>
          </div>
        </div>

        {/* Quizzes */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Start Your Learning Journey
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((quiz) => (
              <Link
                key={quiz.id}
                href={`/quiz/${quiz.id}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="p-6">
                  {/* Difficulty badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        quiz.difficulty === 'beginner'
                          ? 'bg-green-100 text-green-800'
                          : quiz.difficulty === 'intermediate'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {quiz.difficulty.charAt(0).toUpperCase() +
                        quiz.difficulty.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500">
                      {quiz.estimatedMinutes} min
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {quiz.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{quiz.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{quiz.questions.length} questions</span>
                    <span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform inline-block">
                      Start Quiz →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="mt-16 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <h4 className="font-bold text-gray-900 mb-2">
            ⚕️ Medical Disclaimer
          </h4>
          <p className="text-gray-700 text-sm">
            This app is for educational purposes only and is not intended as
            medical advice. Always consult with qualified healthcare
            professionals for diagnosis and treatment of diabetes or any other
            medical condition. The information provided should complement, not
            replace, the advice of your healthcare provider.
          </p>
        </div>

        {/* About */}
        <div className="mt-12 text-center text-gray-600">
          <p className="mb-2">
            Created with ❤️ by Dr. Onyeije, Maternal-Fetal Medicine Specialist
          </p>
          <p className="text-sm">
            Built with Next.js • Content aligned with ACOG/SMFM guidelines
          </p>
        </div>
      </section>
    </div>
  );
}
