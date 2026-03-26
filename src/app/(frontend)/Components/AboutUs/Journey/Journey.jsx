'use client'
import React, { useState, useRef, useEffect } from 'react'
import styles from './Journey.module.css'
import Image from 'next/image'
import one from './1.png'
import two from './2.png'
import { useTranslation } from '../../../hooks/useTranslation'
import { useLanguage } from '../../../context/LanguageContext'


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

const Journey = () => {
  const { t } = useTranslation()
  const { isArabic } = useLanguage()

  const milestones = t.aboutUs.milestones.map((m, i) => ({
    ...m,
    img: i % 2 === 0 ? one : two
  }))

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [lineStyle, setLineStyle] = useState({ left: '0px', width: '0px' })
  const timelineRef = useRef(null)
  const autoPlayRef = useRef(null)

  const current = milestones[selectedIndex]
  const next = milestones[selectedIndex + 1] ?? null

  const updateLine = () => {
    if (!timelineRef.current) return
    const buttons = timelineRef.current.querySelectorAll('button')
    if (!buttons[selectedIndex] || !buttons[selectedIndex + 1]) return
    const containerRect = timelineRef.current.getBoundingClientRect()
    const startBtn = buttons[selectedIndex]
    const endBtn = buttons[selectedIndex + 1]
    const startRect = startBtn.getBoundingClientRect()
    const endRect = endBtn.getBoundingClientRect()

    const isRtl = document.documentElement.dir === 'rtl'

    let left, right

    if (isRtl) {
      left = endRect.right - containerRect.left + 8
      right = startRect.left - containerRect.left - 8
    } else {
      left = startRect.right - containerRect.left + 8
      right = endRect.left - containerRect.left - 8
    }

    setLineStyle({ left: `${left}px`, width: `${Math.max(right - left, 0)}px` })
  }

  useEffect(() => {
    updateLine()

    if (timelineRef.current) {
      const buttons = timelineRef.current.querySelectorAll('button')
      if (buttons[selectedIndex]) {
        const container = timelineRef.current
        const btn = buttons[selectedIndex]
        const btnLeft = btn.offsetLeft
        const btnWidth = btn.offsetWidth
        const containerWidth = container.offsetWidth
        container.scrollLeft = btnLeft - containerWidth / 2 + btnWidth / 2
      }
    }

    window.addEventListener('resize', updateLine)
    return () => window.removeEventListener('resize', updateLine)
  }, [selectedIndex])

const selectedIndexRef = useRef(0)

  const goToIndex = (index) => {
    setAnimating(true)
    setTimeout(() => {
      setSelectedIndex(index)
      selectedIndexRef.current = index
      setAnimating(false)
    }, 300)
  }

  const startAutoPlay = () => {
    stopAutoPlay()
    autoPlayRef.current = setInterval(() => {
      const isRtl = document.documentElement.dir === 'rtl'
      const cur = selectedIndexRef.current
      const last = milestones.length - 1
      const nextIdx = isRtl
        ? cur > 0 ? cur - 1 : last
        : cur < last ? cur + 1 : 0
      goToIndex(nextIdx)
    }, 2000)
  }
  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }
  }

  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [isArabic, milestones.length])

  const handleSelect = (index) => {
    if (index === selectedIndex || animating) return
    stopAutoPlay()
    goToIndex(index)
    startAutoPlay()
  }

  const handlePrev = () => {
    if (selectedIndex > 0) handleSelect(selectedIndex - 1)
  }

  const handleNext = () => {
    if (selectedIndex < milestones.length - 1) handleSelect(selectedIndex + 1)
  }

  return (
    <div className={styles.Main}>
      <div className={styles.MainContainer}>

        <div className={styles.top}>
          <h3>{t.aboutUs.journeyTitle}</h3>
        </div>

        <div className={`${styles.content} ${animating ? styles.fadeOut : styles.fadeIn}`}>

          <div className={styles.desktopContent}>
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <Image src={current.img} alt={current.title} fill className={styles.img} />
              </div>
              <div className={styles.cardText}>
                <span className={styles.year}>{current.year}</span>
                <h4 className={styles.title}>{current.title}</h4>
                <p className={styles.desc}>{current.desc}</p>
              </div>
            </div>

            {next && (
              <div className={styles.card}>
                <div className={styles.cardImg}>
                  <Image src={next.img} alt={next.title} fill className={styles.img} />
                </div>
                <div className={styles.cardText}>
                  <span className={styles.year}>{next.year}</span>
                  <h4 className={styles.title}>{next.title}</h4>
                  <p className={styles.desc}>{next.desc}</p>
                </div>
              </div>
            )}
          </div>

          <div className={styles.mobileContent}>
            <span className={styles.year}>{current.year}</span>
            <h4 className={styles.title}>{current.title}</h4>
            <p className={styles.desc}>{current.desc}</p>
            <div className={styles.mobileArrows}>
              <button
                className={`${styles.arrowBtn} ${selectedIndex === 0 ? styles.arrowMuted : ''}`}
                onClick={handlePrev}
                disabled={selectedIndex === 0}
              >
                <PrevArrow />
              </button>
              <button
                className={`${styles.arrowBtn} ${selectedIndex === milestones.length - 1 ? styles.arrowMuted : ''}`}
                onClick={handleNext}
                disabled={selectedIndex === milestones.length - 1}
              >
                <NextArrow />
              </button>
            </div>
            <div className={styles.mobileImg}>
              <Image src={current.img} alt={current.title} fill className={styles.img} />
            </div>
          </div>

        </div>

        <div className={styles.timelineWrapper}>
          <div className={styles.timelineLine} />
          <div className={styles.timelineActiveLine} style={lineStyle} />
          <div className={styles.timelineYears} ref={timelineRef}>
            {milestones.map((m, i) => (
              <button
                key={m.year}
                className={`${styles.yearBtn} ${i === selectedIndex ? styles.yearActive : ''} ${i === selectedIndex + 1 && next ? styles.yearActiveEnd : ''}`}
                onClick={() => handleSelect(i)}
              >
                {m.year}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Journey