'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CagedVisualizer from '@/components/Tools/CagedVisualizer/CagedVisualizer';
import LeadMagnetBanner from '@/components/Revenue/LeadMagnetBanner';
import AdSlot from '@/components/Revenue/AdSlot';

export default function CagedSystemClient() {
  const pathname = '/lessons/practice/caged-system';

  return (
    <Layout>
      <Header
        title="Interactive CAGED System Visualizer"
        subtitle="Connect open chord grips (C, A, G, E, D) to movable scale patterns and triad inversions across the entire guitar neck. Strum chord shapes, arpeggiate notes, and unlock complete fretboard freedom."
        category="Guitar Neck Mastery Tool"
      />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumbs Navigation */}
          <Breadcrumbs pathname={pathname} pageTitle="Interactive CAGED System Visualizer" />



          {/* Main Interactive Tool Container */}
          <CagedVisualizer />

          {/* Ad Slot (Zero CLS) */}
          <div className="my-8">
            <AdSlot slotId="practice-tool-caged-mid" format="banner" />
          </div>

          {/* Educational CAGED Guide Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-3xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <div className="space-y-2">
              <span className="text-2xl">🔗</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                The 5 Interlocking Shapes
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                The letters C-A-G-E-D spell out the exact order that chord shapes appear as you move up the neck for any key. Once you hit the D shape, the sequence loops back to the C shape an octave higher.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-2xl">⚡</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Chord-to-Scale Bridge
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Every CAGED shape directly overlays one of the 5 Major Pentatonic boxes. If you can see the chord shape under your fingers, you will never get lost while improvising solos.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-2xl">🎵</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Triads Cut Through the Mix
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Don&apos;t just play full 6-string barre chords. Isolating the top 3 strings of each CAGED form gives you nimble 3-note triads (Root Position, 1st & 2nd Inversions) ideal for funk, R&B, and rock fills.
              </p>
            </div>
          </div>

          {/* Lead Magnet */}
          <LeadMagnetBanner />

          {/* Related Tools */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Need to memorize note names on every string first?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Train note hunting reflexes with our gamified Fretboard Trainer.
              </p>
            </div>
            <Link
              href="/lessons/practice/fretboard-trainer"
              className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition whitespace-nowrap"
            >
              Fretboard Trainer →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

