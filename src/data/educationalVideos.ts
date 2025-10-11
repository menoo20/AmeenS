// Educational Research & Publications - YouTube Video Showcase Data

export interface EducationalVideo {
  id: string;
  videoId: string; // YouTube video ID
  title: string;
  subtitle: string;
  category: 'esl-writing' | 'language-assessment' | 'teaching-innovation' | 'educational-tech';
  duration: string;
  views: string;
  thumbnail: string;
  description: string;
  researchSummary: string;
  keyTopics: string[];
  targetAudience: string;
  featured?: boolean;
}

export const EDUCATIONAL_VIDEOS: EducationalVideo[] = [
  // ============= ESL WRITING PEDAGOGY =============
  {
    id: 'report-writing-chapter1',
    videoId: 'jcYpPMyb_e4',
    title: 'The Ultimate Guide to Writing a Report',
    subtitle: 'Chapter 1: Foundations of Academic Report Writing',
    category: 'esl-writing',
    duration: '15:00',
    views: '2.9K',
    thumbnail: 'https://img.youtube.com/vi/jcYpPMyb_e4/maxresdefault.jpg',
    description: 'A comprehensive introduction to academic report writing, covering structure, format, and essential components.',
    researchSummary: 'This instructional video demonstrates a systematic approach to teaching report writing, breaking down complex academic writing into manageable components. The methodology emphasizes scaffolded learning, where students build skills progressively from basic structure to advanced techniques. The content reflects current best practices in ESL writing instruction, incorporating process-based writing pedagogy and genre-specific instruction.',
    keyTopics: [
      'Report structure and organization',
      'Academic writing conventions',
      'Introduction and executive summary techniques',
      'Data presentation methods',
      'Scaffolded learning approach'
    ],
    targetAudience: 'ESL students (B2-C1 level), Academic writing learners, IELTS/TOEFL candidates',
    featured: true
  },
  {
    id: 'advanced-grammar-participle',
    videoId: 'nEs_-OlYuBk',
    title: 'Advanced Grammar for Report Writing',
    subtitle: 'Participle Clauses, Inversions & Complex Structures',
    category: 'esl-writing',
    duration: '24:00',
    views: '156',
    thumbnail: 'https://img.youtube.com/vi/nEs_-OlYuBk/maxresdefault.jpg',
    description: 'Deep dive into advanced grammatical structures essential for sophisticated academic writing.',
    researchSummary: 'This advanced grammar tutorial applies cognitive linguistics principles to help learners understand and use complex grammatical structures. The teaching methodology incorporates explicit instruction combined with contextualized practice, demonstrating how advanced grammar enhances academic writing quality. The approach aligns with research showing that explicit grammar instruction, when integrated meaningfully into writing tasks, significantly improves learner output.',
    keyTopics: [
      'Participle clauses for conciseness',
      'Inversion structures for emphasis',
      'Reduced relative clauses',
      'Nominalization techniques',
      'Academic register and formality'
    ],
    targetAudience: 'Advanced ESL learners (C1-C2), Academic writers, Graduate students',
    featured: false
  },
  {
    id: 'mastering-linkers',
    videoId: 'X_LjsLtGZ14',
    title: 'Mastering Linkers for Better Writing',
    subtitle: 'Cohesion and Coherence in Academic Writing',
    category: 'esl-writing',
    duration: '11:13',
    views: '25',
    thumbnail: 'https://img.youtube.com/vi/X_LjsLtGZ14/maxresdefault.jpg',
    description: 'Essential guide to using linking words and phrases effectively in academic and report writing.',
    researchSummary: 'This instructional content addresses discourse cohesion, a critical component of writing proficiency often overlooked in traditional grammar instruction. The video demonstrates how cohesive devices (linkers) create textual coherence and guide readers through complex arguments. The pedagogical approach reflects research in systemic functional linguistics, showing how transitional phrases function as signposts in academic discourse.',
    keyTopics: [
      'Cohesive devices classification',
      'Logical connectors and transitions',
      'Contrast and comparison markers',
      'Cause and effect relationships',
      'Discourse organization strategies'
    ],
    targetAudience: 'Intermediate to advanced ESL writers, Report writing students, Business English learners',
    featured: false
  },
  {
    id: 'sentence-variety',
    videoId: 'D9cyWZgu5Rk',
    title: 'Constructing Varied Sentence Structures',
    subtitle: 'Beyond Simple Sentences in Academic Writing',
    category: 'esl-writing',
    duration: '15:00',
    views: '64',
    thumbnail: 'https://img.youtube.com/vi/D9cyWZgu5Rk/maxresdefault.jpg',
    description: 'Learn to create diverse and sophisticated sentence structures for impactful academic writing.',
    researchSummary: 'This tutorial explores syntactic variety as a marker of writing maturity and proficiency. Drawing on second language acquisition research, the video demonstrates how sentence combining techniques and transformational grammar exercises help learners develop more complex and varied writing styles. The instructional approach emphasizes that syntactic complexity, when used appropriately, enhances both clarity and academic tone.',
    keyTopics: [
      'Simple, compound, and complex sentences',
      'Sentence combining techniques',
      'Subordination and coordination',
      'Periodic and cumulative sentences',
      'Syntactic variety for reader engagement'
    ],
    targetAudience: 'ESL writing students, Academic writing courses, Test preparation candidates',
    featured: false
  },
  {
    id: 'useful-phrases',
    videoId: 'CvZ0t729GEM',
    title: 'Useful Phrases and Expressions for Reports',
    subtitle: 'Building an Academic Writing Repertoire',
    category: 'esl-writing',
    duration: '3:56',
    views: '110',
    thumbnail: 'https://img.youtube.com/vi/CvZ0t729GEM/maxresdefault.jpg',
    description: 'Quick reference guide to essential academic phrases for professional report writing.',
    researchSummary: 'This practical resource addresses formulaic language in academic writing—a crucial aspect of genre-based pedagogy. Research shows that proficient academic writers rely on a repertoire of conventional phrases and expressions that signal specific rhetorical functions. This video provides learners with lexical bundles and phraseological units commonly found in academic reports, facilitating quicker acquisition of academic writing conventions.',
    keyTopics: [
      'Introductory and concluding phrases',
      'Data presentation language',
      'Hedging and cautious language',
      'Recommendation and suggestion phrases',
      'Academic collocation patterns'
    ],
    targetAudience: 'Academic writers, Business report writers, ESL professionals',
    featured: false
  },

  // ============= LANGUAGE ASSESSMENT & TEST PREPARATION =============
  {
    id: 'ielts-speaking-simulation',
    videoId: 'f5Jy-BBWpxU',
    title: 'IELTS Speaking Test Simulation',
    subtitle: 'Achieving Band 6.5-7.0: A Live Demonstration',
    category: 'language-assessment',
    duration: '10:43',
    views: '593',
    thumbnail: 'https://img.youtube.com/vi/f5Jy-BBWpxU/maxresdefault.jpg',
    description: 'Live IELTS speaking test simulation with real-time performance analysis and scoring breakdown.',
    researchSummary: 'This authentic assessment simulation provides valuable insight into IELTS speaking evaluation criteria. The video demonstrates practical application of language testing principles, showing how assessors evaluate fluency, coherence, lexical resource, grammatical range, and pronunciation. By modeling a test performance, the content serves as both formative assessment for learners and pedagogical resource for teachers, illustrating how standardized speaking tests measure communicative competence in real-world contexts.',
    keyTopics: [
      'IELTS speaking test format and structure',
      'Band descriptor interpretation',
      'Fluency and coherence strategies',
      'Lexical resource demonstration',
      'Error correction and self-repair',
      'Time management in speaking tests'
    ],
    targetAudience: 'IELTS candidates, Language test takers, ESL speaking students',
    featured: false
  },
  {
    id: 'ielts-reading-strategies',
    videoId: 'WZmgLdhu5pU',
    title: 'IELTS Academic Reading Strategies',
    subtitle: 'Overcoming Difficult Passages and Time Management',
    category: 'language-assessment',
    duration: '8:50',
    views: '92',
    thumbnail: 'https://img.youtube.com/vi/WZmgLdhu5pU/maxresdefault.jpg',
    description: 'Proven strategies for improving IELTS reading scores through effective time management and comprehension techniques.',
    researchSummary: 'This instructional video addresses metacognitive reading strategies essential for academic test success. Drawing on research in reading comprehension and test-taking strategies, the content demonstrates how strategic readers approach complex academic texts. The methodology includes skimming, scanning, inference-making, and time allocation—all supported by cognitive psychology research showing that strategic competence significantly impacts test performance.',
    keyTopics: [
      'Skimming and scanning techniques',
      'Question type identification',
      'Time management strategies',
      'Dealing with unfamiliar vocabulary',
      'Inference and context clues',
      'Academic reading subskills'
    ],
    targetAudience: 'IELTS Academic test takers, Advanced ESL readers, Academic preparation students',
    featured: false
  },
  {
    id: 'english-speaking-solo-tips',
    videoId: 'Yr6Z0s89g5w',
    title: 'Four Solo English Speaking Practice Methods',
    subtitle: 'Autonomous Learning Strategies for Fluency Development',
    category: 'language-assessment',
    duration: '4:33',
    views: '152',
    thumbnail: 'https://img.youtube.com/vi/Yr6Z0s89g5w/maxresdefault.jpg',
    description: 'Practical techniques for improving English speaking skills independently without a conversation partner.',
    researchSummary: 'This video addresses autonomous language learning, particularly relevant in contexts where interaction opportunities are limited. The strategies presented align with research on self-directed learning and output hypothesis, which posits that language production (speaking) facilitates acquisition. The four methods encourage learners to create meaningful speaking practice opportunities independently, developing both fluency and confidence through varied practice techniques.',
    keyTopics: [
      'Self-talk and shadowing techniques',
      'Recording and self-evaluation',
      'Monologue practice strategies',
      'Autonomous learning principles',
      'Fluency development without partners'
    ],
    targetAudience: 'Independent language learners, Speaking test candidates, Self-study students',
    featured: true
  },

  // ============= TEACHING INNOVATION & ONLINE PEDAGOGY =============
  {
    id: 'preply-teaching-experience',
    videoId: 'vYnEsEPVUH4',
    title: 'Online Teaching on Preply Platform',
    subtitle: 'Professional Insights, Income Analysis & Best Practices',
    category: 'teaching-innovation',
    duration: '8:44',
    views: '3.3K',
    thumbnail: 'https://img.youtube.com/vi/vYnEsEPVUH4/maxresdefault.jpg',
    description: 'Comprehensive guide to online ESL teaching, including platform analysis, income potential, and effective teaching strategies.',
    researchSummary: 'This professional reflection on online teaching addresses the growing field of computer-assisted language learning (CALL) and online pedagogy. The video provides empirical insights into digital teaching platforms, examining both pedagogical and professional aspects of online instruction. It demonstrates adaptation of traditional teaching methodologies to digital environments, addressing challenges like building rapport remotely, using digital tools effectively, and maintaining instructional quality in virtual settings.',
    keyTopics: [
      'Online teaching platform comparison',
      'Virtual classroom management',
      'Digital teaching tools and resources',
      'Building student relationships online',
      'Professional development in digital teaching',
      'Income strategies for online educators'
    ],
    targetAudience: 'ESL teachers, Aspiring online educators, Education professionals',
    featured: true
  },
  {
    id: 'teaching-abroad-guide',
    videoId: 'oB-HbO52h8w',
    title: 'Teaching English Abroad: Complete Guide',
    subtitle: 'Saudi Arabia Market Analysis, Recruitment & Compensation',
    category: 'teaching-innovation',
    duration: '17:00',
    views: '10K',
    thumbnail: 'https://img.youtube.com/vi/oB-HbO52h8w/maxresdefault.jpg',
    description: 'Comprehensive analysis of international teaching opportunities, focusing on Middle East markets and professional pathways.',
    researchSummary: 'This content examines the international dimension of ESL teaching, providing professional guidance on cross-cultural education careers. The video addresses practical aspects of international teaching: qualifications required, recruitment processes, cultural adaptation, and professional expectations. It reflects the globalization of English language teaching and the professionalization of TESOL field, offering evidence-based advice for educators considering international career paths.',
    keyTopics: [
      'International teaching qualifications',
      'Cross-cultural teaching competence',
      'Professional recruitment processes',
      'Compensation and benefits analysis',
      'Cultural adaptation strategies',
      'Career development in international contexts'
    ],
    targetAudience: 'ESL professionals, International job seekers, TESOL graduates',
    featured: false
  },

  // ============= EDUCATIONAL TECHNOLOGY =============
  {
    id: 'hostinger-web-building',
    videoId: 'jiQdFqW57IQ',
    title: 'Educational Website Deployment Guide',
    subtitle: 'Hosting and Publishing Digital Learning Resources',
    category: 'educational-tech',
    duration: '11:26',
    views: '12K',
    thumbnail: 'https://img.youtube.com/vi/jiQdFqW57IQ/maxresdefault.jpg',
    description: 'Step-by-step tutorial for educators on hosting educational websites and digital learning materials.',
    researchSummary: 'This technical tutorial addresses digital literacy for educators in the context of educational technology integration. As modern pedagogy increasingly relies on digital platforms, educators need technical skills to create and maintain online learning environments. This video demonstrates practical web development and hosting skills, empowering teachers to create digital spaces for their students—a key competency in 21st-century education and blended learning environments.',
    keyTopics: [
      'Web hosting fundamentals',
      'Educational website design',
      'Digital resource management',
      'Student accessibility considerations',
      'Learning management system alternatives',
      'Technical skills for educators'
    ],
    targetAudience: 'Educators integrating technology, Instructional designers, Digital learning specialists',
    featured: false
  },
  {
    id: 'dji-mic-review',
    videoId: 'wgRp25jAlJM',
    title: 'DJI Mic Mini for Educational Content',
    subtitle: 'Audio Quality Assessment for Online Teaching',
    category: 'educational-tech',
    duration: '13:57',
    views: '5.5K',
    thumbnail: 'https://img.youtube.com/vi/wgRp25jAlJM/maxresdefault.jpg',
    description: 'Professional audio equipment review focused on educational content creation and online teaching quality.',
    researchSummary: 'This technical review examines audio quality in educational media production—a critical yet often overlooked aspect of online teaching effectiveness. Research in multimedia learning demonstrates that audio clarity significantly impacts comprehension and learner engagement. This video provides educators with evidence-based recommendations for improving instructional video quality, recognizing that as online and hybrid learning become standard, teachers must understand the technical aspects of digital content creation.',
    keyTopics: [
      'Audio equipment for educators',
      'Production quality in educational videos',
      'Student engagement through media quality',
      'Technical standards for online teaching',
      'Investment analysis for educational tools'
    ],
    targetAudience: 'Online educators, Content creators in education, Instructional media producers',
    featured: false
  }
];

