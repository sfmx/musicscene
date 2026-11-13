import type { Metadata } from 'next';
import RhythmTrainerClient from './RhythmTrainerClient';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Interactive Rhythm Sight-Reading Trainer & Tap Game | MusicScene',
  description:
    'Free interactive rhythm sight-reading trainer. Practice tapping note values, whole, half, quarter, eighth, and sixteenth subdivisions in standard notation with precision metronome audio.',
  keywords: [
    'rhythm sight reading trainer',
    'guitar rhythm practice',
    'note duration quiz',
    'metronome tap game',
    'read rhythm sheet music',
    'subdivision trainer guitar',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/lessons/practice/rhythm-trainer/`,
  },
  openGraph: {
    title: 'Interactive Rhythm Sight-Reading Trainer | MusicScene',
    description:
      'Master standard notation note values and rhythm. Practice whole, half, quarter, eighth, and sixteenth notes with precision audio scoring.',
    url: `${SITE_CONFIG.baseUrl}/lessons/practice/rhythm-trainer/`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interactive Rhythm Sight-Reading Trainer',
    description: 'Drill rhythm notation and timing against a precision metronome.',
  },
};

export default function RhythmTrainerPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 transition-colors">
      <RhythmTrainerClient />
    </div>
  );
}
