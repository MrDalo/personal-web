'use client'

import type { RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const usePortfolioAnimations = (root: RefObject<HTMLDivElement | null>) => {
  useGSAP(
    () => {
      const media = gsap.matchMedia()

      media.add(
        {
          desktop: '(min-width: 1025px)',
          finePointer: '(hover: hover) and (pointer: fine)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { desktop, finePointer, reduceMotion } = context.conditions as {
            desktop: boolean
            finePointer: boolean
            reduceMotion: boolean
          }

          if (reduceMotion) {
            gsap.set(
              '[data-intro], [data-reveal], [data-project], [data-capability]',
              { clearProps: 'all' },
            )
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

          gsap.to('[data-scroll-progress]', {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              start: 0,
              end: 'max',
              scrub: 0.2,
            },
          })

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

          ScrollTrigger.batch('[data-project]', {
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

          ScrollTrigger.batch('[data-capability]', {
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

          gsap.to('[data-marquee-track]', {
            xPercent: -50,
            duration: 24,
            repeat: -1,
            ease: 'none',
          })

          if (desktop) {
            gsap.to('[data-portrait-image]', {
              yPercent: 9,
              ease: 'none',
              scrollTrigger: {
                trigger: '[data-hero]',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
              },
            })

            gsap.utils
              .toArray<HTMLElement>('[data-project-visual]')
              .forEach((visual) => {
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

          if (finePointer) {
            const hero = root.current?.querySelector<HTMLElement>('[data-hero]')
            const glow = root.current?.querySelector<HTMLElement>(
              '[data-pointer-glow]',
            )

            if (hero && glow) {
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
              return () =>
                hero.removeEventListener('pointermove', followPointer)
            }
          }
        },
      )

      return () => media.revert()
    },
    { scope: root },
  )
}

export default usePortfolioAnimations
