"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getCategoryRootData, CategoryRootData } from '@/lib/categoryRootData';

interface Props {
  category: string;
}

export default function CategoryRootPageTemplate({ category }: Props) {
  const data = getCategoryRootData(category);

  return (
    <Layout>
      <Header title={data.pageTitle} subtitle={data.subtitle} />
      <div className={`min-h-screen ${data.heroGradient} py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <Breadcrumbs pathname={`/lessons/${category}`} pageTitle={data.pageTitle} />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">{data.heroIcon}</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{data.pageTitle}</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{data.heroDescription}</p>
          </div>

          {/* Philosophy/Benefits */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{data.philosophySection.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.philosophySection.items.map((item, i) => (
                  <div key={i} className={`${item.color} rounded-lg p-6 border-2`}>
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Learning Path */}
          {data.learningPath && (
            <section className="mb-16">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{data.learningPath.title}</h2>
                <div className="space-y-6">
                  {data.learningPath.steps.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-8 h-8 ${item.color || 'bg-blue-600'} text-white rounded-full flex items-center justify-center font-bold text-sm`}>
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Practice Structure */}
          {data.practiceStructure && (
            <section className="mb-16">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{data.practiceStructure.title}</h2>
                <div className="space-y-4">
                  {data.practiceStructure.phases.map((phase, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`${phase.color} rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm`}>
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                          <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{phase.duration}</span>
                        </div>
                        <p className="text-gray-600">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {data.practiceStructure.tip && (
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800"><strong>💡 Pro Tip:</strong> {data.practiceStructure.tip}</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Topic Cards */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{data.topicCards.sectionTitle}</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {data.topicCards.items.map((topic) => (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className={`${topic.color} border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 group`}
                >
                  <div className="text-center mb-4">
                    <div className={`${topic.iconColor} text-4xl mb-3 group-hover:scale-110 transition-transform`}>
                      {topic.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
                    <p className="text-sm text-gray-700 mb-4">{topic.description}</p>
                  </div>
                  <div className="space-y-2">
                    {topic.concepts.map((concept, j) => (
                      <div key={j} className="text-xs bg-white bg-opacity-60 rounded px-3 py-1">{concept}</div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Practice Tools */}
          {data.practiceTools && (
            <section className="mb-16">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{data.practiceTools.title}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {data.practiceTools.items.map((tool, i) => (
                    <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-4">{tool.icon}</span>
                        <h3 className="text-xl font-semibold text-gray-900">{tool.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-4">{tool.description}</p>
                      <ul className="space-y-2">
                        {tool.tips.map((tip, j) => (
                          <li key={j} className="text-sm text-gray-600 flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>{tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Additional Sections */}
          {data.additionalSections && data.additionalSections.map((section, i) => (
            <section key={i} className="mb-16">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{section.title}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {section.columns.map((col, j) => (
                    <div key={j}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{col.title}</h3>
                      {col.text && <p className="text-gray-700 mb-4">{col.text}</p>}
                      {col.items && (
                        <ul className="text-sm text-gray-600 space-y-2">
                          {col.items.map((item, k) => <li key={k}>• {item}</li>)}
                        </ul>
                      )}
                      {col.cards && (
                        <div className="space-y-4">
                          {col.cards.map((card, k) => (
                            <div key={k} className={`${card.bgColor} rounded-lg p-4 border ${card.borderColor}`}>
                              <h4 className={`font-semibold ${card.titleColor} mb-2`}>{card.title}</h4>
                              <p className={`text-sm ${card.textColor}`}>{card.text}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* Getting Started */}
          <section className="text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{data.gettingStarted.title}</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{data.gettingStarted.description}</p>
              <div className="flex flex-wrap justify-center gap-4">
                {data.gettingStarted.links.map((link, i) => (
                  <Link key={i} href={link.href} className={`${link.color} ${link.textColor || 'text-white'} px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold`}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
