'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  slug: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    // Mock blog posts - in a real app, this would fetch from API
    const mockPosts: BlogPost[] = [
      {
        id: '1',
        title: 'The Journey of a Lifelong Learner',
        excerpt: 'Reflecting on my continuous learning journey and how it has shaped my perspective on education and technology.',
        date: '2024-12-15',
        readTime: '5 min read',
        category: 'Personal',
        slug: 'journey-lifelong-learner'
      },
      {
        id: '2',
        title: 'Integrating Technology in Modern Education',
        excerpt: 'Exploring how technology can enhance learning experiences and create more engaging educational environments.',
        date: '2024-12-10',
        readTime: '8 min read',
        category: 'Education',
        slug: 'technology-modern-education'
      },
      {
        id: '3',
        title: 'Building a Digital Portfolio: Lessons Learned',
        excerpt: 'Key insights and best practices from creating this digital home and portfolio website.',
        date: '2024-12-05',
        readTime: '6 min read',
        category: 'Technology',
        slug: 'building-digital-portfolio'
      },
      {
        id: '4',
        title: 'The Art of Teaching Programming',
        excerpt: 'Strategies and approaches for making programming concepts accessible to students of all backgrounds.',
        date: '2024-11-28',
        readTime: '10 min read',
        category: 'Education',
        slug: 'art-teaching-programming'
      },
      {
        id: '5',
        title: 'Reflections on Remote Learning',
        excerpt: 'Lessons from the shift to remote education and how it has transformed teaching methodologies.',
        date: '2024-11-20',
        readTime: '7 min read',
        category: 'Education',
        slug: 'reflections-remote-learning'
      }
    ]
    setPosts(mockPosts)
  }, [])

  const categories = [
    { id: 'all', label: 'All Posts', count: posts.length },
    { id: 'Education', label: 'Education', count: posts.filter(p => p.category === 'Education').length },
    { id: 'Technology', label: 'Technology', count: posts.filter(p => p.category === 'Technology').length },
    { id: 'Personal', label: 'Personal', count: posts.filter(p => p.category === 'Personal').length },
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Blog & Insights
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Thoughts on education, technology, and the journey of continuous learning
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className="mb-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="ml-4 text-sm text-gray-500">
                      {new Date(filteredPosts[0].date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <Link href={`/blog/${filteredPosts[0].slug}`}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors cursor-pointer">
                      {filteredPosts[0].title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">{filteredPosts[0].readTime}</span>
                      <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {filteredPosts[0].category}
                      </span>
                    </div>
                    <Link 
                      href={`/blog/${filteredPosts[0].slug}`}
                      className="text-purple-600 hover:text-purple-800 font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-purple-600 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-purple-600 hover:text-purple-800 text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
              <p className="text-gray-500">Try selecting a different category or check back later for new content.</p>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-16 bg-purple-600 rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Subscribe to get notified about new blog posts, insights, and updates from my learning journey.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button
                type="submit"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}