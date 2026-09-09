"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getPracticeIndexData, PracticeIndexData } from '@/lib/practiceData';

interface Props {
  category: string;
}

export default function PracticeIndexPageTemplate({ category }: Props) {
  const data: PracticeIndexData = getPracticeIndexData(category);

  return (
    <Layout>
      <Header
        title={data.pageTitle}
        subtitle={data.subtitle}
        category="Practice Drills & Routines"
      />
      <div className="min-h-screen bg-slate-950 text-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <Breadcrumbs pathname={`/lessons/practice/${category}`} pageTitle={data.pageTitle} />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">{data.heroIcon}</div>
            <h1 className="text-4xl font-bold text-white mb-6">{data.heroTitle}</h1>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">{data.heroDescription}</p>
          </div>

          {/* Intro Section */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">{data.introSection.title}</h2>

              {/* Benefits/Items Grid */}
              {data.introSection.items && data.introSection.items.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  {data.introSection.items.map((item, i) => (
                    <div key={i} className="text-center p-6 bg-slate-950/80 rounded-xl border border-slate-800/80">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              {data.introSection.description && (
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed text-center">{data.introSection.description}</p>
                </div>
              )}

              {/* Columns */}
              {data.introSection.columns && data.introSection.columns.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {data.introSection.columns.map((col, i) => (
                    <div key={i} className="bg-slate-950/80 rounded-xl p-6 border border-slate-800">
                      <h3 className="text-xl font-semibold text-amber-400 mb-4">{col.title}</h3>
                      <ul className="text-slate-300 space-y-2 text-sm">
                        {col.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="text-amber-400">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Tips Section */}
          {data.introSection.tips && data.introSection.tips.length > 0 && (
            <section className="mb-16">
              <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Tips</h2>
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.introSection.tips.map((tip, i) => (
                      <div key={i} className="bg-slate-950/80 rounded-xl p-6 border-l-4 border-amber-500 border border-slate-800">
                        <div className="flex items-center mb-3">
                          <span className="text-2xl mr-3">{tip.icon}</span>
                          <h3 className="text-lg font-semibold text-white">{tip.title}</h3>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm">{tip.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Progressive Steps */}
          {data.introSection.progressiveSteps && data.introSection.progressiveSteps.length > 0 && (
            <section className="mb-16">
              <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Progressive Structure</h2>
                <div className="max-w-4xl mx-auto">
                  <div className="space-y-6">
                    {data.introSection.progressiveSteps.map((step, i) => (
                      <div key={i} className="flex items-start bg-slate-950/80 rounded-xl p-5 border border-slate-800">
                        <div className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 mt-1 flex-shrink-0 text-lg">
                          {step.icon || step.number || i + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                          {step.description && <p className="text-slate-400 text-sm mb-2 leading-relaxed">{step.description}</p>}
                          {step.items && step.items.length > 0 && (
                            <ul className="text-slate-300 space-y-1 mt-1 text-sm">
                              {step.items.map((item, j) => (
                                <li key={j} className="flex items-start gap-2">
                                  <span className="text-emerald-400">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Item Types Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Explore Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.itemTypes.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="bg-slate-900/90 rounded-xl p-6 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group flex flex-col justify-between"
                >
                  <div className="text-center">
                    <div className="mb-4 group-hover:scale-110 transition-transform">
                      <span style={{ fontSize: 32 }}>{item.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">{item.name}</h3>
                    {(item.difficulty || item.duration) && (
                      <div className="flex justify-center gap-2 mb-3">
                        {item.difficulty && (
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                            item.difficulty === 'Beginner' ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' :
                            item.difficulty === 'Intermediate' ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30' :
                            item.difficulty === 'Advanced' ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30' :
                            'bg-slate-800 text-slate-300 border border-slate-700'
                          }`}>
                            {item.difficulty}
                          </span>
                        )}
                        {item.duration && (
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30">
                            {item.duration}
                          </span>
                        )}
                      </div>
                    )}
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Journey Section */}
          {data.journeySection && (
            <section className="text-center">
              <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-white mb-6">{data.journeySection.title}</h2>
                <p className="text-slate-400 mb-8 max-w-2xl mx-auto">{data.journeySection.description}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {data.journeySection.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 rounded-lg transition-colors border border-emerald-500/30 shadow-lg shadow-emerald-950/40"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </Layout>
  );
}
