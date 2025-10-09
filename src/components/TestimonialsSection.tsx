'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: "Madison.m",
    text: "I needed assistance from my 15-year-old son to navigate the initial set of questions, as I wasn't sure how to begin. However, once I passed that first hurdle, I was eager to continue! Everything related to AI, chatbots, and LLMs is quite new to me, but after completing the first exercise and module, I'm very motivated to explore further and see how it can help me achieve my personal success goals.",
    rating: 5
  },
  {
    id: 2,
    name: "orange_s",
    text: "AI Masters is an excellent platform for learning AI. It provides clear instructions that greatly assist students in understanding the topic. So far, it's the best course I've enrolled in.",
    rating: 5
  },
  {
    id: 3,
    name: "drkchau",
    text: "Currently going through the AI courses and feeling much more confident catching up to the advancements in AI over the past few years. The material is engaging, easy to grasp, and practical. I wish this learning approach was applied to other subjects as well.",
    rating: 5
  },
  {
    id: 4,
    name: "Carla_fr",
    text: "Learning how AI can enhance my work efficiency through AI Masters has been a big advantage! The step-by-step guidance makes it easy to learn about AI.",
    rating: 5
  },
  {
    id: 5,
    name: "chris97",
    text: "At first, I thought only students or branding and marketing managers would grasp AI concepts. I was completely mistaken! This course does an excellent job of simplifying every step.",
    rating: 5
  },
  {
    id: 6,
    name: "sofia_chwe",
    text: "I thoroughly enjoyed the ChatGPT course on Coursiv! It was well-organized, engaging, and filled with good info. The lessons were straightforward, and the examples helped clarify complex ideas. I highly recommend it for anyone interested in AI or ChatGPT!",
    rating: 5
  }
]

const profileImages = [
  "https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.530e15cd.png&w=96&q=75",
  "https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.c9e01515.png&w=96&q=75",
  "https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.b716e41c.png&w=96&q=75",
  "https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.9d17d9c3.png&w=96&q=75",
  "https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.a418b884.png&w=96&q=75"
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join 300,000+ learners<br />
              around the world
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">More than 16,000+</span>
              <div className="bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
                5★
              </div>
              <span className="text-gray-600">on Trustpilot</span>
            </div>
          </div>
          
          {/* Profile Images */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-end">
            <div className="relative mb-2">
              {/* Laura Badge */}
              <div className="absolute -top-2 -left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
                Laura
              </div>
              
              {/* Profile Images Row */}
              <div className="flex items-center -space-x-2">
                {profileImages.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`Learner ${index + 1}`}
                      className="w-12 h-12 rounded-full border-2 border-white shadow-md hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                ))}
              </div>
              
              {/* Luke Badge */}
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
                Luke
              </div>
            </div>
            
            {/* People joined text */}
            <div className="text-sm text-gray-600 text-center lg:text-right">
              More than 1,181,062+ people joined
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex-1 mx-8">
              <div className="text-center">
                {/* Star Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
                  {testimonials[currentTestimonial].text}
                </p>
                
                {/* Author */}
                <p className="text-blue-600 font-semibold">
                  @{testimonials[currentTestimonial].name}
                </p>
              </div>
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}