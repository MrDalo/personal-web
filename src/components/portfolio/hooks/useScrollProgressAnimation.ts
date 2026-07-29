'use client'

import type { RefObject } from 'react'
import { gsap, useGSAP } from '../lib/gsap'

const useScrollProgressAnimation = (
  progress: RefObject<HTMLElement | null>,
) => {
  useGSAP(
    () => {
      const media = gsap.matchMedia()

      media.add(
        {
          motionAllowed: '(prefers-reduced-motion: no-preference)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { reduceMotion } = context.conditions as {
            reduceMotion: boolean
          }

          if (!progress.current) return

          if (reduceMotion) {
            gsap.set(progress.current, { clearProps: 'all' })
            return
          }

          gsap.to(progress.current, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              start: 0,
              end: 'max',
              scrub: 0.2,
            },
          })
        },
      )

      return () => media.revert()
    },
    { scope: progress },
  )
}

export default useScrollProgressAnimation
