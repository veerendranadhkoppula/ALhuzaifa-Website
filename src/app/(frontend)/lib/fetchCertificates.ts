export type Certificate = {
  id: string
  title: string
  file: {
    url: string
    mimeType: string
  }
}

export async function fetchCertificates(locale: string): Promise<Certificate[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/certificates?limit=3&locale=${locale}&depth=1`,
      { next: { revalidate: 3600 } },
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.docs ?? []
  } catch {
    return []
  }
}
