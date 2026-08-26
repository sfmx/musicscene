import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('lead-scales');

export default function ScalesLeadPage() {
  return <SongLessonDetailPageTemplate dataKey="lead-scales" />;
}
