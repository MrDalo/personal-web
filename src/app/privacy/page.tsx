import type { Metadata } from 'next'
import PrivacyNotice from '@/features/privacy/components/PrivacyNotice'
import { siteConfig } from '../site-config'

export const metadata: Metadata = {
  title: 'Privacy Notice',
  description:
    'How this portfolio uses privacy-friendly, cookie-free Vercel Web Analytics.',
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
  openGraph: {
    title: `Privacy Notice | ${siteConfig.name}`,
    description:
      'How this portfolio uses privacy-friendly, cookie-free Vercel Web Analytics.',
    url: `${siteConfig.url}/privacy`,
  },
}

const PrivacyPage = () => <PrivacyNotice />

export default PrivacyPage
