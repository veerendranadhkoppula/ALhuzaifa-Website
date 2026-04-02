'use client'
import React, { useEffect, useRef } from 'react'
import styles from './ConnectMobile.module.css'
import { useTranslation } from '../../../hooks/useTranslation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ConnectMobile = () => {
  const { t } = useTranslation()
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current.querySelectorAll(
        `.${styles.adress}, .${styles.email}, .${styles.phone}, .${styles.social}`
      )

      gsap.fromTo(
        items,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className={styles.main} ref={sectionRef}>
      <div className={styles.MainContainer}>
        {/* unchanged UI */}
        <div className={styles.adress}>
          <h3>{t.contactPage.address}</h3>
          <p>{t.contactPage.addressText}</p>
        </div>

        <div className={styles.line}></div>

        <div className={styles.email}>
          <h3>{t.contactPage.email}</h3>
          <p><a href="mailto:hello@alhuzaifa.com">{t.contactPage.emailText}</a></p>
        </div>

        <div className={styles.line}></div>

        <div className={styles.phone}>
          <h3>{t.contactPage.phone}</h3>
          <p><a href="tel:+97141234567">{t.contactPage.phoneText}</a></p>
        </div>

        <div className={styles.line}></div>

        <div className={styles.social}>
          <h3>{t.contactPage.letsConnect}</h3>
          <div className={styles.socialslist}>
            <p>{t.contactPage.instagram}</p>
            <p>{t.contactPage.linkedin}</p>
            <p>{t.contactPage.facebook}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectMobile