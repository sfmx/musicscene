import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('riffs-blues');

export default function BluesRiffsPage() {
  return <SongLessonDetailPageTemplate dataKey="riffs-blues" />;
}
