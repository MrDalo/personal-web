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
import { Calendar, MapPin, Building2 } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Front-End Developer',
    company: 'Deutsche Telekom Services Europe',
    location: 'Brno, Czech Republic',
    duration: '01/2024 - Present',
    description:
      'Part of the AI Shared Services team, built an internal chatbot app scaled to hundreds of users. Acted as main front-end developer and collaborated with AI researchers and data scientists to deliver cutting-edge solutions.',
    tech: [
      'React',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Framer Motion',
      'Radix UI',
      'React Query',
      'Storybook',
      'Zod',
      'React Hook Form',
      'Vitest',
      'Cypress',
      'Lighthouse',
      'Jest',
    ],
    achievements: [
      'Built and scaled internal chatbot app to hundreds of active users',
      'Served as main front-end developer for AI-powered applications',
      'Collaborated with AI researchers and data scientists on innovative solutions',
      'Implemented comprehensive testing strategy with Vitest and Cypress',
    ],
  },
  {
    id: 2,
    title: 'SAP BW Software Developer',
    company: 'CVIS BUT',
    location: 'Brno, Czech Republic',
    duration: '02/2022 - 12/2023',
    description:
      'Collaborated with the data department and 11 university faculties on enterprise data solutions. Worked extensively with OLAP, data cubes, and ETL pipelines to process and analyze large datasets.',
    tech: [
      'SAP BW/4HANA',
      'SAP Business Warehouse',
      'SAP Business Objects',
      'ABAP',
      'SQLScript',
    ],
    achievements: [
      'Collaborated with data department across 11 university faculties',
      'Developed and maintained OLAP cubes for complex data analysis',
      'Implemented ETL pipelines for large-scale data processing',
      'Gained expertise in enterprise-level data warehouse solutions',
    ],
  },
  {
    id: 3,
    title: 'Project Assistant',
    company: 'EduEra NGO',
    location: 'Remote',
    duration: '04/2020 - 09/2020',
    description:
      'Co-wrote Erasmus+ projects with Ukrainian youth organizations and led project development and planning. Gained valuable experience in international project management and cross-cultural collaboration.',
    tech: [
      'Project Management',
      'International Collaboration',
      'Grant Writing',
      'Erasmus+',
    ],
    achievements: [
      'Co-wrote successful Erasmus+ projects with Ukrainian organizations',
      'Led project development and strategic planning initiatives',
      'Gained experience in international project management',
      'Developed cross-cultural collaboration skills',
    ],
  },
]

const WorkExperience = () => {
  return (
    <section id='experience' className='py-20 px-6 bg-muted/20'>
      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='mb-4'>Work Experience</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            My professional journey from NGO project work to enterprise software
            development
          </p>
        </motion.div>

        <div className='space-y-8'>
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='relative'
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className='absolute left-6 top-14 w-0.5 h-full bg-border -translate-x-1/2 hidden md:block' />
              )}

              {/* Timeline Dot */}
              <div className='absolute left-6 top-8 w-3 h-3 bg-primary rounded-full -translate-x-1/2 z-10 hidden md:block' />

              <Card className='ml-0 md:ml-16 hover:shadow-lg transition-all duration-300'>
                <CardHeader>
                  <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2'>
                    <CardTitle className='text-xl'>
                      {experience.title}
                    </CardTitle>
                    <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                      <Calendar className='h-4 w-4' />
                      {experience.duration}
                    </div>
                  </div>
                  <CardDescription className='flex items-center gap-2 text-base'>
                    <Building2 className='h-4 w-4 text-blue-600 dark:text-blue-400' />
                    <span className='font-medium text-foreground'>
                      {experience.company}
                    </span>
                    <span className='text-muted-foreground'>•</span>
                    <span className='flex items-center gap-1'>
                      <MapPin className='h-4 w-4' />
                      {experience.location}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <p className='text-muted-foreground leading-relaxed'>
                    {experience.description}
                  </p>

                  {/* Key Achievements */}
                  <div>
                    <h4 className='mb-2 text-sm font-medium'>
                      Key Achievements:
                    </h4>
                    <ul className='space-y-1 text-sm text-muted-foreground'>
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className='flex items-start gap-2'>
                          <span className='w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0' />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className='mb-3 text-sm font-medium'>
                      Technologies & Tools:
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {experience.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant='secondary'
                          className='text-xs px-2 py-1'
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
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

export default WorkExperience
