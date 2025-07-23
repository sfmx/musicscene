import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const extendedChordTypes = [
  {
    type: '7th Chords',
    symbol: '7',
    formula: '1-3-5-b7',
    examples: [
      { chord: 'C7', notes: 'C-E-G-Bb', usage: 'Dominant function - wants to resolve', context: 'Blues, jazz, pop' },
      { chord: 'Cmaj7', notes: 'C-E-G-B', usage: 'Sophisticated major - dreamy quality', context: 'Jazz, R&B, neo-soul' },
      { chord: 'Cm7', notes: 'C-Eb-G-Bb', usage: 'Smooth minor - less final than triad', context: 'Jazz, funk, R&B' },
      { chord: 'Cm(maj7)', notes: 'C-Eb-G-B', usage: 'Mysterious, haunting - rare but powerful', context: 'Film scores, art music' }
    ]
  },
  {
    type: '9th Chords',
    symbol: '9',
    formula: '1-3-5-b7-9',
    examples: [
      { chord: 'C9', notes: 'C-E-G-Bb-D', usage: 'Rich dominant - jazz standard', context: 'Jazz, blues, R&B' },
      { chord: 'Cmaj9', notes: 'C-E-G-B-D', usage: 'Lush, dreamy - very sophisticated', context: 'Jazz, neo-soul, ambient' },
      { chord: 'Cm9', notes: 'C-Eb-G-Bb-D', usage: 'Complex minor - emotional depth', context: 'Jazz ballads, R&B' },
      { chord: 'Cadd9', notes: 'C-E-G-D', usage: 'Major with 9th, no 7th - bright and open', context: 'Pop, rock, folk' }
    ]
  },
  {
    type: '11th & 13th Chords',
    symbol: '11/13',
    formula: 'Extended stack',
    examples: [
      { chord: 'C11', notes: 'C-E-G-Bb-D-F', usage: 'Very dense - often with omitted 3rd', context: 'Jazz, fusion' },
      { chord: 'C13', notes: 'C-E-G-Bb-D-F-A', usage: 'Full extended dominant', context: 'Jazz, big band' },
      { chord: 'Csus4', notes: 'C-F-G', usage: 'Suspended 4th - creates tension', context: 'All genres - very common' },
      { chord: 'Csus2', notes: 'C-D-G', usage: 'Suspended 2nd - open, ambiguous', context: 'Rock, pop, ambient' }
    ]
  }
];

const progressionExamples = [
  {
    name: 'Jazz ii-V-I with Extensions',
    basic: 'Dm7 - G7 - Cmaj7',
    extended: 'Dm9 - G13 - Cmaj9',
    analysis: 'ii9 - V13 - Imaj9',
    explanation: 'Extended chords add sophistication and voice leading possibilities',
    genre: 'Jazz, Neo-Soul'
  },
  {
    name: 'Pop Ballad with maj7',
    basic: 'C - Am - F - G',
    extended: 'Cmaj7 - Am7 - Fmaj7 - G7',
    analysis: 'Imaj7 - vi7 - IVmaj7 - V7',
    explanation: 'Major 7th chords add emotional depth and sophistication to simple progressions',
    genre: 'Pop, R&B, Singer-Songwriter'
  },
  {
    name: 'Rock with sus chords',
    basic: 'C - F - G - C',
    extended: 'Csus2 - F - Gsus4 - G - C',
    analysis: 'Isus2 - IV - Vsus4 - V - I',
    explanation: 'Suspended chords create motion and interest in simple rock progressions',
    genre: 'Rock, Alternative, Indie'
  },
  {
    name: 'Sophisticated Minor',
    basic: 'Am - F - C - G',
    extended: 'Am(maj7) - Fmaj7 - Cmaj9 - G13',
    analysis: 'vi(maj7) - IVmaj7 - Imaj9 - V13',
    explanation: 'Extended minor chords with major 7th create haunting, sophisticated colors',
    genre: 'Art Rock, Film Music'
  }
];

