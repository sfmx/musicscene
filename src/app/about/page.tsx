import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'About MusicScene',
  description:
    'MusicScene is a comprehensive guitar education platform with expert song analysis, music theory lessons, gear guides, and practice tools for guitarists of all skill levels.',
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
              Empowering guitarists with expert-level education, built by a guitarist for guitarists.
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">My Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              MusicScene was created with a simple goal: to provide the most comprehensive, accurate, and accessible guitar education
              available online. As a passionate guitarist myself, I believe every player — from absolute beginners picking up their first instrument to seasoned
              players looking to expand their repertoire — deserves high-quality learning resources that are both technically rigorous
              and genuinely enjoyable to use.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Too many guitar education sites offer shallow content, inaccurate tabs, or generic advice. MusicScene is different.
              Every song analysis, theory lesson, and gear guide on this platform is researched, verified, and written by me,
              combining my experience and love for the instrument to help you truly master the guitar.
            </p>
          </section>

          {/* What We Offer */}
          <section className="mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">What I Offer</h2>
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

          {/* Our Approach */}
          <section className="mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">My Approach</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Accuracy First</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every tab, chord progression, and technique description is cross-referenced against multiple
                  authoritative sources including official transcriptions, artist interviews, and professional
                  tablature databases. I don&apos;t publish content until it meets my strict accuracy standards.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Progressive Learning</h3>
                <p className="text-gray-700 leading-relaxed">
                  The content is structured with clear difficulty ratings — Beginner, Intermediate, Advanced, and
                  Expert — so you can find material that challenges you at the right level. Each song analysis
                  includes a learning path that guides you from basic rhythm parts to advanced lead techniques.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visual Learning</h3>
                <p className="text-gray-700 leading-relaxed">
                  Guitar is a visual instrument, and the lessons reflect that. Interactive fretboard diagrams,
                  chord charts, tablature notation, and scale patterns are integrated throughout every lesson
                  to help you connect what you read with what you play.
                </p>
              </div>
            </div>
          </section>

          {/* Who We Are */}
          <section className="mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              MusicScene is built by a team of guitar enthusiasts, music educators, and software developers who
              are passionate about making guitar education better. Our content creators have decades of combined
              playing and teaching experience across genres including rock, blues, jazz, metal, country, and classical guitar.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We combine deep musical knowledge with modern web technology to create an educational experience that&apos;s
              fast, interactive, and constantly improving. New lessons, song analyses, and features are added regularly
              based on community feedback and current music trends.
            </p>
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
