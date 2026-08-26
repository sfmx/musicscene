import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('amps-mini');

export default function MiniAmpsPage() {
  return <GearLessonDetailPageTemplate dataKey="amps-mini" />;
}
