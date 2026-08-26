"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getIntervalIndexData, IntervalIndexData } from '@/lib/intervalData';

export default function IntervalIndexPageTemplate() {
  const data: IntervalIndexData = getIntervalIndexData();

  return (
    <Layout>
      <Header title={data.pageTitle} subtitle={data.subtitle} />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <Breadcrumbs pathname="/lessons/theory/intervals" pageTitle={data.pageTitle} />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">{data.heroIcon}</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{data.heroTitle}</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {data.heroDescription}
            </p>
          </div>

          {/* What Are Intervals */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{data.whatAreIntervals.title}</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{data.whatAreIntervals.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {data.whatAreIntervals.columns.map((col, index) => (
                    <div key={index} className={`${col.colorBg} rounded-lg p-6`}>
                      <h3 className={`text-xl font-semibold ${col.colorTitle} mb-4`}>{col.title}</h3>
                      <ul className={`${col.colorText} space-y-2`}>
                        {col.items.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Interval Categories */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Interval Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.intervalCategories.map((category, index) => (
                  <div key={index} className={`${category.color} rounded-lg p-6 border-2`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.name}</h3>
                    <p className="text-sm text-gray-700 mb-4">{category.description}</p>
                    <div className="space-y-1">
                      {category.intervals.map((interval, intervalIndex) => (
                        <div key={intervalIndex} className="text-xs bg-white bg-opacity-60 rounded px-2 py-1">
                          {interval}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Theory Fundamentals */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{data.theoryFundamentals.title}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{data.theoryFundamentals.measuring.title}</h3>
                  <div className="space-y-4">
                    {data.theoryFundamentals.measuring.items.map((item, index) => (
                      <div key={index} className={`${item.colorBg} rounded-lg p-4`}>
                        <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{data.theoryFundamentals.consonance.title}</h3>
                  <div className="space-y-4">
                    {data.theoryFundamentals.consonance.items.map((item, index) => (
                      <div key={index} className={`${item.colorBg} rounded-lg p-4 border-l-4 ${item.borderColor}`}>
                        <h4 className={`font-semibold ${item.colorTitle} mb-2`}>{item.title}</h4>
                        <p className={`text-sm ${item.colorText}`}>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* All Intervals Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete Interval Reference</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {data.intervalTypes.map((interval) => (
                <Link
                  key={interval.name}
                  href={interval.href}
                  className={`${interval.color} border-2 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 group`}
                >
                  <div className="text-center">
                    <div className={`${interval.iconColor} mb-3 group-hover:scale-110 transition-transform`}>
                      <span style={{ fontSize: 32 }}>{interval.icon}</span>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">{interval.name}</h3>
                    <div className="flex justify-center gap-1 mb-2">
                      <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-gray-100 text-gray-800">
                        {interval.semitones} ST
                      </span>
                    </div>
                    <p className="text-xs text-gray-700 leading-tight mb-2">{interval.description}</p>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      interval.consonance === 'Perfect Consonance' ? 'bg-green-100 text-green-800' :
                      interval.consonance === 'Imperfect Consonance' ? 'bg-blue-100 text-blue-800' :
                      interval.consonance === 'Mild Dissonance' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {interval.consonance}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Musical Applications */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Musical Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.musicalApplications.map((application, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">{application.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{application.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{application.description}</p>
                    <ul className="space-y-2">
                      {application.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Practice Exercises */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Interval Practice Exercises</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.practiceExercises.map((exercise, index) => (
                  <div key={index} className={`${exercise.colorBg} rounded-lg p-6 border ${exercise.borderColor}`}>
                    <h3 className={`text-lg font-semibold ${exercise.colorTitle} mb-3`}>{exercise.icon} {exercise.title}</h3>
                    <ul className={`${exercise.colorText} text-sm space-y-2`}>
                      {exercise.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Common Progressions */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{data.progressions.title}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{data.progressions.chordConstruction.title}</h3>
                  <div className="space-y-3">
                    {data.progressions.chordConstruction.items.map((item, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.formula}</p>
                        <p className="text-xs text-gray-500">{item.example}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{data.progressions.melodicMovement.title}</h3>
                  <div className="space-y-3">
                    {data.progressions.melodicMovement.items.map((item, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <p className="text-xs text-gray-500">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Get Started */}
          <section>
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">{data.journeySection.title}</h2>
              <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
                {data.journeySection.description}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {data.journeySection.links.map((link, i) => (
                  <Link
                    key={i}
                    href={`/lessons/theory/intervals/${link.slug}`}
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
