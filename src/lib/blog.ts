import { BlogPost, BlogMetadata, DEFAULT_AUTHOR } from '@/data/blog';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const contentDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

/**
 * Get all blog post slugs
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  
  const files = fs.readdirSync(contentDirectory);
  return files
    .filter((file: string) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file: string) => file.replace(/\.mdx?$/, ''));
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const metadata = data as BlogMetadata;

    // Calculate reading time
    const stats = readingTime(content);

    return {
      slug,
      title: metadata.title,
      description: metadata.description,
      date: metadata.date,
      category: metadata.category,
      tags: metadata.tags || [],
      image: metadata.image,
      featured: metadata.featured || false,
      author: DEFAULT_AUTHOR,
      readTime: stats.text,
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get all blog posts
 */
export function getAllPosts(): BlogPost[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => {
      // Sort by date descending (newest first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return posts;
}

/**
 * Get featured blog posts
 */
export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.featured);
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((post) => post.tags.includes(tag));
}

/**
 * Get related posts (same category, excluding current post)
 */
export function getRelatedPosts(slug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(slug);
  if (!currentPost) return [];

  return getAllPosts()
    .filter((post) => post.slug !== slug && post.category === currentPost.category)
    .slice(0, limit);
}
