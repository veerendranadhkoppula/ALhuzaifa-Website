'use client'
import React from 'react'
import styles from './Landing.module.css'
import { useTranslation } from '../../../hooks/useTranslation'

const Landing = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.Main}>
      <div className={styles.MainContainer}>
        <h3>{t.landing.heading}</h3>
      </div>
    </div>
  )
}

export default Landing