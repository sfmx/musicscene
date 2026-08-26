import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('amps-hybrid');

export default function HybridAmpsPage() {
  return <GearLessonDetailPageTemplate dataKey="amps-hybrid" />;
}
