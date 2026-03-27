'use client'
import React, { useEffect, useState } from 'react'
import LoaderWrapper from '../Loader/LoaderWrapper'
import { LanguageProvider } from '../../context/LanguageContext'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import NotFound from './NotFound'

export default function NotFoundClient() {
  const [locale, setLocale] = useState('en')

  useEffect(() => {
    const path = typeof window !== 'undefined' ? window.location.pathname : ''
    setLocale(path.startsWith('/ar') ? 'ar' : 'en')
    // Also set document direction to ensure components that read dir at runtime update
    if (typeof document !== 'undefined') {
      document.documentElement.lang = path.startsWith('/ar') ? 'ar' : 'en'
      document.documentElement.dir = path.startsWith('/ar') ? 'rtl' : 'ltr'
    }
  }, [])

  return (
    <div lang={locale === 'ar' ? 'ar' : 'en'} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
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
