import type { Metadata } from 'next';
import SongLessonIndexPageTemplate from '@/components/SongLessons/SongLessonIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Song Section Breakdowns',
  description: 'Learn to break down song sections on guitar. Verse, chorus, bridge, intro, outro, solo, and full song analysis.',
};

export default function BreakdownsIndexPage() {
  return <SongLessonIndexPageTemplate category="breakdowns" />;
}
