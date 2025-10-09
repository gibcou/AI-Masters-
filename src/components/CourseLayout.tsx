'use client'

import React, { useState } from 'react'

interface Lesson {
  id: number
  title: string
  duration: string
  type: 'video' | 'reading' | 'practice' | 'quiz'
  completed: boolean
  content: string
  videoUrl?: string
}

interface Module {
  id: number
  title: string
  description: string
  lessons: Lesson[]
  completed: boolean
}

interface CourseLayoutProps {
  courseTitle: string
  courseDescription: string
  duration: string
  level: string
  modules: Module[]
  color: string
}

const CourseLayout: React.FC<CourseLayoutProps> = ({
  courseTitle,
  courseDescription,
  duration,
  level,
  modules,
  color
}) => {
  const [activeModule, setActiveModule] = useState(0)
  const [activeLesson, setActiveLesson] = useState(0)
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set())

  const totalLessons = modules.reduce((total, module) => total + module.lessons.length, 0)
  const completedCount = completedLessons.size
  const progressPercentage = (completedCount / totalLessons) * 100

  const markLessonComplete = (moduleId: number, lessonId: number) => {
    const key = `${moduleId}-${lessonId}`
    setCompletedLessons(prev => new Set([...Array.from(prev), key]))
  }

  const isLessonCompleted = (moduleId: number, lessonId: number) => {
    return completedLessons.has(`${moduleId}-${lessonId}`)
  }

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video':
        return (
          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        )
      case 'reading':
        return (
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
        )
      case 'practice':
        return (
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
          </div>
        )
      case 'quiz':
        return (
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
        )
      default:
        return null
    }
  }

  const currentLesson = modules[activeModule]?.lessons[activeLesson]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Modern Header with Glass Effect */}
      <div className="relative overflow-hidden">
        <div className={`bg-gradient-to-r ${color} relative`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex justify-between items-start">
              <div className="max-w-3xl">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white mb-4 backdrop-blur-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  Course
                </div>
                <h1 className="text-5xl font-bold mb-6 text-white leading-tight">{courseTitle}</h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">{courseDescription}</p>
                <div className="flex items-center space-x-8">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                    <svg className="w-5 h-5 mr-2 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-white font-medium">{duration}</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                    <svg className="w-5 h-5 mr-2 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <span className="text-white font-medium">{level}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-white mb-2">{Math.round(progressPercentage)}%</div>
                  <div className="text-white/80 text-sm font-medium mb-4">Progress</div>
                  <div className="w-32 bg-white/20 rounded-full h-3">
                    <div 
                      className="bg-white h-3 rounded-full transition-all duration-700 ease-out shadow-lg"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <div className="text-white/70 text-xs mt-2">{completedCount} of {totalLessons} lessons</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Modern Sidebar */}
          <div className="w-1/3">
            <div className="bg-white backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                  </svg>
                </div>
                Course Content
              </h2>
              <div className="space-y-3">
                {modules.map((module, moduleIndex) => (
                  <div key={module.id} className="border border-gray-200/50 rounded-xl overflow-hidden bg-white/50 backdrop-blur-sm">
                    <button
                      onClick={() => setActiveModule(moduleIndex)}
                      className={`w-full p-5 text-left transition-all duration-300 ${
                        activeModule === moduleIndex 
                          ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500' 
                          : 'hover:bg-white/80'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg">{module.title}</h3>
                          <p className="text-sm text-gray-600 mt-1 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                            {module.lessons.length} lessons
                          </p>
                        </div>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          activeModule === moduleIndex ? 'bg-blue-500 text-white rotate-90' : 'bg-gray-100 text-gray-400'
                        }`}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </div>
                      </div>
                    </button>
                    
                    {activeModule === moduleIndex && (
                      <div className="px-5 pb-5 space-y-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <button
                            key={lesson.id}
                            onClick={() => setActiveLesson(lessonIndex)}
                            className={`w-full p-4 text-left rounded-xl transition-all duration-300 flex items-center group ${
                              activeLesson === lessonIndex 
                                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-[1.02]' 
                                : 'hover:bg-white/80 hover:shadow-md'
                            }`}
                          >
                            <div className="mr-4">
                               {activeLesson === lessonIndex ? (
                                 <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                   </svg>
                                 </div>
                               ) : (
                                 getLessonIcon(lesson.type)
                               )}
                             </div>
                            <div className="flex-1">
                              <div className="font-medium text-sm">{lesson.title}</div>
                              <div className={`text-xs mt-1 flex items-center ${
                                activeLesson === lessonIndex ? 'text-white/80' : 'text-gray-500'
                              }`}>
                                <span className="capitalize">{lesson.type}</span>
                                <span className="mx-1">•</span>
                                <span>{lesson.duration}</span>
                              </div>
                            </div>
                            {isLessonCompleted(module.id, lesson.id) && (
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center ml-2">
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                </svg>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modern Main Content */}
          <div className="flex-1">
            <div className="bg-white backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8">
              {currentLesson ? (
                <div>
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        {getLessonIcon(currentLesson.type)}
                        <div className="ml-4">
                          <h1 className="text-3xl font-bold text-gray-900 leading-tight">{currentLesson.title}</h1>
                          <div className="flex items-center text-gray-600 mt-2">
                            <span className="capitalize font-medium">{currentLesson.type}</span>
                            <span className="mx-3 w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span>{currentLesson.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => markLessonComplete(modules[activeModule].id, currentLesson.id)}
                      disabled={isLessonCompleted(modules[activeModule].id, currentLesson.id)}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        isLessonCompleted(modules[activeModule].id, currentLesson.id)
                          ? 'bg-green-100 text-green-700 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg'
                      }`}
                    >
                      {isLessonCompleted(modules[activeModule].id, currentLesson.id) ? (
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Completed
                        </span>
                      ) : (
                        'Mark Complete'
                      )}
                    </button>
                  </div>

                  {/* Video Player for Video Lessons */}
                  {currentLesson.type === 'video' && (
                    <div className="mb-8">
                      <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
                        {currentLesson.videoUrl ? (
                          <div className="aspect-video">
                            <iframe
                              src={currentLesson.videoUrl}
                              title={currentLesson.title}
                              className="w-full h-full"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        ) : (
                          <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                            <div className="text-center text-white">
                              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-red-700 transition-colors cursor-pointer">
                                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z"/>
                                </svg>
                              </div>
                              <h3 className="text-xl font-semibold mb-2">{currentLesson.title}</h3>
                              <p className="text-gray-300">Video content coming soon</p>
                              <p className="text-sm text-gray-400 mt-2">Duration: {currentLesson.duration}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Lesson Content */}
                  <div className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-black prose-p:leading-relaxed prose-a:text-blue-600 prose-strong:text-black prose-li:text-black prose-ul:text-black" style={{color: 'black'}}>
                    <div dangerouslySetInnerHTML={{ __html: currentLesson.content }} style={{color: 'black'}} />
                  </div>

                  {/* Modern Navigation */}
                  <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
                    <button 
                      onClick={() => {
                        if (activeLesson > 0) {
                          setActiveLesson(activeLesson - 1)
                        } else if (activeModule > 0) {
                          setActiveModule(activeModule - 1)
                          setActiveLesson(modules[activeModule - 1].lessons.length - 1)
                        }
                      }}
                      disabled={activeModule === 0 && activeLesson === 0}
                      className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-gray-50 rounded-xl"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                      </svg>
                      Previous Lesson
                    </button>
                    
                    <button 
                      onClick={() => {
                        if (activeLesson < modules[activeModule].lessons.length - 1) {
                          setActiveLesson(activeLesson + 1)
                        } else if (activeModule < modules.length - 1) {
                          setActiveModule(activeModule + 1)
                          setActiveLesson(0)
                        }
                      }}
                      disabled={activeModule === modules.length - 1 && activeLesson === modules[activeModule].lessons.length - 1}
                      className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Next Lesson
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to {courseTitle}</h2>
                  <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">Select a lesson from the sidebar to begin your learning journey</p>
                  <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Click on any module to get started
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseLayout