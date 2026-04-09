'use client'
import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from './1.gif'
import { useTranslation } from '../../hooks/useTranslation'
import { useLanguage } from '../../context/LanguageContext'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const { t } = useTranslation()
  const { toggleLanguage, language } = useLanguage()
  const [hide, setHide] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const locale = language
  const pathname = usePathname()

  const isActive = (href) => pathname === href || pathname.startsWith(href + '/')

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
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
      <div className={`${styles.Main} ${hide ? styles.hide : ''}`}>
        <div className={styles.MainContainer}>
          <div className={styles.Left}>
            <Link href={`/${locale}/about-us`}>
              <h4 className={isActive(`/${locale}/about-us`) ? styles.activeLink : ''}>
                {t.navbar.aboutUs}
              </h4>
            </Link>
            <Link href={`/${locale}/services`}>
              <h4 className={isActive(`/${locale}/services`) ? styles.activeLink : ''}>
                {t.navbar.services}
              </h4>
            </Link>
            <Link href={`/${locale}/craftsmanship`}>
              <h4 className={isActive(`/${locale}/craftsmanship`) ? styles.activeLink : ''}>
                {t.navbar.craftmanship}
              </h4>
            </Link>
          </div>

          <div className={styles.MobileLeft} onClick={() => setMenuOpen(true)}>
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H24V2.66667H0V0ZM0 6.66667H24V9.33333H0V6.66667ZM0 13.3333H24V16H0V13.3333Z"
                fill="#414141"
              />
            </svg>
          </div>

          <div className={styles.Center}>
            <Link href={`/${locale}`}>
              <Image src={logo} alt="logo" />
            </Link>
          </div>

          <div className={styles.Right}>
            <div className={styles.langWrapper}>
              <button className={styles.langBtn}>
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.6484 10.6484C20.6484 16.1713 16.1713 20.6484 10.6484 20.6484M20.6484 10.6484C20.6484 5.12559 16.1713 0.648438 10.6484 0.648438M20.6484 10.6484H0.648438M10.6484 20.6484C5.12559 20.6484 0.648438 16.1713 0.648438 10.6484M10.6484 20.6484C8.08067 17.9523 6.64844 14.3717 6.64844 10.6484C6.64844 6.92518 8.08067 3.34459 10.6484 0.648438M10.6484 20.6484C13.2162 17.9523 14.6484 14.3717 14.6484 10.6484C14.6484 6.92518 13.2162 3.34459 10.6484 0.648438M0.648438 10.6484C0.648438 5.12559 5.12559 0.648438 10.6484 0.648438" stroke="#414141" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                <svg
                  className={`${styles.dropdownChevron} ${languageOpen ? styles.dropdownChevronOpen : ''}`}
                  width="12"
                  height="7"
                  viewBox="0 0 13 7"
                  fill="none"
                >
                  <path
                    d="M6.0625 6.75L12.1247 0H0.000322342L6.0625 6.75Z"
                    fill="#414141"
                    fillOpacity="0.5"
                  />
                </svg>
              </button>
              <div className={styles.langDropdown}>
                <span
                  onClick={() => {
                    if (language !== 'en') toggleLanguage()
                  }}
                >
                  En
                </span>
                <span
                  onClick={() => {
                    if (language !== 'ar') toggleLanguage()
                  }}
                >
                  Ar
                </span>
              </div>
            </div>
            <div className={styles.dropdownWrapper}>
              <Link href={`/${locale}/projects`} className={styles.servicesLink}>
                <h4 className={isActive(`/${locale}/portfolio`) ? styles.activeLink : ''}>
                  {t.navbar.portfolio}
                </h4>
                <svg
                  className={styles.dropdownChevron}
                  width="12"
                  height="7"
                  viewBox="0 0 13 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.0625 6.75L12.1247 0H0.000322342L6.0625 6.75Z"
                    fill="#414141"
                    fillOpacity="0.5"
                  />
                </svg>
              </Link>
              <div className={styles.dropdown}>
                <Link href={`/${locale}/projects/hospitality`}>
                  <span>{t.navbar.hospitality}</span>
                </Link>
                <Link href={`/${locale}/projects/residential`}>
                  <span>{t.navbar.residential}</span>
                </Link>
                <Link href={`/${locale}/projects/commercial`}>
                  <span>{t.navbar.commercial}</span>
                </Link>
              </div>
            </div>
            <Link href={`/${locale}/contact-us`}>
              <h4 className={isActive(`/${locale}/contact-us`) ? styles.activeLink : ''}>
                {t.navbar.contact}
              </h4>
            </Link>
          </div>

          <div className={styles.MobileRight}>
            <h3 onClick={toggleLanguage} style={{ cursor: 'pointer' }}>
              {t.navbar.languageSwitch}
            </h3>
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
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.25 8.75L8.75 26.25M8.75 8.75L26.25 26.25"
                stroke="#414141"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className={styles.sheetDivider} />

        <div className={styles.sheetLinks}>
          <Link href={`/${locale}/about-us`}>
            <div className={styles.sheetLinkItem} onClick={() => setMenuOpen(false)}>
              <span className={isActive(`/${locale}/about-us`) ? styles.activeLink : ''}>
                {t.navbar.aboutUs}
              </span>
            </div>
          </Link>

          <Link href={`/${locale}/services`}>
            <div className={styles.sheetLinkItem} onClick={() => setMenuOpen(false)}>
              <span className={isActive(`/${locale}/services`) ? styles.activeLink : ''}>
                {t.navbar.services}
              </span>
            </div>
          </Link>

          <Link href={`/${locale}/craftsmanship`}>
            <div className={styles.sheetLinkItem} onClick={() => setMenuOpen(false)}>
              <span className={isActive(`/${locale}/craftsmanship`) ? styles.activeLink : ''}>
                {t.navbar.craftmanship}
              </span>
            </div>
          </Link>

          <div
            className={styles.sheetLinkItem}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Link href={`/${locale}/projects`} onClick={() => setMenuOpen(false)}>
              <span className={isActive(`/${locale}/portfolio`) ? styles.activeLink : ''}>
                {t.navbar.portfolio}
              </span>
            </Link>
            <span
              style={{ padding: '0 8px', cursor: 'pointer' }}
              onClick={(e) => {
                e.stopPropagation()
                setServicesOpen(!servicesOpen)
              }}
            >
              <svg
                style={{
                  transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s',
                }}
                width="12"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.0625 6.75L12.1247 0H0.000322342L6.0625 6.75Z"
                  fill="#414141"
                  fillOpacity="0.5"
                />
              </svg>
            </span>
          </div>
          {servicesOpen && (
            <div className={styles.sheetSubLinks}>
              <Link href={`/${locale}/projects/hospitality`}>
                <div className={styles.sheetSubItem} onClick={() => setMenuOpen(false)}>
                  <span>{t.navbar.hospitality}</span>
                </div>
              </Link>
              <Link href={`/${locale}/projects/residential`}>
                <div className={styles.sheetSubItem} onClick={() => setMenuOpen(false)}>
                  <span>{t.navbar.residential}</span>
                </div>
              </Link>
              <Link href={`/${locale}/projects/commercial`}>
                <div className={styles.sheetSubItem} onClick={() => setMenuOpen(false)}>
                  <span>{t.navbar.commercial}</span>
                </div>
              </Link>
            </div>
          )}

          <Link href={`/${locale}/contact-us`}>
            <div className={styles.sheetLinkItem} onClick={() => setMenuOpen(false)}>
              <span className={isActive(`/${locale}/contact-us`) ? styles.activeLink : ''}>
                {t.navbar.contact}
              </span>
            </div>
          </Link>
        </div>

        <div className={styles.sheetBottom}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6654 8.0026C14.6654 11.6845 11.6806 14.6693 7.9987 14.6693M14.6654 8.0026C14.6654 4.32071 11.6806 1.33594 7.9987 1.33594M14.6654 8.0026H1.33203M7.9987 14.6693C4.3168 14.6693 1.33203 11.6845 1.33203 8.0026M7.9987 14.6693C6.28685 12.8718 5.33203 10.4848 5.33203 8.0026C5.33203 5.52043 6.28685 3.13337 7.9987 1.33594M7.9987 14.6693C9.71054 12.8718 10.6654 10.4848 10.6654 8.0026C10.6654 5.52043 9.71054 3.13337 7.9987 1.33594M1.33203 8.0026C1.33203 4.32071 4.3168 1.33594 7.9987 1.33594"
              stroke="#414141"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className={styles.arabicText}
            onClick={toggleLanguage}
            style={{ cursor: 'pointer' }}
          >
            {t.navbar.languageSwitch}
          </span>
        </div>
      </div>
    </>
  )
}

export default Navbar
