import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Abo Ameen',
  description: 'Read articles about education, technology, programming, and personal growth. Insights from an educator and developer.',
  keywords: ['blog', 'education blog', 'tech blog', 'programming articles', 'teaching tips', 'Abo Ameen'],
  openGraph: {
    title: 'Blog | Abo Ameen',
    description: 'Read articles about education, technology, programming, and personal growth.',
    url: 'https://aboameen.dev/blog',
    siteName: 'Abo Ameen Digital Home',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Abo Ameen',
    description: 'Read articles about education, technology, programming, and personal growth.',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
