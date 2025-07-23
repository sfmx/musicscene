import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const verseCharacteristics = [
  {
    aspect: 'Harmonic Function',
    description: 'Usually establishes and reinforces the tonic key',
    theory: 'Often uses I-vi-IV-V or similar progressions that feel stable',
    example: 'C-Am-F-G in C major maintains tonal center'
  },
  {
    aspect: 'Melodic Contour',
    description: 'Moderate range, comfortable for vocals',
    theory: 'Stays within an octave, avoids extreme leaps',
    example: 'Stepwise motion with occasional thirds and fourths'
  },
  {
    aspect: 'Rhythmic Character',
    description: 'Steady, predictable patterns that support lyrics',
    theory: 'Simple subdivision patterns, clear beat emphasis',
    example: 'Quarter note emphasis in 4/4 with consistent phrasing'
  },
  {
    aspect: 'Textural Density',
    description: 'Moderate arrangement allowing vocal clarity',
    theory: 'Balance between support and space',
    example: 'Rhythm guitar, bass, light drums, minimal lead elements'
  }
];

const verseTypes = [
  {
    type: 'Traditional Verse',
    structure: 'AABA or ABAB',
    harmony: 'Tonic-centered progressions',
    function: 'Story development, harmonic establishment',
    examples: ['Many folk and country songs', 'Classic rock ballads']
  },
  {
    type: 'Progressive Verse',
    structure: 'ABCD (through-composed)',
    harmony: 'Modulating or chromatic movement',
    function: 'Continuous development, building energy',
    examples: ['Progressive rock', 'Some pop songs']
  },
  {
    type: 'Call and Response Verse',
    structure: 'AB-AB pattern',
    harmony: 'Question-answer harmonic movement',
    function: 'Interactive feel, rhythmic interest',
    examples: ['Blues songs', 'Gospel-influenced tracks']
  }
];

export default function VerseStructurePage() {
  return (
    <Layout>
      <Header
        title="Verse Structure Analysis"
        subtitle="Understanding how verses function as the narrative and harmonic foundation of songs"
      />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Navigation */}
        <section className="bg-blue-50 rounded-lg p-4 mb-8">
          <Link href="/lessons/songs/structure" className="text-blue-600 hover:text-blue-800 text-sm">
            ← Back to Song Structure
          </Link>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Verse: Foundation of Song Narrative</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Verses serve as the narrative backbone of songs, providing story development while maintaining 
              harmonic stability. They establish the key center, introduce melodic themes, and create a 
              comfortable foundation for the more dramatic sections that follow.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <div className="text-green-600 text-2xl mb-2">🏠</div>
                <h3 className="font-semibold text-gray-900 mb-2">Harmonic Home</h3>
                <p className="text-gray-600 text-sm">Establishes and reinforces the tonic key center</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <div className="text-green-600 text-2xl mb-2">📖</div>
                <h3 className="font-semibold text-gray-900 mb-2">Story Development</h3>
                <p className="text-gray-600 text-sm">Provides lyrical content and narrative progression</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <div className="text-green-600 text-2xl mb-2">⚖️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Musical Balance</h3>
                <p className="text-gray-600 text-sm">Creates stability that contrasts with dynamic sections</p>
              </div>
            </div>
          </div>
        </section>

        {/* Verse Characteristics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Verse Characteristics</h2>
          <div className="space-y-6">
            {verseCharacteristics.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.aspect}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Theory</h4>
                    <p className="text-gray-700 text-sm">{item.theory}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Example</h4>
                    <p className="text-gray-700 text-sm">{item.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Types of Verses */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Types of Verse Structures</h2>
          <div className="grid gap-6">
            {verseTypes.map((verse, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">{verse.type}</h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Structure</h4>
                      <p className="text-gray-700">{verse.structure}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Harmonic Approach</h4>
                      <p className="text-gray-700">{verse.harmony}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Function</h4>
                    <p className="text-gray-700">{verse.function}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Common In</h4>
                    <div className="flex flex-wrap gap-2">
                      {verse.examples.map((example, i) => (
                        <span key={i} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Verse Progressions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Verse Progressions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">I-vi-IV-V (Pop Progression)</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">C - Am - F - G</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Extremely stable, feels like "home." The vi chord provides mild contrast while 
                  IV-V creates gentle forward motion back to I.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Function:</strong> I (tonic) → vi (relative minor) → IV (subdominant) → V (dominant)
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">ii-V-I (Jazz Influence)</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">Dm - G - C</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Strong sense of resolution. The ii-V motion creates expectation that resolves 
                  satisfyingly to I, making verses feel complete.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Function:</strong> ii (subdominant) → V (dominant) → I (tonic)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analysis Framework */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Verse Analysis Framework</h2>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎵 Musical Elements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Key center:</strong> What key is established?</li>
                  <li>• <strong>Chord progression:</strong> What functional harmony is used?</li>
                  <li>• <strong>Melodic range:</strong> How wide is the vocal melody?</li>
                  <li>• <strong>Rhythm:</strong> What subdivision and feel?</li>
                  <li>• <strong>Texture:</strong> How dense is the arrangement?</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📝 Structural Elements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Form:</strong> AABA, ABAB, or through-composed?</li>
                  <li>• <strong>Length:</strong> How many measures per verse?</li>
                  <li>• <strong>Repetition:</strong> What elements repeat vs. develop?</li>
                  <li>• <strong>Contrast:</strong> How does it differ from chorus?</li>
                  <li>• <strong>Connection:</strong> How does it lead to the next section?</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Practice Exercises</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Listening Analysis</h3>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. Choose a song and isolate just the verse sections</li>
                <li>2. Identify the chord progression by ear</li>
                <li>3. Notice the melodic range and contour</li>
                <li>4. Count measures and identify the formal structure</li>
                <li>5. Compare multiple verses—what stays the same vs. what changes?</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎸 Playing Practice</h3>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. Learn verse chord progressions from different genres</li>
                <li>2. Practice transitioning from verse to chorus smoothly</li>
                <li>3. Experiment with different strumming patterns for verses</li>
                <li>4. Try playing verse progressions in different keys</li>
                <li>5. Write your own verse using common progressions</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link href="/lessons/songs/structure" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              ← Back to Song Structure
            </Link>
            <Link href="/lessons/songs/structure/chorus" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              Next: Chorus Structure →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
