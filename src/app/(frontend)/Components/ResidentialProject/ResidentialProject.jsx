'use client'
import React from 'react'
import Talk from './Talk/Talk'
import CoverSection from './CoverSection/CoverSection'
import TagsDesc from './TagsDesc/TagsDesc'
import ThreeImgBlock from './ThreeImgBlock/ThreeImgBlock'
import ImageWithDescriptionBlock from './ImageWithDescriptionBlock/ImageWithDescriptionBlock'
import TwoImagesWithDescriptionsBlock from './TwoImagesWithDescriptionsBlock/TwoImagesWithDescriptionsBlock'
import TitleDescriptionImageBlock from './TitleDescriptionImageBlock/TitleDescriptionImageBlock'
import { useTranslation } from '../../hooks/useTranslation'
import FullWidthVideoBlock from './FullWidthVideoBlock/FullWidthVideoBlock'
import RelatedProjects from './RelatedProjects/RelatedProjects'

const renderBlock = (block, index) => {
  switch (block.blockType) {
    case 'imageWithDescription':
      return <ImageWithDescriptionBlock key={index} block={block} />
    case 'twoImagesWithDescriptions':
      return <TwoImagesWithDescriptionsBlock key={index} block={block} />
    case 'titleDescriptionImage':
      return <TitleDescriptionImageBlock key={index} block={block} />
    case 'threeImages':
      return <ThreeImgBlock key={index} block={block} />
    case 'fullWidthVideo':
      return <FullWidthVideoBlock key={index} block={block} />
    default:
      return null
  }
}

const ResidentialProject = ({ project, locale }) => {
  const { t } = useTranslation()
  return (
    <>
      <CoverSection project={project} />
      <TagsDesc project={project} serviceLabel={t.residentialPage.serviceLabel} />
      {project.contentBlocks?.map((block, index) => renderBlock(block, index))}
      <Talk />
      <RelatedProjects
        projects={project.relatedProjects || []}
        locale={locale}
        serviceSlug="residential"
        heading={t.residentialPage.relatedProjects}
      />
    </>
  )
}

export default ResidentialProject
