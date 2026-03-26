import Home from '../Components/Home/Home'
import { fetchHospitalityProjects } from '../lib/fetchHospitality'
import { fetchResidentialProjects } from '../lib/fetchResidential'
import { fetchBrochure } from '../lib/fetchBrochure'  

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
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