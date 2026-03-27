'use client'
import React, { useEffect, useState } from 'react'
import LoaderWrapper from '../Loader/LoaderWrapper'
import { LanguageProvider } from '../../context/LanguageContext'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import NotFound from './NotFound'
import styles from '../../frontend-root.module.css'
import { Poppins, Noto_Kufi_Arabic } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

const kufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-kufi',
})

export default function NotFoundClient() {
  const [locale, setLocale] = useState('en')

  useEffect(() => {
    const path = typeof window !== 'undefined' ? window.location.pathname : ''
    setLocale(path.startsWith('/ar') ? 'ar' : 'en')

    if (typeof document !== 'undefined') {
      document.documentElement.lang = path.startsWith('/ar') ? 'ar' : 'en'
      document.documentElement.dir = path.startsWith('/ar') ? 'rtl' : 'ltr'
    }
  }, [])

  return (
    <div
      lang={locale === 'ar' ? 'ar' : 'en'}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={`${poppins.variable} ${kufi.variable} ${styles.frontendRoot}`}
    >
      <LoaderWrapper />
      <LanguageProvider>
        <Navbar />
        <main>
          <NotFound />
        </main>
        <Footer />
      </LanguageProvider>
    </div>
  )
}
