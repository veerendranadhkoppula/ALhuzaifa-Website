import { HospitalityProject } from './fetchHospitality'

export type HospitalityProjectFull = {
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
  relatedProjects: HospitalityProject[]
}

export async function fetchHospitalityProject(
  slug: string,
  locale: string,
): Promise<HospitalityProjectFull | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/hospitality?where[slug][equals]=${slug}&where[status][equals]=published&depth=2&locale=${locale}&limit=1`,
      {
        next: { revalidate: 60 },
      },
    )

    if (!res.ok) return null

    const data = await res.json()
    return data.docs?.[0] ?? null
  } catch {
    return null
  }
}
