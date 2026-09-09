'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
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
      <div className="min-h-screen bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumbs Navigation */}
          <Breadcrumbs pathname={pathname} pageTitle="Interactive Fretboard Trainer" />

          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Free Guitar Utility Tool
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Interactive Guitar Fretboard Trainer
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Visualize scales, master interval formulas, and train lightning-fast note recognition across all 6 strings with real audio tone feedback.
            </p>
          </div>

          {/* Interactive Tool Component */}
          <div className="shadow-2xl rounded-2xl">
            <FretboardTrainer />
          </div>

          {/* AdSense Placement */}
          <div className="my-8">
            <AdSlot slotId="practice-tool-fretboard-mid" format="banner" />
          </div>

          {/* Comprehensive Educational Guide */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
            <div className="border-b border-slate-200 pb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                How to Master and Memorize the Guitar Fretboard
              </h2>
              <p className="text-slate-600 mt-2 leading-relaxed">
                Many guitarists spend years trapped in isolated pentatonic box shapes without understanding the actual notes under their fingers. By understanding the geometric logic of the fretboard, you can unlock effortless improvisation, instant chord construction, and complete neck freedom.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Step 1 */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
                <div className="w-9 h-9 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Anchor Your Bass Strings (Strings 6 & 5)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The 6th string (Low E) and 5th string (A) provide the root notes for 90% of all standard barre chords and movable scales. Learn the natural notes on these two strings first. Remember: between B-C and E-F there are no sharps/flats (only a half-step / 1 fret distance).
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Harness Octave Shapes to Duplicate Notes
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Once you know notes on strings 6 and 5, you immediately know strings 4 and 3 through octave jumps! From the 6th or 5th string, move <strong>down two strings and up two frets</strong> to find the exact same note one octave higher.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
                <div className="w-9 h-9 rounded-lg bg-purple-600 text-white font-bold flex items-center justify-center text-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Use Inlay Marker Dots as Landmarks
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Your fretboard dots are not just decorations—they are harmonic coordinates:
                </p>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc list-inside">
                  <li><strong>Fret 3:</strong> G (string 6), C (string 5)</li>
                  <li><strong>Fret 5:</strong> A (string 6), D (string 5)</li>
                  <li><strong>Fret 7:</strong> B (string 6), E (string 5)</li>
                  <li><strong>Fret 12 (Double Dot):</strong> Complete octave reset (E A D G B E)</li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
                <div className="w-9 h-9 rounded-lg bg-amber-600 text-white font-bold flex items-center justify-center text-lg">
                  4
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Think in Musical Intervals, Not Just Note Names
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Pro guitarists do not just memorize letter names; they visualize relative intervals (Root, 3rd, 5th, 7th). By seeing where the 3rd and 7th land relative to the root note, you can target emotional landing notes during solos and instantly create lush chord extensions.
                </p>
              </div>
            </div>

            {/* Quick Practice Drills */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 sm:p-8 rounded-xl border border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-950 mb-3">
                Daily 5-Minute Fretboard Routine
              </h3>
              <p className="text-sm text-indigo-900/80 mb-4 leading-relaxed">
                Spend 5 minutes each day with the interactive tools above before playing your repertoire:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-indigo-200 shadow-sm">
                  <div className="text-xs font-bold text-indigo-600 uppercase mb-1">Minute 1 - 2</div>
                  <div className="font-bold text-slate-900 text-sm mb-1">Note Hunt Challenge</div>
                  <div className="text-xs text-slate-600">
                    Select a random note (e.g. G) in Tab 3 and find all 6 instances up to fret 12.
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-indigo-200 shadow-sm">
                  <div className="text-xs font-bold text-indigo-600 uppercase mb-1">Minute 3 - 4</div>
                  <div className="font-bold text-slate-900 text-sm mb-1">Speed Quiz Drills</div>
                  <div className="text-xs text-slate-600">
                    Switch to Speed Quiz (Tab 2) and aim for a 10-question streak with &gt;90% accuracy.
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-indigo-200 shadow-sm">
                  <div className="text-xs font-bold text-indigo-600 uppercase mb-1">Minute 5</div>
                  <div className="font-bold text-slate-900 text-sm mb-1">Scale Triad Mapping</div>
                  <div className="text-xs text-slate-600">
                    In Tab 1, switch between Major Triads and Minor Pentatonic to see how chords interlock with scales.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Practice Gear Recommendations with Multi-Retailer Affiliate Buttons */}
          <GearRecommendations
            title="Essential Gear for Fretboard Mastery & Practice"
            items={practiceGearItems}
          />

          {/* Related Theory and Practice Lessons */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Explore Related Guitar Lessons</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/lessons/theory/scales/pentatonic/"
                className="p-5 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group"
              >
                <div className="text-2xl mb-2">🎶</div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Pentatonic Scale Guide
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Master the 5 essential positions across the entire guitar neck.
                </p>
              </Link>
              <Link
                href="/lessons/theory/modes/"
                className="p-5 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group"
              >
                <div className="text-2xl mb-2">🌈</div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Guitar Modes Demystified
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Dorian, Mixolydian, Phrygian and beyond with interval breakdowns.
                </p>
              </Link>
              <Link
                href="/lessons/theory/chords/major/"
                className="p-5 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group"
              >
                <div className="text-2xl mb-2">🎸</div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Major Chord Mastery
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Acoustic physics, functional harmony, and movable CAGED shapes.
                </p>
              </Link>
              <Link
                href="/lessons/practice/warmups/fretboard-navigation/"
                className="p-5 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group"
              >
                <div className="text-2xl mb-2">🗺️</div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Fretboard Navigation Warmups
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Position shifting exercises to link isolated fretboard zones.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
