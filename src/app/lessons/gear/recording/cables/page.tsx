import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('recording-cables');

export default function CablesRecordingPage() {
  return <GearLessonDetailPageTemplate dataKey="recording-cables" />;
}
