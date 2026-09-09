import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'About MusicScene | Editorial Standards & Founder',
  description:
    'Learn about MusicScene, our founder Jason Smith, and our editorial standards for guitar song analysis, music theory, and gear guides.',
};

export default function AboutPage() {
  return (
    <Layout>
      <div className="bg-gray-50/50 min-h-screen">
        {/* Header */}
        <header className="relative h-64 bg-gray-950 overflow-hidden flex items-center justify-center text-center px-4">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-transparent" />
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              About MusicScene
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Empowering guitarists with rigorous, musically accurate education, founded and curated in Australia.
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              MusicScene was founded with a single goal: to provide the most comprehensive, accurate, and accessible guitar education
              available on the web. We believe that every guitarist — from beginners picking up their first acoustic to experienced
              players analyzing complex modal solos — deserves learning materials that are musically rigorous, practical, and enjoyable.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Too many guitar websites rely on unverified, crowd-sourced tabs with incorrect chords or generic, auto-generated advice.
              MusicScene takes an editorial-first approach. Every song analysis, theory breakdown, and gear lesson is researched,
              structured, and verified against master recordings and music theory principles.
            </p>
          </section>

          {/* Founder & Lead Editor Profile (E-E-A-T) */}
          <section className="mb-16 bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-700 text-white flex items-center justify-center font-extrabold text-4xl shadow-md shrink-0">
                JS
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-1">
                    Founder &amp; Chief Editor
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">Jason Smith</h3>
                  <p className="text-sm text-gray-500 font-medium">Sydney, Australia</p>
                  <p className="text-sm text-gray-500 font-medium">Brisbane, Australia</p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Jason is a multi-instrumentalist, guitarist, and software developer with over two decades of playing,
                  recording, and transcribing experience. Having studied Western music theory, jazz harmony, and classic rock guitar
                  styles, Jason founded MusicScene to bridge the gap between abstract academic music theory and practical fretboard fluency.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Every lesson framework on the platform — from the interactive fretboard visualizations to the chord progression Roman
                  numeral breakdowns — is personally reviewed and maintained by Jason to ensure technical correctness and genuine pedagogical value.
                </p>
              </div>
            </div>
          </section>

          {/* Editorial Standards & Accuracy Verification */}
          <section className="mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Editorial Standards &amp; Verification</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Master Recording Cross-Check</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  All song chords, tunings, and progressions are cross-referenced directly against isolated guitar tracks, master studio
                  recordings, and verified live performance footage.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Harmonic Rigor</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We don&apos;t just list chords; we explain harmonic function, voice leading, scale degree relationships, and modal
                  interchange so players understand why the song works.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Unbiased Gear Research</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our gear guides analyze circuit designs, pickup inductance, tube saturation dynamics, and build trade-offs. We never
                  recommend products based on affiliate commissions.
                </p>
              </div>
            </div>
          </section>

          {/* What We Offer */}
          <section className="mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Song Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Over 100 detailed breakdowns of iconic songs spanning rock, blues, metal, pop, and more.
                  Each analysis includes verified chord progressions, technique guides, equipment details,
                  and structured learning paths so you can master every part of a song — not just the intro riff.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Music Theory</h3>
                <p className="text-gray-600 leading-relaxed">
                  A complete curriculum covering scales, chords, intervals, modes, and chord progressions.
                  All lessons include interactive fretboard diagrams, audio examples, and practical exercises
                  that connect theory directly to the guitar neck.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gear Guides</h3>
                <p className="text-gray-600 leading-relaxed">
                  In-depth lessons on guitars, amplifiers, effects pedals, recording equipment, and accessories.
                  We explain the tonal characteristics, practical applications, and best use cases for different
                  gear so you can make informed decisions.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Practice Tools</h3>
                <p className="text-gray-600 leading-relaxed">
                  Structured warmup routines, technique exercises, and improvisation guides designed to build
                  real skills. Our practice materials are organized by difficulty and technique so you always
                  know what to work on next.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gray-950 text-white p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-extrabold mb-4">Start Learning Today</h2>
            <p className="text-slate-300 mb-8 max-w-lg mx-auto">
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
                className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
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
