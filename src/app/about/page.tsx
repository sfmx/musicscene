import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Layout from '@/components/Layout';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'About MusicScene | Editorial Standards & Founder',
  description:
    'Learn about MusicScene, our founder Jason Smith, and our editorial standards for guitar song analysis, music theory, and gear guides.',
};

export default function AboutPage() {
  return (
    <Layout>
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 transition-colors">
        <Header
          title="About MusicScene"
          subtitle="Empowering guitarists with rigorous, musically accurate education, founded and curated in Australia."
        />

        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              MusicScene was founded with a single goal: to provide the most comprehensive, accurate, and accessible guitar education
              available on the web. We believe that every guitarist — from beginners picking up their first acoustic to experienced
              players analyzing complex modal solos — deserves learning materials that are musically rigorous, practical, and enjoyable.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Too many guitar websites rely on unverified, crowd-sourced tabs with incorrect chords or generic, auto-generated advice.
              MusicScene takes an editorial-first approach. Every song analysis, theory breakdown, and gear lesson is researched,
              structured, and verified against master recordings and music theory principles.
            </p>
          </section>

          {/* Founder & Lead Editor Profile (E-E-A-T) */}
          <section className="mb-16 bg-white dark:bg-slate-900/90 rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-700 text-white flex items-center justify-center font-extrabold text-4xl shadow-md shrink-0">
                JS
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-1">
                    Founder &amp; Chief Editor
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Jason Smith</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Sydney &amp; Brisbane, Australia</p>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Jason is a multi-instrumentalist, guitarist, and software developer with over two decades of playing,
                  recording, and transcribing experience. Having studied Western music theory, jazz harmony, and classic rock guitar
                  styles, Jason founded MusicScene to bridge the gap between abstract academic music theory and practical fretboard fluency.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Every lesson framework on the platform — from the interactive fretboard visualizations to the chord progression Roman
                  numeral breakdowns — is personally reviewed and maintained by Jason to ensure technical correctness and genuine pedagogical value.
                </p>
              </div>
            </div>
          </section>

          {/* Editorial Standards & Accuracy Verification */}
          <section className="mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">Editorial Standards &amp; Verification</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-900/90 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Master Recording Cross-Check</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  All song chords, tunings, and progressions are cross-referenced directly against isolated guitar tracks, master studio
                  recordings, and verified live performance footage.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900/90 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Harmonic Rigor</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  We don&apos;t just list chords; we explain harmonic function, voice leading, scale degree relationships, and modal
                  interchange so players understand why the song works.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900/90 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Unbiased Gear Research</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Our gear guides analyze circuit designs, pickup inductance, tube saturation dynamics, and build trade-offs. We never
                  recommend products based on affiliate commissions.
                </p>
              </div>
            </div>
          </section>

          {/* What We Offer */}
          <section className="mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-900/90 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Song Analysis</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Over 100 detailed breakdowns of iconic songs spanning rock, blues, metal, pop, and more.
                  Each analysis includes verified chord progressions, technique guides, equipment details,
                  and structured learning paths so you can master every part of a song — not just the intro riff.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900/90 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Music Theory</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  A complete curriculum covering scales, chords, intervals, modes, and chord progressions.
                  All lessons include interactive fretboard diagrams, audio examples, and practical exercises
                  that connect theory directly to the guitar neck.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900/90 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Gear Guides</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  In-depth lessons on guitars, amplifiers, effects pedals, recording equipment, and accessories.
                  We explain the tonal characteristics, practical applications, and best use cases for different
                  gear so you can make informed decisions.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900/90 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Practice Tools</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Structured warmup routines, technique exercises, and improvisation guides designed to build
                  real skills. Our practice materials are organized by difficulty and technique so you always
                  know what to work on next.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-indigo-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 text-slate-900 dark:text-white p-12 rounded-2xl border border-slate-200 dark:border-slate-800 text-center shadow-sm dark:shadow-xl">
            <h2 className="text-3xl font-extrabold mb-4 text-slate-900 dark:text-white">Start Learning Today</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-lg mx-auto">
              Browse our library of lessons and find your next challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/lessons/songs/song-analysis"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Explore Song Analysis
              </Link>
              <Link
                href="/lessons/theory"
                className="px-8 py-4 border-2 border-slate-300 dark:border-white/20 text-slate-800 dark:text-white font-bold rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
              >
                Study Theory
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
