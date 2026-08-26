import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('riffs-pop');

export default function PopRiffsPage() {
  return <SongLessonDetailPageTemplate dataKey="riffs-pop" />;
}
