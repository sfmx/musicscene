import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('guitars-12-string');

export default function TwelveStringGuitarsPage() {
  return <GearLessonDetailPageTemplate dataKey="guitars-12-string" />;
}
