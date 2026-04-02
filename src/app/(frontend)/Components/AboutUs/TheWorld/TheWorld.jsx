'use client'
import React, { useEffect, useRef } from 'react'
import styles from './TheWorld.module.css'
import Image from 'next/image'
import one from './1.png'
import two from './2.png'
import three from './3.png'
import Link from 'next/link'
import { useLanguage } from '../../../context/LanguageContext'
import { useTranslation } from '../../../hooks/useTranslation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ArrowSvg = () => (
  <svg width="17" height="14" viewBox="0 0 17 14" fill="none">
    <path
      d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L0.999999 6.91406"
      stroke="#414141"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>
)

const TheWorld = () => {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const locale = language

  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {


      gsap.set([titleRef.current, descRef.current], {
        y: 80,
        opacity: 0,
      })

      gsap.set(cardsRef.current, {
        y: 40,
        opacity: 0,
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 55%',
        },
      })

      tl.to({}, { duration: 0.2 })

      .to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: 'power3.out',
      })

      .to(descRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: 'power3.out',
      }, "-=1.1")

      .to(cardsRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.25,
      }, "-=0.6")

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className={styles.Main} ref={sectionRef}>
      <div className={styles.MainContainer}>

        <div className={styles.top}>
          <h3 ref={titleRef}>{t.aboutUs.theWorldTitle}</h3>
          <p ref={descRef}>{t.aboutUs.theWorldDesc}</p>
        </div>

        <div className={styles.bottom}>
          <Link href={`/${locale}`} className={styles.card} ref={el => cardsRef.current[0] = el}>
            <Image src={one} alt="design-studio" className={styles.image} />
            <div className={styles.content}>
              <h4>{t.aboutUs.designStudio}</h4>
              <ArrowSvg />
            </div>
          </Link>

          <a href="https://www.alhuzaifa.com/en/" target="_blank" rel="noopener noreferrer"
            className={styles.card} ref={el => cardsRef.current[1] = el}>
            <Image src={two} alt="furniture" className={styles.image} />
            <div className={styles.content}>
              <h4>{t.aboutUs.furniture}</h4>
              <ArrowSvg />
            </div>
          </a>

          <a href="https://alhuzaifaproperties.com/" target="_blank" rel="noopener noreferrer"
            className={styles.card} ref={el => cardsRef.current[2] = el}>
            <Image src={three} alt="properties" className={styles.image} />
            <div className={styles.content}>
              <h4>{t.aboutUs.properties}</h4>
              <ArrowSvg />
            </div>
          </a>
        </div>

      </div>
    </div>
  )
}

export default TheWorld