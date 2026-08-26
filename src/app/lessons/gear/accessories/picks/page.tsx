import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('accessories-picks');

export default function PicksAccessoriesPage() {
  return <GearLessonDetailPageTemplate dataKey="accessories-picks" />;
}
