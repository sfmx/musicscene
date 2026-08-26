import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('effects-overdrive');

export default function OverdriveEffectsPage() {
  return <GearLessonDetailPageTemplate dataKey="effects-overdrive" />;
}
