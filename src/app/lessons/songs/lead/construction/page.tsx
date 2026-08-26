import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('lead-construction');

export default function ConstructionLeadPage() {
  return <SongLessonDetailPageTemplate dataKey="lead-construction" />;
}
