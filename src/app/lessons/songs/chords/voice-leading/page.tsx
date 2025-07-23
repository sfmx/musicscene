import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const voiceLeadingRules = [
  { rule: 'Contrary Motion', description: 'When one voice goes up, another goes down', example: 'C to F: Bass C→F (up), Soprano G→A (up) - better if Soprano G→F (down)' },
  { rule: 'Smooth Voice Leading', description: 'Move each voice by the smallest possible interval', example: 'C to Am: C-E-G to A-E-G (only one note changes)' },
  { rule: 'Avoid Parallel 5ths/8ves', description: 'Don\'t move voices in parallel perfect intervals', example: 'C-G moving to D-A creates parallel 5ths (avoid this)' },
  { rule: 'Resolve Leading Tones', description: 'Leading tone (7th scale degree) should resolve up to tonic', example: 'In G7 to C: B should move to C' },
  { rule: 'Common Tones', description: 'Keep common tones in the same voice when possible', example: 'C to F: both have C - keep C in same voice' }
];

const progressionExamples = [
  {
    name: 'I - vi (C to Am)',
    analysis: 'Perfect voice leading example',
    voices: {
      soprano: 'G → G (common tone)',
      alto: 'E → E (common tone)', 
      tenor: 'C → C (common tone)',
      bass: 'C → A (down a 3rd)'
    },
    why: 'Three voices stay the same, only bass moves. Creates smooth, connected sound.'
  },
  {
    name: 'V - I (G to C)',
    analysis: 'Classic resolution with leading tone',
    voices: {
      soprano: 'B → C (leading tone resolution)',
      alto: 'D → E (step up)',
      tenor: 'G → G (common tone)',
      bass: 'G → C (down a 5th)'
    },
    why: 'Leading tone resolves up, bass moves by 5th (strong), other voices move smoothly.'
  },
  {
    name: 'IV - V (F to G)',
    analysis: 'Smooth voice leading sets up dominant',
    voices: {
      soprano: 'A → B (step up)',
      alto: 'F → D (down a 3rd)',
      tenor: 'C → G (up a 5th)',
      bass: 'F → G (step up)'
    },
    why: 'Contrary motion between soprano and alto creates balance. Sets up strong V-I resolution.'
  }
];

const practicalTips = [
  {
    category: 'Piano/Keyboard',
    tips: [
      'Practice chord progressions with close voicings (notes within an octave)',
      'Focus on which fingers stay on the same keys between chords',
      'Use voice leading to determine chord inversions',
      'Practice scales in 4-part harmony to internalize smooth motion'
    ]
  },
  {
    category: 'Guitar',
    tips: [
      'Use chord inversions to create bass lines that connect smoothly',
      'Practice moveable chord shapes that share common tones',
      'Learn how to voice chords across different string sets',
      'Focus on the top note (melody) of chord progressions'
    ]
  },
  {
    category: 'Songwriting',
    tips: [
      'Choose chord inversions based on the bass line you want',
      'Consider the melody when selecting chord voicings',
      'Use voice leading to create harmonic rhythm',
      'Think about how chord tones connect to create secondary melodies'
    ]
  }
];

