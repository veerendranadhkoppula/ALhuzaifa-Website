import type { Block } from 'payload'

export const ThreeImagesBlock: Block = {
  slug: 'threeImages',
  labels: {
    singular: 'Three Images',
    plural: 'Three Images Blocks',
  },
  fields: [
    {
      name: 'firstImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'secondImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'thirdImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}