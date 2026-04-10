'use client'
import React from 'react'
import styles from './Landing.module.css'
import AnimatedText from '../../AnimatedText/AnimatedText'
import { useTranslation } from '../../../hooks/useTranslation'

const Landing = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainContainer}>
          <AnimatedText type="heading" tag="h3" delay={1} isHero>
            {t.servicesPage.landingTitle}
          </AnimatedText>
        <AnimatedText type="description" tag="p" delay={2} isHero>
            {t.servicesPage.landingDesc}
           </AnimatedText>
        </div>
      </div>
    </>
  )
}

export default Landing