import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Atharva Kanawade | Security-Aware AI Engineer',
  description: 'Portfolio of Atharva Kanawade - Cybersecurity & Machine Learning Engineer specializing in intelligent defense systems, ML-powered threat detection, and secure IoT deployments.',
  keywords: [
    'Atharva Kanawade',
    'cybersecurity engineer',
    'machine learning engineer',
    'AI engineer',
    'security engineer',
    'penetration testing',
    'deep learning',
    'computer vision',
    'CCNA',
    'AWS',
    'Python developer'
  ],
  authors: [{ name: 'Atharva Kanawade', url: 'https://github.com' }],
  creator: 'Atharva Kanawade',
  openGraph: {
    title: 'Atharva Kanawade - Security-Aware AI Engineer',
    description: 'Building intelligent defense systems at the intersection of cybersecurity and machine learning',
    url: 'https://atharvakanawade.vercel.app',
    siteName: 'Atharva Kanawade Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Atharva Kanawade Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atharva Kanawade | Security-Aware AI Engineer',
    description: 'Cybersecurity & ML Engineer specializing in intelligent defense systems',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}