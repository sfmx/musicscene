import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('recording-microphones');

export default function MicrophonesRecordingPage() {
  return <GearLessonDetailPageTemplate dataKey="recording-microphones" />;
}
