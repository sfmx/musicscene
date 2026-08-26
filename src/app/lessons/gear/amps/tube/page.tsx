import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('amps-tube');

export default function TubeAmpsPage() {
  return <GearLessonDetailPageTemplate dataKey="amps-tube" />;
}
