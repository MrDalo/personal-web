'use client'

import type { RefObject } from 'react'
import { gsap, useGSAP } from '../lib/gsap'

const usePortfolioAnimations = (root: RefObject<HTMLDivElement | null>) => {
  useGSAP(
    () => {
      const media = gsap.matchMedia()

      media.add(
        {
          desktop: '(min-width: 1025px)',
          motionAllowed: '(prefers-reduced-motion: no-preference)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { desktop, reduceMotion } = context.conditions as {
            desktop: boolean
            reduceMotion: boolean
          }

          if (reduceMotion) {
            gsap.set('[data-intro], [data-reveal]', { clearProps: 'all' })
            return
          }

          const intro = gsap.timeline({
            defaults: { duration: 0.8, ease: 'power3.out' },
          })

          intro
            .from('[data-nav]', { y: -28, autoAlpha: 0 }, 0)
            .from('[data-intro="eyebrow"]', { y: 20, autoAlpha: 0 }, '>-0.3')
            .from(
              '[data-intro="line"]',
              { yPercent: 105, rotate: 2, stagger: 0.1 },
              '<0.05',
            )
            .from(
              '[data-intro="copy"]',
              { y: 24, autoAlpha: 0, stagger: 0.08 },
              '<0.35',
            )
            .from(
              '[data-intro="portrait"]',
              { clipPath: 'inset(0 0 100% 0)', scale: 1.08 },
              '<0.05',
            )
            .from('[data-intro="note"]', { x: 16, autoAlpha: 0 }, '>-0.2')

          gsap.utils
            .toArray<HTMLElement>('[data-reveal]')
            .forEach((element) => {
              gsap.from(element, {
                y: desktop ? 56 : 30,
                autoAlpha: 0,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: element,
                  start: 'top 86%',
                  once: true,
                },
              })
            })
        },
      )

      return () => media.revert()
    },
    { scope: root },
  )
}

export default usePortfolioAnimations
