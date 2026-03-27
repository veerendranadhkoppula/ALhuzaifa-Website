'use client'
import React from 'react'
import styles from './Connect.module.css'
import { useTranslation } from '../../../hooks/useTranslation'

const Connect = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainContainer}>
          <div className={styles.line}></div>

          <div className={styles.content}>

            <div className={styles.adress}>
              <h3>{t.contactPage.address}</h3>
              <p>{t.contactPage.addressText}</p>
            </div>

            <div className={styles.sline}></div>

            <div className={styles.email}>
              <h3>{t.contactPage.email}</h3>
              <p>
                <a href="mailto:hello@alhuzaifa.com">
                  {t.contactPage.emailText}
                </a>
              </p>
            </div>

            <div className={styles.sline}></div>

            <div className={styles.phone}>
              <h3>{t.contactPage.phone}</h3>
              <p>
                <a href="tel:+97141234567">
                  {t.contactPage.phoneText}
                </a>
              </p>
            </div>

            <div className={styles.sline}></div>

            <div className={styles.social}>
              <h3>{t.contactPage.letsConnect}</h3>
              <div className={styles.socialslist}>
                <a href="https://www.linkedin.com/company/al-huzaifa-furniture/" target="_blank" rel="noopener noreferrer">
                  <p>{t.contactPage.instagram}</p>
                </a>
                <a href="https://www.instagram.com/alhuzaifadesignstudio/?hl=en" target="_blank" rel="noopener noreferrer">
                  <p>{t.contactPage.linkedin}</p>
                </a>
                <a href="https://www.facebook.com/p/Al-Huzaifa-Design-Studio-100076170074054/" target="_blank" rel="noopener noreferrer">
                  <p>{t.contactPage.facebook}</p>
                </a>
              </div>
            </div>

          </div>

          <div className={styles.line}></div>
        </div>
      </div>
    </>
  )
}

export default Connect