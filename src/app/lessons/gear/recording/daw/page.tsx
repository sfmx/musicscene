import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('recording-daw');

export default function DawRecordingPage() {
  return <GearLessonDetailPageTemplate dataKey="recording-daw" />;
}
