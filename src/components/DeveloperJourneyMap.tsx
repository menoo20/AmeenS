'use client'

import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface JourneyNode {
  id: string
  label: string
  codeSnippet: string
  icon: string
  position: { x: number; y: number }
  color: string
  description: string
}

interface DeveloperJourneyMapProps {
  isVisible: boolean
  onClose: () => void
  onNavigate: (nodeId: string) => void
}

export default function DeveloperJourneyMap({ isVisible, onClose, onNavigate }: DeveloperJourneyMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const nodesRef = useRef<HTMLDivElement[]>([])
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  const journeyNodes: JourneyNode[] = [
    {
      id: 'about',
      label: 'whoAmI()',
      codeSnippet: 'const developer = new Person("Abo Ameen");',
      icon: '👨‍💻',
      position: { x: 25, y: 25 },
      color: '#00ff88',
      description: 'Learn about my background and journey'
    },
    {
      id: 'skills',
      label: 'mySkills.map()',
      codeSnippet: 'skills.forEach(skill => console.log(skill));',
      icon: '⚡',
      position: { x: 75, y: 25 },
      color: '#00bfff',
      description: 'Explore my technical expertise'
    },
    {
      id: 'projects',
      label: 'git log --projects',
      codeSnippet: 'git checkout -b "amazing-project"',
      icon: '🚀',
      position: { x: 75, y: 75 },
      color: '#ff6b6b',
      description: 'Browse my portfolio of projects'
    },
    {
      id: 'certificates',
      label: 'achievements',
      codeSnippet: '{"certificates": "unlocked", "status": "certified"}',
      icon: '🏆',
      position: { x: 28, y: 70 },
      color: '#ffd93d',
      description: 'View my certifications and achievements'
    },
    {
      id: 'contact',
      label: 'initConnection()',
      codeSnippet: 'await connect({ method: "collaboration" });',
      icon: '📡',
      position: { x: 55, y: 50 },
      color: '#ff8c42',
      description: 'Get in touch for opportunities'
    }
  ]

  useEffect(() => {
    if (isVisible && containerRef.current) {
      // Animate container entrance
      gsap.fromTo(containerRef.current, 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
      )

      // Animate nodes with staggered entrance
      gsap.fromTo(nodesRef.current,
        { opacity: 0, scale: 0, rotation: 180 },
        { 
          opacity: 1, 
          scale: 1, 
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.3,
          ease: "elastic.out(1, 0.5)"
        }
      )

      // Circuit animation
      const circuits = containerRef.current.querySelectorAll('.circuit-line')
      gsap.fromTo(circuits,
        { strokeDashoffset: 1000 },
        { 
          strokeDashoffset: 0,
          duration: 2,
          delay: 0.8,
          stagger: 0.2,
          ease: "power2.inOut"
        }
      )
    }
  }, [isVisible])

  // Handle ESC key to close
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isVisible) {
        handleClose()
      }
    }

    if (isVisible) {
      document.addEventListener('keydown', handleEscKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [isVisible])

  const handleClose = () => {
    if (containerRef.current) {
      // Animate exit
      gsap.to(containerRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        ease: "back.in(1.7)",
        onComplete: () => {
          onClose()
          // Scroll back to hero section
          const heroSection = document.querySelector('section')
          if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' })
          }
        }
      })

      // Animate nodes exit with stagger
      gsap.to(nodesRef.current, {
        opacity: 0,
        scale: 0,
        rotation: -180,
        duration: 0.3,
        stagger: 0.05,
        ease: "back.in(1.7)"
      })
    }
  }

  const handleNodeClick = (node: JourneyNode) => {
    setSelectedNode(node.id)
    
    // Pulse animation on click
    const nodeElement = nodesRef.current.find(el => el?.dataset.nodeId === node.id)
    if (nodeElement) {
      gsap.to(nodeElement, {
        scale: 1.2,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      })
    }

    // Navigate after animation
    setTimeout(() => {
      onNavigate(node.id)
    }, 500)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        ref={containerRef}
        className="relative w-full max-w-6xl h-full max-h-4xl bg-gray-800 rounded-lg border border-green-400/30 overflow-hidden"
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 bg-gray-900 border-b border-green-400/30 p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-green-400 font-mono text-sm">
            ~/developer-journey $ ls -la
          </div>
          <button 
            onClick={handleClose}
            className="text-green-400 hover:text-red-400 transition-colors text-xl z-10 relative p-2 rounded-lg hover:bg-red-500/10 min-w-[40px] min-h-[40px] flex items-center justify-center"
            title="Close and return to hero"
          >
            ✕
          </button>
        </div>

        {/* Circuit Board Background */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect fill="#1f2937" width="100" height="100"/>
              <circle cx="20" cy="20" r="2" fill="#00ff88"/>
              <circle cx="80" cy="80" r="2" fill="#00ff88"/>
              <line x1="20" y1="20" x2="80" y2="80" stroke="#00ff88" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
          
          {/* Connection lines between nodes */}
          {journeyNodes.map((node, index) => (
            <g key={`connection-${index}`}>
              {journeyNodes.slice(index + 1).map((targetNode, targetIndex) => (
                <line
                  key={`line-${index}-${targetIndex}`}
                  className="circuit-line"
                  x1={`${node.position.x}%`}
                  y1={`${node.position.y}%`}
                  x2={`${targetNode.position.x}%`}
                  y2={`${targetNode.position.y}%`}
                  stroke={node.color}
                  strokeWidth="2"
                  strokeDasharray="10,5"
                  opacity="0.4"
                />
              ))}
            </g>
          ))}
        </svg>

        {/* Journey Nodes */}
        <div className="relative w-full h-full pt-16">
          {journeyNodes.map((node, index) => (
            <div
              key={node.id}
              ref={el => { if (el) nodesRef.current[index] = el }}
              data-node-id={node.id}
              className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
              style={{ 
                left: `${node.position.x}%`, 
                top: `${node.position.y}%` 
              }}
              onClick={() => handleNodeClick(node)}
            >
              {/* Node Glow Effect */}
              <div 
                className="absolute inset-0 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: node.color }}
              ></div>
              
              {/* Main Node */}
              <div 
                className="relative rounded-full border-2 flex flex-col items-center justify-center bg-gray-800 group-hover:scale-110 transition-transform duration-300"
                style={{ 
                  borderColor: node.color, 
                  boxShadow: `0 0 20px ${node.color}40`,
                  width: node.id === 'certificates' ? '9.2rem' : '9rem',
                  height: node.id === 'certificates' ? '9.2rem' : '9rem'
                }}
              >
                <div className={`mb-2 ${node.id === 'certificates' ? 'text-4xl' : 'text-3xl'}`}>{node.icon}</div>
                <div 
                  className={`font-mono font-bold text-center px-2 ${
                    node.id === 'certificates' ? 'text-base' : 'text-sm'
                  }`}
                  style={{ color: node.color }}
                >
                  {node.label.split('(')[0]}
                </div>
              </div>

              {/* Tooltip with Smart Positioning */}
              <div className={`absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 border border-green-400/30 rounded-lg p-3 min-w-48 text-center z-10 ${
                // Smart positioning based on node location
                node.position.y > 60 
                  ? 'bottom-44 left-1/2 transform -translate-x-1/2' // Bottom circles: show tooltip above
                  : node.position.y < 40
                  ? 'top-44 left-1/2 transform -translate-x-1/2' // Top circles: show tooltip below
                  : node.position.x > 70
                  ? 'top-1/2 right-44 transform -translate-y-1/2' // Right circles: show tooltip to the left
                  : node.position.x < 30
                  ? 'top-1/2 left-44 transform -translate-y-1/2' // Left circles: show tooltip to the right
                  : 'top-44 left-1/2 transform -translate-x-1/2' // Center circles: show below
              }`}>
                <div className="text-green-400 font-mono text-sm font-bold mb-1">
                  {node.label}
                </div>
                <div className="text-gray-300 text-xs mb-2">
                  {node.description}
                </div>
                <div className="text-gray-500 font-mono text-xs bg-gray-800 rounded px-2 py-1">
                  {node.codeSnippet}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-900 border-t border-green-400/30 p-4">
          <div className="flex justify-between items-center">
            <div className="text-green-400 font-mono text-sm">
              <span className="text-gray-500">$</span> Choose your path to explore my journey...
              {selectedNode && (
                <span className="ml-2 text-yellow-400">
                  Navigating to {selectedNode}...
                </span>
              )}
            </div>
            
            {/* Back to Hero Button */}
            <button
              onClick={handleClose}
              className="flex items-center space-x-2 bg-green-500/20 hover:bg-green-500/30 border border-green-400/50 text-green-400 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-mono text-sm">Back to Hero</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}