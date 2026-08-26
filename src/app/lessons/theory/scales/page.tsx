import type { Metadata } from 'next';
import ScaleIndexPageTemplate from '@/components/ScaleAnalysis/ScaleIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Guitar Scales Guide',
  description: 'Complete guide to guitar scales. Major, minor, pentatonic, blues, and modal scales with fretboard patterns and exercises.',
};

export default function ScalesPage() {
  return <ScaleIndexPageTemplate />;
}
