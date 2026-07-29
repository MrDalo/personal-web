'use client'

import { useRef } from 'react'
import useScrollProgressAnimation from '../hooks/useScrollProgressAnimation'

export const SkipLink = () => (
  <a
    className='fixed top-3 left-3 z-200 -translate-y-[150%] bg-acid px-4 py-3 font-bold text-ink focus:translate-y-0'
    href='#main'
  >
    Skip to main content
  </a>
)

export const ScrollProgress = () => {
  const progressRef = useRef<HTMLSpanElement>(null)

  useScrollProgressAnimation(progressRef)

  return (
    <div
      className='fixed inset-x-0 top-0 z-120 h-[3px] bg-ink/8'
      aria-hidden='true'
    >
      <span
        ref={progressRef}
        className='block h-full w-full origin-left scale-x-0 bg-acid'
        data-scroll-progress
      />
    </div>
  )
}
