'use client'
import React from 'react'
import styles from './OurCollection.module.css'
import Image from 'next/image'
import { useTranslation } from '../../../hooks/useTranslation'
import one from './1.png'
import two from './2.jpg'

const OurCollection = () => {
  const { t } = useTranslation()

  const items = [
    { img: one,  title: t.SignatureClosetsPage.item1Title, desc: t.SignatureClosetsPage.item1Desc },
    { img: two,  title: t.SignatureClosetsPage.item2Title, desc: t.SignatureClosetsPage.item2Desc },
    { img: one,  title: t.SignatureClosetsPage.item3Title, desc: t.SignatureClosetsPage.item3Desc },
    { img: two,  title: t.SignatureClosetsPage.item4Title, desc: t.SignatureClosetsPage.item4Desc },
    { img: one,  title: t.SignatureClosetsPage.item5Title, desc: t.SignatureClosetsPage.item5Desc },
    { img: two,  title: t.SignatureClosetsPage.item6Title, desc: t.SignatureClosetsPage.item6Desc },
  ]

  const pairs = []
  for (let i = 0; i < items.length; i += 2) {
    pairs.push(items.slice(i, i + 2))
  }

  return (
    <div className={styles.main}>
      <div className={styles.MainContainer}>

        {/* Header */}
        <div className={styles.header}>
          <h3 className={styles.title}>{t.SignatureClosetsPage.collectionTitle}</h3>
          <p className={styles.desc}>{t.SignatureClosetsPage.collectionDesc}</p>
        </div>

        {/* Desktop — pairs */}
        <div className={styles.desktopPairs}>
          {pairs.map((pair, pairIndex) => (
            <div key={pairIndex} className={styles.pair}>
              <div className={styles.imageRow}>
                {pair.map((item, i) => (
                  <div key={i} className={styles.imageWrap}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="50vw"
                      className={styles.image}
                    />
                    <div className={styles.overlay}>
                      <span className={styles.overlayTitle}>{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.descRow}>
                {pair.map((item, i) => (
                  <div key={i} className={styles.descItem}>
                    <p className={styles.itemDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile — single column */}
        <div className={styles.mobileList}>
          {items.map((item, i) => (
            <div key={i} className={styles.mobileItem}>
              <div className={styles.mobileImageWrap}>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="100vw"
                  className={styles.image}
                />
              </div>
              <h4 className={styles.mobileItemTitle}>{item.title}</h4>
              <p className={styles.mobileItemDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default OurCollection