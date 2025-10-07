'use client'

import React from 'react'

const HeroSection = () => {
  const handleStartLearning = () => {
    // Simulate start learning functionality
    alert('Start Learning Today functionality would redirect to course selection/dashboard')
  }

  const profileImages = [
    "https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.530e15cd.png&w=96&q=75",
    "https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.c9e01515.png&w=96&q=75",
    "https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.b716e41c.png&w=96&q=75",
    "https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.9d17d9c3.png&w=96&q=75",
    "https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.a418b884.png&w=96&q=75"
  ]

  return (
    <section id="hero" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Become the<br />
              Master of AI
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Learn how AI can increase your income and improve your life
            </p>
            
            <button 
              onClick={handleStartLearning}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors mb-8"
            >
              Start Now →
            </button>
            
            {/* Profile images and count */}
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-4">
                {profileImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Learner ${index + 1}`}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                  />
                ))}
              </div>
              <span className="text-gray-600 text-sm">
                More than 1,181,062+ people joined
              </span>
            </div>
          </div>
          
          {/* Right side - Video/Content area */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="bg-gray-100 rounded-2xl p-8 w-full max-w-md">
              {/* Video placeholder */}
              <div className="bg-blue-600 rounded-xl p-6 mb-4 relative">
                <div className="flex items-center justify-center h-48">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[12px] border-l-blue-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 flex space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                </div>
              </div>
              
              {/* Input field */}
              <div className="flex">
                <input
                  type="text"
                  placeholder="Generate"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors">
                  <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection