"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function TheoryHubPage() {
  const pillars = [
    {
      step: 1,
      title: 'Intervals',
      subtitle: 'The Harmonic Atoms',
      href: '/lessons/theory/intervals',
      icon: '🎵',
      gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
      borderHover: 'hover:border-purple-500/60 dark:hover:border-purple-400/60',
      badgeBg: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30',
      description:
        'The distance between any two notes is the atomic building block of all harmony, chords, and melody. Once you hear and see intervals on the fretboard, shapes stop being arbitrary.',
      keyConcepts: [
        'Root, 3rds (Major vs Minor)',
        'Perfect 4ths & 5ths',
        'Tritone & Blue Notes',
        '7ths & Octaves',
      ],
      featuredLinks: [
        { label: 'Minor 3rd', href: '/lessons/theory/intervals/minor-3rd' },
        { label: 'Major 3rd', href: '/lessons/theory/intervals/major-3rd' },
        { label: 'Perfect 5th', href: '/lessons/theory/intervals/perfect-5th' },
        { label: 'Minor 7th', href: '/lessons/theory/intervals/minor-7th' },
        { label: 'Explore All Intervals →', href: '/lessons/theory/intervals' },
      ],
    },
    {
      step: 2,
      title: 'Scales & Fretboard Patterns',
      subtitle: 'Roadmaps of Melody & Solos',
      href: '/lessons/theory/scales',
      icon: '🎼',
      gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
      borderHover: 'hover:border-blue-500/60 dark:hover:border-blue-400/60',
      badgeBg: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30',
      description:
        'Master the 5 interlocking CAGED shapes and 3-note-per-string patterns. Shift effortlessly across all 6 strings without ever getting stranded in box one.',
      keyConcepts: [
        'Minor & Major Pentatonic',
        'Blues Scale & Flat 5ths',
        'Natural Major & Minor',
        '5 CAGED Scale Positions',
      ],
      featuredLinks: [
        { label: 'Minor Pentatonic', href: '/lessons/theory/scales/minor-pentatonic' },
        { label: 'Blues Scale', href: '/lessons/theory/scales/blues' },
        { label: 'Major Scale', href: '/lessons/theory/scales/major' },
        { label: 'Natural Minor', href: '/lessons/theory/scales/minor' },
        { label: 'Explore All 14 Scales →', href: '/lessons/theory/scales' },
      ],
    },
    {
      step: 3,
      title: 'Chords & Triad Inversions',
      subtitle: 'Harmonic Architecture',
      href: '/lessons/theory/chords',
      icon: '🎸',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      borderHover: 'hover:border-emerald-500/60 dark:hover:border-emerald-400/60',
      badgeBg: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
      description:
        'Move far beyond static cowboy chords. Discover compact 3-string triad inversions, movable barre grips, dominant 7ths, and sophisticated extended jazz voicings.',
      keyConcepts: [
        'Major & Minor Triads',
        'Dominant, Maj7 & Min7',
        'Inversions & Voice Leading',
        'Suspended & Slash Chords',
      ],
      featuredLinks: [
        { label: 'Major Triads', href: '/lessons/theory/chords/major' },
        { label: 'Minor Triads', href: '/lessons/theory/chords/minor' },
        { label: '7th Chords', href: '/lessons/theory/chords/seventh' },
        { label: 'Slash Chords', href: '/lessons/theory/chords/slash' },
        { label: 'Explore All 17 Chords →', href: '/lessons/theory/chords' },
      ],
    },
    {
      step: 4,
      title: 'The 7 Modes Decoded',
      subtitle: 'Moods & Modal Colors',
      href: '/lessons/theory/modes',
      icon: '🔄',
      gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
      borderHover: 'hover:border-amber-500/60 dark:hover:border-amber-400/60',
      badgeBg: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30',
      description:
        'Understand the characteristic flavor of each mode. Hear why Dorian fuels funk and Santana, Mixolydian rocks southern riffs, and Aeolian delivers heavy metal sorrow.',
      keyConcepts: [
        'Dorian (Raised 6th)',
        'Mixolydian (Flat 7th)',
        'Aeolian (Natural Minor)',
        'Modal Parent Scale vs Parallel',
      ],
      featuredLinks: [
        { label: 'Dorian Mode', href: '/lessons/theory/scales/dorian' },
        { label: 'Mixolydian Mode', href: '/lessons/theory/scales/mixolydian' },
        { label: 'Aeolian Mode', href: '/lessons/theory/scales/aeolian' },
        { label: 'Phrygian Mode', href: '/lessons/theory/scales/phrygian' },
        { label: 'Explore All 7 Modes →', href: '/lessons/theory/modes' },
      ],
    },
    {
      step: 5,
      title: 'Chord Progressions & Cadences',
      subtitle: 'Harmonic Equations & Movement',
      href: '/lessons/theory/progressions',
      icon: '🎹',
      gradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
      borderHover: 'hover:border-rose-500/60 dark:hover:border-rose-400/60',
      badgeBg: 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/30',
      description:
        'The harmonic equations that drive 95% of recorded songs. Decode Roman numeral notation, tonic-subdominant-dominant tension cycles, and cadences that compel resolution.',
      keyConcepts: [
        'I - IV - V Rock Engine',
        'ii - V - I Jazz Backbone',
        'I - V - vi - IV Pop Loop',
        'Andalusian Flamenco Cadence',
      ],
      featuredLinks: [
        { label: 'I - IV - V Engine', href: '/lessons/theory/progressions/i-iv-v' },
        { label: 'ii - V - I Jazz Turn', href: '/lessons/theory/progressions/ii-v-i' },
        { label: '12-Bar Blues', href: '/lessons/theory/progressions/12-bar-blues' },
        { label: 'Pop 4-Chord Loop', href: '/lessons/theory/progressions/i-v-vi-iv' },
        { label: 'Explore All 16 Progressions →', href: '/lessons/theory/progressions' },
      ],
    },
  ];

  const roadmapStages = [
    {
      stage: '01',
      title: 'Fretboard Geometry & Intervals',
      duration: 'Foundation',
      description:
        'Map string intervals (unisons, 4ths, and the 3rd skip between G & B strings). Internalize octave patterns and half-step/whole-step spacing.',
      icon: '🎯',
      badge: 'Week 1 - 2',
    },
    {
      stage: '02',
      title: 'Pentatonic Boxes & CAGED Architecture',
      duration: 'Spatial Fluency',
      description:
        'Connect 5 minor and major pentatonic shapes along the fretboard. Locate the root notes on strings 6 and 5 to jump anywhere instantly.',
      icon: '🎼',
      badge: 'Week 3 - 5',
    },
    {
      stage: '03',
      title: 'Triad Inversions on Top Strings',
      duration: 'Rhythm Mastery',
      description:
        'Strip bulky 6-string barre chords down to punchy 3-note triads on strings 1-2-3 and 2-3-4. The primary secret of professional rhythm playing.',
      icon: '🎸',
      badge: 'Week 6 - 8',
    },
    {
      stage: '04',
      title: '7th Chords & Functional Harmony',
      duration: 'Harmonic Depth',
      description:
        'Add color tones (Maj7, Min7, Dom7, m7b5). Understand how the tritone tension inside the dominant 7th pulls powerfully toward the tonic.',
      icon: '✨',
      badge: 'Week 9 - 11',
    },
    {
      stage: '05',
      title: 'Modal Colors & Characteristic Tones',
      duration: 'Melodic Expression',
      description:
        'Stop playing random notes from a scale. Learn each mode’s single "money note" (like the Dorian natural 6th) to solo with unmistakable emotional intent.',
      icon: '🔄',
      badge: 'Week 12 - 14',
    },
    {
      stage: '06',
      title: 'Song Analysis & Voice Leading',
      duration: 'Real-World Fluency',
      description:
        'Deconstruct legendary tracks from Led Zeppelin, Hendrix, and Pink Floyd. Analyze basslines, modal mixture, and voice leading in master recordings.',
      icon: '🏆',
      badge: 'Ongoing Mastery',
    },
  ];

  const whyTheoryItems = [
    {
      icon: '🎯',
      title: 'Unlock Your Entire Fretboard',
      description:
        'Instead of memorizing hundreds of separate chord fingerings and scale boxes, understand interval formulas. Every chord or scale becomes a logical variation on shapes you already know.',
      accent: 'border-l-4 border-l-amber-500',
    },
    {
      icon: '🗣️',
      title: 'Communicate on the Bandstand',
      description:
        'Knowing chord functions and Roman numeral analysis lets you transpose on the fly, follow any jam session, and call out changes effortlessly without shouting fret numbers.',
      accent: 'border-l-4 border-l-blue-500',
    },
    {
      icon: '✍️',
      title: 'Write Songs with Intention',
      description:
        'Understand why certain chord sequences evoke melancholy, triumphant energy, or suspense. Stop guessing by trial and error; compose chord movements that serve your artistic vision.',
      accent: 'border-l-4 border-l-emerald-500',
    },
    {
      icon: '🎭',
      title: 'Improvise Without Guesswork',
      description:
        'Great solos target chord tones and guide tones as chords change beneath them. Knowing which notes belong to each moment is what transforms scales into genuine music.',
      accent: 'border-l-4 border-l-purple-500',
    },
  ];

  const songSpotlights = [
    {
      title: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      href: '/lessons/songs/song-analysis/stairway-to-heaven',
      concept: 'Descending Chromatic Line Cliché',
      badge: 'Harmonic Breakdown',
      description:
        'How Jimmy Page uses a descending bassline (A - G# - G - F# - F) under an Am triad to produce one of rock history’s most unforgettable progressions.',
    },
    {
      title: 'Back in Black',
      artist: 'AC/DC',
      href: '/lessons/songs/song-analysis/back-in-black',
      concept: 'Mixolydian Power Chords & Pentatonic Hooks',
      badge: 'Rhythm & Theory',
      description:
        'Angus and Malcolm Young combine E - D - A major triads with minor pentatonic blues fills, contrasting heavy open power chords with rhythmic silence.',
    },
    {
      title: 'Sultans of Swing',
      artist: 'Dire Straits',
      href: '/lessons/songs/song-analysis/sultans-of-swing',
      concept: 'D Minor Triad Arpeggios & Voice Leading',
      badge: 'Lead Guitar Analysis',
      description:
        'Mark Knopfler avoids repetitive scale runs by outlining Dm, C, and Bb triad chord shapes directly under his fingers on the top three strings.',
    },
    {
      title: 'Little Wing',
      artist: 'Jimi Hendrix',
      href: '/lessons/songs/song-analysis/little-wing',
      concept: 'CAGED Thumb-Over Voicings & Embellishments',
      badge: 'R&B / Rock Fusion',
      description:
        'Hendrix connects Em, G, Am, and Bm through hammer-on embellishments and double-stops derived directly from the pentatonic scale of each chord.',
    },
  ];

  return (
    <Layout>
      {/* 1. Header with Eyebrow & Metadata Badges */}
      <Header
        title="Music Theory for Guitarists"
        subtitle="Move beyond rote chord memorization. Connect abstract musical concepts directly to the fretboard with visual geometry, CAGED patterns, and 100+ iconic song breakdowns."
        category="🎼 Music Theory Curriculum"
        badges={[
          { label: '5 Pillars', value: 'Intervals, Scales, Chords, Modes, Progressions' },
          { label: 'Fretboard System', value: 'Visual CAGED & Triad Inversions' },
          { label: 'Practical Application', value: '107+ Song Analyses' },
        ]}
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs pathname="/lessons/theory" pageTitle="Music Theory" />

          {/* 2. Atmospheric Hero Intro Banner */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-slate-50 to-amber-50/30 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 mb-16 shadow-xl">
            {/* Ambient Background Radial Glows */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-amber-500/10 dark:bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-6 shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                <span>The Guitarist-First Theory Method</span>
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
                Stop Memorizing Blind Shapes.{' '}
                <span className="block mt-2 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 dark:from-amber-400 dark:via-orange-300 dark:to-yellow-200 bg-clip-text text-transparent">
                  Start Understanding The Music.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
                Traditional music theory was built for the piano and classical sheet music. On guitar, notes repeat across different strings and frets, creating geometric patterns. We teach theory tailored for the guitar neck: using intervals, triad grips, and chord tones so you can play with freedom in any key.
              </p>

              {/* Quick Jump Action Bar */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href="#theory-pillars"
                  className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-sm inline-flex items-center gap-2"
                >
                  <span>Explore The 5 Pillars</span>
                  <span>↓</span>
                </a>
                <Link
                  href="/lessons/practice/fretboard-trainer"
                  className="px-6 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-sm inline-flex items-center gap-2 shadow-xs"
                >
                  <span>🎯</span>
                  <span>Fretboard Trainer</span>
                </Link>
                <Link
                  href="/lessons/songs/song-analysis"
                  className="px-6 py-3.5 bg-transparent hover:bg-slate-200/60 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-semibold rounded-xl border border-slate-300 dark:border-slate-800 transition-all duration-200 text-sm inline-flex items-center gap-2"
                >
                  <span>See Theory In 107+ Songs →</span>
                </Link>
              </div>
            </div>
          </section>

          {/* 3. The 5 Core Theory Pillars */}
          <section id="theory-pillars" className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 mb-3 inline-block">
                Core Foundations
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                The 5 Pillars of Guitar Music Theory
              </h2>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
                Every song ever written on guitar is built from these five interconnected pillars. Follow them in sequence or dive into what you need today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className={`relative group bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-7 shadow-lg transition-all duration-300 ${pillar.borderHover} hover:-translate-y-1 flex flex-col justify-between overflow-hidden`}
                >
                  {/* Subtle Top Gradient Accent */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${pillar.gradient}`}
                  />

                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center text-sm font-black border border-slate-200 dark:border-slate-700 shadow-xs">
                          {pillar.step}
                        </span>
                        <span className="text-3xl">{pillar.icon}</span>
                      </div>
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${pillar.badgeBg}`}
                      >
                        Pillar {pillar.step}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <Link href={pillar.href} className="block group-hover:text-amber-500 transition-colors">
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1">
                        {pillar.title}
                      </h3>
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                        {pillar.subtitle}
                      </div>
                    </Link>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    {/* Core Concepts */}
                    <div className="mb-6">
                      <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                        Core Concepts:
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {pillar.keyConcepts.map((concept, idx) => (
                          <div
                            key={idx}
                            className="text-[11px] font-mono px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 truncate"
                            title={concept}
                          >
                            • {concept}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Subtopic Links & CTA */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.featuredLinks.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.href}
                          className={`text-xs font-medium px-2.5 py-1 rounded-md transition-colors ${
                            idx === pillar.featuredLinks.length - 1
                              ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 font-bold ml-auto'
                              : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Why Learn Music Theory Grid */}
          <section className="mb-20">
            <div className="bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl p-8 sm:p-12">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 mb-3 inline-block">
                  The Guitarist Advantage
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                  Why Learn Music Theory on Guitar?
                </h2>
                <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
                  Theory isn’t about rigid rules. It is the language of shared musical vocabulary that liberates your fingers and opens up the entire instrument.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyTheoryItems.map((item, idx) => (
                  <div
                    key={idx}
                    className={`bg-slate-50 dark:bg-slate-950/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-800/80 ${item.accent} shadow-xs hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex-shrink-0">
                        {item.icon}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. Curriculum Learning Roadmap (Stage 1 - 6) */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 mb-3 inline-block">
                Step-by-Step Pathway
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Recommended Guitar Learning Roadmap
              </h2>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
                Don’t try to absorb everything at once. Follow this structured 6-stage roadmap designed to turn theoretical knowledge into immediate muscle memory.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roadmapStages.map((item) => (
                <div
                  key={item.stage}
                  className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-md hover:border-amber-500/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-amber-500 dark:text-amber-400 font-mono">
                        STAGE {item.stage}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {item.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="text-xl">{item.icon}</span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>

                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                      Focus: {item.duration}
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Interactive Practice Tools Suite Showcase */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/30 mb-4 inline-block">
                  ⚡ Interactive Audio & Visual Tools
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
                  Turn Theory into Reflexes
                </h2>
                <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Theory in a book is useless if your hands freeze on the instrument. Train your note identification, interval geometry, and chord changes with our free web utilities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                {/* Tool 1 */}
                <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      Fretboard Note Hunt & Trainer
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      Gamified speed quiz. Master every note on all 6 strings in 60-second bursts. Choose standard, single string, or random fret challenges.
                    </p>
                  </div>
                  <Link
                    href="/lessons/practice/fretboard-trainer"
                    className="w-full py-3 text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
                  >
                    Play Fretboard Game &rarr;
                  </Link>
                </div>

                {/* Tool 2 */}
                <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="text-4xl mb-4">🎹</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      Progression Jam Player
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      Hear harmonic equations come alive. Loop common jazz ii-V-I, rock I-IV-V, and blues cadences with synthesized backing audio and live chord charts.
                    </p>
                  </div>
                  <Link
                    href="/lessons/practice/progression-player"
                    className="w-full py-3 text-center bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
                  >
                    Launch Jam Player &rarr;
                  </Link>
                </div>

                {/* Tool 3 */}
                <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="text-4xl mb-4">📄</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      Free Fretboard Cheat Sheet
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      Printable 3-page PDF reference guide. Full 24-fret notes map, 5 pentatonic CAGED shapes, essential triad inversions, and Roman numeral cheat tables.
                    </p>
                  </div>
                  <Link
                    href="/downloads/fretboard-cheat-sheet"
                    className="w-full py-3 text-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
                  >
                    Download Free PDF &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Theory In Action: Song Analysis Spotlight */}
          <section className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-3 inline-block">
                  🎸 Theory in Real Music
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                  How Theory Powers Legendary Songs
                </h2>
                <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
                  Stop looking at theory as dry math. Here is how guitar legends turned these exact concepts into immortal riffs and solos in our 107+ song breakdowns.
                </p>
              </div>
              <Link
                href="/lessons/songs/why-songs-work"
                className="text-sm font-bold text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 inline-flex items-center gap-1 hover:underline self-start md:self-end"
              >
                <span>Browse Why Songs Work Hub</span>
                <span>➔</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {songSpotlights.map((song) => (
                <Link
                  key={song.title}
                  href={song.href}
                  className="group bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-md hover:shadow-xl hover:border-amber-500/50 hover:-translate-y-1 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        {song.badge}
                      </span>
                      <span className="text-amber-500 dark:text-amber-400 text-sm">★</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                      {song.title}
                    </h3>
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                      {song.artist}
                    </div>

                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2">
                      Concept: {song.concept}
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {song.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 text-center">
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider group-hover:underline">
                      View Song Breakdown &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* 8. Fretboard vs Classical Notation Framework Comparison */}
          <section className="mb-20">
            <div className="bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl p-8 sm:p-12">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 mb-3 inline-block">
                  Pedagogy
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                  Why Standard Music Theory Fails Guitarists
                </h2>
                <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
                  Piano keyboards are linear (one key per pitch). The guitar neck is two-dimensional with overlapping pitch locations across 6 strings.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4 text-red-600 dark:text-red-400 font-bold text-lg">
                    <span>❌</span>
                    <span>Traditional Classical Approach</span>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>Forces you to read standard treble clef notation before playing a single note.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>Ignores that Middle C can be played in five different locations on the fretboard.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>Treats chords as static stacks of notes rather than movable geometric grips.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>Focuses on 18th-century choral voice leading with zero connection to rock, blues, or jazz riffs.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4 text-emerald-600 dark:text-emerald-400 font-bold text-lg">
                    <span>✓</span>
                    <span>The MusicScene Fretboard Method</span>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span><strong>Interval Geometry:</strong> Understand the fretboard as a coordinate grid of 3rds, 5ths, and 7ths.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span><strong>CAGED Triads:</strong> Learn 3-string triad grips that shift effortlessly into any key across the neck.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span><strong>Target Notes:</strong> Solo over chord changes by landing on chord tones instead of mindless scale runs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span><strong>Real Song Context:</strong> Every theoretical concept is illustrated with verified tabs and audio breakdowns.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 9. Final Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent pointer-events-none" />

              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/30 mb-6 inline-block">
                Start Today
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
                Ready to Master the Fretboard?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                Choose your entry point. Start from scratch with Intervals, explore the CAGED Scale patterns, or jump straight into the interactive Fretboard Trainer.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/lessons/theory/intervals"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-base"
                >
                  Start with Intervals (Pillar 1) &rarr;
                </Link>
                <Link
                  href="/lessons/theory/scales"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-base"
                >
                  Explore Scales & CAGED (Pillar 2) &rarr;
                </Link>
                <Link
                  href="/lessons/practice/fretboard-trainer"
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-base"
                >
                  Launch Fretboard Trainer 🎯
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

