import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('chords-modal-interchange');

export default function ModalInterchangeChordsPage() {
  return <SongLessonDetailPageTemplate dataKey="chords-modal-interchange" />;
}
