"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getChordIndexData, ChordIndexData } from '@/lib/chordData';

export default function ChordIndexPageTemplate() {
  const data: ChordIndexData = getChordIndexData();

  return (
    <Layout>
      <Header title={data.pageTitle} subtitle={data.subtitle} />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <Breadcrumbs pathname="/lessons/theory/chords" pageTitle={data.pageTitle} />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">{data.heroIcon}</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{data.heroTitle}</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {data.heroDescription}
            </p>
          </div>

          {/* What Are Chords */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{data.whatAreChords.title}</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{data.whatAreChords.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {data.whatAreChords.columns.map((col, index) => (
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

          {/* Chord Functions */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Harmonic Functions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.chordFunctions.map((func, index) => (
                  <div key={index} className={`${func.color} rounded-lg p-6 border-2`}>
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{func.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900">{func.title}</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-4 text-center">{func.description}</p>
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-gray-800">Common Chords:</div>
                      {func.chords.map((chord, chordIndex) => (
                        <div key={chordIndex} className="text-xs bg-white bg-opacity-60 rounded px-2 py-1">
                          {chord}
                        </div>
                      ))}
                      <div className="text-xs font-semibold text-gray-800 mt-3">Feeling:</div>
                      <div className="text-xs bg-white bg-opacity-60 rounded px-2 py-1">{func.feeling}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Chord Construction Theory */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{data.constructionFundamentals.title}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">{data.constructionFundamentals.triads.title}</h3>
                  <div className="space-y-4">
                    {data.constructionFundamentals.triads.items.map((item, index) => (
                      <div key={index} className={`${item.colorBg} rounded-lg p-4`}>
                        <h4 className={`font-semibold ${item.colorTitle} mb-2`}>{item.title}</h4>
                        <p className={`${item.colorText} text-sm`}>{item.formula}</p>
                        <p className={`${item.colorDetail} text-xs mt-1`}>{item.example}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">{data.constructionFundamentals.sevenths.title}</h3>
                  <div className="space-y-4">
                    {data.constructionFundamentals.sevenths.items.map((item, index) => (
                      <div key={index} className={`${item.colorBg} rounded-lg p-4`}>
                        <h4 className={`font-semibold ${item.colorTitle} mb-2`}>{item.title}</h4>
                        <p className={`${item.colorText} text-sm`}>{item.formula}</p>
                        <p className={`${item.colorDetail} text-xs mt-1`}>{item.example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chord Types Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Chord Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.chordTypes.map((chord) => (
                <Link
                  key={chord.name}
                  href={chord.href}
                  className={`${chord.color} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group`}
                >
                  <div className="flex flex-col h-full">
                    <div className="text-center mb-4">
                      <div className={`${chord.iconColor} mb-2`}>
                        <span style={{ fontSize: 32 }}>{chord.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{chord.name}</h3>
                      <div className="text-sm font-mono text-gray-600 bg-white bg-opacity-60 rounded px-2 py-1 inline-block">
                        {chord.symbol}
                      </div>
                    </div>
                    <div className="flex-grow space-y-3">
                      <p className="text-gray-700 text-sm leading-relaxed">{chord.description}</p>
                      <div className="bg-white bg-opacity-60 rounded p-3 space-y-2">
                        <div>
                          <span className="text-xs font-semibold text-gray-700">Formula:</span>
                          <div className="text-xs text-gray-600 font-mono">{chord.formula}</div>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-gray-700">Intervals:</span>
                          <div className="text-xs text-gray-600">{chord.intervals}</div>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-gray-700">Mood:</span>
                          <div className="text-xs text-gray-600">{chord.mood}</div>
                        </div>
                      </div>
                      <div className="bg-white bg-opacity-60 rounded p-2">
                        <div className="text-xs font-semibold text-gray-700 mb-1">Examples:</div>
                        {chord.examples.map((example, index) => (
                          <div key={index} className="text-xs text-gray-600 font-mono">{example}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Common Progressions */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Chord Progressions</h2>
              <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                Chord progressions are the backbone of songs. These fundamental patterns appear across all genres
                and provide the harmonic framework for countless compositions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.commonProgressions.map((progression, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900 font-mono">{progression.name}</h3>
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {progression.example}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{progression.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">Genres:</h4>
                        <div className="space-y-1">
                          {progression.genres.map((genre, genreIndex) => (
                            <span key={genreIndex} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full inline-block mr-1">
                              {genre}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">Famous Songs:</h4>
                        <div className="space-y-1">
                          {progression.songs.map((song, songIndex) => (
                            <div key={songIndex} className="text-xs text-gray-600">{song}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Practice Exercises */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Practice Exercises</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.practiceExercises.map((exercise, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{exercise.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{exercise.description}</p>
                    <div className="space-y-2">
                      {exercise.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start">
                          <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                            {stepIndex + 1}
                          </div>
                          <div className="text-sm text-gray-700">{step}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Harmonic Philosophy */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{data.harmonicPhilosophy.title}</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{data.harmonicPhilosophy.description}</p>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{data.harmonicPhilosophy.dailyRoutine.title}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {data.harmonicPhilosophy.dailyRoutine.columns.map((column, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-gray-800 mb-2">{column.title}</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          {column.items.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
