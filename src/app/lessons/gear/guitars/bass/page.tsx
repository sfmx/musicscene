import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('guitars-bass');

export default function BassGuitarsPage() {
  return <GearLessonDetailPageTemplate dataKey="guitars-bass" />;
}
