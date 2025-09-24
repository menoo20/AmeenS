'use client'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import * as THREE from 'three'

interface StarNode {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
  position: { x: number; y: number; z: number }
  color: string
  size: number
  category: string
}

interface EducationStarfieldProps {
  isVisible: boolean
  onClose: () => void
  onNavigate: (nodeId: string) => void
}

export default function EducationStarfield({ isVisible, onClose, onNavigate }: EducationStarfieldProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const animationRef = useRef<number | null>(null)
  const [selectedStar, setSelectedStar] = useState<string | null>(null)
  const [showStarDetails, setShowStarDetails] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [starLabels, setStarLabels] = useState<{ [key: string]: { x: number; y: number } }>({})
  const starRefs = useRef<{ [key: string]: THREE.Group }>({})
  const originalStarPositions = useRef<{ [key: string]: THREE.Vector3 }>({})
  const constellationLines = useRef<Array<{ startId: string; endId: string; line: THREE.Line }>>([])

  // Configurable star constellation for educational journey
  const starNodes: StarNode[] = [
    {
      id: 'educational-background',
      title: 'Educational Background',
      subtitle: 'Academic Foundation',
      description: 'My formal education journey including degrees, universities, and academic achievements that built the foundation of my expertise.',
      icon: '🎓',
      position: { x: -3, y: 2, z: -2 },
      color: '#3b82f6',
      size: 0.15,
      category: 'foundation'
    },
    {
      id: 'certificates-courses',
      title: 'Certificates & Courses',
      subtitle: 'Professional Development',
      description: 'Professional certifications, specialized courses, and continuous learning achievements that enhance my teaching capabilities.',
      icon: '📜',
      position: { x: 2, y: 3, z: -1 },
      color: '#f59e0b',
      size: 0.12,
      category: 'credentials'
    },
    {
      id: 'educational-projects',
      title: 'Educational Projects',
      subtitle: 'Designed Learning Experiences',
      description: 'Custom-designed educational projects, curricula, and learning experiences I\'ve created for various educational contexts.',
      icon: '🚀',
      position: { x: -1, y: -2, z: -3 },
      color: '#10b981',
      size: 0.13,
      category: 'projects'
    },
    {
      id: 'personal-details',
      title: 'Personal Details',
      subtitle: 'About Me',
      description: 'Personal background, interests, philosophy, and the human side behind my educational expertise.',
      icon: '👨‍🏫',
      position: { x: 3, y: -1, z: -2 },
      color: '#ef4444',
      size: 0.11,
      category: 'personal'
    },
    {
      id: 'teaching-experience',
      title: 'Teaching Experience',
      subtitle: 'Classroom Excellence',
      description: 'Years of hands-on teaching experience across different levels, institutions, and educational contexts.',
      icon: '🏫',
      position: { x: -2, y: 0, z: -1 },
      color: '#8b5cf6',
      size: 0.14,
      category: 'experience'
    },
    {
      id: 'esl-expertise',
      title: 'ESL Expertise',
      subtitle: 'Language Teaching Mastery',
      description: 'Specialized expertise in English as a Second Language instruction, methodologies, and cultural adaptation.',
      icon: '🌍',
      position: { x: 1, y: 1, z: -4 },
      color: '#06b6d4',
      size: 0.12,
      category: 'specialization'
    },
    {
      id: 'gamification-learning',
      title: 'Gamification & Learning',
      subtitle: 'Interactive Education',
      description: 'Innovative approaches to gamified learning, educational technology integration, and student engagement strategies.',
      icon: '🎮',
      position: { x: 0, y: -3, z: -1 },
      color: '#ec4899',
      size: 0.13,
      category: 'innovation'
    },
    {
      id: 'research-publications',
      title: 'Research & Publications',
      subtitle: 'Academic Contributions',
      description: 'Research work, academic publications, and contributions to the field of education and language learning.',
      icon: '📚',
      position: { x: -4, y: -1, z: -3 },
      color: '#f97316',
      size: 0.11,
      category: 'research'
    }
  ]

  useEffect(() => {
    if (!isVisible || !mountRef.current) return

    // Initialize Three.js scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a0a0a) // Deep space black
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(0, 0, 5)
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = false // No shadows needed for stars
    rendererRef.current = renderer

    mountRef.current.appendChild(renderer.domElement)

    // Create starfield background
    const createStarfield = () => {
      const starGeometry = new THREE.BufferGeometry()
      const starCount = 2000
      const positions = new Float32Array(starCount * 3)

      for (let i = 0; i < starCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 2000
        positions[i + 1] = (Math.random() - 0.5) * 2000
        positions[i + 2] = (Math.random() - 0.5) * 2000
      }

      starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      
      const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 2,
        transparent: true,
        opacity: 0.6
      })

      const stars = new THREE.Points(starGeometry, starMaterial)
      scene.add(stars)
      return stars
    }

    const starfield = createStarfield()

    // Create constellation stars (main navigation points)
    starNodes.forEach(star => {
      const starGroup = new THREE.Group()
      starGroup.position.set(star.position.x, star.position.y, star.position.z)

      // Main star
      const starGeometry = new THREE.SphereGeometry(star.size, 32, 32)
      const starMaterial = new THREE.MeshBasicMaterial({ 
        color: star.color,
        transparent: true,
        opacity: 0.9
      })
      const starMesh = new THREE.Mesh(starGeometry, starMaterial)
      starGroup.add(starMesh)

      // Glow effect
      const glowGeometry = new THREE.SphereGeometry(star.size * 1.5, 32, 32)
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: star.color,
        transparent: true,
        opacity: 0.3
      })
      const glow = new THREE.Mesh(glowGeometry, glowMaterial)
      starGroup.add(glow)

      // Pulsing ring
      const ringGeometry = new THREE.RingGeometry(star.size * 2, star.size * 2.5, 32)
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: star.color,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide
      })
      const ring = new THREE.Mesh(ringGeometry, ringMaterial)
      starGroup.add(ring)

      // Store original position and reference
      originalStarPositions.current[star.id] = starGroup.position.clone()
      starRefs.current[star.id] = starGroup
      scene.add(starGroup)
    })

    // Create constellation lines between related stars
    const createConstellationLines = () => {
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x4a5568,
        transparent: true,
        opacity: 0.3
      })

      // Connect related stars with lines
      const connections = [
        ['educational-background', 'certificates-courses'],
        ['certificates-courses', 'teaching-experience'],
        ['teaching-experience', 'esl-expertise'],
        ['esl-expertise', 'gamification-learning'],
        ['educational-projects', 'gamification-learning'],
        ['research-publications', 'educational-background'],
        ['personal-details', 'teaching-experience']
      ]

      connections.forEach(([startId, endId]) => {
        const startStar = starNodes.find(s => s.id === startId)
        const endStar = starNodes.find(s => s.id === endId)
        
        if (startStar && endStar) {
          const points = [
            new THREE.Vector3(startStar.position.x, startStar.position.y, startStar.position.z),
            new THREE.Vector3(endStar.position.x, endStar.position.y, endStar.position.z)
          ]
          
          const geometry = new THREE.BufferGeometry().setFromPoints(points)
          const line = new THREE.Line(geometry, lineMaterial)
          scene.add(line)
          
          // Store reference for updating
          constellationLines.current.push({ startId, endId, line })
        }
      })
    }

    // Function to update constellation line positions
    const updateConstellationLines = () => {
      constellationLines.current.forEach(({ startId, endId, line }) => {
        const startGroup = starRefs.current[startId]
        const endGroup = starRefs.current[endId]
        
        if (startGroup && endGroup) {
          const points = [
            startGroup.position,
            endGroup.position
          ]
          
          const geometry = new THREE.BufferGeometry().setFromPoints(points)
          line.geometry.dispose()
          line.geometry = geometry
        }
      })
    }

    createConstellationLines()

    // Function to update star label positions
    const updateStarLabelPositions = () => {
      const newLabels: { [key: string]: { x: number; y: number } } = {}
      
      Object.entries(starRefs.current).forEach(([starId, starGroup]) => {
        const vector = new THREE.Vector3()
        vector.setFromMatrixPosition(starGroup.matrixWorld)
        vector.project(camera)

        const x = (vector.x * 0.5 + 0.5) * window.innerWidth
        const y = (vector.y * -0.5 + 0.5) * window.innerHeight

        // Only show labels for stars that are in front of the camera
        if (vector.z < 1) {
          newLabels[starId] = { x, y }
        }
      })
      
      setStarLabels(newLabels)
    }

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate)
      
      if (!isHovering) {
        // Gentle rotation of the starfield
        starfield.rotation.y += 0.0005
        starfield.rotation.x += 0.0002

        // Animate constellation stars
        Object.values(starRefs.current).forEach((starGroup, index) => {
          const time = Date.now() * 0.001
          
          // Gentle floating motion
          starGroup.position.y += Math.sin(time + index) * 0.002
          
          // Pulsing glow
          const glow = starGroup.children[1] as THREE.Mesh
          const ring = starGroup.children[2] as THREE.Mesh
          if (glow && ring) {
            glow.scale.setScalar(1 + Math.sin(time * 2 + index) * 0.1)
            ring.scale.setScalar(1 + Math.sin(time * 1.5 + index) * 0.2)
            ring.rotation.z += 0.01
          }
        })

        // Update constellation lines to follow the stars
        updateConstellationLines()
      }

      // Update star label positions
      updateStarLabelPositions()

      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
    }
    window.addEventListener('resize', handleResize)

    // Mouse interaction
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      
      const intersects = raycaster.intersectObjects(
        Object.values(starRefs.current).map(group => group.children[0])
      )

      if (intersects.length > 0) {
        if (!isHovering) {
          setIsHovering(true)
          // Stop all animations when hovering
          Object.values(starRefs.current).forEach(starGroup => {
            gsap.killTweensOf(starGroup.position)
            gsap.killTweensOf(starGroup.rotation)
          })
        }

        // Highlight hovered star
        const hoveredStar = intersects[0].object.parent as THREE.Group
        gsap.to(hoveredStar.scale, {
          x: 1.5,
          y: 1.5,
          z: 1.5,
          duration: 0.3
        })

        // Dim other stars
        Object.values(starRefs.current).forEach(starGroup => {
          if (starGroup !== hoveredStar) {
            const starMesh = starGroup.children[0] as THREE.Mesh
            if (starMesh && starMesh.material) {
              gsap.to(starMesh.material, {
                opacity: 0.3,
                duration: 0.3
              })
            }
          }
        })
      } else if (isHovering) {
        setIsHovering(false)
        // Restore all stars
        Object.values(starRefs.current).forEach(starGroup => {
          gsap.to(starGroup.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.3
          })
          const starMesh = starGroup.children[0] as THREE.Mesh
          if (starMesh && starMesh.material) {
            gsap.to(starMesh.material, {
              opacity: 0.9,
              duration: 0.3
            })
          }
        })
      }
    }

    const handleClick = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      
      const intersects = raycaster.intersectObjects(
        Object.values(starRefs.current).map(group => group.children[0])
      )

      if (intersects.length > 0) {
        const clickedStar = intersects[0].object.parent as THREE.Group
        const starId = Object.keys(starRefs.current).find(
          id => starRefs.current[id] === clickedStar
        )
        
        if (starId) {
          setSelectedStar(starId)
          setShowStarDetails(true)
          
          // Pulse animation on click
          gsap.to(clickedStar.scale, {
            x: 2,
            y: 2,
            z: 2,
            duration: 0.2,
            yoyo: true,
            repeat: 1
          })
        }
      }
    }

    renderer.domElement.addEventListener('mousemove', handleMouseMove)
    renderer.domElement.addEventListener('click', handleClick)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.domElement.removeEventListener('mousemove', handleMouseMove)
      renderer.domElement.removeEventListener('click', handleClick)
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      
      scene.clear()
      renderer.dispose()
    }
  }, [isVisible, isHovering])

  // Handle ESC key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isVisible) {
        onClose()
      }
    }

    if (isVisible) {
      document.addEventListener('keydown', handleEscKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [isVisible, onClose])

  const selectedStarData = selectedStar ? starNodes.find(star => star.id === selectedStar) : null

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {/* Three.js Canvas */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* Star Labels Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {Object.entries(starLabels).map(([starId, position]) => {
          const star = starNodes.find(s => s.id === starId)
          if (!star) return null
          
          return (
            <div
              key={starId}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                left: position.x, // Centered horizontally on the star
                top: position.y - 30,  // More above the star
              }}
            >
              <div className="bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-medium border border-white/20">
                {star.title}
              </div>
            </div>
          )
        })}
      </div>
      
      {/* Header UI */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-2xl">✨</div>
            <div>
              <h1 className="text-2xl font-bold text-white">Educational Constellation</h1>
              <p className="text-white/70">Navigate through my academic and professional stars</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="bg-red-500/20 hover:bg-red-500/30 border border-red-400/30 text-red-300 hover:text-red-200 px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-lg rounded-lg p-4 text-white max-w-md">
        <h3 className="font-semibold mb-2">✨ Navigation Guide</h3>
        <ul className="text-sm space-y-1 text-white/80">
          <li>• Hover over stars to pause the cosmos and highlight them</li>
          <li>• Click on any star to explore detailed information</li>
          <li>• Each star represents a different aspect of my education</li>
          <li>• Constellation lines show related areas of expertise</li>
          <li>• Press ESC to return to the main page</li>
        </ul>
      </div>

      {/* Star Details Modal */}
      {showStarDetails && selectedStarData && (
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-20">
          <div className="bg-gray-900/90 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 max-w-2xl w-full mx-4 shadow-2xl">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{selectedStarData.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedStarData.title}</h2>
                  <p className="text-lg text-gray-300">{selectedStarData.subtitle}</p>
                  <div className="text-xs px-3 py-1 bg-gray-700/50 rounded-full text-gray-400 mt-2 inline-block">
                    {selectedStarData.category}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowStarDetails(false)}
                className="text-gray-400 hover:text-white transition-colors text-xl"
              >
                ✕
              </button>
            </div>
            
            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              {selectedStarData.description}
            </p>
            
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  onNavigate(selectedStarData.id)
                  setShowStarDetails(false)
                }}
                className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-300 hover:text-blue-200 px-6 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                🚀 Explore This Star
              </button>
              <button
                onClick={() => setShowStarDetails(false)}
                className="bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50 text-gray-300 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                Continue Stargazing
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Constellation Map */}
      <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-lg rounded-lg p-4 text-white max-w-xs">
        <h3 className="font-semibold mb-3 text-center">🌌 Constellation Map</h3>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {starNodes.map(star => (
            <div
              key={star.id}
              className="flex items-center space-x-2 p-2 rounded cursor-pointer hover:bg-white/10 transition-colors"
              onClick={() => {
                setSelectedStar(star.id)
                setShowStarDetails(true)
              }}
            >
              <div style={{ color: star.color }} className="text-sm">●</div>
              <span className="text-white/80 truncate">{star.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}