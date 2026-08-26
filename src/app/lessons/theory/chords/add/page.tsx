import { getChordMetadata } from '@/lib/seo';
import ChordAnalysisPageTemplate from '@/components/ChordAnalysis/ChordAnalysisPageTemplate';

export const metadata = getChordMetadata('add');

export default function AddChordsPage() {
  return <ChordAnalysisPageTemplate chordSlug="add" displayName="Add Chords" />;
}
