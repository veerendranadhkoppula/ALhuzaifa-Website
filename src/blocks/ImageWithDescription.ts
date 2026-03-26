import type { Block } from 'payload'

export const ImageWithDescriptionBlock: Block = {
  slug: 'imageWithDescription',
  labels: {
    singular: 'Image With Description',
    plural: 'Image With Description Blocks',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      localized: true,
    },
  ],
}
