import React, { useEffect, useState } from 'react'

type Props = { end: number; suffix?: string }

const CountUp = ({ end, suffix = '' }: Props) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0
      const increment = end / 30
      const counter = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(counter)
        } else {
          setCount(Math.floor(start))
        }
      }, 50)
      return () => clearInterval(counter)
    }, 500)

    return () => clearTimeout(timer)
  }, [end])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default CountUp
