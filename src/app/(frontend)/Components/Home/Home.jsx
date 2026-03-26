import React from 'react'
import Landing from './Landing/Landing'
import TextContainer from './TextContainer/TextContainer'
import TwoBlock from './TwoBlock/TwoBlock'
import Hospitality from './Hospitality/Hospitality'
import LogosLoop from './LogosLoop/LogosLoop'
import Residence from './Residence/Residence'
import SignatureCloset from './SignatureCloset/SignatureCloset'
import WorldAlhuzaifa from './WorldAlhuzaifa/WorldAlhuzaifa'
import Contact from './Contact/Contact'

const Home = ({ locale, hospitalityProjects, residentialProjects,brochureUrl  }) => {
  return (
    <>
      <Landing />
      <TextContainer />
      <TwoBlock />
      <Hospitality projects={hospitalityProjects} locale={locale} />
      <LogosLoop />
      <Residence projects={residentialProjects} locale={locale} />
      <SignatureCloset />
      <WorldAlhuzaifa />
      <Contact brochureUrl={brochureUrl} /> 
    </>
  )
}

export default Home
