import type { Metadata } from 'next';
import ProgressionIndexPageTemplate from '@/components/ProgressionAnalysis/ProgressionIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Chord Progressions for Guitar',
  description: 'Learn essential chord progressions for guitar. I-IV-V, ii-V-I, 12-bar blues, and more with theory and practice exercises.',
};

export default function ProgressionsPage() {
  return <ProgressionIndexPageTemplate />;
}
