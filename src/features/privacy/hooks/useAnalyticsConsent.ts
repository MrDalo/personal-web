'use client'

import { useSyncExternalStore } from 'react'
import {
  readAnalyticsConsent,
  subscribeToAnalyticsConsent,
} from '../lib/analytics-consent'

/** undefined while server-rendering, null when undecided, otherwise the stored decision. */
export const useAnalyticsConsent = () =>
  useSyncExternalStore(
    subscribeToAnalyticsConsent,
    readAnalyticsConsent,
    () => undefined,
  )
