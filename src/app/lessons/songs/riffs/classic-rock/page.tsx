import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const rockRiffElements = [
  {
    element: 'Power Chords',
    theory: 'Root and 5th only - no 3rd',
    application: 'Creates powerful, ambiguous harmony',
    example: 'E5 = E + B, works over major or minor',
    riffUsage: 'Foundation of most rock riffs - allows modal flexibility'
  },
  {
    element: 'Pentatonic Scales',
    theory: '5-note scales avoiding half-steps',
    application: 'Safe note choices that always sound good',
    example: 'E minor pentatonic: E-G-A-B-D',
    riffUsage: 'Single-note riffs and guitar solos built from these scales'
  },
  {
    element: 'Modal Interchange',
    theory: 'Borrowing notes from parallel modes',
    application: 'Adds darkness or brightness to progressions',
    example: 'Major key borrowing bVII chord (F in G major)',
    riffUsage: 'Creates the "rock" sound distinct from pure major/minor'
  },
  {
    element: 'Rhythmic Displacement',
    theory: 'Placing accents off the expected beats',
    application: 'Creates tension and forward momentum',
    example: 'Starting riff on beat 2 instead of beat 1',
    riffUsage: 'Makes simple riffs feel more complex and exciting'
  }
];

const iconicRockRiffs = [
  {
    song: '"Smoke on the Water"',
    artist: 'Deep Purple',
    key: 'G Minor',
    analysis: 'G-Bb-C power chord sequence using natural minor',
    technique: 'Single notes on one string, perfect for beginners',
    theory: 'Outlines i-bIII-IV progression in G minor',
    difficulty: 'Beginner',
    lessonFocus: 'Perfect introduction to power chord theory and minor keys',
    culturalImpact: 'Most recognized guitar riff in rock history'
  },
  {
    song: '"Sweet Child O\' Mine"',
    artist: 'Guns N\' Roses',
    key: 'D Major',
    analysis: 'Arpeggiated chords with chromatic connecting notes',
    technique: 'Alternate picking with string skipping',
    theory: 'D-C-G progression with melodic embellishments',
    difficulty: 'Intermediate',
    lessonFocus: 'Arpeggiation and chromatic voice leading',
    culturalImpact: 'Demonstrates how melody can drive a rock song'
  },
  {
    song: '"Enter Sandman"',
    artist: 'Metallica',
    key: 'E Minor',
    analysis: 'Minor pentatonic with chromatic approach notes',
    technique: 'Palm muting with precise alternate picking',
    theory: 'E minor with emphasis on tritone interval',
    difficulty: 'Intermediate',
    lessonFocus: 'Palm muting technique and dark harmonic colors',
    culturalImpact: 'Bridge between classic rock and metal genres'
  },
  {
    song: '"Layla"',
    artist: 'Derek and the Dominos',
    key: 'D Minor',
    analysis: 'Combines blues and rock elements with sophisticated harmony',
    technique: 'Slide guitar with standard tuning techniques',
    theory: 'D minor with blues scale and chromatic passing tones',
    difficulty: 'Advanced',
    lessonFocus: 'Integration of blues and rock harmonic concepts',
    culturalImpact: 'Shows evolution of blues into rock sophistication'
  }
];

const rockTechniques = [
  {
    technique: 'Palm Muting',
    description: 'Rest palm lightly on strings near bridge',
    theory: 'Reduces sustain and emphasizes attack',
    practice: 'Play power chords with palm touching strings',
    musicalEffect: 'Creates percussive, rhythmic emphasis',
    genreApplication: 'Essential for metal and hard rock'
  },
  {
    technique: 'Power Chord Progressions',
    description: 'Moving between root-fifth combinations',
    theory: 'Harmonic movement without committing to major/minor',
    practice: 'Practice I-bVII-IV progression in various keys',
    musicalEffect: 'Powerful, anthemic sound',
    genreApplication: 'Core of classic rock harmonic language'
  },
  {
    technique: 'String Skipping',
    description: 'Play non-adjacent strings for wider intervals',
    theory: 'Creates larger melodic leaps and fuller sound',
    practice: 'Alternate between low E and G strings',
    musicalEffect: 'More dramatic, orchestral-like melodies',
    genreApplication: 'Progressive rock and arena rock'
  },
  {
    technique: 'Octave Displacement',
    description: 'Play same notes in different octaves',
    theory: 'Same pitch class, different register',
    practice: 'Play melody on 6th string, repeat on 4th string',
    musicalEffect: 'Adds depth and sonic variety',
    genreApplication: 'Classic rock and southern rock'
  }
];

