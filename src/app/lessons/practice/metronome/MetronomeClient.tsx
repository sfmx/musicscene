'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import MetronomeTrainer from '@/components/Tools/Metronome/MetronomeTrainer';
import GearRecommendations from '@/components/Revenue/GearRecommendations';
import AdSlot from '@/components/Revenue/AdSlot';

const metronomeGearItems = [
  {
    category: 'Accessory',
    product: 'Korg TM-60 Combo Tuner & Metronome',
    reason: 'The legendary portable benchtop unit featuring high-precision needle meter, loud click tone, and standalone audio headphone output.',
  },
  {
    category: 'Accessory',
    product: 'Boss DB-90 Dr. Beat Metronome',
    reason: 'The ultimate professional practice metronome with MIDI sync, acoustic drum sounds, rhythm coach features, and customizable faders.',
  },
  {
    category: 'Recording',
    product: 'Audio-Technica ATH-M50x Professional Monitor Headphones',
    reason: 'Exceptional sonic isolation and transient response allowing you to hear metronome subdivisions cleanly over loud guitar amplifiers.',
  },
];

export default function MetronomeClient() {
  const pathname = '/lessons/practice/metronome';

  return (
    <Layout>
      <Header
        title="Interactive Metronome & Speed Trainer"
        subtitle="Master timing, build blisteringly clean picking speed, and conquer complex subdivisions with our Web Audio metronome and automated speed-accelerating ladder."
        category="Interactive Guitar Practice Utility"
      />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 transition-colors text-slate-900 dark:text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumbs Navigation */}
          <Breadcrumbs pathname={pathname} pageTitle="Metronome & Speed Trainer" />

          {/* Interactive Metronome Tool */}
          <div className="shadow-2xl rounded-3xl">
            <MetronomeTrainer />
          </div>

          {/* AdSense Placement */}
          <div className="my-8">
            <AdSlot slotId="practice-tool-metronome-mid" format="banner" />
          </div>

          {/* Educational Practice Guide */}
          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-8 transition-colors">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
              <span className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
                PRACTICE METHODOLOGY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                How to Build Real Speed: The Science of Metronome Practice
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                Most guitarists hit a speed wall because they practice at the edge of their tempo limit with muscle tension. 
                Speed on guitar is not about trying harder—it is a byproduct of efficient, relaxed physical mechanics and sub-conscious timing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 dark:bg-slate-950/70 p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="text-2xl font-bold text-amber-500">01</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  The 3-Repetition Rule
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Never increase the tempo until you can execute an exercise cleanly <strong>three consecutive times</strong> with zero tension in your fretting hand, picking forearm, and shoulders.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950/70 p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="text-2xl font-bold text-cyan-500">02</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Subdivision Awareness
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Toggle between <strong>Quarter notes</strong>, <strong>8ths</strong>, and <strong>16ths</strong>. Feeling the space between clicks develops internal pocket and prevents the fatal habit of rushing the beat.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950/70 p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="text-2xl font-bold text-emerald-500">03</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Automated Speed Ladder
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Turn on <strong>Speed Trainer Mode</strong>. By ramping up +2 to +5 BPM every 4 to 8 bars, your neural motor pathways adapt smoothly without triggering panic tension.
                </p>
              </div>
            </div>

            {/* Practical Exercises to Run */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-950 dark:to-slate-900 p-6 sm:p-8 rounded-xl border border-amber-200 dark:border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                4 High-Impact Daily Metronome Routines
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="bg-white dark:bg-slate-900/80 p-4 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">🕷️ 1. Chromatic Permutations (60–90 BPM)</div>
                  <div className="text-slate-600 dark:text-slate-300">
                    Play 1-2-3-4, 1-3-2-4, and 1-4-2-3 across all 6 strings in 16th notes. Keep fingers hovering millimeters above frets.
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900/80 p-4 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">🎸 2. Major Scale CAGED Positions (80–120 BPM)</div>
                  <div className="text-slate-600 dark:text-slate-300">
                    Ascend and descend 2 octaves in 8th-note triplets. Sync strictly with the downbeat click.
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900/80 p-4 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">🥁 3. 16th-Note Funk Strumming (90–110 BPM)</div>
                  <div className="text-slate-600 dark:text-slate-300">
                    Keep your picking hand moving continuously in 16th notes (down-up-down-up) while muting chords on offbeats.
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900/80 p-4 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">⚡ 4. Speed Ladder Sprint (100 ➔ 150 BPM)</div>
                  <div className="text-slate-600 dark:text-slate-300">
                    Set Speed Trainer to +5 BPM every 4 bars. Practice short 4-note or 6-note pentatonic sequences until target tempo.
                  </div>
                </div>
              </div>
            </div>

            {/* Related Tools Navigation Links */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">Related Interactive Tools:</span>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/lessons/practice/progression-player"
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100"
                >
                  Chord Progression Jam Player &rarr;
                </Link>
                <Link
                  href="/lessons/practice/fretboard-trainer"
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100"
                >
                  Fretboard Note Hunt &rarr;
                </Link>
                <Link
                  href="/lessons/practice/technique/alternate-picking"
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 hover:bg-purple-100"
                >
                  Alternate Picking Guide &rarr;
                </Link>
              </div>
            </div>
          </section>

          {/* Gear Recommendations */}
          <GearRecommendations
            title="Recommended Metronomes & Timing Gear"
            items={metronomeGearItems}
          />
        </div>
      </div>
    </Layout>
  );
}
