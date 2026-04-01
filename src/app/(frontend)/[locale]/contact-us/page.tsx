import ContactUs from '../../Components/ContactUs/ContactUs'

export async function generateMetadata() {
  return {
    title: 'Contact Us | Al Huzaifa Design Studio',
    description:
      'Get in touch with our design specialists for project enquiries, collaborations, and bespoke design consultations.',
    openGraph: {
      title: 'Contact Us | Al Huzaifa Design Studio',
      description:
        'Get in touch with our design specialists for project enquiries, collaborations, and bespoke design consultations.',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <ContactUs />
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}
