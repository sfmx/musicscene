"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getPracticeIndexData, PracticeIndexData } from '@/lib/practiceData';

interface Props {
  category: string;
}

export default function PracticeIndexPageTemplate({ category }: Props) {
  const data: PracticeIndexData = getPracticeIndexData(category);

  return (
    <Layout>
      <Header title={data.pageTitle} subtitle={data.subtitle} />
      <div className={`min-h-screen ${data.heroGradient} py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <Breadcrumbs pathname={`/lessons/practice/${category}`} pageTitle={data.pageTitle} />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">{data.heroIcon}</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{data.heroTitle}</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{data.heroDescription}</p>
          </div>

          {/* Intro Section */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{data.introSection.title}</h2>

              {/* Benefits/Items Grid */}
              {data.introSection.items && data.introSection.items.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  {data.introSection.items.map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              {data.introSection.description && (
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{data.introSection.description}</p>
                </div>
              )}

              {/* Columns */}
              {data.introSection.columns && data.introSection.columns.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {data.introSection.columns.map((col, i) => (
                    <div key={i} className={`${col.colorBg} rounded-lg p-6 ${col.colorBorder ? `border ${col.colorBorder}` : ''}`}>
                      <h3 className={`text-xl font-semibold ${col.colorTitle} mb-4`}>{col.title}</h3>
                      <ul className={`${col.colorText} space-y-2`}>
                        {col.items.map((item, j) => (
                          <li key={j}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Tips Section */}
          {data.introSection.tips && data.introSection.tips.length > 0 && (
            <section className="mb-16">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Tips</h2>
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.introSection.tips.map((tip, i) => (
                      <div key={i} className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-400">
                        <div className="flex items-center mb-3">
                          <span className="text-2xl mr-3">{tip.icon}</span>
                          <h3 className="text-lg font-semibold text-gray-900">{tip.title}</h3>
                        </div>
                        <p className="text-gray-700">{tip.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Progressive Steps */}
          {data.introSection.progressiveSteps && data.introSection.progressiveSteps.length > 0 && (
            <section className="mb-16">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Progressive Structure</h2>
                <div className="max-w-4xl mx-auto">
                  <div className="space-y-6">
                    {data.introSection.progressiveSteps.map((step, i) => (
                      <div key={i} className="flex items-start">
                        <div className={`${step.colorBg || 'bg-blue-100'} ${step.colorText || 'text-blue-600'} rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 mt-1`}>
                          {step.icon || step.number || i + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                          {step.description && <p className="text-gray-600">{step.description}</p>}
                          {step.items && step.items.length > 0 && (
                            <ul className="text-gray-600 space-y-1 mt-1">
                              {step.items.map((item, j) => (
                                <li key={j}>• {item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Item Types Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.itemTypes.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${item.color} border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 group`}
                >
                  <div className="text-center">
                    <div className={`${item.iconColor} mb-4 group-hover:scale-110 transition-transform`}>
                      <span style={{ fontSize: 32 }}>{item.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                    {(item.difficulty || item.duration) && (
                      <div className="flex justify-center gap-2 mb-3">
                        {item.difficulty && (
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                            item.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                            item.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                            item.difficulty === 'Advanced' ? 'bg-orange-100 text-orange-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {item.difficulty}
                          </span>
                        )}
                        {item.duration && (
                          <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                            {item.duration}
                          </span>
                        )}
                      </div>
                    )}
                    <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Journey Section */}
          {data.journeySection && (
          <section className="text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{data.journeySection.title}</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{data.journeySection.description}</p>
              <div className="flex flex-wrap justify-center gap-4">
                {data.journeySection.links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className={`${link.colorBg} ${link.colorText} px-6 py-3 rounded-lg ${link.colorHover} transition-colors`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          )}
        </div>
      </div>
    </Layout>
  );
}
