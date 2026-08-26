import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('breakdowns-full');

export default function FullBreakdownsPage() {
  return <SongLessonDetailPageTemplate dataKey="breakdowns-full" />;
}
