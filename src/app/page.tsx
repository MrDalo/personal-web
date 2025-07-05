'use client'

import HeroSection from '@/components/sections/HeroSection'
import TechStack from '@/components/sections/TechStack'
import Projects from '@/components/sections/Projects'
import WorkExperience from '@/components/sections/WorkExperience'
import Education from '@/components/sections/Education'
import Certifications from '@/components/sections/Certifications'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'
import ScrollToTopButton from '@/components/common/ScrollToTopButton'
import Footer from '@/components/sections/Footer'
import Navigation from '@/components/navigation/Navigation'

const App = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Navigation />

      <main>
        <HeroSection />
        <TechStack />
        <Projects />
        <WorkExperience />
        <Education />
        <Certifications />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />

      <ScrollToTopButton />
    </div>
  )
}

export default App
