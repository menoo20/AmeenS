'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { 
  EDUCATIONAL_VIDEOS, 
  VIDEO_CATEGORIES, 
  getFeaturedVideos, 
  getVideosByCategory,
  getCategoriesWithCounts,
  type EducationalVideo 
} from '@/data/educationalVideos';
import { FaYoutube, FaPlay, FaTimes, FaExternalLinkAlt, FaClock, FaEye, FaArrowLeft, FaChevronRight, FaVideo, FaArrowUp } from 'react-icons/fa';

export default function ResearchPublicationsPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<EducationalVideo | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const categories = getCategoriesWithCounts();
  const featuredVideos = getFeaturedVideos();
  
  const getDisplayVideos = () => {
    if (selectedCategory === 'all') return EDUCATIONAL_VIDEOS;
    return getVideosByCategory(selectedCategory);
  };

  const displayVideos = getDisplayVideos();

  const openVideoModal = (video: EducationalVideo) => {
    setSelectedVideo(video);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setTimeout(() => setSelectedVideo(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Animated Background - More Vivid */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Large animated orbs - More spread out */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Medium floating orbs - More spread out */}
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-gradient-to-br from-teal-400 to-green-400 rounded-full blur-2xl opacity-25 animate-float"></div>
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-gradient-to-br from-red-400 to-orange-400 rounded-full blur-2xl opacity-25 animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Small accent orbs - More spread out */}
        <div className="absolute top-20 right-1/3 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-xl opacity-30 animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full blur-xl opacity-30 animate-bounce-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Header Section */}
      <div className="relative">
        {/* Back button */}
        <button
          onClick={() => router.push('/teaching/starfield')}
          className="absolute top-24 left-8 flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-lg transition-all duration-300 z-10"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back to Starfield</span>
        </button>

        {/* Main header */}
        <div className="relative container mx-auto px-4 pt-32 pb-16 sm:pt-36 sm:pb-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Enhanced Digital Badge */}
            <div className="relative inline-flex items-center gap-3 px-8 py-4 mb-8 group">
              {/* Reduced outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 opacity-40 blur-lg group-hover:opacity-60 transition-opacity duration-500"></div>
              
              {/* Main badge container with darker background */}
              <div className="relative flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-xl rounded-full border-2 border-cyan-400/60 shadow-xl shadow-cyan-500/20 group-hover:shadow-cyan-500/30 group-hover:scale-105 transition-all duration-300">
                {/* Static 3D Video Icon - No rotation */}
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
                  {/* Reduced glow effects */}
                  <div className="absolute inset-0 blur-md bg-cyan-400 rounded-full opacity-30"></div>
                  
                  {/* Static 3D icon with depth */}
                  <div className="relative preserve-3d">
                    {/* Back layer - slightly offset */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <FaVideo className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-400" />
                    </div>
                    
                    {/* Middle layer */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-40">
                      <FaVideo className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-blue-400" />
                    </div>
                    
                    {/* Front layer - main icon */}
                    <div className="relative flex items-center justify-center">
                      <FaVideo className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-cyan-300 drop-shadow-lg" />
                    </div>
                  </div>
                </div>
                
                {/* Text without excessive highlighting */}
                <div className="relative overflow-hidden">
                  <span className="relative z-10 font-black text-xs sm:text-sm md:text-base tracking-wider sm:tracking-wide md:tracking-[0.2em] text-cyan-100">
                    TEACHING DEMONSTRATIONS
                  </span>
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                </div>
                
                {/* Pulsing dots decoration */}
                <div className="flex gap-1 sm:gap-1.5 flex-shrink-0">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-300 animate-pulse shadow-md shadow-cyan-400/30"></div>
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-300 animate-pulse shadow-md shadow-blue-400/30" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-300 animate-pulse shadow-md shadow-purple-400/30" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
            
            {/* Title with gradient and text shadow */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-6 drop-shadow-2xl leading-tight tracking-tight">
              Educational Content & Videos
            </h1>
            
            {/* Subtitle with cyber glow */}
            <div className="relative inline-block mb-6">
              <p className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300">
                Teaching Demonstrations & Pedagogical Insights
              </p>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>
            </div>
            
            {/* Description with glass morphism */}
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-2xl"></div>
              <p className="relative text-gray-200 text-lg sm:text-xl leading-relaxed backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl px-8 py-6 shadow-2xl">
                A collection of <span className="text-cyan-300 font-semibold">instructional videos</span> showcasing practical teaching methodologies, 
                <span className="text-blue-300 font-semibold"> ESL strategies</span>, and <span className="text-purple-300 font-semibold">educational technology</span> applications used in real classroom settings.
              </p>
            </div>

            {/* Decorative elements */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Videos Section */}
      {featuredVideos.length > 0 && (
        <div className="container mx-auto px-4 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white">Featured Research</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideos.map((video) => (
              <VideoCard 
                key={video.id} 
                video={video} 
                onPlay={openVideoModal}
                featured={true}
              />
            ))}
          </div>
        </div>
      )}

      {/* Category Filter */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
          <h2 className="text-3xl font-bold text-white">Browse by Topic</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                : 'bg-white/10 hover:bg-white/20 text-gray-300 backdrop-blur-sm'
            }`}
          >
            All Videos ({EDUCATIONAL_VIDEOS.length})
          </button>
          
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === cat.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 hover:bg-white/20 text-gray-300 backdrop-blur-sm'
              }`}
              style={{
                borderColor: selectedCategory === cat.key ? cat.color : 'transparent',
                borderWidth: '2px'
              }}
            >
              <span className="text-xl">{cat.icon}</span>
              <span>{cat.name}</span>
              <span className="text-sm opacity-75">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Videos Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayVideos.map((video) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              onPlay={openVideoModal}
            />
          ))}
        </div>

        {/* YouTube Channel Link */}
        <div className="mt-16 text-center">
          <a
            href="https://www.youtube.com/@ameenschools"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            <FaYoutube className="w-6 h-6" />
            View Full Channel on YouTube
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && selectedVideo && (
        <VideoModal video={selectedVideo} onClose={closeVideoModal} />
      )}

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white p-4 rounded-full shadow-2xl transition-all z-50 group"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-6 h-6 group-hover:translate-y-[-2px] transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

