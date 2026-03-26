export type ResidentialProject = {
  id: string
  title: string
  slug: string
  thumbnailImage: {
    url: string
    alt: string
  }
}

export async function fetchResidentialProjects(locale: string): Promise<ResidentialProject[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/residential?where[status][equals]=published&depth=1&limit=100&locale=${locale}&select[title]=true&select[slug]=true&select[thumbnailImage]=true`,
      { next: { revalidate: 60 } },
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.docs ?? []
  } catch {
    return []
  }
}
