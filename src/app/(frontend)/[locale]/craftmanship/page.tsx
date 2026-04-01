import Craftmanship from '../../Components/Craftmanship/Craftmanship'
import { fetchCertificates } from '../../lib/fetchCertificates'

export async function generateMetadata() {
  return {
    title: 'Craftmanship | Al Huzaifa Design Studio',
    description:
      'Design-led production with master artisans. In-house manufacturing excellence delivering precision and artistry.',
    openGraph: {
      title: 'Craftmanship | Al Huzaifa Design Studio',
      description:
        'Design-led production with master artisans. In-house manufacturing excellence delivering precision and artistry.',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const certificates = await fetchCertificates(locale)
  return <Craftmanship certificates={certificates} />
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}
