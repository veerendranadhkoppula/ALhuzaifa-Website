'use client'
import React from 'react'
import Talk from './Talk/Talk'
import CoverSection from './CoverSection/CoverSection'
import TagsDesc from './TagsDesc/TagsDesc'
import TwoImageBlock from './TwoImageBlock/TwoImageBlock'
import FullImgBlock from './FullImgBlock/FullImgBlock'
import ThreeImgBlock from './ThreeImgBlock/ThreeImgBlock'
import { useTranslation } from '../../hooks/useTranslation'
import RelatedProjects from './RelatedProjects/RelatedProjects'

const renderBlock = (block, index) => {
  switch (block.blockType) {
    case 'twoImages':
      return <TwoImageBlock key={index} block={block} />
    case 'fullWidthImage':
      return <FullImgBlock key={index} block={block} />
    case 'threeImages':
      return <ThreeImgBlock key={index} block={block} />
    default:
      return null
  }
}

const CommercialProject = ({ project, locale }) => {
      const { t } = useTranslation()
  return (
    <>
      <CoverSection project={project} />
      <TagsDesc project={project} serviceLabel="Commercial" />
        {project.contentBlocks?.map((block, index) => renderBlock(block, index))}
        <Talk />
      <RelatedProjects
  projects={project.relatedProjects || []}
  locale={locale}
  serviceSlug="commercial"
   heading={t.residentialPage.relatedProjects}
/>
    
    </>
  )
}

export default CommercialProject