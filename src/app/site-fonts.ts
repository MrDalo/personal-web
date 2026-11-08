import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

// Self-hosted Geist from the `geist` package: no requests to Google Fonts.
export const siteFontVariables = `${GeistSans.variable} ${GeistMono.variable}`
