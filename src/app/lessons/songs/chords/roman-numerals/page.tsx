import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('chords-roman-numerals');

export default function RomanNumeralsChordsPage() {
  return <SongLessonDetailPageTemplate dataKey="chords-roman-numerals" />;
}
