import type { Metadata } from 'next';
import ClientRedirect from '@/components/Navigation/ClientRedirect';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Interactive CAGED System Visualizer | MusicScene',
  description: 'Redirecting to the CAGED system visualizer...',
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/caged-system/`,
  },
};

export default function LegacyCagedSystemRedirectPage() {
  return <ClientRedirect to="/caged-system" />;
}
