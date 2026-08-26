import { getChordMetadata } from '@/lib/seo';
import ChordAnalysisPageTemplate from '@/components/ChordAnalysis/ChordAnalysisPageTemplate';

export const metadata = getChordMetadata('power');

export default function PowerChordsPage() {
  return <ChordAnalysisPageTemplate chordSlug="power" displayName="Power Chords" />;
}