const progressionAnalysis = [
  {
    name: 'I-bVII-IV (Classic Rock)',
    example: 'G-F-C in G major',
    analysis: 'I-bVII-IV progression',
    theory: 'bVII borrowed from parallel minor (G minor)',
    effect: 'Creates anthemic, sing-along quality',
    songs: ['"Sweet Child O\' Mine"', '"Don\'t Stop Believin\'"'],
    difficulty: 'Beginner'
  },
  {
    name: 'i-bVI-bVII (Minor Rock)',
    example: 'Em-C-D in E minor',
    analysis: 'i-bVI-bVII progression',
    theory: 'All chords from natural minor scale',
    effect: 'Dark, powerful, driving feel',
    songs: ['"Stairway to Heaven"', '"Black Sabbath"'],
    difficulty: 'Beginner'
  },
  {
    name: 'I-V-vi-IV (Pop-Rock)',
    example: 'C-G-Am-F',
    analysis: 'I-V-vi-IV progression',
    theory: 'Functional harmony with strong resolution',
    effect: 'Emotional, uplifting, commercial appeal',
    songs: ['"Let It Be"', '"Don\'t Stop Believin\'"'],
    difficulty: 'Beginner'
  },
  {
    name: 'Chromatic Descending',
    example: 'E-Eb-D-C# (power chords)',
    analysis: 'Chromatic motion in parallel',
    theory: 'Voice leading takes precedence over function',
    effect: 'Creates tension and forward momentum',
    songs: ['"Run to the Hills"', '"Crazy Train"'],
    difficulty: 'Intermediate'
  }
];

