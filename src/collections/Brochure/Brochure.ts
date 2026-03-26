import type { CollectionConfig } from 'payload'
import { canDelete, isLoggedIn } from '../../access/roles'

export const Brochure: CollectionConfig = {
  slug: 'brochure',
  admin: {
    useAsTitle: 'title',
    group: 'Brochure',
  },
  access: {
    read: () => true,
    create: isLoggedIn,
    update: isLoggedIn,
    delete: canDelete,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
  timestamps: true,
}