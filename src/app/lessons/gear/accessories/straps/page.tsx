import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('accessories-straps');

export default function StrapsAccessoriesPage() {
  return <GearLessonDetailPageTemplate dataKey="accessories-straps" />;
}
