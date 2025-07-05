'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Mail, Github, Linkedin } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/MrDalo',
    color: 'hover:text-gray-600 dark:hover:text-gray-400',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://sk.linkedin.com/in/dalibor-kralik',
    color: 'hover:text-blue-600 dark:hover:text-blue-400',
  },
]

const ContactSection = () => {
  return (
    <section id='contact' className='py-20 px-6'>
      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='mb-4'>Let&apos;s Work Together</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Have a project in mind or want to discuss opportunities? I&apos;d
            love to hear from you.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className='h-full'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Mail className='h-5 w-5' />
                  Get In Touch
                </CardTitle>
                <CardDescription>
                  Ready to start a conversation? Send me an email and I&apos;ll
                  get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  size='lg'
                  className='w-full'
                  onClick={() => window.open('mailto:dadokralik@gmail.com')}
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className='h-full'>
              <CardHeader>
                <CardTitle>Connect Online</CardTitle>
                <CardDescription>
                  Follow my work and connect with me on social media platforms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex gap-4'>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant='outline'
                        size='icon'
                        className={`h-12 w-12 transition-colors ${social.color}`}
                        onClick={() => window.open(social.url, '_blank')}
                      >
                        <social.icon className='h-5 w-5' />
                        <span className='sr-only'>{social.name}</span>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
