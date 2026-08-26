import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('breakdowns-instrumental');

export default function InstrumentalBreakdownsPage() {
  return <SongLessonDetailPageTemplate dataKey="breakdowns-instrumental" />;
}
