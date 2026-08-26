import { getChordMetadata } from '@/lib/seo';
import ChordAnalysisPageTemplate from '@/components/ChordAnalysis/ChordAnalysisPageTemplate';

export const metadata = getChordMetadata('minor-sixth');

export default function MinorSixthChordsPage() {
  return <ChordAnalysisPageTemplate chordSlug="minor-sixth" displayName="Minor Sixth Chords" />;
}
