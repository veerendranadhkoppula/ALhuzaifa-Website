'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import styles from './AnimatedText.module.css'

gsap.registerPlugin(ScrollTrigger)

const AnimatedText = ({
  children,
  type = 'heading', 
  tag = 'h4',
  className = '',
  delay = 0,
   isHero = false,
}) => {
  const ref = useRef(null)

useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.set(el, { opacity: 0 })

    const split = new SplitType(el, {
      types: type === 'heading' ? 'lines' : 'words',
      tagName: 'span',
    })

    if (type === 'heading') {
      split.lines.forEach((line) => {
        const wrapper = document.createElement('span')
        wrapper.classList.add(styles.lineWrapper)
        line.parentNode.insertBefore(wrapper, line)
        wrapper.appendChild(line)
      })

      gsap.from(split.lines, {
        y: '105%',
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        delay: delay || 1, 
        scrollTrigger: isHero ? undefined : { 
          trigger: el,
          start: 'top 85%',
        },
        onStart: () => gsap.set(el, { opacity: 1 }), 
      })
    }

    if (type === 'description') {
      gsap.from(split.words, {
        y: 18,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.04,
        delay: delay || 2, 
       scrollTrigger: isHero ? undefined : { 
          trigger: el,
          start: 'top 88%',
        },
        onStart: () => gsap.set(el, { opacity: 1 }), 
      })
    }

    return () => {
      split.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [type, delay])
  const Tag = tag

  return (
    <Tag ref={ref} className={`${styles.base} ${className}`}>
      {children}
    </Tag>
  )
}

export default AnimatedText