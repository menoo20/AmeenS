'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import { 
  GraduationCap, Briefcase, FileText, Globe, BookOpen, Users,
  Award, Target, Lightbulb, Rocket, MessageCircle, TrendingUp,
  ArrowRight, CheckCircle, Clock, Star, Zap
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
      borderColor: 'border-indigo-500/30',
      cta: 'Book Free Consultation',
      badge: 'Most Popular',
      testimonial: 'Achieved 7.5 Band Score!'
    },
    { 
      id: 'english-courses', 
      icon: MessageCircle, 
      title: 'English Language Courses',
      description: 'Conversational and General English courses tailored for adults seeking to improve their communication skills.',
      features: ['Conversation Skills', 'Grammar Mastery', 'Pronunciation', 'Real-Life Scenarios'],
      color: 'from-blue-500 to-cyan-500', 
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/30',
      cta: 'Start Learning Today',
      badge: 'Beginner Friendly',
      testimonial: 'Fluent in 6 months!'
    },
    { 
      id: 'online-tutoring', 
      icon: Users, 
      title: 'Online Tutoring',
      description: 'One-on-one personalized online tutoring sessions designed to meet individual learning goals and pace.',
      features: ['Personalized Plans', 'Flexible Schedule', 'Interactive Sessions', 'Progress Tracking'],
      color: 'from-green-500 to-emerald-500', 
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/30',
      cta: 'Schedule Free Trial',
      badge: 'Flexible Hours',
      testimonial: '1000+ happy students'
    },
    { 
      id: 'content-dev', 
      icon: BookOpen, 
      title: 'Educational Content Development',
      description: 'Professional curriculum design, course materials, and educational content creation for institutions and educators.',
      features: ['Curriculum Design', 'Course Materials', 'Assessment Tools', 'Learning Guides'],
      color: 'from-pink-500 to-rose-500', 
      bgGradient: 'from-pink-500/10 to-rose-500/10',
      borderColor: 'border-pink-500/30',
      cta: 'Get Custom Quote',
      badge: 'For Institutions',
      testimonial: '50+ projects delivered'
    },
    { 
      id: 'educator-portfolio', 
      icon: Briefcase, 
      title: 'Portfolio Website for Educators',
      description: 'Stand out as an educator with a stunning, professional portfolio that showcases your teaching excellence.',
      features: ['Teaching Portfolio', 'Lesson Showcase', 'Student Reviews', 'SEO Optimized'],
      color: 'from-purple-500 to-pink-500', 
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30',
      cta: 'View Sample Sites',
      badge: 'Stand Out',
      testimonial: 'Land your dream job'
    },
    { 
      id: 'educator-cv', 
      icon: FileText, 
      title: 'Professional CVs for Educators',
      description: 'ATS-optimized CVs specifically crafted for educators and professionals across all industries.',
      features: ['ATS-Compliant', 'Teaching Focus', 'Achievement Highlight', 'Multiple Formats'],
      color: 'from-orange-500 to-red-500', 
      bgGradient: 'from-orange-500/10 to-red-500/10',
      borderColor: 'border-orange-500/30',
      cta: 'Request Sample',
      badge: 'Quick Turnaround',
      testimonial: '95% interview rate'
    },
    { 
      id: 'lms-platform', 
      icon: GraduationCap, 
      title: 'LMS Platform Development',
      description: 'Custom Learning Management Systems for schools, institutions, and individual educators to deliver online courses.',
      features: ['Course Management', 'Student Tracking', 'Certificates', 'Assessment Tools'],
      color: 'from-teal-500 to-cyan-500', 
      bgGradient: 'from-teal-500/10 to-cyan-500/10',
      borderColor: 'border-teal-500/30',
      cta: 'Book Demo',
      badge: 'Enterprise Ready',
      testimonial: 'Scale your teaching'
    },
    { 
      id: 'educational-websites', 
      icon: Globe, 
      title: 'Educational Websites',
      description: 'Professional websites for schools, training centers, and educational institutions to establish online presence.',
      features: ['School Websites', 'Course Pages', 'Registration Forms', 'Modern Design'],
      color: 'from-amber-500 to-orange-500', 
      bgGradient: 'from-amber-500/10 to-orange-500/10',
      borderColor: 'border-amber-500/30',
      cta: 'See Portfolio',
      badge: 'Modern Design',
      testimonial: 'Boost enrollments'
    },
    { 
      id: 'consultation', 
      icon: Lightbulb, 
      title: 'Educational Consulting',
      description: 'Expert guidance on curriculum development, Ed Tech integration, and instructional design strategies.',
      features: ['Ed Tech Advice', 'Curriculum Review', 'Teaching Strategies', 'Digital Integration'],
      color: 'from-violet-500 to-purple-500', 
      bgGradient: 'from-violet-500/10 to-purple-500/10',
      borderColor: 'border-violet-500/30',
      cta: 'Book Strategy Call',
      badge: 'Expert Advice',
      testimonial: 'Transform your school'
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

        {/* Social Proof Section */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 border-2 border-slate-900 flex items-center justify-center text-white font-bold">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <p className="text-white font-semibold mb-2">1000+ Students Trained</p>
            <p className="text-gray-400 text-sm">Join thousands of successful learners from 20+ countries</p>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">95%</div>
            </div>
            <p className="text-white font-semibold mb-2">Success Rate</p>
            <p className="text-gray-400 text-sm">Students achieve their goals within planned timeframe</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">24h</div>
            </div>
            <p className="text-white font-semibold mb-2">Response Time</p>
            <p className="text-gray-400 text-sm">Get quick answers to your inquiries and booking requests</p>
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
                {/* Badge */}
                {service.badge && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${service.color} text-white text-xs font-bold shadow-lg flex items-center gap-1`}>
                      <Zap className="w-3 h-3" />
                      {service.badge}
                    </div>
                  </div>
                )}

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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 backdrop-blur-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Testimonial/Social Proof */}
                  <div className="mb-4 py-2 px-3 rounded-lg bg-white/5 border-l-2 border-green-400">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <p className="text-green-300 text-xs font-medium">{service.testimonial}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => router.push('/developer/contact')}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group/btn`}
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
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
        <div className="relative bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-indigo-500/30 overflow-hidden mb-12">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 backdrop-blur-sm mb-6">
              <Clock className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="text-red-300 font-medium text-sm">Limited Availability - Book Your Spot Today!</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Transform Your Future?</span>
            </h2>
            
            <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
              Whether you're an educator looking for professional development or need educational technology solutions, let's discuss how I can help you achieve your goals.
            </p>

            {/* Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
              <div className="flex items-center gap-2 text-left bg-white/5 rounded-lg p-3 backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-200 text-sm">Free initial consultation</span>
              </div>
              <div className="flex items-center gap-2 text-left bg-white/5 rounded-lg p-3 backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-200 text-sm">Flexible payment plans</span>
              </div>
              <div className="flex items-center gap-2 text-left bg-white/5 rounded-lg p-3 backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-200 text-sm">100% satisfaction guarantee</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => router.push('/developer/contact')}
                className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-indigo-500/50 transform hover:-translate-y-1 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => {
                  // Scroll to services
                  const servicesSection = document.querySelector('.grid')
                  servicesSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
              >
                <Target className="w-5 h-5" />
                View All Services
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-3">Trusted by professionals and institutions worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-gray-500 text-xs">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>1000+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>20+ Certifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>9+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Teaser Section */}
        <div className="mb-12 text-center bg-gradient-to-br from-slate-900/50 to-indigo-900/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Have Questions?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get answers about scheduling, course duration, delivery methods, and more. I'm here to help you make the right decision.
          </p>
          <button
            onClick={() => router.push('/developer/contact')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Ask Me Anything
            <ArrowRight className="w-4 h-4" />
          </button>
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
