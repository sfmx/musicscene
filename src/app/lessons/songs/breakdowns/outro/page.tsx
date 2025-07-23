import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function OutroAnalysisPage() {
  return (
    <Layout>
      <Header
        title="Outro Analysis"
        subtitle="Understanding different ending techniques and how they provide harmonic and emotional closure"
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
          <section className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-8 border border-slate-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Outro: Musical Resolution and Closure</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                The outro serves as the final statement of a song, providing both harmonic resolution 
                and emotional closure. How a song ends can dramatically affect the listener's lasting 
                impression and satisfaction. Understanding outro techniques helps both in analysis 
                and creating satisfying musical conclusions.
              </p>
            </div>
          </section>

          {/* Outro Functions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Outros Accomplish</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-slate-600 mb-3">🎯 Harmonic Resolution</h3>
                <p className="text-gray-700 mb-4">
                  Outros provide final harmonic closure, ensuring the song feels 
                  complete and resolved rather than just stopping abruptly.
                </p>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Resolution Techniques:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Return to tonic chord for stability</li>
                    <li>• Final V-I cadential resolution</li>
                    <li>• Pedal tones on the root note</li>
                    <li>• Gradual harmonic simplification</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">🎭 Emotional Closure</h3>
                <p className="text-gray-700 mb-4">
                  Outros provide emotional satisfaction and help listeners process 
                  the musical journey they've just experienced.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Emotional Elements:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Dynamic tapering or dramatic climax</li>
                    <li>• Melodic resolution and repose</li>
                    <li>• Rhythmic deceleration or finality</li>
                    <li>• Textural simplification</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">🔄 Structural Completion</h3>
                <p className="text-gray-700 mb-4">
                  Outros complete the song's formal structure, providing balance 
                  and architectural satisfaction.
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Structural Elements:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Balances the introduction</li>
                    <li>• Completes the formal design</li>
                    <li>• Provides proportional length</li>
                    <li>• Creates satisfying symmetry</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-purple-600 mb-3">💫 Lasting Impression</h3>
                <p className="text-gray-700 mb-4">
                  The outro is often what listeners remember most clearly, 
                  making it crucial for creating a lasting impact.
                </p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Impact Techniques:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Memorable final melodic statement</li>
                    <li>• Dramatic dynamic contrast</li>
                    <li>• Unexpected harmonic turns</li>
                    <li>• Instrumental or vocal features</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Outro Types */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Outro Types</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔚 Full Stop Ending</h3>
                <p className="text-gray-700 mb-4">
                  The entire band stops together on a final chord, creating immediate 
                  and definitive closure.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-600 mb-2">Characteristics and Examples</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Harmonic:</strong> Strong V-I resolution</p>
                      <p><strong>Rhythmic:</strong> All instruments stop together</p>
                      <p><strong>Dynamic:</strong> Often forte (loud) final chord</p>
                    </div>
                    <div>
                      <p><strong>Effect:</strong> Immediate, definitive closure</p>
                      <p><strong>Use Cases:</strong> Rock anthems, dramatic ballads</p>
                      <p><strong>Examples:</strong> Classical endings, power ballads</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🌅 Fade Out</h3>
                <p className="text-gray-700 mb-4">
                  The music continues but gradually decreases in volume until it 
                  becomes inaudible, suggesting the music continues beyond hearing.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-600 mb-2">Fade Out Techniques</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Harmonic:</strong> Often uses repetitive progressions</p>
                      <p><strong>Melodic:</strong> May feature improvisation or variation</p>
                      <p><strong>Length:</strong> Typically 15-30 seconds</p>
                    </div>
                    <div>
                      <p><strong>Effect:</strong> Suggests infinite continuation</p>
                      <p><strong>Use Cases:</strong> Pop songs, groove-based music</p>
                      <p><strong>Psychology:</strong> Leaves listener wanting more</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📉 Ritardando Ending</h3>
                <p className="text-gray-700 mb-4">
                  The tempo gradually slows down, creating a sense of winding down 
                  and natural conclusion.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-600 mb-2">Ritardando Characteristics</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Tempo:</strong> Gradual deceleration</p>
                      <p><strong>Dynamics:</strong> Often diminuendo (getting softer)</p>
                      <p><strong>Harmony:</strong> Simple, resolved progressions</p>
                    </div>
                    <div>
                      <p><strong>Effect:</strong> Natural, organic conclusion</p>
                      <p><strong>Use Cases:</strong> Ballads, classical-influenced pieces</p>
                      <p><strong>Emotion:</strong> Reflective, contemplative</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔄 Circular Ending</h3>
                <p className="text-gray-700 mb-4">
                  Returns to musical material from the introduction, creating a 
                  sense of completion and structural unity.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-600 mb-2">Circular Structure</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Material:</strong> Quotes intro melody or harmony</p>
                      <p><strong>Function:</strong> Creates architectural balance</p>
                      <p><strong>Length:</strong> Can be brief quote or extended section</p>
                    </div>
                    <div>
                      <p><strong>Effect:</strong> Sense of journey completion</p>
                      <p><strong>Sophistication:</strong> Shows compositional unity</p>
                      <p><strong>Examples:</strong> Progressive rock, art songs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Harmonic Techniques */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Harmonic Closure Techniques</h2>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🎼 Cadential Patterns</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Authentic Cadence:</strong> V-I for strong resolution</p>
                    <p><strong>Plagal Cadence:</strong> IV-I for gentler closure</p>
                    <p><strong>Deceptive Cadence:</strong> V-vi for surprise then resolution</p>
                    <p><strong>Extended Cadence:</strong> ii-V-I or IV-V-I chains</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 Pedal Points</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Tonic Pedal:</strong> Root note held while harmony moves</p>
                    <p><strong>Dominant Pedal:</strong> 5th degree creates tension</p>
                    <p><strong>Function:</strong> Establishes tonal center clearly</p>
                    <p><strong>Effect:</strong> Creates stability and grounding</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Emotional Aspects */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Creating Emotional Impact</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💫 Dynamic Shaping</h3>
                <div className="bg-white rounded-lg p-4">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p><strong>Crescendo Ending:</strong></p>
                      <p className="text-gray-600">Builds to dramatic climax</p>
                    </div>
                    <div>
                      <p><strong>Diminuendo Ending:</strong></p>
                      <p className="text-gray-600">Fades to peaceful conclusion</p>
                    </div>
                    <div>
                      <p><strong>Contrasting Ending:</strong></p>
                      <p className="text-gray-600">Sudden dynamic change for impact</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎭 Textural Changes</h3>
                <div className="bg-white rounded-lg p-4">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p><strong>Instrumental Dropout:</strong></p>
                      <p className="text-gray-600">Remove instruments gradually</p>
                    </div>
                    <div>
                      <p><strong>Solo Instrument:</strong></p>
                      <p className="text-gray-600">Feature single voice at end</p>
                    </div>
                    <div>
                      <p><strong>Full Ensemble:</strong></p>
                      <p className="text-gray-600">Everyone plays final statement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Analysis Framework */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Analyze Any Outro</h2>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🔍 Technical Analysis</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li><strong>1.</strong> Identify the outro type and length</li>
                    <li><strong>2.</strong> Analyze the harmonic resolution pattern</li>
                    <li><strong>3.</strong> Note dynamic and textural changes</li>
                    <li><strong>4.</strong> Examine tempo and rhythmic modifications</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 Effect Analysis</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li><strong>1.</strong> Assess the emotional impact</li>
                    <li><strong>2.</strong> Evaluate the sense of closure provided</li>
                    <li><strong>3.</strong> Consider the lasting impression created</li>
                    <li><strong>4.</strong> Analyze how it balances the overall song</li>
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
                Choose songs with different outro types and analyze their effectiveness:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-amber-700 ml-4">
                <li>Find examples of each outro type (fade out, full stop, ritardando, circular)</li>
                <li>Analyze the harmonic resolution in each outro</li>
                <li>Note how dynamics and texture contribute to closure</li>
                <li>Assess which type of outro fits each song's character</li>
                <li>Consider how different outros would change the song's impact</li>
              </ol>
              <p className="text-amber-800 font-medium">
                This exercise will help you understand how different outro approaches 
                create various types of closure and lasting impressions.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Analysis Journey</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Link 
                href="/lessons/songs/breakdowns/full"
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div>
                  <h4 className="font-semibold text-gray-900">Complete Song Analysis</h4>
                  <p className="text-sm text-gray-600">Full song breakdown methods</p>
                </div>
                <span className="text-2xl">🔍</span>
              </Link>
              
              <Link 
                href="/lessons/songs/breakdowns/were-not-gonna-take-it"
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div>
                  <h4 className="font-semibold text-gray-900">Example: Twisted Sister</h4>
                  <p className="text-sm text-gray-600">Complete song breakdown</p>
                </div>
                <span className="text-2xl">🤘</span>
              </Link>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
