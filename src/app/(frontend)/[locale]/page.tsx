import Home from '../Components/Home/Home'
import { fetchHospitalityProjects } from '../lib/fetchHospitality'
import { fetchResidentialProjects } from '../lib/fetchResidential'
import { fetchBrochure } from '../lib/fetchBrochure'

export async function generateMetadata() {
  return {
    title: 'Al Huzaifa Design Studio',
    description:
      'A luxury interior design studio crafting immersive spaces across the UAE. Where every detail is intentional and every space becomes a personal expression of luxury.',
    openGraph: {
      title: 'Al Huzaifa Design Studio',
      description:
        'A luxury interior design studio crafting immersive spaces across the UAE. Where every detail is intentional and every space becomes a personal expression of luxury.',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  const [hospitalityProjects, residentialProjects, brochureUrl] = await Promise.all([
    fetchHospitalityProjects(locale),
    fetchResidentialProjects(locale),
    fetchBrochure(),
  ])

  return (
    <Home
      locale={locale}
      hospitalityProjects={hospitalityProjects.slice(0, 3)}
      residentialProjects={residentialProjects.slice(0, 3)}
      brochureUrl={brochureUrl}
    />
  )
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}
