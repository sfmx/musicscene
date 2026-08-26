"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
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
        <Header title="Mode Not Found" subtitle={`Could not find mode data for "${modeSlug}"`} />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Mode Not Found</h1>
            <p className="text-gray-600 mb-8">The mode &quot;{modeSlug}&quot; could not be found.</p>
            <Link href="/lessons/theory/modes" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <span className="mr-2">&larr;</span>Back to Modal Theory
            </Link>
          </div>
        </main>
      </Layout>
    );
  }

  const title = displayName || data.modeInfo.pageTitle;

  return (
    <Layout>
      <Header title={title} subtitle={data.modeInfo.subtitle} />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs pathname={`/lessons/theory/modes/${modeSlug}`} pageTitle={data.modeInfo.name} />

        {/* Hero Section */}
        <div className={`${data.modeInfo.heroGradient} text-white rounded-xl p-8 mb-12`}>
          <h1 className="text-3xl font-bold mb-4">{data.modeInfo.name}</h1>
          <p className="text-xl opacity-90 mb-4">{data.modeInfo.subtitle}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            {data.modeInfo.tags.map((tag, i) => (
              <span key={i} className="bg-white/20 px-3 py-1 rounded">{tag}</span>
            ))}
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">{data.theory.propertiesTitle}</h3>
              <ul className="space-y-2 text-gray-600">
                {data.theory.properties.map((prop, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={`${data.theory.bulletColor} mt-1`}>•</span>
                    <span><strong>{prop.label}:</strong> {prop.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">{data.theory.exampleTitle}</h3>
              <ul className="space-y-2 text-gray-600">
                {data.theory.examples.map((ex, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={`${data.theory.bulletColor} mt-1`}>•</span>
                    <span><strong>{ex.label}:</strong> {ex.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Guitar Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Fretboard Patterns</h3>
              <div className="space-y-4">
                {data.guitarApplications.fretboardPatterns.map((pattern, i) => (
                  <div key={i} className={`${pattern.colorBg} rounded-lg p-4 border ${pattern.colorBorder}`}>
                    <h4 className={`font-semibold ${pattern.colorTitle} mb-2`}>{pattern.title}</h4>
                    <p className={`text-sm ${pattern.colorText} mb-3`}>{pattern.description}</p>
                    {pattern.alphaTex && pattern.alphaTex !== '\\notrack' && (
                      <AlphaTexRenderer alphaTex={pattern.alphaTex} className="scale-75" />
                    )}
                    {pattern.notes && pattern.notes.length > 0 && (
                      <div className="mt-3">
                        <p className={`text-xs ${pattern.colorDetail} font-medium mb-1`}>Pattern Notes:</p>
                        <ul className={`text-xs ${pattern.colorDetail} space-y-1`}>
                          {pattern.notes.map((note, j) => (
                            <li key={j}>• {note}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Musical Applications</h3>
              <div className="space-y-4">
                {data.guitarApplications.musicalApplications.map((app, i) => (
                  <div key={i} className={`${app.colorBg} rounded-lg p-4 border ${app.colorBorder}`}>
                    <h4 className={`font-semibold ${app.colorTitle} mb-2`}>{app.title}</h4>
                    <p className={`text-sm ${app.colorText} mb-2`}>{app.description}</p>
                    <ul className={`text-xs ${app.colorText} space-y-1`}>
                      {app.items.map((item, j) => (
                        <li key={j}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Musical Examples */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Musical Examples &amp; Famous Uses</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Classic Examples</h3>
              <div className="space-y-4">
                {data.musicalExamples.classic.map((ex, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800">{ex.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{ex.description}</p>
                    <p className="text-xs text-gray-500">{ex.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Modern Applications</h3>
              <div className="space-y-4">
                {data.musicalExamples.modern.map((ex, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800">{ex.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{ex.description}</p>
                    <p className="text-xs text-gray-500">{ex.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.practiceCategories.map((cat, i) => (
              <div key={i} className={`${cat.colorBg} rounded-lg p-4 border ${cat.colorBorder}`}>
                <h3 className={`text-lg font-semibold ${cat.colorTitle} mb-3`}>{cat.icon} {cat.title}</h3>
                <ul className={`${cat.colorText} text-sm space-y-2`}>
                  {cat.items.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Notated Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises with Notation</h2>
          <div className="space-y-6">
            {data.notatedExercises.map((ex, i) => (
              <div key={i} className={`${ex.colorBg} rounded-lg p-4 border ${ex.colorBorder}`}>
                <h3 className={`text-lg font-semibold ${ex.colorTitle} mb-3`}>{ex.title}</h3>
                <p className={`${ex.colorText} text-sm mb-3`}>{ex.description}</p>
                {ex.alphaTex && ex.alphaTex !== '\\notrack' && (
                  <AlphaTexRenderer alphaTex={ex.alphaTex} className="scale-75" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Scale Relationships */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Scale Relationships &amp; Theory</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Relationship to Other Scales</h3>
              <div className="space-y-3">
                {data.scaleRelationships.relationships.map((rel, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800">{rel.title}</h4>
                    <p className="text-sm text-gray-600">{rel.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Related Modes</h3>
              <div className="space-y-3">
                {data.scaleRelationships.relatedModes.map((mode, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800">{mode.title}</h4>
                    <p className="text-sm text-gray-600">{mode.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Different Keys */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{data.modeInfo.name} in Different Keys</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.keyVariants.map((kv, i) => (
              <div key={i} className={`${kv.colorBg} rounded-lg p-4 border ${kv.colorBorder}`}>
                <h3 className={`text-lg font-semibold ${kv.colorTitle} mb-3`}>{kv.title}</h3>
                <p className={`text-sm ${kv.colorText} mb-3`}>{kv.description}</p>
                {kv.alphaTex && kv.alphaTex !== '\\notrack' && (
                  <AlphaTexRenderer alphaTex={kv.alphaTex} className="scale-75" />
                )}
                <p className={`text-xs ${kv.colorDetail} mt-2`}>{kv.notesLabel}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Scales */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Scales &amp; Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.relatedScales.map((scale, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">{scale.title}</h3>
                <p className="text-sm text-gray-700 mb-2">{scale.description}</p>
                <p className="text-xs text-gray-600">{scale.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <SongsUsingThis type="mode" slug={modeSlug} />

        <AdSlot slotId="content-bottom" format="banner" />

        <RelatedContentSection contentId={`mode:${modeSlug}`} />

        {/* Continue Your Journey */}
        <div className={`bg-gradient-to-r ${data.journeySection.gradientFrom} ${data.journeySection.gradientTo} rounded-xl p-8 ${data.journeySection.borderColor} border mb-12`}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">{data.journeySection.title}</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">{data.journeySection.description}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {data.journeySection.links.map((link, i) => (
              <Link
                key={i}
                href={link.slug === 'modes' ? '/lessons/theory/modes' : `/lessons/theory/modes/${link.slug}`}
                className={`group bg-white rounded-lg p-6 border border-gray-200 ${link.hoverBorder} hover:shadow-lg transition-all duration-300`}
              >
                <div className="text-center">
                  <div className={`w-12 h-12 ${link.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 ${link.iconHoverBg} transition-colors`}>
                    <span className="text-2xl">{link.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{link.description}</p>
                  <span className={`${link.linkColor} font-medium text-sm ${link.linkHoverColor}`}>
                    {link.linkText} &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <SequentialNav nav={nav} typeLabel="Mode" />
      </main>
    </Layout>
  );
}
