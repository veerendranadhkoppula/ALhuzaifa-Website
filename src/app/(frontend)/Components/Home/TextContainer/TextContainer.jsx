'use client'
import React, { useRef } from 'react'
import styles from './TextContainer.module.css'
import { useTranslation } from '../../../hooks/useTranslation'
import { useSplitTextReveal } from '../../useSplitTextReveal/useSplitTextReveal'




const TextContainer = () => {
  const { t } = useTranslation()
  const textRef = useRef(null)



useSplitTextReveal(textRef)
  return (
    <div className={styles.Main}>
      <div className={styles.MainContainer}>
        <p ref={textRef}>{t.textContainer.body}</p>
      </div>
    </div>
  )
}

export default TextContainer