import Residential from '../../../Components/Residential/Residential'
import { fetchResidentialProjects, ResidentialProject } from '../../../lib/fetchResidential'

export async function generateMetadata() {
  return {
    title: 'Residential | Al Huzaifa Design Studio',
    description:
      'Bespoke residential interior design crafted around your lifestyle, personality, and aspirations.',
    openGraph: {
      title: 'Residential | Al Huzaifa Design Studio',
      description:
        'Bespoke residential interior design crafted around your lifestyle, personality, and aspirations.',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
  }
}

export default async function ResidentialPage({ params }: { params: { locale: string } }) {
  const projects: ResidentialProject[] = await fetchResidentialProjects(params.locale)
  return <Residential locale={params.locale} projects={projects} />
}
