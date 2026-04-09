'use client'
import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from './logo.svg'
import { useTranslation } from '../../hooks/useTranslation'
import { useLanguage } from '../../context/LanguageContext'

const Footer = () => {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const locale = language

  return (
    <div className={styles.main}>
      <div className={styles.topContainer}>
        <div className={styles.logoArea}>
          <Link href={`/${locale}`}>
            <Image src={logo} alt="Design Studio by Al Huzaifa" className={styles.logo} />
          </Link>
        </div>

        <div className={styles.navColumns}>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t.footer.studioTitle}</h4>
            <ul className={styles.columnList}>
              <li><Link href={`/${locale}/about-us`}>{t.footer.aboutUs}</Link></li>
              <li><Link href={`/${locale}/craftmanship`}>{t.footer.craftmanship}</Link></li>
              <li><Link href={`/${locale}/portfolio`}>{t.footer.portfolio}</Link></li>
              <li><Link href={`/${locale}/contact-us`}>{t.footer.contact}</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t.footer.servicesTitle}</h4>
            <ul className={styles.columnList}>
              <li><Link href={`/${locale}/portfolio/residential`}>{t.footer.residential}</Link></li>
              <li><Link href={`/${locale}/portfolio/hospitality`}>{t.footer.hospitality}</Link></li>
              <li><Link href={`/${locale}/portfolio/commercial`}>{t.footer.commercial}</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t.footer.legalTitle}</h4>
            <ul className={styles.columnList}>
              <li><Link href={`/${locale}/privacy-policy`}>{t.footer.privacyPolicy}</Link></li>
              <li><Link href={`/${locale}/terms-conditions`}>{t.footer.termsConditions}</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t.footer.connectTitle}</h4>
            <ul className={styles.columnList}>
              <li><a href="tel:+971800888247">{t.footer.phone}</a></li>
              <li><a href="mailto:Info@alhuzaifaproperties.com">{t.footer.email}</a></li>
              <li><a href="https://www.instagram.com/alhuzaifadesignstudio/?hl=en" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>{t.footer.instagram}</a></li>
              <li><a href="https://www.linkedin.com/company/al-huzaifa-furniture/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>{t.footer.linkedin}</a></li>
              <li><a href="https://www.facebook.com/p/Al-Huzaifa-Design-Studio-100076170074054/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>{t.footer.facebook}</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.mobileColumns}>
          <div className={styles.mobileTopRow}>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>{t.footer.studioTitle}</h4>
              <ul className={styles.columnList}>
                <li><Link href={`/${locale}/about-us`}>{t.footer.aboutUs}</Link></li>
                <li><Link href={`/${locale}/craftmanship`}>{t.footer.craftmanship}</Link></li>
                <li><Link href={`/${locale}/portfolio`}>{t.footer.portfolio}</Link></li>
                <li><Link href={`/${locale}/contact`}>{t.footer.contact}</Link></li>
              </ul>
            </div>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>{t.footer.servicesTitle}</h4>
              <ul className={styles.columnList}>
                <li><Link href={`/${locale}/portfolio/residential`}>{t.footer.residential}</Link></li>
                <li><Link href={`/${locale}/portfolio/hospitality`}>{t.footer.hospitality}</Link></li>
                <li><Link href={`/${locale}/portfolio/commercial`}>{t.footer.commercial}</Link></li>
              </ul>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t.footer.connectTitle}</h4>
            <ul className={styles.columnList}>
              <li><a href="tel:+971800888247">{t.footer.phone}</a></li>
              <li><a href="mailto:Info@alhuzaifaproperties.com">{t.footer.email}</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>{t.footer.instagram}</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>{t.footer.linkedin}</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>{t.footer.facebook}</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t.footer.legalTitle}</h4>
            <ul className={styles.columnList}>
              <li><Link href={`/${locale}/privacy-policy`}>{t.footer.privacyPolicy}</Link></li>
              <li><Link href={`/${locale}/terms-conditions`}>{t.footer.termsConditions}</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomWrapper}>
        <div className={styles.bottomLine}></div>
        <p className={styles.copyright}>{t.footer.copyright}</p>
      </div>
    </div>
  )
}

export default Footer