'use client'
import React, { useState, useEffect, useCallback } from 'react'
import styles from './Glance.module.css'
import Image from 'next/image'
import one from './1.png'
import two from './2.png'
import three from './3.png'
import four from './4.png'
import five from './5.png'
import useEmblaCarousel from 'embla-carousel-react'
import { useTranslation } from '../../../hooks/useTranslation'

const PrevArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11.5" stroke="#8F8677"/>
    <path d="M14.0137 17.842C14.2394 18.0526 14.6053 18.0527 14.8309 17.842C15.0564 17.6311 15.0564 17.2892 14.8309 17.0784L9.39496 12.0006L14.8309 6.92164C15.0564 6.71088 15.0563 6.36898 14.8309 6.15811C14.6053 5.94727 14.2394 5.94732 14.0137 6.15811L8.16916 11.6177C7.94354 11.8285 7.94368 12.1704 8.16916 12.3813L14.0137 17.842Z" fill="#8F8677"/>
  </svg>
)

const NextArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11.5" stroke="#8F8677"/>
    <path d="M9.98626 17.842C9.76055 18.0526 9.39467 18.0527 9.16905 17.842C8.94365 17.6311 8.94365 17.2892 9.16905 17.0784L14.605 12.0006L9.16905 6.92164C8.94356 6.71088 8.94374 6.36898 9.16905 6.15811C9.39472 5.94727 9.76056 5.94732 9.98626 6.15811L15.8308 11.6177C16.0565 11.8285 16.0563 12.1704 15.8308 12.3813L9.98626 17.842Z" fill="#8F8677"/>
  </svg>
)

const ITEMS = [
  { key: 'inHouse', image: one },
  { key: 'facilities', image: two },
  { key: 'artisans', image: three },
  { key: 'turnkey', image: four },
  { key: 'execution', image: five },
]

const Glance = () => {
  const { t } = useTranslation()
  const [isArabic, setIsArabic] = useState(false)

  useEffect(() => {
    setIsArabic(document.documentElement.dir === 'rtl')
  }, [])

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: false,
    direction: isArabic ? 'rtl' : 'ltr',
  })

  const [prevDisabled, setPrevDisabled] = useState(true)
  const [nextDisabled, setNextDisabled] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    if (isArabic) {
      setPrevDisabled(!emblaApi.canScrollNext())
      setNextDisabled(!emblaApi.canScrollPrev())
    } else {
      setPrevDisabled(!emblaApi.canScrollPrev())
      setNextDisabled(!emblaApi.canScrollNext())
    }
  }, [emblaApi, isArabic])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    isArabic ? emblaApi.scrollNext() : emblaApi.scrollPrev()
  }, [emblaApi, isArabic])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    isArabic ? emblaApi.scrollPrev() : emblaApi.scrollNext()
  }, [emblaApi, isArabic])

  return (
    <div className={styles.main}>
      <div className={styles.MainContainer}>


        <div className={styles.desktopSection}>
          <h3 className={styles.heading}>{t.CraftmanshipPage.glanceTitle}</h3>
          <div className={styles.desktopGrid}>
            {ITEMS.map((item) => (
              <div key={item.key} className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={item.image}
                    alt={t.CraftmanshipPage[item.key + 'Title']}
                    fill
                    sizes="20vw"
                    className={styles.image}
                  />
                </div>
                <h4 className={styles.cardTitle}>{t.CraftmanshipPage[item.key + 'Title']}</h4>
                <p className={styles.cardDesc}>{t.CraftmanshipPage[item.key + 'Desc']}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className={styles.mobileSection}>
          <div className={styles.mobileTop}>
            <h3 className={styles.heading}>{t.CraftmanshipPage.glanceTitle}</h3>
            <div className={styles.arrows}>
              <button
                className={`${styles.arrowBtn} ${prevDisabled ? styles.muted : ''}`}
                onClick={scrollPrev}
                disabled={prevDisabled}
                aria-label="Previous"
              >
                <PrevArrow />
              </button>
              <button
                className={`${styles.arrowBtn} ${nextDisabled ? styles.muted : ''}`}
                onClick={scrollNext}
                disabled={nextDisabled}
                aria-label="Next"
              >
                <NextArrow />
              </button>
            </div>
          </div>

          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {ITEMS.map((item) => (
                <div key={item.key} className={styles.emblaSlide}>
                  <div className={styles.slideImageWrap}>
                    <Image
                      src={item.image}
                      alt={t.CraftmanshipPage[item.key + 'Title']}
                      fill
                      sizes="80vw"
                      className={styles.image}
                    />
                  </div>
                  <h4 className={styles.cardTitle}>{t.CraftmanshipPage[item.key + 'Title']}</h4>
                  <p className={styles.cardDesc}>{t.CraftmanshipPage[item.key + 'Desc']}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Glance