'use client'

import Link from 'next/link'
import { useAnalyticsConsent } from '../hooks/useAnalyticsConsent'
import { setAnalyticsConsent } from '../lib/analytics-consent'

const buttonClassName =
  'flex-1 cursor-pointer border border-paper/40 px-5 py-3 font-mono text-[0.68rem] tracking-[0.06em] uppercase transition-colors hover:border-acid hover:bg-acid hover:text-ink'

/** Opt-in banner for Vercel Web Analytics. Accept and reject are equally prominent. */
const ConsentBanner = () => {
  const consent = useAnalyticsConsent()
  if (consent !== null) return null

  return (
    <section
      aria-labelledby='consent-title'
      className='fixed inset-x-3 bottom-3 z-50 mx-auto grid max-w-[56rem] gap-5 border border-paper/15 bg-ink p-[clamp(1.25rem,3vw,2rem)] text-paper shadow-2xl md:grid-cols-[1fr_auto] md:items-end'
    >
      <div>
        <p className="m-0 mb-3 font-mono text-[0.62rem] tracking-[0.09em] text-acid uppercase before:mr-2 before:content-['↳']">
          Analytics consent
        </p>
        <h2
          id='consent-title'
          className='m-0 mb-2 text-[clamp(1.15rem,2vw,1.5rem)] leading-tight font-semibold tracking-[-0.035em]'
        >
          Can I count your visit?
        </h2>
        <p className='m-0 max-w-[38rem] text-[0.88rem] leading-[1.65] text-paper/70'>
          With your consent, cookie-free Vercel Web Analytics measures aggregate
          page views. Nothing loads unless you accept, and you can change your
          mind any time under &ldquo;Privacy settings&rdquo; in the footer.{' '}
          <Link
            className='text-paper underline decoration-paper/35 underline-offset-4 hover:text-acid'
            href='/privacy'
          >
            Privacy notice
          </Link>
        </p>
      </div>
      <div className='flex gap-3 md:flex-col'>
        <button
          className={buttonClassName}
          onClick={() => setAnalyticsConsent('denied')}
          type='button'
        >
          Reject
        </button>
        <button
          className={buttonClassName}
          onClick={() => setAnalyticsConsent('granted')}
          type='button'
        >
          Accept
        </button>
      </div>
    </section>
  )
}

export default ConsentBanner
