import type { Metadata } from 'next';
import SongLessonIndexPageTemplate from '@/components/SongLessons/SongLessonIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Rhythm Guitar in Songs',
  description: 'Master rhythm guitar patterns from songs. Strumming, fingerpicking, palm muting, syncopation, and genre-specific styles.',
};

export default function RhythmIndexPage() {
  return <SongLessonIndexPageTemplate category="rhythm" />;
}
