
"use client";
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { useRouter } from 'next/navigation';
import { getAssetPath } from '@/lib/utils';

const CERTIFICATES = [
  {
    src: '/assets/certificates/Teaching/ba-cert.jpg',
    title: 'Bachelor of Arts in English Language',
    date: '2013',
    issue: "Suez Canal University",
    description: 'I earned my Bachelor of Arts degree in English Language and Literature from Suez Canal University. This comprehensive program provided me with a deep understanding of English linguistics, literature, and language teaching methodologies.'
  },
  {
    src: '/assets/certificates/Teaching/PGDE.webp',
    title: 'Postgraduate Diploma in Education (PGDE)',
    date: '2014',
    issue: "Suez Canal University",
    description: 'I completed the Postgraduate Diploma in Education, specializing in English language teaching. This program equipped me with advanced pedagogical skills and modern teaching methodologies for effective classroom instruction.'
  },
  {
    src: '/assets/certificates/Teaching/TEFL-AUC.webp',
    title: 'Teaching English as a Foreign Language (TEFL)',
    date: '2017',
    issue: "American University in Cairo (AUC)",
    description: 'I obtained my TEFL certification from the American University in Cairo. This intensive program focused on practical teaching techniques, curriculum design, and classroom management for teaching English to non-native speakers.'
  },
  {
    src: '/assets/certificates/Teaching/TOEFL-PBT.webp',
    title: 'TOEFL PBT Certificate',
    date: '2018',
    issue: "Amideast",
    description: 'I achieved a high score on the TOEFL Paper-Based Test, demonstrating my proficiency in English language skills including reading, writing, listening, and structure. This certification validates my English language competency at an advanced level.'
  },
  {
    src: '/assets/certificates/Teaching/IELTS-Academic-Cetr.webp',
    title: 'IELTS Academic Certificate',
    date: '2025',
    issue: "British Council",
    description: 'I successfully completed the IELTS Academic test with a strong overall band score. This internationally recognized certification demonstrates my English language proficiency across all four skills: listening, reading, writing, and speaking.'
  },
  {
    src: '/assets/certificates/Teaching/Awarding-Cert.webp',
    title: 'Awarding Certificate',
    date: '2018',
    issue: "Tarbya Namouthajiyah Schools",
    description: 'I received this official recognition certificate from the Egyptian Ministry of Education for excellence in teaching and outstanding contribution to English language education.'
  },
  {
    src: '/assets/certificates/Teaching/Electronic-preparation.webp',
    title: 'Electronic Course Preparation',
    date: '2022',
    issue: "Classera - The Leading E-Learning Platform in MENA",
    description: 'I completed this professional development course focused on digital teaching tools and e-learning methodologies. The course covered effective online course design, digital assessment strategies, and technology integration in education.'
  },
  {
    src: '/assets/certificates/Teaching/Personal-Branding.webp',
    title: 'Personal Branding for Educators',
    date: '2025',
    issue: "Linkedin Learning",
    description: 'I completed this professional development course on personal branding and online presence for educators. The course covered building a professional identity, creating educational content, and leveraging digital platforms for teaching impact.'
  },
];

const SLIDE_INTERVAL = 4000;

