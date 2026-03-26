import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',

  admin: {
    useAsTitle: 'email',
  },

  auth: true,

  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'developer',
      options: [
        {
          label: 'Developer@IM',
          value: 'developer',
        },
        {
          label: 'Aluhuzaifa Admin',
          value: 'admin',
        },
        {
          label: 'Aluhuzaifa Editor',
          value: 'aluhuzaifa-editor',
        },
      ],
      access: {
          update: ({ req: { user } }) => user?.role === 'developer',
      },
      saveToJWT: true,
    },
  ],
}
