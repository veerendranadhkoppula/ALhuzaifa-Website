import React from 'react'
import Landing from './Landing/Landing'
import Locations from './Locations/Locations'
import ContactUsForm from './ContactUsForm/ContactUsForm'
import Connect from './Connect/Connect'
import ConnectMobile from './Connect/ConnectMobile'
import styles from './ContactUs.module.css'

const ContactUs = () => {
  return (
    <>
      <Landing />
      <ConnectMobile />
      <Locations />
       <div id="contact-form" className={styles.mobileFormSection}>
        <ContactUsForm />
      </div>
      <Connect />
     
    </>
  )
}

export default ContactUs