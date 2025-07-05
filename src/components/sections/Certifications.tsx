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
import { Award, Languages, User, Calendar } from 'lucide-react'

const certifications = [
  {
    id: 1,
    title: "BUT Rector's Award",
    description:
      "Recognition for outstanding academic performance among bachelor's students",
    organization: 'Brno University of Technology',
    year: '2023',
    icon: Award,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 2,
    title: 'Multiple Youthpass Certificates',
    description:
      'International Erasmus+ project certifications for youth work and collaboration',
    organization: 'European Commission',
    year: '2017-2023',
    icon: User,
    color: 'from-blue-500 to-purple-500',
  },
  {
    id: 3,
    title: 'Project Management Training',
    description:
      'Comprehensive training in project management methodologies and best practices',
    organization: 'IUVENTA',
    year: '2020',
    icon: Calendar,
    color: 'from-green-500 to-emerald-500',
  },
]

const languages = [
  {
    language: 'English',
    level: 'B2',
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  },
  {
    language: 'Czech',
    level: 'C1',
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  },
  {
    language: 'German',
    level: 'A2',
    color:
      'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  },
  {
    language: 'Slovak',
    level: 'Native',
    color: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
  },
]

const Certifications = () => {
  return (
    <section id='certifications' className='py-20 px-4 bg-muted/20'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='mb-4'>Certifications & Awards</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Recognition for academic excellence and professional development
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
          {/* Certifications */}
          <div className='space-y-6'>
            <motion.h3
              className='text-xl font-medium mb-6'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Awards & Certifications
            </motion.h3>

            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className='hover:shadow-lg transition-all duration-300 group'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-3'>
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-br ${cert.color} text-white group-hover:scale-110 transition-transform`}
                      >
                        <cert.icon className='h-5 w-5' />
                      </div>
                      <div className='flex-1'>
                        <div className='flex items-center justify-between'>
                          <span>{cert.title}</span>
                          <Badge variant='outline' className='text-xs'>
                            {cert.year}
                          </Badge>
                        </div>
                      </div>
                    </CardTitle>
                    <CardDescription className='ml-11'>
                      <span className='block mb-1 font-medium text-foreground'>
                        {cert.organization}
                      </span>
                      {cert.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <div className='space-y-6'>
            <motion.h3
              className='text-xl font-medium mb-6'
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Languages
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className='hover:shadow-lg transition-all duration-300'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-3'>
                    <div className='p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white'>
                      <Languages className='h-5 w-5' />
                    </div>
                    Language Proficiency
                  </CardTitle>
                  <CardDescription>
                    Multilingual communication skills for international
                    collaboration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {languages.map((lang, index) => (
                      <motion.div
                        key={lang.language}
                        className='flex items-center justify-between p-3 rounded-lg bg-muted/50'
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <span className='font-medium'>{lang.language}</span>
                        <Badge
                          variant='secondary'
                          className={`text-xs ${lang.color}`}
                        >
                          {lang.level}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
