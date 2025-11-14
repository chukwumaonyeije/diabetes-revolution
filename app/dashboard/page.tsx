import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Section from '@/components/ui/Section';
import { quizzes } from '@/data/quizzes/index';

export default async function DashboardPage() {
  const user = await currentUser();
  
  if (!user) {
    redirect('/sign-in');
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <Section background="gradient" className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome back, {user.firstName || 'Learner'}!
            </h1>
            <p className="text-gray-600 text-lg">
              Continue your GDM learning journey
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-teal-600">
              <div className="text-3xl font-bold text-teal-600 mb-2">{quizzes.length}</div>
              <div className="text-gray-600 font-medium">Available Quizzes</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600">
              <div className="text-3xl font-bold text-green-600 mb-2">0</div>
              <div className="text-gray-600 font-medium">Completed</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-teal-600">
              <div className="text-3xl font-bold text-teal-600 mb-2">0%</div>
              <div className="text-gray-600 font-medium">Average Score</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600">
              <div className="text-3xl font-bold text-green-600 mb-2">0</div>
              <div className="text-gray-600 font-medium">Study Time</div>
            </div>
          </div>

          {/* Coming Soon Notice */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-12">
            <div className="flex items-start">
              <span className="text-3xl mr-4">🚀</span>
              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-lg">Progress Tracking Coming Soon!</h3>
                <p className="text-blue-700 leading-relaxed">
                  We're working on database integration to save your quiz progress, track your performance over time, 
                  and sync across all your devices. For now, your progress is saved locally in your browser.
                </p>
              </div>
            </div>
          </div>

          {/* All Quizzes */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Quizzes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzes.map((quiz) => (
                <Link
                  key={quiz.id}
                  href={`/quiz/${quiz.id}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group transform hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-semibold rounded-full">
                        {quiz.category}
                      </span>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        quiz.difficulty === 'easy'
                          ? 'bg-green-100 text-green-800'
                          : quiz.difficulty === 'medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {quiz.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                      {quiz.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        📝 <span className="ml-1">{quiz.questions.length} Questions</span>
                      </span>
                      <span className="flex items-center">
                        ⏱️ <span className="ml-1">{quiz.estimatedTime}min</span>
                      </span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-teal-600 to-green-600 group-hover:from-teal-700 group-hover:to-green-700 text-white py-3 text-center font-semibold transition-all">
                    Start Quiz →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
