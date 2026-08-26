import { getChordMetadata } from '@/lib/seo';
import ChordAnalysisPageTemplate from '@/components/ChordAnalysis/ChordAnalysisPageTemplate';

export const metadata = getChordMetadata('suspended');

export default function SuspendedChordsPage() {
  return <ChordAnalysisPageTemplate chordSlug="suspended" displayName="Suspended Chords" />;
}
