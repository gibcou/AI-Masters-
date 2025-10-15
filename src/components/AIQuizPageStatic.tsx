'use client'

import React, { useState } from 'react'

interface Question {
  id: number
  question: string
  options: string[]
  category: 'goal' | 'experience' | 'interest' | 'time' | 'preference'
}

const AIQuizPageStatic = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [quizResults, setQuizResults] = useState<any>(null)

  const questions: Question[] = [
    {
      id: 1,
      question: "What's your primary career goal with AI?",
      options: ["Start my own AI-powered business", "Advance in my current career", "Learn AI fundamentals from scratch", "Transition to an AI-focused role"],
      category: 'goal'
    },
    {
      id: 2,
      question: "What's your current experience level with AI?",
      options: ["Complete beginner", "Some basic knowledge", "Intermediate understanding", "Advanced practitioner"],
      category: 'experience'
    },
    {
      id: 3,
      question: "Which AI area interests you most?",
      options: ["Machine Learning & Data Science", "Natural Language Processing", "Computer Vision", "AI Ethics & Strategy"],
      category: 'interest'
    },
    {
      id: 4,
      question: "How much time can you dedicate to learning per week?",
      options: ["1-3 hours", "4-6 hours", "7-10 hours", "More than 10 hours"],
      category: 'time'
    },
    {
      id: 5,
      question: "What's your preferred learning style?",
      options: ["Hands-on projects", "Theoretical foundations", "Video lectures", "Interactive tutorials"],
      category: 'preference'
    }
  ]

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: answer
    }))

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      calculateResults()
    }
  }

  const calculateResults = () => {
    const goalAnswer = answers[1]
    const experienceAnswer = answers[2]
    const interestAnswer = answers[3]

    let recommendation = {
      course: "AI Fundamentals",
      description: "Perfect for beginners looking to understand AI basics",
      duration: "4-6 weeks",
      level: "Beginner"
    }

    if (goalAnswer === "Start my own AI-powered business") {
      recommendation = {
        course: "AI Entrepreneurship",
        description: "Learn to build and scale AI-powered businesses",
        duration: "8-10 weeks",
        level: "Intermediate"
      }
    } else if (experienceAnswer === "Advanced practitioner") {
      recommendation = {
        course: "Advanced AI Career Track",
        description: "Advanced techniques for AI professionals",
        duration: "12-16 weeks",
        level: "Advanced"
      }
    } else if (interestAnswer === "Machine Learning & Data Science") {
      recommendation = {
        course: "AI Fundamentals with ML Focus",
        description: "Deep dive into machine learning and data science",
        duration: "6-8 weeks",
        level: "Intermediate"
      }
    }

    setQuizResults(recommendation)
    setShowResults(true)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setQuizResults(null)
  }

  if (showResults && quizResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Perfect AI Course</h2>
              <p className="text-gray-600">Based on your responses, here's our recommendation:</p>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white mb-6">
              <h3 className="text-2xl font-bold mb-2">{quizResults.course}</h3>
              <p className="text-blue-100 mb-4">{quizResults.description}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  Duration: {quizResults.duration}
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  Level: {quizResults.level}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => window.open('/courses', '_blank')}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Course Details
              </button>
              <button
                onClick={resetQuiz}
                className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold text-gray-900">AI Course Quiz</h1>
              <span className="text-sm text-gray-500">
                {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {questions[currentQuestion].question}
            </h2>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {currentQuestion > 0 && (
            <button
              onClick={() => setCurrentQuestion(prev => prev - 1)}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Previous Question
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default AIQuizPageStatic
