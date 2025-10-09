'use client'

import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About AI Masters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering millions to master AI and transform their careers through practical, accessible education
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At AI Masters, we believe that artificial intelligence shouldn't be reserved for tech experts. 
              Our mission is to democratize AI education and make it accessible to everyone, regardless of 
              their background or experience level.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We've helped over 1,184,150 learners worldwide discover how AI can increase their income, 
              improve their work efficiency, and open new career opportunities. Our practical, hands-on 
              approach ensures you can apply what you learn immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Join Our Community
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right content - Stats */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Why Choose AI Masters?</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Practical Learning</div>
                  <div className="text-gray-600">Real-world applications you can use today</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Quick Results</div>
                  <div className="text-gray-600">See improvements in just 15 minutes a day</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🏆</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Proven Success</div>
                  <div className="text-gray-600">Over 1M+ successful learners worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team/Values section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
            <p className="text-gray-600">
              We stay at the forefront of AI technology to bring you the latest tools and techniques.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Community</h4>
            <p className="text-gray-600">
              Join a supportive community of learners and experts who help each other succeed.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Growth</h4>
            <p className="text-gray-600">
              We're committed to your continuous learning and career advancement in the AI field.
            </p>
          </div>
        </div>

        {/* How AI Masters works */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How AI Masters works
            </h3>
            <p className="text-xl text-gray-600">
              Learn at your own pace and discover how AI and digital tools can help you grow
            </p>
          </div>

          {/* Step 1: Personal Learning Plan */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Step 1
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Get your personal learning plan
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  You begin by defining your unique goals and needs. From there, a personalized learning plan is created to help you focus on the most relevant skills and tools, ensuring you stay on track and motivated.
                </p>
              </div>
              <div className="order-first lg:order-last">
                <div className="relative">
                  <img 
                    src="https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5d09050c.png&w=750&q=75"
                    alt="Personal learning plan interface showing AI Mastery with 28 modules and progress steps"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Learn the Skills */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 mb-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-last lg:order-first">
                <div className="relative">
                  <img 
                    src="https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.b8d02630.png&w=750&q=75"
                    alt="Learning interface showing AI Mastery MidJourney Level 3 with completed modules and progress tracking"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Step 2
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Learn the skills you need
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our easy-to-follow lessons will guide you through practical, hands-on learning. You'll master the AI tools and other skills that fit your goals, making learning simple and efficient—without overwhelming you.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: Master AI for Your Goals */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Step 3
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Master AI for your goals
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Once you've learned the basics, you'll dive deeper into applying AI to achieve your personal and professional objectives. With each skill mastered, you'll gain the confidence to use AI to boost your productivity, income, and success.
                </p>
              </div>
              <div className="order-first lg:order-last">
                <div className="relative">
                  <img 
                    src="https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.1755dcc3.png&w=750&q=75"
                    alt="AI artwork generation interface showing anime-style portraits with positive feedback and continue button"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection