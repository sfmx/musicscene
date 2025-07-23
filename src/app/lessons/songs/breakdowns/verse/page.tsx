import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function VerseAnalysisPage() {
  return (
    <Layout>
      <Header
        title="Verse Analysis"
        subtitle="Understanding how verses develop narratively while maintaining harmonic stability"
      />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          
          {/* Navigation */}
          <section className="bg-blue-50 rounded-lg p-4">
            <Link href="/lessons/songs/breakdowns" className="text-blue-600 hover:text-blue-800 text-sm">
              ← Back to Song Breakdowns
            </Link>
          </section>

          {/* Introduction */}
          <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Verse: Musical Storytelling</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                Verses are the narrative foundation of a song—they tell the story, develop characters, 
                and set up the emotional payoff that comes in the chorus. Musically, verses must balance 
                harmonic stability with melodic interest to keep listeners engaged without overwhelming them.
              </p>
            </div>
          </section>

          {/* Verse Functions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Verses Accomplish</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">📖 Narrative Development</h3>
                <p className="text-gray-700 mb-4">
                  Verses advance the story or emotional content of the song while providing 
                  musical continuity and stability.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Storytelling Elements:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Establish characters and settings</li>
                    <li>• Develop plot or emotional themes</li>
                    <li>• Create anticipation for the chorus</li>
                    <li>• Maintain musical momentum</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">🎼 Harmonic Stability</h3>
                <p className="text-gray-700 mb-4">
                  Verses typically use stable, familiar progressions that don't compete with 
                  the vocal melody for attention.
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Common Progressions:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• I-vi-IV-V (Classic progression)</li>
                    <li>• vi-IV-I-V (Pop progression)</li>
                    <li>• I-V-vi-IV (Alternative arrangement)</li>
                    <li>• ii-V-I (Jazz influence)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-purple-600 mb-3">🎵 Melodic Interest</h3>
                <p className="text-gray-700 mb-4">
                  While harmonically stable, verses need melodic variation to maintain interest 
                  across multiple repetitions.
                </p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Melodic Techniques:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Stepwise motion with occasional leaps</li>
                    <li>• Rhythmic variation between verses</li>
                    <li>• Different melodic phrases for each line</li>
                    <li>• Strategic use of chord tones vs. passing tones</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">⚖️ Dynamic Balance</h3>
                <p className="text-gray-700 mb-4">
                  Verses maintain moderate energy levels to set up the emotional release 
                  of the chorus.
                </p>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Energy Management:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Moderate dynamics and intensity</li>
                    <li>• Steady rhythmic foundation</li>
                    <li>• Leave room for chorus expansion</li>
                    <li>• Build subtle tension toward chorus</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Verse Structures */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Verse Structures</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📏 AABA Structure</h3>
                <p className="text-gray-700 mb-4">
                  Four-line verse where the first, second, and fourth lines are similar (A), 
                  while the third line provides contrast (B).
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-600 mb-2">Example: "Yesterday" (The Beatles)</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Key:</strong> F major</p>
                      <p><strong>A sections:</strong> F-Em-A-Dm (I-vii°-III-vi)</p>
                      <p><strong>B section:</strong> Bb-C-F (IV-V-I)</p>
                    </div>
                    <div>
                      <p><strong>Melodic Pattern:</strong> Similar phrases for A sections</p>
                      <p><strong>Contrast:</strong> B section provides harmonic relief</p>
                      <p><strong>Function:</strong> Creates familiarity with variation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔄 Repetitive Progression</h3>
                <p className="text-gray-700 mb-4">
                  Uses the same chord progression throughout the verse, relying on melodic 
                  and rhythmic variation for interest.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-600 mb-2">Example: "Let It Be" (The Beatles)</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Key:</strong> C major</p>
                      <p><strong>Progression:</strong> C-G-Am-F (I-V-vi-IV)</p>
                      <p><strong>Repetition:</strong> Same chords each line</p>
                    </div>
                    <div>
                      <p><strong>Variation:</strong> Melody changes over same harmony</p>
                      <p><strong>Strength:</strong> Harmonic familiarity allows focus on lyrics</p>
                      <p><strong>Effect:</strong> Creates hypnotic, meditative quality</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎭 Through-Composed</h3>
                <p className="text-gray-700 mb-4">
                  Each line of the verse uses different harmony, creating constant forward motion 
                  and harmonic development.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-600 mb-2">Example: "Something" (The Beatles)</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Key:</strong> C major</p>
                      <p><strong>Line 1:</strong> C-Cmaj7-C7</p>
                      <p><strong>Line 2:</strong> F-D7-G</p>
                    </div>
                    <div>
                      <p><strong>Harmonic Motion:</strong> Constant chord changes</p>
                      <p><strong>Sophistication:</strong> Jazz-influenced harmony</p>
                      <p><strong>Effect:</strong> Creates sophisticated, flowing movement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Melodic Analysis */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Verse Melody Construction</h2>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🎼 Melodic Contour</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Arch Shape:</strong> Start mid-range, rise to peak, descend to resolution</p>
                    <p><strong>Wave Pattern:</strong> Gentle rises and falls throughout the verse</p>
                    <p><strong>Descending Line:</strong> Gradual descent creates sense of settling</p>
                    <p><strong>Ascending Build:</strong> Gradual rise creates tension toward chorus</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 Rhythmic Patterns</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Consistent Rhythm:</strong> Same pattern each line for stability</p>
                    <p><strong>Varied Rhythm:</strong> Different patterns for each phrase</p>
                    <p><strong>Syncopation:</strong> Off-beat emphasis for rhythmic interest</p>
                    <p><strong>Space Usage:</strong> Strategic rests for phrasing clarity</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Analysis Framework */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Analyze Any Verse</h2>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🔍 Harmonic Analysis</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li><strong>1.</strong> Map the chord progression using Roman numerals</li>
                    <li><strong>2.</strong> Identify the harmonic rhythm (how often chords change)</li>
                    <li><strong>3.</strong> Note any secondary dominants or substitutions</li>
                    <li><strong>4.</strong> Analyze how harmony supports the melody</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 Melodic Analysis</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li><strong>1.</strong> Map the melodic contour (shape)</li>
                    <li><strong>2.</strong> Identify scale choices and melodic intervals</li>
                    <li><strong>3.</strong> Note chord tone vs. non-chord tone usage</li>
                    <li><strong>4.</strong> Analyze rhythmic patterns and phrasing</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Practice Exercise */}
          <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-amber-900 mb-4">📚 Practice Exercise</h2>
            <div className="space-y-4">
              <p className="text-amber-800">
                Choose a song with clear verse-chorus structure and analyze the verse using this framework:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-amber-700 ml-4">
                <li>Play or listen to just the verse section repeatedly</li>
                <li>Identify the chord progression and harmonic rhythm</li>
                <li>Map the melodic contour and note important intervals</li>
                <li>Compare different verses - do they use the same or different melodies?</li>
                <li>Analyze how the verse sets up the chorus harmonically and melodically</li>
              </ol>
              <p className="text-amber-800 font-medium">
                This exercise will help you understand how verses function as the narrative 
                and harmonic foundation of songs.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Analysis Journey</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Link 
                href="/lessons/songs/breakdowns/chorus"
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div>
                  <h4 className="font-semibold text-gray-900">Chorus Analysis</h4>
                  <p className="text-sm text-gray-600">Explore emotional peaks and harmonic climax</p>
                </div>
                <span className="text-2xl">🎶</span>
              </Link>
              
              <Link 
                href="/lessons/songs/breakdowns/bridge"
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div>
                  <h4 className="font-semibold text-gray-900">Bridge Analysis</h4>
                  <p className="text-sm text-gray-600">Learn about contrast and departure</p>
                </div>
                <span className="text-2xl">🌉</span>
              </Link>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
