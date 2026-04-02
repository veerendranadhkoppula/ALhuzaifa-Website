'use client'
import React, { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from './Contact.module.css'
import { useTranslation } from '../../../hooks/useTranslation'
import { useLanguage } from '../../../context/LanguageContext'
import NewsletterPopup from './NewsletterPopup/NewsletterPopup'
import Link from 'next/link'

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
    <div className={styles.Main}>
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
            <h5
              onClick={() => brochureUrl && window.open(brochureUrl, '_blank')}
              style={{ cursor: brochureUrl ? 'pointer' : 'default' }}
            >
              {t.contact.brochureLink} <ArrowSvg />
            </h5>
          </div>
          <div className={styles.sline}></div>
          <div className={styles.newsletter}>
            <h3>{t.contact.newsletterTitle}</h3>
            <p>{t.contact.newsletterDesc}</p>
            <h5 onClick={() => setShowNewsletter(true)} style={{ cursor: 'pointer' }}>
              {t.contact.newsletterLink} <ArrowSvg />
            </h5>
          </div>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {slides.map((slide, index) => (
                <div className={styles.emblaSlide} key={index}>
                  <div className={styles.slideInner}>
                    <h3>{slide.title}</h3>
                    <p>{slide.desc}</p>
                    <h5
                      onClick={slide.onClick || undefined}
                      style={slide.onClick ? { cursor: 'pointer' } : undefined}
                    >
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
                aria-label={`Go to slide ${index + 1}`}
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
