'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import { 
  GraduationCap, Briefcase, FileText, Globe, BookOpen, Users,
  Award, Target, Lightbulb, Rocket, MessageCircle, TrendingUp
} from 'lucide-react'

export default function TeachingServicesPage() {
  const router = useRouter()
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const educationalServices = [
    { 
      id: 'ielts-sept', 
      icon: Award, 
      title: 'IELTS & SEPT Preparation',
      description: 'Expert test preparation courses with proven strategies for IELTS and Saudi English Placement Test (SEPT).',
      features: ['Speaking Practice', 'Writing Techniques', 'Test Strategies', 'Mock Tests'],
      color: 'from-indigo-500 to-purple-500', 
      bgGradient: 'from-indigo-500/10 to-purple-500/10',
      borderColor: 'border-indigo-500/30'
    },
    { 
      id: 'english-courses', 
      icon: MessageCircle, 
      title: 'English Language Courses',
      description: 'Conversational and General English courses tailored for adults seeking to improve their communication skills.',
      features: ['Conversation Skills', 'Grammar Mastery', 'Pronunciation', 'Real-Life Scenarios'],
      color: 'from-blue-500 to-cyan-500', 
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/30'
    },
    { 
      id: 'online-tutoring', 
      icon: Users, 
      title: 'Online Tutoring',
      description: 'One-on-one personalized online tutoring sessions designed to meet individual learning goals and pace.',
      features: ['Personalized Plans', 'Flexible Schedule', 'Interactive Sessions', 'Progress Tracking'],
      color: 'from-green-500 to-emerald-500', 
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/30'
    },
    { 
      id: 'content-dev', 
      icon: BookOpen, 
      title: 'Educational Content Development',
      description: 'Professional curriculum design, course materials, and educational content creation for institutions and educators.',
      features: ['Curriculum Design', 'Course Materials', 'Assessment Tools', 'Learning Guides'],
      color: 'from-pink-500 to-rose-500', 
      bgGradient: 'from-pink-500/10 to-rose-500/10',
      borderColor: 'border-pink-500/30'
    },
    { 
      id: 'educator-portfolio', 
      icon: Briefcase, 
      title: 'Portfolio Website for Educators',
      description: 'Stand out as an educator with a stunning, professional portfolio that showcases your teaching excellence.',
      features: ['Teaching Portfolio', 'Lesson Showcase', 'Student Reviews', 'SEO Optimized'],
      color: 'from-purple-500 to-pink-500', 
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30'
    },
    { 
      id: 'educator-cv', 
      icon: FileText, 
      title: 'Professional CVs for Educators',
      description: 'ATS-optimized CVs specifically crafted for educators and professionals across all industries.',
      features: ['ATS-Compliant', 'Teaching Focus', 'Achievement Highlight', 'Multiple Formats'],
      color: 'from-orange-500 to-red-500', 
      bgGradient: 'from-orange-500/10 to-red-500/10',
      borderColor: 'border-orange-500/30'
    },
    { 
      id: 'lms-platform', 
      icon: GraduationCap, 
      title: 'LMS Platform Development',
      description: 'Custom Learning Management Systems for schools, institutions, and individual educators to deliver online courses.',
      features: ['Course Management', 'Student Tracking', 'Certificates', 'Assessment Tools'],
      color: 'from-teal-500 to-cyan-500', 
      bgGradient: 'from-teal-500/10 to-cyan-500/10',
      borderColor: 'border-teal-500/30'
    },
    { 
      id: 'educational-websites', 
      icon: Globe, 
      title: 'Educational Websites',
      description: 'Professional websites for schools, training centers, and educational institutions to establish online presence.',
      features: ['School Websites', 'Course Pages', 'Registration Forms', 'Modern Design'],
      color: 'from-amber-500 to-orange-500', 
      bgGradient: 'from-amber-500/10 to-orange-500/10',
      borderColor: 'border-amber-500/30'
    },
    { 
      id: 'consultation', 
      icon: Lightbulb, 
      title: 'Educational Consulting',
      description: 'Expert guidance on curriculum development, Ed Tech integration, and instructional design strategies.',
      features: ['Ed Tech Advice', 'Curriculum Review', 'Teaching Strategies', 'Digital Integration'],
      color: 'from-violet-500 to-purple-500', 
      bgGradient: 'from-violet-500/10 to-purple-500/10',
      borderColor: 'border-violet-500/30'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      <Navigation />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 sm:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 backdrop-blur-sm mb-4">
            <Rocket className="text-indigo-400 w-5 h-5" />
            <span className="text-indigo-300 font-medium text-sm">TEACHING & EDUCATIONAL SERVICES</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">Educational Journey</span>
          </h1>
          
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto mb-8">
            From teaching English to building educational platforms, I offer comprehensive services to elevate educators and learners alike.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Target className="text-indigo-400 w-4 h-4" />
              <span className="text-gray-300 text-sm">9+ Years Experience</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Users className="text-purple-400 w-4 h-4" />
              <span className="text-gray-300 text-sm">1000+ Students Taught</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <TrendingUp className="text-blue-400 w-4 h-4" />
              <span className="text-gray-300 text-sm">20+ Certifications</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {educationalServices.map((service) => {
            const Icon = service.icon
            const isHovered = hoveredService === service.id

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm rounded-2xl p-6 border ${service.borderColor} transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden`}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-purple-300 transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 backdrop-blur-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <div className={`absolute inset-0 bg-gradient-to-bl ${service.color} rounded-bl-full`}></div>
                </div>

                {/* Bottom Border Glow */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-12 border border-indigo-500/30">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Elevate Your Educational Impact?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're an educator looking for professional development or need educational technology solutions, I'm here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => router.push('/developer/contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Get in Touch
            </button>
            <button
              onClick={() => router.push('/teaching/starfield')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
            >
              <Rocket className="w-5 h-5" />
              Explore More
            </button>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => router.push('/teaching/starfield')}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Teaching Starfield
          </button>
        </div>
      </div>
    </div>
  )
}
