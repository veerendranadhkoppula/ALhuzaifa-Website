'use client'
import React from 'react'
import styles from './WorldAlhuzaifa.module.css'
import Image from 'next/image'
import world from './1.png'
import worldm from './1m.png'
import Link from 'next/link'
import { useTranslation } from '../../../hooks/useTranslation'
import { useLanguage } from '../../../context/LanguageContext'

const WorldAlhuzaifa = () => {
  const { t } = useTranslation()
  const { language } = useLanguage()
const locale = language

  return (
    <div className={styles.Main}>
      <div className={styles.MainContainer}>
        <div className={styles.top}>
          <h3>{t.worldAlhuzaifa.title}</h3>
          <p>{t.worldAlhuzaifa.desc}</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.desk}>
            <Image src={world} alt={t.worldAlhuzaifa.title} />
          </div>
          <div className={styles.mob}>
            <Image src={worldm} alt={t.worldAlhuzaifa.title} />
          </div>
          <Link href={`/${locale}/about-us`} className={styles.explore}>
            <h4>{t.worldAlhuzaifa.link}</h4>
            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L1 6.91406" stroke="#69594F" strokeWidth="2" strokeLinecap="square"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WorldAlhuzaifa