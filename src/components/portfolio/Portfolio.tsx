'use client'

import { useRef } from 'react'
import AboutSection from './components/AboutSection'
import CapabilitiesSection from './components/CapabilitiesSection'
import ContactSection from './components/ContactSection'
import ExperienceSection from './components/ExperienceSection'
import HeroSection from './components/HeroSection'
import { ScrollProgress, SkipLink } from './components/PortfolioChrome'
import ProjectsSection from './components/ProjectsSection'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import SkillsMarquee from './components/SkillsMarquee'
import usePortfolioAnimations from './hooks/usePortfolioAnimations'

const Portfolio = () => {
  const rootRef = useRef<HTMLDivElement>(null)

  usePortfolioAnimations(rootRef)

  return (
    <div
      ref={rootRef}
      className='relative w-full min-w-0 overflow-clip bg-paper text-ink [background-image:linear-gradient(90deg,transparent_49.95%,rgba(18,18,18,0.04)_50%)] [background-position:center] [background-size:min(100%,90rem)_100%] [&_svg]:size-[1.1em] [&_svg]:[stroke-width:1.75]'
    >
      <SkipLink />
      <ScrollProgress />
      <SiteHeader />

      <main id='main'>
        <HeroSection />
        <SkillsMarquee />
        <ProjectsSection />
        <ExperienceSection />
        <CapabilitiesSection />
        <AboutSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  )
}

export default Portfolio
