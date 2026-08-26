import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('riffs-jazz');

export default function JazzRiffsPage() {
  return <SongLessonDetailPageTemplate dataKey="riffs-jazz" />;
}
