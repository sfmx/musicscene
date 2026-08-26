import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('effects-chorus');

export default function ChorusEffectsPage() {
  return <GearLessonDetailPageTemplate dataKey="effects-chorus" />;
}
