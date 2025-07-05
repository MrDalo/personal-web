'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Code, Wrench, TestTube, Palette } from 'lucide-react'

const skillCategories = [
  {
    category: 'Languages',
    icon: Code,
    skills: [
      'JavaScript',
      'TypeScript',
      'C++',
      'C#',
      'Python',
      'CSS',
      'PHP',
      'Bash',
      'SQL',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Frameworks & Tools',
    icon: Wrench,
    skills: [
      'React',
      'Next.js',
      'Vite.js',
      'TailwindCSS',
      'Framer Motion',
      'Zod',
      'Tanstack Query',
      'Radix UI',
      'Git',
      'Docker',
      'React Hook Form',
      'CI/CD',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Testing & Dev Tools',
    icon: TestTube,
    skills: [
      'Vitest',
      'Cypress',
      'Jest',
      'React Testing Library',
      'Storybook',
      'Lighthouse',
      'Next-Auth',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Design & Other',
    icon: Palette,
    skills: ['Figma', 'LottieFiles', 'Solana Web3.js', 'PostgreSQL'],
    color: 'from-orange-500 to-red-500',
  },
]

const TechStack = () => {
  return (
    <section data-tech-stack className='py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='mb-4'>Tech Stack & Skills</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Technologies and tools I use to build modern web applications
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className='h-full hover:shadow-lg transition-all duration-300 group'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-3'>
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white group-hover:scale-110 transition-transform`}
                    >
                      <category.icon className='h-5 w-5' />
                    </div>
                    {category.category}
                  </CardTitle>
                  <CardDescription>
                    {category.category === 'Languages' &&
                      'Programming languages I work with'}
                    {category.category === 'Frameworks & Tools' &&
                      'Frontend frameworks and development tools'}
                    {category.category === 'Testing & Dev Tools' &&
                      'Testing frameworks and development utilities'}
                    {category.category === 'Design & Other' &&
                      'Design tools and additional technologies'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='flex flex-wrap gap-2'>
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant='secondary'
                          className='text-xs px-3 py-1 hover:shadow-md transition-all duration-200 cursor-default'
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
