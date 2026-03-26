import React from 'react'
import styles from './TwoImageBlock.module.css'
import Image from 'next/image'

const TwoImageBlock = ({ block }) => {
  if (!block?.leftImage?.url || !block?.rightImage?.url) return null

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.imageWrap}>
          <Image
            src={block.leftImage.url}
            alt={block.leftImage.alt || ''}
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            className={styles.image}
          />
        </div>
        <div className={styles.imageWrap}>
          <Image
            src={block.rightImage.url}
            alt={block.rightImage.alt || ''}
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  )
}

export default TwoImageBlock