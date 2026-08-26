import type { Metadata } from 'next';
import CategoryRootPageTemplate from '@/components/CategoryRoot/CategoryRootPageTemplate';

export const metadata: Metadata = {
  title: 'Music Theory for Guitar',
  description: 'Learn essential music theory concepts for guitar including scales, chords, intervals, modes, and progressions.',
};

export default function TheoryLessonsPage() {
  return <CategoryRootPageTemplate category="theory" />;
}
