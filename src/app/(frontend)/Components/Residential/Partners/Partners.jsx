'use client'
import React, { useRef, useEffect } from 'react'
import styles from './Partners.module.css'
import Image from 'next/image'
import one from './1.png'
import two from './2.png'
import three from './3.png'
import four from './4.png'
import five from './5.png'
import six from './6.png'
import { useTranslation } from '../../../hooks/useTranslation'

const ALL_LOGOS = [one, two, three, four, five, six]

const MarqueeRow = ({ logos, reverse = false, row3 = false }) => (
  <div className={styles.marqueeWrapper}>
    <div
      className={`${styles.marqueeTrack} ${reverse ? styles.marqueeReverse : ''} ${row3 ? styles.marqueeRow3 : ''}`}
    >
      {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
        <div key={i} className={styles.logoItem}>
          <Image
            src={logo}
            alt={`partner ${(i % logos.length) + 1}`}
            className={styles.logoImg}
          />
        </div>
      ))}
    </div>
  </div>
)

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

        <div className={styles.right} ref={rightRef}>
          <div className={styles.rowWrap}>
            <MarqueeRow logos={ALL_LOGOS} reverse={false} />
            <div className={styles.divider} />
          </div>
          <div className={styles.rowWrap}>
            <MarqueeRow logos={ALL_LOGOS} reverse={true} />
            <div className={styles.divider} />
          </div>
          <div className={styles.rowWrap}>
            <MarqueeRow logos={ALL_LOGOS} reverse={false} row3={true} />
            <div className={styles.divider} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Partners