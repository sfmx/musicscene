import type { Metadata } from 'next';
import ClientRedirect from '@/components/Navigation/ClientRedirect';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Online Guitar Metronome & Speed Trainer | MusicScene',
  description: 'Redirecting to the online guitar metronome...',
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/metronome/`,
  },
};

export default function LegacyMetronomeRedirectPage() {
  return <ClientRedirect to="/metronome" />;
}
