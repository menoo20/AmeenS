'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface EducationSlide {
  id: number
  title: string
  institution: string
  location: string
  duration?: string
  issueDate?: string
  score?: string
  description: string
  image: string
  altText: string
}

const educationData: EducationSlide[] = [
  {
    id: 1,
    title: "Bachelor of Arts and Humanities",
    institution: "Suez Canal University",
    location: "Ismailia, Egypt",
    duration: "August 2009 — June 2013",
    description: "My educational journey began with this foundational four-year program that opened my mind to the world of humanities and critical thinking. This degree was my first step toward understanding how language shapes culture and communication. It provided me with the analytical skills and broad knowledge base that would later prove invaluable in my teaching career, setting the stage for my lifelong commitment to education and personal growth.",
    image: "/assets/certificates/Teaching/ba-cert.jpg",
    altText: "Bachelor of Arts and Humanities Certificate"
  },
  {
    id: 2,
    title: "Post Graduate Diploma in Education (PGDE)",
    institution: "Suez Canal University", 
    location: "Ismailia, Egypt",
    duration: "August 2013 — June 2014",
    description: "Recognizing that passion alone wasn't enough to excel as an educator, I pursued this professional teaching qualification immediately after my bachelor's degree. This intensive program transformed my understanding of educational methodology and curriculum development. It was here that I discovered my true calling as an educator, learning how to translate knowledge into meaningful learning experiences that inspire and engage students.",
    image: "/assets/certificates/Teaching/PGDE.jpg",
    altText: "Post Graduate Diploma in Education Certificate"
  },
  {
    id: 3,
    title: "FELT Diploma (Foreign English Language Teaching)",
    institution: "American University",
    location: "Cairo, Egypt", 
    duration: "September 2019 — October 2020",
    description: "After years of teaching experience, I felt the need to specialize further and enhance my expertise in English language instruction. This advanced diploma marked a pivotal moment in my professional development, focusing specifically on second language acquisition and modern teaching methodologies. It equipped me with sophisticated techniques to help non-native speakers master English, opening doors to international teaching opportunities and cross-cultural educational experiences.",
    image: "/assets/certificates/Teaching/TEFL-AUC.jpg",
    altText: "FELT Diploma Certificate"
  },
  {
    id: 4,
    title: "TOEFL PBT (Paper-Based Test)",
    institution: "AMIDEAST",
    location: "Egypt",
    issueDate: "May 2019",
    description: "Understanding that credibility in language teaching requires demonstrable proficiency, I challenged myself to achieve formal certification of my English language skills. This TOEFL certification validated my linguistic competency and opened new avenues for professional growth. It represented not just a test score, but a milestone in my journey toward becoming a globally recognized English language educator.",
    image: "/assets/certificates/Teaching/TOEFL-PBT.jpg",
    altText: "TOEFL PBT Certificate"
  },
  {
    id: 5,
    title: "IELTS Academic - British Council",
    institution: "British Council",
    location: "Saudi Arabia",
    issueDate: "May 2025",
    score: "Overall Band 7.5/C1 Level",
    description: "My most recent achievement represents the culmination of years of continuous learning and professional development. Achieving a C1 level on the IELTS Academic test demonstrates my commitment to maintaining the highest standards in English proficiency. This certification positions me for advanced academic opportunities and international collaborations, reflecting my dedication to lifelong learning and excellence in education.",
    image: "/assets/certificates/Teaching/IELTS-Academic-Cetr.png",
    altText: "IELTS Academic Certificate"
  }
]

