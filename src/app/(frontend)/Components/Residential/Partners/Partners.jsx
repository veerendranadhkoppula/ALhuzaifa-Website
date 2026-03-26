'use client'
import React from 'react'
import styles from './Partners.module.css'
import Image from 'next/image'
import one from './1.png'
import two from './2.png'
import three from './3.png'
import four from './4.png'
import five from './5.png'
import six from './6.png'
import { useTranslation } from '../../../hooks/useTranslation'

const Partners = () => {
    const { t } = useTranslation()
  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainContainer}>
          <div className={styles.left}>
            <h3>{t.residentialPage.partnertitle}</h3>
            <p>
            {t.ResidentialPage.partnerDesc}
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.rowone}>
              <Image src={one} alt="partner 1" className={styles.image} />
              <Image src={two} alt="partner 2" className={styles.image} />
              <Image src={three} alt="partner 3" className={styles.image} />
              <Image src={four} alt="partner 4" className={styles.image} />
            </div>
            <div className={styles.rowtwo}>
              <Image src={five} alt="partner 5" className={styles.image} />
              <Image src={six} alt="partner 6" className={styles.image} />
              <Image src={one} alt="partner 1" className={styles.image} />
              <Image src={two} alt="partner 2" className={styles.image} />
            </div>
            <div className={styles.rowthree}>
            <Image src={three} alt="partner 3" className={styles.image} />
            <Image src={four} alt="partner 4" className={styles.image} />
            <Image src={five} alt="partner 5" className={styles.image} />
            <Image src={six} alt="partner 6" className={styles.image} />
          </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Partners
