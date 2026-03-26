import Services from '../../Components/Services/Services'

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <Services />
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}
