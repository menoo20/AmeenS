'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaTools, FaRocket, FaArrowLeft } from 'react-icons/fa';

interface UnderConstructionProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color?: string;
  backUrl?: string;
}

export default function UnderConstruction({
  title,
  subtitle,
  description,
  icon,
  color = '#8b5cf6',
  backUrl = '/teaching/starfield'
}: UnderConstructionProps) {
  const router = useRouter();

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 sm:p-8"
      style={{
        background: `linear-gradient(135deg, ${color}15 0%, #1a1a2e 50%, #0a0a0a 100%)`
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-3xl w-full">
        {/* Icon and status */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border-2 border-purple-500/30 mb-6 animate-float">
            <span className="text-7xl">{icon}</span>
          </div>
          
          {/* Construction badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 backdrop-blur-sm mb-4">
            <FaTools className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-yellow-300 font-medium text-sm">UNDER CONSTRUCTION</span>
          </div>
        </div>

        {/* Title and description card */}
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/50 p-8 sm:p-12 animate-slide-up">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 text-center">
            {title}
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-xl sm:text-2xl font-medium mb-6 text-center"
            style={{ color: color }}
          >
            {subtitle}
          </p>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            <FaRocket className="text-gray-500 text-xl" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed text-center mb-8">
            {description}
          </p>

          {/* Coming soon message */}
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-6 border border-purple-500/20 mb-8">
            <p className="text-gray-200 text-center">
              <span className="font-semibold text-purple-400">🚀 Exciting content coming soon!</span>
              <br />
              <span className="text-sm text-gray-400 mt-2 block">
                I'm currently working on bringing you an amazing experience. Check back later!
              </span>
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push(backUrl)}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <FaArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Starfield
            </button>
            
            <button
              onClick={() => router.push('/')}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-xl font-semibold backdrop-blur-sm border border-gray-600/50 transition-all duration-300 hover:scale-105"
            >
              Go to Home
            </button>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span>This section is being crafted with care</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
