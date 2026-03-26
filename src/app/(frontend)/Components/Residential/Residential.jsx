import React from 'react'
import Landing from './Landing/Landing'
import ProjectsList from './ProjectsList/ProjectsList'
import OtherSpaces from './OtherSpaces/OtherSpaces'
import Talk from './Talk/Talk'

const Residential = ({ locale, projects }) => {
  return (
    <>
      <Landing />
      <ProjectsList locale={locale} projects={projects} />
      <Talk />
      <OtherSpaces />
    </>
  )
}

export default Residential