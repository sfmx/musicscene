import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('effects-reverb');

export default function ReverbEffectsPage() {
  return <GearLessonDetailPageTemplate dataKey="effects-reverb" />;
}
