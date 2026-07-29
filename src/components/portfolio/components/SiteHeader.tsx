'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Wordmark from './Wordmark'

gsap.registerPlugin(useGSAP)

const navigation = [
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const SiteHeader = () => {
  const headerRef = useRef<HTMLElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  useGSAP(
    () => {
      if (!menuOpen || !mobileMenuRef.current) return

      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      if (reduceMotion) {
        gsap.set(mobileMenuRef.current, { autoAlpha: 1, y: 0 })
        mobileMenuRef.current.querySelector<HTMLAnchorElement>('a')?.focus()
        return
      }

      gsap.fromTo(
        mobileMenuRef.current,
        { autoAlpha: 0, y: -12 },
        { autoAlpha: 1, y: 0, duration: 0.35, ease: 'power3.out' },
      )
      gsap.fromTo(
        mobileMenuRef.current.querySelectorAll('a'),
        { autoAlpha: 0, y: -8 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: 'power2.out',
          onComplete: () =>
            mobileMenuRef.current
              ?.querySelector<HTMLAnchorElement>('a')
              ?.focus(),
        },
      )
    },
    {
      dependencies: [menuOpen],
      scope: headerRef,
      revertOnUpdate: true,
    },
  )

  return (
    <header
      ref={headerRef}
      className='absolute inset-x-0 top-0 z-100 mx-auto grid w-full max-w-[90rem] grid-cols-[1fr_auto] items-center border-b border-paper/24 px-[clamp(1rem,4vw,4.5rem)] py-[1.35rem] text-paper min-[1025px]:grid-cols-[1fr_auto_1fr]'
      data-nav
    >
      <Wordmark label='Dalibor Králik, home' />

      <nav
        className='hidden items-center gap-[clamp(1.25rem,3vw,2.75rem)] min-[1025px]:flex'
        aria-label='Primary navigation'
      >
        {navigation.map((item) => (
          <a
            className="relative py-[0.35rem] text-[0.82rem] font-[550] text-paper/72 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-acid after:transition-transform after:duration-220 after:content-[''] hover:text-paper hover:after:origin-left hover:after:scale-x-100"
            key={item.href}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a
        className='hidden items-center justify-self-end gap-[0.6rem] font-mono text-[0.67rem] tracking-[0.03em] uppercase min-[1025px]:flex'
        href='mailto:dadokralik@gmail.com'
      >
        <span
          className='size-[0.55rem] rounded-full bg-acid shadow-[0_0_0_0.3rem_rgba(217,255,67,0.12)]'
          aria-hidden='true'
        />
        Let’s work together
      </a>

      <button
        ref={menuButtonRef}
        className='grid size-11 cursor-pointer place-items-center rounded-full border border-paper/30 bg-transparent min-[1025px]:hidden'
        type='button'
        aria-expanded={menuOpen}
        aria-controls='mobile-navigation'
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X aria-hidden='true' /> : <Menu aria-hidden='true' />}
      </button>

      {menuOpen && (
        <div
          ref={mobileMenuRef}
          id='mobile-navigation'
          className='absolute top-[calc(100%+0.5rem)] right-4 left-4 block border border-paper/20 bg-ink/96 p-[1.2rem] shadow-[0_1.5rem_4rem_rgba(0,0,0,0.28)] backdrop-blur-[20px] min-[1025px]:hidden'
        >
          <nav className='flex flex-col' aria-label='Mobile navigation'>
            {navigation.map((item, index) => (
              <a
                className='flex items-baseline gap-4 border-b border-paper/16 py-[0.8rem] text-[1.55rem] font-semibold tracking-[-0.04em]'
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                <span className='font-mono text-[0.55rem] text-acid'>
                  0{index + 1}
                </span>
                {item.label}
              </a>
            ))}
          </nav>
          <a
            className='mt-[1.2rem] block font-mono text-[0.65rem] text-paper/58'
            href='mailto:dadokralik@gmail.com'
          >
            dadokralik@gmail.com
          </a>
        </div>
      )}
    </header>
  )
}

export default SiteHeader
