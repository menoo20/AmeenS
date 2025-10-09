import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me | Mohammed Mahmoud Ameen (Abo Ameen)',
  description: 'Meet Mohammed Mahmoud Ameen (Abo Ameen) - ESL Teacher, Educational Innovator, and AI Explorer based in Saudi Arabia. Discover my journey from Egypt to the Kingdom, combining teaching excellence with technology.',
  keywords: ['Mohammed Mahmoud Ameen', 'Abo Ameen', 'ESL Teacher Saudi Arabia', 'Black Gold Higher Institute', 'IELTS Teacher', 'Educational Technology', 'AI in Education', 'OSHA Training', 'Adult English Education'],
  openGraph: {
    title: 'About Me | Mohammed Mahmoud Ameen (Abo Ameen)',
    description: 'ESL Teacher, Educational Innovator, and AI Explorer. Bridging traditional teaching excellence with modern technology.',
    type: 'profile',
    images: ['/assets/photos/personal/My image portrait.webp'],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
