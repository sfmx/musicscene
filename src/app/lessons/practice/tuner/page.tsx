import type { Metadata } from 'next';
import ClientRedirect from '@/components/Navigation/ClientRedirect';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Free Online Guitar Tuner | MusicScene',
  description: 'Redirecting to the online guitar tuner...',
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tuner/`,
  },
};

export default function LegacyTunerRedirectPage() {
  return <ClientRedirect to="/tuner" />;
}
