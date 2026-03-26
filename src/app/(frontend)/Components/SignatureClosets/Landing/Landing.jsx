'use client'
import React from 'react'
import styles from './Landing.module.css'
import { useTranslation } from '../../../hooks/useTranslation'

const Landing = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.Main}>
        <div className={styles.MainContainer}>
          <h4>{t.SignatureClosetsPage.landingHeading}</h4>
          <p>{t.SignatureClosetsPage.landingDesc}</p>
        </div>
      </div>
    </>
  )
}

export default Landing