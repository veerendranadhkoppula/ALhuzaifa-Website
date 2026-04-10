export async function fetchBrochure(): Promise<string | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/brochure?limit=1&depth=1`, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) return null

    const data = await res.json()
    const doc = data.docs?.[0]

    const fileUrl = doc?.file?.url
    const driveLink = doc?.driveLink

    return fileUrl || driveLink || null
  } catch {
    return null
  }
}
