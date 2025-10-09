'use client'

import React from 'react'
import PathsSection from './PathsSection'

const FeaturesSection = () => {
  const features = [
    {
      title: "Quick and easy to follow:",
      description: "Learn AI in just 15 minutes a day—perfect for any age or experience level.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    },
    {
      title: "Multiple learning formats:",
      description: "Choose from audio lessons, step-by-step guides, and interactive courses to suit your style.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    },
    {
      title: "Accessible anytime, anywhere:",
      description: "Our app is available on both the App Store and Play Market for learning on the go.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 20c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm2.5-4H9.5V5h5v13z"/>
        </svg>
      )
    },
    {
      title: "Practical and actionable:",
      description: "Gain hands-on experience with our AI tools which you can apply immediately to increase income-potential.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.67 2 3 2.67 3 3.5v15C3 19.33 3.67 20 4.5 20h15c.83 0 1.5-.67 1.5-1.5v-15C21 2.67 20.33 2 19.5 2zm0 16.5h-15v-11h15v11z"/>
        </svg>
      )
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Section header */}
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Why people love AI Masters
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Thousands of users trust Coursiv to learn AI. Get the tools, skills, and confidence to grow in your career.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fphone.45cc869c.png&w=640&q=75"
                alt="Coursiv mobile app interface showing AI Mastery course with ChatGPT and Dall-E modules"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>

        {/* Choose your path section */}
        <PathsSection />

        {/* Income potential section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left content */}
            <div className="text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Increase your income potential with AI Masters
              </h3>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Learn new digital skills and AI tools to improve your work and boost your income
              </p>
              <button 
                onClick={() => window.location.href = '/quiz'}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Start Now
              </button>
            </div>
            
            {/* Right image */}
            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://coursiv.io/_next/static/media/cta-image.c8e4d71f.png"
                alt="Coursiv community members with chat bubbles showing Joshua and Anne"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default FeaturesSection