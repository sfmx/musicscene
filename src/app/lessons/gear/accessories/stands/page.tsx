import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('accessories-stands');

export default function StandsAccessoriesPage() {
  return <GearLessonDetailPageTemplate dataKey="accessories-stands" />;
}
