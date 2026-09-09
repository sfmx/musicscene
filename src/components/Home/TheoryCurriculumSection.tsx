"use client";

import React from 'react';
import Link from 'next/link';

export default function TheoryCurriculumSection() {
  const pillars = [
    {
      title: 'Scales & Fretboard Shapes',
      icon: '🎼',
      href: '/lessons/theory/scales',
      description: 'Master interlocking scale patterns across all 6 strings without getting trapped in box one.',
      topics: [
        { label: 'Minor Pentatonic', href: '/lessons/theory/scales/minor-pentatonic' },
        { label: 'Major Pentatonic', href: '/lessons/theory/scales/major-pentatonic' },
        { label: 'Blues Scale', href: '/lessons/theory/scales/blues' },
        { label: 'Natural Minor', href: '/lessons/theory/scales/minor' },
        { label: 'Major Scale', href: '/lessons/theory/scales/major' },
      ],
      borderHover: 'hover:border-amber-500/50',
      badge: '14 Scale Guides',
    },
    {
      title: 'Chord Voicings & Triads',
      icon: '🎸',
      href: '/lessons/theory/chords',
      description: 'Move beyond basic cowboy chords with movable barre grips, triad inversions, and rich 7th harmonies.',
      topics: [
        { label: 'Major Triads', href: '/lessons/theory/chords/major' },
        { label: 'Minor Triads', href: '/lessons/theory/chords/minor' },
        { label: '7th Chords', href: '/lessons/theory/chords/seventh' },
        { label: 'Extended Chords', href: '/lessons/theory/chords/extended' },
        { label: 'All Chords', href: '/lessons/theory/chords' },
      ],
      borderHover: 'hover:border-blue-500/50',
      badge: '17 Chord Guides',
    },
    {
      title: 'The 7 Modes Decoded',
      icon: '🔄',
      href: '/lessons/theory/modes',
      description: 'Understand the distinct mood of every mode and how guitar legends swap standard scales for modal swagger.',
      topics: [
        { label: 'Dorian Mode', href: '/lessons/theory/scales/dorian' },
        { label: 'Mixolydian Mode', href: '/lessons/theory/scales/mixolydian' },
        { label: 'Aeolian Mode', href: '/lessons/theory/scales/aeolian' },
        { label: 'Phrygian Mode', href: '/lessons/theory/scales/phrygian' },
        { label: 'All 7 Modes', href: '/lessons/theory/modes' },
      ],
      borderHover: 'hover:border-purple-500/50',
      badge: '7 Modes Matrix',
    },
    {
      title: 'Progressions & Cadences',
      icon: '🎹',
      href: '/lessons/theory/progressions',
      description: 'The harmonic equations that power 95% of recorded songs. Roman numeral formulas and functional harmony.',
      topics: [
        { label: 'ii - V - I Jazz', href: '/lessons/theory/progressions/ii-v-i' },
        { label: 'Andalusian Cadence', href: '/lessons/theory/progressions/andalusian-cadence' },
        { label: '12-Bar Blues', href: '/lessons/theory/progressions/12-bar-blues' },
        { label: 'Pop 4-Chord Loop', href: '/lessons/theory/progressions/i-v-vi-iv' },
        { label: 'All Progressions', href: '/lessons/theory/progressions' },
      ],
      borderHover: 'hover:border-emerald-500/50',
      badge: '16 Progression Guides',
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">
              <span>📚 Comprehensive Theory Roadmaps</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Theory That Actually Applies To Guitar
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-400 max-w-2xl">
              No abstract sheet music drills. Visual fretboard maps, interval geometry, and harmonic relationships engineered for guitarists.
            </p>
          </div>

          <Link
            href="/lessons/theory"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap self-start md:self-end hover:underline"
          >
            <span>Explore Full Theory Curriculum</span>
            <span>➔</span>
          </Link>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`bg-slate-950 rounded-2xl p-6 border border-slate-800 transition-all duration-300 ${pillar.borderHover} hover:shadow-xl flex flex-col justify-between group`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {pillar.badge}
                  </span>
                </div>

                {/* Title */}
                <Link href={pillar.href} className="block group-hover:text-amber-300 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                </Link>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {pillar.description}
                </p>

                {/* Subtopic Links */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {pillar.topics.map((t) => (
                    <Link
                      key={t.href + t.label}
                      href={t.href}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                    >
                      {t.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom Link */}
              <Link
                href={pillar.href}
                className="text-xs font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 hover:underline pt-3 border-t border-slate-800/80"
              >
                <span>Browse {pillar.title}</span>
                <span>➔</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

