import { skillLoop } from '../data/portfolio-data'

const SkillsMarquee = () => (
  <section
    className='overflow-hidden border-y border-ink bg-acid'
    aria-label='Core skills'
  >
    <div className='flex w-max py-4 will-change-transform' data-marquee-track>
      {[0, 1].map((loop) => (
        <div key={loop} className='flex shrink-0' aria-hidden={loop === 1}>
          {skillLoop.map((skill) => (
            <span
              className='flex items-center gap-6 pr-6 text-[clamp(1.1rem,2.1vw,1.8rem)] font-[750] tracking-[-0.04em] whitespace-nowrap [&>i]:font-serif [&>i]:text-[0.75em] [&>i]:not-italic'
              key={`${loop}-${skill}`}
            >
              {skill}
              <i aria-hidden='true'>✳</i>
            </span>
          ))}
        </div>
      ))}
    </div>
  </section>
)

export default SkillsMarquee
