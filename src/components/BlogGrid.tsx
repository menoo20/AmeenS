'use client';

import React, { useState } from 'react';
import BlogCard from './BlogCard';
import { BlogPost, BlogCategory, BLOG_CATEGORIES } from '@/data/blog';

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const categories: Array<BlogCategory | 'All'> = ['All', 'Teaching', 'Development', 'Ed Tech', 'Career'];

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles by title, description, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
          <svg
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            const categoryData = category !== 'All' ? BLOG_CATEGORIES[category as BlogCategory] : null;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                  isActive
                    ? category === 'All'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : `bg-gradient-to-r ${categoryData?.gradient} text-white shadow-lg`
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
                }`}
              >
                {category}
                <span className="ml-2 text-xs opacity-75">
                  ({category === 'All' ? posts.length : posts.filter((p) => p.category === category).length})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 text-gray-600 dark:text-gray-400">
        {filteredPosts.length === 0 ? (
          <p className="text-center py-12 text-lg">
            No articles found. Try adjusting your filters or search query.
          </p>
        ) : (
          <p>
            Showing <span className="font-semibold text-purple-600 dark:text-purple-400">{filteredPosts.length}</span>{' '}
            {filteredPosts.length === 1 ? 'article' : 'articles'}
          </p>
        )}
      </div>

      {/* Grid */}
      {filteredPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
