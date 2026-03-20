'use client'
import React from 'react'
import styles from './TwoBlock.module.css'
import Image from 'next/image'
import block1 from './1.png'
import block2 from './2.png'
import { useTranslation } from '../../../hooks/useTranslation'

const TwoBlock = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.Main}>
      <div className={styles.MainContainer}>

        <div className={styles.block}>
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
            <h5 className={styles.link}>
              {t.twoBlock.block1Link}
              <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L1 6.91406" stroke="#69594F" strokeWidth="2" strokeLinecap="square"/>
              </svg>
            </h5>
          </div>
        </div>

        <div className={styles.block}>
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
          <div className={styles.textContent}>
            <p className={styles.desc}>{t.twoBlock.block2Desc}</p>
            <h5 className={styles.link}>
              {t.twoBlock.block2Link}
              <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L1 6.91406" stroke="#69594F" strokeWidth="2" strokeLinecap="square"/>
              </svg>
            </h5>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TwoBlock