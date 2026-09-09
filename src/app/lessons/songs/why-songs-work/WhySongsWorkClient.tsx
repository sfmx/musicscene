"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLdScript from '@/components/JsonLdScript';
import {
  getAllCuratedHarmonicBreakdowns,
  HARMONIC_CATEGORIES,
  HarmonicCategory,
} from '@/data/whySongsWork';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function WhySongsWorkClient() {
  const [selectedCategory, setSelectedCategory] = useState<HarmonicCategory | 'all'>('all');
  const allBreakdowns = getAllCuratedHarmonicBreakdowns();

  const filtered = selectedCategory === 'all'
    ? allBreakdowns
    : allBreakdowns.filter(b => b.category === selectedCategory);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Why Famous Songs Work: Guitar Music Theory & Harmonic Breakdowns',
    description: 'Deep music theory analyses dissecting why legendary guitar songs sound so good. Modal mixture, voice leading, line clichés, and key modulations explained.',
    url: `${SITE_CONFIG.baseUrl}/lessons/songs/why-songs-work/`,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: allBreakdowns.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `${SITE_CONFIG.baseUrl}/lessons/songs/song-analysis/${b.slug}/#why-it-works`,
        name: `Why "${b.songTitle}" by ${b.artist} Works Harmonically`,
      })),
    },
  };

  return (
    <>
      <JsonLdScript data={jsonLd} />

      <main className="max-w-6xl mx-auto px-4 py-10">
        <Breadcrumbs
          pathname="/lessons/songs/why-songs-work"
          pageTitle="Why Songs Work"
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-8 sm:p-10 mb-12 shadow-xl border border-indigo-500/20">
          <div className="max-w-3xl">
            <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 inline-block">
              Harmonic Curiosity Engine
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Stop Guessing Chords. Understand Why They Move Us.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              Most guitar websites only show you where to place your fingers. We break down the hidden musical mechanics—from the Spanish Andalusian cadence in <em>Hotel California</em> to the Beatles&apos; descending chromatic line cliché in <em>While My Guitar Gently Weeps</em>.
            </p>
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-indigo-200">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> Modal Interchange & Borrowed Chords
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> Voice Leading & Line Clichés
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> Practical Songwriter Takeaways
              </span>
            </div>
          </div>
        </section>

        {/* Category Filter Pills */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <h2 className="text-lg font-bold text-gray-900">Filter by Harmonic Device:</h2>
            <span className="text-xs text-gray-500">Showing {filtered.length} breakdowns</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Concepts ({allBreakdowns.length})
            </button>
            {(Object.keys(HARMONIC_CATEGORIES) as HarmonicCategory[]).map(catKey => {
              const count = allBreakdowns.filter(b => b.category === catKey).length;
              if (count === 0) return null;
              return (
                <button
                  key={catKey}
                  onClick={() => setSelectedCategory(catKey)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === catKey
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {HARMONIC_CATEGORIES[catKey].label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Song Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filtered.map(secret => (
            <div
              key={secret.slug}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {secret.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    {secret.romanProgression}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-1">
                  {secret.songTitle}
                </h3>
                <p className="text-xs text-gray-500 font-medium mb-4">
                  by {secret.artist}
                </p>

                {/* Core Secret Box */}
                <div className="p-3.5 bg-amber-50/80 rounded-lg border border-amber-200/70 mb-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-1 flex items-center gap-1">
                    <span>💡</span> The Harmonic Secret
                  </div>
                  <p className="text-xs text-amber-950 font-medium line-clamp-3">
                    {secret.coreSecret}
                  </p>
                </div>

                {/* Chords Used */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {secret.chords.slice(0, 6).map((c, i) => (
                    <span key={i} className="text-xs font-mono px-2 py-0.5 bg-gray-100 text-gray-700 rounded">
                      {c}
                    </span>
                  ))}
                  {secret.chords.length > 6 && (
                    <span className="text-xs font-mono px-1.5 py-0.5 text-gray-400">
                      +{secret.chords.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">Full Analysis</span>
                <Link
                  href={`/lessons/songs/song-analysis/${secret.slug}/#why-it-works`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 group-hover:translate-x-0.5 transition-transform"
                >
                  Read Harmonic Secret →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Explainer Content for Google Indexation */}
        <section className="bg-gray-50 rounded-2xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Music Theory Unlocks Greater Guitar Musicianship
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">1. Memorize Songs in Seconds</h3>
              <p>
                When you see songs as Roman numerals (like I - bVII - IV) instead of arbitrary letter chords (D - C - G), your brain categorizes songs into repeatable archetypes, cutting learning time by 80%.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">2. Solo with Musical Purpose</h3>
              <p>
                Understanding borrowed chords tells you exactly when to switch scales. When an F# major chord appears in B minor, switching from natural minor to Harmonic Minor targets the A# leading tone for jaw-dropping phrasing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Steal Secrets for Songwriting</h3>
              <p>
                Every iconic song is a masterclass in harmonic emotional triggers. Steal the minor iv chord trick from <em>Black Hole Sun</em> or the anchored drone pedal from <em>Wonderwall</em> for your own compositions.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
