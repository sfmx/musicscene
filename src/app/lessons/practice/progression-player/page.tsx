import type { Metadata } from 'next';
import ClientRedirect from '@/components/Navigation/ClientRedirect';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Guitar Chord Progression Jam Player | MusicScene',
  description: 'Redirecting to the chord progression jam player...',
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/progression-player/`,
  },
};

export default function LegacyProgressionPlayerRedirectPage() {
  return <ClientRedirect to="/progression-player" />;
}
