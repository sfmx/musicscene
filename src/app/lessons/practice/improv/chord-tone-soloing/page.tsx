import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('chord-tone-soloing');

export default function ChordToneSoloingPage() {
  return <PracticeDetailPageTemplate practiceSlug="chord-tone-soloing" displayName="Chord Tone Soloing" />;
}
