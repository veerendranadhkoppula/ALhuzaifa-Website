import Portfolio from '../../Components/Portfolio/Portfolio'
import { fetchHospitalityProjects } from '../../lib/fetchHospitality'
import { fetchResidentialProjects } from '../../lib/fetchResidential'
import { fetchCommercialProjects } from '../../lib/fetchCommercial'
import { fetchBrochure } from '../../lib/fetchBrochure'

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  const [hospitality, residential, commercial, brochureUrl] = await Promise.all([
    fetchHospitalityProjects(locale),
    fetchResidentialProjects(locale),
    fetchCommercialProjects(locale),
    fetchBrochure(),
  ])

  return (
    <Portfolio
      locale={locale}
      hospitalityProjects={hospitality}
      residentialProjects={residential}
      commercialProjects={commercial}
      brochureUrl={brochureUrl}
    />
  )
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}
