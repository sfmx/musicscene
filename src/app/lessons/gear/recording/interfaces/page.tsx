import { getGearLessonMetadata } from '@/lib/seo';
import GearLessonDetailPageTemplate from '@/components/GearLessons/GearLessonDetailPageTemplate';

export const metadata = getGearLessonMetadata('recording-interfaces');

export default function InterfacesRecordingPage() {
  return <GearLessonDetailPageTemplate dataKey="recording-interfaces" />;
}
