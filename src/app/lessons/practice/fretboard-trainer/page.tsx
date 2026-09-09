import type { Metadata } from 'next';
import FretboardTrainerClient from './FretboardTrainerClient';
import JsonLdScript from '@/components/JsonLdScript';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Interactive Guitar Fretboard Trainer & Interval Visualizer | MusicScene',
  description:
    'Free interactive guitar fretboard trainer. Learn note positions, visualize intervals, memorize scales, and practice speed quizzes across all 6 strings with audio feedback.',
  keywords: [
    'guitar fretboard trainer',
    'interactive fretboard map',
    'guitar interval visualizer',
    'guitar note memorization game',
    'fretboard notes quiz',
    'guitar scales fretboard',
    'learn guitar neck',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/lessons/practice/fretboard-trainer/`,
  },
  openGraph: {
    title: 'Interactive Guitar Fretboard Trainer & Interval Visualizer | MusicScene',
    description:
      'Master intervals, visualize scale geometry across all 6 strings, and train rapid fretboard note recall with real audio feedback.',
    url: `${SITE_CONFIG.baseUrl}/lessons/practice/fretboard-trainer/`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interactive Guitar Fretboard Trainer & Interval Visualizer',
    description: 'Master guitar notes and intervals with our free interactive fretboard utility.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Guitar Fretboard Trainer & Interval Visualizer',
  url: `${SITE_CONFIG.baseUrl}/lessons/practice/fretboard-trainer/`,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'Interactive guitar fretboard utility tool featuring interval mapping, audio note synthesis, note hunting challenges, and speed quizzes for all 6 strings.',
};

export default function FretboardTrainerPage() {
  return (
    <>
      <JsonLdScript data={jsonLd} />
      <FretboardTrainerClient />
    </>
  );
}