// Video Card Component
function VideoCard({ 
  video, 
  onPlay, 
  featured = false 
}: { 
  video: EducationalVideo; 
  onPlay: (video: EducationalVideo) => void;
  featured?: boolean;
}) {
  const categoryInfo = VIDEO_CATEGORIES[video.category];

  return (
    <div 
      className={`group relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
        featured ? 'ring-2 ring-yellow-400/50' : ''
      }`}
      onClick={() => onPlay(video)}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 bg-yellow-500/90 backdrop-blur-sm rounded-full">
          <span className="text-yellow-900 font-bold text-xs">⭐ FEATURED</span>
        </div>
      )}

      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
            <FaPlay className="w-8 h-8 text-white ml-1" />
          </div>
        </div>

        {/* Duration & Views */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md">
            <FaClock className="w-3 h-3 text-gray-300" />
            <span className="text-white text-sm font-medium">{video.duration}</span>
          </div>
          
          <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md">
            <FaEye className="w-3 h-3 text-gray-300" />
            <span className="text-white text-sm font-medium">{video.views}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div 
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3"
          style={{
            backgroundColor: `${categoryInfo.color}20`,
            color: categoryInfo.color,
            borderColor: `${categoryInfo.color}40`,
            borderWidth: '1px'
          }}
        >
          <span>{categoryInfo.icon}</span>
          <span>{categoryInfo.name}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
          {video.title}
        </h3>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
          {video.subtitle}
        </p>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-3">
          {video.description}
        </p>

        {/* Read More Indicator */}
        <div className="mt-4 flex items-center gap-2 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>View Details</span>
          <FaChevronRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}

// Video Modal Component
function VideoModal({ video, onClose }: { video: EducationalVideo; onClose: () => void }) {
  const categoryInfo = VIDEO_CATEGORIES[video.category];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 py-8">
        <div 
          className="relative w-full max-w-5xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 group"
            aria-label="Close modal"
          >
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110"></div>
              <FaTimes className="relative w-6 h-6 text-white transition-all duration-300 group-hover:rotate-90" />
            </div>
          </button>

          {/* Video Player */}
          <div className="relative aspect-video w-full rounded-t-3xl overflow-hidden bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: `${categoryInfo.color}20`,
                  color: categoryInfo.color,
                  borderColor: `${categoryInfo.color}40`,
                  borderWidth: '1px'
                }}
              >
                <span className="text-lg">{categoryInfo.icon}</span>
                <span>{categoryInfo.name}</span>
              </div>

              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <FaClock className="w-4 h-4" />
                  <span>{video.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEye className="w-4 h-4" />
                  <span>{video.views} views</span>
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {video.title}
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-blue-400 mb-6">
              {video.subtitle}
            </p>

            {/* Research Summary */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-5 border border-blue-500/20 mb-5">
              <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                <span className="text-xl">🔬</span>
                Research Summary
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {video.researchSummary}
              </p>
            </div>

            {/* Key Topics */}
            <div className="mb-5">
              <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-xl">📌</span>
                Key Topics Covered
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {video.keyTopics.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience */}
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 mb-5">
              <h3 className="text-sm font-semibold text-gray-400 mb-2">Target Audience</h3>
              <p className="text-white text-sm">{video.targetAudience}</p>
            </div>

            {/* YouTube Link */}
            <div className="text-center">
              <a
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105"
              >
                <FaYoutube className="w-5 h-5" />
                Watch on YouTube
                <FaExternalLinkAlt className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
