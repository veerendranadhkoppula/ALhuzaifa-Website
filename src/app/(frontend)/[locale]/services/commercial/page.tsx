import Commercial from '../../../Components/Commercial/Commercial'
import { fetchCommercialProjects, CommercialProject } from '../../../lib/fetchCommercial'

export default async function CommercialPage({
  params,
}: {
  params: { locale: string }
}) {
  const projects: CommercialProject[] = await fetchCommercialProjects(params.locale)
  return <Commercial locale={params.locale} projects={projects} />
}