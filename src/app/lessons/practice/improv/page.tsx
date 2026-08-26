import type { Metadata } from 'next';
import PracticeIndexPageTemplate from '@/components/PracticeAnalysis/PracticeIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Guitar Improvisation Exercises',
  description: 'Develop your improvisation skills on guitar. Arpeggios, call-response, motif development, phrasing, rhythm, and scales.',
};

export default function ImprovPage() {
  return <PracticeIndexPageTemplate category="improv" />;
}
