import React from 'react'
import Link from 'next/link'

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Education: Transforming Learning Experiences',
      excerpt: 'Discover how artificial intelligence is revolutionizing education and creating personalized learning paths for students worldwide.',
      author: 'Dr. Sarah Chen',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'AI Education',
      image: '🎓'
    },
    {
      id: 2,
      title: 'Building Your First AI-Powered Business: A Step-by-Step Guide',
      excerpt: 'Learn the essential steps to create and launch an AI-driven startup, from ideation to market validation.',
      author: 'Michael Rodriguez',
      date: 'December 12, 2024',
      readTime: '8 min read',
      category: 'Entrepreneurship',
      image: '🚀'
    },
    {
      id: 3,
      title: 'AI Tools Every Professional Should Know in 2024',
      excerpt: 'Explore the top AI tools that are transforming productivity and efficiency across various industries.',
      author: 'Emma Thompson',
      date: 'December 10, 2024',
      readTime: '6 min read',
      category: 'AI Tools',
      image: '🛠️'
    },
    {
      id: 4,
      title: 'Machine Learning Fundamentals: Understanding the Basics',
      excerpt: 'A beginner-friendly introduction to machine learning concepts, algorithms, and real-world applications.',
      author: 'Dr. James Wilson',
      date: 'December 8, 2024',
      readTime: '10 min read',
      category: 'Machine Learning',
      image: '🧠'
    },
    {
      id: 5,
      title: 'Ethics in AI: Navigating the Challenges of Responsible Development',
      excerpt: 'Examine the ethical considerations and best practices for developing AI systems that benefit society.',
      author: 'Dr. Aisha Patel',
      date: 'December 5, 2024',
      readTime: '7 min read',
      category: 'AI Ethics',
      image: '⚖️'
    },
    {
      id: 6,
      title: 'Career Transformation: How AI Skills Can Accelerate Your Growth',
      excerpt: 'Discover how learning AI skills can open new career opportunities and increase your professional value.',
      author: 'Lisa Chang',
      date: 'December 3, 2024',
      readTime: '5 min read',
      category: 'Career Development',
      image: '📈'
    }
  ]

  const categories = ['All', 'AI Education', 'Entrepreneurship', 'AI Tools', 'Machine Learning', 'AI Ethics', 'Career Development']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI Learning Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights, tutorials, and trends in artificial intelligence
            </p>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="text-3xl mb-4">{post.image}</div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
            Load More Articles
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated with AI Insights
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter and get the latest AI articles delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage