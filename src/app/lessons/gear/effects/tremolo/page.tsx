import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('effects-tremolo');

export default function TremoloEffectsPage() {
  return <GearLessonDetailPageTemplate dataKey="effects-tremolo" />;
}
