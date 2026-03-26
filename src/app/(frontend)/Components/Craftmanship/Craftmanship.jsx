import React from 'react'
import Landing from './Landing/Landing'
import TextContainer from './TextContainer/TextContainer'
import Glance from './Glance/Glance'
import OurEdge from './OurEdge/OurEdge'
import Manufacturing from './Manufacturing/Manufacturing'
import CertifiedExcellence from './CertifiedExcellence/CertifiedExcellence'


const Craftmanship = ({ certificates }) => {
  return (
    <>
    <Landing />
    <TextContainer />
    <Glance />
    <Manufacturing />
    <OurEdge />
   <CertifiedExcellence certificates={certificates} />
    </>
  )
}

export default Craftmanship
