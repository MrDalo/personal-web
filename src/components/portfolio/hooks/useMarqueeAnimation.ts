'use client'

import type { RefObject } from 'react'
import { gsap, useGSAP } from '../lib/gsap'

const useMarqueeAnimation = (root: RefObject<HTMLElement | null>) => {
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
          const track = root.current?.querySelector<HTMLElement>(
            '[data-marquee-track]',
          )

          if (!track) return

          if (reduceMotion) {
            gsap.set(track, { clearProps: 'all' })
            return
          }

          gsap.to(track, {
            xPercent: -50,
            duration: 24,
            repeat: -1,
            ease: 'none',
          })
        },
      )

      return () => media.revert()
    },
    { scope: root },
  )
}

export default useMarqueeAnimation
