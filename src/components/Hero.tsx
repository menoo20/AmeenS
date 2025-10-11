'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getAssetPath } from '@/lib/utils'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [typewriterText, setTypewriterText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showMapSelection, setShowMapSelection] = useState(false)
  const router = useRouter()

  const typewriterWords = ['Ed Tech Specialist', 'Instructional Designer', 'Learning Experience Designer', 'Content Developer', 'English Teacher', 'Curriculum Developer', 'Academic Supervisor']

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const currentWord = typewriterWords[currentIndex]
    let charIndex = 0
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentWord.length) {
        setTypewriterText(currentWord.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % typewriterWords.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentIndex, mounted])

  if (!mounted) {
    return null
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 opacity-90"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto" style={{ paddingTop: '7rem' }}>
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-52 h-52 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gray-200">
              <img
                src={getAssetPath("/assets/photos/personal/My image portrait.webp")}
                alt="Abo Ameen - Educator and Full-Stack Developer"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center 10%' }}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-slide-up tracking-tight">
            <span className="font-light">Welcome to My</span>
            <span className="block font-black">
              <span className="text-yellow-300 drop-shadow-lg">Digital</span>{' '}
              <span className="text-white drop-shadow-lg">Home</span>
            </span>
          </h1>
          
          {/* Subtitle with Typewriter */}
          <div className="text-xl md:text-2xl mb-8 opacity-95 animate-slide-up font-medium tracking-wide min-h-[2rem]">
            <span className="text-yellow-300">✨</span> I'm a/an{' '}
            <span className="text-yellow-300 font-bold bg-white/10 px-2 py-1 rounded-lg">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </span>
            <span className="text-yellow-300"> ✨</span>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90 animate-slide-up font-light">
            🚀 Join me on an{' '}
            <span className="text-yellow-300 font-semibold bg-white/10 px-1 rounded">exciting journey</span>{' '}
            through{' '}
            <span className="text-yellow-300 font-semibold">education</span>,{' '}
            <span className="text-yellow-300 font-semibold">technology</span>, and{' '}
            <span className="text-yellow-300 font-semibold">personal growth</span>! 
            This is where I share my{' '}
            <span className="text-white font-semibold bg-purple-500/30 px-1 rounded">adventures</span>, showcase my{' '}
            <span className="text-white font-semibold bg-purple-500/30 px-1 rounded">work</span>, and connect with{' '}
            <span className="text-yellow-300 font-semibold">Education Leaders and Innovators</span> like you.
          </p>
          
          {/* Call to action button */}
          <div className="flex justify-center animate-slide-up mb-32">
            <button 
              onClick={() => setShowMapSelection(true)}
              className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🚀 Where do u wanna start?
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - positioned at the very bottom */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Map Selection Modal - Tech & Sleek Version */}
      {showMapSelection && (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-950/95 via-purple-950/95 to-slate-900/95 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-4">
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Modal Container */}
          <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 p-4 sm:p-6 md:p-8 max-w-3xl w-full shadow-2xl">
            {/* Tech grid pattern */}
            <div className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}
            ></div>
            
            {/* Glowing corner accents */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 opacity-30 blur-2xl rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 opacity-30 blur-2xl rounded-full"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-6 sm:mb-8 md:mb-10">
                <div className="inline-block mb-3 sm:mb-4">
                  <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
                    <span className="text-blue-300 text-xs sm:text-sm font-semibold tracking-wider">NAVIGATION</span>
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-2 sm:mb-3 px-2">
                  Choose Your Journey
                </h2>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg px-4">
                  Explore my professional expertise through different perspectives
                </p>
              </div>
              
              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
                {/* Developer Journey Card */}
                <button
                  onClick={() => {
                    setShowMapSelection(false)
                    router.push('/developer')
                  }}
                  className="group relative overflow-hidden bg-gradient-to-br from-green-900/40 to-blue-900/40 hover:from-green-900/60 hover:to-blue-900/60 border border-green-500/30 hover:border-green-400/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
                >
                  {/* Animated scan line */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/10 to-transparent h-full transition-all duration-1000 group-hover:translate-y-full -translate-y-full"></div>
                  
                  {/* Tech corner brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-l-2 border-green-400/50"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-r-2 border-green-400/50"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-l-2 border-green-400/50"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-r-2 border-green-400/50"></div>
                  
                  <div className="relative text-center">
                    <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">💻</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-green-300 transition-colors">Developer Journey</h3>
                    <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                      Explore my technical skills, projects, and coding expertise
                    </p>
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-green-400 text-xs sm:text-sm font-medium">
                      <span>Terminal</span>
                      <span>•</span>
                      <span>Code</span>
                      <span>•</span>
                      <span>Projects</span>
                    </div>
                  </div>
                </button>

                {/* Teaching Starfield Card */}
                <button
                  onClick={() => {
                    setShowMapSelection(false)
                    router.push('/teaching/starfield')
                  }}
                  className="group relative overflow-hidden bg-gradient-to-br from-indigo-900/40 to-purple-900/40 hover:from-indigo-900/60 hover:to-purple-900/60 border border-indigo-500/30 hover:border-indigo-400/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  {/* Animated scan line */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/10 to-transparent h-full transition-all duration-1000 group-hover:translate-y-full -translate-y-full"></div>
                  
                  {/* Tech corner brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-l-2 border-purple-400/50"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-r-2 border-purple-400/50"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-l-2 border-purple-400/50"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-r-2 border-purple-400/50"></div>
                  
                  <div className="relative text-center">
                    <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">✨</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors">Teaching Starfield</h3>
                    <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                      Navigate through a constellation of my educational expertise
                    </p>
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-indigo-400 text-xs sm:text-sm font-medium">
                      <span>Stars</span>
                      <span>•</span>
                      <span>Constellation</span>
                      <span>•</span>
                      <span>Interactive</span>
                    </div>
                  </div>
                </button>
              </div>

              {/* Close Button */}
              <div className="text-center">
                <button
                  onClick={() => setShowMapSelection(false)}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-gray-400 hover:text-white transition-all duration-300 rounded-xl"
                >
                  <span className="text-xs sm:text-sm font-medium">✕ Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}