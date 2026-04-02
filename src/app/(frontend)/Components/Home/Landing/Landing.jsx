'use client'
import React, { useEffect, useRef } from 'react'
import styles from './Landing.module.css'
import { useTranslation } from '../../../hooks/useTranslation'
import gsap from 'gsap'

const Landing = () => {
  const { t } = useTranslation()

  const containerRef = useRef(null)
  const textRef = useRef(null)

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.set(textRef.current, { opacity: 0, y: 40 })
    gsap.set(containerRef.current, { scale: 1 })


    gsap.to(containerRef.current, {
      scale: 1.05,
      duration: 6,
      ease: 'power2.out',
    })


    gsap.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      delay: 0.5,
      ease: 'power3.out',
    })
  })

  return () => ctx.revert() 
}, [])

  return (
    <div className={styles.Main}>
      <div ref={containerRef} className={styles.MainContainer}>
        <h3 ref={textRef}>{t.landing.heading}</h3>
      </div>
    </div>
  )
}

export default Landing
