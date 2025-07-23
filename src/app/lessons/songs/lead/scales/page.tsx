import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const scaleApplications = [
  {
    progression: 'I-vi-IV-V',
    key: 'C Major',
    scales: ['C Major Pentatonic', 'C Major Scale', 'A Natural Minor'],
    approach: 'Use C major pentatonic as safe choice, target chord tones on changes',
    example: 'C-Am-F-G: Focus on C-E-G over C, A-C-E over Am, F-A-C over F, G-B-D over G'
  },
  {
    progression: 'I-VII-♭VI-♭VII',
    key: 'A Minor',
    scales: ['A Minor Pentatonic', 'A Dorian', 'A Natural Minor'],
    approach: 'Minor pentatonic core with Dorian for ♭VII chord',
    example: 'Am-G-F-G: Am pentatonic over Am-F, add major 6th (F#) over G chords'
  },
  {
    progression: 'ii-V-I',
    key: 'C Major',
    scales: ['C Major Scale', 'C Major Pentatonic', 'Mode per chord'],
    approach: 'Target chord tones, use chromatic approach notes',
    example: 'Dm-G-C: D-F-A over Dm, G-B-D over G, C-E-G over C'
  }
];

const scaleMoods = [
  {
    scale: 'Major Pentatonic',
    mood: 'Happy, Uplifting',
    usage: 'Country, rock solos, major key songs',
    notes: 'Contains no avoid notes, always sounds consonant'
  },
  {
    scale: 'Minor Pentatonic',
    mood: 'Bluesy, Emotional',
    usage: 'Blues, rock, minor key ballads',
    notes: 'Core of blues and rock lead playing'
  },
  {
    scale: 'Dorian Mode',
    mood: 'Sophisticated, Jazz-rock',
    usage: 'Minor chords with major 6th, Santana-style',
    notes: 'Natural 6th gives brighter minor sound'
  },
  {
    scale: 'Mixolydian Mode',
    mood: 'Dominant, Unresolved',
    usage: 'Dominant 7th chords, blues-rock',
    notes: 'Flat 7th creates dominant chord sound'
  }
];

export default function ScaleApplicationPage() {
  return (
    <Layout>
      <Header
        title="Scale Application in Lead Guitar"
        subtitle="Learn how to choose and apply the right scales over chord progressions for melodic lead playing."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Core Concept */}
        <section className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Scale-Chord Relationship</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🎯 Target Chord Tones</h3>
              <p className="text-gray-600 mb-3">
                The strongest melodic notes are chord tones (root, 3rd, 5th, 7th). Land on these during chord changes to create harmonic connection.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-mono text-gray-700">
                  <strong>C Major Chord (C-E-G):</strong><br/>
                  Strong: C, E, G (chord tones)<br/>
                  Good: D, A (scale tones)<br/>
                  Weak: F, B (avoid notes)
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🗝️ Key Center Approach</h3>
              <p className="text-gray-600 mb-3">
                Identify the overall key of the progression, then use scales from that key while emphasizing chord tones.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-mono text-gray-700">
                  <strong>Key of G Major:</strong><br/>
                  G-Am-C-D progression<br/>
                  Use G Major scale/pentatonic<br/>
                  Target chord tones on changes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scale Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Progression Scale Choices</h2>
          <div className="space-y-6">
            {scaleApplications.map((app, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Progression</h3>
                    <p className="text-lg font-mono text-blue-600">{app.progression}</p>
                    <p className="text-sm text-gray-600">in {app.key}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Best Scales</h3>
                    <ul className="space-y-1">
                      {app.scales.map((scale, i) => (
                        <li key={i} className="text-sm text-gray-700 bg-gray-50 px-2 py-1 rounded">
                          {scale}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Approach</h3>
                    <p className="text-sm text-gray-600">{app.approach}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Chord Tone Focus</h3>
                    <p className="text-xs text-gray-600 font-mono">{app.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scale Moods */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Scale Character & Mood</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {scaleMoods.map((scale, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{scale.scale}</h3>
                  <span className="ml-3 bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                    {scale.mood}
                  </span>
                </div>
                <p className="text-gray-700 mb-3">{scale.usage}</p>
                <p className="text-sm text-gray-600 italic">{scale.notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Method */}
        <section className="mb-12 bg-amber-50 rounded-xl p-8 border border-amber-200">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">Scale Application Practice Method</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <div className="bg-amber-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <span className="text-amber-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Learn the Chords</h3>
              <p className="text-sm text-gray-600">
                Play through the chord progression slowly. Identify each chord's root, 3rd, and 5th on the fretboard.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="bg-amber-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <span className="text-amber-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Map the Scale</h3>
              <p className="text-sm text-gray-600">
                Choose your scale and practice it over the backing progression. Find where chord tones fall within the scale pattern.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="bg-amber-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <span className="text-amber-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Target Chord Tones</h3>
              <p className="text-sm text-gray-600">
                Practice landing on chord tones when chords change. Start with just root notes, then add 3rds and 5ths.
              </p>
            </div>
          </div>
        </section>

        {/* Advanced Concepts */}
        <section className="mb-12 bg-indigo-50 rounded-xl p-8 border border-indigo-200">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">Advanced Scale Concepts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-indigo-800 mb-3">🔄 Modal Interchange</h3>
              <p className="text-indigo-700 mb-3">
                Borrowing scales from parallel keys adds color and interest to your lead playing.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-indigo-600">
                  <strong>In C Major, try:</strong><br/>
                  C Dorian over minor iv chord (Fm)<br/>
                  C Mixolydian over ♭VII chord (B♭)
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-800 mb-3">🎯 Chromatic Approach</h3>
              <p className="text-indigo-700 mb-3">
                Use chromatic notes to approach chord tones from a half-step above or below.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-indigo-600">
                  <strong>Example:</strong><br/>
                  To reach C (root), play C# or B first<br/>
                  To reach E (3rd), play F or D# first
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Song Examples */}
        <section className="mb-12 bg-green-50 rounded-xl p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-green-900 mb-6">🎵 Scale Application in Famous Solos</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">"Sweet Child O' Mine" - Guns N' Roses</h3>
              <p className="text-green-700 text-sm">
                <strong>Key:</strong> D Major | <strong>Scale:</strong> D Major Pentatonic + chromatic passing tones
                <br/><strong>Technique:</strong> Targets chord tones on each change while using pentatonic as foundation
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">"Black Magic Woman" - Santana</h3>
              <p className="text-green-700 text-sm">
                <strong>Key:</strong> Dm | <strong>Scale:</strong> D Dorian mode prominently
                <br/><strong>Technique:</strong> Uses natural 6th (B natural) to create sophisticated minor sound
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">"Layla" - Derek and the Dominos</h3>
              <p className="text-green-700 text-sm">
                <strong>Key:</strong> Dm | <strong>Scale:</strong> D Minor Pentatonic + blues notes
                <br/><strong>Technique:</strong> Combines minor pentatonic with blue notes (♭5th) for emotional expression
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Lead Guitar Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/lessons/songs/lead/phrasing"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next: Phrasing & Expression →
              </Link>
              <Link 
                href="/lessons/songs/lead"
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                ← Back to Lead Guitar Overview
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
