import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('riffs-funk');

export default function FunkRiffsPage() {
  return <SongLessonDetailPageTemplate dataKey="riffs-funk" />;
}
