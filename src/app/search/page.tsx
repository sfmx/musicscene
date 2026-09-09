import type { Metadata } from 'next';
import { Suspense } from 'react';
import SearchBrowsePage from '@/components/Search/SearchBrowsePage';

export const metadata: Metadata = {
  title: 'Search All Content | Music Scene',
  description: 'Search and filter guitar lessons, song analyses, theory guides, practice exercises, and gear reviews.',
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 text-slate-100" />}>
      <SearchBrowsePage />
    </Suspense>
  );
}
