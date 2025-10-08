'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { FaRocket, FaGraduationCap, FaBlog, FaEnvelope } from 'react-icons/fa'

export default function CTAGrid() {
  const router = useRouter()

  const ctaCards = [
    {
      icon: <FaRocket className="w-12 h-12" />,
      title: 'Developer Portfolio',
      description: 'Explore my web development projects, skills, and technical expertise',
      gradient: 'from-purple-600 via-pink-600 to-red-600',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      link: '/developer',
      buttonText: 'View Projects',
      features: ['Portfolios', 'LMS', 'Data Solutions']
    },
    {
      icon: <FaGraduationCap className="w-12 h-12" />,
      title: 'Teaching Services',
      description: 'Discover my teaching expertise, courses, and educational experience',
      gradient: 'from-blue-600 via-cyan-600 to-teal-600',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      link: '/teaching/starfield',
      buttonText: 'Explore Teaching',
      features: ['IELTS/SEPT', 'English Courses', 'Content Dev']
    },
    {
      icon: <FaBlog className="w-12 h-12" />,
      title: 'Blog & Insights',
      description: 'Read articles about education, technology, and professional growth',
      gradient: 'from-green-600 via-emerald-600 to-teal-600',
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      link: '/blog',
      buttonText: 'Read Articles',
      features: ['Ed Tech', 'Web Dev', 'Career Tips']
    },
    {
      icon: <FaEnvelope className="w-12 h-12" />,
      title: 'Get in Touch',
      description: 'Ready to start your project? Let\'s discuss your goals and needs',
      gradient: 'from-orange-600 via-red-600 to-pink-600',
      bgGradient: 'from-orange-500/20 to-red-500/20',
      link: '/developer/contact',
      buttonText: 'Contact Me',
      features: ['Quick Response', 'Free Consultation', 'Custom Solutions']
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Digital Space</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your path to discover how I can help elevate your online presence
          </p>
        </motion.div>

        {/* CTA Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ctaCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              onClick={() => router.push(card.link)}
              className="group relative cursor-pointer"
            >
              <div className={`relative bg-gradient-to-br ${card.bgGradient} backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-200 hover:border-transparent transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl`}>
                {/* Animated Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                <div className="absolute inset-[2px] bg-white rounded-3xl -z-10"></div>

                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400" />
                    <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400" />
                  </svg>
                </div>

                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${card.gradient} text-white mb-6 shadow-xl transform group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-base leading-relaxed">
                    {card.description}
                  </p>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {card.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className={`inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r ${card.gradient} font-bold text-lg group-hover:translate-x-2 transition-transform duration-300`}>
                    {card.buttonText}
                    <svg className="w-5 h-5 ml-2 text-purple-600 group-hover:text-pink-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5">
                  <div className={`absolute inset-0 bg-gradient-to-tl ${card.gradient} rounded-tl-full`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg">
            🚀 <span className="font-semibold text-gray-900">Ready to elevate your online presence?</span> Choose your starting point above.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
