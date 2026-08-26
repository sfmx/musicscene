import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('lead-rock');

export default function RockLeadPage() {
  return <SongLessonDetailPageTemplate dataKey="lead-rock" />;
}
