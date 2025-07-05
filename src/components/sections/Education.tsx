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
import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react'
import Link from 'next/link'

const education = [
  {
    id: 1,
    degree: "Master's Degree",
    program: 'Software Engineering – Design & Development of Software Systems',
    school: 'Masaryk University',
    faculty: 'Faculty of Informatics',
    location: 'Brno, Czech Republic',
    duration: '2023 - 2025',
    status: 'Completed',
    description:
      'Advanced software engineering program focusing on system design, software architecture, and development methodologies.',
  },
  {
    id: 2,
    degree: "Bachelor's Degree",
    program: 'Information Technology',
    school: 'Brno University of Technology',
    faculty: 'Faculty of Information Technology',
    location: 'Brno, Czech Republic',
    duration: '2020 - 2023',
    status: 'Completed',
    award: "Rector's Award for Outstanding Academic Performance",
    description:
      'Comprehensive IT program covering programming, algorithms, databases, and software development fundamentals.',
  },
]

const Education = () => {
  return (
    <section id='education' className='py-20 px-6'>
      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='mb-4'>Education</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            My academic journey in computer science and software engineering
          </p>
        </motion.div>

        <div className='space-y-8'>
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='relative'
            >
              {/* Timeline Line */}
              {index < education.length - 1 && (
                <div className='absolute left-6 top-10 w-0.5 h-full bg-border -translate-x-1/2 hidden md:block' />
              )}

              {/* Timeline Dot */}
              <div className='absolute left-6 top-4 w-3 h-3 bg-primary rounded-full -translate-x-1/2 z-10 hidden md:block' />

              <Card className='ml-0 md:ml-16 hover:shadow-lg transition-all duration-300'>
                <CardHeader>
                  <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2'>
                    <div className='space-y-1'>
                      <CardTitle className='text-xl flex items-center gap-2'>
                        <GraduationCap className='h-5 w-5 text-blue-600 dark:text-blue-400' />
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className='text-base font-medium text-foreground'>
                        {edu.program}
                      </CardDescription>
                    </div>
                    <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                      <Calendar className='h-4 w-4' />
                      {edu.duration}
                    </div>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2 text-sm'>
                      <span className='font-medium text-foreground'>
                        {edu.school}
                      </span>
                      <span className='text-muted-foreground'>•</span>
                      <span className='text-muted-foreground'>
                        {edu.faculty}
                      </span>
                    </div>
                    <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                      <MapPin className='h-4 w-4' />
                      {edu.location}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className='space-y-4'>
                  <p className='text-muted-foreground leading-relaxed'>
                    {edu.description}
                  </p>

                  <div className='flex flex-wrap gap-2 items-center'>
                    <Badge
                      variant={
                        edu.status === 'Completed' ? 'default' : 'secondary'
                      }
                      className='text-xs'
                    >
                      {edu.status}
                    </Badge>

                    {edu.award && (
                      <div className='inline-flex items-center gap-1 px-2 py-1 text-xs bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 text-yellow-800 dark:from-yellow-900/20 dark:to-orange-900/20 dark:border-yellow-800 dark:text-yellow-200 rounded-md max-w-full'>
                        <Award className='h-3 w-3 flex-shrink-0' />
                        <span className='break-words'>{edu.award}</span>
                      </div>
                    )}
                  </div>

                  {edu.award && (
                    <div className='mt-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 rounded-lg border border-yellow-200 dark:border-yellow-800'>
                      <Link
                        href='https://www.vut.cz/vut/aktuality-f19528/rektor-ocenil-na-24-akademickem-shromazdeni-vyznamne-osobnosti-vut-d245507'
                        className='flex items-center gap-2 text-sm'
                        target='_blank'
                      >
                        <Award className='h-4 w-4 text-yellow-600 dark:text-yellow-400' />
                        <span className='font-medium text-yellow-800 dark:text-yellow-200'>
                          Recognition for Outstanding Academic Achievement
                        </span>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
