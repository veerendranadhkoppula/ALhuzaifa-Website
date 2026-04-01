import AboutUs from '../../Components/AboutUs/AboutUs'

export async function generateMetadata() {
  return {
    title: 'About Us | Al Huzaifa Design Studio',
    description: 'Crafting spaces since 1976. Discover the story, philosophy, and journey behind Al Huzaifa Design Studio.',
    openGraph: {
      title: 'About Us | Al Huzaifa Design Studio',
      description: 'Crafting spaces since 1976. Discover the story, philosophy, and journey behind Al Huzaifa Design Studio.',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
  }
}

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