import { capabilities } from '../data/portfolio-data'
import {
  sectionClass,
  sectionKickerClass,
  sectionTitleClass,
  tagClass,
  tagListClass,
} from '../styles/portfolio-styles'

const CapabilitiesSection = () => (
  <section
    className={`${sectionClass} grid grid-cols-1 gap-[clamp(3rem,9vw,10rem)] min-[1025px]:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]`}
  >
    <div
      className='static self-start min-[1025px]:sticky min-[1025px]:top-28'
      data-reveal
    >
      <p className={`${sectionKickerClass} mb-[1.4rem] text-muted`}>
        What I bring
      </p>
      <h2 className={`${sectionTitleClass} text-[clamp(3rem,5.4vw,5.5rem)]`}>
        Engineering depth.
        <br />
        Product judgment.
      </h2>
      <p className='mt-8 mb-0 max-w-[470px] leading-[1.7] text-muted'>
        I care about the engineering behind a calm interface: sound
        architecture, semantics, performance, testability, and systems a team
        can confidently evolve.
      </p>
    </div>

    <div className='border-t border-ink'>
      {capabilities.map((capability) => (
        <article
          className='grid grid-cols-[2rem_1fr] gap-4 border-b border-ink py-[clamp(2rem,4vw,4rem)] min-[561px]:grid-cols-[3rem_1fr]'
          key={capability.index}
          data-capability
        >
          <span className='font-mono text-[0.67rem] text-muted'>
            {capability.index}
          </span>
          <div>
            <h3 className='mt-0 mb-4 text-[clamp(1.8rem,3.2vw,3.2rem)] font-[560] tracking-[-0.055em]'>
              {capability.title}
            </h3>
            <p className='mt-0 mb-[1.8rem] max-w-[590px] leading-[1.65] text-muted'>
              {capability.text}
            </p>
            <ul className={tagListClass}>
              {capability.tools.map((tool) => (
                <li className={tagClass} key={tool}>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default CapabilitiesSection
