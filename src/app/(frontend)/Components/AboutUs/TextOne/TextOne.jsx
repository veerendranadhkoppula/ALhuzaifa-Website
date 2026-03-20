'use client'
import React from 'react'
import styles from './TextOne.module.css'
import { useTranslation } from '../../../hooks/useTranslation'

const TextOne = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.Main}>
      <div className={styles.MainContainer}>
        <p>{t.aboutUs.textOne}</p>
      </div>
    </div>
  )
}

export default TextOne