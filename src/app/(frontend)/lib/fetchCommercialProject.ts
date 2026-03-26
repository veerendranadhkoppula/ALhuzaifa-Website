import { CommercialProject } from './fetchCommercial'

export type CommercialProjectFull = {
  id: string
  title: string
  slug: string
  location: string
  shortDescription: string
  longDescription: any
  coverImage: {
    url: string
    alt: string
  }
  contentBlocks: any[]
  relatedProjects: CommercialProject[]
}

export async function fetchCommercialProject(
  slug: string,
  locale: string,
): Promise<CommercialProjectFull | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/commercial?where[slug][equals]=${slug}&where[status][equals]=published&depth=2&locale=${locale}&limit=1`,
      { next: { revalidate: 60 } },
    )
    if (!res.ok) return null
    const data = await res.json()
    return data.docs?.[0] ?? null
  } catch {
    return null
  }
}
