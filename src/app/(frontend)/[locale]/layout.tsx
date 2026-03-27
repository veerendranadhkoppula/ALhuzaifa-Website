import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Poppins, Noto_Kufi_Arabic } from 'next/font/google'
import { LanguageProvider } from '../context/LanguageContext'
import LoaderWrapper from '../Components/Loader/LoaderWrapper'
import styles from '../frontend-root.module.css'

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

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isArabic = locale === 'ar'

  return {
    title: isArabic ? 'استوديو الحظيفة للتصميم' : 'Al Huzaifa Design Studio',
    description: isArabic ? 'استوديو تصميم داخلي راقٍ' : 'A luxury interior design studio',
    icons: {
      icon: '/favicon.png',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const isArabic = locale === 'ar'

  // Only the root layout should render <html> and <body>.
  // Use a wrapper div to set dir/lang and apply font variables.
  return (
    <div
      lang={isArabic ? 'ar' : 'en'}
      dir={isArabic ? 'rtl' : 'ltr'}
      className={`${poppins.variable} ${kufi.variable} ${styles.frontendRoot}`}
    >
      <LoaderWrapper />
      <LanguageProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </LanguageProvider>
    </div>
  )
}
