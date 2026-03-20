import Home from '../Components/Home/Home'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <Home />
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}