'use client'
import React, { useEffect, useRef } from 'react'
import styles from './SignatureCloset.module.css'
import Image from 'next/image'
import closet from './1.jpeg'
import closetm from './1.jpeg'
import { useTranslation } from '../../../hooks/useTranslation'
import Link from 'next/link'
import { useLanguage } from '../../../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SignatureCloset = () => {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const locale = language

  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isRTL = document.dir === 'rtl'

      const title = sectionRef.current.querySelector(`.${styles.lefttop} h3`)
      const desc = sectionRef.current.querySelector(`.${styles.lefttop} p`)
      const link = sectionRef.current.querySelector(`.${styles.leftbottom}`)
      gsap.set([title, desc, link], {
        opacity: 0,
        x: isRTL ? 60 : -60,
      })

      gsap.to([title, desc, link], {
        opacity: 1,
        x: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className={styles.Main} ref={sectionRef}>
      <div className={styles.MainContainer}>
        <div className={styles.left}>
          <div className={styles.lefttop}>
            <h3>{t.signatureClosets.title}</h3>
            <p>{t.signatureClosets.desc}</p>
          </div>

          <Link href={`/${locale}/craftmanship`} className={styles.leftbottom}>
            <p>{t.signatureClosets.link}</p>
            <svg width="17" height="14" viewBox="0 0 17 14" fill="none">
              <path
                d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L1 6.91406"
                stroke="#69594F"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </Link>
        </div>

        <div className={styles.right}>
          <div className={styles.righttop}>
            <Image src={closet} alt={t.signatureClosets.title} className={styles.image} />
          </div>

          <div className={styles.rightbottom}>
            <Image src={closetm} alt={t.signatureClosets.title} className={styles.image} />
          </div>

          <div className={styles.explore}>
            <p>{t.signatureClosets.desc}</p>
          </div>

          <div className={styles.leftbottommob}>
            <p>{t.signatureClosets.link}</p>

            <svg width="17" height="14" viewBox="0 0 17 14" fill="none">
              <path
                d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L1 6.91406"
                stroke="#69594F"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignatureCloset