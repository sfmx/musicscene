import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function IntroAnalysisPage() {
  return (
    <Layout>
      <Header
        title="Intro Analysis"
        subtitle="Understanding how song introductions establish key centers, mood, and musical themes"
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
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Role of Song Intros</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                A song's introduction is like the opening line of a great novel—it sets the stage for everything 
                that follows. Musically, intros serve several critical functions that we can analyze and understand 
                through music theory.
              </p>
            </div>
          </section>

          {/* Functions of Intros */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Intros Accomplish</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">🎯 Establish Key Center</h3>
                <p className="text-gray-700 mb-4">
                  The intro tells your ear what key the song is in, creating a harmonic reference point 
                  that all other sections will relate to.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Common Techniques:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Start and end on the tonic chord</li>
                    <li>• Use a strong I-V-I progression</li>
                    <li>• Feature the root note prominently in bass</li>
                    <li>• Play a melody that outlines the tonic chord</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">🎭 Set the Mood</h3>
                <p className="text-gray-700 mb-4">
                  Intros establish the emotional tone through tempo, dynamics, harmonic color, 
                  and instrumental texture.
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Mood Elements:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Tempo (fast = energetic, slow = contemplative)</li>
                    <li>• Mode (major = bright, minor = dark)</li>
                    <li>• Dynamics (loud = aggressive, soft = intimate)</li>
                    <li>• Texture (dense = complex, sparse = simple)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-purple-600 mb-3">🎵 Introduce Themes</h3>
                <p className="text-gray-700 mb-4">
                  Many intros preview melodic or rhythmic motifs that will appear throughout 
                  the song, creating musical coherence.
                </p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Thematic Preview:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Hint at the main melody</li>
                    <li>• Establish rhythmic patterns</li>
                    <li>• Introduce instrumental textures</li>
                    <li>• Preview harmonic progressions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">⚡ Create Energy</h3>
                <p className="text-gray-700 mb-4">
                  Intros build anticipation and energy that leads naturally into the first verse, 
                  creating forward momentum.
                </p>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Energy Building:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Gradual dynamic increases</li>
                    <li>• Rhythmic acceleration</li>
                    <li>• Instrumental layering</li>
                    <li>• Harmonic tension and release</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Types of Intros */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Intro Types</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎸 Instrumental Hook</h3>
                <p className="text-gray-700 mb-4">
                  Features a memorable riff or melody that becomes the song's signature. Often uses the 
                  main chord progression or a variation of it.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-600 mb-2">Example: "Sweet Child O' Mine" (Guns N' Roses)</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Key:</strong> D major</p>
                      <p><strong>Progression:</strong> D-C-G (I-♭VII-IV)</p>
                      <p><strong>Function:</strong> Establishes D as tonic through repeated resolution</p>
                    </div>
                    <div>
                      <p><strong>Melody:</strong> Outlines D major triad</p>
                      <p><strong>Rhythm:</strong> Steady sixteenth notes create momentum</p>
                      <p><strong>Effect:</strong> Iconic riff becomes song's identity</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎹 Atmospheric Build</h3>
                <p className="text-gray-700 mb-4">
                  Starts quietly and gradually builds layers, dynamics, and complexity to create 
                  anticipation for the verse entrance.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-600 mb-2">Example: "Where the Streets Have No Name" (U2)</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Key:</strong> D major</p>
                      <p><strong>Structure:</strong> Layered instrumental build</p>
                      <p><strong>Harmony:</strong> D-A-Bm-G progression</p>
                    </div>
                    <div>
                      <p><strong>Texture:</strong> Starts with organ, adds drums, bass, guitar</p>
                      <p><strong>Dynamics:</strong> Gradual crescendo over 1+ minutes</p>
                      <p><strong>Effect:</strong> Creates massive anticipation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎤 Vocal Preview</h3>
                <p className="text-gray-700 mb-4">
                  Features a snippet of vocal melody, often the chorus hook, before launching 
                  into the verse structure.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-600 mb-2">Example: "Livin' on a Prayer" (Bon Jovi)</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Key:</strong> E minor</p>
                      <p><strong>Preview:</strong> "Woah, we're halfway there" hook</p>
                      <p><strong>Harmony:</strong> Em-C-D progression</p>
                    </div>
                    <div>
                      <p><strong>Strategy:</strong> Gives away the best part first</p>
                      <p><strong>Psychology:</strong> Creates immediate familiarity</p>
                      <p><strong>Effect:</strong> Hooks listener immediately</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Analysis Framework */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Analyze Any Intro</h2>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🔍 Harmonic Analysis</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li><strong>1.</strong> Identify the key center</li>
                    <li><strong>2.</strong> Map the chord progression using Roman numerals</li>
                    <li><strong>3.</strong> Note any non-diatonic chords or modulations</li>
                    <li><strong>4.</strong> Analyze how harmony establishes tonality</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 Melodic & Rhythmic Analysis</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li><strong>1.</strong> Identify the main melodic motifs</li>
                    <li><strong>2.</strong> Analyze scale choices and melodic intervals</li>
                    <li><strong>3.</strong> Examine rhythmic patterns and time signature</li>
                    <li><strong>4.</strong> Note how melody relates to underlying harmony</li>
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
                Choose three songs from different genres and analyze their intros using the framework above:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-amber-700 ml-4">
                <li>Listen to the intro 5-10 times to internalize the sound</li>
                <li>Identify the key and chord progression</li>
                <li>Note what mood and energy the intro creates</li>
                <li>Determine what themes are introduced</li>
                <li>Compare how different genres approach intro construction</li>
              </ol>
              <p className="text-amber-800 font-medium">
                This exercise will train your ear to hear intros as sophisticated musical constructions 
                rather than just "the part before the song starts."
              </p>
            </div>
          </section>

          {/* Navigation */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Analysis Journey</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Link 
                href="/lessons/songs/breakdowns/verse"
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div>
                  <h4 className="font-semibold text-gray-900">Verse Analysis</h4>
                  <p className="text-sm text-gray-600">Learn how verses develop narratively</p>
                </div>
                <span className="text-2xl">📝</span>
              </Link>
              
              <Link 
                href="/lessons/songs/breakdowns/chorus"
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div>
                  <h4 className="font-semibold text-gray-900">Chorus Analysis</h4>
                  <p className="text-sm text-gray-600">Explore emotional peaks and climax</p>
                </div>
                <span className="text-2xl">🎶</span>
              </Link>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
