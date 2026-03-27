'use client'
import React from 'react'
import styles from './NotFound.module.css'
import Image from 'next/image'
import Link from 'next/link'
import one from './1.png'
import { useTranslation } from '../../hooks/useTranslation'
import { useLanguage } from '../../context/LanguageContext'

const ArrowRight = () => (
  <svg width="14" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M-0.00133734 6.66688L-0.00133727 5.17206L8.74139 5.17206L4.73431 1.06132L5.76886 -2.58748e-07L11.5391 5.91947L5.76886 11.8389L4.73431 10.7776L8.74139 6.66688L-0.00133734 6.66688Z" fill="#414141"/>
  </svg>
)

const NotFound = () => {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const locale = language

  return (
    <div className={styles.main}>
      <div className={styles.MainContainer}>

        <div className={styles.left}>
          <div className={styles.textBlock}>
            <h2 className={styles.code}>{t.Pagenotfound.code}</h2>
            <h1 className={styles.title}>{t.Pagenotfound.title}</h1>
            <p className={styles.desc}>{t.Pagenotfound.desc}</p>
          </div>

          <ul className={styles.links}>
            <li>
              <span className={styles.linkLabel}>{t.Pagenotfound.returnLabel}</span>
              <Link href={`/${locale}`} className={styles.link}>
                {t.Pagenotfound.homepageLink} <ArrowRight />
              </Link>
            </li>
            <li>
              <span className={styles.linkLabel}>{t.Pagenotfound.helpLabel}</span>
              <Link href={`/${locale}/contact-us`} className={styles.link}>
                {t.Pagenotfound.contactLink} <ArrowRight />
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <Image src={one} alt="404" className={styles.image} />
        </div>

      </div>
    </div>
  )
}

export default NotFound