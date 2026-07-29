import Image from 'next/image'
import {
  sectionKickerClass,
  sectionTitleClass,
} from '../styles/portfolio-styles'

const credentials = [
  {
    label: 'Education',
    value: 'MSc in Software Engineering · Masaryk University',
  },
  {
    label: 'Recognition',
    value: 'BUT Rector’s Award · Outstanding Academic Performance',
  },
  {
    label: 'Languages',
    value: 'Slovak · English C1 · Czech C1 · German A2',
  },
] as const

const AboutSection = () => (
  <section
    id='about'
    className='grid w-full max-w-none grid-cols-1 bg-paper-deep py-[clamp(6rem,11vw,10rem)] min-[1025px]:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.2fr)]'
  >
    <div
      className='relative min-h-[min(110vw,720px)] overflow-hidden min-[1025px]:min-h-[760px]'
      data-reveal
    >
      <Image
        className='object-cover grayscale contrast-[1.08]'
        src='/university-photo.avif'
        alt=''
        fill
        sizes='(max-width: 1024px) 100vw, 45vw'
      />
      <div
        className='absolute inset-0 bg-[linear-gradient(to_top,rgba(18,18,18,0.48),transparent_45%)]'
        aria-hidden='true'
      />
      <span
        className='absolute bottom-8 left-8 z-1 font-mono text-[0.65rem] tracking-[0.07em] text-paper uppercase'
        aria-hidden='true'
      >
        Beyond the browser
      </span>
    </div>

    <div
      className='max-w-[840px] self-center px-[clamp(1.5rem,7vw,8rem)] py-[clamp(4rem,8vw,8rem)]'
      data-reveal
    >
      <p className={`${sectionKickerClass} mb-[1.4rem] text-muted`}>
        About / point of view
      </p>
      <h2 className={`${sectionTitleClass} max-w-[720px]`}>
        I make technology feel more human.
      </h2>
      <p className='my-10 max-w-[700px] text-[clamp(1.25rem,2vw,1.7rem)] leading-[1.45]'>
        Good software respects people’s time, attention, and abilities. That
        principle has guided my work across enterprise data, production AI
        tools, design systems, and client-facing products.
      </p>
      <div className='grid grid-cols-1 gap-6 text-[0.88rem] leading-[1.7] text-muted min-[561px]:grid-cols-2'>
        <p className='m-0'>
          I moved from SAP data warehousing into modern front-end engineering,
          then became the main front-end developer for an AI product used by
          hundreds of people. Today I lead modernization and shared engineering
          infrastructure at SONET.
        </p>
        <p className='m-0'>
          Alongside product delivery, I design component libraries, testing
          strategies, and AI-assisted workflows. My academic work focused on
          making modern front-end testing practical for real teams.
        </p>
      </div>

      <dl className='mt-12 mb-0 border-t border-ink'>
        {credentials.map((credential) => (
          <div
            className='grid grid-cols-1 gap-[0.4rem] border-b border-line py-4 min-[561px]:grid-cols-[0.35fr_1fr] min-[561px]:gap-4'
            key={credential.label}
          >
            <dt className='font-mono text-[0.62rem] text-muted uppercase'>
              {credential.label}
            </dt>
            <dd className='m-0 text-[0.78rem]'>{credential.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
)

export default AboutSection
