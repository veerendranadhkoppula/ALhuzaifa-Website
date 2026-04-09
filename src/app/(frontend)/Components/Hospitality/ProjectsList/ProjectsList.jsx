'use client'
import styles from './ProjectsList.module.css'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '../../../hooks/useTranslation'

const ArrowRight = () => (
  <svg width="17" height="14" viewBox="0 0 17 14" fill="none">
    <path
      d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L0.999999 6.91406"
      stroke="#69594F"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>
)

const ProjectsList = ({ locale, projects }) => {
  const { t } = useTranslation()
const storageKey = `visibleCount_${locale}_hospitality`

const [visibleCount, setVisibleCount] = useState(() => {
  if (typeof window === 'undefined') return 9
  return parseInt(sessionStorage.getItem(storageKey) || '9', 10)
})

const visibleProjects = projects.slice(0, visibleCount)
const hasMore = projects.length > visibleCount
  if (!projects || projects.length === 0) return null

  return (
    <div className={styles.main}>
      <div className={styles.MainContainer}>
        <h3 className={styles.heading}>{t.hospitalityPage.projectsHeading}</h3>
        <div className={styles.grid}>
          {visibleProjects.map((project) => (
            <Link
              key={project.id}
              href={`/${locale}/services/hospitality/${project.slug}`}
              className={styles.card}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={project.thumbnailImage.url}
                  alt={project.thumbnailImage.alt || project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.image}
                />
              </div>
              <div className={styles.cardBottom}>
                <span className={styles.title}>{project.title}</span>
                <ArrowRight />
              </div>
            </Link>
          ))}
        </div>
        {hasMore && (
          <div className={styles.viewMoreRow}>
            <button
              className={styles.viewMoreBtn}
onClick={() => {
  const next = visibleCount + 9
  setVisibleCount(next)
  sessionStorage.setItem(storageKey, String(next))
}}
            >
              {t.portfolioPage.viewMore}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectsList
