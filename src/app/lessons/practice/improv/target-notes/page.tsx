import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TargetNotesPage() {
  return (
    <Layout>
      <Header 
        title="Target Notes" 
        subtitle="Master the art of landing on strong chord tones and melodic destinations"
      />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🎯</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Target Notes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the art of landing on strong chord tones and melodic destinations to create compelling, harmonically sophisticated solos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* What Are Target Notes */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What Are Target Notes?</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Target notes are specific pitches that you intentionally aim for during improvisation. They serve as melodic destinations that create tension and resolution, giving your solos direction and harmonic coherence.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Primary Target Notes:</h3>
                    <ul className="list-disc list-inside space-y-1 text-blue-800">
                      <li><strong>Chord Tones:</strong> Root, 3rd, 5th, 7th</li>
                      <li><strong>Extensions:</strong> 9th, 11th, 13th</li>
                      <li><strong>Guide Tones:</strong> 3rd and 7th (define chord quality)</li>
                      <li><strong>Strong Scale Degrees:</strong> 1, 3, 5 in major/minor scales</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Target Note Concepts */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Concepts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Strong Beats</h3>
                    <p className="text-green-800">
                      Land chord tones on beats 1 and 3 (strong beats) for stability and harmonic clarity.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-900 mb-3">Weak Beats</h3>
                    <p className="text-orange-800">
                      Use passing tones and tensions on beats 2 and 4 to create movement and color.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Approach Notes</h3>
                    <p className="text-purple-800">
                      Lead into target notes from above or below (chromatic or diatonic approaches).
                    </p>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-900 mb-3">Resolution</h3>
                    <p className="text-red-800">
                      Create tension with non-chord tones that resolve to stable chord tones.
                    </p>
                  </div>
                </div>
              </section>

              {/* Target Note Techniques */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Target Note Techniques</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Chord Tone Targeting</h3>
                    <p className="text-gray-700 mb-3">
                      Focus on landing the most important chord tones for each harmony.
                    </p>
                    <div className="bg-gray-50 p-4 rounded">
                      <p className="text-sm font-mono">
                        <strong>Cmaj7:</strong> Target C (root), E (3rd), G (5th), B (7th)<br/>
                        <strong>Dm7:</strong> Target D (root), F (3rd), A (5th), C (7th)<br/>
                        <strong>G7:</strong> Target G (root), B (3rd), D (5th), F (7th)
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Guide Tone Lines</h3>
                    <p className="text-gray-700 mb-3">
                      Connect the 3rd and 7th of each chord to create smooth voice leading.
                    </p>
                    <div className="bg-gray-50 p-4 rounded">
                      <p className="text-sm font-mono">
                        <strong>ii-V-I in C:</strong><br/>
                        Dm7: F (3rd) → G7: F (7th) → Cmaj7: E (3rd)<br/>
                        Dm7: C (7th) → G7: B (3rd) → Cmaj7: B (7th)
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Approach Patterns</h3>
                    <p className="text-gray-700 mb-3">
                      Use specific patterns to approach target notes effectively.
                    </p>
                    <div className="bg-gray-50 p-4 rounded">
                      <ul className="text-sm space-y-1">
                        <li><strong>Chromatic Approach:</strong> Half-step below target note</li>
                        <li><strong>Diatonic Approach:</strong> Scale step above or below</li>
                        <li><strong>Double Chromatic:</strong> Two half-steps leading to target</li>
                        <li><strong>Enclosure:</strong> Above and below target note</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Rhythmic Targeting</h3>
                    <p className="text-gray-700 mb-3">
                      Time your target notes to land on rhythmically strong points.
                    </p>
                    <div className="bg-gray-50 p-4 rounded">
                      <ul className="text-sm space-y-1">
                        <li><strong>Downbeats:</strong> Beat 1 of each measure</li>
                        <li><strong>Strong Beats:</strong> Beats 1 and 3 in 4/4 time</li>
                        <li><strong>Phrase Beginnings:</strong> Start phrases on chord tones</li>
                        <li><strong>Cadence Points:</strong> End phrases on stable tones</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Exercises */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Target Note Exercises</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Exercise 1: Chord Tone Landing</h3>
                    <p className="text-blue-800 mb-3">
                      Practice landing chord tones on beat 1 of each measure.
                    </p>
                    <ol className="list-decimal list-inside text-blue-800 space-y-1 text-sm">
                      <li>Play a simple chord progression (C-Am-F-G)</li>
                      <li>Improvise freely but land the root on beat 1 of each chord</li>
                      <li>Repeat landing the 3rd, then 5th, then 7th</li>
                      <li>Mix different chord tones while maintaining the landing rule</li>
                    </ol>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Exercise 2: Guide Tone Lines</h3>
                    <p className="text-green-800 mb-3">
                      Create smooth melodic lines using only 3rds and 7ths.
                    </p>
                    <ol className="list-decimal list-inside text-green-800 space-y-1 text-sm">
                      <li>Practice ii-V-I progressions</li>
                      <li>Connect 3rds and 7ths with stepwise motion</li>
                      <li>Add passing tones between guide tones</li>
                      <li>Create longer phrases maintaining guide tone focus</li>
                    </ol>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Exercise 3: Approach Note Patterns</h3>
                    <p className="text-purple-800 mb-3">
                      Practice different ways to approach target notes melodically.
                    </p>
                    <ol className="list-decimal list-inside text-purple-800 space-y-1 text-sm">
                      <li>Choose a target note (chord tone)</li>
                      <li>Approach from half-step below</li>
                      <li>Approach from half-step above</li>
                      <li>Use enclosure patterns (above-below-target)</li>
                      <li>Combine multiple approach techniques</li>
                    </ol>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-900 mb-3">Exercise 4: Delayed Resolution</h3>
                    <p className="text-orange-800 mb-3">
                      Create tension by delaying the arrival at target notes.
                    </p>
                    <ol className="list-decimal list-inside text-orange-800 space-y-1 text-sm">
                      <li>Plan to land a chord tone on beat 1</li>
                      <li>Play a non-chord tone instead</li>
                      <li>Resolve to the target note on beat 2 or 3</li>
                      <li>Experiment with different delay timings</li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Famous Examples */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Famous Target Note Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Charlie Parker</h3>
                      <p className="text-gray-700 text-sm">
                        Master of guide tone lines and chromatic approaches. Listen to "Confirmation" and "Ornithology."
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Wes Montgomery</h3>
                      <p className="text-gray-700 text-sm">
                        Excellent chord tone targeting with octave doubling. Study "Four on Six" and "West Coast Blues."
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Pat Metheny</h3>
                      <p className="text-gray-700 text-sm">
                        Modern approach to target notes with extensions. Check out "Bright Size Life" solos.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Grant Green</h3>
                      <p className="text-gray-700 text-sm">
                        Simple but effective chord tone focus. Listen to "Idle Moments" and "Green Street."
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Joe Pass</h3>
                      <p className="text-gray-700 text-sm">
                        Masterful target note use in solo guitar context. Study "Virtuoso" series recordings.
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">John Coltrane</h3>
                      <p className="text-gray-700 text-sm">
                        Advanced harmonic targeting and substitutions. Analyze "Giant Steps" and "Countdown."
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Tips */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Tips</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Start with simple chord progressions
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Focus on 3rds and 7ths first
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Land targets on strong beats
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Use approach notes for smooth lines
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Practice with slow tempos first
                  </li>
                </ul>
              </div>

              {/* Common Mistakes */}
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-4">Common Mistakes</h3>
                <ul className="space-y-3 text-sm text-red-800">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Landing non-chord tones on strong beats
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Ignoring the underlying harmony
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Overusing the same target notes
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Mechanical approach without musical feel
                  </li>
                </ul>
              </div>

              {/* Daily Practice Routine */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Daily Practice Routine</h3>
                <div className="space-y-3 text-sm text-blue-800">
                  <div>
                    <strong>5 minutes:</strong> Chord tone arpeggios
                  </div>
                  <div>
                    <strong>10 minutes:</strong> Guide tone lines on ii-V-I
                  </div>
                  <div>
                    <strong>10 minutes:</strong> Approach note exercises
                  </div>
                  <div>
                    <strong>15 minutes:</strong> Apply to jazz standards
                  </div>
                </div>
              </div>

              {/* Related Topics */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Topics</h3>
                <div className="space-y-2">
                  <Link href="/lessons/practice/improv/scales" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Improvising with Scales
                  </Link>
                  <Link href="/lessons/practice/improv/arpeggios" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Improvising with Arpeggios
                  </Link>
                  <Link href="/lessons/practice/improv/phrasing" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Phrasing
                  </Link>
                  <Link href="/lessons/theory/harmony/chord-progressions" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Chord Progressions
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <Link 
              href="/lessons/practice/improv/motif-development" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="mr-2">←</span>
              Previous: Motif Development
            </Link>
            <Link 
              href="/lessons/practice/improv/scales" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              Next: Improvising with Scales
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
