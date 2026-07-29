'use client'

import { useRef } from 'react'
import { ArrowUpRight, Github } from 'lucide-react'
import { projects } from '../data/portfolio-data'
import useProjectAnimations from '../hooks/useProjectAnimations'
import {
  sectionClass,
  sectionKickerClass,
  sectionTitleClass,
  tagClass,
  tagListClass,
} from '../styles/portfolio-styles'

const projectToneClasses = {
  acid: 'bg-acid',
  paper:
    'bg-[#ddd7ca] bg-[radial-gradient(circle_at_20%_20%,rgba(18,18,18,0.08)_1px,transparent_1px)] bg-[length:10px_10px]',
  violet: 'bg-violet',
  blue: 'bg-blue',
} as const

const projectLayoutClasses = [
  'min-[1025px]:col-span-7',
  'min-[1025px]:col-span-5 min-[1025px]:mt-[clamp(4rem,10vw,10rem)]',
  'min-[1025px]:col-span-5',
  'min-[1025px]:col-span-7 min-[1025px]:mt-[clamp(3rem,7vw,7rem)]',
  'min-[1025px]:col-span-6',
  'min-[1025px]:col-span-6',
] as const

type Project = (typeof projects)[number]

type ProjectCardProps = {
  project: Project
  layoutClass: string
}

const ProjectCard = ({ project, layoutClass }: ProjectCardProps) => (
  <article
    className={`col-span-full min-w-0 border-t border-ink ${layoutClass}`}
    data-project
  >
    <div
      className={`relative grid min-h-[min(74vw,520px)] origin-center overflow-hidden p-[clamp(1rem,2vw,2rem)] will-change-transform min-[1025px]:min-h-[clamp(300px,37vw,570px)] ${projectToneClasses[project.tone]}`}
      data-project-visual
    >
      <div
        className='absolute inset-4 border border-ink/28 min-[561px]:inset-8'
        aria-hidden='true'
      >
        <span className='absolute inset-x-0 top-1/2 h-px bg-ink/22' />
        <span className='absolute inset-y-0 left-1/2 w-px bg-ink/22' />
      </div>
      <span className='relative z-1 self-start font-mono text-[0.66rem] tracking-[0.06em] uppercase'>
        {project.number}
      </span>
      <span className='relative z-1 self-start justify-self-end font-mono text-[0.66rem] tracking-[0.06em] uppercase'>
        {project.category}
      </span>
      <strong
        className='absolute top-1/2 left-1/2 z-1 -translate-x-1/2 -translate-y-1/2 font-serif text-[clamp(7rem,18vw,17rem)] leading-none font-normal tracking-[-0.12em] italic'
        aria-hidden='true'
      >
        {project.title.slice(0, 2)}
      </strong>
      <span className='relative z-1 self-end justify-self-end font-mono text-[0.66rem] tracking-[0.06em] uppercase'>
        {project.year}
      </span>
    </div>

    <div className='grid grid-cols-1 gap-6 pt-[1.3rem] min-[561px]:grid-cols-[1.1fr_1fr]'>
      <div>
        <p className='mt-0 mb-[0.45rem] font-mono text-[0.61rem] leading-[1.5] text-muted uppercase'>
          {project.result}
        </p>
        <h3 className='m-0 text-[clamp(1.7rem,3vw,3.2rem)] leading-none font-[620] tracking-[-0.055em]'>
          {project.title}
        </h3>
      </div>
      <p className='col-span-1 m-0 text-[0.88rem] leading-[1.6] text-muted'>
        {project.description}
      </p>
      <ul className={tagListClass} aria-label={`${project.title} technologies`}>
        {project.tech.map((tech) => (
          <li className={tagClass} key={tech}>
            {tech}
          </li>
        ))}
      </ul>

      {(project.liveUrl || project.githubUrl) && (
        <div className='col-span-full flex gap-4 border-t border-line pt-[0.8rem]'>
          {project.liveUrl && (
            <a
              className='inline-flex items-center gap-[0.4rem] text-[0.78rem] font-bold underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-180 hover:decoration-current'
              href={project.liveUrl}
              target='_blank'
              rel='noreferrer'
            >
              View project <ArrowUpRight aria-hidden='true' />
            </a>
          )}
          {project.githubUrl && (
            <a
              className='inline-flex items-center gap-[0.4rem] text-[0.78rem] font-bold underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-180 hover:decoration-current'
              href={project.githubUrl}
              target='_blank'
              rel='noreferrer'
              aria-label={`${project.title} source code on GitHub`}
            >
              <Github aria-hidden='true' /> Source
            </a>
          )}
        </div>
      )}
    </div>
  </article>
)

const ProjectsSection = () => {
  const rootRef = useRef<HTMLElement>(null)

  useProjectAnimations(rootRef)

  return (
    <section ref={rootRef} id='projects' className={sectionClass}>
      <div
        className='mb-[clamp(3rem,7vw,6.5rem)] grid grid-cols-1 items-end gap-6 min-[1025px]:grid-cols-[minmax(0,1.7fr)_minmax(260px,0.55fr)] min-[1025px]:gap-16'
        data-reveal
      >
        <div>
          <p className={`${sectionKickerClass} mb-[1.4rem] text-muted`}>
            Selected work / 2023–2026
          </p>
          <h2 className={sectionTitleClass}>
            Products I’ve helped bring to life.
          </h2>
        </div>
        <p className='m-0 text-[0.96rem] leading-[1.65] text-muted'>
          Selected research, client work, and independent products spanning
          Solana workflows, testing infrastructure, and production analytics.
        </p>
      </div>

      <div className='grid grid-cols-12 gap-x-0 gap-y-18 min-[1025px]:gap-x-[clamp(1rem,2.5vw,2.5rem)] min-[1025px]:gap-y-[clamp(1.5rem,4vw,4rem)]'>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            layoutClass={projectLayoutClasses[index]}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
