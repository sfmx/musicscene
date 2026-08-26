import { getChordMetadata } from '@/lib/seo';
import ChordAnalysisPageTemplate from '@/components/ChordAnalysis/ChordAnalysisPageTemplate';

export const metadata = getChordMetadata('altered-dominant');

export default function AlteredDominantChordsPage() {
  return <ChordAnalysisPageTemplate chordSlug="altered-dominant" displayName="Altered Dominant Chords" />;
}
