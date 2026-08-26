import type { Metadata } from 'next';
import IntervalIndexPageTemplate from '@/components/IntervalAnalysis/IntervalIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Music Intervals for Guitar',
  description: 'Learn all music intervals on guitar from unison to octave. Ear training, fretboard patterns, and practical applications.',
};

export default function IntervalsPage() {
  return <IntervalIndexPageTemplate />;
}
