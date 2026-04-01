import Commercial from '../../../Components/Commercial/Commercial'
import { fetchCommercialProjects, CommercialProject } from '../../../lib/fetchCommercial'

export async function generateMetadata() {
  return {
    title: 'Commercial | Al Huzaifa Design Studio',
    description:
      'Premium commercial interior design solutions delivered with precision, artistry, and flawless execution.',
    openGraph: {
      title: 'Commercial | Al Huzaifa Design Studio',
      description:
        'Premium commercial interior design solutions delivered with precision, artistry, and flawless execution.',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
  }
}

export default async function CommercialPage({ params }: { params: { locale: string } }) {
  const projects: CommercialProject[] = await fetchCommercialProjects(params.locale)
  return <Commercial locale={params.locale} projects={projects} />
}
