'use client'
import React, { useEffect, useCallback, useState, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from './Contact.module.css'
import { useTranslation } from '../../../hooks/useTranslation'
import { useLanguage } from '../../../context/LanguageContext'
import NewsletterPopup from './NewsletterPopup/NewsletterPopup'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ArrowSvg = () => (
  <svg className={styles.arrow} width="17" height="14" viewBox="0 0 17 14" fill="none">
    <path
      d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L1 6.91406"
      stroke="#69594F"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>
)

const Contact = ({ brochureUrl }) => {
  const { t } = useTranslation()
  const { isArabic, language } = useLanguage()
  const locale = language
  const [showNewsletter, setShowNewsletter] = useState(false)

  const sectionRef = useRef(null)

  const autoplay = Autoplay({ delay: 2000, stopOnInteraction: true })
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', direction: isArabic ? 'rtl' : 'ltr' },
    [autoplay],
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  useEffect(() => {
    if (window.innerWidth <= 720) return

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(
        sectionRef.current.querySelectorAll(
          `.${styles.conat}, .${styles.Brochure}, .${styles.newsletter}`,
        ),
      )

      const hLines = sectionRef.current.querySelectorAll(`.${styles.line}`)
      const vLines = sectionRef.current.querySelectorAll(`.${styles.sline}`)

      gsap.set(items, { opacity: 0, y: 30 })
      gsap.set(hLines, { scaleX: 0, transformOrigin: 'left' })
      gsap.set(vLines, { scaleY: 0, transformOrigin: 'top' })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })

      tl.to(hLines[0], {
        scaleX: 1,
        duration: 0.9,
        ease: 'expo.out',
      })

        .to(
          items[0],
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'expo.out',
            force3D: true,
          },
          '-=0.6',
        )

        .to(
          vLines[0],
          {
            scaleY: 1,
            duration: 0.7, // was 1.1
            ease: 'expo.out',
          },
          '-=0.5', // was -=0.8
        )

        .to(
          items[1],
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'expo.out',
            force3D: true,
          },
          '-=0.6',
        )

        .to(
          vLines[1],
          {
            scaleY: 1,
            duration: 0.7,
            ease: 'expo.out',
          },
          '-=0.5',
        )

        .to(
          items[2],
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'expo.out',
            force3D: true,
          },
          '-=0.6',
        )

        .to(
          hLines[1],
          {
            scaleX: 1,
            duration: 0.9,
            ease: 'expo.out',
          },
          '-=0.7',
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])
  const slides = [
    {
      title: t.contact.contactTitle,
      desc: t.contact.contactDesc,
      link: t.contact.contactLink,
      onClick: null,
    },
    {
      title: t.contact.brochureTitle,
      desc: t.contact.brochureDesc,
      link: t.contact.brochureLink,
      onClick: () => brochureUrl && window.open(brochureUrl, '_blank'),
    },
    {
      title: t.contact.newsletterTitle,
      desc: t.contact.newsletterDesc,
      link: t.contact.newsletterLink,
      onClick: () => setShowNewsletter(true),
    },
  ]
  return (
    <div className={styles.Main} ref={sectionRef}>
      <div className={styles.MainContainer}>
        <div className={styles.line}></div>

        <div className={styles.content}>
          <Link href={`/${locale}/contact-us`}>
            <div className={styles.conat}>
              <h3>{t.contact.contactTitle}</h3>
              <p>{t.contact.contactDesc}</p>
              <h5>
                {t.contact.contactLink} <ArrowSvg />
              </h5>
            </div>
          </Link>

          <div className={styles.sline}></div>

          <div className={styles.Brochure}>
            <h3>{t.contact.brochureTitle}</h3>
            <p>{t.contact.brochureDesc}</p>
            <h5 onClick={() => brochureUrl && window.open(brochureUrl, '_blank')}>
              {t.contact.brochureLink} <ArrowSvg />
            </h5>
          </div>

          <div className={styles.sline}></div>

          <div className={styles.newsletter}>
            <h3>{t.contact.newsletterTitle}</h3>
            <p>{t.contact.newsletterDesc}</p>
            <h5 onClick={() => setShowNewsletter(true)}>
              {t.contact.newsletterLink} <ArrowSvg />
            </h5>
          </div>
        </div>

        {/* ✅ MOBILE CAROUSEL FULLY UNTOUCHED */}
        <div className={styles.carouselWrapper}>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {slides.map((slide, index) => (
                <div className={styles.emblaSlide} key={index}>
                  <div className={styles.slideInner}>
                    <h3>{slide.title}</h3>
                    <p>{slide.desc}</p>
                    <h5 onClick={slide.onClick || undefined}>
                      {slide.link} <ArrowSvg />
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.dots}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === selectedIndex ? styles.dotActive : ''}`}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
              />
            ))}
          </div>
        </div>

        <div className={styles.line}></div>
      </div>

      {showNewsletter && <NewsletterPopup onClose={() => setShowNewsletter(false)} />}
    </div>
  )
}

export default Contact
