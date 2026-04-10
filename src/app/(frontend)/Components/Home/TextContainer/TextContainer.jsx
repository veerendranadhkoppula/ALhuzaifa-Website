'use client'
import React, { useEffect, useRef } from 'react'
import styles from './TextContainer.module.css'
import { useTranslation } from '../../../hooks/useTranslation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const TextContainer = () => {
  const { t } = useTranslation()
  const textRef = useRef(null)

 useEffect(() => {
  const ctx = gsap.context(() => {

   const split = new SplitType(textRef.current, {
  types: 'lines',
  tagName: 'span',
   lineClass: 'line',
})

gsap.set(split.lines, { willChange: 'transform' })

gsap.from(split.lines, {
  yPercent: 100,
  opacity: 0,
  duration: 1.2,
  ease: 'power4.out',
  stagger: {
    each: 0.12,
    from: 'start',
  },
  scrollTrigger: {
    trigger: textRef.current,
    start: 'top 85%',
  },
})
  })

  return () => ctx.revert()
}, [])

  return (
    <div className={styles.Main}>
      <div className={styles.MainContainer}>
        <p ref={textRef}>{t.textContainer.body}</p>
      </div>
    </div>
  )
}

export default TextContainer