import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ChorusAnalysisPage() {
  return (
    <Layout>
      <Header
        title="Chorus Analysis"
        subtitle="Understanding how choruses create emotional peaks through harmonic tension and melodic climax"
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
          <section className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-8 border border-rose-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Chorus: Musical and Emotional Climax</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                The chorus is the emotional and musical payoff of a song—the part listeners wait for, 
                sing along with, and remember long after the song ends. Understanding how choruses 
                create this impact through harmony, melody, and rhythm is crucial for both analysis 
                and songwriting.
              </p>
            </div>
          </section>

          {/* Chorus Functions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Choruses Accomplish</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-rose-600 mb-3">🎯 Emotional Release</h3>
                <p className="text-gray-700 mb-4">
                  Choruses provide the emotional payoff that verses build toward, creating 
                  cathartic release through harmonic resolution and melodic climax.
                </p>
                <div className="bg-rose-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Release Techniques:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Higher melodic register than verses</li>
                    <li>• Stronger harmonic progressions</li>
                    <li>• Increased dynamic intensity</li>
                    <li>• More rhythmic drive and energy</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">🎵 Memorable Hook</h3>
                <p className="text-gray-700 mb-4">
                  Choruses contain the most memorable melodic and lyrical content, 
                  designed to stick in the listener's mind.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Hook Elements:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Simple, singable melodies</li>
                    <li>• Repetitive rhythmic patterns</li>
                    <li>• Clear, relatable lyrical themes</li>
                    <li>• Strong tonal center and resolution</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">⚡ Energy Peak</h3>
                <p className="text-gray-700 mb-4">
                  Choruses represent the highest energy point in the song through 
                  increased instrumentation, dynamics, and harmonic complexity.
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Energy Elements:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Fuller instrumental arrangements</li>
                    <li>• Stronger rhythmic emphasis</li>
                    <li>• Higher volume and intensity</li>
                    <li>• More active harmonic rhythm</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-purple-600 mb-3">🔄 Structural Anchor</h3>
                <p className="text-gray-700 mb-4">
                  Choruses provide structural stability through repetition, giving 
                  listeners familiar ground to return to.
                </p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Anchor Techniques:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Same melody and harmony each time</li>
                    <li>• Consistent rhythmic feel</li>
                    <li>• Predictable phrase structure</li>
                    <li>• Strong tonal resolution</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Harmonic Techniques */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Harmonic Techniques for Impact</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎼 Stronger Progressions</h3>
                <p className="text-gray-700 mb-4">
                  Choruses often use more harmonically active progressions than verses, 
                  creating forward momentum and resolution.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-rose-500">
                  <h4 className="font-semibold text-rose-600 mb-2">Example: "Don't Stop Believin'" (Journey)</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Verse:</strong> E-B-C#m-A (I-V-vi-IV)</p>
                      <p><strong>Chorus:</strong> A-E-B-C#m (IV-I-V-vi)</p>
                      <p><strong>Key Difference:</strong> Chorus starts on IV for lift</p>
                    </div>
                    <div>
                      <p><strong>Effect:</strong> Starting on IV creates immediate uplift</p>
                      <p><strong>Resolution:</strong> Strong V-vi-IV-I feel in chorus</p>
                      <p><strong>Impact:</strong> More dynamic harmonic motion</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔑 Key Changes</h3>
                <p className="text-gray-700 mb-4">
                  Some choruses use temporary or permanent key changes to create 
                  additional lift and emotional impact.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-600 mb-2">Common Key Change Techniques</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Relative Major/Minor:</strong> Shift between C major and A minor</p>
                      <p><strong>Up a Whole Step:</strong> C major to D major</p>
                      <p><strong>Up a Half Step:</strong> C major to Db major</p>
                    </div>
                    <div>
                      <p><strong>Modal Interchange:</strong> Borrow chords from parallel modes</p>
                      <p><strong>Secondary Dominants:</strong> Temporary tonicization</p>
                      <p><strong>Circle Progressions:</strong> Move through related keys</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎭 Harmonic Rhythm</h3>
                <p className="text-gray-700 mb-4">
                  Choruses often feature faster harmonic rhythm (more frequent chord changes) 
                  to create urgency and momentum.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-600 mb-2">Rhythm Comparison</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Verse Pattern:</strong> One chord per measure</p>
                      <p><strong>Effect:</strong> Stable, contemplative feel</p>
                      <p><strong>Function:</strong> Supports narrative development</p>
                    </div>
                    <div>
                      <p><strong>Chorus Pattern:</strong> Two chords per measure</p>
                      <p><strong>Effect:</strong> Increased energy and drive</p>
                      <p><strong>Function:</strong> Creates excitement and momentum</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Melodic Techniques */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Melodic Techniques for Impact</h2>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">📈 Higher Register</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Octave Displacement:</strong> Same notes, higher octave</p>
                    <p><strong>Range Extension:</strong> Higher notes than verse</p>
                    <p><strong>Peak Notes:</strong> Highest point of the song</p>
                    <p><strong>Vocal Strain:</strong> Emotional intensity through effort</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 Melodic Hooks</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Repetition:</strong> Same phrase repeated for memorability</p>
                    <p><strong>Sequence:</strong> Pattern repeated at different pitch levels</p>
                    <p><strong>Call and Response:</strong> Musical conversation patterns</p>
                    <p><strong>Motivic Development:</strong> Small ideas expanded</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chorus Types */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Chorus Types</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔥 Anthemic Chorus</h3>
                <p className="text-gray-700 mb-4">
                  Designed for crowd participation with simple, powerful melodies and 
                  universal lyrical themes.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-600 mb-2">Example: "We Will Rock You" (Queen)</h4>
                  <div className="text-sm text-gray-700">
                    <p><strong>Harmonic Simplicity:</strong> Minimal chord changes for maximum impact</p>
                    <p><strong>Rhythmic Power:</strong> Strong, simple beat everyone can follow</p>
                    <p><strong>Melodic Range:</strong> Limited range for easy singing</p>
                    <p><strong>Universal Theme:</strong> Crowd unity and empowerment</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💫 Soaring Chorus</h3>
                <p className="text-gray-700 mb-4">
                  Features high melodic peaks and dramatic harmonic movement for 
                  emotional release and transcendence.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-600 mb-2">Example: "Total Eclipse of the Heart" (Bonnie Tyler)</h4>
                  <div className="text-sm text-gray-700">
                    <p><strong>Melodic Peak:</strong> Dramatic high notes for emotional climax</p>
                    <p><strong>Harmonic Drama:</strong> Complex progressions with strong resolution</p>
                    <p><strong>Dynamic Build:</strong> Increases in volume and intensity</p>
                    <p><strong>Emotional Release:</strong> Cathartic vocal expression</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Analysis Framework */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Analyze Any Chorus</h2>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🔍 Compare to Verse</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li><strong>1.</strong> Note differences in chord progressions</li>
                    <li><strong>2.</strong> Compare melodic range and contour</li>
                    <li><strong>3.</strong> Analyze changes in harmonic rhythm</li>
                    <li><strong>4.</strong> Identify energy and dynamic differences</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 Impact Analysis</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li><strong>1.</strong> Identify the main melodic hook</li>
                    <li><strong>2.</strong> Analyze harmonic techniques for lift</li>
                    <li><strong>3.</strong> Note repetition and memorability factors</li>
                    <li><strong>4.</strong> Assess emotional and energy impact</li>
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
                Choose a song with a powerful, memorable chorus and analyze its impact:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-amber-700 ml-4">
                <li>Listen to the verse-chorus transition multiple times</li>
                <li>Compare the harmonic progressions of verse vs. chorus</li>
                <li>Note the melodic differences (range, contour, rhythm)</li>
                <li>Identify what makes the chorus memorable and impactful</li>
                <li>Analyze how the chorus creates emotional release</li>
              </ol>
              <p className="text-amber-800 font-medium">
                This exercise will help you understand how choruses function as the emotional 
                and musical climax of songs.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Analysis Journey</h3>
            <div className="grid gap-4 md:grid-cols-2">
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
              
              <Link 
                href="/lessons/songs/breakdowns/solo"
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div>
                  <h4 className="font-semibold text-gray-900">Solo Analysis</h4>
                  <p className="text-sm text-gray-600">Break down solo construction</p>
                </div>
                <span className="text-2xl">🎤</span>
              </Link>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
