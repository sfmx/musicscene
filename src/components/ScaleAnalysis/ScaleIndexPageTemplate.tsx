"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getScaleIndexData, ScaleIndexData } from '@/lib/scaleData';

export default function ScaleIndexPageTemplate() {
  const data: ScaleIndexData = getScaleIndexData();

  return (
    <Layout>
      <Header title={data.pageTitle} subtitle={data.subtitle} />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <Breadcrumbs pathname="/lessons/theory/scales" pageTitle={data.pageTitle} />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">{data.heroIcon}</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{data.heroTitle}</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{data.heroDescription}</p>
          </div>

          {/* What Are Scales */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{data.whatAreScales.title}</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{data.whatAreScales.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {data.whatAreScales.columns.map((col, i) => (
                    <div key={i} className={`${col.colorBg} rounded-lg p-6`}>
                      <h3 className={`text-xl font-semibold ${col.colorTitle} mb-4`}>{col.title}</h3>
                      <ul className={`${col.colorText} space-y-2`}>
                        {col.items.map((item, j) => (
                          <li key={j}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Scale Categories */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Scale Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.scaleCategories.map((cat, i) => (
                  <div key={i} className={`${cat.color} rounded-lg p-6 border-2`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{cat.name}</h3>
                    <p className="text-sm text-gray-700 mb-4">{cat.description}</p>
                    <div className="space-y-1">
                      {cat.scales.map((scale, j) => (
                        <div key={j} className="text-xs bg-white bg-opacity-60 rounded px-2 py-1">{scale}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Musical Applications */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Musical Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.musicalApplications.map((app, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="text-3xl mb-4 text-center">{app.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">{app.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 text-center">{app.description}</p>
                    <div className="space-y-2">
                      {app.examples.map((ex, j) => (
                        <div key={j} className="text-xs text-gray-500 bg-white rounded px-3 py-2">{ex}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* All Scales Grid */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Guitar Scales</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {data.scaleTypes.map((scale) => (
                  <Link
                    key={scale.name}
                    href={scale.href}
                    className={`${scale.color} rounded-lg border-2 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
                  >
                    <div className="text-center mb-4">
                      <div className={`text-4xl mb-2 ${scale.iconColor}`}>
                        <span style={{ fontSize: 32 }}>{scale.icon}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">{scale.name}</h3>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600 text-center">{scale.description}</p>
                      <div className="bg-white bg-opacity-60 rounded p-3 space-y-2">
                        <div className="text-xs text-gray-500"><span className="font-medium">Formula:</span> {scale.formula}</div>
                        <div className="text-xs text-gray-500"><span className="font-medium">Notes:</span> {scale.degrees}</div>
                        <div className="text-xs text-gray-500"><span className="font-medium">Mood:</span> {scale.mood}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Get Started */}
          <section>
            <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">{data.journeySection.title}</h2>
              <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">{data.journeySection.description}</p>
              <div className="grid md:grid-cols-3 gap-6">
                {data.journeySection.links.map((link, i) => (
                  <Link
                    key={i}
                    href={`/lessons/theory/scales/${link.slug}`}
                    className={`group bg-white rounded-lg p-6 border border-gray-200 ${link.hoverBorder} hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="text-center">
                      <div className={`w-12 h-12 ${link.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 ${link.iconHoverBg} transition-colors`}>
                        <span className="text-2xl">{link.icon}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{link.description}</p>
                      <span className={`${link.linkColor} font-medium text-sm ${link.linkHoverColor}`}>
                        {link.linkText} &rarr;
                      </span>
                    </div>
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
