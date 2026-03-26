import { notFound } from 'next/navigation'
import CommercialProject from '../../../../Components/CommercialProject/CommercialProject'
import { fetchCommercialProject } from '../../../../lib/fetchCommercialProject'

export default async function CommercialProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const project = await fetchCommercialProject(slug, locale)
  if (!project) return notFound()
  return <CommercialProject project={project} locale={locale} />
}
