import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('amps-bass');

export default function BassAmpsPage() {
  return <GearLessonDetailPageTemplate dataKey="amps-bass" />;
}
