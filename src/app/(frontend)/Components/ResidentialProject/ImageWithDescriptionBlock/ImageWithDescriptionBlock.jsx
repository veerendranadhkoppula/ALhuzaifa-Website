import React from 'react'
import styles from './ImageWithDescriptionBlock.module.css'
import Image from 'next/image'
import RichText from '../../RichText/RichText'

const ImageWithDescriptionBlock = ({ block }) => {
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
      {block.description && (
        <div className={styles.descriptionWrap}>
          <RichText content={block.description} />
        </div>
      )}
    </div>
  )
}

export default ImageWithDescriptionBlock
