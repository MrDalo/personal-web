'use client'

import { useState } from 'react'
import MobileMenu from './MobileMenu'
import NavBar from './NavBar'

const navigationItems = [
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <NavBar
        navigationItems={navigationItems}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
        onScrollToSection={scrollToSection}
      />
      <MobileMenu
        navigationItems={navigationItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onScrollToSection={scrollToSection}
      />
    </>
  )
}

export default Navigation
