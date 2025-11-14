import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'About Us | Diabetes Revolution',
  description: 'Learn about Diabetes Revolution and Dr. Chukwuma Onyeije, the maternal-fetal medicine specialist behind this comprehensive GDM education platform.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section background="gradient" className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About Diabetes Revolution
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Empowering healthcare professionals and patients with expert-verified 
            education on Gestational Diabetes Mellitus
          </p>
        </div>
      </Section>

      {/* Mission Section */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-green-600 mx-auto"></div>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-teal-600">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Diabetes Revolution was created with a singular goal: to make high-quality, 
              evidence-based education about Gestational Diabetes Mellitus accessible to everyone 
              who needs it—from medical students and healthcare professionals to expecting mothers 
              and their families.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We believe that better education leads to better outcomes. By providing interactive, 
              comprehensive quizzes grounded in current clinical guidelines from ACOG and the ADA, 
              we aim to improve the understanding and management of GDM worldwide.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our platform is completely free because we believe that access to quality medical 
              education should not be a barrier to anyone seeking to learn and improve patient care.
            </p>
          </div>
        </div>
      </Section>

      {/* Founder Section */}
      <Section background="gray">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Founder</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-green-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <div className="aspect-square bg-gradient-to-br from-teal-100 to-green-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-9xl">👨‍⚕️</span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Chukwuma Onyeije, MD
                  </h3>
                  <p className="text-teal-600 font-semibold mb-1">
                    Board-Certified Maternal-Fetal Medicine Specialist
                  </p>
                  <p className="text-gray-600 text-sm">
                    Atlanta Perinatal Associates
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Background & Expertise</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Chukwuma Onyeije is a fellowship-trained, board-certified Maternal-Fetal 
                  Medicine specialist with extensive experience in managing high-risk pregnancies, 
                  including gestational diabetes mellitus. His clinical practice focuses on providing 
                  comprehensive care for pregnant women with complex medical conditions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Throughout his career, Dr. Onyeije has been passionate about medical education 
                  and empowering both healthcare professionals and patients with the knowledge they 
                  need to make informed decisions about maternal and fetal health.
                </p>
              </div>
              
              <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg">
                <p className="text-gray-700 italic leading-relaxed">
                  "I created Diabetes Revolution because I saw a need for accessible, comprehensive, 
                  and accurate education about GDM. Whether you're a medical student, a practicing 
                  physician, or an expecting mother, understanding GDM is crucial for optimal outcomes. 
                  This platform represents my commitment to improving maternal and fetal health through 
                  education."
                </p>
                <p className="text-gray-800 font-semibold mt-4">
                  — Dr. Chukwuma Onyeije
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What We Offer Section */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-green-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Coverage</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                20 carefully crafted quizzes covering every aspect of GDM, from basic definitions 
                to advanced management scenarios.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>100+ medically-accurate questions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Detailed explanations for each answer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Multiple difficulty levels</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Evidence-Based Content</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content is based on current clinical guidelines and evidence-based medicine 
                from leading medical organizations.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>ACOG practice bulletins</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>ADA Standards of Care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Current research and best practices</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Learning</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Engaging quiz format with immediate feedback to reinforce learning and 
                identify areas for improvement.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Instant feedback on answers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Progress tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Self-paced learning</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Accessible to All</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Completely free access for healthcare professionals, students, and patients 
                worldwide.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>No registration required to start</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Mobile-responsive design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Learn from anywhere</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of healthcare professionals and patients mastering GDM management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/#quizzes" size="lg">
              Browse All Quizzes
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
