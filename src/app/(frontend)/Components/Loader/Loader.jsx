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

  if (!loading) return null

  return (
    <div className={styles.overlay}>
      <Image src={logo} alt="Loading..." className={styles.gif} unoptimized />
    </div>
  )
}

export default Loader