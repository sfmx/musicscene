import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('effects-fuzz');

export default function FuzzEffectsPage() {
  return <GearLessonDetailPageTemplate dataKey="effects-fuzz" />;
}
