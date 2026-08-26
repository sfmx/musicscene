import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('techniques-lead');

export default function LeadTechniquesPage() {
  return <SongLessonDetailPageTemplate dataKey="techniques-lead" />;
}
