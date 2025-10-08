import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Developer Portfolio | Abo Ameen',
  description: 'Explore my journey as a full-stack developer. View my technical skills, projects, certifications, and coding expertise in modern web development.',
  keywords: ['full-stack developer', 'web developer', 'React', 'Next.js', 'JavaScript', 'TypeScript', 'portfolio', 'Abo Ameen'],
  openGraph: {
    title: 'Developer Portfolio | Abo Ameen',
    description: 'Explore my journey as a full-stack developer. View my technical skills, projects, certifications, and coding expertise.',
    url: 'https://aboameen.dev/developer',
    siteName: 'Abo Ameen Digital Home',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Portfolio | Abo Ameen',
    description: 'Explore my journey as a full-stack developer. View my technical skills, projects, and certifications.',
  },
}

export default function DeveloperLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
