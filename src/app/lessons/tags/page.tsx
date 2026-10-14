import type { Metadata } from 'next';
import TagIndexPage from '@/components/TagBrowse/TagIndexPage';

export const metadata: Metadata = {
  title: 'Browse Guitar Lessons by Topic',
  description: 'Browse every MusicScene guitar lesson, song analysis, and theory guide by topic tag.',
  robots: { index: false, follow: true },
};

export default function Page() {
  return <TagIndexPage />;
}
