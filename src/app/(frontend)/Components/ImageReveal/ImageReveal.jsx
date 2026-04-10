'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './ImageReveal.module.css'

gsap.registerPlugin(ScrollTrigger)

const ImageReveal = ({ children, className = '' }) => {
  const wrapperRef = useRef(null)
  const shineRef = useRef(null)

useEffect(() => {
    const wrapper = wrapperRef.current
    const block = shineRef.current
    if (!wrapper || !block) return

    const child = wrapper.firstElementChild
    gsap.set(child, { scale: 1.15 })
    gsap.set(block, { x: '-101%' })

    ScrollTrigger.create({
      trigger: wrapper,
      start: 'top 82%',
      once: true,
      onEnter: () => {
        gsap.timeline()
          // block slides IN covering nothing (image hidden behind)
          .to(block, {
            x: '0%',
            duration: 0.55,
            ease: 'power3.inOut',
          })
          // block slides OUT revealing image + image unscales
          .to(block, {
            x: '101%',
            duration: 0.55,
            ease: 'power3.inOut',
          })
          .to(child, {
            scale: 1,
            duration: 0.55,
            ease: 'power3.out',
          }, '-=0.55')
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])
  return (
      <div ref={wrapperRef} className={`${styles.wrapper} ${className}`}>
      {children}
      <div ref={shineRef} className={styles.shine} />
    </div>
  )
}

export default ImageReveal