import { getChordMetadata } from '@/lib/seo';
import ChordAnalysisPageTemplate from '@/components/ChordAnalysis/ChordAnalysisPageTemplate';

export const metadata = getChordMetadata('extended');

export default function ExtendedChordsPage() {
  return <ChordAnalysisPageTemplate chordSlug="extended" displayName="Extended Chords" />;
}
