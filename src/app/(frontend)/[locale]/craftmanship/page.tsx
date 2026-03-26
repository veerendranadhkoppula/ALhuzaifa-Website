import Craftmanship from '../../Components/Craftmanship/Craftmanship'
import { fetchCertificates } from '../../lib/fetchCertificates'

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const certificates = await fetchCertificates(locale)
  return <Craftmanship certificates={certificates} />
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}