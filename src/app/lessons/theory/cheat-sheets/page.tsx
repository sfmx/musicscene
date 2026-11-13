import type { Metadata } from 'next';
import CheatSheetsClient from './CheatSheetsClient';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Printable Guitar Cheat Sheets & Reference Cards (PDF) | MusicScene',
  description:
    'Free high-definition printable guitar cheat sheets and reference cards. Standard notation, sub-staff ledger lines, CAGED system shapes, circle of fifths, and rhythm subdivisions.',
  keywords: [
    'printable guitar cheat sheet',
    'guitar standard notation pdf',
    'caged system cheat sheet',
    'circle of fifths printable',
    'guitar ledger lines reference card',
    'free guitar theory printables',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/lessons/theory/cheat-sheets/`,
  },
  openGraph: {
    title: 'Printable Guitar Cheat Sheets & Reference Cards | MusicScene',
    description:
      'Download and print clean, ink-friendly guitar reference cards for standard notation, ledger lines, CAGED system, and circle of fifths.',
    url: `${SITE_CONFIG.baseUrl}/lessons/theory/cheat-sheets/`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Printable Guitar Cheat Sheets & Reference Cards',
    description: 'Clean, printable 1-page reference sheets for guitarists, students, and music stands.',
  },
};

export default function CheatSheetsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 transition-colors">
      <CheatSheetsClient />
    </div>
  );
}
