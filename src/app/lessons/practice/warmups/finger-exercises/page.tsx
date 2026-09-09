import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('finger-exercises');

export default function FingerExercisesPage() {
  return <PracticeDetailPageTemplate practiceSlug="finger-exercises" displayName="Finger Exercises" />;
}
