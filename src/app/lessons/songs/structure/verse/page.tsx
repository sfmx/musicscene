import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('structure-verse');

export default function VerseStructurePage() {
  return <SongLessonDetailPageTemplate dataKey="structure-verse" />;
}
