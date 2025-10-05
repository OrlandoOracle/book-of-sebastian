import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}

export function generateMetadata({
  title = 'The Book of Sebastian',
  description = 'A testament of radical accountability, miraculous survival, and building empire from a guest room. Weekly verses chronicling the journey from brain cancer to entrepreneurship.',
  path = '',
  ogImage = '/og-image.png'
}: SEOProps = {}): Metadata {
  const baseUrl = 'https://bookofsebastian.com';
  const fullTitle = title === 'The Book of Sebastian'
    ? title
    : `${title} | The Book of Sebastian`;
  const url = `${baseUrl}${path}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'The Book of Sebastian',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
