import type { Metadata } from 'next';
import ClientRedirect from '@/components/Navigation/ClientRedirect';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Interactive Guitar Sight-Reading Trainer | MusicScene',
  description: 'Redirecting to the guitar sight-reading trainer...',
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/sight-reading/`,
  },
};

export default function PracticeSightReadingRedirectPage() {
  return <ClientRedirect to="/sight-reading" />;
}
