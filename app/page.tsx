import Link from 'next/link';
import { quizzes } from '@/data/quizzes/index';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section background="gradient" className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold">
            🏥 Expert-Verified Medical Education
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Master Gestational
            <span className="block bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
              Diabetes Mellitus
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Interactive, evidence-based quizzes designed by maternal-fetal medicine specialists.
            Perfect for healthcare professionals, students, and patients seeking to understand GDM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/#quizzes" size="lg">
              Start Learning Today →
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
          
          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">{quizzes.length}</div>
              <div className="text-gray-600 font-medium">Quizzes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">8</div>
              <div className="text-gray-600 font-medium">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Free Access</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section id="features" background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Diabetes Revolution?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive learning platform built on clinical excellence and educational best practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-teal-500 hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Focused Learning</h3>
            <p className="text-gray-600 leading-relaxed">
              Targeted quizzes covering all essential GDM topics from basics to advanced management. 
              Each question includes detailed explanations to reinforce learning.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500 hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">📊</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Track Progress</h3>
            <p className="text-gray-600 leading-relaxed">
              Monitor your learning journey with instant feedback and detailed analytics. 
              Identify knowledge gaps and track improvement over time.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-teal-500 hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">✅</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Expert Verified</h3>
            <p className="text-gray-600 leading-relaxed">
              All content is medically accurate and based on ACOG/ADA guidelines. 
              Created and reviewed by board-certified maternal-fetal medicine specialists.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500 hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">📱</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Mobile Friendly</h3>
            <p className="text-gray-600 leading-relaxed">
              Learn anywhere, anytime. Our responsive design works seamlessly 
              on all devices - desktop, tablet, or smartphone.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-teal-500 hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🔄</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Self-Paced</h3>
            <p className="text-gray-600 leading-relaxed">
              No deadlines, no pressure. Take quizzes as many times as you need. 
              Your progress is automatically saved and can be resumed anytime.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500 hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🎓</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Evidence-Based</h3>
            <p className="text-gray-600 leading-relaxed">
              Every question is grounded in current clinical guidelines and 
              evidence-based medicine from leading medical organizations.
            </p>
          </div>
        </div>
      </Section>

      {/* About Preview Section */}
      <Section background="gray">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold">
                Meet the Creator
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Created by Experts,
                <span className="block text-teal-600">Designed for You</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Diabetes Revolution was developed by <strong>Dr. Chukwuma Onyeije</strong>, 
                a board-certified Maternal-Fetal Medicine specialist at Atlanta Perinatal Associates.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With years of clinical experience managing high-risk pregnancies and gestational 
                diabetes, Dr. Onyeije created this platform to make evidence-based GDM education 
                accessible to healthcare professionals, students, and patients worldwide.
              </p>
              <Button href="/about" variant="outline" size="lg">
                Learn More About Our Mission →
              </Button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-teal-100 to-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-8xl">👨‍⚕️</span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Chukwuma Onyeije, MD
                </h3>
                <p className="text-teal-600 font-semibold mb-2">
                  Maternal-Fetal Medicine Specialist
                </p>
                <p className="text-gray-600">
                  Atlanta Perinatal Associates
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quiz Categories Section */}
      <Section id="quizzes" background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Quiz Library
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {quizzes.length} expertly crafted quizzes covering every aspect of gestational diabetes management
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </Section>

      {/* Testimonials Section */}
      <Section background="gradient">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what learners are saying about Diabetes Revolution
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic leading-relaxed">
              "An excellent resource for reviewing GDM management. The questions are clinically 
              relevant and the explanations are thorough. Highly recommend for OB residents!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">👩‍⚕️</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Dr. Sarah Mitchell</div>
                <div className="text-sm text-gray-600">OB/GYN Resident</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic leading-relaxed">
              "As a diabetes educator, I use this platform to brush up on GDM specifics. 
              The content is evidence-based and perfectly aligned with current guidelines."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">James Rodriguez, RN, CDE</div>
                <div className="text-sm text-gray-600">Diabetes Educator</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic leading-relaxed">
              "This helped me understand my diagnosis so much better. The explanations are 
              clear without being overwhelming. Thank you for making this free and accessible!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🤰</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Emily Chen</div>
                <div className="text-sm text-gray-600">Expecting Mother</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-12 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Master GDM?
            </h2>
            <p className="text-xl mb-8 text-teal-50">
              Join healthcare professionals and patients worldwide in advancing 
              their knowledge of gestational diabetes management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/#quizzes" 
                variant="secondary" 
                size="lg"
                className="bg-white text-teal-700 hover:bg-gray-100"
              >
                Browse All Quizzes
              </Button>
              <Button 
                href="/contact" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Medical Disclaimer */}
      <Section background="gray" className="py-12">
        <div className="max-w-4xl mx-auto bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
          <div className="flex items-start">
            <span className="text-3xl mr-4">⚠️</span>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Medical Disclaimer</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                This educational platform provides information about Gestational Diabetes Mellitus for learning purposes only. 
                It is not intended to replace professional medical advice, diagnosis, or treatment. Always consult with qualified 
                healthcare providers regarding any medical conditions or concerns. The creators and contributors to this platform 
                are not responsible for any decisions made based on the information provided herein.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
