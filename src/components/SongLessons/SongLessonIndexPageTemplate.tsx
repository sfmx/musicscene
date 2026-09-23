"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getSongLessonIndexData } from '@/lib/songLessonData';
import { getDifficultyColor } from '@/lib/utils';

interface Props {
  category: string;
}

function getStepColorClasses(bgColor?: string, textColor?: string) {
  if (bgColor?.includes('green')) return 'bg-green-100 dark:bg-green-950/60 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800/40';
  if (bgColor?.includes('blue')) return 'bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800/40';
  if (bgColor?.includes('purple')) return 'bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800/40';
  if (bgColor?.includes('orange')) return 'bg-orange-100 dark:bg-orange-950/60 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800/40';
  if (bgColor?.includes('amber') || bgColor?.includes('yellow')) return 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/40';
  if (bgColor?.includes('red') || bgColor?.includes('rose')) return 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800/40';
  return `${bgColor || 'bg-blue-100'} ${textColor || 'text-blue-800'} dark:bg-slate-800 dark:text-slate-200 border-transparent dark:border-slate-700`;
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
        <section className={`mb-12 ${data.heroGradient || 'bg-gradient-to-r from-blue-50 to-indigo-50'} dark:from-slate-900 dark:to-slate-800/90 rounded-2xl p-8 border border-slate-200/60 dark:border-slate-800 shadow-sm`}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{data.overview.title}</h2>
          {data.overview.text && (
            <div className="prose prose-lg text-gray-700 dark:text-slate-300 max-w-none">
              <p>{data.overview.text}</p>
            </div>
          )}
          {data.overview.bulletItems && data.overview.bulletItems.length > 0 && (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 text-gray-700 dark:text-slate-300">
              {data.overview.bulletItems.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          )}
          {data.overview.columns && data.overview.columns.length > 0 && (
            <div className={`grid md:grid-cols-${data.overview.columns.length} gap-6 mt-6`}>
              {data.overview.columns.map((col, i) => (
                <div key={i} className="bg-white dark:bg-slate-900/90 p-5 rounded-xl border border-gray-100 dark:border-slate-800 shadow-xs">
                  {col.title && (
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                      {col.icon && <span className="mr-1">{col.icon}</span>}{col.title}
                    </h3>
                  )}
                  <p className="text-sm text-gray-600 dark:text-slate-300">{col.text}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Learning Path */}
        {data.learningPath && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{data.learningPath.title}</h2>
            {data.learningPath.type === 'pills' && (
              <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 border border-gray-200 dark:border-slate-800 shadow-sm">
                <div className="flex flex-wrap gap-3">
                  {data.learningPath.steps.map((step, i) => {
                    const stepBg = step.colorBg || (step as any).bgColor;
                    const stepText = step.colorText || (step as any).textColor;
                    return (
                      <div key={i} className={`px-4 py-2 ${getStepColorClasses(stepBg, stepText)} rounded-full text-sm font-medium border`}>
                        {step.title}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {data.learningPath.type === 'ordered-list' && (
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/50 rounded-2xl p-6">
                <ol className="space-y-2 text-gray-700 dark:text-slate-300">
                  {data.learningPath.steps.map((step, i) => (
                    <li key={i}><strong className="text-gray-900 dark:text-white">{i + 1}. {step.title}</strong>{step.description ? ` - ${step.description}` : ''}</li>
                  ))}
                </ol>
              </div>
            )}
            {data.learningPath.type === 'numbered-steps' && (
              <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-8 border border-gray-200 dark:border-slate-800 shadow-sm">
                <div className={`grid md:grid-cols-${Math.min(data.learningPath.steps.length, 4)} gap-6`}>
                  {data.learningPath.steps.map((step, i) => {
                    const stepBg = step.colorBg || (step as any).bgColor;
                    const stepText = step.colorText || (step as any).textColor;
                    return (
                      <div key={i} className="text-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 border ${getStepColorClasses(stepBg, stepText)}`}>
                          <span className="font-bold">{step.number ?? i + 1}</span>
                        </div>
                        <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{step.title}</h3>
                        {step.description && <p className="text-gray-600 dark:text-slate-300 text-sm">{step.description}</p>}
                      </div>
                    );
                  })}
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
              className="group bg-white dark:bg-slate-900/90 rounded-2xl shadow-sm hover:shadow-xl dark:hover:shadow-amber-500/5 transition-all duration-300 overflow-hidden border border-gray-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-slate-700 flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{topic.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                  {topic.description}
                </p>
              </div>
              {(topic.difficulty || topic.theory || topic.focus || topic.context) && (
                <div className="px-6 pb-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-sm">
                  {topic.difficulty && (
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(topic.difficulty)}`}>
                      {topic.difficulty}
                    </span>
                  )}
                  {(topic.theory || topic.focus || topic.context) && (
                    <span className="text-gray-500 dark:text-slate-400 text-xs">
                      {topic.theory || topic.focus || topic.context}
                    </span>
                  )}
                </div>
              )}
            </Link>
          ))}
        </section>

        {/* Featured Section */}
        {data.featured && (
          <section className={`mt-16 ${data.featured.bgColor || 'bg-gray-50'} dark:bg-slate-900/90 ${data.featured.borderColor ? `border ${data.featured.borderColor}` : 'border border-gray-200'} dark:border-slate-800 rounded-2xl p-8 shadow-sm`}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{data.featured.title}</h2>
            {data.featured.columns && data.featured.columns.length > 0 && (
              <div className={`grid md:grid-cols-${data.featured.columns.length} gap-4 text-sm`}>
                {data.featured.columns.map((col, i) => (
                  <div key={i}>
                    <p className="text-gray-800 dark:text-white mb-2"><strong>{col.title}</strong></p>
                    <p className="text-gray-700 dark:text-slate-300">{col.text}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Info Sections */}
        {data.infoSections && data.infoSections.map((section, i) => (
          <section key={i} className={`mt-12 ${section.bgColor || 'bg-gray-50'} dark:bg-slate-900/90 ${section.borderColor ? `border ${section.borderColor}` : 'border border-gray-200'} dark:border-slate-800 rounded-2xl p-6 shadow-sm`}>
            <h3 className={`text-lg font-semibold ${section.titleColor || 'text-gray-900'} dark:text-white mb-4`}>
              {section.icon && <span className="mr-2">{section.icon}</span>}{section.title}
            </h3>
            {section.content && (
              <div className={`text-sm ${section.textColor || 'text-gray-700'} dark:text-slate-300`}>
                <p>{section.content}</p>
              </div>
            )}
            {section.items && section.items.length > 0 && (
              <ul className={`space-y-2 text-sm ${section.textColor || 'text-gray-700'} dark:text-slate-300`}>
                {section.items.map((item, j) => (
                  <li key={j}>• {item}</li>
                ))}
              </ul>
            )}
            {section.columns && section.columns.length > 0 && (
              <div className={`grid md:grid-cols-${section.columns.length} gap-4 text-sm`}>
                {section.columns.map((col, j) => (
                  <div key={j}>
                    <p className={`${section.titleColor || 'text-gray-800'} dark:text-white mb-2 font-bold`}>{col.title}</p>
                    <p className={section.textColor || 'text-gray-700 dark:text-slate-300'}>{col.text}</p>
                  </div>
                ))}
              </div>
            )}
            {section.links && section.links.length > 0 && (
              <div className="space-y-3 mt-4">
                {section.links.map((link, j) => (
                  <Link key={j} href={link.href} className="block text-sm text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium">
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
            <div className={`${data.nextSteps.bgColor || 'bg-blue-50'} dark:bg-slate-900/90 rounded-2xl p-6 border border-blue-100 dark:border-slate-800 shadow-sm`}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{data.nextSteps.title}</h3>
              {data.nextSteps.description && (
                <p className="text-gray-700 dark:text-slate-300 mb-4">{data.nextSteps.description}</p>
              )}
              {data.nextSteps.link && (
                <Link
                  href={data.nextSteps.link.href}
                  className={`inline-flex items-center px-6 py-3 ${data.nextSteps.link.bgColor || 'bg-blue-600 dark:bg-amber-500'} text-white dark:text-slate-950 font-medium rounded-lg hover:opacity-90 transition-colors`}
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
