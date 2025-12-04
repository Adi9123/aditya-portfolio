import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aditya Shinde | UAV Systems Engineer & FPV Drone Pilot',
  description: 'Portfolio of Aditya Shinde — UAV Systems Engineer, FPV Drone Pilot, and Autonomous Systems Developer. World Rank 3 FPV Racing Pilot and Vice-Captain of RC Drone Club.',
  keywords: [
    'Aditya Shinde',
    'UAV engineer',
    'FPV drone pilot',
    'autonomous systems',
    'flight controller tuning',
    'Pixhawk',
    'SpeedyBee',
    'MAVLink',
    'mission planner',
    'drone racing',
    'robotics',
    'embedded systems',
  ],
  authors: [{ name: 'Aditya Shinde', url: 'https://www.linkedin.com/in/adityashinde9' }],
  creator: 'Aditya Shinde',
  openGraph: {
    title: 'Aditya Shinde | UAV Systems Engineer & FPV Drone Pilot',
    description:
      'Building high-performance UAV systems, FPV racing drones, and autonomous robotics solutions.',
    url: 'https://aditya-portfolio.vercel.app',
    siteName: 'Aditya Shinde Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aditya Shinde Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Shinde | UAV Systems Engineer & FPV Drone Pilot',
    description: 'World Rank 3 FPV Pilot | UAV Systems Engineer | Autonomous Systems Developer',
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
