import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('lead-phrasing');

export default function PhrasingLeadPage() {
  return <SongLessonDetailPageTemplate dataKey="lead-phrasing" />;
}
