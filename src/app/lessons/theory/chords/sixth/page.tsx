import { getChordMetadata } from '@/lib/seo';
import ChordAnalysisPageTemplate from '@/components/ChordAnalysis/ChordAnalysisPageTemplate';

export const metadata = getChordMetadata('sixth');

export default function SixthChordsPage() {
  return <ChordAnalysisPageTemplate chordSlug="sixth" displayName="Sixth Chords" />;
}
