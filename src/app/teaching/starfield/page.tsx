"use client";

import EducationStarfield from '@/components/EducationStarfield';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TeachingStarfieldPage() {
  const [showEducationMap, setShowEducationMap] = useState(true);
  const router = useRouter();

  const handleNavigate = (nodeId: string) => {
    if (nodeId === 'certificates-courses') {
      router.push('/teaching/certificates');
    } else if (nodeId === 'educational-background') {
      router.push('/teaching/educational-journey');
    } else {
      setShowEducationMap(false);
      // Here we'll add actual navigation logic for other nodes later
      alert(`✨ Exploring ${nodeId} star! (Coming soon)`);
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