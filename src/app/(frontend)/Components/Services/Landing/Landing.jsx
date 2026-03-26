'use client'
import React from 'react'
import styles from './Landing.module.css'
import { useTranslation } from '../../../hooks/useTranslation'

const Landing = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainContainer}>
          <h3>{t.servicesPage.landingTitle}</h3>
          <p>{t.servicesPage.landingDesc}</p>
        </div>
      </div>
    </>
  )
}

export default Landing