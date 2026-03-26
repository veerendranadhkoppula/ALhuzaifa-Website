'use client'
import React from 'react'
import styles from './Landing.module.css'
import ContactUsForm from '../ContactUsForm/ContactUsForm'
import { useTranslation } from '../../../hooks/useTranslation'
import Link from 'next/link'

const ArrowRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M-0.00133734 6.66688L-0.00133727 5.17206L8.74139 5.17206L4.73431 1.06132L5.76886 -2.58748e-07L11.5391 5.91947L5.76886 11.8389L4.73431 10.7776L8.74139 6.66688L-0.00133734 6.66688Z" fill="white"/>
  </svg>
)

const Landing = () => {
    const { t } = useTranslation()
  return (
    <div className={styles.Main}>
      <div className={styles.MainContainer}>
        <div className={styles.LeftConatiner}>
          <h3>{t.contactPage.landingTitle}</h3>
          <p>{t.contactPage.landingDesc}</p>
          <Link href="#contact-form" className={styles.contactCta}>
            {t.contactPage.landingCta} <ArrowRight />
          </Link>
        </div>
        <div className={styles.RightContainer}>
          <ContactUsForm />
        </div>
      </div>
    </div>
  )
}

export default Landing