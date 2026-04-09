'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export const useSplitTextReveal = (ref) => {
  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {

      const split = new SplitType(ref.current, {
        types: 'lines',
        tagName: 'span',
      })


      split.lines.forEach((line) => {
        line.style.display = 'block'
        line.style.overflow = 'hidden'
      })


      gsap.set(split.lines, { willChange: 'transform' })

      gsap.from(split.lines, {
        yPercent: 120,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: {
          each: 0.12,
        },
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
        },
      })
    })

    return () => ctx.revert()
  }, [ref])
}
