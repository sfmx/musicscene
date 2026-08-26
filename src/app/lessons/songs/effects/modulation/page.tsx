import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('effects-modulation');

export default function ModulationEffectsPage() {
  return <SongLessonDetailPageTemplate dataKey="effects-modulation" />;
}
