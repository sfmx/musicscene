import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('recording-monitors-headphones');

export default function MonitorsHeadphonesRecordingPage() {
  return <GearLessonDetailPageTemplate dataKey="recording-monitors-headphones" />;
}
