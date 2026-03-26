import { notFound } from 'next/navigation'
import HospitalityProject from '../../../../Components/HospitalityProject/HospitalityProject'
import { fetchHospitalityProject } from '../../../../lib/fetchHospitalityProject'

export default async function HospitalityProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const project = await fetchHospitalityProject(slug, locale)
  if (!project) return notFound()
  return <HospitalityProject project={project} locale={locale} />
}
