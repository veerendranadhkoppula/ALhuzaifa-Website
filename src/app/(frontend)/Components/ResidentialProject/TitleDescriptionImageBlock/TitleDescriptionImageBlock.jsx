import React from 'react'
import styles from './TitleDescriptionImageBlock.module.css'
import Image from 'next/image'
import RichText from '../../RichText/RichText'

const TitleDescriptionImageBlock = ({ block }) => {
  if (!block?.image?.url) return null

  return (
    <div className={styles.main}>
      <div className={styles.textWrap}>
        {block.title && (
          <h3 className={styles.title}>{block.title}</h3>
        )}
        {block.description && (
          <div className={styles.descriptionWrap}>
            <RichText content={block.description} />
          </div>
        )}
      </div>
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

export default TitleDescriptionImageBlock