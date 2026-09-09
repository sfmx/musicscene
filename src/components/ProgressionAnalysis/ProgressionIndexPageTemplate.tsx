"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import { getProgressionIndexData, ProgressionIndexData } from '@/lib/progressionData';

export default function ProgressionIndexPageTemplate() {
  const data: ProgressionIndexData = getProgressionIndexData();

  return (
    <Layout>
      <Header
        title={data.pageTitle}
        subtitle={data.subtitle}
        category="🎼 Music Theory Curriculum"
        badges={[
          { label: 'Harmony', value: 'Cadences & Movement' },
          { label: 'Analysis', value: 'Roman Numeral System' },
          { label: 'Application', value: 'Songwriting & Jamming' },
        ]}
      />
      <div className="min-h-screen bg-slate-950 text-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <Breadcrumbs pathname="/lessons/theory/progressions" pageTitle={data.pageTitle} />

          {/* Hero Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="text-6xl mb-4">{data.heroIcon}</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">{data.heroTitle}</h1>
            <p className="text-lg text-slate-300 leading-relaxed">{data.heroDescription}</p>
          </div>

          {/* What Are Progressions */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">{data.whatAreProgressions.title}</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-base text-slate-300 mb-8 leading-relaxed text-center">{data.whatAreProgressions.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.whatAreProgressions.columns.map((col, i) => (
                    <div key={i} className="bg-slate-950/80 rounded-xl border border-slate-800 p-6">
                      <h3 className="text-xl font-bold text-cyan-300 mb-4">{col.title}</h3>
                      <ul className="text-slate-300 space-y-2 text-sm">
                        {col.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2">
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

          {/* Progression Categories */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Progression Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.progressionCategories.map((cat, i) => (
                  <div key={i} className="bg-slate-950/80 rounded-xl border border-slate-800 p-6 hover:border-slate-700 transition-colors">
                    <h3 className="text-lg font-bold text-white mb-3">{cat.name}</h3>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">{cat.description}</p>
                    <div className="space-y-1.5">
                      {cat.progressions.map((prog, j) => (
                        <div key={j} className="text-xs bg-slate-900 border border-slate-800/80 rounded px-2.5 py-1 text-amber-300 font-mono">{prog}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Harmonic Applications */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Harmonic Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.harmonicApplications.map((app, i) => (
                  <div key={i} className="bg-slate-950/80 rounded-xl p-6 border border-slate-800">
                    <div className="text-3xl mb-4 text-center">{app.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-3 text-center">{app.title}</h3>
                    <p className="text-sm text-slate-400 mb-4 text-center">{app.description}</p>
                    <div className="space-y-2">
                      {app.examples.map((ex, j) => (
                        <div key={j} className="text-xs text-slate-300 bg-slate-900/90 border border-slate-800/80 rounded px-3 py-2">{ex}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* All Progressions Grid */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Essential Chord Progressions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.progressionTypes.map((progression) => (
                  <Link
                    key={progression.name}
                    href={progression.href}
                    className="bg-slate-950/80 rounded-xl border border-slate-800 p-6 transition-all duration-300 hover:border-amber-500/50 hover:bg-slate-900/60 hover:-translate-y-1 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-2">
                          <span style={{ fontSize: 32 }}>{progression.icon}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">{progression.name}</h3>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs text-slate-400 text-center leading-relaxed">{progression.description}</p>
                        <div className="bg-slate-900/90 border border-slate-800/80 rounded-lg p-3 space-y-1.5 text-xs">
                          <div className="text-slate-300"><span className="font-semibold text-amber-300">Formula:</span> <span className="font-mono">{progression.formula}</span></div>
                          <div className="text-slate-300"><span className="font-semibold text-cyan-300">Function:</span> {progression.functionLabel}</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800/80 text-center">
                      <span className="text-xs font-semibold text-amber-400 group-hover:text-amber-300 uppercase tracking-wider">Explore Progression &rarr;</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Roman Numeral Analysis */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Roman Numeral Analysis</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-base text-slate-300 mb-8 leading-relaxed text-center">{data.romanNumerals.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.romanNumerals.sections.map((section, i) => (
                    <div key={i} className="bg-slate-950/80 rounded-xl p-6 border border-slate-800">
                      <h3 className="text-lg font-bold text-cyan-300 mb-4">{section.title}</h3>
                      <div className="space-y-2 text-slate-300 text-sm">
                        {section.items.map((item, j) => (
                          <p key={j} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-0.5">•</span>
                            <span>{item}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Example Chords in C Major */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Common Chords in C Major</h2>
              <div className="max-w-6xl mx-auto">
                <p className="text-base text-slate-300 mb-8 leading-relaxed text-center">{data.exampleChords.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {data.exampleChords.chords.map((chord, i) => (
                    <div key={i} className="text-center bg-slate-950/80 rounded-xl p-4 border border-slate-800">
                      <h4 className="font-bold mb-3 text-white">{chord.label}</h4>
                      <div className="flex justify-center">
                        <SimpleFretboardDiagram chord={chord.chord} />
                      </div>
                      <p className="text-xs text-amber-300 font-mono mt-2">{chord.subtitle}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-950/90 rounded-xl p-6 border border-amber-500/30">
                  <h3 className="text-xl font-bold text-amber-300 mb-4 text-center">{data.exampleChords.exampleProgression.title}</h3>
                  <div className="flex justify-center mb-4">
                    <AlphaTexRenderer alphaTex={data.exampleChords.exampleProgression.alphaTex} className="scale-75" />
                  </div>
                  <p className="text-slate-300 text-sm text-center">{data.exampleChords.exampleProgression.description}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Practice and Application */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Practice and Application</h2>
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.practiceExercises.map((exercise, i) => (
                    <div key={i} className="bg-slate-950/80 rounded-xl p-6 border border-slate-800">
                      <h3 className="text-lg font-bold text-cyan-300 mb-4 flex items-center gap-2">
                        <span>{exercise.icon}</span> {exercise.title}
                      </h3>
                      <ul className="space-y-2 text-slate-300 text-sm">
                        {exercise.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2">
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

          {/* Get Started */}
          <section>
            <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 rounded-2xl p-8 border border-slate-800 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">{data.journeySection.title}</h2>
              <p className="text-slate-400 mb-8 text-center max-w-2xl mx-auto text-sm">{data.journeySection.description}</p>
              <div className="grid md:grid-cols-3 gap-6">
                {data.journeySection.links.map((link, i) => (
                  <Link
                    key={i}
                    href={`/lessons/theory/progressions/${link.slug}`}
                    className="group bg-slate-950/80 rounded-xl p-6 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-amber-950/50 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-amber-400/60 transition-colors">
                        <span className="text-2xl">{link.icon}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">{link.title}</h3>
                      <p className="text-xs text-slate-400 mb-4">{link.description}</p>
                    </div>
                    <div className="text-center pt-3 border-t border-slate-800/80">
                      <span className="text-amber-400 group-hover:text-amber-300 font-semibold text-xs tracking-wide uppercase transition-colors">
                        {link.linkText} &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
