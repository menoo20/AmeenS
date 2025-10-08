'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaClock, FaUsers, FaProjectDiagram, FaCertificate, FaGlobe, FaAward } from 'react-icons/fa'

export default function StatsSection() {
  const stats = [
    {
      icon: <FaClock className="w-8 h-8" />,
      value: 9,
      suffix: '+',
      label: 'Years Experience',
      subtext: 'In education & development',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      value: 1000,
      suffix: '+',
      label: 'Students Taught',
      subtext: 'Across multiple countries',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaProjectDiagram className="w-8 h-8" />,
      value: 15,
      suffix: '+',
      label: 'Projects Completed',
      subtext: 'Web & educational solutions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaCertificate className="w-8 h-8" />,
      value: 20,
      suffix: '+',
      label: 'Certifications',
      subtext: 'Teaching & development',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      value: 2,
      suffix: '+',
      label: 'Years in AI',
      subtext: 'Data annotation experience',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      subtext: 'Quality guaranteed',
      color: 'from-pink-500 to-rose-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Impact by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Numbers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A decade of experience transforming careers and building digital solutions
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, index }: { stat: any; index: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = stat.value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= stat.value) {
        setCount(stat.value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, stat.value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="group relative"
    >
      <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden">
        {/* Gradient Glow on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

        {/* Icon */}
        <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-6 shadow-lg`}>
          {stat.icon}
        </div>

        {/* Number */}
        <div className="relative">
          <div className="flex items-baseline mb-2">
            <motion.span
              className="text-5xl md:text-6xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
            >
              {count}
            </motion.span>
            <span className="text-3xl md:text-4xl font-bold text-purple-400 ml-1">
              {stat.suffix}
            </span>
          </div>

          {/* Label */}
          <h3 className="text-xl font-bold text-white mb-2">
            {stat.label}
          </h3>
          
          {/* Subtext */}
          <p className="text-gray-400 text-sm">
            {stat.subtext}
          </p>
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-white/10 rounded-tr-2xl"></div>
        <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-white/10 rounded-bl-2xl"></div>
      </div>
    </motion.div>
  )
}
