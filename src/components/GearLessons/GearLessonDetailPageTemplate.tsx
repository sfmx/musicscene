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
    <div className={`${card.bgColor || 'bg-white'} rounded-lg p-6 ${card.borderColor ? `border-l-4 ${card.borderColor}` : 'border border-gray-200'}`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-900">
          {card.icon && <span className="mr-2">{card.icon}</span>}
          {card.number !== undefined && (
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold text-sm mr-3">{card.number}</span>
          )}
          <AffiliateLink productName={card.title} className="text-gray-900" />
        </h3>
        {card.badge && (
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${card.badge.color}`}>{card.badge.text}</span>
        )}
      </div>
      {card.description && <p className="text-gray-600 text-sm leading-relaxed mb-3">{card.description}</p>}
      {card.fields && card.fields.length > 0 && (
        <div className="space-y-2 text-sm">
          {card.fields.map((f, i) => (
            <div key={i}><span className="font-semibold text-gray-700"><AffiliateLink productName={f.label} className="text-gray-700 font-semibold" />: </span><span className="text-gray-600"><SmartAffiliateText text={f.value} /></span></div>
          ))}
        </div>
      )}
      {card.items && card.items.length > 0 && (
        <ul className="mt-2 space-y-1 text-sm text-gray-600">
          {card.items.map((item, i) => <li key={i}>• <AffiliateLink productName={item} /></li>)}
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
      <div className={`${section.bgColor || ''} ${section.borderColor ? `border ${section.borderColor}` : ''} ${section.bgColor || section.borderColor ? 'rounded-xl p-6' : ''}`}>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
        {section.subtitle && <p className="text-gray-600 mb-6">{section.subtitle}</p>}
        {section.warningText && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <p className="text-amber-800 text-sm"><strong>⚠️ Note:</strong> {section.warningText}</p>
          </div>
        )}
        {section.layout === 'table' && section.tableHeaders && section.tableRows ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  {section.tableHeaders.map((h, i) => (
                    <th key={i} className="text-left p-3 font-semibold text-gray-700 border-b">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.tableRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {row.map((cell, j) => (
                      <td key={j} className="p-3 text-gray-600 border-b"><AffiliateLink productName={cell} /></td>
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
      <Header title={data.pageTitle} subtitle={data.subtitle} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs pathname={pathname} pageTitle={data.pageTitle} />

        {/* Introduction */}
        <section className={`mb-12 ${data.heroGradient} rounded-xl p-8`}>
          {data.introduction.title && <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.introduction.title}</h2>}
          {data.introduction.text.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>
          ))}
          {data.introduction.quote && (
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-600 italic">{data.introduction.quote}</p>
            </div>
          )}
          {data.introduction.columns && data.introduction.columns.length > 0 && (
            <div className={`grid md:grid-cols-${data.introduction.columns.length} gap-6 mt-4`}>
              {data.introduction.columns.map((col, i) => (
                <div key={i} className="bg-white rounded-lg p-4">
                  {col.title && <h3 className="font-semibold text-gray-800 mb-2">{col.icon && <span className="mr-1">{col.icon}</span>}{col.title}</h3>}
                  <p className="text-gray-600 text-sm">{col.text}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        <AdSlot slotId="sidebar-gear" format="rectangle" />

        {/* Content Sections */}
        {data.sections.map((section, i) => <SectionComponent key={i} section={section} />)}

        <AdSlot slotId="content-bottom" format="banner" />

        <RelatedContentSection contentId={`gear-lesson:${dataKey}`} />

        {/* Related Topics */}
        {data.relatedTopics && data.relatedTopics.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Topics</h2>
            <div className={`grid grid-cols-1 ${data.relatedTopics.length > 1 ? 'md:grid-cols-2' : ''} gap-4`}>
              {data.relatedTopics.map((topic, i) => (
                <Link key={i} href={topic.href} className={`${topic.bgColor || 'bg-blue-50'} rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-200`}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.icon && <span className="mr-2">{topic.icon}</span>}{topic.title}</h3>
                  {topic.description && <p className="text-sm text-gray-600">{topic.description}</p>}
                </Link>
              ))}
            </div>
          </section>
        )}
        <SequentialNav nav={nav} typeLabel="Gear Lesson" />
      </main>
    </Layout>
  );
}
