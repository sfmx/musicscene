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
        <section
          className={`mb-12 ${
            data.heroGradient || 'bg-gradient-to-r from-blue-50 to-indigo-50'
          } dark:bg-slate-900 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm dark:shadow-xl`}
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{data.overview.title}</h2>
          {data.overview.text && (
            <div className="prose prose-lg text-slate-700 dark:text-slate-300 max-w-none text-sm sm:text-base leading-relaxed">
              <p>{data.overview.text}</p>
            </div>
          )}
          {data.overview.bulletItems && data.overview.bulletItems.length > 0 && (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 text-slate-700 dark:text-slate-300 text-sm">
              {data.overview.bulletItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-500 dark:text-amber-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {data.overview.columns && data.overview.columns.length > 0 && (
            <div className={`grid md:grid-cols-${data.overview.columns.length} gap-4 sm:gap-6 mt-6`}>
              {data.overview.columns.map((col, i) => (
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
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">{col.text}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Learning Path */}
        {data.learningPath && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{data.learningPath.title}</h2>
            {data.learningPath.type === 'pills' && (
              <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl">
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
              <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl">
                <div className="space-y-4">
                  {data.learningPath.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 flex items-center justify-center font-bold text-sm shrink-0 border border-amber-300 dark:border-amber-700/50">
                        {step.number || i + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                        {step.description && <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{step.description}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {data.learningPath.type === 'numbered-steps' && (
              <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl">
                <div className="grid md:grid-cols-4 gap-6">
                  {data.learningPath.steps.map((step, i) => {
                    const stepBg = step.colorBg || (step as any).bgColor;
                    const stepText = step.colorText || (step as any).textColor;
                    return (
                      <div
                        key={i}
                        className="bg-slate-50/80 dark:bg-slate-950/80 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col items-center text-center"
                      >
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 border ${getStepColorClasses(
                            stepBg,
                            stepText
                          )} shadow-xs`}
                        >
                          <span className="font-bold text-base">{step.number || i + 1}</span>
                        </div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">{step.title}</h3>
                        {step.description && (
                          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">{step.description}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Topics Grid */}
        <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="group bg-white dark:bg-slate-900/90 rounded-2xl shadow-sm hover:shadow-xl dark:hover:shadow-amber-500/5 transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-amber-400/50 dark:hover:border-slate-700 flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">{topic.icon}</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-4 leading-relaxed">{topic.description}</p>
              </div>

              <div className="px-6 pb-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                {topic.difficulty && (
                  <span className={`px-2.5 py-0.5 rounded-full font-semibold border ${getDifficultyColor(topic.difficulty)} font-semibold`}>
                    {topic.difficulty}
                  </span>
                )}
                {topic.theory && (
                  <span className="text-slate-500 dark:text-slate-400 text-[11px] truncate max-w-[180px]">
                    {topic.theory}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </section>

        {/* Featured Section */}
        {data.featured && (
          <section className="mt-16 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm dark:shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{data.featured.title}</h2>
            {data.featured.columns && (
              <div className={`grid md:grid-cols-${data.featured.columns.length} gap-4 text-xs sm:text-sm`}>
                {data.featured.columns.map((col, i) => (
                  <div key={i} className="bg-slate-50/80 dark:bg-slate-950/80 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
                    <p className="text-slate-900 dark:text-white mb-1.5 font-bold text-sm">{col.title}</p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{col.text}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Info Sections */}
        {data.infoSections && data.infoSections.length > 0 && (
          data.infoSections.map((info, i) => (
            <section key={i} className="mt-12 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm dark:shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                {info.icon && <span>{info.icon}</span>}
                <span>{info.title}</span>
              </h3>
              {info.content && (
                <div className="text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  <p>{info.content}</p>
                </div>
              )}
              {info.items && info.items.length > 0 && (
                <ul className="space-y-2 mb-4 text-sm text-slate-700 dark:text-slate-300">
                  {info.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-blue-500 dark:text-amber-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {info.columns && info.columns.length > 0 && (
                <div className={`grid md:grid-cols-${info.columns.length} gap-4 text-xs sm:text-sm`}>
                  {info.columns.map((col, j) => (
                    <div key={j} className="bg-slate-50/80 dark:bg-slate-950/80 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
                      <p className="text-slate-900 dark:text-white mb-1.5 font-bold text-sm">{col.title}</p>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{col.text}</p>
                    </div>
                  ))}
                </div>
              )}
              {info.links && info.links.length > 0 && (
                <div className="flex flex-wrap gap-2.5 mt-4">
                  {info.links.map((link, j) => (
                    <Link
                      key={j}
                      href={link.href}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 dark:bg-slate-800 text-amber-700 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </section>
          ))
        )}

        {/* Next Steps */}
        {data.nextSteps && (
          <section className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:bg-slate-900/90 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm dark:shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{data.nextSteps.title}</h3>
              {data.nextSteps.description && (
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
                  {data.nextSteps.description}
                </p>
              )}
              {data.nextSteps.link && (
                <Link
                  href={data.nextSteps.link.href}
                  className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-colors shadow-sm"
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
