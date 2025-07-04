'use client'

import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from '@/components/sections/HeroSection'
import TechStack from '@/components/sections/TechStack'
import Projects from '@/components/sections/Projects'
import WorkExperience from '@/components/sections/WorkExperience'
import Education from '@/components/sections/Education'
import Certifications from '@/components/sections/Certifications'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'about') {
      document
        .querySelector('[data-about]')
        ?.scrollIntoView({ behavior: 'smooth' })
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navigationItems = [
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <div className='min-h-screen bg-background'>
      {/* Navigation */}
      <motion.nav
        className='fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50'
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className='max-w-6xl mx-auto px-4 py-4'>
          <div className='flex justify-between items-center'>
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className='cursor-pointer'
            >
              <span className='text-lg font-medium'>DK</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8'>
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className='text-muted-foreground hover:text-foreground transition-colors cursor-pointer'
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className='md:hidden relative w-6 h-6 flex flex-col justify-center items-center'
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className='w-6 h-0.5 bg-foreground rounded-full absolute'
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 0 : -6,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className='w-6 h-0.5 bg-foreground rounded-full absolute'
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className='w-6 h-0.5 bg-foreground rounded-full absolute'
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? 0 : 6,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className='fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background border-l border-border/50 z-50 md:hidden'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className='flex flex-col h-full'>
                {/* Menu Header */}
                <div className='flex items-center justify-between p-6 border-b border-border/50'>
                  <span className='text-lg font-medium'>Navigation</span>
                  <motion.button
                    className='relative w-6 h-6 flex flex-col justify-center items-center'
                    onClick={toggleMobileMenu}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.span
                      className='w-6 h-0.5 bg-foreground rounded-full absolute'
                      animate={{ rotate: 45 }}
                    />
                    <motion.span
                      className='w-6 h-0.5 bg-foreground rounded-full absolute'
                      animate={{ rotate: -45 }}
                    />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <div className='flex-1 px-6 py-8'>
                  <div className='space-y-6'>
                    {navigationItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className='block w-full text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors'
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        whileHover={{ x: 8 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Menu Footer */}
                <div className='p-6 border-t border-border/50'>
                  <motion.div
                    className='text-center'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <p className='text-sm text-muted-foreground mb-2'>
                      Dalibor Králik
                    </p>
                    <p className='text-xs text-muted-foreground'>
                      Front-end Developer
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main>
        <HeroSection />
        <TechStack />
        <Projects />
        <WorkExperience />
        <Education />
        <Certifications />
        <div data-about>
          <AboutSection />
        </div>
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className='py-12 px-4 border-t border-border/50'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className='text-muted-foreground mb-4'>
              Built with React, Next.js, and Framer Motion
            </p>
            <p className='text-sm text-muted-foreground'>
              © 2025 Dalibor Králik. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.div
        className='fixed bottom-8 right-8 z-50'
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <Button
          variant='outline'
          size='icon'
          className='h-12 w-12 rounded-full shadow-lg cursor-pointer bg-background/80 hover:scale-110 backdrop-blur-sm hover:bg-background/90 transition-all duration-300'
          onClick={scrollToTop}
        >
          <ArrowUp className='h-4 w-4' />
        </Button>
      </motion.div>
    </div>
  )
}

export default App
