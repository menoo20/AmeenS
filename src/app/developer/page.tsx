'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import DeveloperJourneyMap from '@/components/DeveloperJourneyMap'

export default function DeveloperPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-900">
      <DeveloperJourneyMap 
        isVisible={true}
        onClose={() => router.push('/')}
        onNavigate={(nodeId) => {
          console.log(`Navigating to: ${nodeId}`)
          
          // Navigate to the appropriate page based on nodeId
          if (nodeId === 'certificates') {
            router.push('/developer/certificates')
          } else if (nodeId === 'about') {
            router.push('/developer/about')
          } else if (nodeId === 'skills') {
            router.push('/developer/skills')
          } else if (nodeId === 'projects') {
            router.push('/developer/projects')
          } else if (nodeId === 'contact') {
            router.push('/developer/contact')
          }
        }}
      />
    </div>
  )
}
