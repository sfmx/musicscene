"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import { getProgressionIndexData, ProgressionIndexData } from '@/lib/progressionData';

export default function ProgressionIndexPageTemplate() {
  const data: ProgressionIndexData = getProgressionIndexData();

  return (
    <Layout>
      <Header title={data.pageTitle} subtitle={data.subtitle} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <Breadcrumbs pathname="/lessons/theory/progressions" pageTitle={data.pageTitle} />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">{data.heroIcon}</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{data.heroTitle}</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{data.heroDescription}</p>
          </div>

          {/* What Are Progressions */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{data.whatAreProgressions.title}</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{data.whatAreProgressions.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {data.whatAreProgressions.columns.map((col, i) => (
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

          {/* Progression Categories */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Progression Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.progressionCategories.map((cat, i) => (
                  <div key={i} className={`${cat.color} rounded-lg p-6 border-2`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{cat.name}</h3>
                    <p className="text-sm text-gray-700 mb-4">{cat.description}</p>
                    <div className="space-y-1">
                      {cat.progressions.map((prog, j) => (
                        <div key={j} className="text-xs bg-white bg-opacity-60 rounded px-2 py-1">{prog}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Harmonic Applications */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Harmonic Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.harmonicApplications.map((app, i) => (
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

          {/* All Progressions Grid */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Chord Progressions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {data.progressionTypes.map((progression) => (
                  <Link
                    key={progression.name}
                    href={progression.href}
                    className={`${progression.color} rounded-lg border-2 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
                  >
                    <div className="text-center mb-4">
                      <div className={`text-4xl mb-2 ${progression.iconColor}`}>
                        <span style={{ fontSize: 32 }}>{progression.icon}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">{progression.name}</h3>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600 text-center">{progression.description}</p>
                      <div className="bg-white bg-opacity-60 rounded p-3 space-y-2">
                        <div className="text-xs text-gray-500"><span className="font-medium">Formula:</span> {progression.formula}</div>
                        <div className="text-xs text-gray-500"><span className="font-medium">Function:</span> {progression.functionLabel}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Roman Numeral Analysis */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Roman Numeral Analysis</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">{data.romanNumerals.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.romanNumerals.sections.map((section, i) => (
                    <div key={i} className={`${section.colorBg} rounded-lg p-6 border ${section.colorBorder}`}>
                      <h3 className={`text-lg font-semibold ${section.colorTitle} mb-4`}>{section.title}</h3>
                      <div className={`space-y-2 ${section.colorText}`}>
                        {section.items.map((item, j) => (
                          <p key={j}>• {item}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Example Chords in C Major */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Chords in C Major</h2>
              <div className="max-w-6xl mx-auto">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">{data.exampleChords.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {data.exampleChords.chords.map((chord, i) => (
                    <div key={i} className="text-center">
                      <h4 className="font-semibold mb-3 text-gray-900">{chord.label}</h4>
                      <SimpleFretboardDiagram chord={chord.chord} />
                      <p className="text-sm text-gray-600 mt-2">{chord.subtitle}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <h3 className="text-xl font-semibold text-yellow-900 mb-4 text-center">{data.exampleChords.exampleProgression.title}</h3>
                  <div className="flex justify-center mb-4">
                    <AlphaTexRenderer alphaTex={data.exampleChords.exampleProgression.alphaTex} className="scale-75" />
                  </div>
                  <p className="text-yellow-800 text-center">{data.exampleChords.exampleProgression.description}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Practice and Application */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Practice and Application</h2>
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.practiceExercises.map((exercise, i) => (
                    <div key={i} className={`${exercise.colorBg} rounded-lg p-6 border ${exercise.colorBorder}`}>
                      <h3 className={`text-lg font-semibold ${exercise.colorTitle} mb-4`}>{exercise.icon} {exercise.title}</h3>
                      <ul className={`space-y-2 ${exercise.colorText}`}>
                        {exercise.items.map((item, j) => (
                          <li key={j}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Get Started */}
          <section>
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">{data.journeySection.title}</h2>
              <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">{data.journeySection.description}</p>
              <div className="grid md:grid-cols-3 gap-6">
                {data.journeySection.links.map((link, i) => (
                  <Link
                    key={i}
                    href={`/lessons/theory/progressions/${link.slug}`}
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
