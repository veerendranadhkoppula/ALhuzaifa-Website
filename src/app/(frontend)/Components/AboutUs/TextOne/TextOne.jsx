'use client'
import React, {useRef } from 'react'
import styles from './TextOne.module.css'
import { useTranslation } from '../../../hooks/useTranslation'
import { useSplitTextReveal } from '../../useSplitTextReveal/useSplitTextReveal'

const TextOne = () => {
  const { t } = useTranslation()
   const textRef = useRef(null)

useSplitTextReveal(textRef)
  return (
    <div className={styles.Main}>
      <div className={styles.MainContainer}>
        <p ref={textRef}>{t.aboutUs.textOne}</p>
      </div>
    </div>
  )
}

export default TextOne