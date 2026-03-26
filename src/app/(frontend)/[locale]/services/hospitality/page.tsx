import Hospitality from '../../../Components/Hospitality/Hospitality'
import { fetchHospitalityProjects, HospitalityProject } from '../../../lib/fetchHospitality'

export default async function HospitalityPage({
  params,
}: {
  params: { locale: string }
}) {
  const projects: HospitalityProject[] = await fetchHospitalityProjects(params.locale)
  return <Hospitality locale={params.locale} projects={projects} />
}