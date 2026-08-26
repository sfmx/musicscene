import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('fretboard-navigation');

export default function FretboardNavigationPage() {
  return <PracticeDetailPageTemplate practiceSlug="fretboard-navigation" displayName="Fretboard Navigation" />;
}
