import type { Metadata } from 'next';
import ClientRedirect from '@/components/Navigation/ClientRedirect';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Interactive Rhythm Sight-Reading Trainer | MusicScene',
  description: 'Redirecting to the rhythm trainer...',
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/rhythm-trainer/`,
  },
};

export default function PracticeRhythmTrainerRedirectPage() {
  return <ClientRedirect to="/rhythm-trainer" />;
}
