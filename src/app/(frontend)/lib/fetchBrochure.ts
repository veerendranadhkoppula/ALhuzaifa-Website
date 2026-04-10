const formatDriveLink = (url?: string | null) => {
  if (!url) return null

  const match = url.match(/\/d\/(.*?)\//)

  if (!match) return url

  const fileId = match[1]

  return `https://drive.google.com/uc?export=download&id=${fileId}`
}

export async function fetchBrochure(): Promise<string | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/brochure?limit=1&depth=1`, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) return null

    const data = await res.json()
    const doc = data.docs?.[0]

    const fileUrl = doc?.file?.url ? `${process.env.NEXT_PUBLIC_SERVER_URL}${doc.file.url}` : null

    const driveLink = formatDriveLink(doc?.driveLink)

    return fileUrl || driveLink || null
  } catch {
    return null
  }
}
