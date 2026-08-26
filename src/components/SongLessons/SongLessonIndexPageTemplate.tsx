"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getSongLessonIndexData, SongLessonIndexData } from '@/lib/songLessonData';

const difficultyColors: Record<string, string> = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-red-100 text-red-800',
};

interface Props {
  category: string;
}

export default function SongLessonIndexPageTemplate({ category }: Props) {
  const data = getSongLessonIndexData(category);

  return (
    <Layout>
      <Header title={data.pageTitle} subtitle={data.subtitle} />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation */}
        <Breadcrumbs pathname={`/lessons/songs/${category}`} pageTitle={data.pageTitle} />

        {/* Overview Section */}
        <section className={`mb-12 ${data.heroGradient || 'bg-gradient-to-r from-blue-50 to-indigo-50'} rounded-xl p-8`}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.overview.title}</h2>
          {data.overview.text && (
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>{data.overview.text}</p>
            </div>
          )}
          {data.overview.bulletItems && data.overview.bulletItems.length > 0 && (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 text-gray-700">
              {data.overview.bulletItems.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          )}
          {data.overview.columns && data.overview.columns.length > 0 && (
            <div className={`grid md:grid-cols-${data.overview.columns.length} gap-6 mt-6`}>
              {data.overview.columns.map((col, i) => (
                <div key={i} className="bg-white p-4 rounded-lg">
                  {col.title && (
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {col.icon && <span className="mr-1">{col.icon}</span>}{col.title}
                    </h3>
                  )}
                  <p className="text-sm text-gray-600">{col.text}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Learning Path */}
        {data.learningPath && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{data.learningPath.title}</h2>
            {data.learningPath.type === 'pills' && (
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex flex-wrap gap-3">
                  {data.learningPath.steps.map((step, i) => (
                    <div key={i} className={`px-4 py-2 ${step.colorBg || 'bg-gray-100'} ${step.colorText || 'text-gray-800'} rounded-full text-sm font-medium`}>
                      {step.title}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {data.learningPath.type === 'ordered-list' && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <ol className="space-y-2 text-gray-700">
                  {data.learningPath.steps.map((step, i) => (
                    <li key={i}><strong>{i + 1}. {step.title}</strong>{step.description ? ` - ${step.description}` : ''}</li>
                  ))}
                </ol>
              </div>
            )}
            {data.learningPath.type === 'numbered-steps' && (
              <div className="bg-gray-50 rounded-xl p-8">
                <div className={`grid md:grid-cols-${Math.min(data.learningPath.steps.length, 4)} gap-6`}>
                  {data.learningPath.steps.map((step, i) => (
                    <div key={i} className="text-center">
                      <div className={`${step.colorBg || 'bg-blue-100'} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <span className={`${step.colorText || 'text-blue-800'} font-bold`}>{step.number ?? i + 1}</span>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
                      {step.description && <p className="text-gray-600 text-sm">{step.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Topic Cards */}
        <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{topic.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {topic.description}
                </p>
                {(topic.difficulty || topic.theory || topic.focus || topic.context) && (
                  <div className="flex items-center justify-between text-sm">
                    {topic.difficulty && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[topic.difficulty] || 'bg-gray-100 text-gray-800'}`}>
                        {topic.difficulty}
                      </span>
                    )}
                    {(topic.theory || topic.focus || topic.context) && (
                      <span className="text-gray-500 text-xs">
                        {topic.theory || topic.focus || topic.context}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </section>

        {/* Featured Section */}
        {data.featured && (
          <section className={`mt-16 ${data.featured.bgColor || 'bg-gray-50'} ${data.featured.borderColor ? `border ${data.featured.borderColor}` : ''} rounded-xl p-8`}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{data.featured.title}</h2>
            {data.featured.columns && data.featured.columns.length > 0 && (
              <div className={`grid md:grid-cols-${data.featured.columns.length} gap-4 text-sm`}>
                {data.featured.columns.map((col, i) => (
                  <div key={i}>
                    <p className="text-gray-800 mb-2"><strong>{col.title}</strong></p>
                    <p className="text-gray-700">{col.text}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Info Sections */}
        {data.infoSections && data.infoSections.map((section, i) => (
          <section key={i} className={`mt-12 ${section.bgColor || 'bg-gray-50'} ${section.borderColor ? `border ${section.borderColor}` : ''} rounded-xl p-6`}>
            <h3 className={`text-lg font-semibold ${section.titleColor || 'text-gray-900'} mb-4`}>
              {section.icon && <span className="mr-2">{section.icon}</span>}{section.title}
            </h3>
            {section.content && (
              <div className={`text-sm ${section.textColor || 'text-gray-700'}`}>
                <p>{section.content}</p>
              </div>
            )}
            {section.items && section.items.length > 0 && (
              <ul className={`space-y-2 text-sm ${section.textColor || 'text-gray-700'}`}>
                {section.items.map((item, j) => (
                  <li key={j}>• {item}</li>
                ))}
              </ul>
            )}
            {section.columns && section.columns.length > 0 && (
              <div className={`grid md:grid-cols-${section.columns.length} gap-4 text-sm`}>
                {section.columns.map((col, j) => (
                  <div key={j}>
                    <p className={`${section.titleColor || 'text-gray-800'} mb-2`}><strong>{col.title}</strong></p>
                    <p className={section.textColor || 'text-gray-700'}>{col.text}</p>
                  </div>
                ))}
              </div>
            )}
            {section.links && section.links.length > 0 && (
              <div className="space-y-3 mt-4">
                {section.links.map((link, j) => (
                  <Link key={j} href={link.href} className="block text-sm text-green-700 hover:text-green-800 font-medium">
                    → {link.label}
                  </Link>
                ))}
              </div>
            )}
          </section>
        ))}

        {/* Next Steps */}
        {data.nextSteps && (
          <section className="mt-12 text-center">
            <div className={`${data.nextSteps.bgColor || 'bg-blue-50'} rounded-xl p-6`}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{data.nextSteps.title}</h3>
              {data.nextSteps.description && (
                <p className="text-gray-700 mb-4">{data.nextSteps.description}</p>
              )}
              {data.nextSteps.link && (
                <Link
                  href={data.nextSteps.link.href}
                  className={`inline-flex items-center px-6 py-3 ${data.nextSteps.link.bgColor || 'bg-blue-600'} text-white font-medium rounded-lg hover:opacity-90 transition-colors`}
                >
                  {data.nextSteps.link.label} →
                </Link>
              )}
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
