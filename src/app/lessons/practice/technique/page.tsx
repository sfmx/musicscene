import type { Metadata } from 'next';
import PracticeIndexPageTemplate from '@/components/PracticeAnalysis/PracticeIndexPageTemplate';

export const metadata: Metadata = {
  title: 'Guitar Technique Exercises',
  description: 'Build guitar technique with focused exercises. Alternate picking, bending, hybrid picking, legato, sweep picking, and tapping.',
};

export default function TechniquePage() {
  return <PracticeIndexPageTemplate category="technique" />;
}
