'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function TeachingPage() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to starfield as the main teaching page
    router.push('/teaching/starfield')
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-700 to-indigo-900 flex items-center justify-center">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p>Redirecting to Teaching Starfield...</p>
      </div>
    </div>
  )
}