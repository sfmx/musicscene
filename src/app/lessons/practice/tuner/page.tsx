import type { Metadata } from 'next';
import GuitarTunerClient from './GuitarTunerClient';
import JsonLdScript from '@/components/JsonLdScript';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Free Online Guitar Tuner | Microphone & Audio Pitch Detector | MusicScene',
  description:
    'Free online chromatic guitar tuner with high-precision microphone pitch detection and realistic reference audio tones. Supports Standard, Drop D, DADGAD, Half-Step Down, and Open Tunings.',
  keywords: [
    'online guitar tuner',
    'microphone guitar tuner',
    'chromatic guitar tuner web',
    'tune guitar online free',
    'drop d tuner online',
    'dadgad tuner online',
    'guitar pitch detector webaudio',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/lessons/practice/tuner/`,
  },
  openGraph: {
    title: 'Free Online Guitar Tuner | Microphone & Audio Pitch Detector | MusicScene',
    description:
      'Tune your guitar instantly in your browser with real-time microphone pitch detection and acoustic reference tones.',
    url: `${SITE_CONFIG.baseUrl}/lessons/practice/tuner/`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Guitar Tuner',
    description: 'High-precision interactive guitar tuner with microphone detection and audio tones.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Online Guitar Tuner & Pitch Detector',
  url: `${SITE_CONFIG.baseUrl}/lessons/practice/tuner/`,
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'Free high-precision online guitar tuner with microphone autocorrelation pitch detection, dynamic cents needle meter, A4 calibration, and acoustic reference pluck tones for multiple tunings.',
};

export default function GuitarTunerPage() {
  return (
    <>
      <JsonLdScript data={jsonLd} />
      <GuitarTunerClient />
    </>
  );
}

