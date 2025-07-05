'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download, Clock, Users, Code2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import CountUp from '../common/CountUp'
import Link from 'next/link'

const stats = [
  { number: 2, suffix: '+', label: 'Years Experience', icon: Clock },
  { number: 5, suffix: '+', label: 'React & Next.js Projects', icon: Code2 },
  { number: 2, suffix: '', label: 'Freelance Projects', icon: Users },
]

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const words = ['performant', 'beautiful', 'accessible', 'modern']
  const fullText =
    'I craft clean code and create interfaces that are not just visually stunning, but also highly functional and user-centered.'

  // Typewriter effect
  useEffect(() => {
    if (isTyping) {
      let currentIndex = 0
      const timer = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          setIsTyping(false)
          clearInterval(timer)
        }
      }, 30)
      return () => clearInterval(timer)
    }
  }, [isTyping])

  // Rotating words effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className='relative min-h-screen flex items-center justify-center md:px-12 px-6 py-20 overflow-hidden'>
      {/* Main Content */}
      <div className='relative max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
          {/* Left Column - Main Content */}
          <div className='lg:col-span-8 space-y-8'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Enhanced Typography */}
              <div className='space-y-4'>
                <motion.div
                  className='text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wider uppercase'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Front-end Developer
                </motion.div>

                <motion.h1
                  className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className='block mb-2'>Dalibor</span>
                  <span className='block text-4xl md:text-6xl lg:text-7xl text-muted-foreground'>
                    Králik
                  </span>
                </motion.h1>

                <motion.div
                  className='text-2xl md:text-3xl font-medium text-muted-foreground'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Creating{' '}
                  <motion.span
                    key={currentWord}
                    className='text-blue-600 dark:text-blue-400'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {words[currentWord]}
                  </motion.span>{' '}
                  interfaces
                </motion.div>
              </div>

              {/* Typewriter Description */}
              <motion.div
                className='max-w-2xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className='text-lg md:text-xl text-muted-foreground leading-relaxed'>
                  {displayText}
                  <motion.span
                    className='inline-block w-0.5 h-5 bg-blue-600 ml-1'
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </p>
              </motion.div>

              {/* Enhanced Buttons */}
              <motion.div
                className='flex flex-col sm:flex-row gap-4 mt-4'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='relative group'
                >
                  <Button
                    size='lg'
                    className='px-8 py-6 text-lg rounded-full cursor-pointer bg-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden'
                    onClick={() =>
                      document
                        .getElementById('projects')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    <motion.div
                      className='absolute inset-0 bg-white/20'
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className='relative z-10 flex items-center'>
                      View My Work
                      <ArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
                    </span>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href='/Dalibor_kralik_CV.pdf'
                    download='Dalibor_kralik_CV.pdf'
                    className='inline-flex items-center justify-center px-8 py-2 text-lg rounded-full border-2 bg-background/50 transition-all duration-300 cursor-pointer'
                  >
                    <Download className='mr-2 h-5 w-5' />
                    Download CV
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Interactive Stats */}
          <div className='lg:col-span-4'>
            <motion.div
              className='grid grid-cols-2 gap-4'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className='bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 hover:bg-background/70 transition-all duration-300 group cursor-default'
                  whileHover={{ scale: 1.05, y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                >
                  <div className='flex items-center justify-between mb-2'>
                    <stat.icon className='h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform' />
                    <motion.div
                      className='text-2xl font-bold text-foreground'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2 + index * 0.1, type: 'spring' }}
                    >
                      <CountUp end={stat.number} suffix={stat.suffix} />
                    </motion.div>
                  </div>
                  <div className='text-xs text-muted-foreground font-medium'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
