"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getGearIndexData, GearIndexData, GearContentSection, GearContentCard } from '@/lib/gearLessonData';

function CardComponent({ card }: { card: GearContentCard }) {
  return (
    <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            {card.icon && <span className="text-lg">{card.icon}</span>}
            {card.title}
          </h3>
          {card.badge && (
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {card.badge.text}
            </span>
          )}
        </div>
        {card.description && <p className="text-slate-400 text-xs leading-relaxed mb-3">{card.description}</p>}
        {card.fields && card.fields.length > 0 && (
          <div className="space-y-1.5 text-xs">
            {card.fields.map((f, i) => (
              <div key={i}>
                <span className="font-semibold text-slate-400">{f.label}: </span>
                <span className="text-slate-200">{f.value}</span>
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
              <span>{item}</span>
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
                      <td key={j} className="p-3 text-slate-300">{cell}</td>
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
  category: string;
}

export default function GearLessonIndexPageTemplate({ category }: Props) {
  const data: GearIndexData = getGearIndexData(category);

  return (
    <Layout>
      <Header
        title={data.pageTitle}
        subtitle={data.subtitle}
        category="🎸 Guitar Gear &amp; Tone Lab"
      />
      <div className="min-h-screen bg-slate-950 text-slate-100 pb-20">
        <main className="max-w-6xl mx-auto px-4 py-8">
          <Breadcrumbs pathname={`/lessons/gear/${category}`} pageTitle={data.pageTitle} />

          {/* Hero */}
          {data.heroInfo && (
            <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-purple-950/40 to-slate-900 border border-purple-500/30 p-8 mb-12 shadow-2xl">
              <div className="relative z-10">
                {data.heroInfo.title && <h2 className="text-2xl font-bold text-white mb-4">{data.heroInfo.title}</h2>}
                {data.heroInfo.text && <p className="text-slate-300 text-sm leading-relaxed mb-4">{data.heroInfo.text}</p>}
                {data.heroInfo.items && (
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {data.heroInfo.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-cyan-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          )}

          {/* Types Grid */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Lessons &amp; Categories</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {data.types.map((type) => (
                <Link
                  key={type.href}
                  href={type.href}
                  className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{type.icon}</span>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{type.name}</h3>
                    </div>
                    <p className="text-xs text-slate-400 mb-4 leading-relaxed">{type.description}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    {type.category && (
                      <span className="px-2 py-0.5 text-[11px] font-mono rounded-full bg-slate-950 border border-slate-800 text-slate-400">
                        {type.category}
                      </span>
                    )}
                    <span className="text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 uppercase tracking-wider">
                      Explore &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Additional Sections */}
          {data.sections.map((section, i) => (
            <SectionComponent key={i} section={section} />
          ))}
        </main>
      </div>
    </Layout>
  );
}
