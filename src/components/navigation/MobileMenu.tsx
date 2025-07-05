'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface NavigationItem {
  label: string
  id: string
}

interface MobileMenuProps {
  navigationItems: NavigationItem[]
  isOpen: boolean
  onClose: () => void
  onScrollToSection: (sectionId: string) => void
}

const MobileMenu = ({
  navigationItems,
  isOpen,
  onClose,
  onScrollToSection,
}: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
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
                  className='relative w-6 h-6 flex flex-col justify-center items-center cursor-pointer'
                  onClick={onClose}
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
                      onClick={() => onScrollToSection(item.id)}
                      className='block w-full text-left text-lg font-medium cursor-pointer text-muted-foreground hover:text-foreground transition-colors'
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
  )
}

export default MobileMenu
