'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EDUCATIONAL_PROJECTS, type EducationalProject } from '@/data/educationalProjects';
import { getAssetPath } from '@/lib/utils';
import { FaGithub, FaExternalLinkAlt, FaBook, FaVideo, FaChevronLeft, FaChevronRight, FaSearchPlus, FaTimes } from 'react-icons/fa';

// Flexible Slideshow Component - Handles all image sizes
const ProjectSlideshow: React.FC<{ images: string[]; title: string; onImageClick?: () => void }> = ({ images, title, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full group">
      {/* Slideshow Container - Fixed width, auto height */}
      <div 
  className="relative w-full"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
          >
            <Image
              src={getAssetPath(img)}
              alt={`${title} - Screenshot ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl shadow-2xl"
              loading="eager"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            />
          </div>
        ))}
        
        {/* Magnifier Icon - Shows on hover (desktop only) */}
        <button
          type="button"
          className="hidden lg:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-auto"
          onClick={onImageClick}
          aria-label="Open image modal"
        >
          <div className="rounded-full p-6">
            <FaSearchPlus className="w-12 h-12 text-black/50" />
          </div>
        </button>

        {/* Navigation Arrows - Only show if multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-10"
              aria-label="Previous image"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-10"
              aria-label="Next image"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-white w-8 h-2'
                    : 'bg-white/50 hover:bg-white/75 w-2 h-2'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium z-10">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

// Status Badge Component
const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const statusConfig = {
    live: { bg: 'bg-green-500/20', text: 'text-green-400', label: '● Live', border: 'border-green-500/30' },
    completed: { bg: 'bg-blue-500/20', text: 'text-blue-400', label: '✓ Completed', border: 'border-blue-500/30' },
    ongoing: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', label: '⟳ Ongoing', border: 'border-yellow-500/30' },
  };

  const config = statusConfig[status as keyof typeof statusConfig];

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${config.bg} ${config.text} ${config.border}`}>
      {config.label}
    </span>
  );
};

// Full-Screen Image Modal Component
const ImageModal: React.FC<{ 
  images: string[]; 
  title: string; 
  isOpen: boolean; 
  onClose: () => void;
  initialIndex?: number;
}> = ({ images, title, isOpen, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[110] bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all"
        aria-label="Close modal"
      >
        <FaTimes className="w-6 h-6" />
      </button>

      {/* Image Container */}
      <div className="relative w-full max-w-7xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={getAssetPath(img)}
                alt={`${title} - Screenshot ${index + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-md transition-all z-10"
              aria-label="Previous image"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-md transition-all z-10"
              aria-label="Next image"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-white w-10 h-3'
                    : 'bg-white/50 hover:bg-white/75 w-3 h-3'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Image Counter & Title */}
        <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-lg">
          <div className="text-sm font-medium">{title}</div>
          <div className="text-xs text-gray-300">{currentIndex + 1} / {images.length}</div>
        </div>
      </div>
    </div>
  );
};

// Project Section Component
const ProjectSection: React.FC<{ project: EducationalProject; index: number }> = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const [expandedFeatures, setExpandedFeatures] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.cardColor} opacity-5`} />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
          
          {/* Image Section - Full Column */}
          <div className="w-full lg:w-1/2 h-[500px]" data-aos={isEven ? 'fade-right' : 'fade-left'}>
            <ProjectSlideshow 
              images={project.images} 
              title={project.title}
              onImageClick={() => setIsModalOpen(true)}
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-6" data-aos={isEven ? 'fade-left' : 'fade-right'}>
            
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-5xl">{project.icon}</span>
                <StatusBadge status={project.status} />
                <span className="text-sm text-gray-400">
                  {project.startDate} {project.endDate && `- ${project.endDate}`}
                </span>
              </div>
              
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {project.title}
              </h2>
              
              <p className="text-xl text-blue-400 font-medium">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed text-lg">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 bg-gradient-to-r ${project.cardColor} rounded-lg text-sm font-medium text-white shadow-lg hover:scale-105 transition-transform`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features (Expandable) */}
            <div className="space-y-3">
              <button
                onClick={() => setExpandedFeatures(!expandedFeatures)}
                className="flex items-center gap-2 text-sm font-semibold text-gray-400 uppercase tracking-wider hover:text-white transition-colors group"
              >
                <span className="text-blue-400">▶</span>
                Key Features ({project.features.length})
                <span className={`transform transition-transform duration-300 ${expandedFeatures ? 'rotate-90' : ''}`}>
                  ▼
                </span>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${
                expandedFeatures ? 'max-h-[1000px] opacity-100' : 'max-h-32 opacity-70'
              } overflow-hidden`}>
                <div className="space-y-2 pr-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors">
                      <span className="text-blue-400 mt-1 text-lg flex-shrink-0">✓</span>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {!expandedFeatures && project.features.length > 5 && (
                <div className="text-xs text-gray-500 italic">Click to see all features...</div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {project.links.demo && (
                <Link
                  href={project.links.demo}
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <FaExternalLinkAlt /> Live Demo
                </Link>
              )}
              
              {project.links.website && !project.links.demo && (
                <Link
                  href={project.links.website}
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <FaExternalLinkAlt /> Visit Website
                </Link>
              )}
              
              {project.links.github && (
                <Link
                  href={project.links.github}
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-semibold text-white transition-all hover:scale-105"
                >
                  <FaGithub /> Source Code
                </Link>
              )}
              
              {project.links.documentation && (
                <Link
                  href={project.links.documentation}
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-semibold text-white transition-all hover:scale-105"
                >
                  <FaBook /> Documentation
                </Link>
              )}
              
              {project.links.video && (
                <Link
                  href={project.links.video}
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-semibold text-white transition-all hover:scale-105"
                >
                  <FaVideo /> Watch Demo
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      {index < EDUCATIONAL_PROJECTS.length - 1 && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}

      {/* Image Modal */}
      <ImageModal
        images={project.images}
        title={project.title}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

// Main Showcase Component
const EducationalProjectsShowcase: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-black min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-20 h-20 border border-green-400/30 rounded-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-24 h-24 border border-purple-400/30 rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full px-8 py-4 mb-8">
              <span className="text-3xl">🎓</span>
              <span className="text-blue-300 font-bold text-lg">Educational Projects</span>
              <span className="text-3xl">💡</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400">
              Digital Learning
            </span>
            <br />
            <span className="text-white">Innovations</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore my collection of educational technology projects that bridge the gap between 
            traditional teaching and modern digital learning experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const firstProject = document.getElementById('projects-section');
                if (firstProject) {
                  firstProject.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>Explore Projects</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m0 0V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <div id="projects-section">
        {EDUCATIONAL_PROJECTS.map((project, index) => (
          <ProjectSection key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        /* Animation delays for hero elements */
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }
        
        /* Gradient button animation */
        .bg-size-200 {
          background-size: 200% 100%;
        }
        
        .bg-pos-0 {
          background-position: 0% 50%;
        }
        
        .bg-pos-100 {
          background-position: 100% 50%;
        }
      `}</style>
    </div>
  );
};

export default EducationalProjectsShowcase;
