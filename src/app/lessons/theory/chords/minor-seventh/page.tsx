import { getChordMetadata } from '@/lib/seo';
import ChordAnalysisPageTemplate from '@/components/ChordAnalysis/ChordAnalysisPageTemplate';

export const metadata = getChordMetadata('minor-seventh');

export default function MinorSeventhChordsPage() {
  return <ChordAnalysisPageTemplate chordSlug="minor-seventh" displayName="Minor Seventh Chords" />;
}
