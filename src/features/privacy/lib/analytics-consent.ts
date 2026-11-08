export type AnalyticsConsent = 'granted' | 'denied'

const STORAGE_KEY = 'portfolio-analytics-consent'
const CHANGE_EVENT = 'portfolio-analytics-consent-change'

/** Stored decision, or null when the visitor has not decided yet. */
export const readAnalyticsConsent = (): AnalyticsConsent | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'granted' || stored === 'denied') return stored
    return null
  } catch {
    return null
  }
}

/** Stores the decision (null clears it so the banner shows again) and notifies listeners. */
export const setAnalyticsConsent = (consent: AnalyticsConsent | null) => {
  try {
    if (consent) localStorage.setItem(STORAGE_KEY, consent)
    else localStorage.removeItem(STORAGE_KEY)
  } catch {
    // Storage blocked: the choice still applies for this page view.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT))
}

export const subscribeToAnalyticsConsent = (onChange: () => void) => {
  window.addEventListener(CHANGE_EVENT, onChange)
  window.addEventListener('storage', onChange)
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange)
    window.removeEventListener('storage', onChange)
  }
}
