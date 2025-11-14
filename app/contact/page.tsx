'use client';

import { useState } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section background="gradient" className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Have questions, feedback, or suggestions? We'd love to hear from you.
          </p>
        </div>
      </Section>

      {/* Contact Form & Info Section */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    Your message has been received. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="content">Content Suggestion</option>
                      <option value="technical">Technical Issue</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>
                  
                  <Button type="submit" size="lg" fullWidth>
                    Send Message →
                  </Button>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <a href="mailto:info@codecraftmd.com" className="text-teal-600 hover:text-teal-700">
                  info@codecraftmd.com
                </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Organization</h3>
                    <p className="text-gray-600">Atlanta Perinatal Associates</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
                    <p className="text-gray-600">We typically respond within 1-2 business days</p>
                  </div>
                </div>
              </div>
              
              {/* FAQ Preview */}
              <div className="bg-gradient-to-br from-teal-50 to-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Is the platform really free?</h4>
                    <p className="text-sm text-gray-600">
                      Yes! All quizzes and content are completely free to access.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Can I use this for CME credits?</h4>
                    <p className="text-sm text-gray-600">
                      Currently, we don't offer CME credits, but we're exploring this option for the future.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">How often is content updated?</h4>
                    <p className="text-sm text-gray-600">
                      We review and update our content regularly to align with the latest clinical guidelines.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Can I suggest topics?</h4>
                    <p className="text-sm text-gray-600">
                      Absolutely! We welcome content suggestions. Please use the form to share your ideas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Social Section */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect With Us</h2>
          <p className="text-gray-600 mb-8">
            Follow us for updates, new content, and GDM education resources
          </p>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:scale-110"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            
            <a 
              href="#" 
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a 
              href="#" 
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:scale-110"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
