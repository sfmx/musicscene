import { getChordMetadata } from '@/lib/seo';
import ChordAnalysisPageTemplate from '@/components/ChordAnalysis/ChordAnalysisPageTemplate';

export const metadata = getChordMetadata('minor');

export default function MinorChordsPage() {
  return <ChordAnalysisPageTemplate chordSlug="minor" displayName="Minor Chords" />;
}
