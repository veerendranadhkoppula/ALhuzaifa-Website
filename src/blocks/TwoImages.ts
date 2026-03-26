import type { Block } from 'payload'

export const TwoImagesBlock: Block = {
  slug: 'twoImages',
  labels: {
    singular: 'Two Images',
    plural: 'Two Images Blocks',
  },
  fields: [
    {
      name: 'leftImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'rightImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}