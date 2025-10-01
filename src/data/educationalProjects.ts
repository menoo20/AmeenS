// Educational Projects Data Structure - Simplified for Card Display

export interface EducationalProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  summary: string; // Brief summary for card display
  
  // Categorization
  category: 'platform' | 'website' | 'system' | 'content' | 'tool' | 'analytics';
  tags: string[];
  
  // Timeline
  startDate: string;
  endDate?: string;
  status: 'completed' | 'ongoing' | 'live';
  
  // Visual Identity
  cardColor: string; // Tailwind gradient classes
  icon: string; // Emoji
  images: string[]; // Multiple images for slideshow
  
  // External Links
  links: {
    demo?: string; // Live demo URL
    github?: string; // Source code
    website?: string; // Official website
    documentation?: string; // Docs
    video?: string; // Demo video
  };
  
  // Technologies Used
  technologies: string[];
  
  // Key features
  features: string[];
}

// Real Educational Projects Data
export const EDUCATIONAL_PROJECTS: EducationalProject[] = [
  {
    id: "student-management-system",
    title: "Student Management System",
    subtitle: "Comprehensive Academic Platform",
    description: "A React-based web application designed to manage student enrollment, track exam results, handle group scheduling, and provide performance analytics for vocational training institutes. Features include student registration, exam management, grade tracking with percentage calculations, syllabus management, and real-time reporting with search functionality.",
    summary: "Vocational training management platform with student enrollment, exam result tracking, group management, and performance analytics dashboards.",
    category: "platform",
    tags: ["React App", "JSON Database", "Dashboard", "Analytics", "Vocational Training"],
    startDate: "2024",
    status: "live",
    cardColor: "from-blue-600 to-purple-600",
    icon: "🎓",
    images: [
      "/assets/photos/Thumbnails/studentLMS.png",
      "/assets/photos/Thumbnails/studentLMS2.png",
      "/assets/photos/Thumbnails/studentLMS3.png"
    ],
    links: {
      github: "https://github.com/menoo20/studentLMS",
      website: "https://menoo20.github.io/studentLMS"
    },
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "JSON Database", "GitHub Pages", "Responsive Design"],
    features: [
      "Student enrollment and profile management across multiple groups",
      "Group-based scheduling and resource management", 
      "Exam result tracking with percentage-based grading",
      "Interactive dashboard with real-time statistics",
      "Advanced search functionality by student name",
      "Mobile-responsive interface with optimized layouts",
      "Syllabus management with group-specific content",
      "Automated duplicate detection and cleanup",
      "Data backup and integrity management",
      "Multi-group exam assignment and filtering"
    ]
  },
  {
    id: "jolly-phonics-content-platform",
    title: "Kids Activities Online - Jolly Phonics Platform",
    subtitle: "Comprehensive Digital Phonics Curriculum & Content Development",
    description: "As the lead content developer for Kids Activities Online, I designed and created a comprehensive digital phonics learning platform featuring the complete Jolly Phonics methodology. This educational platform includes interactive curriculum covering all 42 graphemes, systematic phase-based learning (Phases 1-6), multimedia content creation with stories, games, videos, and extensive worksheet collections. The platform serves as a complete educational resource for teachers and parents worldwide.",
    summary: "Content developer for comprehensive Jolly Phonics digital curriculum platform featuring 42 graphemes, interactive lessons, multimedia content, and educational resources.",
    category: "content",
    tags: ["Content Development", "Jolly Phonics Curriculum", "Educational Platform", "Digital Learning", "Phonics Methodology", "Interactive Content"],
    startDate: "2021",
    endDate: "2024",
    status: "live",
    cardColor: "from-emerald-500 to-blue-600",
    icon: "📚",
    images: [
      "/assets/photos/Thumbnails/kidsactivities.jpg",
      "/assets/photos/Thumbnails/kidsactivities2.png",
      "/assets/photos/Thumbnails/kidsactivities3.png"
    ],
    links: {
      website: "https://www.kidsactivities.online/jolly-phonics/",
      demo: "https://www.kidsactivities.online/how-to-teach-jolly-phonics-step-by-step/",
      documentation: "https://www.kidsactivities.online/jolly-phonics/"
    },
    technologies: ["WordPress", "Educational Content Design", "Multimedia Production", "Interactive Learning Design", "PDF Creation", "Video Production", "Audio Recording"],
    features: [
      "Complete 42 graphemes curriculum development with systematic progression",
      "Phase-based learning structure (Phases 1-6) with clear learning objectives",
      "Interactive story-based learning with each letter sound contextualized",
      "Comprehensive worksheet collections for tracing, writing, and assessment",
      "Multimedia content including educational videos and audio pronunciations",
      "Step-by-step teaching methodology guides for educators and parents",
      "Advanced phonics concepts: split digraphs, alternative vowels, and consonant patterns",
      "Free educational resources with structured learning pathways",
      "Mobile-responsive educational content accessible on all devices",
      "Evidence-based phonics instruction following Jolly Phonics methodology",
      "Teacher training materials and implementation guides",
      "Assessment tools and progress tracking resources"
    ]
  },
  {
    id: "jolly-phonics-hub",
    title: "Jolly Phonics Learning Hub",
    subtitle: "Interactive Web-Based Phonics Learning Platform",
    description: "A comprehensive web-based phonics learning platform specifically designed around the Jolly Phonics methodology. Features interactive sound teaching, listening tests, and a personal pronunciation dictionary with UK and US pronunciations. Includes systematic phonics groups (1-7) plus advanced concepts like split digraphs, alternative vowels, and consonants.",
    summary: "Interactive Jolly Phonics learning platform with sound teaching, listening tests, and pronunciation dictionary supporting UK/US accents.",
    category: "website",
    tags: ["Jolly Phonics", "Language Learning", "Phonics Education", "Audio Learning", "Dictionary"],
    startDate: "2024",
    status: "live",
    cardColor: "from-blue-500 to-purple-600",
    icon: "🎵",
    images: [
      "/assets/photos/Thumbnails/Jollyphonics.png",
      "/assets/photos/Thumbnails/Jollyphonics2.png",
      "/assets/photos/Thumbnails/Jollyphonics3.png"
    ],
    links: {
      demo: "https://menoo20.github.io/JollyPhonicsHub/",
      github: "https://github.com/menoo20/JollyPhonicsHub",
      website: "https://menoo20.github.io/JollyPhonicsHub/"
    },
    technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "Web Audio API", "Python", "Flask", "JSON"],
    features: [
      "Jolly Phonics Sound Teacher with 7 systematic groups",
      "Interactive listening tests with gap-fill exercises", 
      "Personal pronunciation dictionary with search functionality",
      "UK and US pronunciation audio support",
      "Advanced phonics concepts (split digraphs, alternative sounds)",
      "Audio file management and download integration",
      "Progress tracking and mistake review",
      "Responsive design for mobile and desktop",
      "Local storage for personal word collections",
      "Offline-capable audio playback"
    ]
  },
  {
    id: "black-gold-attendance-analytics",
    title: "Black Gold Attendance Analytics System",
    subtitle: "Multi-Week Attendance Analysis Platform",
    description: "A comprehensive web-based attendance analytics system featuring multi-week data tracking, interactive dashboards, mobile-responsive design, and automated statistical analysis. Built for Black Gold Institute to provide real-time insights into student attendance patterns across multiple groups and time periods.",
    summary: "Professional attendance analytics platform with interactive dashboards, mobile responsiveness, and comprehensive reporting for educational institutions.",
    category: "analytics",
    tags: ["Attendance Analytics", "Data Visualization", "Dashboard", "Education", "Statistics"],
    startDate: "2025-08",
    endDate: "2025-09",
    status: "completed",
    cardColor: "from-blue-500 to-purple-600",
    icon: "📊",
    images: [
      "/assets/photos/Thumbnails/attendaceStatistics.png",
      "/assets/photos/Thumbnails/attendaceStatistics2.png",
      "/assets/photos/Thumbnails/attendaceStatistics3.png",
      "/assets/photos/Thumbnails/attendaceStatistics4.png"
    ],
    links: {
      demo: "https://menoo20.github.io/black-gold-attendance/",
      github: "https://github.com/menoo20/black-gold-attendance",
      documentation: "https://github.com/menoo20/black-gold-attendance/blob/main/README_COMPANY.md"
    },
    technologies: ["Python", "HTML5", "CSS3", "JavaScript", "Chart.js", "GitHub Pages", "Excel Integration", "Pandas"],
    features: [
      "Multi-week attendance tracking and comparison",
      "Interactive Chart.js visualizations",
      "Mobile-responsive dashboard design",
      "Automated Excel data processing",
      "Real-time attendance percentage calculations",
      "Group-by-group statistical analysis",
      "Professional GitHub Pages deployment",
      "Secure Google Drive integration for detailed reports",
      "Weekly trend analysis and reporting",
      "Black Gold corporate branding integration"
    ]
  },
  {
    id: "osha-30-construction-safety-quiz",
    title: "OSHA-30 Construction Safety Training Quiz",
    subtitle: "Interactive Web-Based Safety Training Platform",
    description: "A comprehensive interactive quiz application for OSHA 30-Hour Construction Safety Training featuring 28 individual module tests, paired chapter assessments, and a comprehensive 100-question final exam. Built with modern web technologies to provide an engaging learning experience for construction safety professionals.",
    summary: "Professional educational platform with interactive quizzes, progress tracking, and comprehensive OSHA construction safety training modules for workplace safety certification.",
    category: "platform",
    tags: ["Educational Technology", "Safety Training", "Interactive Quiz", "OSHA Certification", "Construction Safety", "E-Learning"],
    startDate: "2025-08",
    endDate: "2025-10",
    status: "completed",
    cardColor: "from-orange-500 to-red-600",
    icon: "🏗️",
    images: [
      "/assets/photos/Thumbnails/Osha.png",
      "/assets/photos/Thumbnails/Osha2.png",
      "/assets/photos/Thumbnails/Osha3.png"
    ],
    links: {
      demo: "https://osha-quiz-app.vercel.app/",
      github: "https://github.com/menoo20/osha-construction-quiz",
      documentation: "https://github.com/menoo20/osha-construction-quiz/blob/main/README.md"
    },
    technologies: [
      "HTML5", 
      "CSS3", 
      "JavaScript ES6+", 
      "Node.js", 
      "Vercel", 
      "JSON", 
      "Progressive Web App", 
      "Responsive Design",
      "Authentication API",
      "Local Storage",
      "Electron (Desktop App)"
    ],
    features: [
      "28 individual OSHA module quizzes with 4-12 questions each",
      "Paired chapter tests combining related topics (20-24 questions)",
      "Comprehensive 100-question final cumulative exam",
      "Multi-user authentication and progress tracking system",
      "Real-time scoring and instant feedback mechanisms",
      "Mobile-responsive design with touch-friendly interface",
      "Keyboard navigation support (arrow keys, escape)",
      "Progress persistence with localStorage and cloud sync",
      "Professional Black Gold Institute branding integration",
      "Offline-capable Progressive Web App functionality",
      "Desktop application version with Electron framework",
      "Advanced color contrast and accessibility improvements",
      "Interactive question types including multiple choice and matching",
      "Comprehensive question bank with OSHA standard references",
      "Session management and user profile system",
      "Deployment-ready with Vercel integration",
      "Development server with hot reload capabilities",
      "Modular architecture for easy content updates"
    ]
  }
  
];