'use client'
import React from 'react'
import styles from './TextContainer.module.css'
import { useTranslation } from '../../../hooks/useTranslation'

const TextContainer = () => {
    const { t } = useTranslation()
  return (
    <>
      <div className={styles.Main}>
        <div className={styles.MainContainer}>
          <h4>
           {t.CraftmanshipPage.textContainerdesc}
          </h4>
        </div>
      </div>
    </>
  )
}

export default TextContainer