export default function ClassicRockRiffsPage() {
  return (
    <Layout>
      <Header
        title="Classic Rock Riffs"
        subtitle="Analyze iconic rock riffs and understand their harmonic foundation, rhythmic patterns, and melodic construction"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The DNA of Rock Music</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p>
              Classic rock riffs combine <strong>blues heritage</strong> with <strong>modal harmony</strong> 
              to create the sound that defined a generation. Understanding these riffs reveals how simple 
              theoretical concepts can create maximum emotional impact and cultural significance.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-red-600 mb-2">🎸 Power & Simplicity</h3>
                <p className="text-sm">Rock riffs prove that complexity isn't required for impact - often the simplest ideas are the most memorable.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-red-600 mb-2">🎵 Modal Flavors</h3>
                <p className="text-sm">Rock frequently borrows from parallel minor keys, creating darker colors than pure major key music.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-red-600 mb-2">⚡ Rhythmic Drive</h3>
                <p className="text-sm">Rock riffs emphasize rhythm and groove as much as melody, creating visceral physical response.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Elements */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🔧 Essential Rock Riff Elements</h2>
          <div className="space-y-6">
            {rockRiffElements.map((element, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{element.element}</h3>
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                    Core Element
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-600 mb-1">Theory:</p>
                      <p className="font-mono text-sm text-gray-800">{element.theory}</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <p className="text-sm text-red-600 mb-1">Example:</p>
                      <p className="text-sm text-red-800">{element.example}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-700"><strong>Application:</strong> {element.application}</p>
                    <p className="text-sm text-gray-600"><strong>In Riffs:</strong> {element.riffUsage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Iconic Riffs Analysis */}
        <section className="mb-12 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎸 Legendary Riffs Deconstructed</h2>
          <div className="space-y-6">
            {iconicRockRiffs.map((riff, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{riff.song}</h3>
                    <p className="text-sm text-gray-600">by {riff.artist}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      riff.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      riff.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {riff.difficulty}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">Key: {riff.key}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-600 mb-1">Harmonic Analysis:</p>
                      <p className="text-sm text-gray-800">{riff.analysis}</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-sm text-blue-600 mb-1">Theory:</p>
                      <p className="text-sm text-blue-800">{riff.theory}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm text-green-600 mb-1">Technique:</p>
                      <p className="text-sm text-green-800">{riff.technique}</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded">
                      <p className="text-sm text-purple-600 mb-1">Lesson Focus:</p>
                      <p className="text-sm text-purple-800">{riff.lessonFocus}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 p-3 rounded">
                  <p className="text-sm text-orange-700"><strong>Cultural Impact:</strong> {riff.culturalImpact}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Progressions */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🎵 Essential Rock Progressions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {progressionAnalysis.map((prog, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{prog.name}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded ${
                    prog.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {prog.difficulty}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-mono text-lg text-gray-800">{prog.example}</p>
                    <p className="text-sm text-gray-600 mt-1">{prog.analysis}</p>
                  </div>
                  <p className="text-sm text-gray-700"><strong>Theory:</strong> {prog.theory}</p>
                  <p className="text-sm text-gray-700"><strong>Effect:</strong> {prog.effect}</p>
                  <div className="text-sm text-gray-600">
                    <p><strong>Heard in:</strong></p>
                    <ul className="ml-4 mt-1">
                      {prog.songs.map((song, i) => (
                        <li key={i}>• {song}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Techniques */}
        <section className="mb-12 bg-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🛠️ Essential Rock Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {rockTechniques.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{tech.technique}</h3>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700">{tech.description}</p>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-600 mb-1">Theory:</p>
                    <p className="text-sm text-gray-800">{tech.theory}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <p className="text-sm text-purple-600 mb-1">Practice:</p>
                    <p className="text-sm text-purple-800">{tech.practice}</p>
                  </div>
                  <p className="text-sm text-gray-600"><strong>Effect:</strong> {tech.musicalEffect}</p>
                  <p className="text-sm text-gray-600"><strong>Genre:</strong> {tech.genreApplication}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Guide */}
        <section className="mb-12 bg-yellow-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📈 Rock Riff Mastery Path</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-semibold text-gray-900 mb-3">Level 1: Foundation (Weeks 1-3)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-gray-800 mb-2">Essential Skills:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Master power chord shapes</li>
                    <li>• Learn "Smoke on the Water"</li>
                    <li>• Practice palm muting technique</li>
                    <li>• Understand I-bVII-IV progression</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-2">Theory Focus:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Power chord construction</li>
                    <li>• Modal interchange basics</li>
                    <li>• Minor pentatonic scale</li>
                    <li>• Rhythmic notation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-500">
              <h3 className="font-semibold text-gray-900 mb-3">Level 2: Technique (Weeks 4-6)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-gray-800 mb-2">Essential Skills:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• String skipping techniques</li>
                    <li>• Learn "Sweet Child O' Mine" intro</li>
                    <li>• Alternate picking development</li>
                    <li>• Chromatic riff patterns</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-2">Theory Focus:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Arpeggiation theory</li>
                    <li>• Chromatic voice leading</li>
                    <li>• Modal concepts</li>
                    <li>• Advanced rhythm patterns</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="font-semibold text-gray-900 mb-3">Level 3: Mastery (Weeks 7-8)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-gray-800 mb-2">Essential Skills:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Complex rhythm patterns</li>
                    <li>• Create original riffs</li>
                    <li>• Combine multiple techniques</li>
                    <li>• Play with backing tracks</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-2">Theory Focus:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Advanced modal harmony</li>
                    <li>• Compositional techniques</li>
                    <li>• Harmonic rhythm</li>
                    <li>• Style integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🧭 Next Steps</h3>
            <div className="space-y-3">
              <Link 
                href="/lessons/songs/riffs/metal"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Explore Metal Riffs
              </Link>
              <Link 
                href="/lessons/songs/riffs/blues"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Study Blues Foundation
              </Link>
              <Link 
                href="/lessons/songs/chords/modal-interchange"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Learn Modal Interchange
              </Link>
            </div>
          </div>
          <div className="bg-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🔗 Related Topics</h3>
            <div className="space-y-3">
              <Link 
                href="/lessons/songs/riffs/funk"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                → Funk Rhythmic Concepts
              </Link>
              <Link 
                href="/lessons/songs/techniques"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                → Guitar Techniques
              </Link>
              <Link 
                href="/lessons/songs/riffs"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                ← Back to Riffs Overview
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
