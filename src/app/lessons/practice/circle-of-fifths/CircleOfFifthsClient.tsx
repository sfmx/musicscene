'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import CircleOfFifthsExplorer from '@/components/Tools/CircleOfFifths/CircleOfFifthsExplorer';
import LeadMagnetBanner from '@/components/Revenue/LeadMagnetBanner';
import AdSlot from '@/components/Revenue/AdSlot';

export default function CircleOfFifthsClient() {
  const pathname = '/lessons/practice/circle-of-fifths';

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumbs Navigation */}
          <Breadcrumbs pathname={pathname} pageTitle="Interactive Circle of Fifths Explorer" />

          {/* Hero Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
              ⚡ Interactive Harmonic Studio
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Interactive Circle of Fifths Explorer
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Explore key signatures, audition playable diatonic chords in real time, map seamless key modulation paths, and uncover modal interchange borrowed chords used in iconic rock songs.
            </p>
          </div>

          {/* Main Interactive Tool Container */}
          <CircleOfFifthsExplorer />

          {/* Ad Slot (Zero CLS) */}
          <div className="my-8">
            <AdSlot slotId="practice-tool-circle-mid" format="banner" />
          </div>

          {/* Educational Theory Guide Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-3xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <div className="space-y-2">
              <span className="text-2xl">🔄</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Clockwise vs Counter-Clockwise
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Moving clockwise adds one sharp (or subtracts one flat), shifting to the Dominant key (V). Moving counter-clockwise adds one flat, shifting to the Subdominant key (IV).
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-2xl">🎭</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Relative Minor Magic
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Every major key shares its exact notes and key signature with its relative minor, located three semitones down on the inner ring.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-2xl">🎸</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Songwriting Cadences
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Notice how the most famous chord progressions in popular music (I - IV - V, I - vi - IV - V, ii - V - I) form tight triangular clusters directly on the wheel.
              </p>
            </div>
          </div>

          {/* Lead Magnet */}
          <LeadMagnetBanner />

          {/* Related Tools & Lessons */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Want to drill chord progressions with synthesized backing tracks?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Check out the Chord Progression Jam Player or the CAGED System Visualizer.
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                href="/lessons/practice/progression-player"
                className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-bold transition"
              >
                Jam Player →
              </Link>
              <Link
                href="/lessons/practice/caged-system"
                className="py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black transition"
              >
                CAGED Visualizer →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

