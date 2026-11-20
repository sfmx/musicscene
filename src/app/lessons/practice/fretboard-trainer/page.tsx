import type { Metadata } from 'next';
import ClientRedirect from '@/components/Navigation/ClientRedirect';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Interactive Guitar Fretboard Trainer | MusicScene',
  description: 'Redirecting to the fretboard trainer...',
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/fretboard-trainer/`,
  },
};

export default function LegacyFretboardTrainerRedirectPage() {
  return <ClientRedirect to="/fretboard-trainer" />;
}
