import type { CollectionConfig } from 'payload'
import { canDelete, isLoggedIn } from '../../access/roles'

export const Newsletters: CollectionConfig = {
  slug: 'newsletters',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'createdAt'],
    group: 'Marketing',
  },
  access: {
    read: isLoggedIn,
    create: () => true,
    update: () => false,
    delete: canDelete,
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
    },
  ],
  timestamps: true,
}
