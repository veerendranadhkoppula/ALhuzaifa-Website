'use client'
import React from 'react'
import styles from './Philosophy.module.css'
import Image from 'next/image'
import one from './1.png'
import { useTranslation } from '../../../hooks/useTranslation'

const Philosophy = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.Main}>
      <div className={styles.MainContainer}>
        <div className={styles.Left}>
          <Image src={one} alt="philosophy" className={styles.Image} />
        </div>
        <div className={styles.Right}>
          <h3>{t.aboutUs.philosophyTitle}</h3>
          <p>{t.aboutUs.philosophyDesc}</p>
        </div>
      </div>
    </div>
  )
}

export default Philosophy