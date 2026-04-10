import React from 'react'
import styles from './LogosLoop.module.css'
import Image from 'next/image'



const logos = [
  '/striplogos/1.svg',
  '/striplogos/2.svg',
  '/striplogos/3.svg',
  '/striplogos/4.svg',
  '/striplogos/5.svg',
  '/striplogos/6.svg',
  '/striplogos/7.svg',
  '/striplogos/8.svg',
  '/striplogos/9.svg',
  '/striplogos/10.svg',
  '/striplogos/11.svg',
  '/striplogos/12.svg',
  '/striplogos/13.svg',
  '/striplogos/14.svg',
  '/striplogos/15.svg',
  '/striplogos/16.svg',
  '/striplogos/17.svg',
  '/striplogos/18.svg',
  '/striplogos/19.svg',
  '/striplogos/20.svg',
  '/striplogos/21.svg',
  '/striplogos/22.svg',
  '/striplogos/23.svg',
  '/striplogos/24.svg',


]
const LogosLoop = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.line}></div>

        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <div className={styles.logoItem} key={index}>
                <Image src={logo} alt={`logo-${index}`}  width={100}   
  height={100}/>
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