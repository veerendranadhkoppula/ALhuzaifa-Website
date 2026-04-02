'use client'
import React, { useEffect, useRef } from 'react'
import styles from './TextOne.module.css'
import { useTranslation } from '../../../hooks/useTranslation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const TextOne = () => {
  const { t } = useTranslation()
   const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 90%',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className={styles.Main}>
      <div className={styles.MainContainer}>
        <p ref={textRef}>{t.aboutUs.textOne}</p>
      </div>
    </div>
  )
}

export default TextOne