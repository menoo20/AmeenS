"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import { useRouter } from 'next/navigation';
import { getAssetPath } from '@/lib/utils';

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
  logo?: string; // Optional logo image path
  skills?: string[]; // Skills used in this role
  technologies?: string[]; // Technologies/tools used
}

// Error Boundary Component
class ExperienceErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Teaching Experience Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="mb-4">We're having trouble loading the teaching experiences.</p>
            <button 
              onClick={() => this.setState({ hasError: false })}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Sample data - will be replaced with real data
const TEACHING_EXPERIENCES: TeachingExperience[] = [
  {
    id: 1,
    workplace: "Black Gold Institute",
    position: "English Language Trainer & EdTech Specialist",
    location: "Dammam, Saudi Arabia",
    dateFrom: "July 2023",
    dateTo: "Present",
    images: [
      "/assets/photos/work/apicwithmystudents.webp",
      "/assets/photos/work/atwork6.webp",
      "/assets/photos/work/atwork10.jpg"
    ],
    responsibilities: [
      "Delivered English and IELTS training for engineers and professionals",
      "Designed and implemented a full electronic attendance system",
      "Created and managed an ILMS platform to track student progress and exams",
      "Developed and delivered a phonics website for teacher training and practice",
      "Provided weekly performance analysis reports to management"
    ],
    achievements: [
      "Increased attendance tracking efficiency by 30% with electronic systems",
      "Enhanced multi-branch curriculum implementation",
      "Improved learning outcomes through integration of EdTech solutions"
    ],
    description: "Currently leading English language training and EdTech initiatives, combining teaching with innovative technology solutions to improve efficiency and student outcomes.",
    color: "from-blue-600 to-purple-600",
    logo: "/assets/photos/logos/black-gold-sold-1.png",
    technologies: ["ILMS Platform", "Phonics Website", "Electronic Attendance", "Performance Analytics"]
  },
  {
    id: 2,
    workplace: "Preply.com",
    position: "Online ESL Tutor",
    location: "Remote",
    dateFrom: "January 2024",
    dateTo: "September 2025",
    images: [
      "/assets/photos/work/preply1.webp",
      "/assets/photos/work/preply2.webp",
      "/assets/photos/work/preply3.webp"
    ],
    responsibilities: [
      "Delivered personalized ESL lessons to international learners",
      "Adapted materials for online teaching environments",
      "Built strong digital communication and tutoring skills"
    ],
    achievements: [
      "Helped diverse learners achieve their English learning goals",
      "Developed strong virtual teaching presence",
      "Received positive reviews and high retention rates"
    ],
    description: "Provided flexible, student-centered English tutoring sessions to learners worldwide through Preply’s platform.",
    color: "from-purple-500 to-pink-600",
    logo: "/assets/photos/logos/preply.png",
    technologies: ["Preply Platform", "Microsoft Teams", "Zoom", "Google Meet", "Digital Whiteboards", "Screen Sharing Tools", "Online Learning Resources", "PDF Editors", "Video Conferencing", "Cloud Storage", "Interactive Learning Apps", "Scheduling Software"]
  },
  {
    id: 3,
    workplace: "Tarbya Namouthajiyah Schools",
    position: "English Second Language Teacher",
    location: "Riyadh, Saudi Arabia",
    dateFrom: "March 2021",
    dateTo: "December 2022",
    images: [
      "/assets/photos/work/Awardedbymyschool.webp",
      "/assets/photos/work/atwork11.webp",
      "/assets/photos/work/withmystudents3.jpg"
    ],
    responsibilities: [
      "Delivered English lessons to primary and preparatory school students",
      "Used communicative language teaching (CLT) methods tailored to learning styles",
      "Conducted assessments and adapted teaching strategies"
    ],
    achievements: [
      "Enhanced student participation and motivation",
      "Improved progress tracking with formative assessments",
      "Built a positive and engaging classroom environment"
    ],
    description: "Focused on delivering engaging English lessons while fostering a supportive environment for younger learners.",
    color: "from-yellow-500 to-orange-600",
    logo: "/assets/photos/logos/تربية.png",
    technologies: ["Interactive Whiteboards", "Language Learning Apps", "Assessment Software", "Educational Games"]
  },
  {
    id: 4,
    workplace: "Belarabyapps.com",
    position: "Web Content Developer & Team Lead",
    location: "Ismailia, Egypt",
    dateFrom: "February 2020",
    dateTo: "January 2021",
    images: [
      "/assets/photos/work/belaraby2.webp",
      "/assets/photos/work/broadcast2.webp",
      "/assets/photos/work/belaraby3.webp"
    ],
    responsibilities: [
      "Led a team of three in creating interactive content for children",
      "Developed a long-term content plan for consistent engagement",
      "Managed production of articles, stories, PowerPoint slides, and videos"
    ],
    achievements: [
      "Helped students achieve higher IELTS band scores",
      "Improved learners’ academic and professional communication",
      "Designed flexible lesson plans tailored to exam preparation and fluency development"
    ],
      description: "Worked as both developer and team leader, managing content pipelines and ensuring the quality and engagement of children's educational materials.",
      color: "from-cyan-500 to-blue-600",
      logo: "/assets/photos/logos/belarabyapps.webp",
      technologies: ["HTML/CSS", "JavaScript", "Content Management", "Video Production", "Adobe Creative Suite"]
  },
  {
    id: 5,
    workplace: "British Institute",
    position: "English Language Instructor",
    location: "Ismailia, Egypt",
    dateFrom: "2020",
    dateTo: "2021",
    images: [
      "/assets/photos/work/auc1.webp",
      "/assets/photos/work/NotCourses.webp",
      "/assets/photos/work/IMAG0405.webp"
    ],
    responsibilities: [
      "Taught IELTS Academic and General Training preparation courses",
      "Delivered TOEFL PBT preparation classes",
      "Conducted General English programs across different proficiency levels",
      "Led Conversational English sessions to enhance fluency and confidence"
    ],
    achievements: [
      "Helped students achieve higher IELTS band scores",
      "Improved learners' academic and professional communication",
      "Designed flexible lesson plans tailored to exam preparation and fluency development"
    ],
      description: "At the British Institute, I taught a range of English courses including IELTS, TOEFL, and General English, focusing on equipping learners with both academic and conversational language skills.",
      color: "from-cyan-500 to-blue-600",
      logo: "/assets/photos/logos/ELI.jpeg",
      technologies: ["Language Lab Equipment", "Audio-Visual Materials", "Online Testing Platforms", "Cambridge Assessment Tools", "Interactive Whiteboards", "Digital Learning Resources"]
  },
  {
    id: 6,
    workplace: "Jawatha Private School",
    position: "English Teacher",
    location: "Al-Ahsa, Saudi Arabia",
    dateFrom: "August 2016",
    dateTo: "June 2017",
    images: [
      "/assets/photos/work/jawatha2.webp",
      "/assets/photos/work/atwork10.jpg",
      "/assets/photos/work/atwork12.webp"
    ],
    responsibilities: [
      "Taught English to primary and preparatory students",
      "Developed lesson plans aligned with curriculum goals",
      "Encouraged student participation through interactive activities"
    ],
    achievements: [
      "Strengthened students’ foundational English skills",
      "Created engaging classroom activities to boost interest in English",
      "Received positive feedback from school administration for dedication and results"
    ],
    description: "My first teaching role in Saudi Arabia, where I gained valuable classroom management experience while helping students build a strong foundation in English.",
    color: "from-indigo-500 to-blue-600",
    logo: "/assets/photos/logos/Jawatha.png",
    technologies: ["Interactive Whiteboards", "Educational Software", "Audio-Visual Equipment", "Learning Games"]
  }
];

