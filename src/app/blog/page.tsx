import React from 'react';
import { Metadata } from 'next';
import BlogGrid from '@/components/BlogGrid';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAllPosts, getFeaturedPosts } from '@/lib/blog';
import Link from 'next/link';
import { BookOpen, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | Abo Ameen - Insights on Teaching & Development',
  description: 'Explore articles about education technology, web development, ESL teaching, and career growth. Bridging the worlds of teaching and technology.',
  openGraph: {
    title: 'Blog | Abo Ameen - Insights on Teaching & Development',
    description: 'Explore articles about education technology, web development, ESL teaching, and career growth.',
    type: 'website',
  },
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 opacity-90"></div>
          
          {/* Animated Background Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white mb-6">
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">Blog & Insights</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Stories from the Intersection of
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
                  Teaching & Technology
                </span>
              </h1>

              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Explore insights on education technology, web development, ESL teaching strategies, and career growth.
                Join me on a journey where pedagogy meets programming.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 text-white">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1">{allPosts.length}</div>
                  <div className="text-white/80 text-sm">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1">4</div>
                  <div className="text-white/80 text-sm">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1">
                    {allPosts.reduce((sum, post) => {
                      const minutes = parseInt(post.readTime?.split(' ')[0] || '0');
                      return sum + minutes;
                    }, 0)}
                  </div>
                  <div className="text-white/80 text-sm">Minutes of Content</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-16">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-6 h-6 text-yellow-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Articles</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.slice(0, 3).map((post, index) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-white/80 text-sm line-clamp-2">{post.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">All Articles</h2>
          <BlogGrid posts={allPosts} />
        </section>
      </main>
      <Footer />
    </>
  );
}
