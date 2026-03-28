import React from 'react'
import styles from './CoverSection.module.css'
import Image from 'next/image'

const CoverSection = ({ project }) => {
  const rawUrl = project.coverImage?.url ?? ''
  const imageUrl = rawUrl.startsWith('http')
    ? rawUrl
    : `${process.env.NEXT_PUBLIC_SERVER_URL}${rawUrl}`

  return (
    <div className={styles.main}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={project.title ?? ''}
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </div>
      <div className={styles.MainContainer}>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
      </div>
    </div>
  )
}

export default CoverSection