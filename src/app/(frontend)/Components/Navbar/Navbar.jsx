"use client";
import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from './1.gif'
import { useTranslation } from '../../hooks/useTranslation'
import { useLanguage } from '../../context/LanguageContext'

const Navbar = () => {
  const { t } = useTranslation()
  const { toggleLanguage, language } = useLanguage()
  const [hide, setHide] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const locale = language

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setHide(true)
      } else {
        setHide(false)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <div className={`${styles.Main} ${hide ? styles.hide : ""}`}>
        <div className={styles.MainContainer}>

          <div className={styles.Left}>
            <Link href={`/${locale}/about-us`}><h4>{t.navbar.aboutUs}</h4></Link>
            <div className={styles.dropdownWrapper}>
              <h4>{t.navbar.services}</h4>
              <div className={styles.dropdown}>
                <Link href={`/${locale}/services/hospitality`}><span>{t.navbar.hospitality}</span></Link>
                <Link href={`/${locale}/services/residential`}><span>{t.navbar.residential}</span></Link>
                <Link href={`/${locale}/services/commercial`}><span>{t.navbar.commercial}</span></Link>
              </div>
            </div>
            <Link href={`/${locale}/craftmanship`}><h4>{t.navbar.craftmanship}</h4></Link>
          </div>

          <div className={styles.MobileLeft} onClick={() => setMenuOpen(true)}>
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H24V2.66667H0V0ZM0 6.66667H24V9.33333H0V6.66667ZM0 13.3333H24V16H0V13.3333Z" fill="#414141"/>
            </svg>
          </div>

          <div className={styles.Center}>
            <Link href={`/${locale}`}>
              <Image src={logo} alt="logo" />
            </Link>
          </div>

          <div className={styles.Right}>
            <h3 onClick={toggleLanguage} style={{ cursor: 'pointer' }}>{t.navbar.languageSwitch}</h3>
            <Link href={`/${locale}/portfolio`}><h4>{t.navbar.portfolio}</h4></Link>
            <Link href={`/${locale}/contact`}><h4>{t.navbar.contact}</h4></Link>
          </div>

          <div className={styles.MobileRight}>
            <h3 onClick={toggleLanguage} style={{ cursor: 'pointer' }}>{t.navbar.languageSwitch}</h3>
          </div>

        </div>
      </div>

      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      <div className={`${styles.sheet} ${menuOpen ? styles.sheetOpen : ''}`}>

        <div className={styles.sheetTop}>
          <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.25 8.75L8.75 26.25M8.75 8.75L26.25 26.25" stroke="#414141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className={styles.sheetDivider} />

        <div className={styles.sheetLinks}>
          {[
            { key: 'aboutUs', label: t.navbar.aboutUs, href: `/${locale}/about-us` },
            { key: 'craftmanship', label: t.navbar.craftmanship, href: `/${locale}/craftmanship` },
            { key: 'portfolio', label: t.navbar.portfolio, href: `/${locale}/portfolio` },
            { key: 'contact', label: t.navbar.contact, href: `/${locale}/contact` },
          ].map((item) => (
            <Link key={item.key} href={item.href}>
              <div className={styles.sheetLinkItem} onClick={() => setMenuOpen(false)}>
                <span>{item.label}</span>
              </div>
            </Link>
          ))}

          <div className={styles.sheetLinkItem} onClick={() => setServicesOpen(!servicesOpen)}>
            <span>{t.navbar.services}</span>
          </div>
          {servicesOpen && (
            <div className={styles.sheetSubLinks}>
              <Link href={`/${locale}/services/hospitality`}>
                <div className={styles.sheetSubItem} onClick={() => setMenuOpen(false)}>
                  <span>{t.navbar.hospitality}</span>
                </div>
              </Link>
              <Link href={`/${locale}/services/residential`}>
                <div className={styles.sheetSubItem} onClick={() => setMenuOpen(false)}>
                  <span>{t.navbar.residential}</span>
                </div>
              </Link>
              <Link href={`/${locale}/services/commercial`}>
                <div className={styles.sheetSubItem} onClick={() => setMenuOpen(false)}>
                  <span>{t.navbar.commercial}</span>
                </div>
              </Link>
            </div>
          )}
        </div>

        <div className={styles.sheetBottom}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6654 8.0026C14.6654 11.6845 11.6806 14.6693 7.9987 14.6693M14.6654 8.0026C14.6654 4.32071 11.6806 1.33594 7.9987 1.33594M14.6654 8.0026H1.33203M7.9987 14.6693C4.3168 14.6693 1.33203 11.6845 1.33203 8.0026M7.9987 14.6693C6.28685 12.8718 5.33203 10.4848 5.33203 8.0026C5.33203 5.52043 6.28685 3.13337 7.9987 1.33594M7.9987 14.6693C9.71054 12.8718 10.6654 10.4848 10.6654 8.0026C10.6654 5.52043 9.71054 3.13337 7.9987 1.33594M1.33203 8.0026C1.33203 4.32071 4.3168 1.33594 7.9987 1.33594" stroke="#414141" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className={styles.arabicText} onClick={toggleLanguage} style={{ cursor: 'pointer' }}>
            {t.navbar.languageSwitch}
          </span>
        </div>

      </div>
    </>
  )
}

export default Navbar