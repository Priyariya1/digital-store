'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const faqCategories = [
    { id: 'about-us', name: 'About us' },
    { id: 'guest-relations', name: 'Guest relations' },
    { id: 'one-key', name: 'One Key™' },
    { id: 'property-listing', name: 'Property listing' },
    { id: 'ranking-metrics', name: 'Ranking and metrics' },
    { id: 'reservations-rates', name: 'Reservations and rates' },
  ];

  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'How will I manage my business with you?',
      answer: 'We provide comprehensive tools and support to help you manage your digital products effectively.'
    },
    {
      id: '2',
      question: 'Is the content on this website available in other languages?',
      answer: 'Yes, we support multiple languages to serve our global community.'
    },
    {
      id: '3',
      question: 'What does it mean to be a part of our booking platform?',
      answer: 'Being part of our platform means joining a community of creators and gaining access to powerful tools.'
    },
    {
      id: '4',
      question: 'What if I have more questions?',
      answer: 'Our support team is always here to help. Contact us anytime.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Yellow Background */}
      <div className="bg-yellow-400 py-40 relative overflow-hidden">
        {/* Decorative Coins */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              <div className="w-16 h-16 border-4 border-yellow-300 rounded-full" />
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-black">Pricing</h2>
            <h1 className="mt-8 text-5xl font-bold text-black">
              Simple,<br />transparent<br />pricing
            </h1>
            <p className="mt-4 text-xl text-black max-w-2xl mx-auto">
              We believe in transparent pricing that helps you grow. No hidden fees, no monthly charges.
            </p>
          </div>
        </div>
      </div>

      {/* Commission-based Pricing Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-indigo-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-2 text-gray-600">10% + $0.50</h2>
              <p className="text-gray-500">
                Per transaction for all sales through your profile or direct links to your customers.
              </p>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-teal-200 text-gray-600 rounded-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-2">30%</h2>
              <p className="text-gray-500">
                Per transaction when new customers find and buy from you through our discover marketplace.
              </p>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-purple-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-2 text-gray-600">Custom</h2>
              <p className="text-gray-500">
                For large organizations with custom requirements. Contact us for details.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription-based Pricing Section */}
      <div >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
        {/* Billing Toggle */}
        <h1 className='text-4xl font-bold mb-10 text-black flex items-center justify-center'>Pricing</h1>
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-lg ${!isAnnual ? 'text-purple-600 font-semibold' : 'text-gray-600'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            style={{ backgroundColor: isAnnual ? '#9333ea' : '#e5e7eb' }}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                isAnnual ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-lg ${isAnnual ? 'text-purple-600 font-semibold' : 'text-gray-600'}`}>
            Annual Billing
          </span>
          {isAnnual && (
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full ml-2">
              Save Up to 20%
            </span>
          )}
        </div>

        {/* Subscription Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-cyan-500 rounded-xl p-8 text-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Basic</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">${isAnnual ? '9' : '12'}</span>
              <span className="text-sm">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li>3 projects</li>
              <li>250 Objects per project</li>
              <li>One Active User</li>
            </ul>
            <button className="w-full py-3 px-4 bg-white text-cyan-500 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Choose this plan
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-emerald-400 rounded-xl p-8 text-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Professional</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">${isAnnual ? '29' : '39'}</span>
              <span className="text-sm">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li>20 projects</li>
              <li>800 Objects per project</li>
              <li>10 Active Users</li>
              <li>Team Collaborations</li>
            </ul>
            <button className="w-full py-3 px-4 bg-white text-emerald-500 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Choose this plan
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-pink-500 rounded-xl p-8 text-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">${isAnnual ? '99' : '129'}</span>
              <span className="text-sm">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li>Unlimited projects</li>
              <li>No Objects Limits</li>
              <li>Unlimited Users</li>
              <li>Team Collaborations</li>
              <li>Priority Support</li>
            </ul>
            <button className="w-full py-3 px-4 bg-white text-pink-500 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Choose this plan
            </button>
          </div>
        </div>
      </div>
      </div>
     
     
     
     
      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* FAQ Header with Illustration */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-2">
            {/* Text Content */}
            <div className="md:w-1/2 text-left">
              <h2 className="text-4xl font-bold mb-10 text-black">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-xl">
                Have questions? Here you'll find the answers most valued by our partners, along with access to step-by-step instructions and support.
              </p>
            </div>
            {/* Illustration */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="./faq1.gif"
                alt="FAQ Illustration"
                className="max-w-md w-full h-auto"
              />
            </div>
          </div>

          {/* FAQ Content */}
          <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
            {/* Sidebar Navigation */}
            <div className="md:w-1/4 pr-8">
              <nav className="space-y-2">
                <Link 
                  href="#about"
                  className="block text-blue-600 hover:underline"
                >
                  About us
                </Link>
                <Link 
                  href="#guest"
                  className="block text-gray-600 hover:text-blue-600 hover:underline"
                >
                  Guest relations
                </Link>
                <Link 
                  href="#onekey"
                  className="block text-gray-600 hover:text-blue-600 hover:underline"
                >
                  One Key™
                </Link>
                <Link 
                  href="#property"
                  className="block text-gray-600 hover:text-blue-600 hover:underline"
                >
                  Property listing
                </Link>
                <Link 
                  href="#ranking"
                  className="block text-gray-600 hover:text-blue-600 hover:underline"
                >
                  Ranking and metrics
                </Link>
                <Link 
                  href="#reservations"
                  className="block text-gray-600 hover:text-blue-600 hover:underline"
                >
                  Reservations and rates
                </Link>
              </nav>
            </div>

            {/* FAQ Questions */}
            <div className="md:w-3/4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-black">About us</h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => setExpandedFAQ(expandedFAQ === '1' ? null : '1')}
                        className="w-full flex justify-between items-center text-left"
                      >
                        <span className="text-gray-900">How will I manage my business with you?</span>
                        <svg
                          className={`w-5 h-5 text-gray-500 transform transition-transform ${
                            expandedFAQ === '1' ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedFAQ === '1' && (
                        <div className="mt-2 text-gray-600">
                          We provide comprehensive tools and support to help you manage your digital products effectively.
                        </div>
                      )}
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => setExpandedFAQ(expandedFAQ === '2' ? null : '2')}
                        className="w-full flex justify-between items-center text-left"
                      >
                        <span className="text-gray-900">Is the content on this website available in other languages?</span>
                        <svg
                          className={`w-5 h-5 text-gray-500 transform transition-transform ${
                            expandedFAQ === '2' ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedFAQ === '2' && (
                        <div className="mt-2 text-gray-600">
                          Yes, we support multiple languages to serve our global community.
                        </div>
                      )}
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => setExpandedFAQ(expandedFAQ === '3' ? null : '3')}
                        className="w-full flex justify-between items-center text-left"
                      >
                        <span className="text-gray-900">What does it mean to be a part of our booking platform?</span>
                        <svg
                          className={`w-5 h-5 text-gray-500 transform transition-transform ${
                            expandedFAQ === '3' ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedFAQ === '3' && (
                        <div className="mt-2 text-gray-600">
                          Being part of our platform means joining a community of creators and gaining access to powerful tools.
                        </div>
                      )}
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => setExpandedFAQ(expandedFAQ === '4' ? null : '4')}
                        className="w-full flex justify-between items-center text-left"
                      >
                        <span className="text-gray-900">What if I have more questions?</span>
                        <svg
                          className={`w-5 h-5 text-gray-500 transform transition-transform ${
                            expandedFAQ === '4' ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedFAQ === '4' && (
                        <div className="mt-2 text-gray-600">
                          Our support team is always here to help. Contact us anytime.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email Signup Section - Shopify Style */}
      <div className="relative py-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-amber-100"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
            Everything you need to sell online, all in one place
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Whether you're building a website, managing inventory, or responding to customers, you can do it all with Digital Store.
          </p>
          
          {/* Email Input */}
          <div className="max-w-2xl mx-auto">
            <form className="flex flex-col sm:flex-row gap-4 text-gray-600 ">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-black text-gray-200 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors"
              >
                Start free trial
              </button>
            </form>
            <p className="text-sm text-gray-600/80 mt-4">
              Try Digital Store free, no credit card required. By entering your email, you agree to receive marketing emails from Digital Store.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 