import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('guitars-acoustic');

export default function AcousticGuitarsPage() {
  return <GearLessonDetailPageTemplate dataKey="guitars-acoustic" />;
}
