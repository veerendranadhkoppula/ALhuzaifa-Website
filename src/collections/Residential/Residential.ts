import type { CollectionConfig } from 'payload'
import { ThreeImagesBlock } from '../../blocks/ThreeImages'
import { ImageWithDescriptionBlock } from '../../blocks/ImageWithDescription'
import { TwoImagesWithDescriptionsBlock } from '../../blocks/TwoImagesWithDescriptions'
import { TitleDescriptionImageBlock } from '../../blocks/TitleDescriptionImage'

export const Residential: CollectionConfig = {
  slug: 'residential',
   defaultSort: '-updatedAt',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'location', 'status', 'createdAt'],
    group: 'Services',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === 'developer' || user?.role === 'admin',
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        description: 'Project title e.g. Palm Jumeirah Villa',
      },
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        description: 'Auto-generated from title. You can override manually.',
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return (data.title as string)
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_]+/g, '-')
                .replace(/^-+|-+$/g, '')
            }
            if (value) {
              return (value as string)
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_]+/g, '-')
                .replace(/^-+|-+$/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Published', value: 'published' },
        { label: 'Draft', value: 'draft' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        description: 'e.g. Dubai, Abu Dhabi',
        position: 'sidebar',
      },
    },

    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'coverImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Full-width hero image for the project page',
              },
            },
            {
              name: 'shortDescription',
              type: 'text',
              localized: true,
              admin: {
                description: 'Short subtitle shown on the hero — 1 to 2 lines',
              },
            },
            {
              name: 'longDescription',
              type: 'richText',
              localized: true,
              admin: {
                description: 'Full description shown below the meta tags row',
              },
            },
            {
              name: 'contentBlocks',
              type: 'blocks',
              label: 'Content Blocks',
              admin: {
                description: 'Build the project layout using blocks',
              },
              blocks: [
                ImageWithDescriptionBlock,
                TwoImagesWithDescriptionsBlock,
                TitleDescriptionImageBlock,
                ThreeImagesBlock,
              ],
            },
          ],
        },

        {
          label: 'Thumbnail',
          fields: [
            {
              name: 'thumbnailImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Image shown on the Residential services listing grid',
              },
            },
          ],
        },

        {
          label: 'Related Projects',
          fields: [
            {
              name: 'relatedProjects',
              type: 'relationship',
              relationTo: 'residential' as 'residential',
              hasMany: true,
              maxRows: 3,
              admin: {
                description: 'Select up to 3 related residential projects',
              },
            },
          ],
        },
      ],
    },
  ],
}
