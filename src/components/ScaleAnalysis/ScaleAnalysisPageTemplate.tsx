"use client";

import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import Header, { HeaderBadge } from '@/components/Header';
import { getScaleData, ScaleData } from '@/lib/scaleData';
import ScaleInfoSection from './ScaleInfoSection';
import ScaleTheorySection from './ScaleTheorySection';
import ScaleFretboardSection from './ScaleFretboardSection';
import ScaleHarmonicSection from './ScaleHarmonicSection';
import ScaleGenreSection from './ScaleGenreSection';
import ScaleSongsSection from './ScaleSongsSection';
import ScalePracticeSection from './ScalePracticeSection';
import ScaleRelatedSection from './ScaleRelatedSection';
import ScaleLearningPathSection from './ScaleLearningPathSection';
import RelatedContentSection from '@/components/RelatedContent/RelatedContentSection';
import AdSlot from '@/components/Revenue/AdSlot';
import GearRecommendations from '@/components/Revenue/GearRecommendations';
import SongsUsingThis from '@/components/CrossReferences/SongsUsingThis';
import LeadMagnetBanner from '@/components/Revenue/LeadMagnetBanner';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import SequentialNav from '@/components/SequentialNav';
import { getSequentialNav } from '@/lib/sequentialNav';

interface ScaleAnalysisPageTemplateProps {
  scaleSlug: string;
  displayName?: string;
}

export default function ScaleAnalysisPageTemplate({ 
  scaleSlug, 
  displayName 
}: ScaleAnalysisPageTemplateProps) {
  const [scaleData, setScaleData] = useState<ScaleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadScaleData() {
      try {
        setLoading(true);
        setError(null);
        const data = await getScaleData(scaleSlug);
        if (!data) {
          setError(`Could not find scale data for "${scaleSlug}"`);
        } else {
          setScaleData(data);
        }
      } catch (err) {
        setError(`Error loading scale data: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    }

    loadScaleData();
  }, [scaleSlug]);

  if (loading) {
    return (
      <Layout>
        <Header
          title="Loading Scale..."
          subtitle="Please wait while we load the scale data"
          category="🎼 Scale Theory"
        />
        <div className="bg-slate-950 min-h-screen text-slate-100 py-16">
          <main className="max-w-6xl mx-auto px-4 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
            <h1 className="text-2xl font-bold text-white mb-2">Loading Scale Data</h1>
            <p className="text-slate-400">
              Loading {displayName || scaleSlug} scale information...
            </p>
          </main>
        </div>
      </Layout>
    );
  }

  if (error || !scaleData) {
    return (
      <Layout>
        <Header
          title="Scale Not Found"
          subtitle={error || `Could not find scale data for "${scaleSlug}"`}
          category="🎼 Scale Theory"
        />
        <div className="bg-slate-950 min-h-screen text-slate-100 py-16">
          <main className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Scale Not Found</h1>
            <p className="text-slate-400 mb-8">
              {error || `The scale "${scaleSlug}" could not be found in our database.`}
            </p>
            <Link 
              href="/lessons/theory/scales" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
            >
              <span className="mr-2">←</span>
              Back to Scale Theory
            </Link>
          </main>
        </div>
      </Layout>
    );
  }

  const title = displayName || scaleData.scaleInfo.name;
  const subtitle = `${scaleData.scaleInfo.character} - ${scaleData.scaleInfo.intervalPattern} pattern`;
  const nav = getSequentialNav('scale', scaleSlug);

  const badges: HeaderBadge[] = [
    { label: 'Type', value: scaleData.scaleInfo.scaleType },
    { label: 'Notes', value: `${scaleData.scaleInfo.noteCount} Notes` },
    { label: 'Character', value: scaleData.scaleInfo.character }
  ];

  return (
    <Layout>
      <Header
        title={title}
        subtitle={subtitle}
        category="🎼 Guitar Scale Master Suite"
        badges={badges}
      />
      
      <div className="bg-slate-950 min-h-screen text-slate-100 pb-20">
        <main className="max-w-6xl mx-auto px-4 py-8">
          <Breadcrumbs pathname={`/lessons/theory/scales/${scaleSlug}`} pageTitle={scaleData.scaleInfo.name} />

          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 p-8 mb-12 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
                <span>🎼</span> Scale Formula &amp; Interval Structure
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                {scaleData.scaleInfo.name}
              </h1>
              <p className="text-lg text-slate-300 mb-6 max-w-3xl leading-relaxed">
                {scaleData.scaleInfo.character} scale with {scaleData.scaleInfo.noteCount} notes. 
                Creates {scaleData.scaleInfo.mood.join(', ')} musical expressions.
              </p>
              <div className="flex flex-wrap gap-2.5 text-xs font-medium">
                <span className="bg-slate-950/80 border border-slate-800 text-cyan-300 px-3 py-1.5 rounded-lg font-mono">
                  {scaleData.scaleInfo.intervalPattern}
                </span>
                <span className="bg-slate-950/80 border border-slate-800 text-amber-300 px-3 py-1.5 rounded-lg font-mono">
                  {scaleData.scaleInfo.noteCount} Notes
                </span>
                <span className="bg-slate-950/80 border border-slate-800 text-purple-300 px-3 py-1.5 rounded-lg">
                  {scaleData.scaleInfo.character}
                </span>
                {scaleData.theory.mode && (
                  <span className="bg-slate-950/80 border border-slate-800 text-emerald-300 px-3 py-1.5 rounded-lg">
                    {scaleData.theory.mode}
                  </span>
                )}
              </div>
            </div>
          </div>

          <ScaleInfoSection scaleData={scaleData} />
          <ScaleTheorySection scaleData={scaleData} />
          <ScaleFretboardSection scaleData={scaleData} />
          <LeadMagnetBanner />
          <ScaleHarmonicSection scaleData={scaleData} />
          <ScaleGenreSection scaleData={scaleData} />
          <ScaleSongsSection scaleData={scaleData} />
          <ScalePracticeSection scaleData={scaleData} />
          <ScaleRelatedSection scaleData={scaleData} />

          {scaleData.gearRecommendations && scaleData.gearRecommendations.items.length > 0 && (
            <GearRecommendations
              title={scaleData.gearRecommendations.title}
              items={scaleData.gearRecommendations.items}
            />
          )}

          <SongsUsingThis type="scale" slug={scaleSlug} />
          <AdSlot slotId="content-bottom" format="banner" />
          <RelatedContentSection contentId={`scale:${scaleSlug}`} />
          <ScaleLearningPathSection scaleData={scaleData} />
          <SequentialNav nav={nav} typeLabel="Scale" />
        </main>
      </div>
    </Layout>
  );
}