export default function EducationalJourneyPage() {
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomedImage, setZoomedImage] = useState<string>('')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [visibleElements, setVisibleElements] = useState<Set<number>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Intersection observer for animation triggers
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-index')
            if (elementId) {
              setVisibleElements(prev => {
                const newSet = new Set(prev)
                newSet.add(parseInt(elementId))
                return newSet
              })
            }
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // Track scroll progress for the progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const documentHeight = document.documentElement.scrollHeight
      const windowHeight = window.innerHeight
      const scrollable = documentHeight - windowHeight
      const scrolled = (scrollTop / scrollable) * 100
      setScrollProgress(Math.min(scrolled, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle keyboard events for zoom modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isZoomed) {
        closeZoom()
      }
    }

    if (isZoomed) {
      window.addEventListener('keydown', handleKeyDown)
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isZoomed])

  const openZoom = (imageSrc: string) => {
    setZoomedImage(imageSrc)
    setIsZoomed(true)
  }

  const closeZoom = () => {
    setIsZoomed(false)
    setZoomedImage('')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-1 w-full z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                Abo Ameen
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/teaching/starfield" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Teaching Starfield
              </Link>
              <Link href="/teaching/certificates" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Certificates
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 tracking-tight">
              Educational Journey
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A story of continuous growth, professional development, and the pursuit of educational excellence
            </p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Education Timeline - Continuous Scroll */}
          <div className="space-y-32">
            {educationData.map((education, index) => (
              <div 
                key={education.id} 
                className={`relative transition-all duration-1000 ${
                  visibleElements.has(index) 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-16 scale-95'
                }`}
                data-index={index}
                ref={(el) => {
                  if (el && observerRef.current) {
                    observerRef.current.observe(el)
                  }
                }}
              >
                {/* Timeline connector for all except the last item */}
                {index < educationData.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-px h-32 bg-gradient-to-b from-gray-300 to-transparent z-10" />
                )}
                
                {/* Timeline dot - removed the pulsing, made it cleaner */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-6 w-12 h-12 bg-white rounded-full border-4 border-blue-500 shadow-lg z-20 flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full" />
                </div>

                {/* Certificate Content */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                }`}>
                  
                  {/* Image Column */}
                  <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative group cursor-pointer" onClick={() => openZoom(education.image)}>
                      <div className="relative overflow-hidden rounded-3xl shadow-xl bg-white border border-gray-200">
                        <img
                          src={education.image}
                          alt={education.altText}
                          className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-blue-900/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="bg-white/95 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                            <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`order-2 space-y-6 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                      <div className="flex items-center mb-6">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-4 py-2 text-sm font-bold">
                          Step {education.id}
                        </div>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        {education.title}
                      </h2>
                      
                      <div className="space-y-4 mb-8">
                        <div className="flex items-start">
                          <span className="font-semibold text-blue-600 min-w-[110px] text-sm uppercase tracking-wider">Institution:</span>
                          <span className="text-gray-700 font-medium">{education.institution}</span>
                        </div>
                        
                        <div className="flex items-start">
                          <span className="font-semibold text-blue-600 min-w-[110px] text-sm uppercase tracking-wider">Location:</span>
                          <span className="text-gray-700 font-medium">{education.location}</span>
                        </div>
                        
                        {education.duration && (
                          <div className="flex items-start">
                            <span className="font-semibold text-blue-600 min-w-[110px] text-sm uppercase tracking-wider">Duration:</span>
                            <span className="text-gray-700 font-medium">{education.duration}</span>
                          </div>
                        )}
                        
                        {education.issueDate && (
                          <div className="flex items-start">
                            <span className="font-semibold text-blue-600 min-w-[110px] text-sm uppercase tracking-wider">Issue Date:</span>
                            <span className="text-gray-700 font-medium">{education.issueDate}</span>
                          </div>
                        )}
                        
                        {education.score && (
                          <div className="flex items-start">
                            <span className="font-semibold text-blue-600 min-w-[110px] text-sm uppercase tracking-wider">Score:</span>
                            <span className="font-bold text-green-600 text-lg">{education.score}</span>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {education.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Journey Completion */}
          <div 
            className={`text-center mt-32 mb-16 transition-all duration-1000 ${
              visibleElements.has(educationData.length) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            data-index={educationData.length}
            ref={(el) => {
              if (el && observerRef.current) {
                observerRef.current.observe(el)
              }
            }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100 max-w-3xl mx-auto shadow-xl transform hover:scale-105 transition-all duration-500">
              <div className="text-6xl mb-6">🎓</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Journey Continues...</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                This educational journey represents my commitment to lifelong learning and professional excellence. 
                Each step has built upon the previous, creating a foundation for continued growth and innovation in education.
              </p>
              <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          style={{ zIndex: 999999 }}
          onClick={closeZoom}
        >
          {/* Close Button - More Prominent */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeZoom()
            }}
            className="fixed top-6 right-6 text-white hover:text-red-400 transition-colors bg-black/80 hover:bg-red-500/30 rounded-full p-4 border-2 border-white/30 shadow-2xl"
            style={{ 
              zIndex: 1000000,
              pointerEvents: 'auto',
              position: 'fixed'
            }}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={4}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Image Container */}
          <div 
            className="relative w-full h-full flex items-center justify-center"
            style={{ 
              zIndex: 999998,
              pointerEvents: 'none' // Don't interfere with close button
            }}
          >
            <img
              src={zoomedImage}
              alt="Zoomed certificate"
              className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              style={{ 
                maxWidth: 'none',
                pointerEvents: 'auto' // Allow image interactions
              }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
            />
          </div>
          
          {/* Click anywhere to close hint */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 text-sm z-[9999]">
            Click anywhere or press ESC to close
          </div>
        </div>
      )}

      {/* Custom CSS for scrollbar */}
      <style jsx>{`
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  )
}