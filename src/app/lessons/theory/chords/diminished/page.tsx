import { getChordMetadata } from '@/lib/seo';
import ChordAnalysisPageTemplate from '@/components/ChordAnalysis/ChordAnalysisPageTemplate';

export const metadata = getChordMetadata('diminished');

export default function DiminishedChordsPage() {
  return <ChordAnalysisPageTemplate chordSlug="diminished" displayName="Diminished Chords" />;
}
