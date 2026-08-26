import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('amps-solid-state');

export default function SolidStateAmpsPage() {
  return <GearLessonDetailPageTemplate dataKey="amps-solid-state" />;
}
