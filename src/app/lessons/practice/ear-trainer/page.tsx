import type { Metadata } from 'next';
import EarTrainerClient from './EarTrainerClient';
import JsonLdScript from '@/components/JsonLdScript';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Interactive Ear Training & Pitch Quizzer | MusicScene',
  description:
    'Free interactive ear training game for musicians and guitarists. Train interval recognition with famous song mnemonics, identify chord qualities, track your streak, and develop relative pitch with real-time WebAudio synthesis.',
  keywords: [
    'ear training game',
    'interval ear trainer',
    'relative pitch trainer',
    'chord quality ear training',
    'interval recognition quiz',
    'guitar ear training',
    'music theory ear practice',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/lessons/practice/ear-trainer/`,
  },
  openGraph: {
    title: 'Interactive Ear Training & Pitch Quizzer | MusicScene',
    description:
      'Train interval and chord quality recognition with real-time WebAudio synthesis, difficulty tiers, and famous song mnemonics.',
    url: `${SITE_CONFIG.baseUrl}/lessons/practice/ear-trainer/`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: `${SITE_CONFIG.baseUrl}/images/og-intervals.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interactive Ear Training & Pitch Quizzer | MusicScene',
    description: 'Test your musical ear with real-time interval and chord quality quizzes.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Interactive Ear Training & Pitch Quizzer',
  url: `${SITE_CONFIG.baseUrl}/lessons/practice/ear-trainer/`,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'Interactive music ear training web application featuring 12 chromatic intervals, 7 chord qualities, ascending/descending/harmonic playback, beginner-to-advanced difficulty tiers, song mnemonics, and live streak tracking.',
};

export default function EarTrainerPage() {
  return (
    <>
      <JsonLdScript data={jsonLd} />
      <EarTrainerClient />
    </>
  );
}

