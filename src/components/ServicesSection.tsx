'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaLaptopCode, FaFileAlt, FaChartBar, FaBrain, FaGlobe, FaUserGraduate } from 'react-icons/fa'

export default function ServicesSection() {
  const webServices = [
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      title: 'Portfolio Websites',
      description: 'Professional portfolio websites that showcase your work and attract opportunities',
      color: 'from-purple-500 to-pink-500',
      features: ['Responsive Design', 'Modern UI/UX', 'SEO Optimized']
    },
    {
      icon: <FaFileAlt className="w-8 h-8" />,
      title: 'ATS-Killer CVs',
      description: 'Resume optimization to pass automated screening systems and land interviews',
      color: 'from-blue-500 to-cyan-500',
      features: ['ATS-Compliant', 'Professional Design', 'Keyword Optimized']
    },
    {
      icon: <FaChartBar className="w-8 h-8" />,
      title: 'Data Solutions',
      description: 'Attendance tracking, Excel management systems, and Power BI dashboards',
      color: 'from-green-500 to-emerald-500',
      features: ['Power BI Reports', 'Excel Automation', 'Analytics']
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: 'Web Solutions',
      description: 'LMS platforms, landing pages, and educational websites for your needs',
      color: 'from-orange-500 to-red-500',
      features: ['LMS Development', 'Landing Pages', 'Custom Solutions']
    }
  ]

  const teachingServices = [
    {
      icon: <FaUserGraduate className="w-8 h-8" />,
      title: 'IELTS & SEPT Prep',
      description: 'Expert test preparation courses for IELTS and SEPT (Saudi English Placement Test)',
      color: 'from-indigo-500 to-purple-500',
      features: ['IELTS Coaching', 'SEPT Training', 'Test Strategies']
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: 'English Courses',
      description: 'Conversational English and General English courses tailored for adults',
      color: 'from-pink-500 to-rose-500',
      features: ['Conversational', 'General English', 'Adult Learners', 'Online & In-Person Tutoring']
    },
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      title: 'Content Development',
      description: 'Professional educational content creation and curriculum development',
      color: 'from-cyan-500 to-blue-500',
      features: ['Curriculum Design', 'Course Materials', 'Ed Tech Content', 'Tutoring Platforms']
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: 'AI Data Annotation',
      description: '2+ years of experience in AI data annotation and online tutoring services',
      color: 'from-violet-500 to-purple-500',
      features: ['AI Annotation', 'Data Labeling']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering employees and educators to enhance their online presence with professional web solutions and expert teaching services
          </p>
        </motion.div>

        {/* Web Development Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            💻 Web Development Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {webServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} text-white mb-4 shadow-lg`}>
                  {service.icon}
                </div>

                {/* Content */}
                <div className="relative">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Teaching Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🎓 Teaching & Educational Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachingServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} text-white mb-4 shadow-lg`}>
                  {service.icon}
                </div>

                {/* Content */}
                <div className="relative">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to elevate your online presence?
          </p>
          <a
            href="/developer/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Get Started Today
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
