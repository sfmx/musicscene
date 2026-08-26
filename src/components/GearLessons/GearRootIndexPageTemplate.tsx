"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getGearRootIndexData } from '@/lib/gearLessonData';

export default function GearRootIndexPageTemplate() {
  const data = getGearRootIndexData();

  return (
    <Layout>
      <Header title={data.pageTitle} subtitle={data.subtitle} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <Breadcrumbs pathname="/lessons/gear" pageTitle={data.pageTitle} />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">{data.heroIcon}</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{data.pageTitle}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{data.subtitle}</p>
          </div>

          {/* Gear Philosophy */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Smart Gear Philosophy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.gearPhilosophy.map((item, i) => (
                  <div key={i} className={`${item.color} rounded-lg p-6 text-center`}>
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Signal Chain */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Understanding Your Signal Chain</h2>
              <div className="flex flex-wrap justify-center items-center gap-4">
                {data.toneChain.map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="bg-gray-50 rounded-lg p-4 text-center min-w-[140px]">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.component}</h3>
                      <p className="text-gray-600 text-xs">{item.description}</p>
                    </div>
                    {i < data.toneChain.length - 1 && (
                      <span className="text-2xl text-gray-400">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>

          {/* Budget Guide */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Budget Planning Guide</h2>
              <div className="flex flex-col gap-6">
                {data.budgetGuide.map((level, i) => (
                  <div key={i} className={`${level.color} rounded-lg p-6`}>
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{level.category}</h3>
                      <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700">{level.budget}</span>
                    </div>
                    <p className="text-gray-700 mb-3">{level.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm text-gray-600">
                      {level.items.map((item, j) => (
                        <li key={j}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Gear Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Gear Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.gearCategories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`${cat.color} border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 group`}
                >
                  <div className="text-center">
                    <div className={`${cat.iconColor} mb-4 group-hover:scale-110 transition-transform`}>
                      <span style={{ fontSize: 32 }}>{cat.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cat.title}</h3>
                    <p className="text-sm text-gray-700 mb-3">{cat.description}</p>
                    <div className="flex flex-wrap justify-center gap-1">
                      {cat.concepts.map((concept, j) => (
                        <span key={j} className="text-xs bg-white bg-opacity-60 px-2 py-0.5 rounded-full text-gray-600">{concept}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Maintenance Tips */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Maintenance & Care</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.maintenanceTips.map((cat, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-6">
                    <div className="text-2xl mb-3">{cat.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{cat.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{cat.description}</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {cat.tips.map((tip, j) => (
                        <li key={j}>• {tip}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Buying Strategies */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Smart Buying Strategies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.buyingStrategies.map((strategy, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">{strategy.title}</h3>
                    <div className="space-y-3">
                      {strategy.items.map((item: { title?: string; description?: string; color?: string } | string, j: number) => (
                        typeof item === 'string' ? (
                          <p key={j} className="text-sm text-gray-600">• {item}</p>
                        ) : (
                          <div key={j} className={`${item.color || 'bg-white'} rounded-lg p-3 border`}>
                            <h4 className="font-medium text-gray-900 text-sm">{item.title}</h4>
                            {item.description && <p className="text-xs text-gray-600 mt-1">{item.description}</p>}
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section className="text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{data.gettingStarted.title}</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{data.gettingStarted.description}</p>
              <div className="flex flex-wrap justify-center gap-4">
                {data.gettingStarted.links.map((link, i) => (
                  <Link key={i} href={link.href} className={`${link.color} text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity`}>
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
