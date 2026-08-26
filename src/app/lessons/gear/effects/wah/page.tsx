import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('effects-wah');

export default function WahEffectsPage() {
  return <GearLessonDetailPageTemplate dataKey="effects-wah" />;
}
