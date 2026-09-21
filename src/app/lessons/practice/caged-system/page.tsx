import type { Metadata } from 'next';
import CagedSystemClient from './CagedSystemClient';
import JsonLdScript from '@/components/JsonLdScript';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Interactive CAGED System Visualizer & Chord-Scale Studio | MusicScene',
  description:
    'Master the guitar CAGED system with our free interactive fretboard visualizer. Connect open chord shapes (C, A, G, E, D) to movable scale patterns, triad inversions, and pentatonic boxes with real WebAudio guitar playback.',
  keywords: [
    'caged system guitar',
    'caged system interactive visualizer',
    'caged chord shapes fretboard',
    'guitar neck roadmap',
    'movable chord shapes guitar',
    'pentatonic boxes caged system',
    'triad inversions guitar neck',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/lessons/practice/caged-system/`,
  },
  openGraph: {
    title: 'Interactive CAGED System Visualizer | MusicScene',
    description:
      'Explore the 5 CAGED chord forms, movable scale boxes, and triad inversions across all 12 keys with interactive WebAudio guitar synthesis.',
    url: `${SITE_CONFIG.baseUrl}/lessons/practice/caged-system/`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: `${SITE_CONFIG.baseUrl}/images/og-scales.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interactive CAGED System Visualizer | MusicScene',
    description: 'Master movable chord forms and scale patterns on the interactive CAGED guitar fretboard.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Interactive CAGED System Visualizer',
  url: `${SITE_CONFIG.baseUrl}/lessons/practice/caged-system/`,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'Interactive guitar CAGED system visualizer featuring 16 frets, 5 movable shapes (C, A, G, E, D), chromatic root transposition, pentatonic and major scale overlays, triad inversion explorer, and WebAudio guitar strumming.',
};

export default function CagedSystemPage() {
  return (
    <>
      <JsonLdScript data={jsonLd} />
      <CagedSystemClient />
    </>
  );
}

