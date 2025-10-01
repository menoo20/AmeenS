import React from 'react';
import Navigation from '@/components/Navigation';
import EducationalProjectsShowcase from '@/components/EducationalProjectsShowcase';

const EducationalProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <EducationalProjectsShowcase />
    </div>
  );
};

export default EducationalProjectsPage;