const TeachingExperiencePage: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const [imageLoading, setImageLoading] = useState<{[key: string]: boolean}>({});
  const router = useRouter();
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Image loading handler
  const handleImageLoad = (imageUrl: string) => {
    setImageLoading(prev => ({ ...prev, [imageUrl]: false }));
  };

  // Prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize image loading states
  useEffect(() => {
    if (!mounted) return;
    
    const loadingStates: {[key: string]: boolean} = {};
    TEACHING_EXPERIENCES.forEach(exp => {
      exp.images.forEach(img => {
        loadingStates[img] = true;
      });
    });
    setImageLoading(loadingStates);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    
    // Initialize window height
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight);
    }

    // Intersection Observer for smooth animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const index = parseInt(entry.target.getAttribute('data-section') || '0');
          if (entry.isIntersecting) {
            setVisibleSections(prev => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    // Observe all sections
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    let ticking = false;

    const handleScroll = () => {
      if (!ticking && typeof window !== 'undefined') {
        requestAnimationFrame(() => {
          // Determine which section is currently in view
          const currentWindowHeight = window.innerHeight;
          const scrollPosition = window.scrollY + currentWindowHeight / 2;
          
          sectionRefs.current.forEach((ref, index) => {
            if (ref) {
              const { offsetTop, offsetHeight } = ref;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setCurrentSection(index);
              }
            }
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowHeight(window.innerHeight);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleResize);
      handleScroll(); // Initialize on mount
    }
    
    return () => {
      observer.disconnect();
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Prevent hydration mismatch during SSR
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      </div>
    );
  }

  return (
    <ExperienceErrorBoundary>
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        

        
        {/* Hero Section */}
        <section 
          className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden"
          aria-label="Teaching Journey Introduction"
        >
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/assets/photos/work/atmyoffice.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
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
        </section>

        {/* Teaching Experience Sections */}
      {TEACHING_EXPERIENCES.map((experience, index) => (
        <React.Fragment key={experience.id}>
          <div
            ref={(el) => { sectionRefs.current[index] = el; }}
            data-section={index}
            className={`min-h-screen flex items-center relative overflow-hidden transition-all duration-1000 ${
              visibleSections.includes(index) 
                ? 'animate-fade-in' 
                : ''
            }`}
            role="article"
            aria-label={`${experience.workplace} experience`}
            tabIndex={0}
          >
            {/* Static gradient background */}
            <div 
              className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-90`}
            />
            
            {/* Static background image */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url(${getAssetPath(experience.images[0])})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Text Content */}
                <div className={`text-white space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="mb-4">
                    <span className="text-sm font-medium opacity-80">
                      {experience.dateFrom} - {experience.dateTo}
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
                    {experience.logo && (
                      <img
                        src={getAssetPath(experience.logo)}
                        alt={experience.workplace + ' logo'}
                        className="h-10 w-10 object-contain rounded bg-white p-1 shadow"
                      />
                    )}
                    {experience.workplace}
                  </h2>
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
                  <div className="mb-8">
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
                  
                  {/* Skills and Technologies */}
                  {(experience.skills || experience.technologies) && (
                    <div className="space-y-4">
                      {experience.skills && (
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Key Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-200 cursor-default"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {experience.technologies && (
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Technologies & Tools</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm font-medium border border-blue-400/30 hover:bg-blue-500/30 transition-all duration-200 cursor-default"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Image Gallery */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="sm:col-span-2 relative group">
                    {/* Loading skeleton */}
                    {imageLoading[experience.images[0]] && (
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg animate-pulse" />
                    )}
                    
                    <Image
                      src={getAssetPath(experience.images[0])}
                      alt={`${experience.workplace} - Main`}
                      width={800}
                      height={400}
                      className={`w-full h-64 object-cover rounded-lg shadow-xl transition-all duration-300 ${
                        experience.id === 2 ? 'group-hover:shadow-2xl' : 'group-hover:shadow-2xl group-hover:scale-[1.02]'
                      } ${
                        experience.id === 2 || experience.id === 6 ? 'object-top' : ''
                      } ${imageLoading[experience.images[0]] ? 'opacity-0' : 'opacity-100'}`}
                      onLoad={() => handleImageLoad(experience.images[0])}
                      priority={true}
                      loading='eager'
                    />
                    {/* YouTube play button overlay for Preply (id 2) */}
                    {experience.id === 2 && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg cursor-pointer"
                        onClick={() => window.open('https://youtu.be/vYnEsEPVUH4?si=uZHME2N8E501TgaC', '_blank')}
                      >
                        <div className="bg-red-600 rounded-full p-3 shadow-2xl">
                          <svg className="w-8 h-8 text-white ml-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        {/* YouTube indicator */}
                        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          ▶ Watch on YouTube
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Only show additional images if NOT Jawatha (id: 6) */}
                  {experience.id !== 6 && (
                    <>
                      <div className="relative group">
                        {imageLoading[experience.images[1]] && (
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg animate-pulse" />
                        )}
                        <Image
                          src={getAssetPath(experience.images[1])}
                          alt={`${experience.workplace} - Secondary`}
                          width={400}
                          height={200}
                          className={`w-full h-32 object-cover rounded-lg shadow-xl transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 ${
                            experience.id === 4 || experience.id === 5 ? 'object-center' : 'object-bottom'
                          } ${imageLoading[experience.images[1]] ? 'opacity-0' : 'opacity-100'}`}
                          onLoad={() => handleImageLoad(experience.images[1])}
                          loading="eager"
                        />
                      </div>
                      <div className="relative group">
                        {imageLoading[experience.images[2]] && (
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg animate-pulse" />
                        )}
                        <Image
                          src={getAssetPath(experience.images[2])}
                          alt={`${experience.workplace} - Tertiary`}
                          width={400}
                          height={200}
                          className={`w-full h-32 object-cover rounded-lg shadow-xl transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 ${
                            experience.id === 1 || experience.id === 3 ? 'object-top' : experience.id === 4 || experience.id === 5 ? 'object-center' : 'object-bottom'
                          } ${imageLoading[experience.images[2]] ? 'opacity-0' : 'opacity-100'}`}
                          onLoad={() => handleImageLoad(experience.images[2])}
                          loading="eager"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Career Transition Section - appears after Belarabyapps (id 4) */}
          {experience.id === 4 && (
            <div className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
              {/* Animated circuit board background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border border-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-20 h-20 border border-blue-400 rounded-lg animate-pulse delay-1000"></div>
                <div className="absolute bottom-32 left-1/4 w-24 h-24 border border-purple-400 rounded-full animate-pulse delay-2000"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 border border-cyan-400 rounded-lg animate-pulse delay-500"></div>
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M100,200 Q300,100 500,300 T900,200"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    className="animate-pulse"
                  />
                  <path
                    d="M200,400 Q400,300 600,500 T1000,400"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                    className="animate-pulse delay-1000"
                  />
                </svg>
              </div>

              {/* Content - Centered layout for stop station feel */}
              <div className="relative z-10 container mx-auto px-4 py-16">
                <div className="text-center text-white max-w-4xl mx-auto">
                  {/* Career Pivot Header */}
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-400/20 to-blue-500/20 border border-green-400/30 rounded-full px-6 py-3 mb-6">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-300 font-semibold tracking-wide uppercase text-sm">Career Transition</span>
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm font-medium opacity-80">
                      2017 - 2020
                    </span>
                  </div>
                  
                  <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
                      The Programming Journey
                    </span>
                  </h2>
                  
                  <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-gray-900 font-bold text-sm">!</span>
                    </div>
                    Bridging Education & Technology
                  </h3>
                  
                  <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                    Between 2017-2020, I temporarily left teaching to dive deep into programming and technology. 
                    This wasn't a career change—it was an <span className="text-green-400 font-semibold">educational evolution</span> 
                    that empowered me to design more sophisticated educational tools and elevate my teaching with technology integration.
                  </p>

                  {/* Developer Image - Centered */}
                  <div className="relative group max-w-2xl mx-auto mb-8">
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 border border-gray-700/50 group-hover:border-green-400/30 transition-all duration-500">
                      <img
                        src={getAssetPath("/assets/photos/personal/coding.webp")}
                        alt="Programming journey - Developer workspace"
                        className="w-full h-80 object-cover rounded-xl shadow-2xl"
                      />
                      <div className="absolute top-6 right-6 bg-green-400/90 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                        💻 Developer Mode
                      </div>
                    </div>
                  </div>
                  
                  {/* Key Achievements - Centered */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4">Educational Impact</h4>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                      <div className="text-center">
                        <span className="text-green-400 text-2xl block mb-2">💻</span>
                        <span className="text-sm">Mastered modern web development technologies</span>
                      </div>
                      <div className="text-center">
                        <span className="text-blue-400 text-2xl block mb-2">🔗</span>
                        <span className="text-sm">Designed EdTech tools that bridge pedagogy and code</span>
                      </div>
                      <div className="text-center">
                        <span className="text-purple-400 text-2xl block mb-2">📚</span>
                        <span className="text-sm">Enhanced teaching methodology with tech integration</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Skills acquired - Centered */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4">Technologies Mastered</h4>
                    <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
                      {['JavaScript', 'React', 'Python', 'EdTech Tools', 'Web Development', 'Database Design'].map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-800 border border-gray-600 text-gray-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Call to Action - Centered */}
                  <div className="text-center">
                    <button 
                      onClick={() => {
                        // Navigate to developer journey
                        const heroSection = document.querySelector('section')
                        if (heroSection) {
                          heroSection.scrollIntoView({ behavior: 'smooth' })
                          // Trigger developer journey modal after scroll
                          setTimeout(() => {
                            alert('🚀 Opening Developer Journey... (This will connect to the Hero Developer Map)')
                          }, 1000)
                        }
                      }}
                      className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
                    >
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <span className="text-xl">💻</span>
                      </div>
                      <span>Explore My Developer Journey</span>
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                    </button>
                    
                    <p className="text-gray-400 text-sm mt-4 max-w-md mx-auto">
                      Discover how my programming skills enhanced my teaching methodology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
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

      {/* Scroll to Top Button */}
      <ScrollToTop />

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.5); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.5s forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        /* Performance optimizations */
        .bg-gradient-to-br {
          backface-visibility: hidden;
          transform: translateZ(0);
          will-change: auto;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Prevent layout shifts */
        .min-h-screen {
          contain: layout style paint;
        }
        
        /* Mobile touch improvements */
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .grid {
            gap: 1rem;
          }
          
          .text-4xl {
            font-size: 2.5rem;
          }
          
          .text-6xl {
            font-size: 3.5rem;
          }
        }
        
        /* Improved focus styles for accessibility */
        button:focus,
        [tabindex]:focus {
          outline: 2px solid #60a5fa;
          outline-offset: 2px;
        }
        
        /* Loading skeleton animation */
        @keyframes skeleton {
          0% { background-position: -200px 0; }
          100% { background-position: calc(200px + 100%) 0; }
        }
        
        .animate-pulse {
          background: linear-gradient(90deg, #374151 25%, #4b5563 50%, #374151 75%);
          background-size: 200px 100%;
          animation: skeleton 2s infinite;
        }
      `}</style>
    </div>
    </ExperienceErrorBoundary>
  );
};

export default TeachingExperiencePage;