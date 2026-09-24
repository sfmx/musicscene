'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import EarTrainer from '@/components/Tools/EarTrainer/EarTrainer';
import LeadMagnetBanner from '@/components/Revenue/LeadMagnetBanner';
import AdSlot from '@/components/Revenue/AdSlot';

export default function EarTrainerClient() {
  const pathname = '/lessons/practice/ear-trainer';

  return (
    <Layout>
      <Header
        title="Interactive Ear Training & Pitch Quizzer"
        subtitle="Train your musical ear with real-time WebAudio synthesis. Master interval recognition using famous song mnemonics, identify chord qualities, track your streak, and unlock the ability to play by ear."
        category="Real-Time Audio Trainer"
      />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumbs Navigation */}
          <Breadcrumbs pathname={pathname} pageTitle="Interactive Ear Training Quizzer" />



          {/* Main Interactive Tool Container */}
          <EarTrainer />

          {/* Ad Slot (Zero CLS) */}
          <div className="my-8">
            <AdSlot slotId="practice-tool-eartrainer-mid" format="banner" />
          </div>

          {/* Educational Ear Training Guide */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-3xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <div className="space-y-2">
              <span className="text-2xl">🧠</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Relative Pitch Can Be Learned
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                You don&apos;t need "perfect pitch" to play what you hear in your head. Relative pitch is a learnable skill that maps the distance between two notes directly to recognizable sensations.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-2xl">🎵</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Song Mnemonics Work Instantly
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Instead of guessing semitones, anchor each interval to an iconic opening motif: <em>Jaws</em> for minor 2nd, <em>Smoke on the Water</em> for minor 3rd, and <em>Star Wars</em> for perfect 5th.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-2xl">⚡</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                5 Minutes Daily Routine
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Ear training is a reflex. Consistent 5-minute sessions build stronger neural pathways than marathon once-a-month drills. Aim for a 10-question daily streak.
              </p>
            </div>
          </div>

          {/* Lead Magnet */}
          <LeadMagnetBanner />

          {/* Related Tools */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Ready to map these intervals directly to the guitar fretboard?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Explore the Theory Hub interval guide or the Fretboard Trainer.
              </p>
            </div>
            <Link
              href="/lessons/theory/intervals"
              className="py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition whitespace-nowrap"
            >
              Interval Theory Hub →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

