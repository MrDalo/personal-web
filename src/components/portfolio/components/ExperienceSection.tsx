import { MapPin } from 'lucide-react'
import { experiences } from '../data/portfolio-data'
import {
  sectionKickerClass,
  sectionTitleClass,
} from '../styles/portfolio-styles'

const experienceContentClass =
  'mx-auto w-full max-w-[calc(90rem-2*clamp(1rem,4vw,4.5rem))]'

const ExperienceSection = () => (
  <section
    id='experience'
    className='w-full max-w-none bg-ink px-[clamp(1rem,4vw,4.5rem)] py-[clamp(6rem,11vw,10rem)] text-paper'
  >
    <div
      className={`${experienceContentClass} mb-[clamp(3rem,7vw,6.5rem)] grid grid-cols-1 items-end gap-6 min-[1025px]:grid-cols-[minmax(0,1.7fr)_minmax(260px,0.55fr)] min-[1025px]:gap-16`}
      data-reveal
    >
      <div>
        <p className={`${sectionKickerClass} mb-[1.4rem] text-paper/55`}>
          Experience / trajectory
        </p>
        <h2 className={sectionTitleClass}>
          Building at the intersection of product, systems, and AI.
        </h2>
      </div>
      <p className='m-0 text-[0.96rem] leading-[1.65] text-paper/55'>
        From enterprise data to AI products and technical leadership, the
        through-line is dependable delivery across complex systems.
      </p>
    </div>

    <div className={`${experienceContentClass} border-t border-paper/25`}>
      {experiences.map((experience, index) => (
        <article
          className='grid grid-cols-[2.5rem_1fr] gap-[clamp(1rem,3vw,3.5rem)] border-b border-paper/25 py-[clamp(2.2rem,5vw,4.5rem)] max-[560px]:grid-cols-[2rem_1fr] min-[1025px]:grid-cols-[0.2fr_0.7fr_1.2fr_1fr]'
          key={experience.company}
          data-reveal
        >
          <div className='font-mono text-[0.7rem] text-acid'>0{index + 1}</div>
          <div className='col-start-2 flex flex-row flex-wrap gap-[1.2rem] font-mono text-[0.63rem] tracking-[0.03em] text-paper/52 uppercase min-[1025px]:col-start-auto min-[1025px]:flex-col'>
            <span>{experience.period}</span>
            <span className='flex items-start gap-[0.4rem] max-[560px]:w-full'>
              <MapPin aria-hidden='true' />
              {experience.location}
            </span>
          </div>
          <div className='col-start-2 min-[1025px]:col-start-auto'>
            <p className='mt-0 mb-2 text-[0.75rem] font-[650] text-acid'>
              {experience.company}
            </p>
            <h3 className='mt-0 mb-[1.4rem] text-[clamp(1.8rem,3.2vw,3.4rem)] leading-[1.02] font-[550] tracking-[-0.055em]'>
              {experience.role}
            </h3>
            <p className='m-0 max-w-[560px] text-[0.9rem] leading-[1.65] text-paper/62'>
              {experience.summary}
            </p>
          </div>
          <ul className='col-start-2 m-0 list-none p-0 text-[0.78rem] leading-[1.55] text-paper/72 min-[1025px]:col-start-auto'>
            {experience.highlights.map((highlight) => (
              <li
                className='relative pb-[0.9rem] pl-4 before:absolute before:left-0 before:text-acid before:content-["·"]'
                key={highlight}
              >
                {highlight}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
)

export default ExperienceSection
