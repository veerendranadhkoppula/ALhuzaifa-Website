import Residential from '../../../Components/Residential/Residential'
import { fetchResidentialProjects, ResidentialProject } from '../../../lib/fetchResidential'

export default async function ResidentialPage({
  params,
}: {
  params: { locale: string }
}) {
  const projects: ResidentialProject[] = await fetchResidentialProjects(params.locale)
  return <Residential locale={params.locale} projects={projects} />
}