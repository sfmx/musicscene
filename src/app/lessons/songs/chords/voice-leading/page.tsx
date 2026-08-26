import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('chords-voice-leading');

export default function VoiceLeadingChordsPage() {
  return <SongLessonDetailPageTemplate dataKey="chords-voice-leading" />;
}
