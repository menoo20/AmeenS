'use client'

import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface PortfolioSection {
  id: string
  title: string
  subtitle: string
  icon: string
  position: { x: number; y: number }
  color: string
  description: string
  credentials: string
}

interface EducationPortfolioMapProps {
  isVisible: boolean
  onClose: () => void
  onNavigate: (sectionId: string) => void
}

export default function EducationPortfolioMap({ isVisible, onClose, onNavigate }: EducationPortfolioMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement[]>([])
  const [selectedSection, setSelectedSection] = useState<string | null>(null)

  const portfolioSections: PortfolioSection[] = [
    {
      id: 'education',
      title: 'Academic Foundation',
      subtitle: 'Educational Background',
      icon: '🎓',
      position: { x: 25, y: 30 },
      color: '#3b82f6',
      description: 'My educational journey and academic achievements',
      credentials: 'Degrees, Certifications & Academic Excellence'
    },
    {
      id: 'experience',
      title: 'Teaching Excellence',
      subtitle: 'Professional Experience',
      icon: '👨‍🏫',
      position: { x: 75, y: 25 },
      color: '#10b981',
      description: 'Years of impactful teaching and educational leadership',
      credentials: 'Institutions, Roles & Career Progression'
    },
    {
      id: 'certifications',
      title: 'Professional Credentials',
      subtitle: 'Licenses & Certifications',
      icon: '📜',
      position: { x: 70, y: 70 },
      color: '#f59e0b',
      description: 'Official certifications and professional qualifications',
      credentials: 'Teaching Licenses, ESL Certifications & More'
    },
    {
      id: 'gamification',
      title: 'Innovation in Learning',
      subtitle: 'Gamification Projects',
      icon: '🎮',
      position: { x: 30, y: 75 },
      color: '#ef4444',
      description: 'Creative approaches to engaging student learning',
      credentials: 'Game-Based Learning & Interactive Content'
    },
    {
      id: 'esl-portfolio',
      title: 'ESL Expertise',
      subtitle: 'Content & Curriculum',
      icon: '🌍',
      position: { x: 50, y: 50 },
      color: '#8b5cf6',
      description: 'Specialized English language teaching materials and methods',
      credentials: 'Curriculum Design & Language Learning Resources'
    }
  ]

  useEffect(() => {
    if (isVisible && containerRef.current) {
      // Animate container entrance
      gsap.fromTo(containerRef.current, 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
      )

      // Animate sections with staggered entrance
      gsap.fromTo(sectionsRef.current,
        { opacity: 0, y: 50, scale: 0.8 },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.3,
          ease: "back.out(1.4)"
        }
      )

      // Animate decorative elements
      const decorativeElements = containerRef.current.querySelectorAll('.decorative-element')
      gsap.fromTo(decorativeElements,
        { opacity: 0, scale: 0 },
        { 
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 1,
          stagger: 0.1,
          ease: "elastic.out(1, 0.5)"
        }
      )
    }
  }, [isVisible])

  // Handle ESC key to close
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isVisible) {
        handleClose()
      }
    }

    if (isVisible) {
      document.addEventListener('keydown', handleEscKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [isVisible])

  const handleClose = () => {
    if (containerRef.current) {
      // Animate exit
      gsap.to(containerRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          onClose()
          // Scroll back to hero section
          const heroSection = document.querySelector('section')
          if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' })
          }
        }
      })

      // Animate sections exit
      gsap.to(sectionsRef.current, {
        opacity: 0,
        y: -30,
        scale: 0.8,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in"
      })
    }
  }

  const handleSectionClick = (section: PortfolioSection) => {
    setSelectedSection(section.id)
    
    // Pulse animation on click
    const sectionElement = sectionsRef.current.find(el => el?.dataset.sectionId === section.id)
    if (sectionElement) {
      gsap.to(sectionElement, {
        scale: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      })
    }

    // Navigate after animation
    setTimeout(() => {
      onNavigate(section.id)
    }, 500)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        ref={containerRef}
        className="relative w-full max-w-6xl h-full max-h-4xl bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 bg-white/10 backdrop-blur-md border-b border-white/20 p-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-red-400 rounded-full opacity-60"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-60"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full opacity-60"></div>
            <div className="ml-6 text-white font-semibold text-lg">
              📚 Academic Portfolio & Professional Journey
            </div>
          </div>
          <button 
            onClick={handleClose}
            className="text-white/70 hover:text-red-400 transition-colors text-xl z-10 relative p-2 rounded-lg hover:bg-red-500/10 min-w-[40px] min-h-[40px] flex items-center justify-center"
            title="Close and return to hero"
          >
            ✕
          </button>
        </div>

        {/* Decorative Academic Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating academic icons */}
          <div className="decorative-element absolute top-20 left-10 text-white/10 text-6xl">📖</div>
          <div className="decorative-element absolute top-40 right-20 text-white/10 text-4xl">🎯</div>
          <div className="decorative-element absolute bottom-40 left-16 text-white/10 text-5xl">💡</div>
          <div className="decorative-element absolute bottom-60 right-12 text-white/10 text-3xl">⭐</div>
          <div className="decorative-element absolute top-60 left-1/2 text-white/10 text-4xl">🚀</div>
          
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            {portfolioSections.map((section, index) => (
              <g key={`connection-${index}`}>
                {portfolioSections.slice(index + 1).map((targetSection, targetIndex) => (
                  <line
                    key={`line-${index}-${targetIndex}`}
                    x1={`${section.position.x}%`}
                    y1={`${section.position.y}%`}
                    x2={`${targetSection.position.x}%`}
                    y2={`${targetSection.position.y}%`}
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                  />
                ))}
              </g>
            ))}
          </svg>
        </div>

        {/* Portfolio Sections */}
        <div className="relative w-full h-full pt-20 pb-20">
          {portfolioSections.map((section, index) => (
            <div
              key={section.id}
              ref={el => { if (el) sectionsRef.current[index] = el }}
              data-section-id={section.id}
              className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
              style={{ 
                left: `${section.position.x}%`, 
                top: `${section.position.y}%` 
              }}
              onClick={() => handleSectionClick(section)}
            >
              {/* Section Card */}
              <div 
                className="relative bg-white/15 backdrop-blur-lg rounded-2xl border border-white/30 p-6 min-w-[280px] hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl"
                style={{ 
                  boxShadow: `0 8px 32px ${section.color}20, 0 0 0 1px ${section.color}30` 
                }}
              >
                {/* Icon and Title */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{section.icon}</div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {section.title}
                    </h3>
                    <p className="text-white/70 text-sm font-medium">
                      {section.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-white/80 text-sm mb-3 leading-relaxed">
                  {section.description}
                </p>
                
                {/* Credentials Badge */}
                <div 
                  className="text-xs px-3 py-2 rounded-full font-medium text-center"
                  style={{ 
                    backgroundColor: `${section.color}20`,
                    color: section.color,
                    border: `1px solid ${section.color}40`
                  }}
                >
                  {section.credentials}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 p-6">
          <div className="flex justify-between items-center">
            <div className="text-white/80 text-sm">
              🎓 Explore my professional journey and educational expertise
              {selectedSection && (
                <span className="ml-4 text-blue-300">
                  Opening {selectedSection}...
                </span>
              )}
            </div>
            
            {/* Back to Hero Button */}
            <button
              onClick={handleClose}
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 border border-white/30 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm font-medium">Back to Home</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}