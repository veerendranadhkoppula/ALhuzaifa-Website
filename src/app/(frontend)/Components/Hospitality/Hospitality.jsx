import React from 'react'
import Landing from './Landing/Landing'
import ProjectsList from './ProjectsList/ProjectsList'
import Partners from './Partners/Partners'
import OtherSpaces from './OtherSpaces/OtherSpaces'
import Talk from './Talk/Talk'
import { HospitalityProject } from '../../lib/fetchHospitality'

/**
 * @param {{ locale: string, projects: HospitalityProject[] }} props
 */
const Hospitality = ({ locale, projects }) => {
  return (
    <>
      <Landing />
      <ProjectsList locale={locale} projects={projects} />
      <Partners />
      <Talk />
      <OtherSpaces />
    </>
  )
}

export default Hospitality