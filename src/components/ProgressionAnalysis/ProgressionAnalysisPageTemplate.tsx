"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import { getProgressionData, ProgressionData } from '@/lib/progressionData';
import RelatedContentSection from '@/components/RelatedContent/RelatedContentSection';
import AdSlot from '@/components/Revenue/AdSlot';
import GearRecommendations from '@/components/Revenue/GearRecommendations';
import Breadcrumbs from '@/components/Breadcrumbs';
import SequentialNav from '@/components/SequentialNav';
import { getSequentialNav } from '@/lib/sequentialNav';

interface Props {
  progressionSlug: string;
  displayName?: string;
}

export default function ProgressionAnalysisPageTemplate({ progressionSlug, displayName }: Props) {
  const data = getProgressionData(progressionSlug);
  const nav = getSequentialNav('progression', progressionSlug);

  if (!data) {
    return (
      <Layout>
        <Header title="Progression Not Found" subtitle={`Could not find data for "${progressionSlug}"`} />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Progression Not Found</h1>
            <Link href="/lessons/theory/progressions" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <span className="mr-2">&larr;</span>Back to Progressions
            </Link>
          </div>
        </main>
      </Layout>
    );
  }

  const title = displayName || data.progressionInfo.pageTitle;

  return (
    <Layout>
      <Header title={title} subtitle={data.progressionInfo.subtitle} />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs pathname={`/lessons/theory/progressions/${progressionSlug}`} pageTitle={data.progressionInfo.name} />

        {/* Hero */}
        <div className={`${data.progressionInfo.heroGradient} text-white rounded-xl p-8 mb-12`}>
          <h1 className="text-3xl font-bold mb-4">{data.progressionInfo.name}</h1>
          <p className="text-xl opacity-90 mb-4">{data.progressionInfo.subtitle}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            {data.progressionInfo.tags.map((tag, i) => (
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Basic Chord Positions</h3>
              <div className="space-y-4">
                {data.guitarApplications.chordDiagrams.map((group, i) => (
                  <div key={i} className={`${group.colorBg} rounded-lg p-4 border ${group.colorBorder}`}>
                    <h4 className={`font-semibold ${group.colorTitle} mb-2`}>{group.title}</h4>
                    <p className={`text-sm ${group.colorText} mb-3`}>{group.description}</p>
                    <div className={`grid grid-cols-${Math.min(group.chords.length, 3)} gap-4 mb-4`}>
                      {group.chords.map((chord, j) => (
                        <div key={j} className="text-center">
                          <h5 className="font-medium text-sm mb-2">{chord.label}</h5>
                          <SimpleFretboardDiagram chord={chord.chord} />
                          {chord.subtitle && <p className={`text-xs ${group.colorDetail} mt-1`}>{chord.subtitle}</p>}
                        </div>
                      ))}
                    </div>
                    {group.alphaTex && (
                      <AlphaTexRenderer alphaTex={group.alphaTex} title={group.alphaTexTitle} className="scale-75" />
                    )}
                    {group.practiceNotes && group.practiceNotes.length > 0 && (
                      <div className="mt-3">
                        <p className={`text-xs ${group.colorDetail} font-medium mb-1`}>Practice Notes:</p>
                        <ul className={`text-xs ${group.colorDetail} space-y-1`}>
                          {group.practiceNotes.map((note, j) => (
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Advanced Applications</h3>
              <div className="space-y-4">
                {data.guitarApplications.advancedApplications.map((app, i) => (
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">{data.musicalExamples.left.title}</h3>
              <div className="space-y-4">
                {data.musicalExamples.left.examples.map((ex, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800">{ex.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{ex.description}</p>
                    <p className="text-xs text-gray-500">{ex.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">{data.musicalExamples.right.title}</h3>
              <div className="space-y-4">
                {data.musicalExamples.right.examples.map((ex, i) => (
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
                {ex.practiceNotes && ex.practiceNotes.length > 0 && (
                  <div className="mt-3">
                    <p className={`text-xs ${ex.colorDetail || ex.colorText} font-medium mb-1`}>Practice Tips:</p>
                    <ul className={`text-xs ${ex.colorDetail || ex.colorText} space-y-1`}>
                      {ex.practiceNotes.map((note, j) => (
                        <li key={j}>• {note}</li>
                      ))}
                    </ul>
                  </div>
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">{data.scaleRelationships.left.title}</h3>
              {data.scaleRelationships.left.sections.map((section, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{section.title}</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {section.items.map((item, j) => (
                      <li key={j}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">{data.scaleRelationships.right.title}</h3>
              {data.scaleRelationships.right.sections.map((section, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{section.title}</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {section.items.map((item, j) => (
                      <li key={j}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gear Recommendations */}
        {data.gearRecommendations && data.gearRecommendations.items.length > 0 && (
          <GearRecommendations
            title={data.gearRecommendations.title}
            items={data.gearRecommendations.items}
          />
        )}

        <AdSlot slotId="content-bottom" format="banner" />

        <RelatedContentSection contentId={`progression:${progressionSlug}`} />

        {/* Journey Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">{data.journeySection.title}</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">{data.journeySection.description}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {data.journeySection.links.map((link, i) => (
              <Link
                key={i}
                href={`/lessons/theory/progressions/${link.slug}`}
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

        <SequentialNav nav={nav} typeLabel="Progression" />
      </main>
    </Layout>
  );
}
