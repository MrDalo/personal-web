'use client'

import { Analytics, type BeforeSendEvent } from '@vercel/analytics/next'
import { useAnalyticsConsent } from '../hooks/useAnalyticsConsent'
import { readAnalyticsConsent } from '../lib/analytics-consent'

// A loaded script cannot be unloaded, so drop events once consent is withdrawn.
const sendOnlyWithConsent = (event: BeforeSendEvent) => {
  if (readAnalyticsConsent() !== 'granted') return null
  return event
}

/** Loads Vercel Web Analytics only after the visitor has accepted. */
const ConsentedAnalytics = () => {
  const consent = useAnalyticsConsent()
  if (consent !== 'granted') return null
  return <Analytics beforeSend={sendOnlyWithConsent} />
}

export default ConsentedAnalytics