// Category metadata for filtering and display
export const VIDEO_CATEGORIES = {
  'esl-writing': {
    name: 'ESL Writing Pedagogy',
    description: 'Research-based approaches to teaching academic and report writing',
    icon: '📝',
    color: '#3b82f6'
  },
  'language-assessment': {
    name: 'Language Assessment & Testing',
    description: 'Practical applications of language testing theory and preparation strategies',
    icon: '🎯',
    color: '#10b981'
  },
  'teaching-innovation': {
    name: 'Modern Teaching Practices',
    description: 'Innovation in ESL instruction and professional development',
    icon: '🌐',
    color: '#8b5cf6'
  },
  'educational-tech': {
    name: 'Educational Technology',
    description: 'Digital tools and technical skills for modern educators',
    icon: '💻',
    color: '#f59e0b'
  }
};

// Get videos by category
export function getVideosByCategory(category: string): EducationalVideo[] {
  return EDUCATIONAL_VIDEOS.filter(video => video.category === category);
}

// Get featured videos
export function getFeaturedVideos(): EducationalVideo[] {
  return EDUCATIONAL_VIDEOS.filter(video => video.featured);
}

// Get all categories with video counts
export function getCategoriesWithCounts() {
  return Object.entries(VIDEO_CATEGORIES).map(([key, value]) => ({
    key,
    ...value,
    count: EDUCATIONAL_VIDEOS.filter(v => v.category === key).length
  }));
}
