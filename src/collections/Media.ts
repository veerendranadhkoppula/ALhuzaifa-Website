import type { CollectionConfig } from 'payload'

const MAX_PDF_SIZE = 30 * 1024 * 1024
const MAX_IMAGE_SIZE = 5 * 1024 * 1024
const MAX_OTHER_SIZE = 10 * 1024 * 1024

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'filename',
    defaultColumns: ['filename', 'mimeType', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  folders: true,
  upload: true,
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt Text',
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        if (data.mimeType) {
          const fileSizeInBytes = data.filesize || 0
          let maxSizeAllowed = MAX_OTHER_SIZE

          if (data.mimeType.includes('pdf')) {
            maxSizeAllowed = MAX_PDF_SIZE
          } else if (data.mimeType.includes('image')) {
            maxSizeAllowed = MAX_IMAGE_SIZE
          }

          if (fileSizeInBytes > maxSizeAllowed) {
            const fileTypeName = data.mimeType.includes('pdf')
              ? 'PDF'
              : data.mimeType.includes('image')
                ? 'Image'
                : 'File'
            const maxSizeMB = Math.round(maxSizeAllowed / (1024 * 1024))

            throw new Error(
              `${fileTypeName} file exceeds maximum allowed size of ${maxSizeMB}MB. Uploaded file is ${Math.round(fileSizeInBytes / (1024 * 1024))}MB.`,
            )
          }
        }

        return data
      },
    ],
  },
}
