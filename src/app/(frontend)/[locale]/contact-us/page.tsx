import ContactUs from '../../Components/ContactUs/ContactUs'

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <ContactUs />
}



export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}
