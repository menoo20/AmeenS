'use client'

import React, { useState, useEffect } from 'react'

interface Certificate {
  filename: string
  path: string
  category: 'programming' | 'teaching'
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [certificates, setCertificates] = useState<Certificate[]>([])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we'll use placeholder data
    const mockCertificates: Certificate[] = [
      { filename: 'CS50x.png', path: '/assets/certificates/programming/CS50x.png', category: 'programming' },
      { filename: '1.png', path: '/assets/certificates/programming/1.png', category: 'programming' },
      { filename: '2.png', path: '/assets/certificates/programming/2.png', category: 'programming' },
      { filename: 'ba cert.jpg', path: '/assets/certificates/teaching/ba cert.jpg', category: 'teaching' },
      { filename: 'IELTS Academic Cetr.png', path: '/assets/certificates/teaching/IELTS Academic Cetr.png', category: 'teaching' },
    ]
    setCertificates(mockCertificates)
  }, [])

  const filteredCertificates = selectedCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory)

  const categories = [
    { id: 'all', label: 'All Certificates', count: certificates.length },
    { id: 'programming', label: 'Programming', count: certificates.filter(c => c.category === 'programming').length },
    { id: 'teaching', label: 'Teaching', count: certificates.filter(c => c.category === 'teaching').length },
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates & Achievements</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my learning journey and professional achievements
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="certificate-grid">
          {filteredCertificates.map((cert, index) => (
            <div 
              key={index} 
              className="certificate-card cursor-pointer"
              onClick={() => setSelectedImage(cert.path)}
            >
              <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-900 text-sm mb-1">
                    {cert.filename.replace(/\.(png|jpg|jpeg)$/i, '')}
                  </h3>
                  <p className="text-xs text-gray-500 capitalize">{cert.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder for when no certificates */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No certificates found</h3>
            <p className="text-gray-500">Certificates will appear here once they are uploaded.</p>
          </div>
        )}

        {/* Modal for enlarged view */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="bg-white rounded-lg p-4">
                <p className="text-center text-gray-600">Certificate Preview</p>
                <p className="text-sm text-center text-gray-500 mt-2">
                  {selectedImage.split('/').pop()?.replace(/\.(png|jpg|jpeg)$/i, '')}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}