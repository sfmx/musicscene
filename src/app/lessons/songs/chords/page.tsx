import type { Metadata } from 'next';
import SongLessonIndexPageTemplate from '@/components/SongLessons/SongLessonIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Song Chords & Harmony',
  description: 'Understand chord usage in songs. Progressions, roman numerals, voice leading, substitutions, and modal interchange.',
};

export default function ChordsIndexPage() {
  return <SongLessonIndexPageTemplate category="chords" />;
}
