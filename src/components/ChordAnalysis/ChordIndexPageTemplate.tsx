"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getChordIndexData, ChordIndexData } from '@/lib/chordData';

export default function ChordIndexPageTemplate() {
  const data: ChordIndexData = getChordIndexData();

  return (
    <Layout>
      <Header
        title={data.pageTitle}
        subtitle={data.subtitle}
        category="🎼 Music Theory Curriculum"
        badges={[
          { label: 'Harmony', value: 'Triads to 13ths' },
          { label: 'Voicings', value: 'Open, Barre & Inversions' },
          { label: 'Progressions', value: 'Songwriting Frameworks' },
        ]}
      />
      <div className="min-h-screen bg-slate-950 text-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <Breadcrumbs pathname="/lessons/theory/chords" pageTitle={data.pageTitle} />

          {/* Hero Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="text-6xl mb-4">{data.heroIcon}</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">{data.heroTitle}</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              {data.heroDescription}
            </p>
          </div>

          {/* What Are Chords */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">{data.whatAreChords.title}</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-base text-slate-300 mb-8 leading-relaxed text-center">{data.whatAreChords.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.whatAreChords.columns.map((col, index) => (
                    <div key={index} className="bg-slate-950/80 rounded-xl border border-slate-800 p-6">
                      <h3 className="text-xl font-bold text-cyan-300 mb-4">{col.title}</h3>
                      <ul className="text-slate-300 space-y-2 text-sm">
                        {col.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Chord Functions */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Harmonic Functions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.chordFunctions.map((func, index) => (
                  <div key={index} className="bg-slate-950/80 rounded-xl border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
                    <div>
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-2">{func.icon}</div>
                        <h3 className="text-lg font-bold text-white">{func.title}</h3>
                      </div>
                      <p className="text-sm text-slate-400 mb-4 text-center leading-relaxed">{func.description}</p>
                    </div>
                    <div className="space-y-3 pt-3 border-t border-slate-800/80">
                      <div>
                        <div className="text-xs font-semibold text-slate-300 mb-1.5">Common Chords:</div>
                        <div className="flex flex-wrap gap-1.5">
                          {func.chords.map((chord, chordIndex) => (
                            <span key={chordIndex} className="text-xs bg-slate-900 border border-slate-800 rounded px-2.5 py-1 text-cyan-300 font-mono">
                              {chord}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-300 mb-1">Feeling:</div>
                        <div className="text-xs text-amber-300 font-medium">{func.feeling}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Chord Construction Theory */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">{data.constructionFundamentals.title}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-6">{data.constructionFundamentals.triads.title}</h3>
                  <div className="space-y-4">
                    {data.constructionFundamentals.triads.items.map((item, index) => (
                      <div key={index} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
                        <h4 className="font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-cyan-300 text-sm font-mono">{item.formula}</p>
                        <p className="text-slate-400 text-xs mt-1">{item.example}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-300 mb-6">{data.constructionFundamentals.sevenths.title}</h3>
                  <div className="space-y-4">
                    {data.constructionFundamentals.sevenths.items.map((item, index) => (
                      <div key={index} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
                        <h4 className="font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-amber-300 text-sm font-mono">{item.formula}</p>
                        <p className="text-slate-400 text-xs mt-1">{item.example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chord Types Grid */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Essential Chord Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.chordTypes.map((chord) => (
                  <Link
                    key={chord.name}
                    href={chord.href}
                    className="bg-slate-950/80 rounded-xl border border-slate-800 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-900/60 hover:-translate-y-1 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-center mb-4">
                        <div className="mb-2">
                          <span style={{ fontSize: 32 }}>{chord.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">{chord.name}</h3>
                        <div className="text-xs font-mono text-cyan-300 bg-slate-900 border border-slate-800 rounded px-2.5 py-1 inline-block">
                          {chord.symbol}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p className="text-slate-400 text-xs leading-relaxed text-center">{chord.description}</p>
                        <div className="bg-slate-900/90 border border-slate-800/80 rounded-lg p-3 space-y-1.5 text-xs">
                          <div>
                            <span className="font-semibold text-slate-300">Formula: </span>
                            <span className="text-cyan-300 font-mono">{chord.formula}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-300">Intervals: </span>
                            <span className="text-slate-300">{chord.intervals}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-300">Mood: </span>
                            <span className="text-amber-300">{chord.mood}</span>
                          </div>
                        </div>
                        <div className="bg-slate-900/60 rounded-lg p-2.5 border border-slate-800/60">
                          <div className="text-[11px] font-semibold text-slate-400 mb-1">Examples:</div>
                          <div className="flex flex-wrap gap-1">
                            {chord.examples.map((example, index) => (
                              <span key={index} className="text-xs text-slate-300 font-mono bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800/80 text-center">
                      <span className="text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 uppercase tracking-wider">Explore Chord &rarr;</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Common Progressions */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-4 text-center">Essential Chord Progressions</h2>
              <p className="text-sm text-slate-400 mb-8 text-center max-w-3xl mx-auto">
                Chord progressions are the backbone of songs. These fundamental patterns appear across all genres
                and provide the harmonic framework for countless compositions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.commonProgressions.map((progression, index) => (
                  <div key={index} className="bg-slate-950/80 rounded-xl p-6 border border-slate-800">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white font-mono">{progression.name}</h3>
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded-full font-mono">
                        {progression.example}
                      </span>
                    </div>
                    <p className="text-slate-300 text-xs mb-4 leading-relaxed">{progression.description}</p>
                    <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-800/80">
                      <div>
                        <h4 className="text-xs font-semibold text-slate-400 mb-2">Genres:</h4>
                        <div className="flex flex-wrap gap-1">
                          {progression.genres.map((genre, genreIndex) => (
                            <span key={genreIndex} className="text-[11px] bg-slate-900 border border-slate-800 text-emerald-300 px-2 py-0.5 rounded">
                              {genre}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-slate-400 mb-2">Famous Songs:</h4>
                        <div className="space-y-1">
                          {progression.songs.map((song, songIndex) => (
                            <div key={songIndex} className="text-xs text-slate-300">{song}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Practice Exercises */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Practice Exercises</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.practiceExercises.map((exercise, index) => (
                  <div key={index} className="bg-slate-950/80 rounded-xl p-6 border border-slate-800">
                    <h3 className="text-base font-bold text-white mb-3">{exercise.title}</h3>
                    <p className="text-slate-400 mb-4 text-xs leading-relaxed">{exercise.description}</p>
                    <div className="space-y-2">
                      {exercise.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start gap-2">
                          <div className="bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            {stepIndex + 1}
                          </div>
                          <div className="text-xs text-slate-300">{step}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Harmonic Philosophy */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">{data.harmonicPhilosophy.title}</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-base text-slate-300 mb-6 leading-relaxed text-center">{data.harmonicPhilosophy.description}</p>
                <div className="bg-slate-950/80 rounded-xl p-6 border border-slate-800">
                  <h3 className="text-lg font-bold text-amber-300 mb-4">{data.harmonicPhilosophy.dailyRoutine.title}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {data.harmonicPhilosophy.dailyRoutine.columns.map((column, index) => (
                      <div key={index}>
                        <h4 className="font-bold text-white mb-2 text-sm">{column.title}</h4>
                        <ul className="text-slate-300 space-y-1.5 text-xs">
                          {column.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-amber-400 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
