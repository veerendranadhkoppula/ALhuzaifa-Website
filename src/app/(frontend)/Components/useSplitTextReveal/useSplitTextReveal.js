'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export const useSplitTextReveal = (ref) => {
  useEffect(() => {
    if (!ref.current) return

    let split
    let ctx

    const init = () => {
      if (split) split.revert()
      if (ctx) ctx.revert()

      gsap.set(ref.current, { visibility: 'hidden' })

      ctx = gsap.context(() => {
        split = new SplitType(ref.current, {
          types: 'lines',
          tagName: 'span',
        })

        split.lines.forEach((line) => {
          line.style.display = 'block'
          line.style.overflow = 'hidden'
        })

        // Set lines to their hidden start position
        gsap.set(split.lines, { yPercent: 120, opacity: 0, willChange: 'transform' })

        // Now reveal the container — lines are already off-screen so nothing visible
        gsap.set(ref.current, { visibility: 'visible' })

        // Use fromTo so GSAP doesn't re-snapshot the "from" state
        gsap.fromTo(
          split.lines,
          { yPercent: 120, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power4.out',
            stagger: { each: 0.12 },
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 85%',
            },
          },
        )
      })
    }

    document.fonts.ready.then(() => {
      init()
    })

    const ro = new ResizeObserver(() => {
      ScrollTrigger.refresh()
      init()
    })
    ro.observe(ref.current)

    return () => {
      ro.disconnect()
      if (split) split.revert()
      if (ctx) ctx.revert()
    }
  }, [ref])
}
