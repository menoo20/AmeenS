"use client";
import React, { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import { useRouter } from 'next/navigation';

interface TeachingExperience {
  id: number;
  workplace: string;
  position: string;
  location: string;
  dateFrom: string;
  dateTo: string;
  images: [string, string, string];
  responsibilities: string[];
  achievements: string[];
  description: string;
  color: string; // For theming each experience
}

// Sample data - will be replaced with real data
const TEACHING_EXPERIENCES: TeachingExperience[] = [
  {
    id: 1,
    workplace: "International School of Excellence",
    position: "Senior English Teacher",
    location: "Cairo, Egypt",
    dateFrom: "September 2020",
    dateTo: "Present",
    images: [
      "/assets/photos/work/withsuitatwork.webp",
      "/assets/photos/work/apicwithmystudents.webp",
      "/assets/photos/work/Awardedbymyschool.webp"
    ],
    responsibilities: [
      "Teaching Advanced English Literature to Grade 11-12 students",
      "Developing innovative curriculum for creative writing workshops",
      "Mentoring junior teachers and student teachers"
    ],
    achievements: [
      "Increased student pass rates by 25% in Cambridge examinations",
      "Established the school's first Creative Writing Club",
      "Received 'Teacher of the Year' award 2023"
    ],
    description: "My current role has been the pinnacle of my teaching career, where I've been able to combine my passion for literature with innovative teaching methodologies.",
    color: "from-blue-600 to-purple-600"
  },
  {
    id: 2,
    workplace: "Al-Nour Academy",
    position: "English Language Instructor",
    location: "Alexandria, Egypt",
    dateFrom: "January 2018",
    dateTo: "August 2020",
    images: [
      "/assets/photos/work/withmystudents3.webp",
      "/assets/photos/work/atwork8.webp",
      "/assets/photos/work/focusmode.webp"
    ],
    responsibilities: [
      "Teaching ESL to international students",
      "Coordinating language exchange programs",
      "Preparing students for IELTS and TOEFL examinations"
    ],
    achievements: [
      "Developed a comprehensive ESL curriculum",
      "Achieved 95% student satisfaction rating",
      "Organized successful international language fair"
    ],
    description: "This position allowed me to work with diverse international students, enriching my understanding of cross-cultural communication in education.",
    color: "from-green-600 to-teal-600"
  },
  {
    id: 3,
    workplace: "Future Leaders High School",
    position: "English Teacher & IT Coordinator",
    location: "Giza, Egypt",
    dateFrom: "September 2015",
    dateTo: "December 2017",
    images: [
      "/assets/photos/work/atmyoffice.webp",
      "/assets/photos/work/picwiththestaff.webp",
      "/assets/photos/work/atwork4.webp"
    ],
    responsibilities: [
      "Teaching English to grades 9-12",
      "Managing school's IT infrastructure",
      "Training staff on educational technology"
    ],
    achievements: [
      "Integrated technology into English curriculum",
      "Reduced IT-related issues by 40%",
      "Led digital literacy workshops for teachers"
    ],
    description: "Here I discovered my passion for educational technology, combining my teaching skills with technical expertise to create engaging digital learning experiences.",
    color: "from-orange-600 to-red-600"
  }
];

const TeachingExperiencePage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine which section is currently in view
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight / 2;
      
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/assets/photos/work/atwork3.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-in">
            Teaching Journey
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in-delay">
            Explore my professional teaching experiences across different institutions, 
            where passion meets purpose in education.
          </p>
          <div className="animate-bounce">
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Teaching Experience Sections */}
      {TEACHING_EXPERIENCES.map((experience, index) => (
        <div
          key={experience.id}
          ref={(el) => { sectionRefs.current[index] = el; }}
          className="min-h-screen flex items-center relative overflow-hidden"
        >
          {/* Background with parallax effect */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-90`}
            style={{
              transform: `translateY(${(scrollY - (index + 1) * window.innerHeight) * 0.3}px)`
            }}
          />
          
          {/* Background image */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url(${experience.images[0]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateY(${(scrollY - (index + 1) * window.innerHeight) * 0.5}px)`
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className={`text-white ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="mb-4">
                  <span className="text-sm font-medium opacity-80">
                    {experience.dateFrom} - {experience.dateTo}
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-4">{experience.workplace}</h2>
                <h3 className="text-2xl font-semibold mb-4 opacity-90">{experience.position}</h3>
                <p className="text-lg mb-6 opacity-80">{experience.location}</p>
                
                <p className="text-lg leading-relaxed mb-8">{experience.description}</p>
                
                {/* Responsibilities */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span className="opacity-90">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Achievements */}
                <div>
                  <h4 className="text-xl font-semibold mb-4">Notable Achievements</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-yellow-400 mr-2">★</span>
                        <span className="opacity-90">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Image Gallery */}
              <div className={`grid grid-cols-2 gap-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="col-span-2">
                  <img
                    src={experience.images[0]}
                    alt={`${experience.workplace} - Main`}
                    className="w-full h-64 object-cover rounded-lg shadow-xl"
                  />
                </div>
                <img
                  src={experience.images[1]}
                  alt={`${experience.workplace} - Secondary`}
                  className="w-full h-32 object-cover rounded-lg shadow-xl"
                />
                <img
                  src={experience.images[2]}
                  alt={`${experience.workplace} - Tertiary`}
                  className="w-full h-32 object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Progress Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-4">
          {TEACHING_EXPERIENCES.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 cursor-pointer ${
                currentSection === index ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/50'
              }`}
              onClick={() => {
                const section = sectionRefs.current[index];
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Back to starfield button */}
      <div className="fixed bottom-8 left-8 z-50">
        <button
          onClick={() => router.push('/teaching/starfield')}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Constellation</span>
        </button>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.5s forwards;
        }
      `}</style>
    </div>
  );
};

export default TeachingExperiencePage;