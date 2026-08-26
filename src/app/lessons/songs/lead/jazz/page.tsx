import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('lead-jazz');

export default function JazzLeadPage() {
  return <SongLessonDetailPageTemplate dataKey="lead-jazz" />;
}
