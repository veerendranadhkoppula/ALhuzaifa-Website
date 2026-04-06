export type CommercialProject = {
  id: string
  title: string
  slug: string
  thumbnailImage: {
    url: string
    alt: string
  }
}

export async function fetchCommercialProjects(locale: string): Promise<CommercialProject[]> {
  try {
    const res = await fetch(
`${process.env.NEXT_PUBLIC_SERVER_URL}/api/commercial?where[status][equals]=published&depth=1&limit=100&locale=${locale}&select[title]=true&select[slug]=true&select[thumbnailImage]=true&sort=-updatedAt`,
      { next: { revalidate: 60 } },
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.docs ?? []
  } catch {
    return []
  }
}
