import React from 'react'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ServicesSection from '@/components/ServicesSection'
import StatsSection from '@/components/StatsSection'
import CTAGrid from '@/components/CTAGrid'

export default function HomePage() {
  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abo Ameen',
    jobTitle: ['ESL Teacher', 'Full-Stack Developer', 'Ed Tech Specialist', 'Instructional Designer'],
    description: 'Educator, developer, and lifelong learner passionate about technology and education',
    url: 'https://aboameen.dev',
    image: 'https://aboameen.dev/assets/photos/personal/My image portrait.webp',
    sameAs: [
      'https://www.linkedin.com/in/devameen/',
      'https://github.com/menoo20',
      'https://www.youtube.com/channel/UCvOkSv6YMLPXridRkvERcvA',
      'https://www.tiktok.com/@learn_english_with_mr'
    ],
    knowsAbout: [
      'English Language Teaching',
      'ESL Instruction',
      'Web Development',
      'Full-Stack Development',
      'React',
      'Next.js',
      'TypeScript',
      'Educational Technology',
      'Curriculum Development',
      'Instructional Design'
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Udacity',
      }
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dammam',
      addressRegion: 'Eastern Province',
      addressCountry: 'SA'
    },
    email: 'menooteaching@gmail.com',
    telephone: '+966541913057'
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navigation />
      <main>
        <Hero />
        <ServicesSection />
        <StatsSection />
        <CTAGrid />
      </main>
      <Footer />
    </>
  )
}