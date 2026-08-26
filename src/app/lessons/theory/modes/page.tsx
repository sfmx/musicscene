import type { Metadata } from 'next';
import ModeIndexPageTemplate from '@/components/ModeAnalysis/ModeIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Guitar Modes Explained',
  description: 'Master the seven modes of the major scale on guitar. Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, and Locrian.',
};

export default function ModesPage() {
  return <ModeIndexPageTemplate />;
}
