import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('accessories-capos');

export default function CaposAccessoriesPage() {
  return <GearLessonDetailPageTemplate dataKey="accessories-capos" />;
}
