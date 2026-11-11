import type { Metadata } from 'next';
import SightReadingTrainerClient from './SightReadingTrainerClient';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Interactive Guitar Sight-Reading Trainer & Note Quiz | MusicScene',
  description:
    'Free interactive guitar sight-reading trainer. Practice recognizing notes on the treble staff, master Open Position (Frets 0-3), and drill rapid note recognition with instant audio feedback.',
  keywords: [
    'guitar sight reading trainer',
    'read music notes on staff',
    'guitar sheet music flashcards',
    'treble clef guitar quiz',
    'open position notes guitar',
    'learn to read music guitar',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/lessons/practice/sight-reading/`,
  },
  openGraph: {
    title: 'Interactive Guitar Sight-Reading Trainer | MusicScene',
    description:
      'Master reading music notes on the staff. Practice Open Position notes, ledger lines, and accidentals with interactive flashcards and audio feedback.',
    url: `${SITE_CONFIG.baseUrl}/lessons/practice/sight-reading/`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interactive Guitar Sight-Reading Trainer',
    description: 'Drill note recognition on the staff with instant audio and fretboard feedback.',
  },
};

export default function SightReadingTrainerPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 transition-colors">
      <SightReadingTrainerClient />
    </div>
  );
}
