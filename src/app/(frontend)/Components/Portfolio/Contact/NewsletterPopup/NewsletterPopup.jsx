'use client'
import React, { useState } from 'react'
import styles from './NewsletterPopup.module.css'
import Image from 'next/image'
import popupimg from '../1.png'
import { useTranslation } from '../../../../hooks/useTranslation'

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
      fill="#8F8677"
    />
  </svg>
)

const ArrowIcon = () => (
  <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L1 6.91406"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>
)

const NewsletterPopup = ({ onClose }) => {
    const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    if (!email) return
    setSubmitting(true)
    try {
      await fetch('/api/newsletters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setSuccess(true)
    } catch {
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imageWrap}>
          <Image src={popupimg} alt="Newsletter" fill className={styles.image} sizes="300px" />
        </div>

        <div className={styles.content}>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>

          {success ? (
            <div className={styles.successWrap}>
              <h3 className={styles.successTitle}>{t.contact.newsletterPopupSuccessTitle}</h3>
              <p className={styles.successDesc}>
            {t.contact.newsletterPopupSuccessDesc}
              </p>
            </div>
          ) : (
            <>
              <h3 className={styles.title}>{t.contact.newsletterPopupTitle}</h3>
              <p className={styles.desc}>{t.contact.newsletterPopupDesc}</p>
              <div className={styles.inputWrap}>
                <input
                  type="email"
                  className={styles.input}
                 placeholder={t.contact.newsletterPopupPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.btnWrap}>
                <button className={styles.submitBtn} onClick={handleSubmit} disabled={submitting}>
                  {submitting ? t.contact.newsletterPopupSubmitting : t.contact.newsletterPopupBtn}
                  <ArrowIcon />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default NewsletterPopup
