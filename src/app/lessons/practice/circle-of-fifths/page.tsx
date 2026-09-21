import type { Metadata } from 'next';
import CircleOfFifthsClient from './CircleOfFifthsClient';
import JsonLdScript from '@/components/JsonLdScript';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Interactive Circle of Fifths Explorer & Diatonic Chord Studio | MusicScene',
  description:
    'Free interactive Circle of Fifths tool for guitarists and songwriters. Audition playable diatonic chords, explore key modulation paths, analyze key signatures, and master modal interchange borrowed chords.',
  keywords: [
    'circle of fifths interactive',
    'circle of fifths guitar',
    'diatonic chords player',
    'key modulation tool',
    'borrowed chords modal interchange',
    'interactive music theory tool',
    'circle of fourths and fifths',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/lessons/practice/circle-of-fifths/`,
  },
  openGraph: {
    title: 'Interactive Circle of Fifths Explorer & Diatonic Chord Studio | MusicScene',
    description:
      'Playable interactive Circle of Fifths with WebAudio diatonic chord playback, key modulation paths, and modal interchange borrowed chords.',
    url: `${SITE_CONFIG.baseUrl}/lessons/practice/circle-of-fifths/`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: `${SITE_CONFIG.baseUrl}/images/og-chords.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interactive Circle of Fifths Explorer | MusicScene',
    description: 'Explore key signatures, playable diatonic chords, and song cadences on the interactive Circle of Fifths.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Interactive Circle of Fifths Explorer & Diatonic Chord Studio',
  url: `${SITE_CONFIG.baseUrl}/lessons/practice/circle-of-fifths/`,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'Interactive Circle of Fifths tool featuring 12 chromatic keys, playable WebAudio acoustic guitar chord strums, key signature counter, key modulation routes, and modal interchange analysis.',
};

export default function CircleOfFifthsPage() {
  return (
    <>
      <JsonLdScript data={jsonLd} />
      <CircleOfFifthsClient />
    </>
  );
}

