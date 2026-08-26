"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getSongsRootIndexData } from '@/lib/songLessonData';

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
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.overview.title}</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>{data.overview.text}</p>
              {data.overview.bulletItems && data.overview.bulletItems.length > 0 && (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{data.learningPath.title}</h2>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex flex-wrap gap-3">
              {data.learningPath.steps.map((step, i) => (
                <div key={i} className={`px-4 py-2 ${step.colorBg} ${step.colorText} rounded-full text-sm font-medium`}>
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
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {topic.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Featured Songs */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{data.featured.title}</h2>
            <Link href={data.featured.viewAllLink.href} className="text-blue-600 hover:text-blue-800 font-medium">
              {data.featured.viewAllLink.label} →
            </Link>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-100">
            <div className="text-center">
              <div className="text-6xl mb-4">{data.featured.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{data.featured.subtitle}</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{data.featured.description}</p>
              <Link
                href={data.featured.link.href}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
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
