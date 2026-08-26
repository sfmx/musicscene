import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('effects-compressor');

export default function CompressorEffectsPage() {
  return <GearLessonDetailPageTemplate dataKey="effects-compressor" />;
}
