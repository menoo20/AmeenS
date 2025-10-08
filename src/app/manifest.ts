import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Abo Ameen Digital Home',
    short_name: 'Abo Ameen',
    description: 'Portfolio and blog of Abo Ameen - Educator, Developer, and Lifelong Learner',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#8b5cf6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    categories: ['education', 'technology', 'portfolio'],
  }
}
