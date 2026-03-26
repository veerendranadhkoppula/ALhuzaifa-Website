'use client'
import React from 'react'
import styles from './Manufacturing.module.css'
import { useTranslation } from '../../../hooks/useTranslation'

const Manufacturing = () => {
    const { t } = useTranslation()
  return (
    <>
      <div className={styles.Main}>
        <div className={styles.MainContainer}>
          <div className={styles.top}>
            <h3>{t.CraftmanshipPage.manufacturingTitle}</h3>
            <p>
             {t.CraftmanshipPage.manufacturingDesc}
            </p>
          </div>
          <div className={styles.bottom}>
             <video
            className={styles.video}
            src="/1.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          </div>
        </div>
      </div>
    </>
  )
}

export default Manufacturing
