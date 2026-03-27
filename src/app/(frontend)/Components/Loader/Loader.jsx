'use client'
import React, { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import styles from './Loader.module.css'
import Image from 'next/image'
import logo from './1.gif'

const Loader = () => {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)
  const prevPathname = useRef(pathname)
  const timerRef = useRef(null)
  const mountedRef = useRef(true)

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname
      setLoading(true)

      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        setLoading(false)
      }, 800)
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [pathname])

  useEffect(() => {
    const onClick = (e) => {
      try {
        const anchor = e.target.closest && e.target.closest('a')
        if (!anchor) return
        if (anchor.target === '_blank') return
        const href = anchor.getAttribute('href') || anchor.href
        if (!href) return
        if (href.startsWith('#')) return
        let url
        try {
          url = new URL(href, window.location.href)
        } catch (err) {
          return
        }
        if (url.origin !== window.location.origin) return
        const nextPath = url.pathname
        if (nextPath === pathname) return

        // Show loader immediately
        if (mountedRef.current) setLoading(true)
      } catch (err) {
        // ignore
      }
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [pathname])

  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  if (!loading) return null

  return (
    <div className={styles.overlay}>
      <Image src={logo} alt="Loading..." className={styles.gif} unoptimized />
    </div>
  )
}

export default Loader