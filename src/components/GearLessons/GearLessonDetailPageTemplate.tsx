"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import { getGearDetailData, GearDetailData, GearContentSection, GearContentCard } from '@/lib/gearLessonData';
import RelatedContentSection from '@/components/RelatedContent/RelatedContentSection';
import AdSlot from '@/components/Revenue/AdSlot';
import AffiliateLink from '@/components/Revenue/AffiliateLink';
import SmartAffiliateText from '@/components/Revenue/SmartAffiliateText';
import Breadcrumbs from '@/components/Breadcrumbs';
import SequentialNav from '@/components/SequentialNav';
import { getSequentialNav } from '@/lib/sequentialNav';

function CardComponent({ card }: { card: GearContentCard }) {
  return (
    <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-bold text-white flex items-center flex-wrap gap-2">
            {card.icon && <span className="text-lg">{card.icon}</span>}
            {card.number !== undefined && (
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold text-xs">
                {card.number}
              </span>
            )}
            <AffiliateLink productName={card.title} className="text-white hover:text-cyan-300 transition-colors" />
          </h3>
          {card.badge && (
            <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
              {card.badge.text}
            </span>
          )}
        </div>
        {card.description && <p className="text-slate-400 text-xs leading-relaxed mb-3">{card.description}</p>}
        {card.fields && card.fields.length > 0 && (
          <div className="space-y-1.5 text-xs">
            {card.fields.map((f, i) => (
              <div key={i}>
                <span className="font-semibold text-slate-400">
                  <AffiliateLink productName={f.label} className="text-slate-400 hover:text-white" />: </span>
                <span className="text-slate-200"><SmartAffiliateText text={f.value} /></span>
              </div>
            ))}
          </div>
        )}
      </div>
      {card.items && card.items.length > 0 && (
        <ul className="mt-3 pt-3 border-t border-slate-800/80 space-y-1 text-xs text-slate-300">
          {card.items.map((item, i) => (
            <li key={i} className="flex items-start gap-1.5">
              <span className="text-cyan-400">•</span>
              <span><AffiliateLink productName={item} className="text-slate-300 hover:text-white" /></span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SectionComponent({ section }: { section: GearContentSection }) {
  const layoutClasses: Record<string, string> = {
    'grid-2': 'grid grid-cols-1 md:grid-cols-2 gap-6',
    'grid-3': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
    'grid-4': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
    'list': 'space-y-6',
    'numbered-steps': 'space-y-6',
  };

  return (
    <section className="mb-12">
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white mb-2">{section.title}</h2>
        {section.subtitle && <p className="text-slate-400 text-sm mb-6 leading-relaxed">{section.subtitle}</p>}
        {section.warningText && (
          <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4 mb-6">
            <p className="text-amber-300 text-xs"><strong>⚠️ Note:</strong> {section.warningText}</p>
          </div>
        )}
        {section.layout === 'table' && section.tableHeaders && section.tableRows ? (
          <div className="overflow-x-auto bg-slate-950/80 rounded-xl border border-slate-800">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider">
                  {section.tableHeaders.map((h, i) => (
                    <th key={i} className="text-left p-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {section.tableRows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-900/50 transition-colors">
                    {row.map((cell, j) => (
                      <td key={j} className="p-3 text-slate-300">
                        <AffiliateLink productName={cell} className="hover:text-cyan-300" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          section.cards && (
            <div className={layoutClasses[section.layout] || layoutClasses['grid-2']}>
              {section.cards.map((card, i) => <CardComponent key={i} card={card} />)}
            </div>
          )
        )}
      </div>
    </section>
  );
}

interface Props {
  dataKey: string;
}

export default function GearLessonDetailPageTemplate({ dataKey }: Props) {
  const data = getGearDetailData(dataKey);
  const slug = dataKey.substring(data.category.length + 1);
  const pathname = `${data.backLink.href}/${slug}`;
  const nav = getSequentialNav('gear-lesson', dataKey, { category: data.category });

  return (
    <Layout>
      <Header
        title={data.pageTitle}
        subtitle={data.subtitle}
        category="🎸 Guitar Gear &amp; Tone Lab"
      />
      <div className="min-h-screen bg-slate-950 text-slate-100 pb-20">
        <main className="max-w-4xl mx-auto px-4 py-8">
          <Breadcrumbs pathname={pathname} pageTitle={data.pageTitle} />

          {/* Introduction */}
          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 p-8 mb-12 shadow-2xl">
            <div className="relative z-10">
              {data.introduction.title && <h2 className="text-2xl font-bold text-white mb-4">{data.introduction.title}</h2>}
              {data.introduction.text.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-slate-300 text-sm leading-relaxed mb-4">{paragraph}</p>
              ))}
              {data.introduction.quote && (
                <div className="bg-slate-950/80 rounded-xl p-4 border-l-4 border-cyan-400 mt-4">
                  <p className="text-slate-300 italic text-xs leading-relaxed">{data.introduction.quote}</p>
                </div>
              )}
              {data.introduction.columns && data.introduction.columns.length > 0 && (
                <div className={'grid md:grid-cols-' + data.introduction.columns.length + ' gap-4 mt-6'}>
                  {data.introduction.columns.map((col, i) => (
                    <div key={i} className="bg-slate-950/80 rounded-xl p-4 border border-slate-800">
                      {col.title && (
                        <h3 className="font-bold text-white text-sm mb-1.5 flex items-center gap-1.5">
                          {col.icon && <span>{col.icon}</span>}
                          {col.title}
                        </h3>
                      )}
                      <p className="text-slate-400 text-xs">{col.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          <AdSlot slotId="sidebar-gear" format="rectangle" />

          {/* Content Sections */}
          {data.sections.map((section, i) => <SectionComponent key={i} section={section} />)}

          <AdSlot slotId="content-bottom" format="banner" />

          <RelatedContentSection contentId={'gear-lesson:' + dataKey} />

          {/* Related Topics */}
          {data.relatedTopics && data.relatedTopics.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-bold text-white mb-4">Related Topics</h2>
              <div className={'grid grid-cols-1 ' + (data.relatedTopics.length > 1 ? 'md:grid-cols-2' : '') + ' gap-4'}>
                {data.relatedTopics.map((topic, i) => (
                  <Link
                    key={i}
                    href={topic.href}
                    className="bg-slate-900/90 rounded-xl p-6 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all group"
                  >
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5 flex items-center gap-2">
                      {topic.icon && <span>{topic.icon}</span>}
                      {topic.title}
                    </h3>
                    {topic.description && <p className="text-xs text-slate-400">{topic.description}</p>}
                  </Link>
                ))}
              </div>
            </section>
          )}
          <SequentialNav nav={nav} typeLabel="Gear Lesson" />
        </main>
      </div>
    </Layout>
  );
}
