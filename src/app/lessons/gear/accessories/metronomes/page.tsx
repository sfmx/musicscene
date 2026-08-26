import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('accessories-metronomes');

export default function MetronomesAccessoriesPage() {
  return <GearLessonDetailPageTemplate dataKey="accessories-metronomes" />;
}
