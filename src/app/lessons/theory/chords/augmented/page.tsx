import { getChordMetadata } from '@/lib/seo';
import ChordAnalysisPageTemplate from '@/components/ChordAnalysis/ChordAnalysisPageTemplate';

export const metadata = getChordMetadata('augmented');

export default function AugmentedChordsPage() {
  return <ChordAnalysisPageTemplate chordSlug="augmented" displayName="Augmented Chords" />;
}
