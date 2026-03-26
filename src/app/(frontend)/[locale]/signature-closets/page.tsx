import SignatureClosets from '../../Components/SignatureClosets/SignatureClosets'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <SignatureClosets />
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}
