import { notFound } from 'next/navigation'
import CommercialProject from '../../../../Components/CommercialProject/CommercialProject'
import { fetchCommercialProject } from '../../../../lib/fetchCommercialProject'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const project = await fetchCommercialProject(slug, locale)

  if (!project) return { title: 'Project Not Found | Al Huzaifa Design Studio' }

  const seoTitle = project.meta?.title || `${project.title} | Al Huzaifa Design Studio`
  const seoDesc = project.meta?.description || project.shortDescription || ''
  const rawImage = project.meta?.image?.url || project.coverImage?.url || ''
  const seoImage = rawImage.startsWith('http')
    ? rawImage
    : `${process.env.NEXT_PUBLIC_SERVER_URL}${rawImage}`

  return {
    title: seoTitle,
    description: seoDesc,
    openGraph: {
      title: seoTitle,
      description: seoDesc,
      images: seoImage
        ? [{ url: seoImage, width: 1200, height: 630 }]
        : [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
  }
}

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
