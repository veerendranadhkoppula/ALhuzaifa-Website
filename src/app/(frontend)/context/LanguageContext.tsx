'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

type Language = 'en' | 'ar'

type LanguageContextType = {
  language: Language
  toggleLanguage: () => void
  isArabic: boolean
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  isArabic: false,
})

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const router = useRouter()

  const getLocaleFromPath = (): Language => {
    if (pathname.startsWith('/ar')) return 'ar'
    return 'en'
  }

  const [language, setLanguage] = useState<Language>(getLocaleFromPath())

  useEffect(() => {
    setLanguage(getLocaleFromPath())
  }, [pathname])

  const toggleLanguage = () => {
    const newLocale = language === 'en' ? 'ar' : 'en'
    const newPath = pathname.replace(/^\/(en|ar)/, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isArabic: language === 'ar' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
