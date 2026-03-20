'use client'
import React from 'react'
import styles from './TextTwo.module.css'
import { useTranslation } from '../../../hooks/useTranslation'

const TextTwo = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.Main}>
      <div className={styles.MainContainer}>
        <p>{t.aboutUs.textTwo}</p>
      </div>
    </div>
  )
}

export default TextTwo