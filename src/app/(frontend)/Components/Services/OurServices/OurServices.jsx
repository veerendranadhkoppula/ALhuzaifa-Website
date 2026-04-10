'use client'
import React, { useState } from 'react'
import styles from './OurServices.module.css'
import Image from 'next/image'
import Link from 'next/link'
import one from './1.png'
import { useTranslation } from '../../../hooks/useTranslation'
import { useLanguage } from '../../../context/LanguageContext'


const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.16406 10.0052H15.8307M9.9974 4.17188V15.8385" stroke="#414141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const MinusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.16406 10.0052H15.8307" stroke="#414141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ArrowRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M-0.00133734 6.66688L-0.00133727 5.17206L8.74139 5.17206L4.73431 1.06132L5.76886 -2.58748e-07L11.5391 5.91947L5.76886 11.8389L4.73431 10.7776L8.74139 6.66688L-0.00133734 6.66688Z" fill="white"/>
  </svg>
)

const SERVICES = [
  { key: 'ffe', title: 'FF&E (Furniture, Fixtures & Equipment)', desc: 'Curated selections to complement and elevate interiors.' },
  { key: 'turnkey', title: 'Turnkey Project Management', desc: 'Full execution with timelines, vendors, and delivery handled seamlessly.' },
  { key: 'fitout', title: 'Fit-Out & Installation', desc: 'Installations executed with accuracy and care, reflecting the design intent.' },
  { key: 'custom', title: 'Custom Furniture & Joinery', desc: 'Bespoke pieces crafted in-house with precision and artistry.' },
  { key: 'closets', title: 'Customized Closets & Wardrobes', desc: 'Luxury storage solutions combining organization and elegance.' },
  { key: 'wallpapers', title: 'Wallpapers, Curtains & Furnishings', desc: 'Materials and furnishings that add texture, warmth, and elegance.' },
]

const OurServices = () => {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const locale = language
  const [openKey, setOpenKey] = useState(null)

  const toggle = (key) => {
    setOpenKey((prev) => (prev === key ? null : key))
  }

  return (
    <div className={styles.main}>
      <div className={styles.MainContainer}>

        <div className={styles.left}>
          <h3 className={styles.heading}>{t.servicesPage.ourServicesTitle}</h3>
          <p className={styles.intro}>{t.servicesPage.ourServicesDesc}</p>

          <div className={styles.desktopGrid}>
            {SERVICES.map((s) => (
              <div key={s.key} className={styles.serviceItem}>
                <h4 className={styles.serviceTitle}>{t.servicesPage[s.key + 'Title']}</h4>
                <p className={styles.serviceDesc}>{t.servicesPage[s.key + 'Desc']}</p>
              </div>
            ))}
          </div>


          <div className={styles.mobileAccordion}>
            {SERVICES.map((s) => (
              <div key={s.key} className={styles.accordionItem}>
                <button
                  className={styles.accordionTrigger}
                  onClick={() => toggle(s.key)}
                >
                  <span className={styles.accordionTitle}>{t.servicesPage[s.key + 'Title']}</span>
                  <span className={styles.accordionIcon}>
                    {openKey === s.key ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>
                <div className={`${styles.accordionBody} ${openKey === s.key ? styles.accordionBodyOpen : ''}`}>
                  <p className={styles.accordionDesc}>{t.servicesPage[s.key + 'Desc']}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href={`/${locale}/contact-us`} className={styles.cta}>
            {t.servicesPage.requestConsultation} <ArrowRight />
          </Link>
        </div>

        <div className={styles.right}>
          <Image src={one} alt="Our Services" className={styles.image} />
        </div>

      </div>
    </div>
  )
}

export default OurServices