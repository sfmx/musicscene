import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RhythmicVariationPage() {
  return (
    <Layout>
      <Header 
        title="Rhythmic Variation" 
        subtitle="Master the art of creating rhythmic interest and groove in your improvisations"
      />
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 py-12">
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
            <div className="text-6xl mb-4">🥁</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Rhythmic Variation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn to create compelling rhythmic interest in your solos through varied note durations, syncopation, and groove-based phrasing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Rhythm Fundamentals */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Rhythmic Elements in Improvisation</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Rhythmic variation is what separates good soloists from great ones. While scales and harmony provide the notes, rhythm creates the groove, feel, and emotional impact of your improvisation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">Note Values</h3>
                      <ul className="text-blue-800 space-y-1 text-sm">
                        <li>• Whole notes (sustained)</li>
                        <li>• Half notes (breathing space)</li>
                        <li>• Quarter notes (steady pulse)</li>
                        <li>• Eighth notes (flowing motion)</li>
                        <li>• Sixteenth notes (intensity)</li>
                        <li>• Triplets (swing feel)</li>
                        <li>• Dotted rhythms (off-beat emphasis)</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-green-900 mb-3">Rhythmic Techniques</h3>
                      <ul className="text-green-800 space-y-1 text-sm">
                        <li>• Syncopation (off-beat emphasis)</li>
                        <li>• Polyrhythm (multiple rhythms)</li>
                        <li>• Hemiola (3 against 2)</li>
                        <li>• Metric modulation</li>
                        <li>• Cross-rhythms</li>
                        <li>• Displaced accents</li>
                        <li>• Rhythmic displacement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Rhythmic Patterns */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Rhythmic Patterns</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Basic Subdivision Patterns</h3>
                    <p className="text-gray-700 mb-3">
                      Master different note values and their combinations.
                    </p>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-sm font-mono space-y-2">
                        <p><strong>Quarter Note Pattern:</strong> 1 - 2 - 3 - 4</p>
                        <p><strong>Eighth Note Pattern:</strong> 1 & 2 & 3 & 4 &</p>
                        <p><strong>Sixteenth Pattern:</strong> 1 e & a 2 e & a 3 e & a 4 e & a</p>
                        <p><strong>Triplet Pattern:</strong> 1 trip let 2 trip let 3 trip let 4 trip let</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Syncopation Patterns</h3>
                    <p className="text-gray-700 mb-3">
                      Create rhythmic interest by emphasizing weak beats.
                    </p>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-sm font-mono space-y-2">
                        <p><strong>Simple Syncopation:</strong> 1 & (2) & 3 & (4) &</p>
                        <p><strong>Latin Clave:</strong> (1) & (2) 3 (4) & (1) 2 & (3) 4</p>
                        <p><strong>Jazz Anticipation:</strong> 1 2 3 & (4) 1</p>
                        <p><strong>Funk Pattern:</strong> (1) & a (2) & (3) e & (4)</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Polyrhythmic Patterns</h3>
                    <p className="text-gray-700 mb-3">
                      Layer different rhythmic patterns simultaneously.
                    </p>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-sm font-mono space-y-2">
                        <p><strong>3 against 4:</strong> Three notes in time of four beats</p>
                        <p><strong>2 against 3:</strong> Two notes in time of three beats</p>
                        <p><strong>5 against 4:</strong> Five notes in time of four beats</p>
                        <p><strong>Odd groupings:</strong> 5, 7, 9 note phrases over 4/4</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Displacement Patterns</h3>
                    <p className="text-gray-700 mb-3">
                      Start familiar patterns on different beats for variety.
                    </p>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-sm font-mono space-y-2">
                        <p><strong>Quarter Note Displacement:</strong> Start on &, 2, 2&, 3, etc.</p>
                        <p><strong>Phrase Displacement:</strong> 4-beat phrase starting on beat 2</p>
                        <p><strong>Metric Displacement:</strong> Phrases that cross barlines</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Genre-Specific Rhythms */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Rhythmic Styles by Genre</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Jazz/Swing</h3>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>• Triplet-based swing feel</li>
                        <li>• Bebop eighth note lines</li>
                        <li>• Syncopated phrase endings</li>
                        <li>• 3/4 waltz rhythms</li>
                        <li>• Latin montuno patterns</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-900 mb-2">Rock/Blues</h3>
                      <ul className="text-green-800 text-sm space-y-1">
                        <li>• Straight eighth notes</li>
                        <li>• Power chord rhythms</li>
                        <li>• Shuffle patterns</li>
                        <li>• Sixteenth note rock grooves</li>
                        <li>• Triplet blues licks</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">Latin</h3>
                      <ul className="text-purple-800 text-sm space-y-1">
                        <li>• Clave-based patterns</li>
                        <li>• Bossa nova rhythms</li>
                        <li>• Salsa montuno figures</li>
                        <li>• Samba syncopation</li>
                        <li>• Tango rhythms</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-orange-900 mb-2">Funk/R&B</h3>
                      <ul className="text-orange-800 text-sm space-y-1">
                        <li>• Sixteenth note grooves</li>
                        <li>• Ghost note patterns</li>
                        <li>• One-beat rhythmic cells</li>
                        <li>• Syncopated chord comping</li>
                        <li>• Displaced backbeats</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-red-900 mb-2">Fusion/Contemporary</h3>
                      <ul className="text-red-800 text-sm space-y-1">
                        <li>• Odd time signatures</li>
                        <li>• Polyrhythmic patterns</li>
                        <li>• Metric modulation</li>
                        <li>• Complex subdivisions</li>
                        <li>• Rhythmic displacement</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">World Music</h3>
                      <ul className="text-gray-800 text-sm space-y-1">
                        <li>• African polyrhythms</li>
                        <li>• Indian tala systems</li>
                        <li>• Middle Eastern rhythms</li>
                        <li>• Celtic rhythm patterns</li>
                        <li>• Balkan odd meters</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Rhythmic Exercises */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Rhythmic Variation Exercises</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Exercise 1: Rhythmic Vocabulary Building</h3>
                    <p className="text-blue-800 mb-3">
                      Practice different rhythmic patterns with a single note or scale.
                    </p>
                    <ol className="list-decimal list-inside text-blue-800 space-y-1 text-sm">
                      <li>Choose one note (like C)</li>
                      <li>Play it in quarter notes for 4 measures</li>
                      <li>Switch to eighth notes for 4 measures</li>
                      <li>Try triplets, then sixteenth notes</li>
                      <li>Mix different rhythms within single phrases</li>
                      <li>Use metronome to maintain steady tempo</li>
                    </ol>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Exercise 2: Syncopation Practice</h3>
                    <p className="text-green-800 mb-3">
                      Learn to place accents and notes on unexpected beats.
                    </p>
                    <ol className="list-decimal list-inside text-green-800 space-y-1 text-sm">
                      <li>Play a simple scale in quarter notes</li>
                      <li>Accent the & of beat 2 and & of beat 4</li>
                      <li>Try accenting only the & beats</li>
                      <li>Practice anticipating beat 1 (play on & of 4)</li>
                      <li>Create your own syncopated patterns</li>
                      <li>Apply to scales and chord progressions</li>
                    </ol>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Exercise 3: Polyrhythm Development</h3>
                    <p className="text-purple-800 mb-3">
                      Practice playing in different rhythmic subdivisions simultaneously.
                    </p>
                    <ol className="list-decimal list-inside text-purple-800 space-y-1 text-sm">
                      <li>Tap quarter notes with your foot</li>
                      <li>Play triplets with your hands</li>
                      <li>Try 3 against 4 (triplets vs. quarters)</li>
                      <li>Practice 2 against 3 patterns</li>
                      <li>Use different notes for each rhythm layer</li>
                      <li>Record yourself to check accuracy</li>
                    </ol>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-900 mb-3">Exercise 4: Phrase Displacement</h3>
                    <p className="text-orange-800 mb-3">
                      Take familiar phrases and start them on different beats.
                    </p>
                    <ol className="list-decimal list-inside text-orange-800 space-y-1 text-sm">
                      <li>Learn a simple 4-note melody</li>
                      <li>Play it starting on beat 1</li>
                      <li>Play the same melody starting on beat 2</li>
                      <li>Try starting on the & of beat 1, then beat 3</li>
                      <li>Notice how the phrase feels different</li>
                      <li>Apply to longer melodies and licks</li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Advanced Concepts */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Rhythmic Concepts</h2>
                <div className="space-y-6">
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-indigo-900 mb-3">Metric Modulation</h3>
                    <p className="text-indigo-800 mb-3">
                      Change the perceived tempo while keeping the same beat.
                    </p>
                    <div className="bg-white p-3 rounded text-sm">
                      Example: In 4/4, group notes in threes to create a 3/4 feel, then return to 4/4
                    </div>
                  </div>

                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-teal-900 mb-3">Rhythmic Superimposition</h3>
                    <p className="text-teal-800 mb-3">
                      Layer rhythmic patterns from different genres or time signatures.
                    </p>
                    <div className="bg-white p-3 rounded text-sm">
                      Example: Play a 7/8 melody over a 4/4 backing track
                    </div>
                  </div>

                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-pink-900 mb-3">Rhythmic Motifs</h3>
                    <p className="text-pink-800 mb-3">
                      Develop short rhythmic ideas and repeat them with variations.
                    </p>
                    <div className="bg-white p-3 rounded text-sm">
                      Example: Take a 2-beat rhythm and repeat it with different pitches
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-3">Cross-Rhythms</h3>
                    <p className="text-yellow-800 mb-3">
                      Create rhythmic patterns that conflict with the underlying meter.
                    </p>
                    <div className="bg-white p-3 rounded text-sm">
                      Example: Play in groups of 5 eighth notes over 4/4 time
                    </div>
                  </div>
                </div>
              </section>

              {/* Famous Rhythmic Players */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Masters of Rhythmic Variation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Thelonious Monk</h3>
                      <p className="text-gray-700 text-sm">
                        Master of rhythmic displacement and angular phrasing. Study "Straight, No Chaser" and "Round Midnight."
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">John McLaughlin</h3>
                      <p className="text-gray-700 text-sm">
                        Fusion pioneer using complex rhythmic patterns. Listen to Mahavishnu Orchestra recordings.
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Allan Holdsworth</h3>
                      <p className="text-gray-700 text-sm">
                        Master of odd time signatures and rhythmic sophistication in fusion context.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Nile Rodgers</h3>
                      <p className="text-gray-700 text-sm">
                        Funk master known for precise rhythmic guitar playing. Study Chic recordings.
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Steve Vai</h3>
                      <p className="text-gray-700 text-sm">
                        Rock virtuoso using complex rhythmic patterns and odd meters creatively.
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Dave Brubeck</h3>
                      <p className="text-gray-700 text-sm">
                        Jazz pioneer famous for "Take Five" and other odd time signature compositions.
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Time Signatures</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-blue-600">4/4:</strong>
                    <p className="text-gray-700">1 2 3 4 (most common)</p>
                  </div>
                  <div>
                    <strong className="text-green-600">3/4:</strong>
                    <p className="text-gray-700">1 2 3 (waltz time)</p>
                  </div>
                  <div>
                    <strong className="text-purple-600">7/8:</strong>
                    <p className="text-gray-700">1 2 1 2 1 2 3 (odd meter)</p>
                  </div>
                  <div>
                    <strong className="text-orange-600">5/4:</strong>
                    <p className="text-gray-700">1 2 3 4 5 (Take Five)</p>
                  </div>
                </div>
              </div>

              {/* Practice Tips */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Practice Tips</h3>
                <ul className="space-y-3 text-sm text-blue-800">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Always use a metronome
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Start slowly and build speed
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Count out loud while playing
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Record yourself to check timing
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Practice with different genres
                  </li>
                </ul>
              </div>

              {/* Common Mistakes */}
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-4">Common Mistakes</h3>
                <ul className="space-y-3 text-sm text-red-800">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Rushing fast passages
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Ignoring the underlying beat
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Overcomplicating simple ideas
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Not listening to the rhythm section
                  </li>
                </ul>
              </div>

              {/* Daily Practice Routine */}
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Daily Practice Routine</h3>
                <div className="space-y-3 text-sm text-green-800">
                  <div>
                    <strong>5 minutes:</strong> Basic subdivision practice
                  </div>
                  <div>
                    <strong>10 minutes:</strong> Syncopation exercises
                  </div>
                  <div>
                    <strong>10 minutes:</strong> Genre-specific rhythms
                  </div>
                  <div>
                    <strong>15 minutes:</strong> Apply to improvisation
                  </div>
                </div>
              </div>

              {/* Related Topics */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Topics</h3>
                <div className="space-y-2">
                  <Link href="/lessons/practice/improv/phrasing" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Phrasing
                  </Link>
                  <Link href="/lessons/rhythm/time-signatures" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Time Signatures
                  </Link>
                  <Link href="/lessons/rhythm/groove" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Groove and Feel
                  </Link>
                  <Link href="/lessons/practice/metronome" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Metronome Practice
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <Link 
              href="/lessons/practice/improv/arpeggios" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="mr-2">←</span>
              Previous: Improvising with Arpeggios
            </Link>
            <Link 
              href="/lessons/practice/improv" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              Back to Improvisation Overview
              <span className="ml-2">↑</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
