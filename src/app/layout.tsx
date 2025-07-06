import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Dalibor Králik - Front-end Developer',
  description:
    'Front-end developer specializing in React, Next.js, and TypeScript. Creating performant, beautiful, and accessible web applications with over 2 years of experience.',
  keywords: [
    'front-end developer',
    'react',
    'next.js',
    'typescript',
    'web development',
    'slovakia',
    'czech republic',
  ],
  authors: [{ name: 'Dalibor Králik' }],
  creator: 'Dalibor Králik',
  publisher: 'Dalibor Králik',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dalibor-kralik.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dalibor-kralik.vercel.app/',
    title: 'Dalibor Králik - Front-end Developer',
    description:
      'Front-end developer specializing in React, Next.js, and TypeScript. Creating performant, beautiful, and accessible web applications.',
    siteName: 'Dalibor Králik Portfolio',
    images: [
      {
        url: '/university-photo.avif',
        width: 1200,
        height: 630,
        alt: 'Dalibor Králik - Front-end Developer',
      },
    ],
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
  verification: {
    google: 'cBu8GNiF9fk6V0TAWPRR3M3pR2SPPRA5itk3yEdhlvE',
  },
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
