'use client'
import React from 'react'
import styles from './CertifiedExcellence.module.css'
import { useTranslation } from '../../../hooks/useTranslation'

const CheckIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.5086 4.78305C44.0236 8.99895 48.335 16.3298 48.335 24.6675C48.335 37.7387 37.7387 48.335 24.6675 48.335C11.5963 48.335 1 37.7387 1 24.6675C1 11.5963 11.5964 1 24.6675 1C27.8255 1 30.8391 1.61848 33.5936 2.74107" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M36.8124 36.8229C43.5232 30.1121 43.5232 19.2317 36.8124 12.5209C30.1016 5.81004 19.2212 5.81004 12.5104 12.5209C5.79957 19.2317 5.79957 30.1121 12.5104 36.8229C19.2212 43.5337 30.1016 43.5337 36.8124 36.8229Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20.8827 32.5761L15.3591 27.0525C14.8386 26.5321 14.8386 25.6882 15.3591 25.1679L16.7513 23.7757C17.2718 23.2552 18.1155 23.2553 18.636 23.7757L20.8827 26.0224C21.4032 26.5429 22.247 26.5429 22.7674 26.0224L31.7587 17.031C32.2792 16.5105 33.1229 16.5105 33.6433 17.031L35.0355 18.4232C35.556 18.9437 35.556 19.7875 35.0355 20.3078L22.7672 32.5761C22.2469 33.0965 21.4031 33.0965 20.8827 32.5761Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ArrowRight = () => (
  <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L0.999999 6.91406" stroke="#414141" strokeWidth="2" strokeLinecap="square"/>
  </svg>
)

const CertifiedExcellence = ({ certificates = [] }) => {
  const { t } = useTranslation()

if (certificates.length === 0) return (
  <div style={{padding: '80px 50px', color: '#414141'}}>
    No certificates added .
  </div>
)

const handleOpen = (url) => {
  if (!url) return
  const fullUrl = url.startsWith('http') ? url : `${window.location.origin}${url}`
  window.open(fullUrl, '_blank')
}
  return (
    <div className={styles.main}>
      <div className={styles.MainContainer}>

 
        <div className={styles.left}>
          <h3 className={styles.title}>{t.CraftmanshipPage.certifiedTitle}</h3>
          <p className={styles.desc}>{t.CraftmanshipPage.certifiedDesc}</p>

          <div className={styles.mobileList}>
            {certificates.map((cert) => (
             <button
  key={cert.id}
  className={styles.mobileItem}
  onClick={() => handleOpen(cert.file?.url)}
>
  <span className={styles.mobileItemText}>
    {cert.title}&nbsp;<span className={styles.mobileArrowInline}><ArrowRight /></span>
  </span>
</button>
            ))}
          </div>
        </div>



        <div className={styles.cards}>
          {certificates.map((cert) => (
            <button
              key={cert.id}
              className={styles.card}
              onClick={() => handleOpen(cert.file?.url)}
            >
              <CheckIcon />
              <span className={styles.cardLabel}>{cert.title}</span>
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}

export default CertifiedExcellence