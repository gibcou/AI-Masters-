'use client'

import React, { useState } from 'react'

const PathsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const paths = [
    {
      title: "AI-powered business",
      description: "Use tools to automate workflows, analyze data, and make smarter decisions that save time and money",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="7.5,4.21 12,6.81 16.5,4.21"/>
          <polyline points="7.5,19.79 7.5,14.6 3,12"/>
          <polyline points="21,12 16.5,14.6 16.5,19.79"/>
        </svg>
      )
    },
    {
      title: "AI marketing",
      description: "Learn how to increase sales with AI-driven tools for ads, social media, and more...",
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      title: "AI productivity",
      description: "Simplify your daily tasks with AI tools that save time and increase efficiency",
      icon: (
        <svg className="w-12 h-12 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3v18h18V3H3zm16 16H5V5h14v14z"/>
          <path d="M7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
        </svg>
      )
    },
    {
      title: "AI Content Creation",
      description: "Quickly produce high-quality content for blogs, websites, and social media with AI",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
      )
    },
    {
      title: "AI affiliate marketing",
      description: "Use AI to find products, automate promotions, and increase affiliate earnings easily",
      icon: (
        <svg className="w-12 h-12 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: "AI income",
      description: "Learn to use AI tools to create new income streams and grow your earnings online",
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      )
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= paths.length ? 0 : prevIndex + 3
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, paths.length - 3) : Math.max(0, prevIndex - 3)
    )
  }

  const visiblePaths = paths.slice(currentIndex, currentIndex + 3)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose your path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore different paths where you could apply AI that will help you succeed in today's digital world
          </p>
        </div>

        {/* Paths carousel with centered navigation */}
        <div className="relative">
          {/* Paths grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {visiblePaths.map((path, index) => (
              <div 
                key={currentIndex + index} 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="mb-6 group-hover:scale-110 transition-transform">
                    {path.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {path.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {path.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 z-10"
            disabled={currentIndex === 0}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 z-10"
            disabled={currentIndex + 3 >= paths.length}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* CTA section */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
            Start Your AI Journey
          </button>
          <p className="text-gray-600 mt-4">
            Choose the path that fits your goals and start learning today
          </p>
        </div>
      </div>
    </section>
  )
}

export default PathsSection