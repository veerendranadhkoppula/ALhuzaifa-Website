import React from 'react'
import styles from './LogosLoop.module.css'
import Image from 'next/image'
import logo1 from './1.svg'
import logo2 from './2.svg'
import logo3 from './3.svg'
import logo4 from './4.svg'
import logo5 from './5.svg'
import logo6 from './6.svg'
import logo7 from './5.svg'
import logo8 from './8.svg'
import logo9 from './9.svg'
import logo10 from './10.svg'
import logo11 from './11.svg'
import logo12 from './12.svg'
import logo13 from './13.svg'
import logo14 from './14.svg'
import logo15 from './15.svg'
import logo16 from './16.svg'
import logo17 from './17.svg'
import logo18 from './18.svg'
import logo19 from './19.svg'
import logo20 from './20.svg'
import logo21 from './21.svg'
import logo22 from './22.svg'
import logo23 from './23.svg'
import logo24 from './24.svg'
import logo25 from './25.svg'


const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20, logo21, logo22, logo23, logo24, logo25]

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