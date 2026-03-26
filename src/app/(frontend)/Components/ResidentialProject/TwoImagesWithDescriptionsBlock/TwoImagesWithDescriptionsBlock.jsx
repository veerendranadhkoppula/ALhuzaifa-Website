import React from 'react'
import styles from './TwoImagesWithDescriptionsBlock.module.css'
import Image from 'next/image'
import RichText from '../../RichText/RichText'

const TwoImagesWithDescriptionsBlock = ({ block }) => {
  if (!block?.leftImage?.url && !block?.rightImage?.url) return null

  return (
    <div className={styles.main}>
      <div className={styles.grid}>

        <div className={styles.column}>
          {block.leftImage?.url && (
            <div className={styles.imageWrap}>
              <Image
                src={block.leftImage.url}
                alt={block.leftImage.alt || ''}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
          )}
          {block.leftDescription && (
            <div className={styles.descriptionWrap}>
              <RichText content={block.leftDescription} />
            </div>
          )}
        </div>

        <div className={styles.column}>
          {block.rightImage?.url && (
            <div className={styles.imageWrap}>
              <Image
                src={block.rightImage.url}
                alt={block.rightImage.alt || ''}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
          )}
          {block.rightDescription && (
            <div className={styles.descriptionWrap}>
              <RichText content={block.rightDescription} />
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default TwoImagesWithDescriptionsBlock