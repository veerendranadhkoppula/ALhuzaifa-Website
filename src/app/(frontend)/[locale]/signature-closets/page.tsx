import SignatureClosets from '../../Components/SignatureClosets/SignatureClosets'

export async function generateMetadata() {
  return {
    title: 'Signature Closets | Al Huzaifa Design Studio',
    description:
      'Bespoke signature closets uniting manufacturing excellence with audacious customization. Tailored to reflect your aesthetic.',
    openGraph: {
      title: 'Signature Closets | Al Huzaifa Design Studio',
      description:
        'Bespoke signature closets uniting manufacturing excellence with audacious customization. Tailored to reflect your aesthetic.',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <SignatureClosets />
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}
