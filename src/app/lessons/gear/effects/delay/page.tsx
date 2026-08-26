import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('effects-delay');

export default function DelayEffectsPage() {
  return <GearLessonDetailPageTemplate dataKey="effects-delay" />;
}
