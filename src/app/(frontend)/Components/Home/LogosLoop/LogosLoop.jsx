import React from 'react'
import styles from './LogosLoop.module.css'
import Image from 'next/image'
import logo1 from './1.svg'
import logo2 from './2.svg'
import logo3 from './3.svg'
import logo4 from './4.svg'
import logo5 from './5.svg'
import logo6 from './6.svg'
import logo7 from './7.svg'
import logo8 from './8.svg'

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8]

const LogosLoop = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.line}></div>

        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <div className={styles.logoItem} key={index}>
                <Image src={logo} alt={`logo-${index}`} height={48} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.line}></div>
      </div>
    </div>
  )
}

export default LogosLoop