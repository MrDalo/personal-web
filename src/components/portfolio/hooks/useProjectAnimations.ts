'use client'

import type { RefObject } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '../lib/gsap'

const useProjectAnimations = (root: RefObject<HTMLElement | null>) => {
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

          const cards =
            root.current?.querySelectorAll<HTMLElement>('[data-project]')
          const visuals = root.current?.querySelectorAll<HTMLElement>(
            '[data-project-visual]',
          )

          if (reduceMotion) {
            gsap.set([...(cards ?? []), ...(visuals ?? [])], {
              clearProps: 'all',
            })
            return
          }

          if (cards?.length) {
            ScrollTrigger.batch(cards, {
              start: 'top 88%',
              once: true,
              batchMax: desktop ? 2 : 1,
              onEnter: (elements) =>
                gsap.from(elements, {
                  y: 48,
                  autoAlpha: 0,
                  duration: 0.85,
                  stagger: 0.12,
                  ease: 'power3.out',
                  overwrite: true,
                }),
            })
          }

          if (desktop) {
            visuals?.forEach((visual) => {
              gsap.fromTo(
                visual,
                { scale: 0.96 },
                {
                  scale: 1.04,
                  ease: 'none',
                  scrollTrigger: {
                    trigger: visual,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                  },
                },
              )
            })
          }
        },
      )

      return () => media.revert()
    },
    { scope: root },
  )
}

export default useProjectAnimations
