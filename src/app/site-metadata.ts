import type { Metadata } from 'next'
import { siteConfig } from './site-config'

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    'senior front-end engineer',
    'React developer Brno',
    'TypeScript developer',
    'Next.js engineer',
    'accessible web development',
    'design systems engineer',
    'front-end testing',
    'AI engineering workflows',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'technology',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: `${siteConfig.url}/`,
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: `${siteConfig.url}/`,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.socialImage,
        width: 1731,
        height: 909,
        alt: `${siteConfig.name} — Senior Front-end Engineer portfolio`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.socialImage],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'cBu8GNiF9fk6V0TAWPRR3M3pR2SPPRA5itk3yEdhlvE',
  },
}
