import AboutUs from '../../Components/AboutUs/AboutUs'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <AboutUs />
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}
