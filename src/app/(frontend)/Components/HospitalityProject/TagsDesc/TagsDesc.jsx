'use client'
import React from 'react'
import styles from './TagsDesc.module.css'
import RichText from '../../RichText/RichText'
import { useTranslation } from '../../../hooks/useTranslation'

const TagsDesc = ({ project, serviceLabel }) => {
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainContainer}>
          <div className={styles.Top}>
            <h3>{project.title}</h3>
            <h3>{serviceLabel}</h3>
            <h3>{project.location}</h3>
          </div>
          <div className={styles.Bottom}>
            <RichText content={project.longDescription} />
          </div>
        </div>
      </div>
    </>
  )
}

export default TagsDesc