import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('effects-distortion');

export default function DistortionEffectsPage() {
  return <GearLessonDetailPageTemplate dataKey="effects-distortion" />;
}
