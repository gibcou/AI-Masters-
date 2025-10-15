'use client'

import React, { useState, useEffect } from 'react'

const CoursesSection = () => {
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if quiz is completed on component mount
    const checkQuizCompletion = () => {
      const completed = localStorage.getItem('quizCompleted')
      setQuizCompleted(completed === 'true')
      setIsLoading(false)
    }

    checkQuizCompletion()
  }, [])

  const courses = [
    {
      title: "AI Entrepreneurship Mastery",
      description: "Build AI-powered businesses and become an AI entrepreneur",
      duration: "4 weeks",
      level: "Intermediate",
      color: "from-blue-600 to-purple-600",
      url: "/courses/ai-entrepreneurship",
      features: ["AI Business Models", "Product Development", "Scaling Strategies"]
    },
    {
      title: "AI for Career Advancement",
      description: "Leverage AI tools to accelerate your professional growth",
      duration: "6 weeks", 
      level: "Beginner to Intermediate",
      color: "from-purple-600 to-pink-600",
      url: "/courses/ai-career",
      features: ["AI in Workplace", "Tool Mastery", "Career Transformation"]
    },
    {
      title: "AI Fundamentals & Applications",
      description: "Complete introduction to AI for absolute beginners",
      duration: "8 weeks",
      level: "Beginner",
      color: "from-green-600 to-blue-600",
      url: "/courses/ai-fundamentals",
      features: ["AI Basics", "Practical Tools", "Ethics & Future"]
    }
  ]

  // Don't render anything while loading
  if (isLoading) {
    return null
  }

  // Don't render courses section if quiz is not completed
  if (!quizCompleted) {
    return (
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unlock Your AI Learning Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Complete our personalized assessment to discover the perfect AI course for your goals and unlock access to our comprehensive learning programs.
            </p>
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Take the AI Assessment</h3>
                <p className="text-gray-600 mb-6">
                  Answer 20 quick questions to get your personalized course recommendation and unlock access to all courses.
                </p>
              </div>
              <a
                href="https://gibcou.github.io/AI-Masters-/quiz/" target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Assessment<svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your AI Learning Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're starting from scratch or looking to advance your career, 
            we have the perfect AI course for your goals and experience level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                    {course.level}
                  </span>
                  <span className="text-gray-500 text-sm">{course.duration}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What you'll learn:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href={course.url}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${course.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Start Learning
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoursesSection