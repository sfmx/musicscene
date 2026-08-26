import { getChordMetadata } from '@/lib/seo';
import ChordAnalysisPageTemplate from '@/components/ChordAnalysis/ChordAnalysisPageTemplate';

export const metadata = getChordMetadata('major-seventh');

export default function MajorSeventhChordsPage() {
  return <ChordAnalysisPageTemplate chordSlug="major-seventh" displayName="Major Seventh Chords" />;
}
