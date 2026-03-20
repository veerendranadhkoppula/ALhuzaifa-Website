'use client'
import React, { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './Residence.module.css'
import Image from 'next/image'
import one from './1.png'
import two from './2.png'
import three from './3.png'
import { useLanguage } from '../../../context/LanguageContext'
import { useTranslation } from '../../../hooks/useTranslation'

const PrevArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11.5" stroke="#8F8677" />
    <path
      d="M14.0137 17.842C14.2394 18.0526 14.6053 18.0527 14.8309 17.842C15.0564 17.6311 15.0564 17.2892 14.8309 17.0784L9.39496 12.0006L14.8309 6.92164C15.0564 6.71088 15.0563 6.36898 14.8309 6.15811C14.6053 5.94727 14.2394 5.94732 14.0137 6.15811L8.16916 11.6177C7.94354 11.8285 7.94368 12.1704 8.16916 12.3813L14.0137 17.842Z"
      fill="#8F8677"
    />
  </svg>
)

const NextArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11.5" stroke="#8F8677" />
    <path
      d="M9.98626 17.842C9.76055 18.0526 9.39467 18.0527 9.16905 17.842C8.94365 17.6311 8.94365 17.2892 9.16905 17.0784L14.605 12.0006L9.16905 6.92164C8.94356 6.71088 8.94374 6.36898 9.16905 6.15811C9.39472 5.94727 9.76056 5.94732 9.98626 6.15811L15.8308 11.6177C16.0565 11.8285 16.0563 12.1704 15.8308 12.3813L9.98626 17.842Z"
      fill="#8F8677"
    />
  </svg>
)

const LinkArrow = () => (
  <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L1 6.91406"
      stroke="#69594F"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>
)

const Residence = () => {
  const { t } = useTranslation()
  const { isArabic } = useLanguage()


  const projects = [
    { img: one, label: t.portfolio.project1 },
    { img: two, label: t.portfolio.project2 },
    { img: three, label: t.portfolio.project3 },
  ]

const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', dragFree: false, direction: isArabic ? 'rtl' : 'ltr' })
  
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
    <div className={styles.Main}>
      <div className={styles.MainContainer}>
        <div className={styles.heading}>
          <h3 className={styles.headingText}>
            <span className={styles.thin}>{t.portfolio.label}</span>
            <span className={styles.bold}> - {t.portfolio.residence}</span>
          </h3>
          <div className={styles.arrows}>
            <button
              className={`${styles.arrowBtn} ${prevDisabled ? styles.arrowMuted : ''}`}
              onClick={scrollPrev}
              disabled={prevDisabled}
              aria-label="Previous"
            >
              <PrevArrow />
            </button>
            <button
              className={`${styles.arrowBtn} ${nextDisabled ? styles.arrowMuted : ''}`}
              onClick={scrollNext}
              disabled={nextDisabled}
              aria-label="Next"
            >
              <NextArrow />
            </button>
          </div>
        </div>

        <div className={styles.desktopGrid}>
          {projects.map((p, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.imgWrapper}>
                <Image src={p.img} alt={p.label} fill className={styles.img} sizes="33vw" />
              </div>
              <div className={styles.cardLabel}>
                {p.label}
                <LinkArrow />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.mobileCarousel}>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {projects.map((p, i) => (
                <div className={styles.emblaSlide} key={i}>
                  <div className={styles.imgWrapper}>
                    <Image src={p.img} alt={p.label} fill className={styles.img} sizes="85vw" />
                  </div>
                  <div className={styles.cardLabel}>
                    {p.label}
                    <LinkArrow />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Residence
