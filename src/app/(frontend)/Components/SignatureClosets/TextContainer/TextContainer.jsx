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
            <h3>{t.SignatureClosetsPage.textheading}</h3>
            <p>{t.SignatureClosetsPage.textdesc}</p>

        </div>


    </div>
    </>
  )
}

export default TextContainer
