export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: BlogCategory;
  tags: string[];
  image: string;
  featured?: boolean;
  author?: {
    name: string;
    image: string;
    bio: string;
  };
  readTime?: string;
  content?: string;
}

export type BlogCategory = 'Teaching' | 'Development' | 'Ed Tech' | 'Career';

export interface BlogMetadata {
  title: string;
  description: string;
  date: string;
  category: BlogCategory;
  tags: string[];
  image: string;
  featured?: boolean;
}

export const BLOG_CATEGORIES: Record<BlogCategory, { color: string; gradient: string }> = {
  Teaching: {
    color: '#a855f7',
    gradient: 'from-purple-600 to-pink-600',
  },
  Development: {
    color: '#3b82f6',
    gradient: 'from-blue-600 to-cyan-600',
  },
  'Ed Tech': {
    color: '#10b981',
    gradient: 'from-green-600 to-emerald-600',
  },
  Career: {
    color: '#f59e0b',
    gradient: 'from-orange-600 to-amber-600',
  },
};

export const DEFAULT_AUTHOR = {
  name: 'Mr. Mohammed Ameen',
  image: '/assets/photos/personal/My image portrait.webp',
  bio: 'ESL Teacher, Full-Stack Developer, and Ed Tech Specialist passionate about bridging education and technology.',
};
