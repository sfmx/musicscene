import type { Metadata } from 'next';
import PracticeIndexPageTemplate from '@/components/PracticeAnalysis/PracticeIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Guitar Warmup Exercises',
  description: 'Essential guitar warmup exercises. Chord changes, finger exercises, picking patterns, rhythm drills, scales, and stretching.',
};

export default function WarmupsPage() {
  return <PracticeIndexPageTemplate category="warmups" />;
}
