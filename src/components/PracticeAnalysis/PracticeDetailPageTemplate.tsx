"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import { getPracticeData, PracticeDetailData } from '@/lib/practiceData';
import RelatedContentSection from '@/components/RelatedContent/RelatedContentSection';
import AdSlot from '@/components/Revenue/AdSlot';
import GearRecommendations from '@/components/Revenue/GearRecommendations';
import Breadcrumbs from '@/components/Breadcrumbs';
import SequentialNav from '@/components/SequentialNav';
import { getSequentialNav } from '@/lib/sequentialNav';
import { getDifficultyColor } from '@/utils/theme';

interface Props {
  practiceSlug: string;
  displayName: string;
}

export default function PracticeDetailPageTemplate({ practiceSlug }: Props) {
  const data: PracticeDetailData = getPracticeData(practiceSlug);
  const pathname = `/lessons/practice/${data.category}/${practiceSlug}`;
  const nav = getSequentialNav('practice', practiceSlug, { category: data.category });

  return (
    <Layout>
      <Header
        title={data.pageInfo.pageTitle}
        subtitle={data.pageInfo.subtitle}
        category="Practice Drills & Routines"
      />

      <div className="min-h-screen bg-slate-950 text-slate-100 py-8">
        <main className="max-w-6xl mx-auto px-4">
          <Breadcrumbs pathname={pathname} pageTitle={data.pageInfo.heroTitle} />

          {/* Hero Section */}
          <div className="bg-slate-900/90 rounded-xl p-8 mb-12 border border-slate-800 shadow-xl">
            <h1 className="text-3xl font-bold text-white mb-4">{data.pageInfo.heroTitle}</h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-4xl">{data.pageInfo.heroDescription}</p>
          </div>

          {/* Practice Guidelines */}
          <div className="bg-slate-900/90 rounded-xl border border-slate-800 shadow-xl p-6 mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">{data.guidelines.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.guidelines.columns.map((col, i) => (
                <div key={i} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
                  <h3 className="text-lg font-semibold text-amber-400 mb-3">{col.title}</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    {col.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-amber-400">•</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Exercise Sections */}
          {data.sections.map((section, si) => (
            <section key={si} className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 pb-3 border-b border-slate-800">{section.title}</h2>
              <div className="space-y-8">
                {section.exercises.map((ex) => (
                  <div key={ex.number} className="bg-slate-900/90 rounded-xl border border-slate-800 shadow-xl p-6 hover:border-slate-700 transition-all">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <div className="w-8 h-8 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center font-bold text-sm">
                        {ex.number}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{ex.title}</h3>
                      <span className={`px-3 py-0.5 text-xs rounded-full border ${getDifficultyColor(ex.difficulty)}`}>
                        {ex.difficulty}
                      </span>
                    </div>

                    <div className="mb-4">
                      <p className="text-slate-300 leading-relaxed mb-3">{ex.description}</p>

                      {ex.patternNote && (
                        <div className="bg-slate-950/80 rounded-lg p-3 mb-4 border border-slate-800">
                          <p className="text-slate-300 text-sm">{ex.patternNote.text}</p>
                        </div>
                      )}
                    </div>

                    {/* Chord Diagrams */}
                    {ex.chordDiagrams && ex.chordDiagrams.length > 0 && (
                      <div className="flex flex-wrap gap-6 items-center justify-center mb-6 bg-slate-950/80 rounded-xl border border-slate-800 p-6">
                        {ex.chordDiagrams.map((cd, ci) => (
                          <React.Fragment key={ci}>
                            {ci > 0 && <div className="text-2xl text-slate-600">&rarr;</div>}
                            <div className="text-center">
                              <div className="font-semibold text-slate-200 mb-2">{cd.label}</div>
                              <SimpleFretboardDiagram chord={cd.chord} />
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    )}

                    {/* Notation */}
                    {ex.notation && (
                      <div className="mb-4 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                        <AlphaTexRenderer
                          alphaTex={ex.notation.alphaTex}
                          title={ex.notation.title}
                          tempo={ex.practiceNotes?.tempo ? parseInt(ex.practiceNotes.tempo) || undefined : undefined}
                        />
                      </div>
                    )}

                    {/* Practice Notes */}
                    {ex.practiceNotes && (
                      <div className="mt-6 bg-slate-950/80 rounded-lg p-4 border border-slate-800">
                        <h4 className="font-medium text-amber-400 mb-2">{ex.practiceNotes.title}</h4>
                        <p className="text-slate-300 text-sm leading-relaxed mb-3">{ex.practiceNotes.text}</p>
                        {ex.practiceNotes.tempo && (
                          <div className="flex items-center justify-center bg-slate-900 border border-slate-800 rounded-md py-2 px-4">
                            <span className="text-emerald-400 font-medium text-sm">Suggested starting tempo: {ex.practiceNotes.tempo}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Tips Section */}
          {data.tips && data.tips.items.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 pb-3 border-b border-slate-800">{data.tips.title}</h2>
              <div className={`grid md:grid-cols-${Math.min(data.tips.items.length, 2)} gap-6`}>
                {data.tips.items.map((tip, i) => (
                  <div key={i} className="bg-slate-900/90 rounded-xl p-6 border border-slate-800 shadow-xl">
                    <h3 className="text-lg font-semibold text-amber-400 mb-4">{tip.title}</h3>
                    <ul className="space-y-3">
                      {(tip.items || []).map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="text-amber-400 mt-1">•</span>
                          <span className="text-slate-300 text-sm">{item}</span>
                        </li>
                      ))}
                      {(tip.challenges || []).map((challenge: { title: string; text: string }, j: number) => (
                        <li key={`c-${j}`} className="flex items-start gap-3">
                          <span className="text-amber-400 mt-1">•</span>
                          <span className="text-slate-300 text-sm"><strong className="text-white">{challenge.title}:</strong> {challenge.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Gear Recommendations */}
          {data.gearRecommendations && data.gearRecommendations.items.length > 0 && (
            <GearRecommendations
              title={data.gearRecommendations.title}
              items={data.gearRecommendations.items}
            />
          )}

          <AdSlot slotId="content-bottom" format="banner" />

          <RelatedContentSection contentId={`practice:${practiceSlug}`} />

          {/* Journey Section */}
          {data.journeySection && (
            <div className="bg-slate-900/90 rounded-xl p-8 border border-slate-800 shadow-xl mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">{data.journeySection.title}</h2>
              <p className="text-slate-400 mb-8 text-center max-w-2xl mx-auto">{data.journeySection.description}</p>
              <div className="grid md:grid-cols-3 gap-6">
                {data.journeySection.links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="group bg-slate-950/80 rounded-xl p-6 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900/80 transition-all duration-300 text-center flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">{link.icon}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors mb-2">{link.title}</h3>
                      <p className="text-sm text-slate-400 mb-4">{link.description}</p>
                    </div>
                    <span className="text-emerald-400 font-medium text-sm group-hover:text-emerald-300">{link.linkText} &rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
          <SequentialNav nav={nav} typeLabel="Exercise" />
        </main>
      </div>
    </Layout>
  );
}
