import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import BlogPostLayout from '@/components/BlogPostLayout';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PlacementTestAnalytics from '@/components/PlacementTestAnalytics2';
import { getPostBySlug, getAllPostSlugs, getRelatedPosts } from '@/lib/blog';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Abo Ameen Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author?.name || 'Abo Ameen'],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

// Custom MDX components for styling
const mdxComponents = {
  h1: (props: any) => <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold mt-6 mb-3" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold mt-5 mb-2" {...props} />,
  p: (props: any) => <p className="mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-purple-600 pl-4 italic my-4 text-gray-700 dark:text-gray-300"
      {...props}
    />
  ),
  a: (props: any) => (
    <a className="text-purple-600 hover:text-purple-700 underline" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4" {...props} />
  ),
  img: (props: any) => (
    <img className="rounded-lg shadow-lg my-6 w-full" {...props} />
  ),
  // Custom components
  PlacementTestAnalytics,
  // Custom callout component
  Callout: ({ type = 'info', children }: { type?: 'info' | 'warning' | 'tip'; children: React.ReactNode }) => {
    const styles = {
      info: 'bg-blue-50 border-blue-500 text-blue-900',
      warning: 'bg-yellow-50 border-yellow-500 text-yellow-900',
      tip: 'bg-green-50 border-green-500 text-green-900',
    };
    return (
      <div className={`border-l-4 p-4 my-4 rounded ${styles[type]}`}>
        {children}
      </div>
    );
  },
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post || !post.content) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(params.slug);

  return (
    <>
      <Navigation />
      <BlogPostLayout post={post} relatedPosts={relatedPosts}>
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                rehypeSlug,
                rehypeAutolinkHeadings,
                [
                  rehypePrettyCode,
                  {
                    theme: 'github-dark',
                    keepBackground: true,
                  },
                ],
              ],
            },
          }}
        />
      </BlogPostLayout>
      <Footer />
    </>
  );
}
