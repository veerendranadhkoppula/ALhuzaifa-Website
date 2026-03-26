import ContactUS from '../../Components/ContactUS/ContactUS'

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <ContactUS />
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}
