import { notFound } from 'next/navigation'
import ResidentialProject from '../../../../Components/ResidentialProject/ResidentialProject'
import { fetchResidentialProject } from '../../../../lib/fetchResidentialProject'

export default async function ResidentialProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const project = await fetchResidentialProject(slug, locale)
  if (!project) return notFound()
  return <ResidentialProject project={project} locale={locale} />
}

