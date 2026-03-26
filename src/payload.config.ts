import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { importExportPlugin } from '@payloadcms/plugin-import-export'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob' // ← ADD THIS
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { ContactForms } from './collections/ContactForms/ContactForms'
import { Hospitality } from './collections/Hospitality/Hospitality'
import { Commercial } from './collections/Commercial/Commercial'
import { Residential } from './collections/Residential/Residential'
import { Newsletters } from './collections/Newsletters/Newsletters'
import { Certificates } from './collections/Certificates/Certificates'
import { Brochure } from './collections/Brochure/Brochure'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  collections: [
    Users,
    Media,
    ContactForms,
    Hospitality,
    Commercial,
    Residential,
    Newsletters,
    Certificates,
    Brochure,
  ],

  localization: {
    locales: [
      { label: 'English', code: 'en' },
      { label: 'Arabic', code: 'ar' },
    ],
    defaultLocale: 'en',
    fallback: true,
  },

  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),

  sharp,

  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),

    importExportPlugin({
      collections: [{ slug: 'contact-forms' }, { slug: 'newsletters' }],
    }),
    seoPlugin({
      collections: ['hospitality', 'commercial', 'residential'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `${doc?.title} — Al Huzaifa Design Studio`,
      generateDescription: ({ doc }) => doc?.shortDescription || '',
    }),
  ],
})
