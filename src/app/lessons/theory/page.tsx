import type { Metadata } from 'next';
import TheoryHubPage from '@/components/TheoryHub/TheoryHubPage';

export const metadata: Metadata = {
  title: 'Music Theory for Guitar | MusicScene',
  description: 'Master guitar music theory. Learn intervals, scales, chord construction, modal colors, and harmonic progressions with visual fretboard diagrams and song examples.',
  openGraph: {
    title: 'Music Theory for Guitar | MusicScene',
    description: 'Connect abstract music theory directly to the fretboard. 5 core pillars, visual CAGED patterns, and 100+ iconic song breakdowns.',
    url: 'https://musicscene.com.au/lessons/theory',
    siteName: 'MusicScene',
    images: [{ url: 'https://musicscene.com.au/images/og-default.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Music Theory for Guitar | MusicScene',
    description: 'Master intervals, scales, chords, modes, and progressions with visual fretboard diagrams and song examples.',
  },
};

export default function TheoryLessonsPage() {
  return <TheoryHubPage />;
}
