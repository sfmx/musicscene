"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header, { HeaderBadge } from '@/components/Header';
import { getIntervalData, IntervalData } from '@/lib/intervalData';
import IntervalTheorySection from './IntervalTheorySection';
import IntervalGuitarSection from './IntervalGuitarSection';
import IntervalExamplesSection from './IntervalExamplesSection';
import IntervalPracticeSection from './IntervalPracticeSection';
import IntervalTheoryContextSection from './IntervalTheoryContextSection';
import IntervalRelatedSection from './IntervalRelatedSection';
import IntervalNavigationSection from './IntervalNavigationSection';
import RelatedContentSection from '@/components/RelatedContent/RelatedContentSection';
import AdSlot from '@/components/Revenue/AdSlot';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import SequentialNav from '@/components/SequentialNav';
import { getSequentialNav } from '@/lib/sequentialNav';

interface IntervalAnalysisPageTemplateProps {
  intervalSlug: string;
  displayName: string;
}

export default function IntervalAnalysisPageTemplate({ intervalSlug, displayName }: IntervalAnalysisPageTemplateProps) {
  const data: IntervalData | null = getIntervalData(intervalSlug);
  const nav = getSequentialNav('interval', intervalSlug);

  if (!data) {
    return (
      <Layout>
        <Header
          title="Interval Not Found"
          subtitle={`Could not find data for "${intervalSlug}"`}
          category="🎼 Interval Theory"
        />
        <div className="bg-slate-950 min-h-screen text-slate-100 pb-20">
          <main className="max-w-6xl mx-auto px-4 py-16 text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Interval Not Found</h1>
            <p className="text-slate-400 mb-8">The interval &quot;{displayName}&quot; could not be found.</p>
            <Link
              href="/lessons/theory/intervals"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
            >
              <span className="mr-2">&larr;</span>
              Back to Interval Theory
            </Link>
          </main>
        </div>
      </Layout>
    );
  }

  const badges: HeaderBadge[] = data.intervalInfo.tags.map((tag, i) => ({
    label: tag,
    color: i === 0 ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' : i === 1 ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' : 'bg-purple-500/20 text-purple-300 border-purple-500/30'
  }));

  return (
    <Layout>
      <Header
        title={data.intervalInfo.pageTitle}
        subtitle={data.intervalInfo.subtitle}
        category="🎼 Interval Theory &amp; Ear Training"
        badges={badges}
      />
      <div className="bg-slate-950 min-h-screen text-slate-100 pb-20">
        <main className="max-w-6xl mx-auto px-4 py-8">
          <Breadcrumbs pathname={`/lessons/theory/intervals/${intervalSlug}`} pageTitle={data.intervalInfo.name} />

          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 p-8 mb-12 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
                <span>🎼</span> Musical Interval &amp; Fretboard Distance
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                {data.intervalInfo.name}
              </h1>
              <p className="text-lg text-slate-300 mb-6 max-w-3xl leading-relaxed">
                {data.intervalInfo.subtitle}
              </p>
              <div className="flex flex-wrap gap-2.5 text-xs font-medium">
                {data.intervalInfo.tags.map((tag, i) => (
                  <span key={i} className="bg-slate-950/80 border border-slate-800 text-cyan-300 px-3 py-1.5 rounded-lg font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <IntervalTheorySection theory={data.theory} colorScheme={data.intervalInfo.colorScheme} />
          <IntervalGuitarSection guitarApplications={data.guitarApplications} />
          <IntervalExamplesSection musicalExamples={data.musicalExamples} />
          <IntervalPracticeSection exercises={data.practiceExercises} />
          <IntervalTheoryContextSection context={data.theoreticalContext} />
          <IntervalRelatedSection intervals={data.relatedIntervals} />
          <AdSlot slotId="content-bottom" format="banner" />

          <RelatedContentSection contentId={`interval:${intervalSlug}`} />
          <IntervalNavigationSection journeySection={data.journeySection} />
          <SequentialNav nav={nav} typeLabel="Interval" />
        </main>
      </div>
    </Layout>
  );
}
