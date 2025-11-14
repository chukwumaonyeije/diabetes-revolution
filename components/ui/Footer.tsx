import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DR</span>
              </div>
              <span className="text-white font-bold text-lg">
                Diabetes Revolution
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Empowering healthcare professionals and patients with expert-verified GDM education.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#quizzes" className="hover:text-teal-400 transition-colors">
                  All Quizzes
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-teal-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.acog.org" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                  ACOG Guidelines
                </a>
              </li>
              <li>
                <a href="https://www.diabetes.org" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                  ADA Resources
                </a>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <a href="mailto:info@codecraftmd.com" className="hover:text-teal-400 transition-colors">
                  info@codecraftmd.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>🏥</span>
                <span>Atlanta Perinatal Associates</span>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Diabetes Revolution. Created by{' '}
            <span className="text-teal-400 font-semibold">Chukwuma Onyeije, MD</span>{' '}
            - Maternal-Fetal Medicine Specialist
          </p>
          <p className="text-xs text-gray-500 mt-2">
            <strong>Medical Disclaimer:</strong> This platform provides educational information only and is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}
