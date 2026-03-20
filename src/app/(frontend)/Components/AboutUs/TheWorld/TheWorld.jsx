'use client'
import React from 'react'
import styles from './TheWorld.module.css'
import Image from 'next/image'
import one from './1.png'
import two from './2.png'
import three from './3.png'
import { useTranslation } from '../../../hooks/useTranslation'

const ArrowSvg = () => (
  <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L0.999999 6.91406" stroke="#414141" strokeWidth="2" strokeLinecap="square"/>
  </svg>
)

const TheWorld = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.Main}>
      <div className={styles.MainContainer}>
        <div className={styles.top}>
          <h3>{t.aboutUs.theWorldTitle}</h3>
          <p>{t.aboutUs.theWorldDesc}</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.card}>
            <Image src={one} alt="design-studio" className={styles.image} />
            <div className={styles.content}>
              <h4>{t.aboutUs.designStudio}</h4>
              <ArrowSvg />
            </div>
          </div>
          <div className={styles.card}>
            <Image src={two} alt="furniture" className={styles.image} />
            <div className={styles.content}>
              <h4>{t.aboutUs.furniture}</h4>
              <ArrowSvg />
            </div>
          </div>
          <div className={styles.card}>
            <Image src={three} alt="properties" className={styles.image} />
            <div className={styles.content}>
              <h4>{t.aboutUs.properties}</h4>
              <ArrowSvg />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheWorld