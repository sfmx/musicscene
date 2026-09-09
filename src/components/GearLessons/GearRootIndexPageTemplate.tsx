"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getGearRootIndexData } from '@/lib/gearLessonData';

export default function GearRootIndexPageTemplate() {
  const data = getGearRootIndexData();

  return (
    <Layout>
      <Header
        title={data.pageTitle}
        subtitle={data.subtitle}
        category="🎸 Guitar Gear &amp; Tone Lab"
        badges={[
          { label: 'Tone Lab', value: 'Signal Chain & Amps' },
          { label: 'Guitars', value: 'Electric, Acoustic & Bass' },
          { label: 'Pedals', value: 'Gain, Modulation & Time' },
        ]}
      />
      <div className="min-h-screen bg-slate-950 text-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <Breadcrumbs pathname="/lessons/gear" pageTitle={data.pageTitle} />

          {/* Hero Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="text-6xl mb-4">{data.heroIcon}</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">{data.pageTitle}</h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">{data.subtitle}</p>
          </div>

          {/* Gear Philosophy */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Smart Gear Philosophy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.gearPhilosophy.map((item, i) => (
                  <div key={i} className="bg-slate-950/80 rounded-xl border border-slate-800 p-6 text-center hover:border-slate-700 transition-colors">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Signal Chain */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Understanding Your Signal Chain</h2>
              <div className="flex flex-wrap justify-center items-center gap-4">
                {data.toneChain.map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-center min-w-[140px]">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h3 className="font-bold text-cyan-300 text-sm mb-1">{item.component}</h3>
                      <p className="text-slate-400 text-xs">{item.description}</p>
                    </div>
                    {i < data.toneChain.length - 1 && (
                      <span className="text-xl text-cyan-400 font-bold">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>

          {/* Budget Guide */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Budget Planning Guide</h2>
              <div className="flex flex-col gap-6">
                {data.budgetGuide.map((level, i) => (
                  <div key={i} className="bg-slate-950/80 rounded-xl border border-slate-800 p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-xl font-bold text-white">{level.category}</h3>
                      <span className="px-3 py-1 bg-slate-900 border border-cyan-500/30 text-cyan-300 rounded-full text-xs font-mono font-bold">{level.budget}</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">{level.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs text-slate-400">
                      {level.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-1.5">
                          <span className="text-cyan-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Gear Categories */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Explore Gear Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.gearCategories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-900/60 hover:-translate-y-1 group flex flex-col justify-between"
                  >
                    <div className="text-center">
                      <div className="mb-4 group-hover:scale-110 transition-transform">
                        <span style={{ fontSize: 32 }}>{cat.icon}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">{cat.title}</h3>
                      <p className="text-xs text-slate-400 mb-4 leading-relaxed">{cat.description}</p>
                      <div className="flex flex-wrap justify-center gap-1.5">
                        {cat.concepts.map((concept, j) => (
                          <span key={j} className="text-[11px] bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-full text-slate-300">{concept}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800/80 text-center">
                      <span className="text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 uppercase tracking-wider">Explore Category &rarr;</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Maintenance Tips */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Maintenance &amp; Care</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.maintenanceTips.map((cat, i) => (
                  <div key={i} className="bg-slate-950/80 rounded-xl border border-slate-800 p-6">
                    <div className="text-2xl mb-3">{cat.icon}</div>
                    <h3 className="font-bold text-white mb-2 text-base">{cat.title}</h3>
                    <p className="text-slate-400 text-xs mb-3">{cat.description}</p>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {cat.tips.map((tip, j) => (
                        <li key={j} className="flex items-start gap-1.5">
                          <span className="text-cyan-400">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Buying Strategies */}
          <section className="mb-16">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Smart Buying Strategies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.buyingStrategies.map((strategy, i) => (
                  <div key={i} className="bg-slate-950/80 rounded-xl border border-slate-800 p-6">
                    <h3 className="font-bold text-amber-300 mb-4 text-base">{strategy.title}</h3>
                    <div className="space-y-3">
                      {strategy.items.map((item: { title?: string; description?: string; color?: string } | string, j: number) => (
                        typeof item === 'string' ? (
                          <p key={j} className="text-xs text-slate-300 flex items-start gap-1.5">
                            <span className="text-amber-400">•</span>
                            <span>{item}</span>
                          </p>
                        ) : (
                          <div key={j} className="bg-slate-900/90 rounded-lg p-3 border border-slate-800">
                            <h4 className="font-bold text-white text-xs">{item.title}</h4>
                            {item.description && <p className="text-xs text-slate-400 mt-1">{item.description}</p>}
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 rounded-2xl p-8 border border-slate-800 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-4">{data.gettingStarted.title}</h2>
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-sm">{data.gettingStarted.description}</p>
              <div className="flex flex-wrap justify-center gap-4">
                {data.gettingStarted.links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm shadow-lg shadow-cyan-900/20"
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
