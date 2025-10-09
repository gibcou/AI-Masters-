import React from 'react'
import Link from 'next/link'

const CoursesPage = () => {
  const courses = [
    {
      id: 'ai-entrepreneurship',
      title: 'AI Entrepreneurship Mastery',
      description: 'Learn how to build and scale AI-powered businesses from the ground up.',
      duration: '8 weeks',
      level: 'Intermediate',
      modules: 3,
      lessons: 24,
      image: '🚀',
      href: '/courses/ai-entrepreneurship',
      color: 'from-purple-600 to-blue-600'
    },
    {
      id: 'ai-career',
      title: 'AI for Career Advancement',
      description: 'Master AI tools and strategies to accelerate your professional growth.',
      duration: '6 weeks',
      level: 'Beginner to Intermediate',
      modules: 3,
      lessons: 18,
      image: '📈',
      href: '/courses/ai-career',
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 'ai-fundamentals',
      title: 'AI Fundamentals & Applications',
      description: 'Build a solid foundation in AI concepts and practical applications.',
      duration: '4 weeks',
      level: 'Beginner',
      modules: 3,
      lessons: 15,
      image: '🧠',
      href: '/courses/ai-fundamentals',
      color: 'from-orange-600 to-red-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-700 mb-6 shadow-lg">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Premium AI Education
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
              AI Courses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Master artificial intelligence with our comprehensive courses designed for every skill level. 
              Transform your career with cutting-edge AI knowledge.
            </p>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="group relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                {/* Course Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                    {course.image}
                  </div>
                  <div className={`absolute -inset-1 bg-gradient-to-br ${course.color} rounded-2xl opacity-20 blur-sm`}></div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{course.description}</p>
                
                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50/80 rounded-xl p-3 text-center">
                    <div className="text-sm text-gray-500 mb-1">Duration</div>
                    <div className="font-bold text-gray-900">{course.duration}</div>
                  </div>
                  <div className="bg-gray-50/80 rounded-xl p-3 text-center">
                    <div className="text-sm text-gray-500 mb-1">Level</div>
                    <div className="font-bold text-gray-900">{course.level}</div>
                  </div>
                  <div className="bg-gray-50/80 rounded-xl p-3 text-center">
                    <div className="text-sm text-gray-500 mb-1">Modules</div>
                    <div className="font-bold text-gray-900">{course.modules}</div>
                  </div>
                  <div className="bg-gray-50/80 rounded-xl p-3 text-center">
                    <div className="text-sm text-gray-500 mb-1">Lessons</div>
                    <div className="font-bold text-gray-900">{course.lessons}</div>
                  </div>
                </div>

                <Link 
                  href={course.href}
                  className={`block w-full bg-gradient-to-r ${course.color} text-white text-center py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-lg group-hover:scale-105`}
                >
                  Start Course
                  <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Not Sure Which Course to Take?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Take our AI assessment quiz to get personalized course recommendations based on your goals and experience level.
              </p>
              <Link 
                href="/quiz"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Take Assessment Quiz
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesPage