import { motion } from 'framer-motion'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-12 px-4 border-t border-border/50'>
      <div className='max-w-4xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className='text-sm text-muted-foreground'>
            © 2025 Dalibor Králik. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
