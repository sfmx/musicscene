import { getChordMetadata } from '@/lib/seo';
import ChordAnalysisPageTemplate from '@/components/ChordAnalysis/ChordAnalysisPageTemplate';

export const metadata = getChordMetadata('slash');

export default function SlashChordsPage() {
  return <ChordAnalysisPageTemplate chordSlug="slash" displayName="Slash Chords" />;
}
