'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import FretboardTrainer from '@/components/Tools/FretboardTrainer';
import GearRecommendations from '@/components/Revenue/GearRecommendations';
import AdSlot from '@/components/Revenue/AdSlot';

const practiceGearItems = [
  {
    category: 'Accessory',
    product: 'Snark ST-8 Super Tight Clip-on Tuner',
    reason: 'Rapid pitch detection and precise tuning calibration across all 6 strings for accurate fretboard training.',
  },
  {
    category: 'Metronome',
    product: 'Korg TM-60 Tuner and Metronome Combo',
    reason: 'Rock-solid acoustic metronome click essential for timing and rhythmic speed drills.',
  },
  {
    category: 'Accessory',
    product: 'Gruv Gear FretWraps String Muter',
    reason: 'Eliminates open string sympathetic resonance and overtones when practicing isolated scale and arpeggio runs.',
  },
];

export default function FretboardTrainerClient() {
  const pathname = '/lessons/practice/fretboard-trainer';

  return (
    <Layout>
      <Header
        title="Interactive Guitar Fretboard Trainer"
        subtitle="Visualize scales, master interval formulas, and train lightning-fast note recognition across all 6 strings with real audio tone feedback."
        category="Free Guitar Utility Tool"
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumbs Navigation */}
          <Breadcrumbs pathname={pathname} pageTitle="Interactive Fretboard Trainer" />

          {/* Interactive Tool Component */}
          <div className="shadow-2xl rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <FretboardTrainer />
          </div>

          {/* AdSense Placement */}
          <div className="my-8">
            <AdSlot slotId="practice-tool-fretboard-mid" format="banner" />
          </div>

          {/* Comprehensive Educational Guide */}
          <section className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm dark:shadow-xl space-y-8 transition-colors">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                How to Master and Memorize the Guitar Fretboard
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Many guitarists spend years trapped in isolated pentatonic box shapes without understanding the actual notes under their fingers. By understanding the geometric logic of the fretboard, you can unlock effortless improvisation, instant chord construction, and complete neck freedom.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Step 1 */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100/60 dark:from-slate-950 dark:to-slate-900/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 hover:border-amber-500/40 dark:hover:border-slate-700 transition-all">
                <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700/50 font-bold flex items-center justify-center text-base shadow-xs">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Anchor Your Bass Strings (Strings 6 & 5)
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  The 6th string (Low E) and 5th string (A) provide the root notes for 90% of all standard barre chords and movable scales. Learn the natural notes on these two strings first. Remember: between B-C and E-F there are no sharps/flats (only a half-step / 1 fret distance).
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100/60 dark:from-slate-950 dark:to-slate-900/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 hover:border-emerald-500/40 dark:hover:border-slate-700 transition-all">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/50 font-bold flex items-center justify-center text-base shadow-xs">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Harness Octave Shapes to Duplicate Notes
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Once you know notes on strings 6 and 5, you immediately know strings 4 and 3 through octave jumps! From the 6th or 5th string, move <strong>down two strings and up two frets</strong> to find the exact same note one octave higher.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100/60 dark:from-slate-950 dark:to-slate-900/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 hover:border-purple-500/40 dark:hover:border-slate-700 transition-all">
                <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950/70 text-purple-800 dark:text-purple-300 border border-purple-300 dark:border-purple-700/50 font-bold flex items-center justify-center text-base shadow-xs">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Use Inlay Marker Dots as Landmarks
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Your fretboard dots are not just decorations—they are harmonic coordinates:
                </p>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside">
                  <li><strong>Fret 3:</strong> G (string 6), C (string 5)</li>
                  <li><strong>Fret 5:</strong> A (string 6), D (string 5)</li>
                  <li><strong>Fret 7:</strong> B (string 6), E (string 5)</li>
                  <li><strong>Fret 12 (Double Dot):</strong> Complete octave reset (E A D G B E)</li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100/60 dark:from-slate-950 dark:to-slate-900/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 hover:border-amber-500/40 dark:hover:border-slate-700 transition-all">
                <div className="w-9 h-9 rounded-xl bg-rose-100 dark:bg-rose-950/70 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-700/50 font-bold flex items-center justify-center text-base shadow-xs">
                  4
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Think in Musical Intervals, Not Just Note Names
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Pro guitarists do not just memorize letter names; they visualize relative intervals (Root, 3rd, 5th, 7th). By seeing where the 3rd and 7th land relative to the root note, you can target emotional landing notes during solos and instantly create lush chord extensions.
                </p>
              </div>
            </div>

            {/* Quick Practice Drills */}
            <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-slate-900/80 dark:bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Daily 5-Minute Fretboard Routine
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Spend 5 minutes each day with the interactive tools above before playing your repertoire:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-900/90 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">Minute 1 - 2</div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">Note Hunt Challenge</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Select a random note (e.g. G) in Tab 3 and find all 6 instances up to fret 12.
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900/90 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">Minute 3 - 4</div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">Speed Quiz Drills</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Switch to Speed Quiz (Tab 2) and aim for a 10-question streak with &gt;90% accuracy.
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900/90 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">Minute 5</div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">Scale Triad Mapping</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      In Tab 1, switch between Major Triads and Minor Pentatonic to see how chords interlock with scales.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Practice Gear Recommendations */}
          <GearRecommendations
            title="Essential Gear for Fretboard Mastery & Practice"
            items={practiceGearItems}
          />

          {/* Related Theory and Practice Lessons */}
          <section className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm dark:shadow-xl transition-colors">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Explore Related Guitar Lessons</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/lessons/theory/scales/minor-pentatonic/"
                className="bg-slate-50/80 dark:bg-slate-950/80 p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-400/40 hover:shadow-md dark:hover:shadow-amber-500/5 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl mb-2">🎶</div>
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    Pentatonic Scale Guide
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Master the 5 essential positions across the entire guitar neck.
                  </p>
                </div>
              </Link>
              <Link
                href="/lessons/theory/modes/"
                className="bg-slate-50/80 dark:bg-slate-950/80 p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-400/40 hover:shadow-md dark:hover:shadow-amber-500/5 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl mb-2">🌈</div>
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    Guitar Modes Demystified
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Dorian, Mixolydian, Phrygian and beyond with interval breakdowns.
                  </p>
                </div>
              </Link>
              <Link
                href="/lessons/theory/chords/major/"
                className="bg-slate-50/80 dark:bg-slate-950/80 p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-400/40 hover:shadow-md dark:hover:shadow-amber-500/5 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl mb-2">🎸</div>
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    Major Chord Mastery
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Acoustic physics, functional harmony, and movable CAGED shapes.
                  </p>
                </div>
              </Link>
              <Link
                href="/lessons/practice/warmups/fretboard-navigation/"
                className="bg-slate-50/80 dark:bg-slate-950/80 p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-400/40 hover:shadow-md dark:hover:shadow-amber-500/5 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl mb-2">🗺️</div>
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    Fretboard Navigation Warmups
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Position shifting exercises to link isolated fretboard zones.
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
