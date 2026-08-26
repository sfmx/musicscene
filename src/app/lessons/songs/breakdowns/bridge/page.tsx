import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('breakdowns-bridge');

export default function BridgeBreakdownsPage() {
  return <SongLessonDetailPageTemplate dataKey="breakdowns-bridge" />;
}
