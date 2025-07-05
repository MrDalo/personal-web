'use client'

import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ExternalLink,
  Github,
  Users,
  Zap,
  BarChart,
  Calendar,
  ShieldCheck,
} from 'lucide-react'
import { ImageWithFallback } from '../common/ImageWIthFallback'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'CryptoForge',
    description:
      'Web3 application for interacting with the Solana blockchain. Features token minting, burning, and multisend functionality with a beautiful, responsive interface.',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=center',
    tech: [
      'Next.js',
      'Solana Web3.js',
      'Tanstack Query',
      'Framer Motion',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
      'React Query',
    ],
    liveUrl: 'https://crypto-forge-app.vercel.app/token-creator',
    githubUrl: '',
    icon: Zap,
    category: 'Web3 App',
  },
  {
    id: 2,
    title: 'Front-end Testing Framework',
    description:
      'Comprehensive master thesis on modern front-end testing methodologies. Created a complete testing framework including a detailed PDF guide covering testing strategies, best practices, and code examples, plus a ready-to-use Next.js template with pre-configured testing environments for all testing phases.',
    image: '/front-end-framework-project.avif',
    tech: [
      'Next.js',
      'TypeScript',
      'React',
      'Vitest',
      'React Testing Library',
      'Cypress',
      'Lighthouse',
    ],
    liveUrl:
      'https://www.researchgate.net/publication/389435761_Front-end_Testing_Framework_A_Practical_Guide',
    githubUrl:
      'https://github.com/MrDalo/frontend-testing-framework/tree/master',
    icon: ShieldCheck,
    category: 'Master thesis',
  },
  {
    id: 3,
    title: 'Statsly.app',
    description:
      'Social media analytics platform with OAuth2 integration and data-driven media kit generation. Provides comprehensive insights and analytics for content creators.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center',
    tech: [
      'Next.js',
      'PostgreSQL',
      'Tanstack Query',
      'TypeScript',
      'OAuth2',
      'Prisma',
      'Shadcn UI',
      'Tailwind CSS',
    ],
    liveUrl: 'https://statsly.vercel.app/',
    githubUrl: '',
    icon: BarChart,
    category: 'Analytics Platform',
  },

  {
    id: 4,
    title: 'BrainFree v2',
    description:
      'Full-stack priority management application built with a team of 3 developers. Features advanced task organization, collaboration tools, and intelligent priority suggestions.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center',
    tech: ['Next.js', 'TypeScript', 'React Query', 'Tailwind CSS', 'Zod'],
    liveUrl: 'https://brainfree-v2.vercel.app/',
    githubUrl: 'https://github.com/MrDalo/BrainfreeV2',
    icon: Users,
    category: 'Full-Stack App',
  },
  {
    id: 5,
    title: 'Dny AI 2022',
    description:
      'Scalable event landing page built from UI/UX designs. Features responsive design, smooth animations, and optimized performance for high-traffic events.',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=center',
    tech: ['HTML', 'Sass', 'JavaScript', 'PHP'],
    liveUrl: 'https://2022.dny-ai.cz/',
    githubUrl: '',
    icon: Calendar,
    category: 'Event Website',
  },
  {
    id: 6,
    title: 'JINAG Hackathon 2023',
    description:
      'Modern hackathon landing page designed and built from scratch. Features custom animations, responsive design, and engaging user experience.',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop&crop=center',
    tech: ['Figma', 'HTML', 'Sass', 'LottieFiles', 'Vite.js', 'JavaScript'],
    liveUrl: '',
    githubUrl: '',
    icon: Zap,
    category: 'Landing Page',
  },
]

const Projects = () => {
  return (
    <section id='projects' className='py-20 px-6 bg-muted/10'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='mb-4'>Featured Projects</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            A selection of projects showcasing my skills in front-end
            development, Web3, and full-stack applications
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className='group'
            >
              <Card className='overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full'>
                <div className='aspect-video overflow-hidden relative'>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                  <div className='absolute top-4 left-4'>
                    <Badge
                      variant='secondary'
                      className='text-xs bg-background/80 backdrop-blur-sm'
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <div className='absolute top-4 right-4'>
                    <div className='p-2 bg-background/80 backdrop-blur-sm rounded-full'>
                      <project.icon className='h-4 w-4 text-blue-600 dark:text-blue-400' />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className='flex items-center justify-between'>
                    {project.title}
                    <div className='flex gap-2'>
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={`Visit ${project.title} live website`}
                          className='h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 inline-flex items-center justify-center rounded-sm'
                        >
                          <ExternalLink className='h-4 w-4' />
                        </Link>
                      )}
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={`View ${project.title} source code on GitHub`}
                          className='h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 inline-flex items-center justify-center rounded-sm'
                        >
                          <Github className='h-4 w-4' />
                        </Link>
                      )}
                    </div>
                  </CardTitle>
                  <CardDescription className='leading-relaxed'>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className='pt-0'>
                  <div className='flex flex-wrap gap-2'>
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant='outline' className='text-xs'>
                        {tech}
                      </Badge>
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

export default Projects
