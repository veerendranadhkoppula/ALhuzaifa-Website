'use client'
import React, { useEffect, useRef } from 'react'
import styles from './Landing.module.css'
import { useTranslation } from '../../../hooks/useTranslation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Landing = () => {
  const { t } = useTranslation()

  const titleRef = useRef(null)
  const descRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isRTL = document.documentElement.dir === 'rtl'

      const startClip = isRTL
        ? 'inset(0 100%  0 0)'
        : 'inset(0 100% 0 0)'

      const endClip = 'inset(0 0% 0 0)'

      gsap.set([titleRef.current, descRef.current], {
        clipPath: startClip,
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      tl.to({}, { duration: 0.3 })

      .to(titleRef.current, {
        clipPath: endClip,
        opacity: 1,
        duration: 1.6,
        ease: 'power1.out',
      })

      .to(descRef.current, {
        clipPath: endClip,
        opacity: 1,
        duration: 1.3,
        ease: 'power1.out',
      }, "-=0.9")

    })

    return () => ctx.revert()
  }, [])

  return (
    <div className={styles.Main}>
      <div className={styles.MainContainer}>
        <h4 ref={titleRef}>{t.aboutUs.landingHeading}</h4>
        <p ref={descRef}>{t.aboutUs.landingDesc}</p>
      </div>
    </div>
  )
}

export default Landing