"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLdScript from '@/components/JsonLdScript';
import {
  HARMONIC_CATEGORIES,
  type HarmonicCategory,
  type HarmonicSecret,
} from '@/data/harmonicCategories';
import { SITE_CONFIG } from '@/lib/siteConfig';

interface WhySongsWorkClientProps {
  allBreakdowns: HarmonicSecret[];
}

export default function WhySongsWorkClient({ allBreakdowns }: WhySongsWorkClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<HarmonicCategory | 'all'>('all');

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

      <main className="max-w-6xl mx-auto px-4 py-10 text-slate-900 dark:text-slate-100">
        <Breadcrumbs
          pathname="/lessons/songs/why-songs-work"
          pageTitle="Why Songs Work"
        />

        {/* Hero Section */}
        <section className="bg-slate-900/95 dark:bg-slate-950 text-white rounded-3xl p-8 sm:p-10 mb-12 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <span className="px-3 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 inline-block">
              Harmonic Curiosity Engine
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Stop Guessing Chords. Understand Why They Move Us.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              Most guitar websites only show you where to place your fingers. We break down the hidden musical mechanics—from the Spanish Andalusian cadence in <em>Hotel California</em> to Led Zeppelin&apos;s descending chromatic line cliché in <em>Stairway to Heaven</em>.
            </p>
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
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
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Filter by Harmonic Device:</h2>
            <span className="text-xs text-slate-500 dark:text-slate-400">Showing {filtered.length} breakdowns</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60'
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
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === catKey
                      ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60'
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
              className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg dark:hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                      {secret.categoryLabel}
                    </span>
                    {secret.isCurated && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-amber-100/80 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-300/60 dark:border-amber-500/30">
                        ⭐ Deep Dive
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                    {secret.romanProgression}
                  </span>
                </div>

                <Link href={`/lessons/songs/song-analysis/${secret.slug}/`} className="block group/title">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover/title:text-amber-600 dark:group-hover/title:text-amber-400 transition-colors mb-1">
                    {secret.songTitle}
                  </h3>
                </Link>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-4">
                  by {secret.artist}
                </p>

                {/* Core Secret Box - Clickable jump directly to #why-it-works */}
                <Link
                  href={`/lessons/songs/song-analysis/${secret.slug}/#why-it-works`}
                  className="block p-3.5 bg-amber-50/80 dark:bg-amber-950/20 hover:bg-amber-100/70 dark:hover:bg-amber-950/40 rounded-xl border border-amber-200/70 dark:border-amber-500/30 transition-all mb-4 group/secret"
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-1 flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <span>💡</span> The Harmonic Secret
                    </span>
                    <span className="text-[10px] font-semibold text-amber-700 dark:text-amber-400 group-hover/secret:translate-x-0.5 transition-transform">
                      Jump to breakdown &rarr;
                    </span>
                  </div>
                  <p className="text-xs text-amber-950 dark:text-amber-200 font-medium line-clamp-3 leading-relaxed">
                    {secret.coreSecret}
                  </p>
                </Link>

                {/* Chords Used */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {secret.chords.slice(0, 6).map((c, i) => (
                    <span key={i} className="text-xs font-mono px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded border border-slate-200/60 dark:border-slate-700/60">
                      {c}
                    </span>
                  ))}
                  {secret.chords.length > 6 && (
                    <span className="text-xs font-mono px-1.5 py-0.5 text-slate-400 dark:text-slate-500">
                      +{secret.chords.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Card Actions: Working Links */}
              <div className="p-4 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <Link
                  href={`/lessons/songs/song-analysis/${secret.slug}/`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  <span>Full Song Tab</span>
                  <span>&rarr;</span>
                </Link>
                <Link
                  href={`/lessons/songs/song-analysis/${secret.slug}/#why-it-works`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read Harmonic Secret</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Explainer Content for Google Indexation */}
        <section className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            How Music Theory Unlocks Greater Guitar Musicianship
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">1. Memorize Songs in Seconds</h3>
              <p>
                When you see songs as Roman numerals (like I - bVII - IV) instead of arbitrary letter chords (D - C - G), your brain categorizes songs into repeatable archetypes, cutting learning time by 80%.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">2. Solo with Musical Purpose</h3>
              <p>
                Understanding borrowed chords tells you exactly when to switch scales. When an F# major chord appears in B minor, switching from natural minor to Harmonic Minor targets the A# leading tone for jaw-dropping phrasing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">3. Steal Secrets for Songwriting</h3>
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
