"use client";

import React from 'react';
import Link from 'next/link';
import { getWhySongWorks } from '@/data/whySongsWork';
import TheoryContextBadges from './TheoryContextBadges';

interface WhyThisSongWorksSectionProps {
  songSlug: string;
  displayName: string;
}

export default function WhyThisSongWorksSection({
  songSlug,
  displayName,
}: WhyThisSongWorksSectionProps) {
  const secret = getWhySongWorks(songSlug);

  if (!secret) return null;

  const flattenedTheoryItems = [
    ...(secret.relatedTheory.scales || []).map(s => ({ ...s, type: 'scale' as const })),
    ...(secret.relatedTheory.modes || []).map(m => ({ ...m, type: 'mode' as const })),
    ...(secret.relatedTheory.chords || []).map(c => ({ ...c, type: 'chord' as const })),
    ...(secret.relatedTheory.progressions || []).map(p => ({ ...p, type: 'progression' as const })),
  ];

  return (
    <section id="why-it-works" className="mb-12 scroll-mt-20">
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-indigo-500/30 shadow-xl overflow-hidden relative">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header Badges */}
        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <span>💡</span> Harmonic Breakdown
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-indigo-200">
                {secret.categoryLabel}
              </span>
            </div>

            {secret.isCurated && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <span>⭐</span> Curated Harmonic Deep Dive
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Why &quot;{displayName}&quot; Works Harmonically
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
            Beyond standard guitar tabs and chord charts, discover the exact music theory mechanics, modal interchange, and voice leading choices that give {secret.artist}&apos;s classic its unforgettable emotional power.
          </p>

          {/* Core Harmonic Secret Callout */}
          <div className="bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent border-l-4 border-amber-400 p-5 rounded-r-xl mb-8">
            <div className="text-xs uppercase tracking-wider font-bold text-amber-300 mb-1">
              The Core Harmonic Secret
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              {secret.coreSecret}
            </h3>
            <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
              {secret.emotionalHook}
            </p>
          </div>

          {/* Chord Progression & Roman Numeral Visualizer */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-8 backdrop-blur-sm">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-indigo-300">
                Harmonic Progression (Roman Numerals)
              </h4>
              <span className="font-mono text-xs px-2.5 py-1 bg-indigo-500/30 text-indigo-200 rounded border border-indigo-400/30">
                {secret.romanProgression}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
              {secret.chords.map((chord, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center min-w-[56px] px-3 py-2 bg-slate-800/90 border border-indigo-400/30 rounded-lg shadow-sm"
                >
                  <span className="font-mono font-bold text-base text-white">{chord}</span>
                  <span className="text-[10px] text-indigo-300/70 font-mono">Step {idx + 1}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Step-by-Step Movement
              </h5>
              <ul className="space-y-2 text-sm text-slate-300">
                {secret.progressionExplanation.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1 flex-shrink-0">•</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Dual Column: Voice Leading & Fretboard Perspective */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Voice Leading */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🎼</span>
                <h4 className="text-base font-semibold text-white">Voice Leading & Counterpoint</h4>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-300">
                {secret.voiceLeadingInsights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1 flex-shrink-0">›</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guitar Perspective */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🎸</span>
                <h4 className="text-base font-semibold text-white">Fretboard Mechanics</h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {secret.guitarPerspective}
              </p>
              <div className="p-3 bg-indigo-900/40 rounded-lg border border-indigo-500/20">
                <div className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-1">
                  💡 Songwriter&apos;s Takeaway
                </div>
                <p className="text-xs text-indigo-100/90 leading-relaxed">
                  {secret.songwriterTakeaway}
                </p>
              </div>
            </div>
          </div>

          {/* Related Theory Context Links */}
          <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
            <div className="text-white">
              <TheoryContextBadges customItems={flattenedTheoryItems} />
            </div>
          </div>

          {/* Hub Cross Link Footer */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
            <Link
              href="/lessons/songs/why-songs-work/"
              className="inline-flex items-center gap-2 text-xs font-medium text-amber-300 hover:text-amber-200 transition-colors"
            >
              <span>← Browse All &quot;Why Famous Songs Work&quot; Breakdowns</span>
            </Link>
            <span className="text-xs text-slate-400">
              MusicScene Harmonic Curiosity Engine
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
