import React from 'react'
// Import global styles here (root layout). Next.js requires global CSS to be imported in the root layout.
import './(frontend)/styles.css'
import './(frontend)/global.css'

export const metadata = {
  // Ensure favicon is available globally, including for root-level not-found pages
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
