import Link from 'next/link'
import { siteConfig } from '@/app/site-config'
import Wordmark from '@/components/portfolio/components/Wordmark'

const noticeSections = [
  {
    number: '01',
    title: 'Who is responsible',
    content: (
      <>
        <p>
          Dalibor Králik is the controller responsible for this website and the
          limited analytics described below.
        </p>
        <p>
          For privacy questions or requests, email{' '}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </>
    ),
  },
  {
    number: '02',
    title: 'What is measured',
    content: (
      <>
        <p>
          This website uses Vercel Web Analytics to understand aggregate site
          usage. A page view may include the time of the visit, page URL,
          referrer, filtered query parameters, approximate location, operating
          system, browser, and device type.
        </p>
        <p>
          I do not send names, email addresses, account identifiers, or custom
          event data to Vercel Analytics.
        </p>
      </>
    ),
  },
  {
    number: '03',
    title: 'Cookies and identification',
    content: (
      <>
        <p>
          Vercel Web Analytics does not use cookies. It creates a
          privacy-focused identifier from the incoming request to count
          visitors. Vercel states that this identifier is not connected across
          websites or days and is discarded after 24 hours.
        </p>
        <p>
          This website does not intentionally use cookies or browser storage for
          advertising, profiling, or cross-site tracking. For that reason, no
          cookie consent banner is shown.
        </p>
      </>
    ),
  },
  {
    number: '04',
    title: 'Purpose and legal basis',
    content: (
      <p>
        The analytics help me understand which pages are useful and whether the
        website performs well across devices. If any analytics information is
        considered personal data, the legal basis is my legitimate interest
        under Article 6(1)(f) GDPR in operating and improving this portfolio.
        The reporting is limited and does not create advertising profiles.
      </p>
    ),
  },
  {
    number: '05',
    title: 'Service provider and transfers',
    content: (
      <>
        <p>
          Analytics are provided by Vercel Inc., United States. Data may be
          processed in the United States or other countries where Vercel and its
          service providers operate.
        </p>
        <p>
          Vercel states that it participates in the EU–U.S. Data Privacy
          Framework and uses Standard Contractual Clauses or other appropriate
          legal mechanisms where required. Details are available in
          Vercel&apos;s{' '}
          <a
            href='https://vercel.com/legal/privacy-notice'
            target='_blank'
            rel='noreferrer'
          >
            Privacy Notice
          </a>
          .
        </p>
      </>
    ),
  },
  {
    number: '06',
    title: 'Retention',
    content: (
      <p>
        Vercel states that its daily visitor identifier is discarded after 24
        hours. Aggregated analytics remain available according to the reporting
        period and retention rules of the Vercel plan in use. Analytics will be
        disabled or the associated data deleted when it is no longer needed for
        the purposes described here.
      </p>
    ),
  },
  {
    number: '07',
    title: 'Your rights',
    content: (
      <>
        <p>
          Where GDPR applies, you may request access, correction, deletion,
          restriction, or portability of your personal data. You may also object
          to processing based on legitimate interests.
        </p>
        <p>
          Because the analytics are aggregated and are not linked to a name or
          persistent identifier, it may not be possible to associate a request
          with a specific analytics record. You may also lodge a complaint with
          the{' '}
          <a href='https://uoou.gov.cz/en' target='_blank' rel='noreferrer'>
            Czech Office for Personal Data Protection
          </a>
          .
        </p>
      </>
    ),
  },
] as const

