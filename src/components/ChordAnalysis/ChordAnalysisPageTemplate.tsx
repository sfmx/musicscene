"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header, { HeaderBadge } from '@/components/Header';
import { getChordData, ChordData } from '@/lib/chordData';
import { getColorScheme } from '@/utils/theme';
import ChordTheorySection from './ChordTheorySection';
import ChordConstructionSection from './ChordConstructionSection';
import ChordVoicingsSection from './ChordVoicingsSection';
import ChordProgressionsSection from './ChordProgressionsSection';
import ChordFamousSongsSection from './ChordFamousSongsSection';
import ChordPracticeSection from './ChordPracticeSection';
import ChordAdvancedSection from './ChordAdvancedSection';
import ChordNavigationSection from './ChordNavigationSection';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedContentSection from '@/components/RelatedContent/RelatedContentSection';
import AdSlot from '@/components/Revenue/AdSlot';
import GearRecommendations from '@/components/Revenue/GearRecommendations';
import SongsUsingThis from '@/components/CrossReferences/SongsUsingThis';
import SequentialNav from '@/components/SequentialNav';
import { getSequentialNav } from '@/lib/sequentialNav';

interface ChordAnalysisPageTemplateProps {
  chordSlug: string;
  displayName: string;
}

export default function ChordAnalysisPageTemplate({ chordSlug, displayName }: ChordAnalysisPageTemplateProps) {
  const chordData: ChordData | null = getChordData(chordSlug);

  if (!chordData) {
    return (
      <Layout>
        <Header
          title="Chord Not Found"
          subtitle={`Could not find chord data for "${displayName}"`}
          category="🎼 Music Theory &amp; Chords"
        />
        <div className="bg-slate-950 min-h-screen text-slate-100 pb-20">
          <main className="max-w-6xl mx-auto px-4 py-16 text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Chord Not Found</h1>
            <p className="text-slate-400 mb-6">The requested chord type could not be loaded.</p>
            <Link
              href="/lessons/theory/chords"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
            >
              <span className="mr-2">&larr;</span> Back to Chord Theory
            </Link>
          </main>
        </div>
      </Layout>
    );
  }

  const colorScheme = getColorScheme(chordData.chordInfo.colorScheme);
  const nav = getSequentialNav('chord', chordSlug);

  const badges: HeaderBadge[] = chordData.chordInfo.tags.map((tag, i) => ({
    label: tag,
    color: i === 0 ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' : i === 1 ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' : 'bg-purple-500/20 text-purple-300 border-purple-500/30'
  }));

  return (
    <Layout>
      <Header
        title={chordData.chordInfo.pageTitle}
        subtitle={chordData.chordInfo.subtitle}
        category="🎼 Music Theory &amp; Chords"
        badges={badges}
      />
      <div className="bg-slate-950 min-h-screen text-slate-100 pb-20">
        <main className="max-w-6xl mx-auto px-4 py-8">
          <Breadcrumbs pathname={`/lessons/theory/chords/${chordSlug}`} pageTitle={chordData.chordInfo.name} />

          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 p-8 mb-12 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
                <span>🎼</span> Chord Construction &amp; Voicings
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                {chordData.chordInfo.name}
              </h1>
              <p className="text-lg text-slate-300 mb-6 max-w-3xl leading-relaxed">
                {chordData.chordInfo.subtitle}
              </p>
              <div className="flex flex-wrap gap-2.5 text-xs font-medium">
                {chordData.chordInfo.tags.map((tag, i) => (
                  <span key={i} className="bg-slate-950/80 border border-slate-800 text-cyan-300 px-3 py-1.5 rounded-lg font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <ChordTheorySection theory={chordData.theory} colorScheme={colorScheme} />
          <ChordConstructionSection construction={chordData.construction} colorScheme={colorScheme} />
          <ChordVoicingsSection voicingGroups={chordData.voicingGroups} />
          <ChordProgressionsSection progressions={chordData.progressions} colorScheme={colorScheme} />
          <ChordFamousSongsSection famousSongs={chordData.famousSongs} />
          <ChordPracticeSection practiceExercises={chordData.practiceExercises} />
          <ChordAdvancedSection advancedConcepts={chordData.advancedConcepts} />

          {chordData.gearRecommendations && chordData.gearRecommendations.items.length > 0 && (
            <GearRecommendations
              title={chordData.gearRecommendations.title}
              items={chordData.gearRecommendations.items}
            />
          )}

          <SongsUsingThis type="chord" slug={chordSlug} />
          <AdSlot slotId="content-bottom" format="banner" />

          <RelatedContentSection contentId={`chord:${chordSlug}`} />
          <ChordNavigationSection journeySection={chordData.journeySection} colorScheme={colorScheme} />
          <SequentialNav nav={nav} typeLabel="Chord" />
        </main>
      </div>
    </Layout>
  );
}
