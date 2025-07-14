import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ImprovisingWithScalesPage() {
  return (
    <Layout>
      <Header 
        title="Improvising with Scales" 
        subtitle="Master the art of using scales as the foundation for melodic improvisation"
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
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
            <div className="text-6xl mb-4">🎶</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Improvising with Scales
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn to use major, minor, modal, and exotic scales as the foundation for creating compelling and harmonically rich improvisations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Scale Categories */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Scales for Improvisation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Major Family</h3>
                    <ul className="text-blue-800 space-y-1 text-sm">
                      <li>• Major Scale (Ionian)</li>
                      <li>• Dorian Mode</li>
                      <li>• Phrygian Mode</li>
                      <li>• Lydian Mode</li>
                      <li>• Mixolydian Mode</li>
                      <li>• Natural Minor (Aeolian)</li>
                      <li>• Locrian Mode</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Minor Family</h3>
                    <ul className="text-green-800 space-y-1 text-sm">
                      <li>• Natural Minor</li>
                      <li>• Harmonic Minor</li>
                      <li>• Melodic Minor</li>
                      <li>• Dorian b2</li>
                      <li>• Lydian Augmented</li>
                      <li>• Lydian Dominant</li>
                      <li>• Half Diminished</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Pentatonic Family</h3>
                    <ul className="text-purple-800 space-y-1 text-sm">
                      <li>• Major Pentatonic</li>
                      <li>• Minor Pentatonic</li>
                      <li>• Blues Scale</li>
                      <li>• Japanese Scales</li>
                      <li>• Chinese Scales</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-900 mb-3">Exotic Scales</h3>
                    <ul className="text-orange-800 space-y-1 text-sm">
                      <li>• Whole Tone</li>
                      <li>• Diminished</li>
                      <li>• Chromatic</li>
                      <li>• Hungarian Minor</li>
                      <li>• Altered Scale</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Scale Application Strategies */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Scale Application Strategies</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Chord-Scale Theory</h3>
                    <p className="text-gray-700 mb-3">
                      Match specific scales to chord types for harmonic accuracy.
                    </p>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-sm font-mono space-y-1">
                        <p><strong>Cmaj7:</strong> C Major, C Lydian</p>
                        <p><strong>Dm7:</strong> D Dorian, D Natural Minor</p>
                        <p><strong>G7:</strong> G Mixolydian, G Altered</p>
                        <p><strong>Am7:</strong> A Dorian, A Natural Minor</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Modal Interchange</h3>
                    <p className="text-gray-700 mb-3">
                      Borrow scales from parallel modes for color and variety.
                    </p>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-sm font-mono space-y-1">
                        <p><strong>In C Major context:</strong></p>
                        <p>• C Dorian (borrowed from C minor)</p>
                        <p>• C Phrygian (darker, Spanish flavor)</p>
                        <p>• C Lydian (brighter, dreamy quality)</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Scale Substitution</h3>
                    <p className="text-gray-700 mb-3">
                      Replace expected scales with alternatives for sophisticated sound.
                    </p>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-sm font-mono space-y-1">
                        <p><strong>G7 chord:</strong></p>
                        <p>• Expected: G Mixolydian</p>
                        <p>• Substitute: G Altered (G Ab Bb B Db Eb F)</p>
                        <p>• Or: G Whole Tone (G A B C# D# F)</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Scale Combination</h3>
                    <p className="text-gray-700 mb-3">
                      Blend multiple scales within a single phrase or solo.
                    </p>
                    <div className="bg-gray-50 p-4 rounded">
                      <ul className="text-sm space-y-1">
                        <li>• Start with pentatonic, add chromatic notes</li>
                        <li>• Combine major and minor pentatonic</li>
                        <li>• Mix diatonic and altered scales</li>
                        <li>• Use different scales for different chord tones</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Genre-Specific Scale Usage */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Scale Usage by Genre</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Jazz</h3>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>• All modes of major scale</li>
                        <li>• Melodic minor modes</li>
                        <li>• Diminished scales</li>
                        <li>• Whole tone scale</li>
                        <li>• Bebop scales</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-900 mb-2">Blues/Rock</h3>
                      <ul className="text-green-800 text-sm space-y-1">
                        <li>• Minor pentatonic</li>
                        <li>• Blues scale</li>
                        <li>• Major pentatonic</li>
                        <li>• Dorian mode</li>
                        <li>• Mixolydian mode</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">Latin</h3>
                      <ul className="text-purple-800 text-sm space-y-1">
                        <li>• Phrygian mode</li>
                        <li>• Harmonic minor</li>
                        <li>• Spanish Phrygian</li>
                        <li>• Altered dominant</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-orange-900 mb-2">Folk/Country</h3>
                      <ul className="text-orange-800 text-sm space-y-1">
                        <li>• Major scale</li>
                        <li>• Mixolydian mode</li>
                        <li>• Dorian mode</li>
                        <li>• Major pentatonic</li>
                        <li>• Natural minor</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-red-900 mb-2">Fusion/Contemporary</h3>
                      <ul className="text-red-800 text-sm space-y-1">
                        <li>• Lydian mode</li>
                        <li>• Melodic minor modes</li>
                        <li>• Synthetic scales</li>
                        <li>• Pentatonic variations</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">World Music</h3>
                      <ul className="text-gray-800 text-sm space-y-1">
                        <li>• Various ethnic scales</li>
                        <li>• Microtonal variations</li>
                        <li>• Regional modes</li>
                        <li>• Traditional scales</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Scale Practice Exercises */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Scale Practice Exercises</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Exercise 1: Scale Mastery</h3>
                    <p className="text-blue-800 mb-3">
                      Learn scales thoroughly in all positions and keys.
                    </p>
                    <ol className="list-decimal list-inside text-blue-800 space-y-1 text-sm">
                      <li>Practice scales ascending and descending</li>
                      <li>Play in different octaves and positions</li>
                      <li>Use various rhythmic patterns</li>
                      <li>Play in all 12 keys</li>
                      <li>Practice scale intervals (3rds, 4ths, 5ths)</li>
                    </ol>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Exercise 2: Chord-Scale Matching</h3>
                    <p className="text-green-800 mb-3">
                      Practice applying appropriate scales to chord progressions.
                    </p>
                    <ol className="list-decimal list-inside text-green-800 space-y-1 text-sm">
                      <li>Play a chord progression slowly</li>
                      <li>Choose appropriate scale for each chord</li>
                      <li>Improvise using only the chosen scale</li>
                      <li>Change scales smoothly between chords</li>
                      <li>Record yourself to hear the harmonic movement</li>
                    </ol>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Exercise 3: Modal Improvisation</h3>
                    <p className="text-purple-800 mb-3">
                      Explore the unique character of each mode.
                    </p>
                    <ol className="list-decimal list-inside text-purple-800 space-y-1 text-sm">
                      <li>Play a single chord vamp (e.g., Dm7)</li>
                      <li>Improvise using D Dorian exclusively</li>
                      <li>Focus on the characteristic notes of the mode</li>
                      <li>Repeat with other modes and roots</li>
                      <li>Compare how different modes sound over same chord</li>
                    </ol>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-900 mb-3">Exercise 4: Scale Substitution</h3>
                    <p className="text-orange-800 mb-3">
                      Experiment with unexpected scale choices for creative sounds.
                    </p>
                    <ol className="list-decimal list-inside text-orange-800 space-y-1 text-sm">
                      <li>Start with a simple ii-V-I progression</li>
                      <li>Use conventional scales first</li>
                      <li>Replace one scale with an unexpected choice</li>
                      <li>Listen to how the substitution changes the color</li>
                      <li>Try multiple substitutions in the same progression</li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Famous Scale Players */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Master Scale Improvisers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">John Coltrane</h3>
                      <p className="text-gray-700 text-sm">
                        Master of modal improvisation and scale substitutions. Study "Impressions" and "My Favorite Things."
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Miles Davis</h3>
                      <p className="text-gray-700 text-sm">
                        Pioneered modal jazz and creative scale usage. Listen to "Kind of Blue" album.
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Joe Satriani</h3>
                      <p className="text-gray-700 text-sm">
                        Rock virtuoso known for creative scale applications. Check out "Surfing with the Alien."
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Allan Holdsworth</h3>
                      <p className="text-gray-700 text-sm">
                        Fusion master using complex scales and modes. Study his approach to melodic minor modes.
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Frank Gambale</h3>
                      <p className="text-gray-700 text-sm">
                        Expert in modal playing and scale sequences. Listen to "Thunder from Down Under."
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Paco de Lucía</h3>
                      <p className="text-gray-700 text-sm">
                        Flamenco master using Phrygian and exotic scales. Study his use of Spanish modes.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Reference */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Scale Selection Quick Guide</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-blue-600">Major chords:</strong>
                    <p className="text-gray-700">Major, Lydian</p>
                  </div>
                  <div>
                    <strong className="text-green-600">Minor chords:</strong>
                    <p className="text-gray-700">Dorian, Natural Minor</p>
                  </div>
                  <div>
                    <strong className="text-purple-600">Dominant chords:</strong>
                    <p className="text-gray-700">Mixolydian, Altered</p>
                  </div>
                  <div>
                    <strong className="text-orange-600">Half-diminished:</strong>
                    <p className="text-gray-700">Locrian, Locrian #2</p>
                  </div>
                </div>
              </div>

              {/* Practice Tips */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Practice Tips</h3>
                <ul className="space-y-3 text-sm text-blue-800">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Learn one scale at a time thoroughly
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Practice scales with backing tracks
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Focus on the characteristic tones
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Start slowly and build speed gradually
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Use scales musically, not mechanically
                  </li>
                </ul>
              </div>

              {/* Common Mistakes */}
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-4">Common Mistakes</h3>
                <ul className="space-y-3 text-sm text-red-800">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Playing scales too mechanically
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Ignoring the underlying harmony
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Learning too many scales at once
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Not practicing scale patterns
                  </li>
                </ul>
              </div>

              {/* Daily Practice Routine */}
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Daily Practice Routine</h3>
                <div className="space-y-3 text-sm text-green-800">
                  <div>
                    <strong>10 minutes:</strong> Scale patterns and sequences
                  </div>
                  <div>
                    <strong>15 minutes:</strong> Chord-scale relationships
                  </div>
                  <div>
                    <strong>10 minutes:</strong> Modal improvisation
                  </div>
                  <div>
                    <strong>5 minutes:</strong> Scale substitution experiments
                  </div>
                </div>
              </div>

              {/* Related Topics */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Topics</h3>
                <div className="space-y-2">
                  <Link href="/lessons/practice/improv/target-notes" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Target Notes
                  </Link>
                  <Link href="/lessons/practice/improv/arpeggios" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Improvising with Arpeggios
                  </Link>
                  <Link href="/lessons/theory/scales/modes" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Modes and Modal Theory
                  </Link>
                  <Link href="/lessons/theory/harmony/chord-scales" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Chord-Scale Theory
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <Link 
              href="/lessons/practice/improv/target-notes" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="mr-2">←</span>
              Previous: Target Notes
            </Link>
            <Link 
              href="/lessons/practice/improv/arpeggios" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              Next: Improvising with Arpeggios
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
