'use client'
import React, { useEffect, useRef } from 'react'
import styles from './Philosophy.module.css'
import Image from 'next/image'
import one from './1.png'
import { useTranslation } from '../../../hooks/useTranslation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Philosophy = () => {
  const { t } = useTranslation()

  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      const elements = textRef.current.children

      // initial state
      gsap.set(elements, {
        opacity: 0,
        y: 25,
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      // 🔥 title
      tl.to(elements[0], {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
      })

      // 🔥 description (smooth follow)
      .to(elements[1], {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: 'power2.out',
      }, "-=0.8")

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className={styles.Main} ref={sectionRef}>
      <div className={styles.MainContainer}>
        
        <div className={styles.Left}>
          <div className={styles.imageWrapper}>
            <Image src={one} alt="philosophy" className={styles.Image} />
          </div>
        </div>

        <div className={styles.Right} ref={textRef}>
          <h3>{t.aboutUs.philosophyTitle}</h3>
          <p>{t.aboutUs.philosophyDesc}</p>
        </div>

      </div>
    </div>
  )
}

export default Philosophy