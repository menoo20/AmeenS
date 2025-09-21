import React from 'react'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        {/* Other sections will be added here as we develop them */}
      </main>
      <Footer />
    </>
  )
}