"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import { getSongLessonDetailData, ContentSection, ContentCard } from '@/lib/songLessonData';
import RelatedContentSection from '@/components/RelatedContent/RelatedContentSection';
import AdSlot from '@/components/Revenue/AdSlot';
import Breadcrumbs from '@/components/Breadcrumbs';
import SequentialNav from '@/components/SequentialNav';
import { getSequentialNav } from '@/lib/sequentialNav';
import { getDifficultyColor } from '@/lib/utils';

function getBadgeColorClasses(color?: string): string {
  if (!color) return '';
  if (color.includes('green')) return 'bg-green-100 dark:bg-green-950/60 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800/40';
  if (color.includes('yellow') || color.includes('amber')) return 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/40';
  if (color.includes('orange')) return 'bg-orange-100 dark:bg-orange-950/60 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800/40';
  if (color.includes('red') || color.includes('rose')) return 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800/40';
  if (color.includes('purple') || color.includes('violet')) return 'bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800/40';
  if (color.includes('blue')) return 'bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800/40';
  return color;
}

function CardComponent({ card }: { card: ContentCard }) {
  return (
    <div className={`${card.bgColor || 'bg-white'} dark:bg-slate-900/90 rounded-2xl p-6 ${card.borderColor ? `border-l-4 ${card.borderColor} dark:border-amber-400` : 'border border-gray-200 dark:border-slate-800'} shadow-sm flex flex-col justify-between`}>
      <div>
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {card.icon && <span className="mr-2">{card.icon}</span>}
            {card.number !== undefined && (
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 font-bold text-sm mr-3 border border-transparent dark:border-blue-800/40">
                {card.number}
              </span>
            )}
            {card.title}
          </h3>
          {card.badge && (
            <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${
              typeof card.badge === 'string'
                ? getDifficultyColor(card.badge)
                : (getBadgeColorClasses(card.badge.color) || getDifficultyColor(card.badge.text))
            }`}>
              {typeof card.badge === 'string' ? card.badge : card.badge.text}
            </span>
          )}
        </div>
        {card.description && (
          <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed mb-3">{card.description}</p>
        )}
        {card.fields && card.fields.length > 0 && (
          <div className="space-y-2 text-sm">
            {card.fields.map((field, i) => (
              <div key={i}>
                <span className="font-semibold text-gray-700 dark:text-slate-200">{field.label}: </span>
                <span className="text-gray-600 dark:text-slate-400">{field.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {card.items && card.items.length > 0 && (
        <ul className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1 text-sm text-gray-600 dark:text-slate-400">
          {card.items.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SectionComponent({ section }: { section: ContentSection }) {
  const layoutClasses: Record<string, string> = {
    'grid-2': 'grid grid-cols-1 md:grid-cols-2 gap-6',
    'grid-3': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
    'grid-4': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
    'list': 'space-y-6',
    'numbered-steps': 'space-y-6',
  };

  return (
    <section className="mb-12">
      <div className={`${section.bgColor || ''} ${section.bgColor ? 'dark:bg-slate-900/90' : ''} ${section.borderColor ? `border ${section.borderColor} dark:border-slate-800` : ''} ${section.bgColor || section.borderColor ? 'rounded-2xl p-6' : ''}`}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{section.title}</h2>
        {section.subtitle && (
          <p className="text-gray-600 dark:text-slate-300 mb-6">{section.subtitle}</p>
        )}
        <div className={layoutClasses[section.layout || 'grid-2'] || layoutClasses['grid-2']}>
          {(section.cards || []).map((card, i) => (
            <CardComponent key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Props {
  dataKey: string;
}

export default function SongLessonDetailPageTemplate({ dataKey }: Props) {
  const data = getSongLessonDetailData(dataKey);
  const slug = data.category ? dataKey.substring(data.category.length + 1) : dataKey;
  const pathname = data.backLink.href.endsWith('/' + data.category)
    ? `${data.backLink.href}/${slug}`
    : `${data.backLink.href}/${dataKey}`;
  const nav = getSequentialNav('song-lesson', dataKey, { category: data.category });

  return (
    <Layout>
      <Header title={data.pageTitle} subtitle={data.subtitle} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs pathname={pathname} pageTitle={data.pageTitle} />

        {/* Introduction */}
        <section className={`mb-12 ${data.heroGradient} dark:from-slate-900 dark:to-slate-800/90 rounded-2xl p-8 border border-slate-200/60 dark:border-slate-800 shadow-sm`}>
          {data.introduction.title && (
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{data.introduction.title}</h2>
          )}
          <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-4">{data.introduction.text}</p>
          {data.introduction.quote && (
            <div className="bg-white dark:bg-slate-900/90 rounded-xl p-4 border-l-4 border-blue-500 dark:border-amber-400 shadow-xs">
              <p className="text-gray-600 dark:text-slate-300 italic">{data.introduction.quote}</p>
            </div>
          )}
          {data.introduction.columns && data.introduction.columns.length > 0 && (
            <div className={`grid md:grid-cols-${data.introduction.columns.length} gap-6 mt-4`}>
              {data.introduction.columns.map((col, i) => (
                <div key={i} className="bg-white dark:bg-slate-900/90 p-5 rounded-xl border border-slate-200/60 dark:border-slate-800 shadow-xs">
                  {col.title && (
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                      {col.icon && <span className="mr-1">{col.icon}</span>}{col.title}
                    </h3>
                  )}
                  <p className="text-gray-600 dark:text-slate-300 text-sm">{col.text}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Content Sections */}
        {data.sections.map((section, i) => (
          <SectionComponent key={i} section={section} />
        ))}

        {/* Practice Section */}
        {data.practiceSection && (
          <section className="mb-12">
            <div className={`${data.practiceSection.bgColor || 'bg-amber-50'} dark:bg-slate-900/90 rounded-2xl p-6 border border-amber-200 dark:border-slate-800 shadow-sm`}>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{data.practiceSection.title}</h2>
              {data.practiceSection.items && (
                <ol className="space-y-2 text-gray-700 dark:text-slate-300">
                  {data.practiceSection.items.map((item, i) => (
                    <li key={i}>{i + 1}. {item}</li>
                  ))}
                </ol>
              )}
              {data.practiceSection.steps && (
                <ol className="space-y-4 text-gray-700 dark:text-slate-300">
                  {data.practiceSection.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 rounded-full flex items-center justify-center font-bold text-sm border border-transparent dark:border-blue-800/40">
                        {step.number || i + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-slate-400">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </section>
        )}

        <AdSlot slotId="content-bottom" format="banner" />

        <RelatedContentSection contentId={`song-lesson:${dataKey}`} />

        {/* Related Topics */}
        {data.relatedTopics && data.relatedTopics.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Related Topics</h2>
            <div className={`grid grid-cols-1 ${data.relatedTopics.length > 1 ? 'md:grid-cols-2' : ''} gap-4`}>
              {data.relatedTopics.map((topic, i) =>
                topic.href ? (
                  <Link
                    key={i}
                    href={topic.href}
                    className={`${topic.bgColor || 'bg-blue-50'} dark:bg-slate-900/90 rounded-2xl p-6 hover:shadow-md transition-shadow border border-gray-200 dark:border-slate-800 group flex flex-col justify-between`}
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors mb-2">
                        {topic.icon && <span className="mr-2">{topic.icon}</span>}{topic.title || topic.label}
                      </h3>
                      {topic.description && (
                        <p className="text-sm text-gray-600 dark:text-slate-300">{topic.description}</p>
                      )}
                    </div>
                  </Link>
                ) : (
                  <div key={i} className={`${topic.bgColor || 'bg-blue-50'} dark:bg-slate-900/90 rounded-2xl p-6 border border-gray-200 dark:border-slate-800`}>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {topic.icon && <span className="mr-2">{topic.icon}</span>}{topic.title || topic.label}
                    </h3>
                    {topic.description && (
                      <p className="text-sm text-gray-600 dark:text-slate-300 mb-4">{topic.description}</p>
                    )}
                    {topic.links && (
                      <div className="flex flex-wrap gap-3 mt-3">
                        {topic.links.map((link: { href: string; label: string; style?: string }, j: number) => (
                          <Link key={j} href={link.href} className={`px-4 py-2 rounded-lg text-sm font-medium ${link.style === 'primary' ? 'bg-blue-600 dark:bg-amber-500 text-white dark:text-slate-950 hover:bg-blue-700 dark:hover:bg-amber-400' : 'bg-gray-200 dark:bg-slate-800 text-gray-800 dark:text-slate-200 hover:bg-gray-300 dark:hover:bg-slate-700'} transition-colors`}>
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </section>
        )}
        <SequentialNav nav={nav} typeLabel="Lesson" />
      </main>
    </Layout>
  );
}