const CertificatesPage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [zoomed, setZoomed] = useState<number | null>(null);
  const [magnified, setMagnified] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (zoomed !== null) return;
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % CERTIFICATES.length);
    }, SLIDE_INTERVAL);
    return () => clearTimeout(timer);
  }, [current, zoomed]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-700 to-indigo-900">
      {/* Top Navigation Menu */}
      <Navigation />

      <div className="relative z-10 flex flex-col items-center justify-center p-8 pt-16 md:pt-32">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white  md:mb-8 mt-24 sm:mt-0">Teaching Certificates & Qualifications</h1>
      <div className="relative w-full max-w-xl h-96 flex items-center justify-center group">

        {/* Certificate images */}
        {CERTIFICATES.map((cert, idx) => (
          <div
            key={cert.src}
            className={`absolute left-0 top-0 w-full h-full transition-all duration-1000 ${current === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}`}
            style={{ 
              cursor: current === idx ? 'pointer' : 'default', 
              pointerEvents: current === idx ? 'auto' : 'none'
            }}
            onClick={() => current === idx && setZoomed(idx)}
          >
            <img
              src={getAssetPath(cert.src)}
              alt={cert.title}
              className="w-full h-full object-contain rounded-xl transition-all duration-500 cursor-pointer"
              style={{ 
                filter: current === idx ? 'drop-shadow(0 10px 25px rgba(0,0,0,0.3))' : 'none'
              }}
            />
            
            {/* Interactive glow effect on active certificate */}
            {current === idx && (
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 animate-pulse pointer-events-none"></div>
            )}
          </div>
        ))}

        {/* Achievement unlock animation when switching */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full rounded-xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300"></div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 space-x-3">
        {CERTIFICATES.map((cert, idx) => (
          <div
            key={cert.src}
            className="relative group cursor-pointer"
            onClick={() => { setCurrent(idx); setZoomed(null); }}
            aria-label={`Go to ${cert.title}`}
          >
            {/* Main dot */}
            <div
              className={`
                relative w-4 h-4 rounded-full transition-all duration-500 transform
                ${current === idx 
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-400 scale-125 shadow-lg shadow-yellow-400/50' 
                  : 'bg-white/40 hover:bg-white/60 hover:scale-110'
                }
              `}
            >
              {/* Animated ring for active dot */}
              {current === idx && (
                <div className="absolute inset-0 rounded-full border-2 border-yellow-400 animate-ping opacity-75"></div>
              )}
              
              {/* Progress ring */}
              <div
                className={`
                  absolute inset-0 rounded-full border-2 transition-all duration-300
                  ${current === idx 
                    ? 'border-white/80' 
                    : 'border-transparent group-hover:border-white/50'
                  }
                `}
              ></div>
            </div>

            {/* Certificate preview tooltip on hover */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none">
              <div className="bg-black/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
                  {cert.title}
                </div>
                <div className="text-xs text-gray-300 mt-1">{cert.issue}</div>
                {/* Tooltip arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/90"></div>
              </div>
            </div>

            {/* Achievement-style glow effect */}
            {current === idx && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 opacity-20 animate-pulse scale-150"></div>
            )}
          </div>
        ))}
        
        {/* Progress bar underneath dots */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-4000 ease-linear"
            style={{ width: `${((current + 1) / CERTIFICATES.length) * 100}%` }}
          ></div>
        </div>
      </div>
      {zoomed !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 pt-20 sm:pt-24">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl relative mx-4 max-w-2xl w-full max-h-[90vh] overflow-hidden border border-gray-200/50">
            {/* Header with gradient accent */}
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 p-4 sm:p-6 relative sticky top-0 z-10">
              <button
                className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl font-bold z-10 bg-black/20 rounded-full w-8 h-8 flex items-center justify-center backdrop-blur-sm transition-all hover:bg-black/40"
                onClick={() => setZoomed(null)}
                aria-label="Close modal"
              >
                ×
              </button>
              <div className="text-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium opacity-90">PROFESSIONAL CERTIFICATION</span>
                </div>
                <h2 className="text-3xl font-bold leading-tight">{CERTIFICATES[zoomed].title}</h2>
              </div>
            </div>

            {/* Scrollable content area with hidden scrollbar */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)] scrollbar-hide">
              {/* Scroll indicator - fades in/out based on scroll position */}
              <div className="absolute right-4 top-32 bottom-4 w-1 bg-gradient-to-b from-transparent via-purple-200/50 to-transparent rounded-full pointer-events-none z-20 opacity-50"></div>
              
              {/* Certificate Image Section */}
              <div className="p-4 sm:p-6">
              <div 
                className="relative group cursor-zoom-in bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl"
                onClick={() => setMagnified(true)}
              >
                <img 
                  src={getAssetPath(CERTIFICATES[zoomed].src)} 
                  alt={CERTIFICATES[zoomed].title} 
                  className="w-full h-48 sm:h-64 object-contain p-2 sm:p-4 transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                {/* Click to zoom hint */}
                <div className="absolute bottom-2 right-2 bg-purple-600/90 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to zoom
                </div>
              </div>

              {/* Certificate Details */}
              <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                {/* Issuer and Date */}
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{CERTIFICATES[zoomed].issue}</p>
                      <p className="text-sm text-gray-600">Issued on {CERTIFICATES[zoomed].date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Verified
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5">
                  <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    What I Learned
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{CERTIFICATES[zoomed].description}</p>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Teaching Excellence</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Educational Leadership</span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      )}

      {/* Full-screen magnifier overlay */}
      {magnified && zoomed !== null && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-zoom-out p-8 sm:p-12 pt-16 sm:pt-20"
          onClick={() => setMagnified(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={getAssetPath(CERTIFICATES[zoomed].src)} 
              alt={CERTIFICATES[zoomed].title} 
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg animate-in zoom-in-95 duration-300" 
            />
            <button
              className="absolute top-8 right-8 group"
              onClick={(e) => {
                e.stopPropagation();
                setMagnified(false);
              }}
              aria-label="Close fullscreen view"
            >
              <div className="relative w-12 h-12 flex items-center justify-center">
                {/* Background circle with blur */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110"></div>
                
                {/* X icon */}
                <svg 
                  className="relative w-6 h-6 text-white transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2.5} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="fixed bottom-8 left-8 right-8 flex justify-between items-center pointer-events-none">
        {/* Back to Galaxy Button */}
        <button 
          onClick={() => router.push('/teaching/starfield')}
          className="bg-purple-600/90 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 pointer-events-auto backdrop-blur-sm border border-white/20"
        >
          ← Back to Starfield
        </button>

        {/* Next Section Button */}
        <button 
          onClick={() => router.push('/teaching/experience')}
          className="bg-blue-600/90 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 pointer-events-auto backdrop-blur-sm border border-white/20"
        >
          Experience →
        </button>
      </div>
      </div>
    </div>
  );
};

export default CertificatesPage;
