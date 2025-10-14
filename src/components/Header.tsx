'use client'

import React, { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import AuthModal from './AuthModal'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const { user, logout, loading } = useAuth()

  const handleLogin = () => {
    setIsAuthModalOpen(true)
  }

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const handleGetStarted = () => {
    // Redirect to quiz page
    window.location.href = '/quiz'
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
              AI Masters
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </a>
            <a href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Blog
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">
                  Welcome, {user.displayName || user.email?.split("@")[0]}
                </span>
                <button 
                  onClick={handleLogout} 
                  disabled={loading}
                  className="text-gray-700 hover:text-blue-600 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Logging out...' : 'Log Out'}
                </button>
              </div>
            ) : (
              <button onClick={handleLogin} className="text-gray-700 hover:text-blue-600 transition-colors">
                Log In
              </button>
            )}
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
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium">
                Home
              </a>
              <a href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium">
                Blog
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                {user ? (
                  <div className="flex flex-col space-y-2">
                    <span className="text-gray-700 text-sm">
                      Welcome, {user.displayName || user.email?.split("@")[0]}
                    </span>
                    <button 
                      onClick={handleLogout} 
                      disabled={loading}
                      className="text-gray-700 hover:text-blue-600 transition-colors text-left disabled:opacity-50"
                    >
                      {loading ? 'Logging out...' : 'Log Out'}
                    </button>
                  </div>
                ) : (
                  <button onClick={handleLogin} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                    Log In
                  </button>
                )}
                <button onClick={handleGetStarted} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </header>
  )
}

export default Header