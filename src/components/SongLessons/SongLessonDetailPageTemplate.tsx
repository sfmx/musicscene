"use client";

import React, { useState } from 'react';
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
import AlphaTexRenderer from '@/components/AlphaTexRenderer';

function renderLinkedText(text: string): React.ReactNode {
  if (!text) return text;
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  if (!regex.test(text)) return text;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  regex.lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const label = match[1];
    const href = match[2];
    parts.push(
      <Link
        key={match.index}
        href={href}
        className="text-blue-600 dark:text-amber-400 hover:text-blue-700 dark:hover:text-amber-300 underline underline-offset-2 font-medium transition-colors"
      >
        {label}
      </Link>
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return <>{parts}</>;
}

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

function CardComponent({
  card,
  onSelectTab,
}: {
  card: ContentCard;
  onSelectTab?: (tabId: string) => void;
}) {
  const hasAccent = Boolean(card.borderColor);

  return (
    <div
      className={`bg-slate-50/80 dark:bg-slate-950/80 rounded-xl p-5 border border-slate-200 dark:border-slate-800 ${
        hasAccent ? 'border-l-4 border-l-blue-500 dark:border-l-amber-400' : ''
      } shadow-xs flex flex-col justify-between hover:border-blue-400 dark:hover:border-slate-700 transition-all`}
    >
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center flex-wrap gap-2">
            {card.icon && <span className="text-lg">{card.icon}</span>}
            {card.number !== undefined && (
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 font-bold text-xs border border-blue-200 dark:border-blue-800/40">
                {card.number}
              </span>
            )}
            <span>{card.title}</span>
          </h3>
          {card.badge && (
            <span
              className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border shrink-0 ${
                typeof card.badge === 'string'
                  ? getDifficultyColor(card.badge)
                  : (getBadgeColorClasses(card.badge.color) || getDifficultyColor(card.badge.text))
              }`}
            >
              {typeof card.badge === 'string' ? card.badge : card.badge.text}
            </span>
          )}
        </div>
        {card.description && (
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
            {renderLinkedText(card.description)}
          </p>
        )}
        {card.fields && card.fields.length > 0 && (
          <div className="space-y-1.5 text-xs">
            {card.fields.map((field, i) => (
              <div key={i}>
                <span className="font-semibold text-slate-700 dark:text-slate-300">{field.label}: </span>
                <span className="text-slate-600 dark:text-slate-400">{renderLinkedText(field.value)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        {card.items && card.items.length > 0 && (
          <ul className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800/80 space-y-1 text-xs text-slate-600 dark:text-slate-300">
            {card.items.map((item, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-blue-500 dark:text-amber-400">•</span>
                <span>{renderLinkedText(item)}</span>
              </li>
            ))}
          </ul>
        )}
        {card.tabId && onSelectTab && (
          <button
            type="button"
            onClick={() => {
              onSelectTab(card.tabId!);
              const el = document.getElementById('interactive-strumming-lab');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-3.5 pt-2.5 border-t border-slate-200 dark:border-slate-800/80 w-full flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-amber-400 hover:text-blue-700 dark:hover:text-amber-300 transition-colors group cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              <span>▶</span>
              <span>Play in Interactive Lab</span>
            </span>
            <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
          </button>
        )}
      </div>
    </div>
  );
}

function SectionComponent({
  section,
  onSelectTab,
}: {
  section: ContentSection;
  onSelectTab?: (tabId: string) => void;
}) {
  const layoutClasses: Record<string, string> = {
    'grid-2': 'grid grid-cols-1 md:grid-cols-2 gap-6',
    'grid-3': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
    'grid-4': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
    'list': 'space-y-6',
    'numbered-steps': 'space-y-4',
  };

  const isNumbered = section.layout === 'numbered-steps';

  return (
    <section className="mb-12">
      <div className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{section.title}</h2>
        {section.subtitle && (
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">{section.subtitle}</p>
        )}

        {isNumbered ? (
          <div className="space-y-4">
            {(section.cards || []).map((card, i) => (
              <div
                key={i}
                className="bg-slate-50/80 dark:bg-slate-950/80 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-start gap-4 hover:border-blue-400 dark:hover:border-slate-700 transition-all"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 font-bold flex items-center justify-center border border-blue-200 dark:border-blue-800/50 shadow-xs text-base">
                  {card.number !== undefined ? card.number : i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{card.title}</h3>
                    {card.badge && (
                      <span
                        className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${
                          typeof card.badge === 'string'
                            ? getDifficultyColor(card.badge)
                            : (getBadgeColorClasses(card.badge.color) || getDifficultyColor(card.badge.text))
                        }`}
                      >
                        {typeof card.badge === 'string' ? card.badge : card.badge.text}
                      </span>
                    )}
                  </div>
                  {card.description && (
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                      {renderLinkedText(card.description)}
                    </p>
                  )}
                  {card.fields && card.fields.length > 0 && (
                    <div className="space-y-1.5 text-xs">
                      {card.fields.map((f, j) => (
                        <div key={j}>
                          <span className="font-semibold text-slate-700 dark:text-slate-300">{f.label}: </span>
                          <span className="text-slate-600 dark:text-slate-400">{renderLinkedText(f.value)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {card.items && card.items.length > 0 && (
                    <ul className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800/80 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      {card.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-1.5">
                          <span className="text-blue-500 dark:text-amber-400">•</span>
                          <span>{renderLinkedText(item)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {card.tabId && onSelectTab && (
                    <button
                      type="button"
                      onClick={() => {
                        onSelectTab(card.tabId!);
                        const el = document.getElementById('interactive-strumming-lab');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="mt-3.5 pt-2.5 border-t border-slate-200 dark:border-slate-800/80 w-full flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-amber-400 hover:text-blue-700 dark:hover:text-amber-300 transition-colors group cursor-pointer"
                    >
                      <span className="flex items-center gap-1.5">
                        <span>▶</span>
                        <span>Play in Interactive Lab</span>
                      </span>
                      <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={layoutClasses[section.layout || 'grid-2'] || layoutClasses['grid-2']}>
            {(section.cards || []).map((card, i) => (
              <CardComponent key={i} card={card} onSelectTab={onSelectTab} />
            ))}
          </div>
        )}
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

  const initialTabId = data.interactiveTabs?.items[0]?.id || '';
  const [activeTabId, setActiveTabId] = useState<string>(initialTabId);

  const activeTabItem =
    data.interactiveTabs?.items.find((item) => item.id === activeTabId) ||
    data.interactiveTabs?.items[0];

  return (
    <Layout>
      <Header title={data.pageTitle} subtitle={data.subtitle} />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <Breadcrumbs pathname={pathname} pageTitle={data.pageTitle} />

        {/* Introduction */}
        <section
          className={`mb-12 ${
            data.heroGradient || 'bg-gradient-to-r from-blue-50 to-indigo-50'
          } dark:bg-slate-900 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm dark:shadow-xl`}
        >
          {data.introduction.title && (
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{data.introduction.title}</h2>
          )}
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
            {renderLinkedText(data.introduction.text)}
          </p>
          {data.introduction.quote && (
            <div className="bg-white/80 dark:bg-slate-950/80 rounded-xl p-4 border border-blue-200 dark:border-slate-800 border-l-4 border-l-blue-500 dark:border-l-amber-400 shadow-xs mb-4">
              <p className="text-slate-700 dark:text-slate-300 italic text-xs sm:text-sm">{data.introduction.quote}</p>
            </div>
          )}
          {data.introduction.columns && data.introduction.columns.length > 0 && (
            <div className={`grid md:grid-cols-${data.introduction.columns.length} gap-4 sm:gap-6 mt-4`}>
              {data.introduction.columns.map((col, i) => (
                <div
                  key={i}
                  className="bg-white/90 dark:bg-slate-950/80 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs"
                >
                  {col.title && (
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-sm flex items-center gap-1.5">
                      {col.icon && <span>{col.icon}</span>}
                      <span>{col.title}</span>
                    </h3>
                  )}
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">{renderLinkedText(col.text)}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Interactive Strumming Lab with AlphaTab */}
        {data.interactiveTabs && data.interactiveTabs.items.length > 0 && activeTabItem && (
          <section id="interactive-strumming-lab" className="mb-12 scroll-mt-24">
            <div className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 bg-emerald-100/70 dark:bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-500/20">
                  Interactive Audio & Tab Lab
                </span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {data.interactiveTabs.title}
                </h2>
              </div>
              {data.interactiveTabs.subtitle && (
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                  {data.interactiveTabs.subtitle}
                </p>
              )}

              {/* Pattern Selector Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                {data.interactiveTabs.items.map((item) => {
                  const isActive = item.id === activeTabItem.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveTabId(item.id)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-blue-600 dark:bg-amber-500 text-white dark:text-slate-950 shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>

              {/* Active Pattern Metadata */}
              <div className="bg-slate-50/80 dark:bg-slate-950/80 rounded-xl p-4 border border-slate-200 dark:border-slate-800 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-2">
                  {activeTabItem.pattern && (
                    <div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Stroke Grid: </span>
                      <span className="font-mono text-blue-600 dark:text-amber-400 font-bold">{activeTabItem.pattern}</span>
                    </div>
                  )}
                  {activeTabItem.chords && (
                    <div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Chords: </span>
                      <span className="text-slate-800 dark:text-slate-200">{activeTabItem.chords}</span>
                    </div>
                  )}
                  {activeTabItem.tempo && (
                    <div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Default Tempo: </span>
                      <span className="text-slate-800 dark:text-slate-200">{activeTabItem.tempo} BPM</span>
                    </div>
                  )}
                </div>
                {activeTabItem.description && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {activeTabItem.description}
                  </p>
                )}
              </div>

              {/* AlphaTex Player */}
              <AlphaTexRenderer
                key={activeTabItem.id}
                alphaTex={activeTabItem.alphaTab}
                title={activeTabItem.title}
                tempo={activeTabItem.tempo || 80}
              />
            </div>
          </section>
        )}

        {/* Content Sections */}
        {data.sections.map((section, i) => (
          <SectionComponent key={i} section={section} onSelectTab={(tabId) => setActiveTabId(tabId)} />
        ))}

        {/* Practice Section */}
        {data.practiceSection && (
          <section className="mb-12">
            <div className="bg-amber-50/60 dark:bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-amber-200 dark:border-slate-800 shadow-sm dark:shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🎸</span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{data.practiceSection.title}</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                Apply these concepts to your daily practice with focused, progressive exercises.
              </p>
              {data.practiceSection.items && (
                <ul className="space-y-3">
                  {data.practiceSection.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/80 dark:bg-slate-950/80 border border-amber-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed shadow-xs"
                    >
                      <span className="shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 font-bold text-xs flex items-center justify-center border border-amber-300 dark:border-amber-700/50">
                        {i + 1}
                      </span>
                      <span className="flex-1">{renderLinkedText(item)}</span>
                    </li>
                  ))}
                </ul>
              )}
              {data.practiceSection.steps && (
                <ol className="space-y-4">
                  {data.practiceSection.steps.map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3.5 p-4 rounded-xl bg-white/80 dark:bg-slate-950/80 border border-amber-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-xs"
                    >
                      <span className="shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 rounded-full flex items-center justify-center font-bold text-sm border border-blue-200 dark:border-blue-800/40">
                        {step.number || i + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">{step.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {renderLinkedText(step.description)}
                        </p>
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
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Related Topics & Next Steps</h2>
            <div className={`grid grid-cols-1 ${data.relatedTopics.length > 1 ? 'md:grid-cols-2' : ''} gap-4`}>
              {data.relatedTopics.map((topic, i) =>
                topic.href ? (
                  <Link
                    key={i}
                    href={topic.href}
                    className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-slate-700 hover:shadow-lg dark:hover:shadow-amber-500/5 group flex flex-col justify-between transition-all"
                  >
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors mb-2 flex items-center gap-2">
                        {topic.icon && <span>{topic.icon}</span>}
                        <span>{topic.title || topic.label}</span>
                      </h3>
                      {topic.description && (
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {topic.description}
                        </p>
                      )}
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-amber-400 group-hover:translate-x-0.5 transition-transform">
                      <span>Explore Lesson</span>
                      <span>&rarr;</span>
                    </div>
                  </Link>
                ) : (
                  <div
                    key={i}
                    className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-800"
                  >
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                      {topic.icon && <span>{topic.icon}</span>}
                      <span>{topic.title || topic.label}</span>
                    </h3>
                    {topic.description && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                        {topic.description}
                      </p>
                    )}
                    {topic.links && (
                      <div className="flex flex-wrap gap-2.5 mt-3">
                        {topic.links.map((link: { href: string; label: string; style?: string }, j: number) => (
                          <Link
                            key={j}
                            href={link.href}
                            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold ${
                              link.style === 'primary'
                                ? 'bg-blue-600 dark:bg-amber-500 text-white dark:text-slate-950 hover:bg-blue-700 dark:hover:bg-amber-400'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                            } transition-colors`}
                          >
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
