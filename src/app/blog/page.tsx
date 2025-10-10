'use client';

import React from 'react';
import UnderConstruction from '@/components/UnderConstruction';
import { FaBlog } from 'react-icons/fa';

export default function BlogPage() {
  return (
    <UnderConstruction
      title="Blog & Insights"
      subtitle="Articles Coming Soon"
      description="I'm working on bringing you insightful articles about education technology, web development, and career growth. Check back soon for engaging content that bridges teaching and technology!"
      icon="blog"
      color="#10b981"
      backUrl="/"
    />
  );
}
