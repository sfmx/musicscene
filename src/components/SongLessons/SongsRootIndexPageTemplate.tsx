"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getSongsRootIndexData } from '@/lib/songLessonData';
import LeadMagnetBanner from '@/components/Revenue/LeadMagnetBanner';

function getStepColorClasses(bgColor?: string, textColor?: string) {
  if (bgColor?.includes('green')) return 'bg-green-100 dark:bg-green-950/60 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800/40';
  if (bgColor?.includes('blue')) return 'bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800/40';
  if (bgColor?.includes('purple')) return 'bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800/40';
  if (bgColor?.includes('orange')) return 'bg-orange-100 dark:bg-orange-950/60 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800/40';
  if (bgColor?.includes('amber') || bgColor?.includes('yellow')) return 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/40';
  if (bgColor?.includes('red') || bgColor?.includes('rose')) return 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800/40';
  return `${bgColor || 'bg-slate-100'} ${textColor || 'text-slate-800'} dark:bg-slate-800 dark:text-slate-200 border-transparent dark:border-slate-700`;
}

export default function SongsRootIndexPageTemplate() {
  const data = getSongsRootIndexData();

  return (
    <Layout>
      <Header title={data.pageTitle} subtitle={data.subtitle} />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <Breadcrumbs pathname="/lessons/songs" pageTitle={data.pageTitle} />

        {/* Introduction Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800/90 rounded-2xl p-8 border border-blue-100 dark:border-slate-800 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{data.overview.title}</h2>
            <div className="prose prose-lg text-gray-700 dark:text-slate-300 max-w-none">
              <p>{data.overview.text}</p>
              {data.overview.bulletItems && data.overview.bulletItems.length > 0 && (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 text-gray-700 dark:text-slate-300">
                  {data.overview.bulletItems.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{data.learningPath.title}</h2>
          <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 border border-gray-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-wrap gap-3">
              {data.learningPath.steps.map((step, i) => (
                <div key={i} className={`px-4 py-2 ${getStepColorClasses(step.colorBg, step.colorText)} rounded-full text-sm font-medium border`}>
                  {step.title}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Topic Cards */}
        <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="group bg-white dark:bg-slate-900/90 rounded-2xl border border-gray-200 dark:border-slate-800 p-6 hover:border-blue-400 dark:hover:border-slate-700 hover:shadow-lg dark:hover:shadow-amber-500/5 transition-all duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {topic.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Free Practice Guide Lead Magnet */}
        <LeadMagnetBanner className="mt-12" />

        {/* Featured Songs */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{data.featured.title}</h2>
            <Link href={data.featured.viewAllLink.href} className="text-blue-600 dark:text-amber-400 hover:text-blue-800 dark:hover:text-amber-300 font-medium">
              {data.featured.viewAllLink.label} →
            </Link>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-slate-900 dark:to-slate-800/90 rounded-2xl p-8 border border-purple-100 dark:border-slate-800 shadow-sm">
            <div className="text-center">
              <div className="text-6xl mb-4">{data.featured.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{data.featured.subtitle}</h3>
              <p className="text-gray-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">{data.featured.description}</p>
              <Link
                href={data.featured.link.href}
                className="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-amber-500 text-white dark:text-slate-950 rounded-lg hover:bg-blue-700 dark:hover:bg-amber-400 transition-colors font-medium"
              >
                {data.featured.link.label}
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
