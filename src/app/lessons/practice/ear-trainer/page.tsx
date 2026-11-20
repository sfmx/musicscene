import type { Metadata } from 'next';
import ClientRedirect from '@/components/Navigation/ClientRedirect';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Interactive Ear Training & Pitch Quizzer | MusicScene',
  description: 'Redirecting to the ear trainer...',
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/ear-trainer/`,
  },
};

export default function LegacyEarTrainerRedirectPage() {
  return <ClientRedirect to="/ear-trainer" />;
}
