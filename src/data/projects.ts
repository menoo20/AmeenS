export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[]; // Array of images for slideshow
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
  category: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  // Most Recent Projects (2024-2025)
  {
    id: 'osha-quiz',
    title: 'OSHA-30 Construction Safety Quiz',
    description: 'Professional OSHA-30 training quiz platform with 28 module quizzes, paired chapter tests, and a 100-question final exam. Features multi-user authentication, progress tracking, and offline PWA capabilities.',
    thumbnail: '/assets/projects/Osha1.webp',
    images: [
      '/assets/projects/Osha1.webp',
      '/assets/projects/Osha2.webp',
      '/assets/projects/Osha3.webp',
      '/assets/projects/Osha4.webp',
      '/assets/projects/Osha5.webp'
    ],
    liveUrl: 'https://osha-six.vercel.app/',
    githubUrl: '',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Vercel', 'PWA'],
    category: 'Educational Platform',
    featured: true
  },
  {
    id: 'student-lms',
    title: 'Student Learning Management System',
    description: 'A comprehensive LMS platform with student enrollment, group-based scheduling, exam tracking, and interactive dashboards. Features advanced search, multi-group management, and mobile-responsive design.',
    thumbnail: '/assets/projects/StudentLMS1.webp',
    images: [
      '/assets/projects/StudentLMS1.webp',
      '/assets/projects/StudentLMS2.webp',
      '/assets/projects/StudentLMS3.webp',
      '/assets/projects/StudentLMS4.webp',
      '/assets/projects/StudentLMS5.webp',
      '/assets/projects/StudentLMS6.webp'
    ],
    liveUrl: 'https://menoo20.github.io/studentLMS',
    githubUrl: 'https://github.com/menoo20/studentLMS',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'JSON Database'],
    category: 'Educational Platform',
    featured: true
  },
  {
    id: 'cevehak',
    title: 'Cevehak Project',
    description: 'Multi-purpose web application with dynamic functionality. Built with modern web technologies and responsive design principles.',
    thumbnail: '/assets/projects/Cevehak1.webp',
    images: [
      '/assets/projects/Cevehak1.webp',
      '/assets/projects/Cevehak2.webp',
      '/assets/projects/Cevehak3.webp',
      '/assets/projects/Cevehak4.webp'
    ],
    liveUrl: 'https://menoo20.github.io/cevehak/',
    githubUrl: 'https://github.com/menoo20/cevehak',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Web Application',
    featured: false
  },
  {
    id: 'pronunciation-teacher',
    title: 'Jolly Phonics Learning Hub',
    description: 'Interactive phonics learning platform with Jolly Phonics methodology, sound teaching, listening tests, and personal pronunciation dictionary supporting UK/US accents. Features 7 systematic groups and advanced phonics concepts.',
    thumbnail: '/assets/projects/PronunciationTeacher1.webp',
    images: [
      '/assets/projects/PronunciationTeacher1.webp',
      '/assets/projects/PronunciationTeacher2.webp',
      '/assets/projects/PronunciationTeacher3.webp',
      '/assets/projects/PronunciationTeacher4.webp',
      '/assets/projects/PronunciationTeacher5.webp'
    ],
    liveUrl: 'https://menoo20.github.io/Pronunciation_dictionary/',
    githubUrl: 'https://github.com/menoo20/Pronunciation_dictionary',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web Audio API', 'Python', 'Flask'],
    category: 'Educational Platform',
    featured: true
  },
  {
    id: 'attendance-analytics',
    title: 'Black Gold Attendance Analytics',
    description: 'Multi-week attendance analytics system with interactive Chart.js visualizations, mobile-responsive dashboard, automated Excel processing, and comprehensive group-by-group statistical analysis.',
    thumbnail: '/assets/projects/AttendanceAnalysis1.webp',
    images: [
      '/assets/projects/AttendanceAnalysis1.webp',
      '/assets/projects/AttendanceAnalysis2.webp'
    ],
    liveUrl: 'https://menoo20.github.io/black-gold-attendance/',
    githubUrl: 'https://github.com/menoo20/black-gold-attendance',
    technologies: ['Python', 'HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'Pandas'],
    category: 'Web Application',
    featured: false
  },
  // Mid-Period Projects (2023-2024)
  {
    id: 'portfolio-artist',
    title: 'Artist Portfolio Website',
    description: 'Creative portfolio website designed for artists and creative professionals. Features gallery showcase, project presentations, and contact forms with elegant design.',
    thumbnail: '/assets/projects/Portfolio-Artist1.webp',
    images: [
      '/assets/projects/Portfolio-Artist1.webp',
      '/assets/projects/Portfolio-Artist2.webp'
    ],
    liveUrl: 'https://menoo20.github.io/Mostafa-Magdy/',
    githubUrl: 'https://github.com/menoo20/Mostafa-Magdy',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Gallery Design'],
    category: 'Portfolio',
    featured: false
  },
  {
    id: 'karate-coach',
    title: 'Karate Coach Website',
    description: 'Fitness and martial arts coaching website with class schedules, instructor profiles, and registration system. Dynamic design with martial arts imagery and motivational content.',
    thumbnail: '/assets/projects/Karate-Coach1.webp',
    images: [
      '/assets/projects/Karate-Coach1.webp',
      '/assets/projects/Karate-Coach2.webp',
      '/assets/projects/Karate-Coach3.webp'
    ],
    liveUrl: 'https://menoo20.github.io/karate-coach/',
    githubUrl: 'https://github.com/menoo20/karate-coach',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    category: 'Landing Page',
    featured: false
  },
  {
    id: 'resturantly',
    title: 'Resturantly - Restaurant Website',
    description: 'Modern restaurant website featuring menu showcase, online reservation system, gallery, and contact information. Built with responsive design and smooth animations for enhanced user experience.',
    thumbnail: '/assets/projects/Resturantly1.webp',
    images: [
      '/assets/projects/Resturantly1.webp',
      '/assets/projects/Resturantly2.webp',
      '/assets/projects/Resturantly3.webp',
      '/assets/projects/Resturantly4.webp',
      '/assets/projects/Resturantly5.webp'
    ],
    liveUrl: 'https://menoo20.github.io/restaurantly/',
    githubUrl: 'https://github.com/menoo20/restaurantly',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'AOS'],
    category: 'Landing Page',
    featured: false
  },
  {
    id: 'dr-abeer',
    title: 'Dr. Abeer Professional Website',
    description: 'Professional website for healthcare practitioner featuring services, credentials, appointment booking, and patient information. Clean medical-themed design with accessibility focus.',
    thumbnail: '/assets/projects/Dr-Abeer1.webp',
    images: [
      '/assets/projects/Dr-Abeer1.webp',
      '/assets/projects/Dr-Abeer2.webp',
      '/assets/projects/Dr-Abeer3.webp'
    ],
    liveUrl: 'https://menoo20.github.io/dr-abeer/',
    githubUrl: 'https://github.com/menoo20/dr-abeer',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    category: 'Web Application',
    featured: false
  },
  // Earlier Projects (2022-2023)
  {
    id: 'product-landing',
    title: 'Product Landing Page',
    description: 'Professional product landing page with feature highlights, pricing tables, and conversion-focused design. Includes smooth animations and mobile-first responsive layout.',
    thumbnail: '/assets/projects/Product-Landing1.webp',
    images: [
      '/assets/projects/Product-Landing1.webp',
      '/assets/projects/Product-Landing2.webp',
      '/assets/projects/Product-Landing3.webp'
    ],
    liveUrl: 'https://menoo20.github.io/e-commerce-product-page-main/',
    githubUrl: 'https://github.com/menoo20/e-commerce-product-page-main',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    category: 'Landing Page',
    featured: false
  },
  {
    id: 'bank-lp',
    title: 'EasyBank Landing Page',
    description: 'Clean and professional banking landing page with modern design, featuring services showcase, testimonials, and call-to-action sections. Fully responsive with smooth scroll effects.',
    thumbnail: '/assets/projects/BankLP1.webp',
    images: [
      '/assets/projects/BankLP1.webp',
      
    ],
    liveUrl: 'https://menoo20.github.io/easybank-landing-page/',
    githubUrl: 'https://github.com/menoo20/easybank-landing-page',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    category: 'Landing Page',
    featured: false
  },
  // Archive
  {
    id: 'old-portfolio',
    title: 'Portfolio V1 (Archive)',
    description: 'My original portfolio website featuring Tilt.js card effects, AOS animations, and alternating project layouts. Built with jQuery and Bootstrap, showcasing earlier development work.',
    thumbnail: '/assets/projects/Old-Portfolio1.webp',
    images: [
      '/assets/projects/Old-Portfolio1.webp',
      '/assets/projects/Old-Portfolio2.webp',
      '/assets/projects/Old-Portfolio3.webp',
      '/assets/projects/Old-Portfolio4.webp'
    ],
    liveUrl: 'https://menoo20.github.io/ameen/',
    githubUrl: 'https://github.com/menoo20/ameen',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'Tilt.js'],
    category: 'Portfolio',
    featured: false
  }
];

export const PROJECT_CATEGORIES = [
  'All',
  'Educational Platform',
  'Web Application',
  'Landing Page',
  'Portfolio'
];
