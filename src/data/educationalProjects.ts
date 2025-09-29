// Educational Projects Data Structure - Simplified for Card Display

export interface EducationalProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  summary: string; // Brief summary for card display
  
  // Categorization
  category: 'platform' | 'website' | 'system' | 'content' | 'tool';
  tags: string[];
  
  // Timeline
  startDate: string;
  endDate?: string;
  status: 'completed' | 'ongoing' | 'live';
  
  // Visual Identity
  cardColor: string; // Tailwind gradient classes
  icon: string; // Emoji
  image: string; // Card background image
  
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
    description: "A full-stack web application designed to manage student enrollment, track academic progress, handle course scheduling, and provide analytics for educational institutions. Features include student portals, instructor dashboards, grade management, and real-time reporting.",
    summary: "Full-stack student management platform with enrollment tracking, grade management, and analytics dashboards for educational institutions.",
    category: "platform",
    tags: ["Web App", "Database", "Dashboard", "Analytics"],
    startDate: "2023",
    status: "live",
    cardColor: "from-blue-600 to-purple-600",
    icon: "🎓",
    image: "/assets/photos/work/atwork6.webp",
    links: {
      demo: "https://menoo20.github.io/studentLMS/resources",
      github: "https://github.com/menoo20/studentLMS",
      website: "https://menoo20.github.io/studentLMS"
    },
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Local Storage", "Responsive Design"],
    features: [
      "Student enrollment and profile management",
      "Course scheduling and resource management",
      "Grade tracking and progress analytics",
      "Interactive dashboard for administrators",
      "Real-time data visualization",
      "Mobile-responsive interface"
    ]
  },
  {
    id: "phonics-learning-website",
    title: "Interactive Phonics Learning Hub",
    subtitle: "English Pronunciation Practice Platform",
    description: "An interactive web platform designed to help students practice English phonics through visual and audio exercises. Features pronunciation comparisons between UK and US accents, interactive voice recognition, and progress tracking for systematic phonics learning.",
    summary: "Interactive web platform for English phonics practice with UK/US pronunciation comparison and voice recognition technology.",
    category: "website",
    tags: ["Phonics", "Language Learning", "Interactive", "Audio"],
    startDate: "2024",
    status: "live",
    cardColor: "from-green-500 to-teal-600",
    icon: "🗣️",
    image: "/assets/photos/work/atwork10.webp",
    links: {
      demo: "https://menoo20.github.io/JollyPhonicsHub/",
      github: "https://github.com/menoo20/JollyPhonicsHub",
      website: "https://menoo20.github.io/JollyPhonicsHub/"
    },
    technologies: ["HTML", "CSS", "JavaScript", "Web Audio API", "Speech Recognition", "Bootstrap"],
    features: [
      "Interactive phonics exercises with audio feedback",
      "UK vs US pronunciation comparison tools",
      "Voice recognition for pronunciation practice",
      "Progress tracking and learning analytics",
      "Gamified learning experience",
      "Teacher resource section"
    ]
  },
  {
    id: "ilms-attendance-system",
    title: "ILMS Attendance & Learning Platform",
    subtitle: "Integrated Learning Management System",
    description: "A comprehensive learning management system with electronic attendance tracking, student progress monitoring, exam management, and performance analytics. Built for Black Gold Institute to streamline educational operations and enhance learning outcomes.",
    summary: "Comprehensive LMS with electronic attendance, progress tracking, and performance analytics for educational institutions.",
    category: "system",
    tags: ["LMS", "Attendance", "Analytics", "Education"],
    startDate: "2023",
    endDate: "2024",
    status: "completed",
    cardColor: "from-yellow-500 to-orange-600",
    icon: "📊",
    image: "/assets/photos/work/atwork11.webp",
    links: {
      documentation: "https://docs.google.com/document/d/1X2Y3Z4...",
      video: "https://youtu.be/attendance-demo"
    },
    technologies: ["PHP", "MySQL", "JavaScript", "Chart.js", "Bootstrap", "RESTful API"],
    features: [
      "Electronic attendance tracking system",
      "Student progress monitoring dashboard",
      "Automated exam scheduling and management",
      "Real-time performance analytics",
      "Multi-branch support and synchronization",
      "Weekly performance reporting"
    ]
  },
  {
    id: "teaching-portfolio-website",
    title: "Digital Teaching Portfolio",
    subtitle: "Modern Educational Showcase Platform",
    description: "A sophisticated Next.js website showcasing teaching experience, educational projects, and professional development. Features interactive 3D elements, responsive design, and dynamic content management for presenting educational achievements and methodologies.",
    summary: "Modern Next.js portfolio showcasing teaching experience with interactive elements and responsive design.",
    category: "website",
    tags: ["Portfolio", "Next.js", "3D", "Responsive"],
    startDate: "2024",
    status: "ongoing",
    cardColor: "from-purple-600 to-pink-600",
    icon: "💼",
    image: "/assets/photos/personal/coding.webp",
    links: {
      website: "https://abo-ameen-portfolio.vercel.app",
      github: "https://github.com/menoo20/abo-ameen-fullstack"
    },
    technologies: ["Next.js", "TypeScript", "Three.js", "Tailwind CSS", "GSAP", "Vercel"],
    features: [
      "Interactive 3D teaching experience showcase",
      "Responsive starfield navigation system",
      "Dynamic project galleries with animations",
      "Professional certificate vault display",
      "Contact integration with email services",
      "Performance-optimized image handling"
    ]
  },
  {
    id: "educational-content-creator",
    title: "EdTech Content Development Tools",
    subtitle: "Digital Learning Resources Platform",
    description: "A suite of tools for creating interactive educational content including lesson plan generators, quiz builders, and multimedia resource organizers. Designed to help educators transition from traditional to digital teaching methodologies efficiently.",
    summary: "Suite of digital tools for educators to create interactive content, quizzes, and multimedia learning resources.",
    category: "tool",
    tags: ["Content Creation", "EdTech", "Interactive", "Tools"],
    startDate: "2022",
    endDate: "2023",
    status: "completed",
    cardColor: "from-indigo-600 to-cyan-600",
    icon: "🛠️",
    image: "/assets/photos/work/atwork5.webp",
    links: {
      demo: "https://educational-tools-demo.com",
      documentation: "https://docs.educational-tools.com"
    },
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "PDF.js"],
    features: [
      "Interactive lesson plan builder",
      "Multimedia quiz and assessment creator",
      "Resource library management system",
      "Collaborative content sharing platform",
      "Analytics for content effectiveness",
      "Export to multiple formats (PDF, SCORM, HTML)"
    ]
  },
  {
    id: "virtual-classroom-platform",
    title: "Virtual Classroom Integration",
    subtitle: "Remote Learning Enhancement System",
    description: "A comprehensive virtual learning environment that bridges the gap between online and traditional classroom experiences. Features real-time collaboration, interactive whiteboards, breakout room management, and seamless integration with existing LMS platforms.",
    summary: "Virtual learning environment with real-time collaboration, interactive tools, and LMS integration for remote education.",
    category: "platform",
    tags: ["Virtual Learning", "Collaboration", "Remote", "Integration"],
    startDate: "2021",
    endDate: "2022",
    status: "completed",
    cardColor: "from-emerald-600 to-blue-600",
    icon: "🖥️",
    image: "/assets/photos/work/atwork7.webp",
    links: {
      video: "https://youtu.be/virtual-classroom-demo",
      documentation: "https://virtual-classroom-docs.com"
    },
    technologies: ["WebRTC", "Socket.io", "React", "Express", "MongoDB", "Canvas API"],
    features: [
      "Real-time video conferencing and screen sharing",
      "Interactive whiteboard with collaboration tools",
      "Breakout room management for group activities",
      "Attendance tracking and participation metrics",
      "Recording and playback capabilities",
      "Integration with popular LMS platforms"
    ]
  }
];