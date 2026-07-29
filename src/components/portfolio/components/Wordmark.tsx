const wordmarkClass =
  'w-max text-[1.4rem] font-[850] tracking-[-0.08em] [&>span]:relative [&>span]:top-[-0.65em] [&>span]:ml-1 [&>span]:font-mono [&>span]:text-[0.45em] [&>span]:tracking-normal [&>span]:text-acid'

type WordmarkProps = {
  href?: string
  label?: string
}

const Wordmark = ({ href = '#top', label }: WordmarkProps) => (
  <a className={wordmarkClass} href={href} aria-label={label}>
    DK<span>®</span>
  </a>
)

export default Wordmark
