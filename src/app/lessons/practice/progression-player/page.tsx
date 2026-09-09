import type { Metadata } from 'next';
import ProgressionPlayerClient from './ProgressionPlayerClient';
import JsonLdScript from '@/components/JsonLdScript';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Guitar Chord Progression Jam Player & Soloing Guide | MusicScene',
  description:
    'Free online guitar backing loop player. Jam over Blues, Rock, Pop, and Jazz chord progressions with adjustable BPM, metronome click, and live soloing scale recommendations.',
  keywords: [
    'guitar backing loop player',
    'chord progression jam player',
    'guitar soloing trainer',
    '12 bar blues backing loop',
    'guitar chord looper online',
    'improvise over chord progressions',
    'guitar metronome jam tool',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/lessons/practice/progression-player/`,
  },
  openGraph: {
    title: 'Guitar Chord Progression Jam Player & Soloing Guide | MusicScene',
    description:
      'Practice lead guitar soloing over looping chord progressions with adjustable tempo and live scale guides.',
    url: `${SITE_CONFIG.baseUrl}/lessons/practice/progression-player/`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guitar Chord Progression Jam Player & Soloing Guide',
    description: 'Free interactive chord progression jam tool for guitarists.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Guitar Chord Progression Jam Player',
  url: `${SITE_CONFIG.baseUrl}/lessons/practice/progression-player/`,
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'Interactive guitar looping chord player featuring synthesized chord voicings, adjustable tempo, metronome synchronization, and real-time scale soloing advice.',
};

export default function ProgressionPlayerPage() {
  return (
    <>
      <JsonLdScript data={jsonLd} />
      <ProgressionPlayerClient />
    </>
  );
}
