import type { Block } from 'payload'

export const TwoImagesWithDescriptionsBlock: Block = {
  slug: 'twoImagesWithDescriptions',
  labels: {
    singular: 'Two Images With Descriptions',
    plural: 'Two Images With Descriptions Blocks',
  },
  fields: [
    {
      name: 'leftImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'leftDescription',
      type: 'richText',
      localized: true,
    },
    {
      name: 'rightImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'rightDescription',
      type: 'richText',
      localized: true,
    },
  ],
}
