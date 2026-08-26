import { getChordMetadata } from '@/lib/seo';
import ChordAnalysisPageTemplate from '@/components/ChordAnalysis/ChordAnalysisPageTemplate';

export const metadata = getChordMetadata('dominant-ninth');

export default function DominantNinthChordsPage() {
  return <ChordAnalysisPageTemplate chordSlug="dominant-ninth" displayName="Dominant Ninth Chords" />;
}
