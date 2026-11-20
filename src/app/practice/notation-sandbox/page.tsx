import type { Metadata } from 'next';
import ClientRedirect from '@/components/Navigation/ClientRedirect';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Interactive Staff to Fretboard Sandbox | MusicScene',
  description: 'Redirecting to the notation sandbox...',
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/notation-sandbox/`,
  },
};

export default function PracticeNotationSandboxRedirectPage() {
  return <ClientRedirect to="/notation-sandbox" />;
}
