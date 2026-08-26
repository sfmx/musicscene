import { getChordMetadata } from '@/lib/seo';
import ChordAnalysisPageTemplate from '@/components/ChordAnalysis/ChordAnalysisPageTemplate';

export const metadata = getChordMetadata('seventh');

export default function SeventhChordsPage() {
  return <ChordAnalysisPageTemplate chordSlug="seventh" displayName="Seventh Chords" />;
}
