import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { siteFontVariables } from './site-fonts'
import { siteMetadata } from './site-metadata'

export const metadata: Metadata = siteMetadata

type RootLayoutProps = Readonly<{
  children: ReactNode
}>

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang='en'>
    <body className={`${siteFontVariables} antialiased`}>
      <>
        {children}
        <Analytics />
      </>
    </body>
  </html>
)

export default RootLayout
