import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ImprovisingWithArpeggiosPage() {
  return (
    <Layout>
      <Header 
        title="Improvising with Arpeggios" 
        subtitle="Master the art of outlining chords and creating melodic lines with harmonic clarity"
      />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-12">
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
            <div className="text-6xl mb-4">🔔</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Improvising with Arpeggios
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn to outline chord changes with clarity and sophistication, creating melodic lines that highlight the harmonic structure of your solos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Arpeggio Types */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Arpeggio Types</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Basic Triads</h3>
                    <ul className="text-blue-800 space-y-1 text-sm">
                      <li>• Major Triad (1-3-5)</li>
                      <li>• Minor Triad (1-♭3-5)</li>
                      <li>• Diminished Triad (1-♭3-♭5)</li>
                      <li>• Augmented Triad (1-3-#5)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Seventh Chords</h3>
                    <ul className="text-green-800 space-y-1 text-sm">
                      <li>• Major 7th (1-3-5-7)</li>
                      <li>• Minor 7th (1-♭3-5-♭7)</li>
                      <li>• Dominant 7th (1-3-5-♭7)</li>
                      <li>• Half Diminished (1-♭3-♭5-♭7)</li>
                      <li>• Fully Diminished (1-♭3-♭5-♭♭7)</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Extended Chords</h3>
                    <ul className="text-purple-800 space-y-1 text-sm">
                      <li>• 9th Chords (1-3-5-7-9)</li>
                      <li>• 11th Chords (1-3-5-7-9-11)</li>
                      <li>• 13th Chords (1-3-5-7-9-11-13)</li>
                      <li>• Add9 Chords (1-3-5-9)</li>
                      <li>• Sus Chords (1-4-5, 1-2-5)</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-900 mb-3">Altered Arpeggios</h3>
                    <ul className="text-orange-800 space-y-1 text-sm">
                      <li>• 7#11 (1-3-#5-♭7-#11)</li>
                      <li>• 7alt (1-3-♭5-♭7-♭9-#9-#11)</li>
                      <li>• maj7#5 (1-3-#5-7)</li>
                      <li>• m(maj7) (1-♭3-5-7)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Arpeggio Techniques */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Arpeggio Techniques</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Direct Arpeggiation</h3>
                    <p className="text-gray-700 mb-3">
                      Play chord tones in order, ascending or descending.
                    </p>
                    <div className="bg-gray-50 p-4 rounded">
                      <p className="text-sm font-mono">
                        <strong>Cmaj7:</strong> C - E - G - B - C<br/>
                        <strong>Dm7:</strong> D - F - A - C - D<br/>
                        <strong>G7:</strong> G - B - D - F - G
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Arpeggio Inversions</h3>
                    <p className="text-gray-700 mb-3">
                      Start arpeggios from different chord tones for voice leading.
                    </p>
                    <div className="bg-gray-50 p-4 rounded">
                      <p className="text-sm font-mono">
                        <strong>Cmaj7 Root Position:</strong> C - E - G - B<br/>
                        <strong>1st Inversion:</strong> E - G - B - C<br/>
                        <strong>2nd Inversion:</strong> G - B - C - E<br/>
                        <strong>3rd Inversion:</strong> B - C - E - G
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Broken Arpeggios</h3>
                    <p className="text-gray-700 mb-3">
                      Skip chord tones and create intervallic patterns.
                    </p>
                    <div className="bg-gray-50 p-4 rounded">
                      <ul className="text-sm space-y-1">
                        <li><strong>Skip Patterns:</strong> 1-5-3-7 or 3-7-5-9</li>
                        <li><strong>Intervallic:</strong> 1-3, 5-7, 9-11</li>
                        <li><strong>Wide Intervals:</strong> 1-7, 3-9, 5-11</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Arpeggio Combinations</h3>
                    <p className="text-gray-700 mb-3">
                      Connect multiple arpeggios to outline chord progressions.
                    </p>
                    <div className="bg-gray-50 p-4 rounded">
                      <p className="text-sm font-mono">
                        <strong>ii-V-I:</strong><br/>
                        Dm7: D-F-A-C → G7: G-B-D-F → Cmaj7: C-E-G-B<br/>
                        <strong>Smooth voice leading through inversions</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Advanced Arpeggio Concepts */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Arpeggio Concepts</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Superimposition</h3>
                    <p className="text-blue-800 mb-3">
                      Play arpeggios that don't directly match the underlying chord.
                    </p>
                    <div className="bg-white p-3 rounded text-sm">
                      <strong>Over Cmaj7:</strong> Play Em7 arpeggio (creates Cmaj9 sound)<br/>
                      <strong>Over G7:</strong> Play Dm7 arpeggio (creates G13 sound)
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Chromatic Approach</h3>
                    <p className="text-green-800 mb-3">
                      Use half-step movement to approach arpeggio tones.
                    </p>
                    <div className="bg-white p-3 rounded text-sm">
                      Instead of C-E-G-B, play C#-C-F-E-A♭-G-B♭-B
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Rhythmic Displacement</h3>
                    <p className="text-purple-800 mb-3">
                      Start arpeggios on different beats to create rhythmic interest.
                    </p>
                    <div className="bg-white p-3 rounded text-sm">
                      Start on beat 2, beat 3, or off-beats instead of beat 1
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-900 mb-3">Octave Displacement</h3>
                    <p className="text-orange-800 mb-3">
                      Jump between octaves within arpeggio patterns.
                    </p>
                    <div className="bg-white p-3 rounded text-sm">
                      C(low) - E - G(high) - B(low) - C(high)
                    </div>
                  </div>
                </div>
              </section>

              {/* Arpeggio Practice Exercises */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Arpeggio Practice Exercises</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Exercise 1: Basic Arpeggio Shapes</h3>
                    <p className="text-blue-800 mb-3">
                      Master fundamental arpeggio fingerings across the fretboard.
                    </p>
                    <ol className="list-decimal list-inside text-blue-800 space-y-1 text-sm">
                      <li>Practice major 7th arpeggios in 5 positions</li>
                      <li>Add minor 7th and dominant 7th arpeggios</li>
                      <li>Practice ascending and descending patterns</li>
                      <li>Use metronome starting at slow tempo</li>
                      <li>Gradually increase speed while maintaining clarity</li>
                    </ol>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Exercise 2: Chord Progression Arpeggios</h3>
                    <p className="text-green-800 mb-3">
                      Apply arpeggios to common progressions with smooth voice leading.
                    </p>
                    <ol className="list-decimal list-inside text-green-800 space-y-1 text-sm">
                      <li>Practice ii-V-I progressions in all keys</li>
                      <li>Use arpeggio inversions for smooth connections</li>
                      <li>Start with quarter notes, then eighth notes</li>
                      <li>Add rhythm variations and syncopation</li>
                      <li>Record yourself playing the chord changes</li>
                    </ol>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Exercise 3: Arpeggio Substitution</h3>
                    <p className="text-purple-800 mb-3">
                      Experiment with playing "wrong" arpeggios for colorful sounds.
                    </p>
                    <ol className="list-decimal list-inside text-purple-800 space-y-1 text-sm">
                      <li>Play a Cmaj7 backing track</li>
                      <li>Start with C major arpeggio</li>
                      <li>Try Em7 arpeggio (creates Cmaj9)</li>
                      <li>Experiment with Am7 arpeggio (creates C6/9)</li>
                      <li>Compare the different harmonic colors</li>
                    </ol>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-900 mb-3">Exercise 4: Jazz Standard Application</h3>
                    <p className="text-orange-800 mb-3">
                      Apply arpeggio techniques to well-known jazz standards.
                    </p>
                    <ol className="list-decimal list-inside text-orange-800 space-y-1 text-sm">
                      <li>Choose a simple standard (like "Autumn Leaves")</li>
                      <li>Learn the chord changes thoroughly</li>
                      <li>Create arpeggio-based solos over each chord</li>
                      <li>Focus on smooth voice leading between chords</li>
                      <li>Add non-chord tones as passing notes</li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Genre Applications */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Arpeggio Applications by Genre</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Jazz</h3>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>• Extended chord arpeggios (9th, 11th, 13th)</li>
                        <li>• Altered dominant arpeggios</li>
                        <li>• Bebop-style arpeggio lines</li>
                        <li>• Chord substitution arpeggios</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-900 mb-2">Rock/Blues</h3>
                      <ul className="text-green-800 text-sm space-y-1">
                        <li>• Basic triad arpeggios</li>
                        <li>• Dominant 7th arpeggios</li>
                        <li>• Add9 and sus arpeggios</li>
                        <li>• Power chord arpeggiation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">Classical</h3>
                      <ul className="text-purple-800 text-sm space-y-1">
                        <li>• Precise classical arpeggio technique</li>
                        <li>• Arpeggiated accompaniment patterns</li>
                        <li>• Broken chord studies</li>
                        <li>• Bach-style arpeggio sequences</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-orange-900 mb-2">Fusion/Contemporary</h3>
                      <ul className="text-orange-800 text-sm space-y-1">
                        <li>• Complex extended arpeggios</li>
                        <li>• Polychord arpeggiation</li>
                        <li>• Hybrid picking techniques</li>
                        <li>• Wide interval arpeggio patterns</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Famous Arpeggio Players */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Master Arpeggio Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Wes Montgomery</h3>
                      <p className="text-gray-700 text-sm">
                        Master of chord melody and arpeggio-based improvisation. Study "West Coast Blues" and "Four on Six."
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Joe Pass</h3>
                      <p className="text-gray-700 text-sm">
                        Incredible solo guitar work using arpeggios. Listen to his "Virtuoso" series albums.
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Pat Metheny</h3>
                      <p className="text-gray-700 text-sm">
                        Modern approach to arpeggios in fusion context. Check out "Bright Size Life" and "Still Life."
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Yngwie Malmsteen</h3>
                      <p className="text-gray-700 text-sm">
                        Neoclassical master known for lightning-fast arpeggio sweeps. Study his technique and approach.
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Jason Becker</h3>
                      <p className="text-gray-700 text-sm">
                        Innovative arpeggio techniques and musical applications. Listen to "Perpetual Burn."
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Al Di Meola</h3>
                      <p className="text-gray-700 text-sm">
                        Fusion guitarist with exceptional arpeggio technique. Study "Elegant Gypsy" album.
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Arpeggio Quick Reference</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-blue-600">Major 7th:</strong>
                    <p className="text-gray-700">R - 3 - 5 - 7</p>
                  </div>
                  <div>
                    <strong className="text-green-600">Minor 7th:</strong>
                    <p className="text-gray-700">R - ♭3 - 5 - ♭7</p>
                  </div>
                  <div>
                    <strong className="text-purple-600">Dominant 7th:</strong>
                    <p className="text-gray-700">R - 3 - 5 - ♭7</p>
                  </div>
                  <div>
                    <strong className="text-orange-600">Half Diminished:</strong>
                    <p className="text-gray-700">R - ♭3 - ♭5 - ♭7</p>
                  </div>
                </div>
              </div>

              {/* Practice Tips */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Practice Tips</h3>
                <ul className="space-y-3 text-sm text-blue-800">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Start with slow, clean execution
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Learn all positions on the neck
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Practice with backing tracks
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Focus on smooth voice leading
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Use arpeggios musically, not mechanically
                  </li>
                </ul>
              </div>

              {/* Common Mistakes */}
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-4">Common Mistakes</h3>
                <ul className="space-y-3 text-sm text-red-800">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Playing arpeggios too mechanically
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Ignoring rhythm and phrasing
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Poor voice leading between chords
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Only playing in one octave
                  </li>
                </ul>
              </div>

              {/* Daily Practice Routine */}
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Daily Practice Routine</h3>
                <div className="space-y-3 text-sm text-green-800">
                  <div>
                    <strong>10 minutes:</strong> Basic arpeggio shapes
                  </div>
                  <div>
                    <strong>15 minutes:</strong> Chord progression practice
                  </div>
                  <div>
                    <strong>10 minutes:</strong> Arpeggio substitutions
                  </div>
                  <div>
                    <strong>5 minutes:</strong> Free improvisation with arpeggios
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
                  <Link href="/lessons/practice/improv/target-notes" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Target Notes
                  </Link>
                  <Link href="/lessons/theory/harmony/chord-construction" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Chord Construction
                  </Link>
                  <Link href="/lessons/technique/arpeggios" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Arpeggio Technique
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <Link 
              href="/lessons/practice/improv/scales" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="mr-2">←</span>
              Previous: Improvising with Scales
            </Link>
            <Link 
              href="/lessons/practice/improv/rhythm" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              Next: Rhythmic Variation
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
