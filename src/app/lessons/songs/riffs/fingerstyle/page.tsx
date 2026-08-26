import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('riffs-fingerstyle');

export default function FingerstyleRiffsPage() {
  return <SongLessonDetailPageTemplate dataKey="riffs-fingerstyle" />;
}
