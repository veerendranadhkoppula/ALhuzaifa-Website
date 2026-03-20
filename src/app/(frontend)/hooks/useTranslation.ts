import { useLanguage } from '../context/LanguageContext'
import en from '../locales/en.json'
import ar from '../locales/ar.json'

const translations = { en, ar } as const

type Language = 'en' | 'ar'

export const useTranslation = () => {
  const { language, isArabic } = useLanguage()
  const t = translations[language as Language]
  return { t, isArabic, language }
}
