import type { Metadata } from 'next';
import SongsRootIndexPageTemplate from '@/components/SongLessons/SongsRootIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Song Lessons for Guitar',
  description: 'Learn guitar through songs. Breakdowns, chord progressions, riffs, lead techniques, rhythm patterns, and song structure analysis.',
};

export default function SongLessonsPage() {
  return <SongsRootIndexPageTemplate />;
}
