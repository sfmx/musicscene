import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('guitars-baritone');

export default function BaritoneGuitarsPage() {
  return <GearLessonDetailPageTemplate dataKey="guitars-baritone" />;
}
