import Services from '../../Components/Services/Services'

export async function generateMetadata() {
  return {
    title: 'Services | Al Huzaifa Design Studio',
    description:
      'From F&B hospitality to bespoke residences and commercial interiors — explore our design services.',
    openGraph: {
      title: 'Services | Al Huzaifa Design Studio',
      description:
        'From F&B hospitality to bespoke residences and commercial interiors — explore our design services.',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <Services />
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}
