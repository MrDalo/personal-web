import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { siteFontVariables } from './site-fonts'
import { siteMetadata } from './site-metadata'
import ConsentBanner from '@/features/privacy/components/ConsentBanner'
import ConsentedAnalytics from '@/features/privacy/components/ConsentedAnalytics'

export const metadata: Metadata = siteMetadata

type RootLayoutProps = Readonly<{
  children: ReactNode
}>

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang='en'>
    <body className={`${siteFontVariables} antialiased`}>
      <>
        {children}
        <ConsentBanner />
        <ConsentedAnalytics />
      </>
    </body>
  </html>
)

export default RootLayout
