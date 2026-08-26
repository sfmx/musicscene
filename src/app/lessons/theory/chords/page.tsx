import type { Metadata } from 'next';
import ChordIndexPageTemplate from '@/components/ChordAnalysis/ChordIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Guitar Chord Theory',
  description: 'Explore chord theory for guitar. Major, minor, seventh, diminished, augmented, suspended, and extended chords explained.',
};

export default function ChordsPage() {
  return <ChordIndexPageTemplate />;
}
