'use client'
import React from 'react'
import styles from './Landing.module.css'
import { useTranslation } from '../../../hooks/useTranslation'
import AnimatedText from '../../AnimatedText/AnimatedText'

const Landing = () => {
        const { t } = useTranslation()
  return (
    <>
      <div className={styles.Main}>
        <div className={styles.MainContainer}>
                <AnimatedText type="heading" tag="h3" delay={1} isHero>
                  {t.CraftmanshipPage.landingHeading}     
                  </AnimatedText>
        <AnimatedText type="description" tag="p" delay={2} isHero>
          {t.CraftmanshipPage.landingDesc}
          </AnimatedText>
        </div>
      </div>
    </>
  )
}

export default Landing
