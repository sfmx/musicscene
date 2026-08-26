import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('breakdowns-solo');

export default function SoloBreakdownsPage() {
  return <SongLessonDetailPageTemplate dataKey="breakdowns-solo" />;
}
