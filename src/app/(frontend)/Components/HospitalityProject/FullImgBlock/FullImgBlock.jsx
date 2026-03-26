import React from 'react'
import styles from './FullImgBlock.module.css'
import Image from 'next/image'

const FullImgBlock = ({ block }) => {
  if (!block?.image?.url) return null

  return (
    <div className={styles.main}>
      <div className={styles.imageWrap}>
        <Image
          src={block.image.url}
          alt={block.image.alt || ''}
          fill
          sizes="100vw"
          className={styles.image}
        />
      </div>
    </div>
  )
}

export default FullImgBlock