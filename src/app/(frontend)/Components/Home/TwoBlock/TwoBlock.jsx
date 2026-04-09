'use client'
import React, { useEffect, useRef } from 'react'
import styles from './TwoBlock.module.css'
import Image from 'next/image'
import block1 from './1.png'
import block2 from './2.png'
import Link from 'next/link'
import { useTranslation } from '../../../hooks/useTranslation'
import { useLanguage } from '../../../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TwoBlock = () => {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const locale = language

  const blockRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      blockRefs.current.forEach((el) => {
        if (!el) return

        const title = el.querySelector(`.${styles.imageTitle}`)
        const desc = el.querySelector(`.${styles.desc}`)
        const link = el.querySelector(`.${styles.link}`)

        const isRTL = document.dir === 'rtl'

        gsap.fromTo(
          title,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 60%',
            },
          }
        )

        gsap.fromTo(
          [desc, link],
          { opacity: 0, x: isRTL ? 50 : -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 45%',
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className={styles.Main}>
      <div className={styles.MainContainer}>

        <Link href={`/${locale}/craftsmanship`} className={styles.block} ref={(el) => (blockRefs.current[0] = el)}>
          <div className={styles.imageWrapper}>
            <Image
              src={block1}
              alt={t.twoBlock.block1Title}
              fill
              className={styles.image}
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className={styles.overlay}>
              <h2 className={styles.imageTitle}>{t.twoBlock.block1Title}</h2>
            </div>
          </div>
          <div className={styles.textContent}>
            <p className={styles.desc}>{t.twoBlock.block1Desc}</p>
            <div>
              <h5 className={styles.link}>
                {t.twoBlock.block1Link}
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none">
                  <path d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L1 6.91406" stroke="#69594F" strokeWidth="2"/>
                </svg>
              </h5>
            </div>
          </div>
        </Link>

        <Link href={`/${locale}/services`} className={styles.block} ref={(el) => (blockRefs.current[1] = el)}>
          <div className={styles.imageWrapper}>
            <Image
              src={block2}
              alt={t.twoBlock.block2Title}
              fill
              className={styles.image}
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className={styles.overlay}>
              <h2 className={styles.imageTitle}>{t.twoBlock.block2Title}</h2>
            </div>
          </div>
          <div className={styles.textContenttwo}>
            <p className={styles.desc}>{t.twoBlock.block2Desc}</p>
            <div>
              <h5 className={styles.link}>
                {t.twoBlock.block2Link}
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none">
                  <path d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L1 6.91406" stroke="#69594F" strokeWidth="2"/>
                </svg>
              </h5>
            </div>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default TwoBlock