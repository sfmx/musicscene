import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('riffs-classic-rock');

export default function ClassicRockRiffsPage() {
  return <SongLessonDetailPageTemplate dataKey="riffs-classic-rock" />;
}
