"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
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
        <Header title="Chord Not Found" subtitle={`Could not find chord data for "${displayName}"`} />
        <main className="max-w-6xl mx-auto px-4 py-8 text-center">
          <p className="text-gray-600 mb-4">The requested chord type could not be loaded.</p>
          <Link href="/lessons/theory/chords" className="text-blue-600 hover:text-blue-800">
            Back to Chord Theory
          </Link>
        </main>
      </Layout>
    );
  }

  const colorScheme = getColorScheme(chordData.chordInfo.colorScheme);
  const nav = getSequentialNav('chord', chordSlug);

  return (
    <Layout>
      <Header title={chordData.chordInfo.pageTitle} subtitle={chordData.chordInfo.subtitle} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs pathname={`/lessons/theory/chords/${chordSlug}`} pageTitle={chordData.chordInfo.name} />

        {/* Hero Section */}
        <div className={`${colorScheme.heroBg} text-white rounded-xl p-8 mb-12`}>
          <h1 className="text-3xl font-bold mb-4">{chordData.chordInfo.name}</h1>
          <p className="text-xl opacity-90 mb-4">{chordData.chordInfo.subtitle}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            {chordData.chordInfo.tags.map((tag, i) => (
              <span key={i} className="bg-white/20 px-3 py-1 rounded">{tag}</span>
            ))}
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
    </Layout>
  );
}
