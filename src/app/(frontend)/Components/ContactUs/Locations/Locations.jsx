'use client'
import React from 'react'
import styles from './Locations.module.css'
import Image from 'next/image'
import locationimg from './1.png'
import { useTranslation } from '../../../hooks/useTranslation'

const Locations = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainContainer}>
          <div className={styles.LeftContainer}>
            <div className={styles.heading}>
              <p>{t.contactPage.storeLocations}</p>
            </div>
            <div className={styles.address}>
              <div className={styles.adresstop}>
                <h4>{t.contactPage.abuDhabiTitle}</h4>
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L0.999999 6.91406" stroke="#414141" strokeWidth="2" strokeLinecap="square" />
                </svg>
              </div>
              <div className={styles.addressbottom}>
                <p>{t.contactPage.abuDhabiAddress}</p>
                <p>{t.contactPage.abuDhabiPhone}</p>
              </div>
            </div>
            <div className={styles.address}>
              <div className={styles.adresstop}>
                <h4>{t.contactPage.dubaiTitle}</h4>
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L0.999999 6.91406" stroke="#414141" strokeWidth="2" strokeLinecap="square" />
                </svg>
              </div>
              <div className={styles.addressbottom}>
                <p>{t.contactPage.dubaiAddress}</p>
                 <p>{t.contactPage.dubaiPhone}</p>
              </div>
             
            </div>
            <div className={styles.address}>
              <div className={styles.adresstop}>
                <h4>{t.contactPage.sharjahTitle}</h4>
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L0.999999 6.91406" stroke="#414141" strokeWidth="2" strokeLinecap="square" />
                </svg>
              </div>
              <div className={styles.addressbottom}>
                <p>{t.contactPage.sharjahAddress}</p>
                <p>{t.contactPage.sharjahPhone}</p>
              </div>
            </div>
          </div>
          <div className={styles.RightContainer}>
            <Image src={locationimg} alt="location" className={styles.LocationImg} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Locations