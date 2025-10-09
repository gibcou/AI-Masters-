'use client'

import React, { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import AuthModal from './AuthModal'
import { db } from '@/lib/firebase'
import { doc, setDoc } from 'firebase/firestore'

interface Question {
  id: number
  question: string
  options: string[]
  category: 'goal' | 'experience' | 'interest' | 'time' | 'preference'
}

const AIQuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [quizResults, setQuizResults] = useState<any>(null)
  const { user } = useAuth()

  const questions: Question[] = [
    {
      id: 1,
      question: "What's your primary career goal with AI?",
      options: ["Start my own AI-powered business", "Advance in my current career", "Learn AI fundamentals from scratch", "Transition to an AI-focused role"],
      category: 'goal'
    },
    {
      id: 2,
      question: "What's your current experience with AI tools?",
      options: ["Never used any AI tools", "Used ChatGPT or similar occasionally", "Regularly use multiple AI tools", "Have technical AI/ML background"],
      category: 'experience'
    },
    {
      id: 3,
      question: "Which best describes your professional situation?",
      options: ["Entrepreneur or want to be one", "Corporate employee seeking advancement", "Student or career changer", "Freelancer or consultant"],
      category: 'goal'
    },
    {
      id: 4,
      question: "How much time can you realistically dedicate to learning weekly?",
      options: ["2-4 hours per week", "5-8 hours per week", "9-15 hours per week", "15+ hours per week"],
      category: 'time'
    },
    {
      id: 5,
      question: "Which AI application would most impact your work?",
      options: ["Business strategy and decision making", "Productivity and workflow automation", "Understanding AI basics and concepts", "Creative content and marketing"],
      category: 'interest'
    },
    {
      id: 6,
      question: "What's your preferred learning approach?",
      options: ["Hands-on projects and real applications", "Step-by-step structured lessons", "Comprehensive theory then practice", "Interactive exercises and quizzes"],
      category: 'preference'
    },
    {
      id: 7,
      question: "What's your main motivation for learning AI?",
      options: ["Build and scale a business", "Get promoted or increase salary", "Understand technology fundamentals", "Stay relevant in changing job market"],
      category: 'goal'
    },
    {
      id: 8,
      question: "Which industry or field are you in (or want to be in)?",
      options: ["Business/Entrepreneurship", "Corporate/Professional services", "Technology/Engineering", "Creative/Marketing/Content"],
      category: 'interest'
    },
    {
      id: 9,
      question: "What's your biggest concern about learning AI?",
      options: ["Too technical and complex", "Not knowing where to start", "Keeping up with rapid changes", "Finding practical applications"],
      category: 'experience'
    },
    {
      id: 10,
      question: "How do you learn best?",
      options: ["Self-directed with clear goals", "Structured curriculum with milestones", "Comprehensive foundation first", "Learning by doing and experimenting"],
      category: 'preference'
    },
    {
      id: 11,
      question: "What's your technical comfort level?",
      options: ["Very comfortable with new tech", "Somewhat comfortable, need guidance", "Prefer simple, user-friendly tools", "Need lots of support and explanation"],
      category: 'experience'
    },
    {
      id: 12,
      question: "Which outcome would excite you most?",
      options: ["Launching an AI-powered startup", "Leading AI initiatives at work", "Understanding how AI really works", "Using AI tools confidently daily"],
      category: 'goal'
    },
    {
      id: 13,
      question: "How do you prefer to apply new knowledge?",
      options: ["Build something from scratch", "Improve existing processes", "Understand concepts thoroughly", "Solve specific problems"],
      category: 'preference'
    },
    {
      id: 14,
      question: "What's your current role or aspiration?",
      options: ["Business owner/Founder", "Manager/Executive", "Individual contributor", "Student/Career explorer"],
      category: 'experience'
    },
    {
      id: 15,
      question: "Which AI skill would be most valuable to you?",
      options: ["AI strategy and business models", "AI tools for productivity", "AI fundamentals and concepts", "AI for specific use cases"],
      category: 'interest'
    },
    {
      id: 16,
      question: "How do you measure professional success?",
      options: ["Building successful ventures", "Career advancement and recognition", "Mastering new skills and knowledge", "Solving meaningful problems"],
      category: 'goal'
    },
    {
      id: 17,
      question: "What's your learning timeline preference?",
      options: ["Intensive, fast-paced program", "Balanced, steady progression", "Comprehensive, thorough coverage", "Flexible, self-paced learning"],
      category: 'time'
    },
    {
      id: 18,
      question: "Which challenge excites you most?",
      options: ["Scaling a business with AI", "Leading AI transformation", "Mastering AI fundamentals", "Applying AI creatively"],
      category: 'interest'
    },
    {
      id: 19,
      question: "What's your ideal learning outcome?",
      options: ["Launch an AI business", "Get promoted using AI skills", "Become AI-literate professional", "Transform how I work"],
      category: 'goal'
    },
    {
      id: 20,
      question: "How do you want to use AI in the next 6 months?",
      options: ["Build AI-powered products/services", "Implement AI in current role", "Understand AI landscape thoroughly", "Automate personal/work tasks"],
      category: 'interest'
    }
  ]

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }))
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      // Quiz completed - check if user is authenticated
      const recommendation = getRecommendation()
      setQuizResults({
        answers,
        recommendation,
        completedAt: new Date().toISOString()
      })
      
      if (user) {
        // User is authenticated, save results and show them
        saveQuizResults(recommendation)
        setShowResults(true)
      } else {
        // User not authenticated, show auth modal first
        setShowAuthModal(true)
      }
      
      // Save quiz completion to localStorage
      localStorage.setItem('quizCompleted', 'true')
      localStorage.setItem('quizCompletionDate', new Date().toISOString())
    }
  }

  const saveQuizResults = async (recommendation: any) => {
    if (!user) return
    
    try {
      await setDoc(doc(db, 'quizResults', user.uid), {
        userId: user.uid,
        answers,
        recommendation,
        completedAt: new Date().toISOString(),
        userEmail: user.email,
        userName: user.displayName
      })
    } catch (error) {
      console.error('Error saving quiz results:', error)
    }
  }

  const handleAuthSuccess = async () => {
    setShowAuthModal(false)
    if (quizResults && user) {
      await saveQuizResults(quizResults.recommendation)
    }
    setShowResults(true)
  }

  const getRecommendation = () => {
    // Initialize scores for each course
    const scores = {
      entrepreneurship: 0,
      career: 0,
      fundamentals: 0
    }

    // Define scoring weights for different answer patterns
    const scoringRules = {
      // Entrepreneurship indicators
      entrepreneurship: [
        { questionId: 1, answers: ["Start my own AI-powered business"], weight: 10 },
        { questionId: 3, answers: ["Entrepreneur or want to be one"], weight: 8 },
        { questionId: 7, answers: ["Build and scale a business"], weight: 9 },
        { questionId: 8, answers: ["Business/Entrepreneurship"], weight: 7 },
        { questionId: 12, answers: ["Launching an AI-powered startup"], weight: 10 },
        { questionId: 14, answers: ["Business owner/Founder"], weight: 8 },
        { questionId: 16, answers: ["Building successful ventures"], weight: 7 },
        { questionId: 18, answers: ["Scaling a business with AI"], weight: 9 },
        { questionId: 19, answers: ["Launch an AI business"], weight: 10 },
        { questionId: 20, answers: ["Build AI-powered products/services"], weight: 8 }
      ],
      // Career advancement indicators
      career: [
        { questionId: 1, answers: ["Advance in my current career"], weight: 10 },
        { questionId: 3, answers: ["Corporate employee seeking advancement"], weight: 8 },
        { questionId: 7, answers: ["Get promoted or increase salary"], weight: 9 },
        { questionId: 8, answers: ["Corporate/Professional services"], weight: 7 },
        { questionId: 12, answers: ["Leading AI initiatives at work"], weight: 10 },
        { questionId: 14, answers: ["Manager/Executive"], weight: 8 },
        { questionId: 16, answers: ["Career advancement and recognition"], weight: 7 },
        { questionId: 18, answers: ["Leading AI transformation"], weight: 9 },
        { questionId: 19, answers: ["Get promoted using AI skills"], weight: 10 },
        { questionId: 20, answers: ["Implement AI in current role"], weight: 8 }
      ],
      // Fundamentals indicators
      fundamentals: [
        { questionId: 1, answers: ["Learn AI fundamentals from scratch", "Transition to an AI-focused role"], weight: 9 },
        { questionId: 2, answers: ["Never used any AI tools", "Used ChatGPT or similar occasionally"], weight: 8 },
        { questionId: 3, answers: ["Student or career changer"], weight: 7 },
        { questionId: 5, answers: ["Understanding AI basics and concepts"], weight: 10 },
        { questionId: 7, answers: ["Understand technology fundamentals", "Stay relevant in changing job market"], weight: 8 },
        { questionId: 9, answers: ["Not knowing where to start", "Finding practical applications"], weight: 7 },
        { questionId: 11, answers: ["Need lots of support and explanation", "Prefer simple, user-friendly tools"], weight: 6 },
        { questionId: 12, answers: ["Understanding how AI really works", "Using AI tools confidently daily"], weight: 9 },
        { questionId: 14, answers: ["Student/Career explorer"], weight: 8 },
        { questionId: 15, answers: ["AI fundamentals and concepts"], weight: 10 },
        { questionId: 16, answers: ["Mastering new skills and knowledge"], weight: 7 },
        { questionId: 18, answers: ["Mastering AI fundamentals"], weight: 9 },
        { questionId: 19, answers: ["Become AI-literate professional", "Transform how I work"], weight: 8 },
        { questionId: 20, answers: ["Understand AI landscape thoroughly", "Automate personal/work tasks"], weight: 7 }
      ]
    }

    // Calculate scores based on user answers
    Object.entries(answers).forEach(([questionIndex, answer]) => {
      const questionId = parseInt(questionIndex) + 1 // Convert to 1-based indexing
      
      // Check entrepreneurship scoring rules
      scoringRules.entrepreneurship.forEach(rule => {
        if (rule.questionId === questionId && rule.answers.includes(answer)) {
          scores.entrepreneurship += rule.weight
        }
      })
      
      // Check career scoring rules
      scoringRules.career.forEach(rule => {
        if (rule.questionId === questionId && rule.answers.includes(answer)) {
          scores.career += rule.weight
        }
      })
      
      // Check fundamentals scoring rules
      scoringRules.fundamentals.forEach(rule => {
        if (rule.questionId === questionId && rule.answers.includes(answer)) {
          scores.fundamentals += rule.weight
        }
      })
    })

    // Determine the best course based on highest score
    const maxScore = Math.max(scores.entrepreneurship, scores.career, scores.fundamentals)
    const totalPossibleScore = 100 // Approximate max possible score
    const confidencePercentage = Math.min(Math.round((maxScore / totalPossibleScore) * 100) + 70, 95)

    if (scores.entrepreneurship === maxScore) {
      return {
        course: "AI Entrepreneurship Mastery",
        description: "Perfect for aspiring entrepreneurs who want to build and scale AI-powered businesses from the ground up",
        readiness: `${confidencePercentage}%`,
        duration: "8-week intensive program",
        courseUrl: "/courses/ai-entrepreneurship",
        matchReason: "Your responses indicate strong entrepreneurial ambitions and interest in building AI-powered ventures"
      }
    } else if (scores.career === maxScore) {
      return {
        course: "AI for Career Advancement",
        description: "Designed for professionals looking to leverage AI tools and strategies to accelerate their career growth",
        readiness: `${confidencePercentage}%`,
        duration: "6-week structured program",
        courseUrl: "/courses/ai-career",
        matchReason: "Your profile shows you're focused on advancing in your current career using AI capabilities"
      }
    } else {
      return {
        course: "AI Fundamentals & Applications",
        description: "Comprehensive introduction to AI concepts, tools, and practical applications for beginners",
        readiness: `${confidencePercentage}%`,
        duration: "4-week foundation program",
        courseUrl: "/courses/ai-fundamentals",
        matchReason: "You'll benefit most from building a solid foundation in AI concepts and practical applications"
      }
    }
  }

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100

  const renderQuizQuestion = () => (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-blue-600">
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
          {questions[currentQuestion].question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-4">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="w-full p-4 text-left bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md group"
          >
            <div className="flex items-center justify-between">
              <span className="text-gray-900 font-medium group-hover:text-blue-700">
                {option}
              </span>
              <div className="w-6 h-6 border-2 border-gray-300 rounded-full group-hover:border-blue-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Back Button */}
      {currentQuestion > 0 && (
        <button
          onClick={() => setCurrentQuestion(prev => prev - 1)}
          className="mt-6 text-gray-500 hover:text-gray-700 flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Previous Question
        </button>
      )}
    </div>
  )

  const renderResults = () => {
    const recommendation = getRecommendation()
    
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h2>
          <p className="text-gray-600">Based on your answers, here's our recommendation:</p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border border-blue-100">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Recommended Course: {recommendation.course}
          </h3>
          <p className="text-gray-700 mb-4">{recommendation.description}</p>
          <a 
            href={recommendation.courseUrl}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Start Learning
          </a>
        </div>

        <div className="border-t pt-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Other Courses You Might Like:</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <h5 className="font-semibold text-gray-900 mb-2">AI for Entrepreneurs</h5>
              <p className="text-sm text-gray-600 mb-3">Learn how to leverage AI to build and scale your business.</p>
              <a href="/courses/ai-entrepreneurship" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Learn More →
              </a>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <h5 className="font-semibold text-gray-900 mb-2">Career Advancement with AI</h5>
              <p className="text-sm text-gray-600 mb-3">Boost your career prospects with AI skills and knowledge.</p>
              <a href="/courses/ai-career" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Learn More →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button 
            onClick={() => {
              setCurrentQuestion(0)
              setAnswers({})
              setShowResults(false)
              setQuizResults(null)
            }}
            className="text-gray-500 hover:text-gray-700 font-medium"
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {!showResults ? (
          renderQuizQuestion()
        ) : (
          renderResults()
        )}
        
        {/* Authentication Modal */}
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onSuccess={handleAuthSuccess}
        />
      </div>
    </div>
  )
}

export default AIQuizPage