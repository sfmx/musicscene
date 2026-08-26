import type { Metadata } from 'next';
import SongLessonIndexPageTemplate from '@/components/SongLessons/SongLessonIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Guitar Effects in Songs',
  description: 'Learn how effects are used in famous songs. Distortion, delay, reverb, modulation, wah, compression, and signal chain.',
};

export default function EffectsIndexPage() {
  return <SongLessonIndexPageTemplate category="effects" />;
}
