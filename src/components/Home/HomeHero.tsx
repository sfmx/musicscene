"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function HomeHero() {
  const [activeTab, setActiveTab] = useState<'method' | 'tab' | 'theory'>('method');

  return (
    <section className="relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden pt-12 pb-20 border-b border-slate-200 dark:border-slate-800 transition-colors">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_20%,_var(--tw-gradient-stops))] from-blue-500/20 dark:from-blue-600 dark:via-purple-900 to-transparent" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-amber-600 dark:text-amber-300 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span>The Fretboard Connection</span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span className="text-slate-600 dark:text-slate-300">Between Tab & Theory</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              Stop Memorizing Tabs.{' '}
              <span className="block mt-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 dark:from-amber-400 dark:via-orange-300 dark:to-yellow-200 bg-clip-text text-transparent">
                Start Understanding The Music.
              </span>
            </h1>

            {/* Subtitle / Philosophy */}
            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Tabs tell you <strong className="text-slate-900 dark:text-white font-semibold">where</strong> to put your fingers, but never <strong className="text-slate-900 dark:text-white font-semibold">why</strong> it works. Textbooks drown you in abstract notation that never touches your fretboard.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <strong className="text-amber-600 dark:text-amber-400">MusicScene bridges the gap:</strong> We deconstruct 100+ iconic songs note-for-note, reveal the harmonic secrets behind every chord progression, and equip you with interactive tools to master the fretboard.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#song-library"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-base"
              >
                <span>🎸</span>
                <span>Explore 100+ Song Analyses</span>
              </a>
              <a
                href="#interactive-tools"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-base shadow-xs"
              >
                <span>🎯</span>
                <span>Launch Interactive Tools</span>
              </a>
            </div>

            {/* Trust / Metric Badges */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="bg-white dark:bg-slate-900/40 p-3 rounded-xl border border-slate-200 dark:border-slate-800/60 shadow-xs">
                <div className="text-2xl font-black text-amber-500 dark:text-amber-400">107</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Song Breakdowns</div>
              </div>
              <div className="bg-white dark:bg-slate-900/40 p-3 rounded-xl border border-slate-200 dark:border-slate-800/60 shadow-xs">
                <div className="text-2xl font-black text-blue-600 dark:text-blue-400">3</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Interactive Audio Tools</div>
              </div>
              <div className="bg-white dark:bg-slate-900/40 p-3 rounded-xl border border-slate-200 dark:border-slate-800/60 shadow-xs">
                <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">100%</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Free Fretboard PDF</div>
              </div>
              <div className="bg-white dark:bg-slate-900/40 p-3 rounded-xl border border-slate-200 dark:border-slate-800/60 shadow-xs">
                <div className="text-2xl font-black text-purple-600 dark:text-purple-400">400+</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Theory & Gear Guides</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Comparison Card "Tab vs. Theory vs. MusicScene" */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl dark:shadow-2xl p-6 relative overflow-hidden backdrop-blur-sm">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Case Study</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 font-semibold border border-amber-500/20">
                    Hotel California
                  </span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">The 3 Approaches</div>
              </div>

              {/* Selector Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/80 mb-5">
                <button
                  onClick={() => setActiveTab('method')}
                  className={`py-2 px-2 text-xs font-bold rounded-lg transition-all text-center cursor-pointer ${
                    activeTab === 'method'
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  ⚡ MusicScene
                </button>
                <button
                  onClick={() => setActiveTab('tab')}
                  className={`py-2 px-2 text-xs font-bold rounded-lg transition-all text-center cursor-pointer ${
                    activeTab === 'tab'
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  🎸 Tab Only
                </button>
                <button
                  onClick={() => setActiveTab('theory')}
                  className={`py-2 px-2 text-xs font-bold rounded-lg transition-all text-center cursor-pointer ${
                    activeTab === 'theory'
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  📚 Theory Only
                </button>
              </div>

              {/* Tab Content 1: MusicScene Method (Recommended) */}
              {activeTab === 'method' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="bg-slate-50 dark:bg-slate-950/80 p-4 rounded-xl border border-amber-500/30">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">Harmonic Engine in Action</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-400/10 text-amber-700 dark:text-amber-300">Bm Andalusian Cadence</span>
                    </div>
                    <div className="font-mono text-xs text-amber-900 dark:text-amber-200 bg-amber-50 dark:bg-slate-900/90 p-2.5 rounded-lg border border-amber-200 dark:border-slate-800 mb-2">
                      Progression: Bm ➔ <span className="text-amber-700 dark:text-yellow-300 font-bold underline">F# (Major V)</span> ➔ A ➔ E
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      Instead of memorizing frets, you see <strong className="text-slate-900 dark:text-white">why</strong> the second chord sounds so haunting:
                    </p>
                    <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 mt-2 pl-3 border-l-2 border-amber-500">
                      <li>
                        <strong className="text-amber-700 dark:text-amber-300">The Borrowed V Chord:</strong> Standard B natural minor has an <code className="text-amber-700 dark:text-amber-200">F#m</code> chord. The Eagles borrowed <code className="text-amber-800 dark:text-yellow-300 font-bold">F# Major</code> from B Harmonic Minor with the sharp 7th (<code className="text-amber-700 dark:text-amber-200">A#</code>).
                      </li>
                      <li>
                        <strong className="text-amber-700 dark:text-amber-300">The Voice Leading Line:</strong> Creates the iconic descending chromatic bassline: <code className="text-slate-900 dark:text-white">B ➔ A# ➔ A ➔ G#</code>.
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-slate-500 dark:text-slate-400">Result: Full creative freedom</span>
                    <Link
                      href="/lessons/songs/song-analysis/hotel-california/#why-it-works"
                      className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 inline-flex items-center gap-1 hover:underline"
                    >
                      Read full breakdown ➔
                    </Link>
                  </div>
                </div>
              )}

              {/* Tab Content 2: Tab Only */}
              {activeTab === 'tab' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="bg-slate-50 dark:bg-slate-950/80 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                    <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Mechanical Fret Numbers</div>
                    <pre className="font-mono text-[11px] text-slate-800 dark:text-slate-300 bg-white dark:bg-slate-900 p-2.5 rounded-lg overflow-x-auto leading-relaxed border border-slate-200 dark:border-slate-800">
{`e|-------2-----------2-----------0-----|
B|-----3---3-------2---2-------0---0---|
G|---4-------4---3-------3---0-------0-|
D|-------------4-----------2-----------|
A|-2-----------------------------------|
E|-------------------------------------|`}
                    </pre>
                    <div className="mt-3 p-2.5 rounded bg-red-100 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 text-xs text-red-800 dark:text-red-200">
                      <strong>The Problem:</strong> You memorize numbers like a robot. If someone changes the key or asks you to solo over this chord, you are completely lost.
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content 3: Theory Only */}
              {activeTab === 'theory' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="bg-slate-50 dark:bg-slate-950/80 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                    <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Abstract Notation</div>
                    <div className="font-mono text-xs text-blue-800 dark:text-blue-300 bg-blue-50 dark:bg-slate-900 p-3 rounded-lg border border-blue-200 dark:border-slate-800 leading-relaxed">
                      Key: B Minor (2 Sharps)<br />
                      Formula: i - V - VII - IV - VI - III - iv - V<br />
                      Voice leading via descending tetrachord in soprano voice.
                    </div>
                    <div className="mt-3 p-2.5 rounded bg-amber-100 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-xs text-amber-800 dark:text-amber-200">
                      <strong>The Problem:</strong> Theoretical rules on manuscript paper with no connection to the guitar fretboard, hand grips, or musical phrasing.
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Quick-Jump to Free PDF */}
              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <span>📄</span> Want a physical desk reference?
                </span>
                <Link
                  href="/downloads/fretboard-cheat-sheet"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold hover:underline"
                >
                  Get Free Cheat Sheet PDF ➔
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

