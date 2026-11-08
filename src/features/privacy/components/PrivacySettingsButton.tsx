'use client'

import { setAnalyticsConsent } from '../lib/analytics-consent'

type PrivacySettingsButtonProps = {
  className?: string
}

/** Reopens the consent banner so visitors can change or withdraw their choice. */
const PrivacySettingsButton = ({ className }: PrivacySettingsButtonProps) => (
  <button
    className={className}
    onClick={() => setAnalyticsConsent(null)}
    type='button'
  >
    Privacy settings
  </button>
)

export default PrivacySettingsButton
