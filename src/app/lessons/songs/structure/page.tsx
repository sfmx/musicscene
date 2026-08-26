import type { Metadata } from 'next';
import SongLessonIndexPageTemplate from '@/components/SongLessons/SongLessonIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Song Structure for Guitar',
  description: 'Understand song structure on guitar. Verse, chorus, bridge, intro, outro, pre-chorus, forms, and transitions.',
};

export default function StructureIndexPage() {
  return <SongLessonIndexPageTemplate category="structure" />;
}
