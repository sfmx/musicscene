import { getChordMetadata } from '@/lib/seo';
import ChordAnalysisPageTemplate from '@/components/ChordAnalysis/ChordAnalysisPageTemplate';

export const metadata = getChordMetadata('half-diminished');

export default function HalfDiminishedChordsPage() {
  return <ChordAnalysisPageTemplate chordSlug="half-diminished" displayName="Half-Diminished Chords" />;
}
