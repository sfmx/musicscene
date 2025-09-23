"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';

const targetNoteTypes = [
  {
    type: 'Chord Tones',
    description: 'The most stable and harmonically strong notes',
    notes: ['Root (1st)', '3rd', '5th', '7th'],
    stability: 'High',
    usage: 'Land on strong beats for harmonic clarity',
  },
  {
    type: 'Guide Tones',
    description: '3rd and 7th - the notes that define chord quality',
    notes: ['3rd (major/minor quality)', '7th (tension and color)'],
    stability: 'High',
    usage: 'Create smooth voice leading between chords',
  },
  {
    type: 'Extensions',
    description: 'Added notes that create color and sophistication',
    notes: ['9th', '11th', '13th'],
    stability: 'Medium',
    usage: 'Add on weaker beats for color and tension',
  },
  {
    type: 'Approach Notes',
    description: 'Notes that lead smoothly to target notes',
    notes: ['Chromatic approaches', 'Diatonic approaches', 'Enclosures'],
    stability: 'Low',
    usage: 'Create smooth melodic motion to targets',
  },
];

const targetingTechniques = [
  {
    technique: 'Strong Beat Landing',
    description: 'Land chord tones on beats 1 and 3',
    example: 'Root on beat 1, 5th on beat 3',
    level: 'Beginner',
    benefits: ['Harmonic clarity', 'Stable foundation', 'Clear structure'],
  },
  {
    technique: 'Guide Tone Lines',
    description: 'Connect 3rds and 7ths between chords',
    example: 'Dm7(F) → G7(F) → Cmaj7(E)',
    level: 'Intermediate',
    benefits: ['Smooth voice leading', 'Harmonic sophistication', 'Jazz language'],
  },
  {
    technique: 'Enclosure Patterns',
    description: 'Surround target notes from above and below',
    example: 'Target C: D-B-C or Bb-Db-C',
    level: 'Advanced',
    benefits: ['Melodic sophistication', 'Bebop language', 'Smooth approaches'],
  },
  {
    technique: 'Delayed Resolution',
    description: 'Create tension by delaying arrival at target',
    example: 'Land non-chord tone on beat 1, resolve on beat 2',
    level: 'Advanced',
    benefits: ['Rhythmic interest', 'Increased tension', 'Modern sound'],
  },
];

const practiceExercises = [
  {
    title: 'Chord Tone Landing',
    level: 'Beginner',
    description: 'Practice landing specific chord tones on strong beats',
    steps: [
      'Choose a simple progression (C-Am-F-G)',
      'Improvise freely but land the root on beat 1',
      'Repeat with 3rd, 5th, then 7th on beat 1',
      'Mix different chord tones randomly',
      'Add approach notes between targets'
    ],
    tips: 'Start slowly and focus on accuracy over speed',
  },
  {
    title: 'Guide Tone Lines',
    level: 'Intermediate',
    description: 'Create smooth melodic lines using 3rds and 7ths',
    steps: [
      'Practice ii-V-I in major keys',
      'Connect 3rds and 7ths with step-wise motion',
      'Add passing tones between guide tones',
      'Apply to longer progressions',
      'Incorporate rhythm and phrasing'
    ],
    tips: 'Think of guide tones as your melodic backbone',
  },
  {
    title: 'Approach Note Patterns',
    level: 'Advanced',
    description: 'Master various approaches to target notes',
    steps: [
      'Choose target notes (chord tones)',
      'Practice chromatic approach from below',
      'Practice chromatic approach from above',
      'Use diatonic approaches (scale steps)',
      'Create enclosure patterns (both sides)'
    ],
    tips: 'Combine different approach types for sophistication',
  },
  {
    title: 'Rhythmic Targeting',
    level: 'Advanced',
    description: 'Control when and where target notes land rhythmically',
    steps: [
      'Plan target notes for specific beats',
      'Practice syncopated landings',
      'Use metric displacement',
      'Create rhythmic tension and release',
      'Apply to real musical contexts'
    ],
    tips: 'Rhythm is as important as pitch in targeting',
  },
];

const famousTargeters = [
  {
    artist: 'Charlie Parker',
    style: 'Bebop master',
    signature: 'Chromatic approaches and guide tone lines',
    lesson: 'Every note has purpose and direction in harmonic context',
  },
  {
    artist: 'Wes Montgomery',
    style: 'Melodic sophistication',
    signature: 'Clear chord tone targeting with octave doubling',
    lesson: 'Simplicity and clarity can be more powerful than complexity',
  },
  {
    artist: 'Grant Green',
    style: 'Blues-jazz fusion',
    signature: 'Strong chord tone focus with bluesy inflection',
    lesson: 'Target notes work in any style when applied musically',
  },
  {
    artist: 'Pat Metheny',
    style: 'Modern jazz approach',
    signature: 'Extensions and sophisticated harmonic targeting',
    lesson: 'Target notes can create contemporary and fresh sounds',
  },
];

