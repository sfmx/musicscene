import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('breakdowns-chorus');

export default function ChorusBreakdownsPage() {
  return <SongLessonDetailPageTemplate dataKey="breakdowns-chorus" />;
}
