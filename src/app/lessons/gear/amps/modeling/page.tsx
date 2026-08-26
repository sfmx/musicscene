import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('amps-modeling');

export default function ModelingAmpsPage() {
  return <GearLessonDetailPageTemplate dataKey="amps-modeling" />;
}
