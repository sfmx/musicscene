"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getCategoryRootData } from '@/lib/categoryRootData';

interface Props {
  category: string;
}

export default function CategoryRootPageTemplate({ category }: Props) {
  const data = getCategoryRootData(category);

  return (
    <Layout>
      <Header
        title={data.pageTitle}
        subtitle={data.subtitle}
        category={
          category === 'practice'
            ? '🎯 Guitar Practice Curriculum'
            : '🎼 Music Theory Curriculum'
        }
        badges={
          category === 'practice'
            ? [
                { label: 'Phases', value: 'Warm-up, Technique, Repertoire, Improv' },
                { label: 'Tools', value: 'Metronome, Journal, Fretboard Trainer' },
              ]
            : [
                { label: 'Pillars', value: 'Intervals, Scales, Chords, Modes, Progressions' },
                { label: 'System', value: 'Visual Fretboard & CAGED Patterns' },
              ]
        }
      />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <Breadcrumbs pathname={`/lessons/${category}`} pageTitle={data.pageTitle} />

          {/* Hero Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="text-6xl mb-6">{data.heroIcon}</div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
              {data.pageTitle}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {data.heroDescription}
            </p>
          </div>

          {/* Philosophy/Benefits */}
          <section className="mb-16">
            <div className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 sm:p-8 backdrop-blur-xs">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                {data.philosophySection.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.philosophySection.items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 dark:bg-slate-950/80 rounded-xl p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Learning Path */}
          {data.learningPath && (
            <section className="mb-16">
              <div className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                  {data.learningPath.title}
                </h2>
                <div className="space-y-6">
                  {data.learningPath.steps.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Practice Structure */}
          {data.practiceStructure && (
            <section className="mb-16">
              <div className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                  {data.practiceStructure.title}
                </h2>
                <div className="space-y-4">
                  {data.practiceStructure.phases.map((phase, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800"
                    >
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="text-base font-bold text-slate-900 dark:text-white">
                            {phase.phase}
                          </h3>
                          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 px-2.5 py-0.5 rounded-full">
                            {phase.duration}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {data.practiceStructure.tip && (
                  <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-900 dark:text-amber-300 text-sm">
                    <strong>💡 Pro Tip:</strong> {data.practiceStructure.tip}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Topic Cards */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              {data.topicCards.sectionTitle}
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {data.topicCards.items.map((topic) => (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className="relative bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-amber-500/60 dark:hover:border-amber-400/60 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between"
                >
                  {topic.step !== undefined && (
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-amber-500 text-slate-950 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {topic.step}
                    </div>
                  )}
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                      {topic.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                    {topic.concepts.map((concept, j) => (
                      <div
                        key={j}
                        className="text-xs bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800/80 rounded px-2.5 py-1 font-mono"
                      >
                        {concept}
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Practice Tools */}
          {data.practiceTools && (
            <section className="mb-16">
              <div className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                  {data.practiceTools.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {data.practiceTools.items.map((tool, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-xl p-6"
                    >
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-4">{tool.icon}</span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {tool.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {tool.description}
                      </p>
                      <ul className="space-y-2">
                        {tool.tips.map((tip, j) => (
                          <li
                            key={j}
                            className="text-xs text-slate-600 dark:text-slate-400 flex items-start"
                          >
                            <span className="text-amber-500 mr-2 mt-0.5">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Additional Sections */}
          {data.additionalSections &&
            data.additionalSections.map((section, i) => (
              <section key={i} className="mb-16">
                <div className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                    {section.title}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {section.columns.map((col, j) => (
                      <div key={j}>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                          {col.title}
                        </h3>
                        {col.text && (
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                            {col.text}
                          </p>
                        )}
                        {col.items && (
                          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2">
                            {col.items.map((item, k) => (
                              <li key={k} className="flex items-start gap-2">
                                <span className="text-amber-500">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {col.cards && (
                          <div className="space-y-4">
                            {col.cards.map((card, k) => (
                              <div
                                key={k}
                                className="rounded-xl p-4 border bg-slate-50 dark:bg-slate-950/80 border-slate-200 dark:border-slate-800"
                              >
                                <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">
                                  {card.title}
                                </h4>
                                <p className="text-xs text-slate-600 dark:text-slate-300">
                                  {card.text}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}

          {/* Getting Started */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent pointer-events-none" />
              <h2 className="text-3xl font-black text-white mb-4 tracking-tight">
                {data.gettingStarted.title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
                {data.gettingStarted.description}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {data.gettingStarted.links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="px-6 py-3 rounded-xl font-bold text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {link.label}
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
