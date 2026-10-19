'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import GuitarTuner from '@/components/Tools/GuitarTuner/GuitarTuner';
import GearRecommendations from '@/components/Revenue/GearRecommendations';
import AdSlot from '@/components/Revenue/AdSlot';

const tunerGearItems = [
  {
    category: 'Pedal',
    product: 'TC Electronic PolyTune 3 Clip & Pedal Tuner',
    reason: 'The industry standard strobe tuner featuring 0.02 cent accuracy, polyphonic simultaneous 6-string display, and pristine Bonafide analog buffer.',
  },
  {
    category: 'Pedal',
    product: 'Boss TU-3 Chromatic Stage Tuner',
    reason: 'The legendary indestructible tank found on 90% of pro pedalboards worldwide with ultra-bright high-outdoor LED meter.',
  },
  {
    category: 'Accessory',
    product: 'Snark ST-8 Super Tight Clip-On Tuner',
    reason: 'High-sensitivity vibration-sensing clip-on tuner that ignores noisy room chatter and rehearsal room racket.',
  },
];

export default function GuitarTunerClient() {
  const pathname = '/lessons/practice/tuner';

  return (
    <Layout>
      <Header
        title="Interactive Online Guitar Tuner"
        subtitle="Tune your guitar with pitch-perfect accuracy using your device microphone or reference audio tones. Supports Standard, Drop D, DADGAD, Half-Step Down, and Open Tunings."
        category="Interactive Guitar Practice Utility"
      />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 transition-colors text-slate-900 dark:text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumbs Navigation */}
          <Breadcrumbs pathname={pathname} pageTitle="Guitar Tuner" />

          {/* Interactive Tuner Tool */}
          <div className="shadow-2xl rounded-3xl">
            <GuitarTuner />
          </div>

          {/* AdSense Placement */}
          <div className="my-8">
            <AdSlot slotId="practice-tool-tuner-mid" format="banner" />
          </div>

          {/* Educational Tuning & Intonation Masterclass */}
          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-8 transition-colors">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                GUITAR ACOUSTICS &amp; METHODOLOGY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                The Science of Guitar Tuning &amp; Intonation
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                A guitar is an equal-temperament fretted instrument. Mastering how string gauge, fret pressure, natural harmonics, and pitch drift interact ensures your chords ring true across the entire fingerboard.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 dark:bg-slate-950/70 p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="text-2xl font-bold text-emerald-500">01</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Tune Up, Never Down
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Always tune <strong>up into pitch</strong> from below. If a string is sharp, slacken it below the target pitch first, then tighten upwards. This eliminates slack around the tuning post gears that causes slippage.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950/70 p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="text-2xl font-bold text-amber-500">02</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Pluck at the 12th Fret
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  When tuning via microphone or tuner pedal, pluck the string gently over the <strong>12th fret</strong> using your thumb flesh. This suppresses upper harmonic overtones and feeds the fundamental frequency cleanly into the pitch detector.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950/70 p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="text-2xl font-bold text-indigo-500">03</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Check Intonation at 12th
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Play the open string, then fret at the 12th fret. If the fretted note is sharp compared to the open string, your saddle must move <strong>back away from the neck</strong>. If flat, move the saddle forward.
                </p>
              </div>
            </div>

            {/* Popular Alternate Tunings Guide */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-950 dark:to-slate-900 p-6 sm:p-8 rounded-xl border border-emerald-200 dark:border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Iconic Alternate Tunings &amp; Song Archetypes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
                <div className="bg-white dark:bg-slate-900/80 p-4 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">🎸 Drop D (D-A-D-G-B-E)</div>
                  <div className="text-slate-600 dark:text-slate-300">
                    Drop string 6 down 1 whole step. Unlocks single-finger power chords and heavy bass resonance (Nirvana, Soundgarden, Foo Fighters).
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900/80 p-4 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">🔥 Half-Step Down (Eb)</div>
                  <div className="text-slate-600 dark:text-slate-300">
                    All 6 strings dropped 1 semitone. Thicker tone, reduced string tension for wider vibrato, and vocal accommodation (Hendrix, SRV, Slash).
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900/80 p-4 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">🌊 DADGAD (Celtic Modal)</div>
                  <div className="text-slate-600 dark:text-slate-300">
                    Strings 6, 2, and 1 dropped 1 whole step. Open Dsus4 sound with drone strings for evocative fingerstyle and acoustic rhythm (Jimmy Page).
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900/80 p-4 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">⚡ Open G (D-G-D-G-B-D)</div>
                  <div className="text-slate-600 dark:text-slate-300">
                    Full G major chord open. The signature sound of Keith Richards on <em>Brown Sugar</em>, <em>Honky Tonk Women</em>, and bottleneck blues slide.
                  </div>
                </div>
              </div>
            </div>

            {/* Related Tools & Masterclasses */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">Related Tools &amp; Guides:</span>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/lessons/practice/metronome"
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100"
                >
                  Metronome &amp; Speed Trainer &rarr;
                </Link>
                <Link
                  href="/lessons/gear/accessories/tuners"
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 hover:bg-purple-100"
                >
                  Best Guitar Tuners In-Depth Guide &rarr;
                </Link>
                <Link
                  href="/lessons/practice/caged-system"
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 hover:bg-rose-100"
                >
                  CAGED System Visualizer &rarr;
                </Link>
              </div>
            </div>
          </section>

          {/* Gear Recommendations */}
          <GearRecommendations
            title="Recommended Guitar Tuners & Intonation Tools"
            items={tunerGearItems}
          />
        </div>
      </div>
    </Layout>
  );
}
