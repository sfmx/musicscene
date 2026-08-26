import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('guitars-electric');

export default function ElectricGuitarsPage() {
  return <GearLessonDetailPageTemplate dataKey="guitars-electric" />;
}
