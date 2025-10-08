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
        {/* Simple centered header */}
        <div className="text-center mb-8 animate-fade-in">
          {/* Construction badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 backdrop-blur-sm">
            <FaTools className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-yellow-300 font-semibold text-sm tracking-wide">UNDER CONSTRUCTION</span>
            <FaTools className="w-4 h-4 text-yellow-400 animate-pulse" />
          </div>
        </div>

        {/* Title and description card with modern tech borders */}
        <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 sm:p-12 animate-slide-up overflow-hidden">
          {/* Tech corner accents - Top Left */}
          <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
            <div 
              className="absolute top-0 left-0 w-12 h-0.5"
              style={{ backgroundColor: color }}
            ></div>
            <div 
              className="absolute top-0 left-0 w-0.5 h-12"
              style={{ backgroundColor: color }}
            ></div>
            <div 
              className="absolute top-3 left-3 w-2 h-2 rounded-full"
              style={{ backgroundColor: color }}
            ></div>
          </div>
          
          {/* Tech corner accents - Top Right */}
          <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
            <div 
              className="absolute top-0 right-0 w-12 h-0.5"
              style={{ backgroundColor: color }}
            ></div>
            <div 
              className="absolute top-0 right-0 w-0.5 h-12"
              style={{ backgroundColor: color }}
            ></div>
            <div 
              className="absolute top-3 right-3 w-2 h-2 rounded-full"
              style={{ backgroundColor: color }}
            ></div>
          </div>
          
          {/* Tech corner accents - Bottom Left */}
          <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none">
            <div 
              className="absolute bottom-0 left-0 w-12 h-0.5"
              style={{ backgroundColor: color }}
            ></div>
            <div 
              className="absolute bottom-0 left-0 w-0.5 h-12"
              style={{ backgroundColor: color }}
            ></div>
            <div 
              className="absolute bottom-3 left-3 w-2 h-2 rounded-full"
              style={{ backgroundColor: color }}
            ></div>
          </div>
          
          {/* Tech corner accents - Bottom Right */}
          <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
            <div 
              className="absolute bottom-0 right-0 w-12 h-0.5"
              style={{ backgroundColor: color }}
            ></div>
            <div 
              className="absolute bottom-0 right-0 w-0.5 h-12"
              style={{ backgroundColor: color }}
            ></div>
            <div 
              className="absolute bottom-3 right-3 w-2 h-2 rounded-full"
              style={{ backgroundColor: color }}
            ></div>
          </div>

          {/* Glowing border effect */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-50 pointer-events-none"
            style={{ 
              boxShadow: `inset 0 0 60px ${color}20, 0 0 30px ${color}15`
            }}
          ></div>

          {/* Animated scanning line */}
          <div 
            className="absolute left-0 right-0 h-0.5 animate-scan pointer-events-none"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
              top: '50%'
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10">
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

            {/* Divider with tech style */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 flex items-center gap-1">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                <div className="w-1 h-1 rounded-full bg-gray-600"></div>
              </div>
              <div 
                className="p-2 rounded-lg border"
                style={{ borderColor: `${color}40` }}
              >
                <FaRocket 
                  className="text-xl"
                  style={{ color: color }}
                />
              </div>
              <div className="flex-1 flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed text-center mb-8">
              {description}
            </p>

            {/* Coming soon message with tech border */}
            <div 
              className="relative rounded-xl p-6 mb-8 overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, ${color}10, ${color}05)`,
                border: `1px solid ${color}30`
              }}
            >
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: color }}></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: color }}></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: color }}></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: color }}></div>
              
              <p className="text-gray-200 text-center relative z-10">
                <span 
                  className="font-semibold"
                  style={{ color: color }}
                >
                  🚀 Exciting content coming soon!
                </span>
                <br />
                <span className="text-sm text-gray-400 mt-2 block">
                  I'm currently working on bringing you an amazing experience. Check back later!
                </span>
              </p>
            </div>
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
