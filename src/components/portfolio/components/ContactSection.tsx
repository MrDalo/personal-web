import type { ReactNode } from 'react'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import {
  sectionKickerClass,
  sectionTitleClass,
} from '../styles/portfolio-styles'

type SocialLinkProps = {
  href: string
  label: string
  children: ReactNode
}

const SocialLink = ({ href, label, children }: SocialLinkProps) => (
  <a
    className='grid size-12 place-items-center rounded-full border border-ink transition-[color,background-color,transform] duration-180 hover:-translate-y-[3px] hover:bg-ink hover:text-acid'
    href={href}
    target='_blank'
    rel='noreferrer'
    aria-label={label}
  >
    {children}
  </a>
)

const ContactSection = () => (
  <section
    id='contact'
    className='relative grid min-h-[720px] grid-cols-1 items-center gap-16 overflow-hidden bg-acid px-[max(clamp(1rem,4vw,4.5rem),calc((100vw-90rem)/2+4.5rem))] py-[clamp(6rem,11vw,10rem)] min-[1025px]:min-h-[80svh] min-[1025px]:grid-cols-[1.4fr_0.6fr]'
  >
    <div
      className='absolute right-[-35vw] bottom-[-10vw] size-[95vw] rounded-full border border-ink/20 min-[1025px]:right-[-12vw] min-[1025px]:bottom-[-35vw] min-[1025px]:size-[65vw]'
      aria-hidden='true'
    >
      <span className='absolute inset-[12%] rounded-full border border-ink/15' />
      <span className='absolute inset-[28%] rounded-full border border-ink/15' />
      <span className='absolute inset-[44%] rounded-full border border-ink/15 bg-ink' />
    </div>

    <div className='relative z-1' data-reveal>
      <p
        className={`${sectionKickerClass} mb-[clamp(1.8rem,4vh,3.25rem)] before:text-ink`}
      >
        Working on a meaningful challenge?
      </p>
      <h2
        className={`${sectionTitleClass} max-w-[980px] text-[clamp(3.5rem,8vw,8.5rem)]`}
      >
        Let’s make it clear, useful, and memorable.
      </h2>
      <a
        className='group mt-[clamp(2rem,5vw,4rem)] inline-flex items-center gap-[0.8rem] border-b-2 border-ink pb-[0.35rem] text-[clamp(1rem,1.7vw,1.5rem)] font-bold [&_svg]:transition-transform [&_svg]:duration-180 hover:[&_svg]:translate-x-[0.2rem] hover:[&_svg]:-translate-y-[0.2rem]'
        href='mailto:dadokralik@gmail.com'
      >
        Start a conversation
        <ArrowUpRight aria-hidden='true' />
      </a>
    </div>

    <div
      className='relative z-1 max-w-[360px] self-start pb-4 min-[1025px]:self-end'
      data-reveal
    >
      <p className='mt-0 mb-[1.8rem] text-[0.84rem] leading-[1.65]'>
        Open to selected product collaborations, senior front-end roles, and
        conversations about better engineering systems.
      </p>
      <div className='flex gap-[0.6rem]'>
        <SocialLink href='mailto:dadokralik@gmail.com' label='Email Dalibor'>
          <Mail aria-hidden='true' />
        </SocialLink>
        <SocialLink href='https://github.com/MrDalo' label='Dalibor on GitHub'>
          <Github aria-hidden='true' />
        </SocialLink>
        <SocialLink
          href='https://sk.linkedin.com/in/dalibor-kralik'
          label='Dalibor on LinkedIn'
        >
          <Linkedin aria-hidden='true' />
        </SocialLink>
      </div>
    </div>
  </section>
)

export default ContactSection
