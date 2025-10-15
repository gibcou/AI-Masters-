'use client'

import React from 'react'

const ChallengeSection = () => {
  const testimonials = [
    {
      name: "Shahe K.",
      image: "https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.4e7ecbed.png&w=64&q=75",
      text: "I have been searching for AI lessons to help me reach my career objectives. I decided to invest in AI Masters, and I have no regrets about that choice. AI Masters offers prompts and a step-by-step teaching approach that motivates and rewards the learning experience."
    },
    {
      name: "Regina Brown",
      image: "https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.812d6860.png&w=64&q=75",
      text: "As someone knowledgeable in AI, I sought to enhance my understanding of using AI for income sources. AI Masters simplified this journey with its clear and easy follow courses. I gained a lot of knowledge, and AI Masters brought attention to several key points that I had previously missed."
    },
    {
      name: "Corey Rein",
      image: "https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.a98faf95.png&w=64&q=75",
      text: "I gained valuable insights and practical skills that I can apply in my own work. The course promotes interactive learning, enabling you to practice what you've learned through hands-on activities."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            See how AI Masters changes lives
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* Challenge section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Join thousands who've transformed their careers with AI Masters
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't let your goals overwhelm you. Learn AI skills tailored to your needs and everyday tasks.
          </p>
          
          {/* AI Mastery section */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-6">AI Mastery</h4>
            
            {/* Challenge icons in horizontal layout */}
            <div className="flex justify-center items-center gap-4 md:gap-6 mb-8 flex-wrap">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-blue-600 flex items-center justify-center mb-2">
                  <img 
                    src="https://coursiv.io/_next/image?url=%2Fassets%2Fhome%2Ficons%2Fchallenges%2F1.png&w=96&q=100" 
                    alt="ChatGPT icon"
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </div>
                <div className="text-sm font-medium text-gray-700">Day 1</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-md flex items-center justify-center mb-2">
                  <img 
                    src="https://coursiv.io/_next/image?url=%2Fassets%2Fhome%2Ficons%2Fchallenges%2F2.png&w=96&q=100" 
                    alt="Machine Learning icon"
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </div>
                <div className="text-sm font-medium text-gray-700">Day 2</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-md flex items-center justify-center mb-2">
                  <img 
                    src="https://coursiv.io/_next/image?url=%2Fassets%2Fhome%2Ficons%2Fchallenges%2F3.png&w=96&q=100" 
                    alt="Natural Language Processing icon"
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </div>
                <div className="text-sm font-medium text-gray-700">Day 3</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-md flex items-center justify-center mb-2">
                  <img 
                    src="https://coursiv.io/_next/image?url=%2Fassets%2Fhome%2Ficons%2Fchallenges%2F4.png&w=96&q=100" 
                    alt="Computer Vision icon"
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </div>
                <div className="text-sm font-medium text-gray-700">Day 4</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-md flex items-center justify-center mb-2">
                  <img 
                    src="https://coursiv.io/_next/image?url=%2Fassets%2Fhome%2Ficons%2Fchallenges%2F5.png&w=96&q=100" 
                    alt="AI Ethics icon"
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </div>
                <div className="text-sm font-medium text-gray-700">Day 5</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-md flex items-center justify-center mb-2">
                  <img 
                    src="https://coursiv.io/_next/image?url=%2Fassets%2Fhome%2Ficons%2Fchallenges%2F6.png&w=96&q=100" 
                    alt="Prompt Engineering icon"
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </div>
                <div className="text-sm font-medium text-gray-700">Day 6</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-md flex items-center justify-center mb-2">
                  <img 
                    src="https://coursiv.io/_next/image?url=%2Fassets%2Fhome%2Ficons%2Fchallenges%2F7.png&w=96&q=100" 
                    alt="AI Tools Overview icon"
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </div>
                <div className="text-sm font-medium text-gray-700">Day 7</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-md flex items-center justify-center mb-2">
                  <img 
                    src="https://coursiv.io/_next/image?url=%2Fassets%2Fhome%2Ficons%2Fchallenges%2F8.png&w=96&q=100" 
                    alt="Advanced Techniques icon"
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </div>
                <div className="text-sm font-medium text-gray-700">Day 8</div>
              </div>
            </div>
          </div>

          {/* Benefits section with checkmarks */}
          <div className="flex justify-center items-center gap-6 md:gap-8 flex-wrap mb-8">
            <div className="flex items-center text-gray-700">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">AI Skills</span>
            </div>
            <div className="flex items-center text-gray-700">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Business Growth</span>
            </div>
            <div className="flex items-center text-gray-700">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Boost Productivity</span>
            </div>
            <div className="flex items-center text-gray-700">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Save Time</span>
            </div>
            <div className="flex items-center text-gray-700">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Advance Career</span>
            </div>
          </div>

          <button 
            onClick={() => window.location.href = '/quiz'}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
          </button>
        </div>
      </div>
    </section>
  )
}

export default ChallengeSection