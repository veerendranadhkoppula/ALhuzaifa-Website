'use client'
import React from 'react'
import styles from './Landing.module.css'
import Image from 'next/image'
import one from './1.png'
import { useTranslation } from '../../../hooks/useTranslation'

const Landing = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainContainer}>
          <div className={styles.top}>
            <h3>{t.hospitalityPage.title1}</h3>
            <Image src={one} alt="hospitality" className={styles.topImg} />
            <h3>{t.hospitalityPage.title2}</h3>
          </div>
          <div className={styles.bottom}>
            <h3>{t.hospitalityPage.bottomTitle}</h3>
            <p>{t.hospitalityPage.bottomDesc}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing