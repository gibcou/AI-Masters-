'use client'

import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogin = () => {
    // Simulate login functionality
    alert('Login functionality would redirect to login page')
  }

  const handleGetStarted = () => {
    // Simulate get started functionality
    alert('Get Started functionality would redirect to registration/onboarding')
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => scrollToSection('hero')}>
              Coursiv
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={handleLogin} className="text-gray-700 hover:text-blue-600 transition-colors">
              Log In
            </button>
            <button onClick={handleGetStarted} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Features
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Pricing
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <button onClick={handleLogin} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                  Log In
                </button>
                <button onClick={handleGetStarted} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header