const voicingTips = [
  {
    instrument: 'Piano/Keyboard',
    tips: [
      'Play bass note with left hand, chord tones with right',
      'Use "rootless voicings" - omit the root in right hand',
      'Stack chord tones in 4ths for modern sound',
      'Practice common jazz voicings (shells, drops, etc.)'
    ]
  },
  {
    instrument: 'Guitar',
    tips: [
      'Learn moveable 7th chord shapes across the neck',
      'Use partial voicings - not all notes need to be played',
      'Focus on the characteristic intervals (maj7, b7, 9th)',
      'Practice chord melody - melody note on top of extended chord'
    ]
  },
  {
    instrument: 'Songwriting',
    tips: [
      'Start with simple triads, add extensions for color',
      'Consider the melody - avoid clashing with chord extensions',
      'Use extended chords at emotional peaks or resolutions',
      'Balance sophistication with accessibility'
    ]
  }
];

export default function ExtendedChordsPage() {
  return (
    <Layout>
      <Header
        title="Extended Chords"
        subtitle="Learn the theory and application of 7th, 9th, 11th, and 13th chords in popular music"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Beyond the Triad</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p>
              Extended chords add notes beyond the basic triad (1-3-5) to create richer, more sophisticated 
              harmonies. They're the difference between <strong>"Three Little Birds"</strong> and 
              <strong>"Giant Steps"</strong> - same harmonic principles, different levels of complexity.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-teal-600 mb-2">🎹 Harmonic Sophistication</h3>
                <p className="text-sm">Extended chords provide more colors in your harmonic palette while maintaining clear functional relationships.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-teal-600 mb-2">🎵 Voice Leading</h3>
                <p className="text-sm">Additional chord tones create more possibilities for smooth voice leading and melodic bass lines.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-teal-600 mb-2">🎶 Genre Flexibility</h3>
                <p className="text-sm">From jazz standards to neo-soul, extended chords adapt to any style requiring harmonic sophistication.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chord Types */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🎼 Types of Extended Chords</h2>
          <div className="space-y-8">
            {extendedChordTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{type.type}</h3>
                    <p className="text-sm text-gray-600 mt-1">Formula: {type.formula}</p>
                  </div>
                  <span className="bg-teal-100 text-teal-800 text-xl font-mono font-bold px-3 py-1 rounded">
                    {type.symbol}
                  </span>
                </div>
                
                <div className="grid gap-4">
                  {type.examples.map((example, exIndex) => (
                    <div key={exIndex} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="font-mono text-lg font-bold text-teal-600">{example.chord}</span>
                          <span className="ml-3 text-sm text-gray-600">{example.notes}</span>
                        </div>
                        <span className="bg-white px-2 py-1 text-xs rounded text-gray-600">
                          {example.context}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{example.usage}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Progressions with Extensions */}
        <section className="mb-12 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎵 Extended Chord Progressions</h2>
          <div className="space-y-6">
            {progressionExamples.map((progression, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{progression.name}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                    {progression.genre}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-600 mb-1">Basic version:</p>
                      <p className="font-mono text-sm text-gray-800">{progression.basic}</p>
                    </div>
                    <div className="bg-teal-50 p-3 rounded">
                      <p className="text-sm text-teal-600 mb-1">Extended version:</p>
                      <p className="font-mono text-lg text-teal-800 font-bold">{progression.extended}</p>
                      <p className="text-xs text-teal-600 mt-1">{progression.analysis}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700"><strong>Why It Works:</strong></p>
                    <p className="text-sm text-gray-600 mt-1">{progression.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Application */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🎯 Instrument-Specific Voicings</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {voicingTips.map((section, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.instrument}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Real Song Analysis */}
        <section className="mb-12 bg-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔍 Analysis: Extended Chords in "Fly Me to the Moon"</h2>
          <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
            <h3 className="font-semibold text-gray-900 mb-4">A Jazz Standard's Sophisticated Harmony</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-mono text-sm"><strong>Am7 - Dm7 - G7 - Cmaj7</strong></p>
                  <p className="text-sm text-gray-600 mt-1">vi7 - ii7 - V7 - Imaj7 (in C major)</p>
                </div>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Extended Chord Functions:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• <strong>Am7:</strong> Smoother than Am triad, less final</li>
                    <li>• <strong>Dm7:</strong> Perfect subdominant preparation</li>
                    <li>• <strong>G7:</strong> Classic dominant 7th - strong pull to I</li>
                    <li>• <strong>Cmaj7:</strong> Sophisticated resolution, dreamy quality</li>
                  </ul>
                </div>
              </div>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>Why Extensions Work Here:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• 7th chords create smoother voice leading</li>
                  <li>• Less finality allows continuous flow</li>
                  <li>• Sophisticated enough for jazz context</li>
                  <li>• Each chord has clear but rich function</li>
                </ul>
                <p className="mt-3"><strong>Emotional Effect:</strong> Romantic, sophisticated, flowing rather than choppy</p>
              </div>
            </div>
          </div>
        </section>

        {/* When to Use Extensions */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🤔 When and How to Use Extended Chords</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Good Situations</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Jazz, R&B, neo-soul contexts</li>
                <li>• Ballads requiring emotional sophistication</li>
                <li>• When you want smoother voice leading</li>
                <li>• Bridge sections or climactic moments</li>
                <li>• Instrumental sections where complexity works</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Be Careful When...</h3>
              <ul className="space-y-2 text-sm text-red-700">
                <li>• The melody clashes with chord extensions</li>
                <li>• You're writing simple, anthemic music</li>
                <li>• The genre doesn't expect sophistication</li>
                <li>• You're using them just to show off</li>
                <li>• The arrangement is already busy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Progressions */}
        <section className="mb-12 bg-yellow-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">📚 Essential Extended Chord Progressions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">🎹 Jazz/R&B Standards</h3>
              <div className="space-y-2 text-sm font-mono text-gray-700">
                <p>• ii7 - V7 - Imaj7 (classic resolution)</p>
                <p>• Imaj7 - vi7 - ii7 - V7 (circle progression)</p>
                <p>• vi7 - bII7 - Imaj7 (tritone substitution)</p>
                <p>• iii7 - vi7 - ii7 - V7 (descending)</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">🎸 Pop/Rock Applications</h3>
              <div className="space-y-2 text-sm font-mono text-gray-700">
                <p>• Imaj7 - V7 - vi7 - IV (sophisticated pop)</p>
                <p>• vi7 - IVmaj7 - I - V7 (ballad progression)</p>
                <p>• Isus2 - Isus4 - I (resolution motion)</p>
                <p>• I - Isus4 - vi - IVadd9 (modern pop)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🏃‍♂️ Practice Exercises</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-teal-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🎹 Beginner Practice</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Learn basic 7th chord shapes in all keys</li>
                <li>• Practice ii7-V7-Imaj7 in multiple keys</li>
                <li>• Add 7ths to familiar chord progressions</li>
                <li>• Practice sus2 and sus4 resolutions</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🔥 Advanced Practice</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Learn rootless voicings for piano</li>
                <li>• Practice 9th, 11th, and 13th chords</li>
                <li>• Reharmonize pop songs with extended chords</li>
                <li>• Study jazz standards for extension usage</li>
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
                href="/lessons/songs/chords/secondary-dominants"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Master Secondary Dominants
              </Link>
              <Link 
                href="/lessons/songs/chords/inversions"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Learn Chord Inversions
              </Link>
              <Link 
                href="/lessons/songs/chords/voice-leading"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Apply Voice Leading
              </Link>
            </div>
          </div>
          <div className="bg-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🔗 Related Topics</h3>
            <div className="space-y-3">
              <Link 
                href="/lessons/songs/chords/substitutions"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                → Chord Substitutions
              </Link>
              <Link 
                href="/lessons/songs/chords/modal-interchange"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                → Modal Interchange
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
