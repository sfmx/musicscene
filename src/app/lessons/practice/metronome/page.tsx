import type { Metadata } from 'next';
import MetronomeClient from './MetronomeClient';
import JsonLdScript from '@/components/JsonLdScript';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Online Guitar Metronome & Speed Trainer | Free Web Audio Practice Tool | MusicScene',
  description:
    'Free online precision guitar metronome with automated Speed Trainer ladder, tap tempo, subdivisions (8ths, triplets, 16ths), time signatures (4/4, 3/4, 6/8), and realistic drum kit grooves.',
  keywords: [
    'guitar metronome online',
    'speed trainer guitar',
    'web audio metronome',
    'tap tempo online',
    'guitar speed building ladder',
    'metronome with drum beats',
    'practice metronome for guitarists',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/lessons/practice/metronome/`,
  },
  openGraph: {
    title: 'Online Guitar Metronome & Speed Trainer | Free Audio Tool | MusicScene',
    description:
      'Practice rhythm and build clean picking speed with our free Web Audio metronome and automated speed trainer.',
    url: `${SITE_CONFIG.baseUrl}/lessons/practice/metronome/`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Guitar Metronome & Speed Trainer',
    description: 'Free interactive metronome and speed training ladder for guitarists.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Online Guitar Metronome & Speed Trainer',
  url: `${SITE_CONFIG.baseUrl}/lessons/practice/metronome/`,
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'Interactive guitar practice metronome featuring precision Web Audio lookahead scheduling, automated speed-accelerating ladder, tap tempo, visual beat counters, and multiple sound presets.',
};

export default function MetronomePage() {
  return (
    <>
      <JsonLdScript data={jsonLd} />
      <MetronomeClient />
    </>
  );
}

