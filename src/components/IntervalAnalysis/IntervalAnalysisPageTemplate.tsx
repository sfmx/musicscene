"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
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
        <Header title="Interval Not Found" subtitle={`Could not find data for "${intervalSlug}"`} />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Interval Not Found</h1>
            <p className="text-gray-600 mb-8">The interval &quot;{displayName}&quot; could not be found.</p>
            <Link href="/lessons/theory/intervals" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <span className="mr-2">&larr;</span>
              Back to Interval Theory
            </Link>
          </div>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header title={data.intervalInfo.pageTitle} subtitle={data.intervalInfo.subtitle} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs pathname={`/lessons/theory/intervals/${intervalSlug}`} pageTitle={data.intervalInfo.name} />

        {/* Hero Section */}
        <div className={`${data.intervalInfo.heroGradient} text-white rounded-xl p-8 mb-12`}>
          <h1 className="text-3xl font-bold mb-4">{data.intervalInfo.name}</h1>
          <p className="text-xl opacity-90 mb-4">{data.intervalInfo.subtitle}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            {data.intervalInfo.tags.map((tag, i) => (
              <span key={i} className="bg-white/20 px-3 py-1 rounded">{tag}</span>
            ))}
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
    </Layout>
  );
}
