import React from 'react'
import styles from './FullWidthVideoBlock.module.css'

const FullWidthVideoBlock = ({ block }) => {
  if (!block?.video?.url) return null

  const videoUrl = block.video.url.startsWith('http')
    ? block.video.url
    : `${process.env.NEXT_PUBLIC_SERVER_URL}${block.video.url}`

  return (
    <div className={styles.main}>
      <div className={styles.videoWrap}>
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className={styles.video}
        />
      </div>
    </div>
  )
}

export default FullWidthVideoBlock