import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('accessories-cases');

export default function CasesAccessoriesPage() {
  return <GearLessonDetailPageTemplate dataKey="accessories-cases" />;
}
