'use client'

import React, { useState, useEffect } from 'react'
import DeveloperJourneyMap from './DeveloperJourneyMap'
import EducationStarfield from './EducationStarfield'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [typewriterText, setTypewriterText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showMapSelection, setShowMapSelection] = useState(false)
  const [showDeveloperMap, setShowDeveloperMap] = useState(false)
  const [showEducationMap, setShowEducationMap] = useState(false)

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
                src="/assets/photos/personal/My image portrait.webp"
                alt="Abo Ameen"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center 10%' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-4xl">👨‍💼</div>';
                }}
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

      {/* Map Selection Modal */}
      {showMapSelection && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 max-w-2xl w-full">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Choose Your Journey</h2>
              <p className="text-white/80 text-lg">
                Explore my professional expertise through different perspectives
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Developer Journey */}
              <button
                onClick={() => {
                  setShowMapSelection(false)
                  setShowDeveloperMap(true)
                }}
                className="group bg-gradient-to-br from-green-500/20 to-blue-500/20 hover:from-green-500/30 hover:to-blue-500/30 border border-green-400/30 rounded-xl p-6 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="text-xl font-bold text-white mb-2">Developer Journey</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Explore my technical skills, projects, and coding expertise
                  </p>
                  <div className="text-green-400 text-sm font-medium">
                    Terminal • Code • Projects
                  </div>
                </div>
              </button>

              {/* Education Starfield */}
              <button
                onClick={() => {
                  setShowMapSelection(false)
                  setShowEducationMap(true)
                }}
                className="group bg-gradient-to-br from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30 border border-indigo-400/30 rounded-xl p-6 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="text-xl font-bold text-white mb-2">Education Starfield</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Navigate through a constellation of my educational expertise
                  </p>
                  <div className="text-indigo-400 text-sm font-medium">
                    Stars • Constellation • Interactive
                  </div>
                </div>
              </button>
            </div>

            {/* Close Button */}
            <div className="text-center mt-6">
              <button
                onClick={() => setShowMapSelection(false)}
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                ✕ Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Developer Journey Map */}
      <DeveloperJourneyMap 
        isVisible={showDeveloperMap}
        onClose={() => setShowDeveloperMap(false)}
        onNavigate={(nodeId) => {
          console.log(`Navigating to: ${nodeId}`)
          setShowDeveloperMap(false)
          // Here we'll add actual navigation logic later
          alert(`🚀 Navigating to ${nodeId} section! (Coming soon)`)
        }}
      />

      {/* Education Starfield */}
      <EducationStarfield 
        isVisible={showEducationMap}
        onClose={() => setShowEducationMap(false)}
        onNavigate={(nodeId: string) => {
          console.log(`Navigating to: ${nodeId}`)
          setShowEducationMap(false)
          // Here we'll add actual navigation logic later
          alert(`✨ Exploring ${nodeId} star! (Coming soon)`)
        }}
      />
    </section>
  )
}