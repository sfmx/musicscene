import type { Metadata } from 'next';
import NotationSandboxClient from './NotationSandboxClient';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Interactive Staff to Fretboard Sandbox | Notation Scratchpad | MusicScene',
  description:
    'Free interactive staff-to-fretboard sandbox. Click any note on the treble staff to see every fret location on the guitar neck, or click any fret to see its standard sheet music notation.',
  keywords: [
    'guitar staff to fretboard',
    'interactive sheet music sandbox',
    'fretboard note finder',
    'guitar standard notation scratchpad',
    'treble clef guitar fret map',
    'ledger lines guitar sandbox',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/lessons/practice/notation-sandbox/`,
  },
  openGraph: {
    title: 'Interactive Staff to Fretboard Sandbox | MusicScene',
    description:
      'Bridge standard notation and the guitar fretboard. Two-way interactive scratchpad with acoustic audio playback and multi-position fingerings.',
    url: `${SITE_CONFIG.baseUrl}/lessons/practice/notation-sandbox/`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interactive Staff to Fretboard Sandbox',
    description: 'Explore standard notation and guitar neck geometry with instant audio playback.',
  },
};

export default function NotationSandboxPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 transition-colors">
      <NotationSandboxClient />
    </div>
  );
}
