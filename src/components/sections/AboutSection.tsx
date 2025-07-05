'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section id='about' className='py-20 px-4 bg-muted/30'>
      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='mb-4'>About Me</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Passionate about creating exceptional digital experiences
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='relative'
          >
            <div className='aspect-square rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0 relative'>
              {/* Background decoration */}
              <div className='absolute -inset-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl -z-10' />
              <div className='absolute -inset-2 bg-gradient-to-br from-blue-200/50 to-purple-200/50 dark:from-blue-800/30 dark:to-purple-800/30 rounded-2xl -z-10' />

              <Image
                src='/university-photo.avif'
                fill
                alt='Dalibor Králik'
                className='w-full h-full object-cover object-center rounded-2xl shadow-xl'
              />

              {/* Floating elements */}
              <motion.div
                className='absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-80'
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className='absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-70'
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            <div>
              <h3 className='mb-4'>My Journey</h3>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                With over 5 years of experience in front-end development,
                I&apos;ve had the privilege of working with startups and
                established companies across Central Europe to bring their
                digital visions to life. My passion lies in creating interfaces
                that are not just visually appealing, but also highly functional
                and accessible.
              </p>
              <p className='text-muted-foreground leading-relaxed'>
                Based in Slovakia, I believe in writing clean, maintainable code
                and staying up-to-date with the latest technologies and best
                practices. When I&apos;m not coding, you can find me exploring
                new design trends, contributing to open-source projects, or
                mentoring aspiring developers in my community.
              </p>
            </div>

            <div>
              <h4 className='mb-3'>What I Focus On</h4>
              <ul className='space-y-3 text-muted-foreground'>
                <motion.li
                  className='flex items-center group cursor-default'
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span className='w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform' />
                  Performance optimization and Core Web Vitals
                </motion.li>
                <motion.li
                  className='flex items-center group cursor-default'
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span className='w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform' />
                  Accessible and inclusive design
                </motion.li>
                <motion.li
                  className='flex items-center group cursor-default'
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span className='w-2 h-2 bg-cyan-500 rounded-full mr-3 group-hover:scale-125 transition-transform' />
                  Modern React patterns and TypeScript
                </motion.li>
                <motion.li
                  className='flex items-center group cursor-default'
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span className='w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform' />
                  Smooth animations and micro-interactions
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
