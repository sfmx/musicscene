import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('lead-intervals');

export default function IntervalsLeadPage() {
  return <SongLessonDetailPageTemplate dataKey="lead-intervals" />;
}
