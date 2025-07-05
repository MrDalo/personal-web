'use client'

import { motion } from 'framer-motion'

interface NavigationItem {
  label: string
  id: string
}

interface NavBarProps {
  navigationItems: NavigationItem[]
  isMobileMenuOpen: boolean
  onToggleMobileMenu: () => void
  onScrollToSection: (sectionId: string) => void
}

const NavBar = ({
  navigationItems,
  isMobileMenuOpen,
  onToggleMobileMenu,
  onScrollToSection,
}: NavBarProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.nav
      className='fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className='max-w-6xl mx-auto px-6 py-4'>
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
                onClick={() => onScrollToSection(item.id)}
                className='text-muted-foreground hover:text-foreground transition-colors cursor-pointer'
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className='md:hidden relative w-6 h-6 flex flex-col justify-center items-center'
            onClick={onToggleMobileMenu}
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
  )
}

export default NavBar
