import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teaching Portfolio | Abo Ameen',
  description: 'Explore my teaching expertise as an ESL instructor, Ed Tech specialist, and curriculum developer. View my certifications, experience, and educational projects.',
  keywords: ['ESL teacher', 'English teacher', 'Ed Tech specialist', 'instructional designer', 'curriculum developer', 'teaching portfolio', 'Abo Ameen'],
  openGraph: {
    title: 'Teaching Portfolio | Abo Ameen',
    description: 'Explore my teaching expertise as an ESL instructor, Ed Tech specialist, and curriculum developer.',
    url: 'https://aboameen.dev/teaching',
    siteName: 'Abo Ameen Digital Home',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teaching Portfolio | Abo Ameen',
    description: 'Explore my teaching expertise as an ESL instructor, Ed Tech specialist, and curriculum developer.',
  },
}

export default function TeachingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
