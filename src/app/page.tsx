'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ServicesSection from '@/components/ServicesSection'
import StatsSection from '@/components/StatsSection'
import CTAGrid from '@/components/CTAGrid'

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false)

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

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abo Ameen',
    jobTitle: ['ESL Teacher', 'Full-Stack Developer', 'Ed Tech Specialist', 'Instructional Designer'],
    description: 'Educator, developer, and lifelong learner passionate about technology and education',
    url: 'https://aboameen.dev',
    image: 'https://aboameen.dev/assets/photos/personal/My image portrait.webp',
    sameAs: [
      'https://www.linkedin.com/in/devameen/',
      'https://github.com/menoo20',
      'https://www.youtube.com/channel/UCvOkSv6YMLPXridRkvERcvA',
      'https://www.tiktok.com/@learn_english_with_mr'
    ],
    knowsAbout: [
      'English Language Teaching',
      'ESL Instruction',
      'Web Development',
      'Full-Stack Development',
      'React',
      'Next.js',
      'TypeScript',
      'Educational Technology',
      'Curriculum Development',
      'Instructional Design'
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Udacity',
      }
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dammam',
      addressRegion: 'Eastern Province',
      addressCountry: 'SA'
    },
    email: 'menooteaching@gmail.com',
    telephone: '+966541913057'
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navigation />
      <main>
        <Hero />
        <ServicesSection />
        <StatsSection />
        <CTAGrid />
      </main>
      <Footer />

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
    </>
  )
}