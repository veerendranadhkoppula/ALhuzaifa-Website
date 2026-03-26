'use client'
import React from 'react'
import styles from './Transform.module.css'
import Image from 'next/image'
import Link from 'next/link'
import one from './1.png'
import two from './2.png'
import three from './3.png'
import { useTranslation } from '../../../hooks/useTranslation'
import { useLanguage } from '../../../context/LanguageContext'

const Transform = () => {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const locale = language

  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainContainer}>
          <div className={styles.heading}>
            <h3>{t.servicesPage.transformHeading}</h3>
          </div>
          <div className={styles.Cards}>

            <div className={styles.Card}>
              <div className={styles.CardTop}>
                <Image src={one} alt="concept" className={styles.CardImg} />
              </div>
              <Link href={`/${locale}/services/hospitality`} className={styles.CardBottom}>
                <h4>{t.servicesPage.hospitality}</h4>
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L1 6.91406" stroke="#69594F" strokeWidth="2" strokeLinecap="square" />
                </svg>
              </Link>
            </div>

            <div className={styles.Card}>
              <div className={styles.CardTop}>
                <Image src={two} alt="concept" className={styles.CardImg} />
              </div>
              <Link href={`/${locale}/services/residential`} className={styles.CardBottom}>
                <h4>{t.servicesPage.residential}</h4>
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L1 6.91406" stroke="#69594F" strokeWidth="2" strokeLinecap="square" />
                </svg>
              </Link>
            </div>

            <div className={styles.Card}>
              <div className={styles.CardTop}>
                <Image src={three} alt="concept" className={styles.CardImg} />
              </div>
              <Link href={`/${locale}/services/commercial`} className={styles.CardBottom}>
                <h4>{t.servicesPage.commercial}</h4>
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L1 6.91406" stroke="#69594F" strokeWidth="2" strokeLinecap="square" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Transform