import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('accessories-tuners');

export default function TunersAccessoriesPage() {
  return <GearLessonDetailPageTemplate dataKey="accessories-tuners" />;
}
