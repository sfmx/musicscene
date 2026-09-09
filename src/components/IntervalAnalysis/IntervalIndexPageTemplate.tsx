"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getIntervalIndexData, IntervalIndexData } from '@/lib/intervalData';

export default function IntervalIndexPageTemplate() {
  const data: IntervalIndexData = getIntervalIndexData();

  return (
    <Layout>
      <Header
        title={data.pageTitle}
        subtitle={data.subtitle}
        category="🎼 Music Theory Curriculum"
        badges={[
          { label: 'Foundations', value: 'Musical DNA' },
          { label: 'Ear Training', value: 'Consonance & Dissonance' },
          { label: 'Fretboard', value: 'Shapes & Positions' },
        ]}
      />
      <div className="min-h-screen bg-slate-950 text-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <Breadcrumbs pathname="/lessons/theory/intervals" pageTitle={data.pageTitle} />

          {/* Hero Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="text-6xl mb-4">{data.heroIcon}</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">{data.heroTitle}</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              {data.heroDescription}
            </p>
          </div>

          {/* What Are Intervals */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">{data.whatAreIntervals.title}</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-base text-slate-300 mb-8 leading-relaxed text-center">{data.whatAreIntervals.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.whatAreIntervals.columns.map((col, index) => (
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

          {/* Interval Categories */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Interval Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.intervalCategories.map((category, index) => (
                  <div key={index} className="bg-slate-950/80 rounded-xl border border-slate-800 p-6 hover:border-slate-700 transition-colors">
                    <h3 className="text-lg font-bold text-white mb-3">{category.name}</h3>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">{category.description}</p>
                    <div className="space-y-1.5">
                      {category.intervals.map((interval, intervalIndex) => (
                        <div key={intervalIndex} className="text-xs bg-slate-900 border border-slate-800/80 rounded px-2.5 py-1 text-cyan-300 font-mono">
                          {interval}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Theory Fundamentals */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">{data.theoryFundamentals.title}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-4">{data.theoryFundamentals.measuring.title}</h3>
                  <div className="space-y-4">
                    {data.theoryFundamentals.measuring.items.map((item, index) => (
                      <div key={index} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
                        <h4 className="font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-400">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-300 mb-4">{data.theoryFundamentals.consonance.title}</h3>
                  <div className="space-y-4">
                    {data.theoryFundamentals.consonance.items.map((item, index) => (
                      <div key={index} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
                        <h4 className="font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-300">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* All Intervals Grid */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Complete Interval Reference</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {data.intervalTypes.map((interval) => (
                  <Link
                    key={interval.name}
                    href={interval.href}
                    className="bg-slate-950/80 rounded-xl border border-slate-800 p-5 transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-900/60 hover:-translate-y-1 group flex flex-col justify-between"
                  >
                    <div className="text-center">
                      <div className="mb-3 group-hover:scale-110 transition-transform">
                        <span style={{ fontSize: 32 }}>{interval.icon}</span>
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">{interval.name}</h3>
                      <div className="flex justify-center gap-1 mb-2">
                        <span className="inline-block px-2 py-0.5 rounded text-xs font-mono font-bold bg-slate-900 border border-slate-800 text-cyan-300">
                          {interval.semitones} ST
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed mb-3">{interval.description}</p>
                    </div>
                    <div className="text-center pt-2 border-t border-slate-800/80">
                      <span className="text-[11px] px-2.5 py-1 rounded-full font-medium bg-slate-900 border border-slate-800 text-slate-300">
                        {interval.consonance}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Musical Applications */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Musical Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.musicalApplications.map((application, index) => (
                  <div key={index} className="bg-slate-950/80 rounded-xl p-6 border border-slate-800">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">{application.icon}</span>
                      <h3 className="text-lg font-bold text-white">{application.title}</h3>
                    </div>
                    <p className="text-slate-300 text-sm mb-4">{application.description}</p>
                    <ul className="space-y-2">
                      {application.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-xs text-slate-400 flex items-start">
                          <span className="text-cyan-400 mr-2 mt-0.5">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Practice Exercises */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Interval Practice Exercises</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.practiceExercises.map((exercise, index) => (
                  <div key={index} className="bg-slate-950/80 rounded-xl p-6 border border-slate-800">
                    <h3 className="text-base font-bold text-cyan-300 mb-3 flex items-center gap-2">
                      <span>{exercise.icon}</span> {exercise.title}
                    </h3>
                    <ul className="text-slate-300 text-xs space-y-2">
                      {exercise.items.map((item, i) => (
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
          </section>

          {/* Common Progressions */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">{data.progressions.title}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-4">{data.progressions.chordConstruction.title}</h3>
                  <div className="space-y-3">
                    {data.progressions.chordConstruction.items.map((item, index) => (
                      <div key={index} className="bg-slate-950/80 rounded-xl p-4 border border-slate-800">
                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-xs text-cyan-300 font-mono mb-1">{item.formula}</p>
                        <p className="text-xs text-slate-400">{item.example}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-300 mb-4">{data.progressions.melodicMovement.title}</h3>
                  <div className="space-y-3">
                    {data.progressions.melodicMovement.items.map((item, index) => (
                      <div key={index} className="bg-slate-950/80 rounded-xl p-4 border border-slate-800">
                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-xs text-slate-300 mb-1">{item.description}</p>
                        <p className="text-xs text-amber-300/80">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Get Started */}
          <section>
            <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 rounded-2xl p-8 border border-slate-800 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">{data.journeySection.title}</h2>
              <p className="text-slate-400 mb-8 text-center max-w-2xl mx-auto text-sm">
                {data.journeySection.description}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {data.journeySection.links.map((link, i) => (
                  <Link
                    key={i}
                    href={`/lessons/theory/intervals/${link.slug}`}
                    className="group bg-slate-950/80 rounded-xl p-6 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-cyan-950/50 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-cyan-400/60 transition-colors">
                        <span className="text-2xl">{link.icon}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{link.title}</h3>
                      <p className="text-xs text-slate-400 mb-4">{link.description}</p>
                    </div>
                    <div className="text-center pt-3 border-t border-slate-800/80">
                      <span className="text-cyan-400 group-hover:text-cyan-300 font-semibold text-xs tracking-wide uppercase transition-colors">
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
