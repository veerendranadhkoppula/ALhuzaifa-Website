import type { Block } from 'payload'

export const FullWidthVideoBlock: Block = {
  slug: 'fullWidthVideo',
  labels: {
    singular: 'Full Width Video',
    plural: 'Full Width Videos',
  },
  fields: [
    {
      name: 'video',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Upload an MP4 video file',
      },
    },
  ],
}
