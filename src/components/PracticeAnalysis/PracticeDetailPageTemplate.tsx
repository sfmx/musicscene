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

interface Props {
  practiceSlug: string;
  displayName: string;
}

const categoryBackLinks: Record<string, { href: string; label: string }> = {
  warmups: { href: '/lessons/practice/warmups', label: 'Back to Warmups' },
  technique: { href: '/lessons/practice/technique', label: 'Back to Technique' },
  improv: { href: '/lessons/practice/improv', label: 'Back to Improvisation' },
};

export default function PracticeDetailPageTemplate({ practiceSlug, displayName }: Props) {
  const data: PracticeDetailData = getPracticeData(practiceSlug);
  const pathname = `/lessons/practice/${data.category}/${practiceSlug}`;
  const nav = getSequentialNav('practice', practiceSlug, { category: data.category });

  return (
    <Layout>
      <Header title={data.pageInfo.pageTitle} subtitle={data.pageInfo.subtitle} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs pathname={pathname} pageTitle={data.pageInfo.heroTitle} />

        {/* Hero Section */}
        <div className={`${data.pageInfo.heroGradient} rounded-xl p-8 mb-12 border border-gray-200`}>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{data.pageInfo.heroTitle}</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">{data.pageInfo.heroDescription}</p>
        </div>

        {/* Practice Guidelines */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{data.guidelines.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.guidelines.columns.map((col, i) => (
              <div key={i}>
                <h3 className="text-lg font-medium text-gray-800 mb-3">{col.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className={`${item.bulletColor} mt-1`}>•</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">{section.title}</h2>
            <div className="space-y-8">
              {section.exercises.map((ex) => (
                <div key={ex.number} className={`bg-white rounded-xl border ${ex.borderColor} shadow-sm p-6 hover:shadow-md transition-shadow`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-8 h-8 ${ex.numberBg} ${ex.numberText} rounded-full flex items-center justify-center font-semibold text-sm`}>
                      {ex.number}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{ex.title}</h3>
                    <span className={`px-3 py-1 ${ex.difficultyBg} ${ex.difficultyText} text-sm rounded-full`}>{ex.difficulty}</span>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-700 leading-relaxed mb-3">{ex.description}</p>

                    {ex.patternNote && (
                      <div className={`${ex.patternNote.colorBg} rounded-lg p-3 mb-4`}>
                        <p className={`${ex.patternNote.colorText} text-sm`}>{ex.patternNote.text}</p>
                      </div>
                    )}
                  </div>

                  {/* Chord Diagrams */}
                  {ex.chordDiagrams && ex.chordDiagrams.length > 0 && (
                    <div className="flex flex-wrap gap-6 items-center justify-center mb-6 bg-gray-50 rounded-lg p-6">
                      {ex.chordDiagrams.map((cd, ci) => (
                        <React.Fragment key={ci}>
                          {ci > 0 && <div className="text-2xl text-gray-400">&rarr;</div>}
                          <div className="text-center">
                            <div className="font-semibold text-gray-800 mb-2">{cd.label}</div>
                            <SimpleFretboardDiagram chord={cd.chord} />
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  )}

                  {/* Notation */}
                  {ex.notation && (
                    <div className="mb-4">
                      <AlphaTexRenderer
                        alphaTex={ex.notation.alphaTex}
                        title={ex.notation.title}
                        tempo={ex.practiceNotes?.tempo ? parseInt(ex.practiceNotes.tempo) || undefined : undefined}
                      />
                    </div>
                  )}

                  {/* Practice Notes */}
                  {ex.practiceNotes && (
                    <div className={`mt-6 ${ex.practiceNotes.colorBg} rounded-lg p-4 border ${ex.practiceNotes.colorBorder}`}>
                      <h4 className={`font-medium ${ex.practiceNotes.colorTitle} mb-2`}>{ex.practiceNotes.title}</h4>
                      <p className={`${ex.practiceNotes.colorText} text-sm leading-relaxed mb-3`}>{ex.practiceNotes.text}</p>
                      {ex.practiceNotes.tempo && (
                        <div className={`flex items-center justify-center ${ex.practiceNotes.colorAccent} rounded-md py-2 px-4`}>
                          <span className={`${ex.practiceNotes.colorText} font-medium text-sm`}>Suggested starting tempo: {ex.practiceNotes.tempo}</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">{data.tips.title}</h2>
            <div className={`grid md:grid-cols-${Math.min(data.tips.items.length, 2)} gap-6`}>
              {data.tips.items.map((tip, i) => (
                <div key={i} className={`${tip.colorBg} rounded-xl p-6 border ${tip.colorBorder}`}>
                  <h3 className={`text-lg font-semibold ${tip.colorTitle} mb-4`}>{tip.title}</h3>
                  <ul className="space-y-3">
                    {(tip.items || []).map((item, j) => (
                      <li key={j} className={`flex items-start gap-3`}>
                        <span className={`${tip.colorText} mt-1`}>•</span>
                        <span className={tip.colorText}>{item}</span>
                      </li>
                    ))}
                    {(tip.challenges || []).map((challenge: { title: string; text: string }, j: number) => (
                      <li key={`c-${j}`} className={`flex items-start gap-3`}>
                        <span className={`${tip.colorText} mt-1`}>•</span>
                        <span className={tip.colorText}><strong>{challenge.title}:</strong> {challenge.text}</span>
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
          <div className={`bg-gradient-to-r ${data.journeySection.gradientFrom} ${data.journeySection.gradientTo} rounded-xl p-8 border ${data.journeySection.borderColor} mb-12`}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">{data.journeySection.title}</h2>
            <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">{data.journeySection.description}</p>
            <div className="grid md:grid-cols-3 gap-6">
              {data.journeySection.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className={`group bg-white rounded-lg p-6 border border-gray-200 ${link.hoverBorder} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 ${link.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 ${link.iconHoverBg} transition-colors`}>
                      <span className="text-2xl">{link.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{link.description}</p>
                    <span className={`${link.linkColor} font-medium text-sm ${link.linkHoverColor}`}>{link.linkText} &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        <SequentialNav nav={nav} typeLabel="Exercise" />
      </main>
    </Layout>
  );
}
