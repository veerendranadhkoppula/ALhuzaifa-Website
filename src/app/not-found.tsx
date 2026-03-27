// Make this a client component so we can use client-only APIs and dynamic imports.
'use client'
import React from 'react'
import NotFoundClient from './(frontend)/Components/NotFound/NotFoundClient'

export default function NotFoundPage() {
  return <NotFoundClient />
}
