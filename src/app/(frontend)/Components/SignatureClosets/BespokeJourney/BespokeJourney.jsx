'use client'
import React from 'react'
import styles from './BespokeJourney.module.css'
import Image from 'next/image'
import one from './1.png'
import two from './2.png'
import three from './3.png'
import four from './4.png'
import { useTranslation } from '../../../hooks/useTranslation'

const BespokeJourney = () => {
  const { t } = useTranslation()

  const cards = [
    { img: one,  title: t.SignatureClosetsPage.step1Title, desc: t.SignatureClosetsPage.step1Desc, num: '01', dark: false },
    { img: two,  title: t.SignatureClosetsPage.step2Title, desc: t.SignatureClosetsPage.step2Desc, num: '02', dark: true  },
    { img: three,title: t.SignatureClosetsPage.step3Title, desc: t.SignatureClosetsPage.step3Desc, num: '03', dark: false },
    { img: four, title: t.SignatureClosetsPage.step4Title, desc: t.SignatureClosetsPage.step4Desc, num: '04', dark: true  },
  ]

  return (
    <div className={styles.main}>
      <div className={styles.MainContainer}>

        <div className={styles.header}>
          <h3 className={styles.title}>{t.SignatureClosetsPage.journeyTitle}</h3>
          <p className={styles.desc}>{t.SignatureClosetsPage.journeyDesc}</p>
        </div>

        <div className={styles.cards}>
          {cards.map((card, i) => (
            <div
              key={i}
              className={`${styles.card} ${card.dark ? styles.cardDark : styles.cardLight}`}
            >
              <div className={styles.cardTop}>
                <div className={styles.cardText}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.desc}</p>
                </div>
                <span className={styles.cardNum}>{card.num}</span>
              </div>
              <div className={styles.cardBottom}>
                <Image
                  src={card.img}
                  alt={card.title}
                  className={styles.cardImg}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default BespokeJourney