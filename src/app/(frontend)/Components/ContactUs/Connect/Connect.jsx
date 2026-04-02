'use client'
import React, { useEffect, useRef } from 'react'
import styles from './Connect.module.css'
import { useTranslation } from '../../../hooks/useTranslation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Connect = () => {
  const { t } = useTranslation()
  const sectionRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 640) return

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(
        sectionRef.current.querySelectorAll(
          `.${styles.adress}, .${styles.email}, .${styles.phone}, .${styles.social}`
        )
      )

      const hLines = sectionRef.current.querySelectorAll(`.${styles.line}`)
      const vLines = sectionRef.current.querySelectorAll(`.${styles.sline}`)

      gsap.set(items, { opacity: 0, y: 30 })
      gsap.set(hLines, { scaleX: 0, transformOrigin: 'left' })
      gsap.set(vLines, { scaleY: 0, transformOrigin: 'top' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })

      tl.to(hLines[0], {
        scaleX: 1,
        duration: 1.2,
        ease: 'expo.out',
      })

      .to(items[0], {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'expo.out',
      }, "-=0.8")

      .to(vLines[0], {
        scaleY: 1,
        duration: 1,
        ease: 'expo.out',
      }, "-=0.8")

      .to(items[1], {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'expo.out',
      }, "-=0.8")

      .to(vLines[1], {
        scaleY: 1,
        duration: 1,
        ease: 'expo.out',
      }, "-=0.8")

      .to(items[2], {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'expo.out',
      }, "-=0.8")

      .to(vLines[2], {
        scaleY: 1,
        duration: 1,
        ease: 'expo.out',
      }, "-=0.8")

      .to(items[3], {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'expo.out',
      }, "-=0.8")

      .to(hLines[1], {
        scaleX: 1,
        duration: 1.2,
        ease: 'expo.out',
      }, "-=1")

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className={styles.main} ref={sectionRef}>
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
            <p><a href="mailto:hello@alhuzaifa.com">{t.contactPage.emailText}</a></p>
          </div>

          <div className={styles.sline}></div>

          <div className={styles.phone}>
            <h3>{t.contactPage.phone}</h3>
            <p><a href="tel:+97141234567">{t.contactPage.phoneText}</a></p>
          </div>

          <div className={styles.sline}></div>

          <div className={styles.social}>
            <h3>{t.contactPage.letsConnect}</h3>
            <div className={styles.socialslist}>
              <a href="#"><p>{t.contactPage.instagram}</p></a>
              <a href="#"><p>{t.contactPage.linkedin}</p></a>
              <a href="#"><p>{t.contactPage.facebook}</p></a>
            </div>
          </div>
        </div>

        <div className={styles.line}></div>
      </div>
    </div>
  )
}

export default Connect