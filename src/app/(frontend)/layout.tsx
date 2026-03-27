import React from 'react'

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  // Keep this layout minimal; global styles are imported by the root layout (src/app/layout.tsx).
  return <>{children}</>
}