const PrivacyNotice = () => (
  <div id='top' className='min-h-svh bg-paper text-ink'>
    <a
      className='fixed top-3 left-3 z-20 -translate-y-[150%] bg-acid px-4 py-3 font-bold text-ink focus:translate-y-0'
      href='#privacy-content'
    >
      Skip to privacy notice
    </a>

    <header className='border-b border-line'>
      <div className='mx-auto flex w-full max-w-[90rem] items-center justify-between px-[clamp(1rem,4vw,4.5rem)] py-5'>
        <Wordmark href='/' label={`${siteConfig.name}, home`} />
        <Link
          className='font-mono text-[0.68rem] tracking-[0.04em] uppercase underline decoration-ink/25 underline-offset-4 transition-colors hover:text-muted'
          href='/'
        >
          Back to portfolio
        </Link>
      </div>
    </header>

    <main
      id='privacy-content'
      className='mx-auto w-full max-w-[90rem] px-[clamp(1rem,4vw,4.5rem)] pt-[clamp(4.5rem,9vw,8rem)] pb-[clamp(5rem,10vw,9rem)]'
    >
      <div className='grid gap-8 border-b border-line pb-[clamp(3rem,7vw,6rem)] min-[901px]:grid-cols-[0.7fr_1.3fr]'>
        <p className="m-0 font-mono text-[0.68rem] tracking-[0.09em] uppercase before:mr-2 before:text-acid before:content-['↳']">
          Privacy notice
        </p>
        <div>
          <h1 className='m-0 max-w-[13ch] text-[clamp(3.4rem,8vw,8rem)] leading-[0.9] font-[590] tracking-[-0.08em]'>
            Clear data. No hidden tracking.
          </h1>
          <p className='mt-8 mb-0 max-w-[44rem] text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.65] text-muted'>
            This notice explains the minimal information used to understand how
            this portfolio performs. It applies to {siteConfig.url}.
          </p>
          <p className='mt-5 mb-0 font-mono text-[0.65rem] tracking-[0.04em] text-muted uppercase'>
            Effective 29 July 2026
          </p>
        </div>
      </div>

      <div className='divide-y divide-line'>
        {noticeSections.map((section) => (
          <section
            className='grid gap-5 py-[clamp(2.5rem,5vw,4.5rem)] min-[901px]:grid-cols-[0.18fr_0.52fr_1.3fr]'
            key={section.number}
            aria-labelledby={`privacy-${section.number}`}
          >
            <p
              className='m-0 font-mono text-[0.62rem] text-muted'
              aria-hidden='true'
            >
              /{section.number}
            </p>
            <h2
              id={`privacy-${section.number}`}
              className='m-0 text-[clamp(1.45rem,2.3vw,2.2rem)] leading-tight font-semibold tracking-[-0.045em]'
            >
              {section.title}
            </h2>
            <div className='max-w-[46rem] space-y-4 text-[0.95rem] leading-[1.75] text-muted [&_a]:font-medium [&_a]:text-ink [&_a]:underline [&_a]:decoration-ink/25 [&_a]:underline-offset-4 [&_a]:transition-colors hover:[&_a]:decoration-ink [&_p]:m-0'>
              {section.content}
            </div>
          </section>
        ))}
      </div>

      <aside className='mt-[clamp(2rem,4vw,4rem)] grid gap-5 bg-ink p-[clamp(1.5rem,4vw,3.5rem)] text-paper min-[701px]:grid-cols-[0.8fr_1.2fr]'>
        <p className='m-0 font-mono text-[0.65rem] tracking-[0.06em] text-acid uppercase'>
          Questions or requests
        </p>
        <div>
          <p className='mt-0 mb-5 max-w-[36rem] text-[clamp(1.25rem,2.4vw,2rem)] leading-[1.25] tracking-[-0.035em]'>
            Privacy should be understandable. If anything here is unclear, get
            in touch.
          </p>
          <a
            className='font-mono text-[0.72rem] underline decoration-paper/35 underline-offset-4 transition-colors hover:text-acid'
            href={`mailto:${siteConfig.email}`}
          >
            {siteConfig.email}
          </a>
        </div>
      </aside>
    </main>

    <footer className='border-t border-line px-[clamp(1rem,4vw,4.5rem)] py-6'>
      <div className='mx-auto flex w-full max-w-[81rem] flex-wrap items-center justify-between gap-3 font-mono text-[0.58rem] tracking-[0.03em] text-muted uppercase'>
        <span>
          © {new Date().getFullYear()} {siteConfig.name}
        </span>
        <Link
          className='underline decoration-ink/25 underline-offset-4'
          href='/'
        >
          Portfolio
        </Link>
      </div>
    </footer>
  </div>
)

export default PrivacyNotice
