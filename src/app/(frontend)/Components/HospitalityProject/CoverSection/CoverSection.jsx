import React from 'react'
import styles from './CoverSection.module.css'

const CoverSection = ({ project }) => {
  return (
    <>
      <div
        className={styles.main}
        style={{ backgroundImage: `url(${project.coverImage.url})` }}
      >
        <div className={styles.MainContainer}>
          <h3>{project.title}</h3>
          <p>{project.shortDescription}</p>
        </div>
      </div>
    </>
  )
}

export default CoverSection