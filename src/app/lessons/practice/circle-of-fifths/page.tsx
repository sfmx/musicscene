import type { Metadata } from 'next';
import ClientRedirect from '@/components/Navigation/ClientRedirect';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Interactive Circle of Fifths Explorer | MusicScene',
  description: 'Redirecting to the Circle of Fifths explorer...',
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/circle-of-fifths/`,
  },
};

export default function LegacyCircleOfFifthsRedirectPage() {
  return <ClientRedirect to="/circle-of-fifths" />;
}
