"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getGearIndexData, GearIndexData, GearContentSection, GearContentCard } from '@/lib/gearLessonData';

function CardComponent({ card }: { card: GearContentCard }) {
  return (
    <div className={`${card.bgColor || 'bg-white'} rounded-lg p-6 ${card.borderColor ? `border-l-4 ${card.borderColor}` : 'border border-gray-200'}`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-900">
          {card.icon && <span className="mr-2">{card.icon}</span>}
          {card.title}
        </h3>
        {card.badge && (
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${card.badge.color}`}>{card.badge.text}</span>
        )}
      </div>
      {card.description && <p className="text-gray-600 text-sm leading-relaxed mb-3">{card.description}</p>}
      {card.fields && card.fields.length > 0 && (
        <div className="space-y-2 text-sm">
          {card.fields.map((f, i) => (
            <div key={i}><span className="font-semibold text-gray-700">{f.label}: </span><span className="text-gray-600">{f.value}</span></div>
          ))}
        </div>
      )}
      {card.items && card.items.length > 0 && (
        <ul className="mt-2 space-y-1 text-sm text-gray-600">
          {card.items.map((item, i) => <li key={i}>• {item}</li>)}
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
                      <td key={j} className="p-3 text-gray-600 border-b">{cell}</td>
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
  const data = getGearIndexData(category);

  return (
    <Layout>
      <Header title={data.pageTitle} subtitle={data.subtitle} />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation */}
        <Breadcrumbs pathname={`/lessons/gear/${category}`} pageTitle={data.pageTitle} />

        {/* Hero */}
        <section className={`mb-12 ${data.heroGradient} rounded-xl p-8`}>
          {data.heroInfo && (
            <>
              {data.heroInfo.title && <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.heroInfo.title}</h2>}
              {data.heroInfo.text && <p className="text-gray-700 leading-relaxed mb-4">{data.heroInfo.text}</p>}
              {data.heroInfo.items && (
                <ul className="space-y-1 text-gray-600 text-sm">
                  {data.heroInfo.items.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              )}
            </>
          )}
        </section>

        {/* Types Grid */}
        <section className="mb-12">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.types.map((type) => (
              <Link
                key={type.href}
                href={type.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{type.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{type.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
                  {type.category && (
                    <span className="inline-block mt-3 px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600">{type.category}</span>
                  )}
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
    </Layout>
  );
}