export default function VoiceLeadingPage() {
  return (
    <Layout>
      <Header
        title="Voice Leading"
        subtitle="Master the art of smooth chord connections and harmonic motion"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Flow Between Chords</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p>
              Voice leading is how individual notes move from chord to chord. Good voice leading makes 
              chord progressions sound <strong>smooth and connected</strong> rather than choppy and 
              disconnected. It's the difference between beautiful, flowing harmony and awkward harmonic leaps.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-green-600 mb-2">🎼 Independent Lines</h3>
                <p className="text-sm">Each voice (soprano, alto, tenor, bass) has its own melodic line. Good voice leading creates 4 beautiful melodies happening simultaneously.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-green-600 mb-2">🌊 Smooth Connection</h3>
                <p className="text-sm">Minimize large leaps. When voices move smoothly (by steps or small intervals), the harmony flows naturally.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">📐 Voice Leading Principles</h2>
          <div className="space-y-4">
            {voiceLeadingRules.map((rule, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{rule.rule}</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    Core Rule
                  </span>
                </div>
                <p className="text-gray-700 mb-3">{rule.description}</p>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-600"><strong>Example:</strong> {rule.example}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Progression Analysis */}
        <section className="mb-12 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔍 Voice Leading Analysis</h2>
          <div className="space-y-6">
            {progressionExamples.map((progression, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{progression.name}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                    {progression.analysis}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 mb-2">Voice Movement:</h4>
                    <div className="bg-gray-50 p-3 rounded space-y-1 text-sm">
                      <p><strong>Soprano:</strong> {progression.voices.soprano}</p>
                      <p><strong>Alto:</strong> {progression.voices.alto}</p>
                      <p><strong>Tenor:</strong> {progression.voices.tenor}</p>
                      <p><strong>Bass:</strong> {progression.voices.bass}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Why It Works:</h4>
                    <p className="text-sm text-gray-700">{progression.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Application */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🎯 Instrument-Specific Applications</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {practicalTips.map((section, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.category}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Real Song Example */}
        <section className="mb-12 bg-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎵 Voice Leading in "Let It Be"</h2>
          <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
            <h3 className="font-semibold text-gray-900 mb-4">Analyzing the Classic Progression: C - G - Am - F</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded">
                  <h4 className="font-medium text-gray-900 mb-2">Top Voice (Melody) Movement:</h4>
                  <p className="text-sm text-gray-700 font-mono">C → B → A → A</p>
                  <p className="text-sm text-gray-600 mt-1">Beautiful descending line that creates forward motion</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <h4 className="font-medium text-gray-900 mb-2">Bass Movement:</h4>
                  <p className="text-sm text-gray-700 font-mono">C → G → A → F</p>
                  <p className="text-sm text-gray-600 mt-1">Strong root movement by 4ths and 5ths</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>What Makes It Work:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Stepwise motion in the top voice (C→B→A)</li>
                  <li>• Strong bass movement with clear harmonic direction</li>
                  <li>• Inner voices move smoothly with minimal leaps</li>
                  <li>• Common tones where possible (A held between Am and F)</li>
                </ul>
                <p className="mt-3"><strong>Result:</strong> A progression that feels inevitable and emotionally satisfying</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">⚠️ Common Voice Leading Problems</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">❌ What to Avoid</h3>
              <ul className="space-y-2 text-sm text-red-700">
                <li>• Parallel 5ths and octaves between voices</li>
                <li>• Large leaps when small steps would work</li>
                <li>• Unresolved leading tones</li>
                <li>• Crossing voices unnecessarily</li>
                <li>• Ignoring common tones between chords</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Best Practices</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Move voices by the smallest possible distance</li>
                <li>• Keep common tones in the same voice</li>
                <li>• Use contrary motion when possible</li>
                <li>• Resolve tendency tones properly</li>
                <li>• Think melodically about each voice</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12 bg-yellow-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🏃‍♂️ Practice Exercises</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">🎹 Beginner Exercises</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Practice I-V-I with smooth voice leading</li>
                <li>• Play chord progressions focusing on the top note</li>
                <li>• Identify common tones between adjacent chords</li>
                <li>• Practice the same progression with different chord inversions</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">🔥 Advanced Exercises</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Compose 4-part harmony for simple melodies</li>
                <li>• Analyze voice leading in Bach chorales</li>
                <li>• Practice smooth voice leading with extended chords</li>
                <li>• Create bass lines that connect chord changes smoothly</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🧭 Next Steps</h3>
            <div className="space-y-3">
              <Link 
                href="/lessons/songs/chords/inversions"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Master Chord Inversions
              </Link>
              <Link 
                href="/lessons/songs/chords/substitutions"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Learn Chord Substitutions
              </Link>
              <Link 
                href="/lessons/songs/chords/extended"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Explore Extended Chords
              </Link>
            </div>
          </div>
          <div className="bg-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🔗 Related Topics</h3>
            <div className="space-y-3">
              <Link 
                href="/lessons/songs/chords/roman-numerals"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                → Roman Numeral Analysis
              </Link>
              <Link 
                href="/lessons/songs/chords/progressions"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                → Common Chord Progressions
              </Link>
              <Link 
                href="/lessons/songs/chords"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                ← Back to Chord Theory Overview
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
