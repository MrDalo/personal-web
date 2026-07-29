import Link from 'next/link'
import Wordmark from './Wordmark'

const SiteFooter = () => (
  <footer className='grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-3 bg-ink px-[max(clamp(1rem,4vw,4.5rem),calc((100vw-90rem)/2+4.5rem))] py-6 text-paper min-[561px]:grid-cols-[1fr_auto_1fr]'>
    <Wordmark />
    <div className='col-span-full row-start-2 flex items-center gap-3 font-mono text-[0.58rem] tracking-[0.03em] text-paper/55 uppercase min-[561px]:col-span-1 min-[561px]:col-start-2 min-[561px]:row-start-1'>
      <span className='hidden min-[761px]:inline'>
        Designed and engineered with care.
      </span>
      <span
        className='hidden text-paper/25 min-[761px]:inline'
        aria-hidden='true'
      >
        /
      </span>
      <Link
        className='underline decoration-paper/30 underline-offset-4 transition-colors hover:text-acid'
        href='/privacy'
      >
        Privacy
      </Link>
    </div>
    <p className='m-0 justify-self-end font-mono text-[0.58rem] tracking-[0.03em] text-paper/55 uppercase'>
      © {new Date().getFullYear()} Dalibor Králik
    </p>
  </footer>
)

export default SiteFooter
