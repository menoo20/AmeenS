"use client";

import EducationStarfield from '@/components/EducationStarfield';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EducationPage() {
  const [showEducationMap, setShowEducationMap] = useState(true);
  const router = useRouter();

  const handleNavigate = (nodeId: string) => {
    if (nodeId === 'certificates-courses') {
      router.push('/certificates');
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