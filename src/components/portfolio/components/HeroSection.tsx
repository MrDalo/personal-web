'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { ArrowDown, Download } from 'lucide-react'
import useHeroAnimations from '../hooks/useHeroAnimations'
import { sectionKickerClass } from '../styles/portfolio-styles'

const HeroSection = () => {
  const rootRef = useRef<HTMLElement>(null)

  useHeroAnimations(rootRef)

  return (
    <section
      ref={rootRef}
      id='top'
      className='relative min-h-0 overflow-hidden bg-ink text-paper min-[1025px]:min-h-[min(980px,100svh)]'
      data-hero
    >
      <div
        className='pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(243,240,233,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(243,240,233,0.12)_1px,transparent_1px)] bg-[length:5.5rem_5.5rem] opacity-18 [mask-image:linear-gradient(to_right,black,transparent_75%)]'
        aria-hidden='true'
      />
      <div
        className='pointer-events-none absolute top-[-14rem] left-[-14rem] z-0 size-[28rem] rounded-full bg-acid opacity-14 blur-[70px] will-change-transform'
        data-pointer-glow
        aria-hidden='true'
      />
      <div className='relative z-1 mx-auto grid min-h-0 w-full max-w-[90rem] grid-cols-1 grid-rows-[auto] gap-8 px-[clamp(1rem,4vw,4.5rem)] pt-32 pb-[clamp(2rem,5vh,4.5rem)] max-[560px]:gap-12 min-[1025px]:min-h-[min(980px,100svh)] min-[1025px]:grid-cols-[minmax(0,1.5fr)_minmax(260px,0.58fr)] min-[1025px]:grid-rows-[1fr_auto] min-[1025px]:gap-x-[clamp(2rem,6vw,7rem)] min-[1025px]:gap-y-8 min-[1025px]:pt-[clamp(8.5rem,16vh,12rem)]'>
        <div className='self-center'>
          <p
            className={`${sectionKickerClass} mb-[clamp(1.8rem,4vh,3.25rem)] text-paper/58`}
            data-intro='eyebrow'
          >
            Front-end engineer · Brno / Central Europe
          </p>
          <h1 className='m-0 max-w-[960px] text-[clamp(3.8rem,13.5vw,7rem)] leading-[0.82] font-[630] tracking-[-0.085em] max-[560px]:text-[clamp(3.35rem,17vw,5.8rem)] max-[560px]:leading-[0.87] min-[1025px]:text-[clamp(4rem,8.9vw,9.4rem)]'>
            <span className='block overflow-hidden pr-[0.08em]'>
              <span
                className='block pb-[0.08em] will-change-transform'
                data-intro='line'
              >
                Digital products
              </span>
            </span>
            <span className='block overflow-hidden pr-[0.08em] font-serif text-acid italic tracking-[-0.07em]'>
              <span
                className='block pb-[0.08em] will-change-transform'
                data-intro='line'
              >
                with intent.
              </span>
            </span>
          </h1>
          <div
            className='mt-[clamp(2rem,5vh,4.5rem)] grid grid-cols-[minmax(250px,560px)]'
            data-intro='copy'
          >
            <p className='m-0 text-[clamp(1rem,1.4vw,1.3rem)] leading-[1.55] text-paper/72'>
              I’m Dalibor Králik - a senior software developer specializing in
              front-end systems, design infrastructure, and practical AI tooling
              for engineering teams.
            </p>
          </div>
          <div
            className='mt-8 flex flex-wrap gap-[0.8rem] max-[560px]:flex-col max-[560px]:items-stretch'
            data-intro='copy'
          >
            <a
              className='inline-flex min-h-13 items-center justify-center gap-3 rounded-full border border-transparent bg-acid px-[1.2rem] py-[0.85rem] text-[0.84rem] font-bold text-ink transition-[color,background-color,border-color,transform] duration-180 hover:-translate-y-0.5 hover:bg-paper max-[560px]:w-full'
              href='#projects'
            >
              Explore selected work
              <ArrowDown aria-hidden='true' />
            </a>
            <a
              className='inline-flex min-h-13 items-center justify-center gap-3 rounded-full border border-paper/28 px-[1.2rem] py-[0.85rem] text-[0.84rem] font-bold text-paper transition-[color,background-color,border-color,transform] duration-180 hover:-translate-y-0.5 hover:border-paper hover:bg-paper/8 max-[560px]:w-full'
              href='/Dalibor_Kralik_CV.pdf'
              download
            >
              <Download aria-hidden='true' />
              Download CV
            </a>
          </div>
        </div>

        <div
          className='relative ml-auto w-[min(88vw,450px)] max-w-[430px] self-center min-[1025px]:ml-0 min-[1025px]:w-auto'
          data-intro='portrait'
        >
          <div className='relative aspect-[0.74] overflow-hidden bg-[#272727] [clip-path:polygon(0_0,88%_0,100%_10%,100%_100%,0_100%)]'>
            <Image
              className='object-cover object-[center_35%] grayscale contrast-[1.06] will-change-transform'
              data-portrait-image
              src='/dalibor-kralik-profile.png'
              alt='Dalibor Králik'
              fill
              priority
              sizes='(max-width: 1024px) 88vw, 34vw'
            />
            <div
              className='pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(18,18,18,0.45),transparent_40%),linear-gradient(135deg,rgba(217,255,67,0.11),transparent_50%)]'
              aria-hidden='true'
            />
          </div>
          <div
            className='flex justify-between pt-[0.8rem] font-mono text-[0.62rem] tracking-[0.08em] text-paper/50'
            aria-hidden='true'
          >
            <span>01</span>
            <span>PRG / BRQ</span>
          </div>
        </div>

        <aside
          className='col-span-full grid grid-cols-[4rem_1fr] items-end gap-6 text-paper/58 max-[560px]:grid-cols-1 min-[1025px]:grid-cols-[minmax(4rem,1fr)_minmax(260px,520px)_auto]'
          data-intro='note'
        >
          <span
            className='mb-2 h-px bg-paper/22 max-[560px]:w-16'
            aria-hidden='true'
          />
          <p className='m-0 text-[0.84rem] leading-[1.6]'>
            Currently leading front-end modernization, shared component
            infrastructure, and AI-enabled engineering workflows at SONET.
          </p>
          <span className='hidden text-right font-mono text-[0.62rem] tracking-[0.05em] uppercase min-[1025px]:block'>
            4+ years of crafting production software
          </span>
        </aside>
      </div>
    </section>
  )
}

export default HeroSection
