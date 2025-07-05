import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

const ScrollToTopButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
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
        aria-label='Scroll to top'
        className='h-12 w-12 rounded-full shadow-lg cursor-pointer bg-background/80 hover:scale-110 backdrop-blur-sm hover:bg-background/90 transition-all duration-300'
        onClick={scrollToTop}
      >
        <ArrowUp className='h-4 w-4' />
      </Button>
    </motion.div>
  )
}

export default ScrollToTopButton
