"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { useRouter } from 'next/navigation';
import { EDUCATIONAL_PROJECTS, EducationalProject } from '@/data/educationalProjects';

// Error Boundary Component
class ProjectsErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Educational Projects Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="mb-4">We're having trouble loading the educational projects.</p>
            <button 
              onClick={() => this.setState({ hasError: false })}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const EducationalProjectsPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [imageLoading, setImageLoading] = useState<Record<string, boolean>>({});
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();

  // Initialize image loading states
  useEffect(() => {
    const loadingStates: Record<string, boolean> = {};
    EDUCATIONAL_PROJECTS.forEach(project => {
      loadingStates[project.image] = true;
    });
    setImageLoading(loadingStates);
  }, []);

  const handleImageLoad = (src: string) => {
    setImageLoading(prev => ({ ...prev, [src]: false }));
  };

  // Handle external link clicks
  const handleLinkClick = (url: string, type: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <ProjectsErrorBoundary>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white overflow-x-hidden">
      <Navigation />
      
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
                const firstProject = document.querySelector('.project-section');
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

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {EDUCATIONAL_PROJECTS.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => { sectionRefs.current[index] = el; }}
                className="project-section group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  {/* Loading skeleton */}
                  {imageLoading[project.image] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse" />
                  )}
                  
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 ${
                      imageLoading[project.image] ? 'opacity-0' : 'opacity-100'
                    }`}
                    onLoad={() => handleImageLoad(project.image)}
                    loading="eager"
                  />
                  
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.cardColor} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Project Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                    {project.icon}
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'live' ? 'bg-green-500/20 text-green-300 border border-green-400/30' :
                      project.status === 'ongoing' ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' :
                      'bg-gray-500/20 text-gray-300 border border-gray-400/30'
                    }`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title and Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded-md text-xs">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-400 mb-2">Built with:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded text-xs border border-blue-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-500/10 text-gray-400 rounded text-xs">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap gap-2">
                    {project.links.demo && (
                      <button
                        onClick={() => handleLinkClick(project.links.demo!, 'demo')}
                        className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:from-green-400 hover:to-teal-400 transition-all duration-200 flex items-center justify-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Demo
                      </button>
                    )}
                    
                    {project.links.github && (
                      <button
                        onClick={() => handleLinkClick(project.links.github!, 'github')}
                        className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-600 transition-all duration-200 flex items-center justify-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </button>
                    )}
                    
                    {project.links.website && (
                      <button
                        onClick={() => handleLinkClick(project.links.website!, 'website')}
                        className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-500 transition-all duration-200 flex items-center justify-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                        </svg>
                        Visit
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Interested in Collaborating?
              </h3>
              <p className="text-gray-300 mb-6">
                I'm always excited to work on new educational technology projects that make learning more engaging and effective.
              </p>
              <button
                onClick={() => router.push('/#contact')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-bold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
              >
                <span>Get in Touch</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to starfield button */}
      <div className="fixed bottom-8 left-8 z-50">
        <button
          onClick={() => router.push('/teaching/starfield')}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Constellation</span>
        </button>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        /* Text line clamp for descriptions */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Mobile improvements */
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .grid {
            gap: 1.5rem;
          }
          
          .text-6xl {
            font-size: 3rem;
          }
        }
        
        /* Focus styles for accessibility */
        button:focus,
        [tabindex]:focus {
          outline: 2px solid #60a5fa;
          outline-offset: 2px;
        }
      `}</style>
    </div>
    </ProjectsErrorBoundary>
  );
};

export default EducationalProjectsPage;