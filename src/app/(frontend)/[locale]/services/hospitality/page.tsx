import Hospitality from '../../../Components/Hospitality/Hospitality'
import { fetchHospitalityProjects, HospitalityProject } from '../../../lib/fetchHospitality'

export async function generateMetadata() {
  return {
    title: 'Hospitality | Al Huzaifa Design Studio',
    description:
      'World-class F&B and hospitality interior design. Turnkey project delivery across the region.',
    openGraph: {
      title: 'Hospitality | Al Huzaifa Design Studio',
      description:
        'World-class F&B and hospitality interior design. Turnkey project delivery across the region.',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
  }
}

export default async function HospitalityPage({ params }: { params: { locale: string } }) {
  const projects: HospitalityProject[] = await fetchHospitalityProjects(params.locale)
  return <Hospitality locale={params.locale} projects={projects} />
}
