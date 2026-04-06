'use client'
import React, { useState } from 'react'
import styles from './ProjectsGrid.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '../../../hooks/useTranslation'

const ArrowRight = () => (
  <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.9227 12.4141L15.5312 6.91406L9.9227 1.41406M14.2566 6.91406L0.999999 6.91406" stroke="#69594F" strokeWidth="2" strokeLinecap="square"/>
  </svg>
)

const ArrowRightCta = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M-0.00133734 6.66688L-0.00133727 5.17206L8.74139 5.17206L4.73431 1.06132L5.76886 -2.58748e-07L11.5391 5.91947L5.76886 11.8389L4.73431 10.7776L8.74139 6.66688L-0.00133734 6.66688Z" fill="white"/>
  </svg>
)

const TABS = ['hospitality', 'residential', 'commercial']
const MAX_ITEMS = 8

const ProjectsGrid = ({ locale, hospitalityProjects, residentialProjects, commercialProjects }) => {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('hospitality')

  const allProjects = {
    hospitality: hospitalityProjects ?? [],
    residential: residentialProjects ?? [],
    commercial: commercialProjects ?? [],
  }

  const projects = allProjects[activeTab].slice(0, MAX_ITEMS)
  const total = allProjects[activeTab].length

  const tabLabels = {
    hospitality: t.navbar.hospitality,
    residential: t.navbar.residential,
    commercial: t.navbar.commercial,
  }

  const viewMoreLinks = {
    hospitality: `/${locale}/services/hospitality`,
    residential: `/${locale}/services/residential`,
    commercial: `/${locale}/services/commercial`,
  }

  return (
    <div className={styles.main}>
      <div className={styles.MainContainer}>

        <div className={styles.tabs}>
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <Link key={project.id} className={styles.card}  href={`/${locale}/services/${activeTab}/${project.slug}`}>
              <div className={styles.imageWrap}>
                <Image
                  src={project.thumbnailImage?.url}
                  alt={project.thumbnailImage?.alt || project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className={styles.image}
                />
              </div>
              <div
               
                className={styles.cardBottom}
              >
                <span className={styles.title}>{project.title}</span>
                <ArrowRight />
              </div>
              {project.shortDescription && (
                <p className={styles.desc}>{project.shortDescription}</p>
              )}
            </Link>
          ))}
        </div>

        {total > MAX_ITEMS && (
          <div className={styles.viewMoreRow}>
            <Link href={viewMoreLinks[activeTab]} className={styles.viewMoreBtn}>
              {t.portfolioPage.viewMore} <ArrowRightCta />
            </Link>
          </div>
        )}

      </div>
    </div>
  )
}

export default ProjectsGrid