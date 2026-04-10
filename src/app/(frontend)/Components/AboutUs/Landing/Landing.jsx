'use client'
import styles from './Landing.module.css'
import { useTranslation } from '../../../hooks/useTranslation'
import AnimatedText from '../../AnimatedText/AnimatedText'



const Landing = () => {
  const { t } = useTranslation()





  return (
    <div className={styles.Main}>
      <div className={styles.MainContainer}>
        <AnimatedText type="heading" tag="h4" delay={1} isHero>
        {t.aboutUs.landingHeading}
      </AnimatedText>
        <AnimatedText type="description" tag="p" delay={2} isHero>
          {t.aboutUs.landingDesc}
            </AnimatedText>
      </div>
    </div>
  )
}

export default Landing