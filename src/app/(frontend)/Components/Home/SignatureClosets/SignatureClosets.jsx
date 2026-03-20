'use client'
import React from 'react'
import styles from './SignatureClosets.module.css'
import Image from 'next/image'
import closet from './1.png'
import closetm from './1m.png'
import { useTranslation } from '../../../hooks/useTranslation'

const SignatureClosets = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.Main}>
      <div className={styles.MainContainer}>
        <div className={styles.left}>
          <div className={styles.lefttop}>
            <h3>{t.signatureClosets.title}</h3>
            <p>{t.signatureClosets.desc}</p>
          </div>
          <div className={styles.leftbottom}>
            <p>{t.signatureClosets.link}</p>
            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L1 6.91406" stroke="#69594F" strokeWidth="2" strokeLinecap="square"/>
            </svg>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.righttop}>
            <Image src={closet} alt={t.signatureClosets.title} />
          </div>
          <div className={styles.rightbottom}>
            <Image src={closetm} alt={t.signatureClosets.title} />
          </div>
          <div className={styles.explore}>
            <p>{t.signatureClosets.desc}</p>
          </div>
          <div className={styles.leftbottommob}>
            <p>{t.signatureClosets.link}</p>
            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L1 6.91406" stroke="#69594F" strokeWidth="2" strokeLinecap="square"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignatureClosets