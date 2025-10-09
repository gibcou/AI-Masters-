'use client'

import React from 'react'

const StatsSection = () => {
  const stats = [
    {
      number: "1,184k+",
      fullNumber: "1,184,200",
      label: "Users learned new skills"
    },
    {
      number: "10,033k+",
      fullNumber: "10,033,279",
      label: "Minutes of content consumed"
    },
    {
      number: "122k+",
      fullNumber: "122,072",
      label: "AI prompts written"
    }
  ]

  return (
    <section 
      className="py-20 bg-gray-50 relative"
      style={{
        backgroundImage: `url('https://coursiv.io/_next/static/media/metrics-map.839602af.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Lighter background overlay for better map visibility */}
      <div className="absolute inset-0 bg-white/60"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Masters in action
          </h2>
          <p className="text-xl text-gray-600">
            See how AI Masters empowers learners: our success in numbers
          </p>
        </div>

        {/* Stats grid - cleaner design */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 mb-2">
                {stat.fullNumber}
              </div>
              <div className="text-lg text-gray-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Certificate section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Earn a certificate that proves your AI skills
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Complete your AI course and receive a certificate to highlight your expertise. 
                It's proof of the valuable skills you've gained to tackle challenges, achieve your goals, 
                and move forward in your career or personal projects.
              </p>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Certificate Today
              </button>
            </div>
            
            {/* Right side - Certificate image */}
            <div className="flex justify-center">
              <img 
                src="https://coursiv.io/_next/static/media/certificate.9be88eb8.png"
                alt="Coursiv AI Certificate showing ChatGPT completion for Joshua H."
                className="w-full max-w-lg h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection