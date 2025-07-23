import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BridgeAnalysisPage() {
  return (
    <Layout>
      <Header
        title="Bridge Analysis"
        subtitle="Understanding how bridges provide contrast through key changes, new progressions, and melodic departure"
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
          <section className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 border border-teal-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Bridge: Musical Contrast and Departure</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                The bridge serves as a crucial departure from the familiar verse-chorus structure, 
                providing harmonic, melodic, and lyrical contrast that refreshes the listener's ear 
                and sets up a powerful return to the final chorus. Understanding bridge construction 
                is key to sophisticated songwriting and analysis.
              </p>
            </div>
          </section>

          {/* Bridge Functions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Bridges Accomplish</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-teal-600 mb-3">🔄 Harmonic Contrast</h3>
                <p className="text-gray-700 mb-4">
                  Bridges break away from the established harmonic patterns of verses 
                  and choruses, often exploring new key areas or chord relationships.
                </p>
                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Contrast Techniques:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Modulation to new key centers</li>
                    <li>• Use of modal interchange chords</li>
                    <li>• Secondary dominant progressions</li>
                    <li>• Borrowed chords from parallel modes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">🎵 Melodic Departure</h3>
                <p className="text-gray-700 mb-4">
                  Bridge melodies typically explore different ranges, intervals, and 
                  rhythmic patterns than the verse and chorus sections.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Melodic Techniques:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Different melodic range (higher or lower)</li>
                    <li>• New rhythmic patterns</li>
                    <li>• Contrasting melodic intervals</li>
                    <li>• Alternative phrasing structures</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-purple-600 mb-3">🌉 Structural Relief</h3>
                <p className="text-gray-700 mb-4">
                  Bridges provide relief from the repetitive verse-chorus cycle, 
                  preventing listener fatigue and maintaining interest.
                </p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Relief Elements:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Break from established patterns</li>
                    <li>• New lyrical perspectives</li>
                    <li>• Different instrumental textures</li>
                    <li>• Varied song energy levels</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">🚀 Setup for Return</h3>
                <p className="text-gray-700 mb-4">
                  Bridges create harmonic and emotional tension that makes the return 
                  to the final chorus more impactful and satisfying.
                </p>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Setup Techniques:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Harmonic tension building</li>
                    <li>• Dynamic preparation</li>
                    <li>• Rhythmic anticipation</li>
                    <li>• Melodic leading back to chorus</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Harmonic Techniques */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Bridge Harmonic Techniques</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔑 Key Modulation</h3>
                <p className="text-gray-700 mb-4">
                  Bridges often modulate to related keys to create harmonic freshness 
                  and contrast with the main sections.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-teal-500">
                  <h4 className="font-semibold text-teal-600 mb-2">Example: "Hey Jude" (The Beatles)</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Main Key:</strong> F major</p>
                      <p><strong>Bridge Key:</strong> Bb major (IV of F)</p>
                      <p><strong>Progression:</strong> Bb-F-C-F in new key</p>
                    </div>
                    <div>
                      <p><strong>Effect:</strong> Brightens the harmonic color</p>
                      <p><strong>Return:</strong> Smooth transition back to F</p>
                      <p><strong>Function:</strong> Provides harmonic lift and contrast</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎭 Modal Interchange</h3>
                <p className="text-gray-700 mb-4">
                  Borrowing chords from the parallel minor (or major) mode creates 
                  unexpected harmonic colors while staying in the same key center.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-600 mb-2">Example: "While My Guitar Gently Weeps" (The Beatles)</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Main Key:</strong> A minor</p>
                      <p><strong>Bridge Chords:</strong> F-G-Am-Am/G-F-G-C-A</p>
                      <p><strong>Borrowed Element:</strong> C major from A major</p>
                    </div>
                    <div>
                      <p><strong>Effect:</strong> Brightens the minor tonality</p>
                      <p><strong>Color:</strong> Major III chord adds harmonic interest</p>
                      <p><strong>Resolution:</strong> Returns to A minor naturally</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🌀 Circle Progressions</h3>
                <p className="text-gray-700 mb-4">
                  Bridges often use progressions that move through the circle of fifths, 
                  creating smooth harmonic motion and sophisticated voice leading.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-600 mb-2">Circle of Fifths Movement</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Ascending:</strong> C-G-D-A-E progression</p>
                      <p><strong>Descending:</strong> C-F-Bb-Eb-Ab progression</p>
                      <p><strong>Jazz Influence:</strong> ii-V-I chains</p>
                    </div>
                    <div>
                      <p><strong>Effect:</strong> Smooth harmonic motion</p>
                      <p><strong>Sophistication:</strong> Professional voice leading</p>
                      <p><strong>Resolution:</strong> Natural return to tonic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bridge Types */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Bridge Types</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎸 Instrumental Bridge</h3>
                <p className="text-gray-700 mb-4">
                  Features instrumental solos or featured passages that provide contrast 
                  through different textures and musical focuses.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-600 mb-2">Guitar Solo Bridges</h4>
                  <div className="text-sm text-gray-700">
                    <p><strong>Harmonic Foundation:</strong> Often uses different chord progressions than verse/chorus</p>
                    <p><strong>Melodic Focus:</strong> Lead instrument takes melodic responsibility</p>
                    <p><strong>Energy Shift:</strong> Can increase or decrease intensity</p>
                    <p><strong>Return Setup:</strong> Builds anticipation for final sections</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎤 Vocal Bridge</h3>
                <p className="text-gray-700 mb-4">
                  Features new vocal melody and lyrics that provide lyrical and 
                  melodic contrast to the established verse-chorus material.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-600 mb-2">Lyrical Bridge Functions</h4>
                  <div className="text-sm text-gray-700">
                    <p><strong>New Perspective:</strong> Different viewpoint on the song's theme</p>
                    <p><strong>Emotional Shift:</strong> Change in emotional tone or intensity</p>
                    <p><strong>Story Development:</strong> Advance the narrative or add detail</p>
                    <p><strong>Universal Statement:</strong> Broader, more general observations</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Placement and Structure */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bridge Placement and Structure</h2>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">📍 Typical Placement</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>After Second Chorus:</strong> Most common placement</p>
                    <p><strong>Two-Thirds Point:</strong> About 2/3 through the song</p>
                    <p><strong>Before Final Chorus:</strong> Sets up the climactic return</p>
                    <p><strong>Length:</strong> Usually 8-16 bars</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🏗️ Structural Function</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Verse-Chorus Break:</strong> Interrupts repetitive cycle</p>
                    <p><strong>Energy Management:</strong> Can shift song's energy level</p>
                    <p><strong>Harmonic Journey:</strong> Explores new tonal areas</p>
                    <p><strong>Return Preparation:</strong> Creates anticipation</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Analysis Framework */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Analyze Any Bridge</h2>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🔍 Contrast Analysis</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li><strong>1.</strong> Compare bridge harmony to verse/chorus</li>
                    <li><strong>2.</strong> Note melodic range and contour differences</li>
                    <li><strong>3.</strong> Identify new rhythmic patterns</li>
                    <li><strong>4.</strong> Analyze energy and dynamic changes</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 Function Analysis</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li><strong>1.</strong> Determine the type of contrast provided</li>
                    <li><strong>2.</strong> Analyze how it sets up the return</li>
                    <li><strong>3.</strong> Note the harmonic journey taken</li>
                    <li><strong>4.</strong> Assess the overall structural impact</li>
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
                Choose a song with a clear bridge section and analyze its function:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-amber-700 ml-4">
                <li>Identify exactly where the bridge occurs in the song structure</li>
                <li>Compare the bridge harmony to the verse and chorus progressions</li>
                <li>Note what type of contrast the bridge provides (harmonic, melodic, lyrical)</li>
                <li>Analyze how the bridge sets up the return to the final chorus</li>
                <li>Assess whether the bridge improves the overall song structure</li>
              </ol>
              <p className="text-amber-800 font-medium">
                This exercise will help you understand how bridges function as crucial 
                structural elements that provide contrast and enhance song development.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Analysis Journey</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Link 
                href="/lessons/songs/breakdowns/solo"
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div>
                  <h4 className="font-semibold text-gray-900">Solo Analysis</h4>
                  <p className="text-sm text-gray-600">Break down solo construction and scale choices</p>
                </div>
                <span className="text-2xl">🎤</span>
              </Link>
              
              <Link 
                href="/lessons/songs/breakdowns/outro"
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div>
                  <h4 className="font-semibold text-gray-900">Outro Analysis</h4>
                  <p className="text-sm text-gray-600">Understanding endings and closure</p>
                </div>
                <span className="text-2xl">🚦</span>
              </Link>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
