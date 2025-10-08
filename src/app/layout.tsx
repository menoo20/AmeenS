import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abo Ameen | Digital Home',
  description: 'Welcome to my digital space - showcasing my journey as an educator, developer, and lifelong learner.',
  keywords: ['teacher', 'educator', 'developer', 'programming', 'portfolio', 'blog', 'ESL teacher', 'full-stack developer', 'Ed Tech specialist'],
  authors: [{ name: 'Abo Ameen' }],
  creator: 'Abo Ameen',
  publisher: 'Abo Ameen',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aboameen.dev',
    title: 'Abo Ameen | Digital Home',
    description: 'Welcome to my digital space - showcasing my journey as an educator, developer, and lifelong learner.',
    siteName: 'Abo Ameen Digital Home',
    images: [
      {
        url: 'https://aboameen.dev/assets/photos/personal/My image portrait.webp',
        width: 1200,
        height: 630,
        alt: 'Abo Ameen - Educator & Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abo Ameen | Digital Home',
    description: 'Welcome to my digital space - showcasing my journey as an educator, developer, and lifelong learner.',
    creator: '@learn_english_with_mr',
    images: ['https://aboameen.dev/assets/photos/personal/My image portrait.webp'],
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://aboameen.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}