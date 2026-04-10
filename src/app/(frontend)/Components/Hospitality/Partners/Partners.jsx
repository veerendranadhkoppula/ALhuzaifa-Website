'use client'
import React, { useRef, useEffect } from 'react'
import styles from './Partners.module.css'
import Image from 'next/image'

import { useTranslation } from '../../../hooks/useTranslation'

const ALL_LOGOS = [
  '/striplogos/1.svg',
  '/striplogos/2.svg',
  '/striplogos/3.svg',
  '/striplogos/4.svg',
  '/striplogos/5.svg',
  '/striplogos/6.svg',
  '/striplogos/7.svg',
  '/striplogos/8.svg',
  '/striplogos/9.svg',
  '/striplogos/10.svg',
  '/striplogos/11.svg',
  '/striplogos/12.svg',
  '/striplogos/13.svg',
  '/striplogos/14.svg',
  '/striplogos/15.svg',
  '/striplogos/16.svg',
  '/striplogos/17.svg',
  '/striplogos/18.svg',
  '/striplogos/19.svg',
  '/striplogos/20.svg',
  '/striplogos/21.svg',
  '/striplogos/22.svg',
  '/striplogos/23.svg',
  '/striplogos/24.svg',
]

const Partners = () => {
  const { t } = useTranslation()
  const rightRef = useRef(null)

  useEffect(() => {
    const el = rightRef.current
    if (!el) return
    const update = () => {
      el.style.setProperty('--right-width', `${el.offsetWidth}px`)
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div className={styles.main}>
      <div className={styles.MainContainer}>

        <div className={styles.left}>
          <h3>{t.residentialPage.partnertitle}</h3>
          <p>{t.residentialPage.partnerDesc}</p>
        </div>

        <div className={styles.bottom} ref={rightRef}>
          <div className={styles.divider} />
          <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeTrack}>
              {[...ALL_LOGOS, ...ALL_LOGOS, ...ALL_LOGOS, ...ALL_LOGOS].map((logo, i) => (
                <div key={i} className={styles.logoItem}>
                  <Image
                    src={logo}
                     width={100}   
  height={100}
                    alt={`partner ${(i % ALL_LOGOS.length) + 1}`}
                    className={styles.logoImg}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.divider} />
        </div>

      </div>
    </div>
  )
}

export default Partners