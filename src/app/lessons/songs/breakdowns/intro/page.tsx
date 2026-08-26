import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('breakdowns-intro');

export default function IntroBreakdownsPage() {
  return <SongLessonDetailPageTemplate dataKey="breakdowns-intro" />;
}
