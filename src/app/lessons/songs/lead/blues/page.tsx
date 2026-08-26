import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('lead-blues');

export default function BluesLeadPage() {
  return <SongLessonDetailPageTemplate dataKey="lead-blues" />;
}
