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
                <a href="https://share.google/qhPu2ac4WeInJFvu5" target="_blank" rel="noopener noreferrer">
                  <h4>{t.contactPage.abuDhabiTitle}</h4>
                </a>
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L0.999999 6.91406"
                    stroke="#414141"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              </div>
              <div className={styles.addressbottom}>
                <p>{t.contactPage.abuDhabiAddress}</p>
                <a href={`tel:${t.contactPage.abuDhabiPhone}`}>
                  <p>{t.contactPage.abuDhabiPhone}</p>
                </a>
              </div>
            </div>

            <div className={styles.address}>
              <div className={styles.adresstop}>
                <a href="https://share.google/f213FE9O7FDaPOzS5" target="_blank" rel="noopener noreferrer">
                  <h4>{t.contactPage.dubaiTitle}</h4>
                </a>
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L0.999999 6.91406"
                    stroke="#414141"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              </div>
              <div className={styles.addressbottom}>
                <p>{t.contactPage.dubaiAddress}</p>
                <a href={`tel:${t.contactPage.dubaiPhone}`}>
                  <p>{t.contactPage.dubaiPhone}</p>
                </a>
              </div>
            </div>

            <div className={styles.address}>
              <div className={styles.adresstop}>
                <a href="https://share.google/gVeiWjpTDVlz55WId" target="_blank" rel="noopener noreferrer">
                  <h4>{t.contactPage.sharjahTitle}</h4>
                </a>
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L0.999999 6.91406"
                    stroke="#414141"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              </div>
              <div className={styles.addressbottom}>
                <p>{t.contactPage.sharjahAddress}</p>
                <a href={`tel:${t.contactPage.sharjahPhone}`}>
                  <p>{t.contactPage.sharjahPhone}</p>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.RightContainer}>
            <div className={styles.mapWrapper}>
              <Image src={locationimg} alt="location" className={styles.LocationImg} />

     
              <div className={styles.pin} style={{ top: '46%', left: '74%' }}>
                <svg
                  width="27"
                  height="33"
                  viewBox="0 0 27 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3335 0C5.9818 0 0.000135741 5.83212 0.000135741 12.9919C-0.0481976 23.465 12.8268 32.149 13.3335 32.5C13.3335 32.5 26.7151 23.465 26.6668 13C26.6668 5.83213 20.6851 0 13.3335 0ZM13.3335 19.5C9.65014 19.5 6.6668 16.5912 6.6668 13C6.6668 9.40875 9.65014 6.5 13.3335 6.5C17.0168 6.5 20.0001 9.40875 20.0001 13C20.0001 16.5912 17.0168 19.5 13.3335 19.5Z"
                    fill="#414141"
                  />
                </svg>
                <div className={styles.tooltip}>
                  <strong>{t.contactPage.abuDhabiTitle}</strong>
                  <span>{t.contactPage.abuDhabiAddress}</span>
                  <span>{t.contactPage.abuDhabiPhone}</span>
                </div>
              </div>

              <div className={styles.pin} style={{ top: '64%', left: '35%' }}>
                <svg
                  width="27"
                  height="33"
                  viewBox="0 0 27 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3335 0C5.9818 0 0.000135741 5.83212 0.000135741 12.9919C-0.0481976 23.465 12.8268 32.149 13.3335 32.5C13.3335 32.5 26.7151 23.465 26.6668 13C26.6668 5.83213 20.6851 0 13.3335 0ZM13.3335 19.5C9.65014 19.5 6.6668 16.5912 6.6668 13C6.6668 9.40875 9.65014 6.5 13.3335 6.5C17.0168 6.5 20.0001 9.40875 20.0001 13C20.0001 16.5912 17.0168 19.5 13.3335 19.5Z"
                    fill="#414141"
                  />
                </svg>
                <div className={styles.tooltip}>
                  <strong>{t.contactPage.dubaiTitle}</strong>
                  <span>{t.contactPage.dubaiAddress}</span>
                  <span>{t.contactPage.dubaiPhone}</span>
                </div>
              </div>


              <div className={styles.pin} style={{ top: '59%', left: '50%' }}>
                <svg
                  width="27"
                  height="33"
                  viewBox="0 0 27 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3335 0C5.9818 0 0.000135741 5.83212 0.000135741 12.9919C-0.0481976 23.465 12.8268 32.149 13.3335 32.5C13.3335 32.5 26.7151 23.465 26.6668 13C26.6668 5.83213 20.6851 0 13.3335 0ZM13.3335 19.5C9.65014 19.5 6.6668 16.5912 6.6668 13C6.6668 9.40875 9.65014 6.5 13.3335 6.5C17.0168 6.5 20.0001 9.40875 20.0001 13C20.0001 16.5912 17.0168 19.5 13.3335 19.5Z"
                    fill="#414141"
                  />
                </svg>
                <div className={styles.tooltip}>
                  <strong>{t.contactPage.sharjahTitle}</strong>
                  <span>{t.contactPage.sharjahAddress}</span>
                  <span>{t.contactPage.sharjahPhone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Locations
