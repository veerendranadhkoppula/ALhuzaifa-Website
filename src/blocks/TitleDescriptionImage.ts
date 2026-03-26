import type { Block } from 'payload'

export const TitleDescriptionImageBlock: Block = {
  slug: 'titleDescriptionImage',
  labels: {
    singular: 'Title Description Image',
    plural: 'Title Description Image Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
