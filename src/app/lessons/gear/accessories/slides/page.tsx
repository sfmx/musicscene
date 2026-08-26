import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('accessories-slides');

export default function SlidesAccessoriesPage() {
  return <GearLessonDetailPageTemplate dataKey="accessories-slides" />;
}
