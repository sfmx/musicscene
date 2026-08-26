import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('recording-preamps');

export default function PreampsRecordingPage() {
  return <GearLessonDetailPageTemplate dataKey="recording-preamps" />;
}
