'use client'

import type { RefObject } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '../lib/gsap'

const useCapabilityAnimations = (root: RefObject<HTMLElement | null>) => {
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
          const capabilities =
            root.current?.querySelectorAll<HTMLElement>('[data-capability]')

          if (reduceMotion) {
            gsap.set(capabilities ?? [], { clearProps: 'all' })
            return
          }

          if (capabilities?.length) {
            ScrollTrigger.batch(capabilities, {
              start: 'top 90%',
              once: true,
              onEnter: (elements) =>
                gsap.from(elements, {
                  x: desktop ? -32 : 0,
                  y: desktop ? 0 : 24,
                  autoAlpha: 0,
                  duration: 0.7,
                  stagger: 0.08,
                  ease: 'power2.out',
                  overwrite: true,
                }),
            })
          }
        },
      )

      return () => media.revert()
    },
    { scope: root },
  )
}

export default useCapabilityAnimations
