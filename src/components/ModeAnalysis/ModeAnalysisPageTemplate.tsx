"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header, { HeaderBadge } from '@/components/Header';
import Link from 'next/link';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import { getModeData, ModeData } from '@/lib/modeData';
import RelatedContentSection from '@/components/RelatedContent/RelatedContentSection';
import AdSlot from '@/components/Revenue/AdSlot';
import SongsUsingThis from '@/components/CrossReferences/SongsUsingThis';
import Breadcrumbs from '@/components/Breadcrumbs';
import SequentialNav from '@/components/SequentialNav';
import { getSequentialNav } from '@/lib/sequentialNav';

interface ModeAnalysisPageTemplateProps {
  modeSlug: string;
  displayName?: string;
}

export default function ModeAnalysisPageTemplate({ modeSlug, displayName }: ModeAnalysisPageTemplateProps) {
  const data = getModeData(modeSlug);
  const nav = getSequentialNav('mode', modeSlug);

  if (!data) {
    return (
      <Layout>
        <Header
          title="Mode Not Found"
          subtitle={`Could not find mode data for "${modeSlug}"`}
          category="🎼 Modal Theory"
        />
        <div className="bg-slate-950 min-h-screen text-slate-100 pb-20">
          <main className="max-w-6xl mx-auto px-4 py-16 text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Mode Not Found</h1>
            <p className="text-slate-400 mb-8">The mode &quot;{modeSlug}&quot; could not be found.</p>
            <Link
              href="/lessons/theory/modes"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
            >
              <span className="mr-2">&larr;</span>Back to Modal Theory
            </Link>
          </main>
        </div>
      </Layout>
    );
  }

  const title = displayName || data.modeInfo.pageTitle;
  const badges: HeaderBadge[] = data.modeInfo.tags.map((tag, i) => ({
    label: tag,
    color: i === 0 ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' : i === 1 ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
  }));

  return (
    <Layout>
      <Header
        title={title}
        subtitle={data.modeInfo.subtitle}
        category="🎼 Modal Theory &amp; Harmony"
        badges={badges}
      />
      <div className="bg-slate-950 min-h-screen text-slate-100 pb-20">
        <main className="max-w-6xl mx-auto px-4 py-8">
          <Breadcrumbs pathname={`/lessons/theory/modes/${modeSlug}`} pageTitle={data.modeInfo.name} />

          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-purple-950/40 to-slate-900 border border-purple-500/30 p-8 mb-12 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
                <span>🎼</span> Modal Characteristic &amp; Fretboard Formula
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                {data.modeInfo.name}
              </h1>
              <p className="text-lg text-slate-300 mb-6 max-w-3xl leading-relaxed">
                {data.modeInfo.subtitle}
              </p>
              <div className="flex flex-wrap gap-2.5 text-xs font-medium">
                {data.modeInfo.tags.map((tag, i) => (
                  <span key={i} className="bg-slate-950/80 border border-slate-800 text-purple-300 px-3 py-1.5 rounded-lg font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Theory Fundamentals */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
              <span>📖</span> Theory Fundamentals
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-950/80 rounded-xl p-6 border border-slate-800">
                <h3 className="text-base font-bold text-cyan-300 mb-4">{data.theory.propertiesTitle}</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  {data.theory.properties.map((prop, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span><strong className="text-white">{prop.label}:</strong> {prop.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-950/80 rounded-xl p-6 border border-slate-800">
                <h3 className="text-base font-bold text-amber-300 mb-4">{data.theory.exampleTitle}</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  {data.theory.examples.map((ex, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5">•</span>
                      <span><strong className="text-white">{ex.label}:</strong> {ex.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Guitar Applications */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
              <span>🎸</span> Guitar Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-base font-bold text-cyan-300 mb-4">Fretboard Patterns</h3>
                <div className="space-y-4">
                  {data.guitarApplications.fretboardPatterns.map((pattern, i) => (
                    <div key={i} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
                      <h4 className="font-bold text-white mb-2">{pattern.title}</h4>
                      <p className="text-xs text-slate-300 mb-3 leading-relaxed">{pattern.description}</p>
                      {pattern.alphaTex && pattern.alphaTex !== '\\notrack' && (
                        <div className="bg-slate-900/90 rounded-lg p-2 border border-slate-800">
                          <AlphaTexRenderer alphaTex={pattern.alphaTex} className="scale-75" />
                        </div>
                      )}
                      {pattern.notes && pattern.notes.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-slate-800/80">
                          <p className="text-xs text-cyan-300 font-semibold mb-1">Pattern Notes:</p>
                          <div className="flex flex-wrap gap-1.5">
                            {pattern.notes.map((note, j) => (
                              <span key={j} className="text-xs bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-slate-200 font-mono">{note}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-amber-300 mb-4">Musical Applications</h3>
                <div className="space-y-4">
                  {data.guitarApplications.musicalApplications.map((app, i) => (
                    <div key={i} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
                      <h4 className="font-bold text-white mb-2">{app.title}</h4>
                      <p className="text-xs text-slate-300 mb-3 leading-relaxed">{app.description}</p>
                      <ul className="text-xs text-slate-400 space-y-1.5">
                        {app.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2">
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

          {/* Musical Examples */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
              <span>🎶</span> Musical Examples &amp; Famous Uses
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-base font-bold text-cyan-300 mb-4">Classic Examples</h3>
                <div className="space-y-4">
                  {data.musicalExamples.classic.map((ex, i) => (
                    <div key={i} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
                      <h4 className="font-bold text-white mb-1">{ex.title}</h4>
                      <p className="text-xs text-slate-300 mb-2 leading-relaxed">{ex.description}</p>
                      <p className="text-xs text-cyan-300 font-mono">{ex.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-amber-300 mb-4">Modern Applications</h3>
                <div className="space-y-4">
                  {data.musicalExamples.modern.map((ex, i) => (
                    <div key={i} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
                      <h4 className="font-bold text-white mb-1">{ex.title}</h4>
                      <p className="text-xs text-slate-300 mb-2 leading-relaxed">{ex.description}</p>
                      <p className="text-xs text-amber-300 font-mono">{ex.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Practice Exercises */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
              <span>⚡</span> Practice Exercises
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {data.practiceCategories.map((cat, i) => (
                <div key={i} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
                  <h3 className="text-base font-bold text-cyan-300 mb-3 flex items-center gap-2">
                    <span>{cat.icon}</span> {cat.title}
                  </h3>
                  <ul className="text-slate-300 text-xs space-y-2">
                    {cat.items.map((item, j) => (
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

          {/* Notated Exercises */}
          {data.notatedExercises && data.notatedExercises.length > 0 && (
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
                <span>🎼</span> Practice Exercises with Notation
              </h2>
              <div className="space-y-6">
                {data.notatedExercises.map((ex, i) => (
                  <div key={i} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
                    <h3 className="text-base font-bold text-white mb-2">{ex.title}</h3>
                    <p className="text-xs text-slate-300 mb-3">{ex.description}</p>
                    {ex.alphaTex && ex.alphaTex !== '\\notrack' && (
                      <div className="bg-slate-900/90 rounded-lg p-2 border border-slate-800">
                        <AlphaTexRenderer alphaTex={ex.alphaTex} className="scale-75" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scale Relationships */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
              <span>🔄</span> Scale Relationships &amp; Theory
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-base font-bold text-cyan-300 mb-4">Relationship to Other Scales</h3>
                <div className="space-y-3">
                  {data.scaleRelationships.relationships.map((rel, i) => (
                    <div key={i} className="bg-slate-950/80 rounded-xl p-4 border border-slate-800">
                      <h4 className="font-bold text-white mb-1 text-sm">{rel.title}</h4>
                      <p className="text-xs text-slate-400">{rel.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-amber-300 mb-4">Related Modes</h3>
                <div className="space-y-3">
                  {data.scaleRelationships.relatedModes.map((mode, i) => (
                    <div key={i} className="bg-slate-950/80 rounded-xl p-4 border border-slate-800">
                      <h4 className="font-bold text-white mb-1 text-sm">{mode.title}</h4>
                      <p className="text-xs text-slate-400">{mode.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Different Keys */}
          {data.keyVariants && data.keyVariants.length > 0 && (
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
                <span>🔑</span> {data.modeInfo.name} in Different Keys
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {data.keyVariants.map((kv, i) => (
                  <div key={i} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
                    <h3 className="text-base font-bold text-white mb-2">{kv.title}</h3>
                    <p className="text-xs text-slate-300 mb-3">{kv.description}</p>
                    {kv.alphaTex && kv.alphaTex !== '\\notrack' && (
                      <div className="bg-slate-900/90 rounded-lg p-2 border border-slate-800">
                        <AlphaTexRenderer alphaTex={kv.alphaTex} className="scale-75" />
                      </div>
                    )}
                    <p className="text-xs text-cyan-300 font-mono mt-2">{kv.notesLabel}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Scales */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
              <span>🎯</span> Related Scales &amp; Comparisons
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {data.relatedScales.map((scale, i) => (
                <div key={i} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
                  <h3 className="font-bold text-white mb-2 text-sm">{scale.title}</h3>
                  <p className="text-xs text-slate-300 mb-2">{scale.description}</p>
                  <p className="text-xs text-cyan-300 font-mono">{scale.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <SongsUsingThis type="mode" slug={modeSlug} />

          <AdSlot slotId="content-bottom" format="banner" />

          <RelatedContentSection contentId={`mode:${modeSlug}`} />

          {/* Continue Your Journey */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 rounded-2xl p-8 border border-slate-800 shadow-xl mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">{data.journeySection.title}</h2>
            <p className="text-slate-400 mb-8 text-center max-w-2xl mx-auto text-sm">{data.journeySection.description}</p>
            <div className="grid md:grid-cols-3 gap-6">
              {data.journeySection.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.slug === 'modes' ? '/lessons/theory/modes' : `/lessons/theory/modes/${link.slug}`}
                  className="group bg-slate-950/80 rounded-xl p-6 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-950/50 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-purple-400/60 transition-colors">
                      <span className="text-2xl">{link.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{link.title}</h3>
                    <p className="text-xs text-slate-400 mb-4">{link.description}</p>
                  </div>
                  <div className="text-center pt-3 border-t border-slate-800/80">
                    <span className="text-purple-400 group-hover:text-purple-300 font-semibold text-xs tracking-wide uppercase transition-colors">
                      {link.linkText} &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <SequentialNav nav={nav} typeLabel="Mode" />
        </main>
      </div>
    </Layout>
  );
}
