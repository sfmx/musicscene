"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import { getSongLessonDetailData, SongLessonDetailData, ContentSection, ContentCard } from '@/lib/songLessonData';
import RelatedContentSection from '@/components/RelatedContent/RelatedContentSection';
import AdSlot from '@/components/Revenue/AdSlot';
import Breadcrumbs from '@/components/Breadcrumbs';
import SequentialNav from '@/components/SequentialNav';
import { getSequentialNav } from '@/lib/sequentialNav';

const difficultyColors: Record<string, string> = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-red-100 text-red-800',
};

function CardComponent({ card }: { card: ContentCard }) {
  return (
    <div className={`${card.bgColor || 'bg-white'} rounded-lg p-6 ${card.borderColor ? `border-l-4 ${card.borderColor}` : 'border border-gray-200'}`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-900">
          {card.icon && <span className="mr-2">{card.icon}</span>}
          {card.number !== undefined && (
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold text-sm mr-3">
              {card.number}
            </span>
          )}
          {card.title}
        </h3>
        {card.badge && (
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${card.badge.color || difficultyColors[card.badge.text] || 'bg-gray-100 text-gray-800'}`}>
            {card.badge.text}
          </span>
        )}
      </div>
      {card.description && (
        <p className="text-gray-600 text-sm leading-relaxed mb-3">{card.description}</p>
      )}
      {card.fields && card.fields.length > 0 && (
        <div className="space-y-2 text-sm">
          {card.fields.map((field, i) => (
            <div key={i}>
              <span className="font-semibold text-gray-700">{field.label}: </span>
              <span className="text-gray-600">{field.value}</span>
            </div>
          ))}
        </div>
      )}
      {card.items && card.items.length > 0 && (
        <ul className="mt-2 space-y-1 text-sm text-gray-600">
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
      <div className={`${section.bgColor || ''} ${section.borderColor ? `border ${section.borderColor}` : ''} ${section.bgColor || section.borderColor ? 'rounded-xl p-6' : ''}`}>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
        {section.subtitle && (
          <p className="text-gray-600 mb-6">{section.subtitle}</p>
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
        <section className={`mb-12 ${data.heroGradient} rounded-xl p-8`}>
          {data.introduction.title && (
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.introduction.title}</h2>
          )}
          <p className="text-gray-700 leading-relaxed mb-4">{data.introduction.text}</p>
          {data.introduction.quote && (
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-600 italic">{data.introduction.quote}</p>
            </div>
          )}
          {data.introduction.columns && data.introduction.columns.length > 0 && (
            <div className={`grid md:grid-cols-${data.introduction.columns.length} gap-6 mt-4`}>
              {data.introduction.columns.map((col, i) => (
                <div key={i} className="bg-white rounded-lg p-4">
                  {col.title && (
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {col.icon && <span className="mr-1">{col.icon}</span>}{col.title}
                    </h3>
                  )}
                  <p className="text-gray-600 text-sm">{col.text}</p>
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
            <div className={`${data.practiceSection.bgColor || 'bg-amber-50'} rounded-xl p-6 border border-amber-200`}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">{data.practiceSection.title}</h2>
              {data.practiceSection.items && (
                <ol className="space-y-2 text-gray-700">
                  {data.practiceSection.items.map((item, i) => (
                    <li key={i}>{i + 1}. {item}</li>
                  ))}
                </ol>
              )}
              {data.practiceSection.steps && (
                <ol className="space-y-4 text-gray-700">
                  {data.practiceSection.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-sm">
                        {step.number || i + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-gray-900">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.description}</p>
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
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Topics</h2>
            <div className={`grid grid-cols-1 ${data.relatedTopics.length > 1 ? 'md:grid-cols-2' : ''} gap-4`}>
              {data.relatedTopics.map((topic, i) =>
                topic.href ? (
                  <Link
                    key={i}
                    href={topic.href}
                    className={`${topic.bgColor || 'bg-blue-50'} rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-200`}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {topic.icon && <span className="mr-2">{topic.icon}</span>}{topic.title || topic.label}
                    </h3>
                    {topic.description && (
                      <p className="text-sm text-gray-600">{topic.description}</p>
                    )}
                  </Link>
                ) : (
                  <div key={i} className={`${topic.bgColor || 'bg-blue-50'} rounded-xl p-6 border border-gray-200`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {topic.icon && <span className="mr-2">{topic.icon}</span>}{topic.title || topic.label}
                    </h3>
                    {topic.description && (
                      <p className="text-sm text-gray-600 mb-4">{topic.description}</p>
                    )}
                    {topic.links && (
                      <div className="flex flex-wrap gap-3 mt-3">
                        {topic.links.map((link: { href: string; label: string; style?: string }, j: number) => (
                          <Link key={j} href={link.href} className={`px-4 py-2 rounded-lg text-sm font-medium ${link.style === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'} transition-colors`}>
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
