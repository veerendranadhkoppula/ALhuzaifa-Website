'use client'
import React, { useState } from 'react'
import styles from './OurEdge.module.css'
import Image from 'next/image'
import one from './1.png'
import { useTranslation } from '../../../hooks/useTranslation'

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

const ITEMS = [
  { key: 'integrated' },
  { key: 'quality' },
  { key: 'leadership' },
  { key: 'sourcing' },
  { key: 'client' },
  { key: 'artisanal' },
  { key: 'living' },
  { key: 'value' },
]

const OurEdge = () => {
  const { t } = useTranslation()
  const [openKey, setOpenKey] = useState(null)

  const toggle = (key) => {
    setOpenKey((prev) => (prev === key ? null : key))
  }

  return (
    <div className={styles.main}>
      <div className={styles.MainContainer}>


        <div className={styles.left}>
          <h3 className={styles.heading}>{t.CraftmanshipPage.ourEdgeTitle}</h3>

          <div className={styles.desktopRows}>
            {ITEMS.map((item) => (
              <div key={item.key} className={styles.row}>
                <div className={styles.rowLine} />
                <div className={styles.rowContent}>
                  <span className={styles.rowTitle}>{t.CraftmanshipPage[item.key + 'Title']}</span>
                  <p className={styles.rowDesc}>{t.CraftmanshipPage[item.key + 'Desc']}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.mobileAccordion}>
            {ITEMS.map((item) => (
              <div key={item.key} className={styles.accordionItem}>
                <button
                  className={styles.accordionTrigger}
                  onClick={() => toggle(item.key)}
                >
                  <span className={styles.accordionTitle}>
                    {t.CraftmanshipPage[item.key + 'Title']}
                  </span>
                  <span className={styles.accordionIcon}>
                    {openKey === item.key ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>
                <div className={`${styles.accordionBody} ${openKey === item.key ? styles.accordionBodyOpen : ''}`}>
                  <p className={styles.accordionDesc}>
                    {t.CraftmanshipPage[item.key + 'Desc']}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className={styles.right}>
          <Image src={one} alt="Our Edge" className={styles.image} />
        </div>

      </div>
    </div>
  )
}

export default OurEdge