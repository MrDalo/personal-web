'use client'

import type { RefObject } from 'react'
import { gsap, useGSAP } from '../lib/gsap'

const useHeroAnimations = (root: RefObject<HTMLElement | null>) => {
  useGSAP(
    () => {
      const media = gsap.matchMedia()

      media.add(
        {
          desktop: '(min-width: 1025px)',
          finePointer: '(hover: hover) and (pointer: fine)',
          motionAllowed: '(prefers-reduced-motion: no-preference)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { desktop, finePointer, reduceMotion } = context.conditions as {
            desktop: boolean
            finePointer: boolean
            reduceMotion: boolean
          }

          const hero = root.current
          const portrait = hero?.querySelector<HTMLElement>(
            '[data-portrait-image]',
          )
          const glow = hero?.querySelector<HTMLElement>('[data-pointer-glow]')

          if (reduceMotion) {
            gsap.set([portrait, glow].filter(Boolean), { clearProps: 'all' })
            return
          }

          if (desktop && hero && portrait) {
            gsap.to(portrait, {
              yPercent: 9,
              ease: 'none',
              scrollTrigger: {
                trigger: hero,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
              },
            })
          }

          if (finePointer && hero && glow) {
            const moveX = gsap.quickTo(glow, 'x', {
              duration: 0.6,
              ease: 'power3.out',
            })
            const moveY = gsap.quickTo(glow, 'y', {
              duration: 0.6,
              ease: 'power3.out',
            })

            const followPointer = (event: PointerEvent) => {
              const bounds = hero.getBoundingClientRect()
              moveX(event.clientX - bounds.left)
              moveY(event.clientY - bounds.top)
            }

            hero.addEventListener('pointermove', followPointer)
            return () => hero.removeEventListener('pointermove', followPointer)
          }
        },
      )

      return () => media.revert()
    },
    { scope: root },
  )
}

export default useHeroAnimations