export default function TargetNotesPage() {
  return (
    <Layout>
      <Header
        title="Target Notes"
        subtitle="Master the art of landing on strong chord tones and melodic destinations to create compelling, harmonically sophisticated solos."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/practice/improv" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Improvisation
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-violet-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Target Notes</h1>
          <p className="text-xl opacity-90 mb-4">
            Target notes are specific pitches that you intentionally aim for during improvisation. 
            They serve as melodic destinations that create tension and resolution, giving your solos direction and harmonic coherence.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Chord Tones</span>
            <span className="bg-white/20 px-3 py-1 rounded">Tension & Resolution</span>
            <span className="bg-white/20 px-3 py-1 rounded">Harmonic Direction</span>
            <span className="bg-white/20 px-3 py-1 rounded">Melodic Sophistication</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">What Are Target Notes?</h3>
              <p className="text-gray-600 mb-4">
                Target notes are specific pitches you intentionally aim for during improvisation. 
                They create structure, harmonic clarity, and melodic direction in your solos.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Harmonic anchors:</strong> Connect melody to chord changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Melodic destinations:</strong> Give phrases clear direction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Tension creators:</strong> Build and release musical energy</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Why Use Target Notes?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Structure:</strong> Organize improvisation logically</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Sophistication:</strong> Create professional-sounding solos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Harmonic awareness:</strong> Connect with chord changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Melodic flow:</strong> Create smooth, logical lines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Jazz language:</strong> Essential for jazz improvisation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Musical Examples */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Musical Examples</h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Guide Tone Line Example</h3>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-4">
              <p className="text-blue-800 text-sm mb-3">
                ii-V-I progression showing smooth connection of 3rds and 7ths
              </p>
              <AlphaTexRenderer 
                alphaTex="3.1 3.1 3.1 | 3.2 3.2 3.2 | 3.2 3.2 3.2"
                title="Guide Tone Line: Dm7(F) - G7(F) - Cmaj7(E)"
                className="scale-75"
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Chord Tone Targeting</h3>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200 mb-4">
              <p className="text-green-800 text-sm mb-3">
                Landing chord tones on strong beats (1 and 3) over C major chord
              </p>
              <AlphaTexRenderer 
                alphaTex="8.6 10.6 8.6 7.5 | 5.6 7.5 8.6 10.6"
                title="Chord Tone Targeting: C(8) - G(8) - E(7) - C(10) over C Major"
                className="scale-75"
              />
            </div>
          </div>
        </div>

        {/* Types of Target Notes */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Types of Target Notes</h2>
          <div className="space-y-6">
            {targetNoteTypes.map((type, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">{type.type}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    type.stability === 'High' ? 'bg-green-100 text-green-800' :
                    type.stability === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {type.stability} Stability
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Available Notes</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {type.notes.map((note, i) => (
                        <li key={i}>• {note}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Best Usage</h4>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">{type.usage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Targeting Techniques */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Targeting Techniques</h2>
          <div className="space-y-6">
            {targetingTechniques.map((technique, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">{technique.technique}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    technique.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    technique.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {technique.level}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{technique.description}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Example</h4>
                    <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded font-mono">{technique.example}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Benefits</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {technique.benefits.map((benefit, i) => (
                        <li key={i}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Target Note Exercises</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {practiceExercises.map((exercise, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">{exercise.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    exercise.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    exercise.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {exercise.level}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{exercise.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Practice Steps</h4>
                  <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                    {exercise.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm text-blue-800"><strong>Pro Tip:</strong> {exercise.tips}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Target Note Mistakes</h2>
          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Avoid These Pitfalls</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Technical Issues</h4>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• <strong>Wrong beat landing:</strong> Non-chord tones on strong beats</li>
                  <li>• <strong>Ignoring harmony:</strong> Not connecting to chord changes</li>
                  <li>• <strong>Mechanical approach:</strong> No musical feeling or phrasing</li>
                  <li>• <strong>Same targets:</strong> Always using the same chord tones</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Musical Problems</h4>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• <strong>No approach:</strong> Jumping to targets without preparation</li>
                  <li>• <strong>Poor voice leading:</strong> Awkward melodic jumps</li>
                  <li>• <strong>Overemphasis:</strong> Making every note a target</li>
                  <li>• <strong>Lack of flow:</strong> Choppy, disconnected phrases</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Masters of Target Notes */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Masters of Target Notes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {famousTargeters.map((artist, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{artist.artist}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-700">Style:</span>
                    <span className="text-sm text-gray-600">{artist.style}</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-sm font-medium text-gray-700">Signature:</span>
                    <p className="text-sm text-gray-600 mt-1">{artist.signature}</p>
                  </div>
                  <div className="mt-3">
                    <span className="text-sm font-medium text-gray-700">Lesson:</span>
                    <p className="text-sm text-gray-600 mt-1 bg-blue-50 p-2 rounded italic">{artist.lesson}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Practice Routine */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Daily Target Note Practice</h2>
          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-4">20-Minute Target Note Workout</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Warm-up (5 min)</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Chord tone arpeggios</li>
                  <li>• Scale with emphasis on 1-3-5</li>
                  <li>• Simple target exercises</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Guide Tones (7 min)</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Practice ii-V-I progressions</li>
                  <li>• Connect 3rds and 7ths</li>
                  <li>• Add passing tones</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Approaches (5 min)</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Chromatic approaches</li>
                  <li>• Diatonic approaches</li>
                  <li>• Enclosure patterns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Application (3 min)</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Apply over jazz standards</li>
                  <li>• Focus on musical phrasing</li>
                  <li>• Record and evaluate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border border-purple-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Continue Your Improvisation Journey</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              href="/lessons/practice/improv/scales"
              className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow text-center group"
            >
              <div className="text-3xl mb-3">🎵</div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Scale Improvisation</h3>
              <p className="text-sm text-gray-600">Master scales for melodic freedom</p>
            </Link>
            <Link 
              href="/lessons/practice/improv/arpeggios"
              className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow text-center group"
            >
              <div className="text-3xl mb-3">🎼</div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Arpeggio Improvisation</h3>
              <p className="text-sm text-gray-600">Use broken chords melodically</p>
            </Link>
            <Link 
              href="/lessons/practice/improv/phrasing"
              className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow text-center group"
            >
              <div className="text-3xl mb-3">🗣️</div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Musical Phrasing</h3>
              <p className="text-sm text-gray-600">Shape your musical sentences</p>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
