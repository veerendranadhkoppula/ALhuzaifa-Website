import React from 'react'
import Talk from './Talk/Talk'
import Contact from './Contact/Contact'
import Landing from './Landing/Landing'
import ProjectsGrid from './ProjectsGrid/ProjectsGrid'

const Portfolio = ({ locale, hospitalityProjects, residentialProjects, commercialProjects, brochureUrl}) => {
  return (
    <>
      <Landing />
      <ProjectsGrid
        locale={locale}
        hospitalityProjects={hospitalityProjects}
        residentialProjects={residentialProjects}
        commercialProjects={commercialProjects}
      />
      <Talk />
     <Contact brochureUrl={brochureUrl} /> 
    </>
  )
}

export default Portfolio