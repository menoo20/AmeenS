'use client'

import React, { useState, useEffect } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [typewriterText, setTypewriterText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const typewriterWords = ['Educator', 'Developer', 'Lifelong Learner', 'Problem Solver', 'Creative Thinker']
  
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
                src="/assets/photos/personal/My image portrait.png"
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
            <span className="text-yellow-300">✨</span> I'm a{' '}
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
            <span className="text-yellow-300 font-semibold">amazing fellow learners</span> like you.
          </p>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up mb-32">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🌟 Discover My Story
            </button>
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              🎯 View My Journey
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
    </section>
  )
}