'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { aboutMeData } from '@/data/aboutMe'
import { BookOpen, Code, GraduationCap, Sparkles, MapPin, Briefcase, Heart, ChevronRight, ArrowUp } from 'lucide-react'

export default function AboutMePage() {
  const [selectedChapter, setSelectedChapter] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Auto-play chapters
  useEffect(() => {
    if (!isAutoPlay) return
    
    const interval = setInterval(() => {
      setSelectedChapter((prev) => 
        prev === aboutMeData.storyChapters.length - 1 ? 0 : prev + 1
      )
    }, 8000)
    
    return () => clearInterval(interval)
  }, [isAutoPlay])

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentChapter = aboutMeData.storyChapters[selectedChapter]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      <Navigation />
      
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <Image
                src="/assets/photos/personal/My image portrait.webp"
                alt={aboutMeData.personalInfo.name}
                width={180}
                height={180}
                className="relative rounded-full border-4 border-white/20 shadow-2xl"
              />
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            {aboutMeData.personalInfo.name}
          </h1>
          <p className="text-2xl text-blue-300 mb-2">"{aboutMeData.personalInfo.nickname}"</p>
          
          <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm sm:text-base mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{aboutMeData.personalInfo.currentLocation}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>{aboutMeData.personalInfo.currentWorkplace}</span>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto italic"
          >
            "{aboutMeData.philosophy}"
          </motion.p>
        </motion.div>

        {/* Story Navigator */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-blue-400" />
              My Story
            </h2>
            
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`px-4 py-2 rounded-lg border transition-all ${
                isAutoPlay
                  ? 'bg-blue-500 border-blue-400 text-white'
                  : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
              }`}
            >
              {isAutoPlay ? '⏸ Pause' : '▶ Auto-play'}
            </button>
          </div>

          {/* Chapter Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {aboutMeData.storyChapters.map((chapter, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedChapter(index)
                  setIsAutoPlay(false)
                }}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedChapter === index
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400 shadow-lg shadow-blue-500/20'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className={`text-sm font-semibold mb-1 ${
                  selectedChapter === index ? 'text-blue-300' : 'text-white/60'
                }`}>
                  Chapter {index + 1}
                </div>
                <div className={`text-xs ${
                  selectedChapter === index ? 'text-white' : 'text-white/50'
                }`}>
                  {chapter.chapter}
                </div>
              </button>
            ))}
          </div>

          {/* Chapter Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedChapter}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-slate-900/50 via-indigo-900/30 to-slate-900/50 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
            >
              <div className={`flex flex-col lg:flex-row ${[1, 2, 3, 4, 5, 7, 9].includes(selectedChapter) ? '' : 'lg:items-center'}`}>
                {/* Image Section */}
                <div className={`relative w-full lg:w-1/2 overflow-hidden flex-shrink-0 ${[1, 2, 3, 4, 5, 7, 9].includes(selectedChapter) ? 'flex items-center' : ''}`}>
                  <Image
                    src={currentChapter.image}
                    alt={currentChapter.title}
                    width={1200}
                    height={800}
                    className={`w-full h-auto block ${[1, 2, 3, 4, 5, 7, 9].includes(selectedChapter) ? 'rounded-tr-2xl rounded-br-2xl' : ''}`}
                    style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                    unoptimized
                  />
                  {![1, 2, 3, 4, 5, 7, 9].includes(selectedChapter) && (
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none"></div>
                  )}
                  
                  {/* Chapter Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="bg-blue-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {currentChapter.chapter}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 p-6 lg:p-8 xl:p-10 flex flex-col justify-center lg:min-h-0">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 lg:mb-4 leading-tight">
                    {currentChapter.title}
                  </h3>
                  
                  <p className="text-sm lg:text-base text-white/80 leading-relaxed mb-4 lg:mb-6 line-clamp-6 lg:line-clamp-none">
                    {currentChapter.narrative}
                  </p>

                  {/* Navigation Arrows */}
                  <div className="flex gap-3 mt-auto">
                    <button
                      onClick={() => setSelectedChapter((prev) => prev === 0 ? aboutMeData.storyChapters.length - 1 : prev - 1)}
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-lg transition-all text-sm"
                    >
                      ← Previous
                    </button>
                    
                    <button
                      onClick={() => setSelectedChapter((prev) => prev === aboutMeData.storyChapters.length - 1 ? 0 : prev + 1)}
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg transition-all shadow-lg text-sm"
                    >
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Expertise Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Teaching Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-gradient-to-br from-blue-900/30 to-slate-900/30 backdrop-blur-lg rounded-2xl border border-blue-500/20 hover:border-blue-500/40 p-8 transition-all duration-500 hover:scale-[1.02]"
          >
            {/* Tech grid pattern */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}
            ></div>
            
            {/* Animated corner accent */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-500 rounded-full group-hover:w-40 group-hover:h-40"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                <GraduationCap className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">Teaching Expertise</h3>
            </div>
            
            <ul className="space-y-3 relative z-10">
              {aboutMeData.expertise.teaching.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-white/80 hover:text-white transition-colors duration-200"
                >
                  <Sparkles className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>{skill}</span>
                </motion.li>
              ))}
            </ul>
            
            {/* Scan line effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent h-full transition-all duration-1000 group-hover:translate-y-full -translate-y-full"></div>
          </motion.div>

          {/* Technical Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-gradient-to-br from-purple-900/30 to-slate-900/30 backdrop-blur-lg rounded-2xl border border-purple-500/20 hover:border-purple-500/40 p-8 transition-all duration-500 hover:scale-[1.02]"
          >
            {/* Tech grid pattern */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}
            ></div>
            
            {/* Animated corner accent */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-500 rounded-full group-hover:w-40 group-hover:h-40"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                <Code className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">Technical Expertise</h3>
            </div>
            
            <ul className="space-y-3 relative z-10">
              {aboutMeData.expertise.technical.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-white/80 hover:text-white transition-colors duration-200"
                >
                  <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                  <span>{skill}</span>
                </motion.li>
              ))}
            </ul>
            
            {/* Scan line effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent h-full transition-all duration-1000 group-hover:translate-y-full -translate-y-full"></div>
          </motion.div>
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900/50 via-pink-900/30 to-slate-900/50 backdrop-blur-lg rounded-2xl border border-pink-500/20 p-8 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-pink-500/20 rounded-lg">
              <Heart className="w-8 h-8 text-pink-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Current Focus</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aboutMeData.currentFocus.map((focus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                {/* Animated gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-purple-500/40 opacity-40 blur-xl group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {/* Card content */}
                <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/10 group-hover:border-white/30 rounded-lg p-4 h-full transition-all duration-300">
                  
                  {/* Tech grid pattern */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '15px 15px'
                    }}
                  ></div>
                  
                  {/* Animated corner accent */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-500 rounded-full"></div>
                  
                  <p className="text-white/90 relative z-10">{focus}</p>
                  
                  {/* Scan line effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-full transition-all duration-1000 group-hover:translate-y-full -translate-y-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl border border-white/10 p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Key Achievement</h3>
          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-4xl font-bold px-8 py-4 rounded-full shadow-2xl mb-6">
            {aboutMeData.achievements.certifications}
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {aboutMeData.achievements.specializations.map((spec, index) => (
              <span
                key={index}
                className="bg-white/10 border border-white/20 text-white/80 px-4 py-2 rounded-full text-sm"
              >
                {spec}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

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
            <ArrowUp className="w-6 h-6 group-hover:translate-y-[-2px] transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
