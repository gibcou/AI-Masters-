'use client'

import React, { useState } from 'react'

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "What makes AI Masters different from other AI courses?",
      answer: "AI Masters is an AI learning platform that helps you master artificial intelligence skills to increase your income and improve your life. We offer practical, actionable courses designed for learners of all levels."
    },
    {
      question: "How to download and use AI Masters?",
      answer: "You can download Coursiv from both the App Store and Google Play Market. Simply search for 'Coursiv' and install the app. Once installed, create your account and start learning immediately with our interactive courses."
    },
    {
      question: "How to log in into AI Masters?",
      answer: "After downloading the app, tap 'Log In' on the welcome screen. Enter your email and password, or use social login options like Google or Apple. If you're new, tap 'Sign Up' to create your account first."
    },
    {
      question: "How to cancel AI Masters subscription?",
      answer: "You can cancel your subscription anytime through your account settings in the app, or through your App Store/Google Play account settings. Your access will continue until the end of your current billing period."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Header */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently asked questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about AI Masters
            </p>
          </div>

          {/* Right side - FAQ items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="w-full text-left flex justify-between items-center py-4 group"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection