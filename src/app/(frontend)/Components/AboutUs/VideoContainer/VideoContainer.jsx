import React from 'react'
import styles from './VideoContainer.module.css'

const VideoContainer = () => {
  return (
    <>
    <div className={styles.main}>
        <div className={styles.MainContainer}>
          <video
            className={styles.video}
            src="/1.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
    </div>
    </>
  )
}

export default VideoContainer