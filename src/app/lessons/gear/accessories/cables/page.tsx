import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('accessories-cables');

export default function CablesAccessoriesPage() {
  return <GearLessonDetailPageTemplate dataKey="accessories-cables" />;
}
