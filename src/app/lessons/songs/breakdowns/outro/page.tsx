import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('breakdowns-outro');

export default function OutroBreakdownsPage() {
  return <SongLessonDetailPageTemplate dataKey="breakdowns-outro" />;
}
