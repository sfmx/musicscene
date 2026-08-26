import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('guitars-classical');

export default function ClassicalGuitarsPage() {
  return <GearLessonDetailPageTemplate dataKey="guitars-classical" />;
}
