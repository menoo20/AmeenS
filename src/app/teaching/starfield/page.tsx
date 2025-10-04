"use client";

import EducationStarfield from '@/components/EducationStarfield';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TeachingStarfieldPage() {
  const [showEducationMap, setShowEducationMap] = useState(true);
  const router = useRouter();

  const handleNavigate = (nodeId: string) => {
    // Navigate to completed sections
    if (nodeId === 'certificates-courses') {
      router.push('/teaching/certificates');
    } else if (nodeId === 'educational-background') {
      router.push('/teaching/educational-journey');
    } else if (nodeId === 'teaching-experience') {
      router.push('/teaching/experience');
    } else if (nodeId === 'educational-projects') {
      router.push('/teaching/educational-projects');
    } 
    // Navigate to under-construction sections
    else if (nodeId === 'personal-details') {
      router.push('/teaching/personal-details');
    } else if (nodeId === 'esl-expertise') {
      router.push('/teaching/esl-expertise');
    } else if (nodeId === 'gamification-learning') {
      router.push('/teaching/gamification-learning');
    } else if (nodeId === 'research-publications') {
      router.push('/teaching/research-publications');
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <EducationStarfield 
        isVisible={showEducationMap}
        onClose={() => router.push('/')}
        onNavigate={handleNavigate}
      />
    </div>
  );
}