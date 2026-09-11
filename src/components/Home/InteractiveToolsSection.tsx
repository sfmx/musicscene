"use client";

import React from 'react';
import Link from 'next/link';

export default function InteractiveToolsSection() {
  const tools = [
    {
      id: 'fretboard-trainer',
      title: 'Fretboard Note Hunt & Trainer',
      badge: '🔥 Audio Game • 15 Frets',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      description: 'Master the fretboard with our gamified note finder. Locate every instance of any note across 15 frets, hear real-time audio playback, and unlock victory fanfare celebrations.',
      features: [
        'Gamified Note Hunt mode with timer & accuracy counter',
        'Interactive scale pattern & chord arpeggiator modes',
        'Built-in Web Audio synthesis & victory arpeggio',
        'Full 15-fret board coverage with open strings',
      ],
      href: '/lessons/practice/fretboard-trainer',
      cta: 'Play Note Hunt Game',
      icon: '🎯',
      gradient: 'from-emerald-900/40 via-slate-900 to-slate-950',
      borderHover: 'hover:border-emerald-500/50',
      buttonBg: 'bg-emerald-600 hover:bg-emerald-500 text-white',
    },
    {
      id: 'progression-player',
      title: 'Chord Progression Jam Player',
      badge: '🎧 Realistic Backing Tracks',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      description: 'Jam over realistic synthesized backing tracks. Dial in your BPM, transpose across keys on the fly, and visualize chord voicings and Roman numeral steps in real time.',
      features: [
        'Realistic Web Audio backing tracks with tempo control',
        'Instant key transposition (Major & Minor keys)',
        'Fretboard chord voicing diagrams & fingerings',
        'Covers ii-V-I, Andalusian, 12-Bar Blues & Pop loops',
      ],
      href: '/lessons/practice/progression-player',
      cta: 'Start Jam Session',
      icon: '🎸',
      gradient: 'from-blue-900/40 via-slate-900 to-slate-950',
      borderHover: 'hover:border-blue-500/50',
      buttonBg: 'bg-blue-600 hover:bg-blue-500 text-white',
    },
    {
      id: 'why-songs-work',
      title: '"Why Songs Work" Harmonic Explorer',
      badge: '💡 107 Song Breakdowns',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      description: 'Uncover the secret theoretical devices that make legendary songs irresistible: modal mixture, descending basslines, Mixolydian swagger, and psychological key shifts.',
      features: [
        'Explore 107 songs filtered by harmonic device',
        'Step-by-step Roman numeral progression analyses',
        'Voice leading insights & guitar fretboard mechanics',
        'Actionable songwriter takeaways for your own tracks',
      ],
      href: '/lessons/songs/why-songs-work',
      cta: 'Explore Harmonic Secrets',
      icon: '💡',
      gradient: 'from-amber-900/40 via-slate-900 to-slate-950',
      borderHover: 'hover:border-amber-500/50',
      buttonBg: 'bg-amber-600 hover:bg-amber-500 text-slate-950 font-black',
    },
    {
      id: 'cheat-sheet',
      title: 'Printable Fretboard Cheat Sheet',
      badge: '📄 Free 3-Page Vector PDF',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      description: 'Download our high-resolution 3-page printable reference. Features the root note compass, interval geometric shapes (3rds, 5ths, 7ths), and the complete CAGED system.',
      features: [
        'Instant download — no spam, 100% free vector PDF',
        'Page 1: Fretboard root note roadmap & octave compass',
        'Page 2: Interval geometry & triad building blocks',
        'Page 3: CAGED chord forms & pentatonic box shapes',
      ],
      href: '/downloads/fretboard-cheat-sheet',
      cta: 'Download Free PDF Guide',
      icon: '📄',
      gradient: 'from-purple-900/40 via-slate-900 to-slate-950',
      borderHover: 'hover:border-purple-500/50',
      buttonBg: 'bg-purple-600 hover:bg-purple-500 text-white',
    },
  ];

  return (
    <section id="interactive-tools" className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-3 shadow-xs">
            <span>⚡ Interactive Web Utilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Interactive Tools Designed for Active Playing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Passive reading doesn&apos;t build muscle memory. Hear the notes, train your fretboard reflexes, and jam along directly in your browser.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className={`bg-white dark:bg-gradient-to-br dark:${tool.gradient} rounded-2xl p-7 sm:p-8 border border-slate-200 dark:border-slate-800 transition-all duration-300 ${tool.borderHover} shadow-sm hover:shadow-xl dark:hover:shadow-2xl flex flex-col justify-between group`}
            >
              <div>
                {/* Header with Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${tool.badgeColor}`}>
                    {tool.badge}
                  </span>
                  <span className="text-3xl p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                  {tool.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {tool.description}
                </p>

                {/* Feature Checklist */}
                <ul className="space-y-2 mb-8 text-xs text-slate-600 dark:text-slate-300">
                  {tool.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Link
                href={tool.href}
                className={`w-full py-3.5 px-5 rounded-xl font-bold text-sm text-center transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group-hover:gap-3 ${tool.buttonBg}`}
              >
                <span>{tool.cta}</span>
                <span className="transition-transform group-hover:translate-x-1">➔</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

