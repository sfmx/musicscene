import { getChordMetadata } from '@/lib/seo';
import ChordAnalysisPageTemplate from '@/components/ChordAnalysis/ChordAnalysisPageTemplate';

export const metadata = getChordMetadata('major');

export default function MajorChordsPage() {
  return <ChordAnalysisPageTemplate chordSlug="major" displayName="Major Chords" />;
}
