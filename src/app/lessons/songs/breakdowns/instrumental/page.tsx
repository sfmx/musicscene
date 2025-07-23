import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function InstrumentalAnalysisPage() {
  return (
    <Layout>
      <Header
        title="Instrumental Section Analysis"
        subtitle="Understanding how instrumental sections develop musical themes without vocal elements"
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
          <section className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 border border-emerald-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Instrumental Sections: Music Speaks for Itself</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                Instrumental sections allow music to communicate without words, relying purely on 
                melody, harmony, rhythm, and texture to convey emotion and develop musical ideas. 
                These sections test a songwriter's ability to create compelling music that holds 
                listener interest through purely musical means.
              </p>
            </div>
          </section>

          {/* Functions of Instrumental Sections */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Instrumental Sections Accomplish</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-emerald-600 mb-3">🎵 Musical Development</h3>
                <p className="text-gray-700 mb-4">
                  Instrumental sections provide space to develop musical themes, 
                  explore harmonic possibilities, and create purely musical narratives.
                </p>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Development Techniques:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Motivic development and variation</li>
                    <li>• Harmonic exploration and modulation</li>
                    <li>• Rhythmic complexity and evolution</li>
                    <li>• Textural layering and interaction</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">🎸 Instrumental Showcase</h3>
                <p className="text-gray-700 mb-4">
                  These sections highlight individual instruments or ensembles, 
                  showcasing technical ability and musical expression.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Showcase Elements:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Solo instrumental features</li>
                    <li>• Technical virtuosity display</li>
                    <li>• Unique tonal colors and effects</li>
                    <li>• Instrumental dialogue and interaction</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-purple-600 mb-3">🌉 Structural Bridge</h3>
                <p className="text-gray-700 mb-4">
                  Instrumental sections often serve as structural bridges, 
                  connecting different parts of the song while providing contrast.
                </p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Bridge Functions:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Connect verse to chorus</li>
                    <li>• Provide relief from vocal sections</li>
                    <li>• Build energy for climactic moments</li>
                    <li>• Create anticipation and tension</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">🎭 Emotional Expression</h3>
                <p className="text-gray-700 mb-4">
                  Without lyrics to convey meaning, instrumental sections rely 
                  on musical elements to communicate emotion and atmosphere.
                </p>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Expression Tools:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Dynamic contrasts and shaping</li>
                    <li>• Melodic contour and phrasing</li>
                    <li>• Harmonic color and tension</li>
                    <li>• Rhythmic feel and groove</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Types of Instrumental Sections */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Instrumental Sections</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎸 Guitar Solo Sections</h3>
                <p className="text-gray-700 mb-4">
                  Featured guitar passages that explore melodic and harmonic possibilities 
                  over the song's chord progression.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-600 mb-2">Guitar Solo Characteristics</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Harmonic Base:</strong> Usually over verse or chorus progression</p>
                      <p><strong>Scale Choices:</strong> Match underlying harmony</p>
                      <p><strong>Development:</strong> Build intensity throughout</p>
                    </div>
                    <div>
                      <p><strong>Expression:</strong> Bending, vibrato, effects</p>
                      <p><strong>Structure:</strong> Clear beginning, middle, end</p>
                      <p><strong>Integration:</strong> Connects to song's overall theme</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎹 Keyboard/Piano Interludes</h3>
                <p className="text-gray-700 mb-4">
                  Piano or keyboard sections that provide harmonic sophistication 
                  and melodic development through different tonal colors.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-600 mb-2">Keyboard Section Functions</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Harmonic Sophistication:</strong> Complex chord voicings</p>
                      <p><strong>Melodic Lines:</strong> Classical and jazz influences</p>
                      <p><strong>Textural Variety:</strong> Different keyboard sounds</p>
                    </div>
                    <div>
                      <p><strong>Dynamic Range:</strong> Soft touches to powerful chords</p>
                      <p><strong>Rhythmic Patterns:</strong> Arpeggios, block chords</p>
                      <p><strong>Genre Flexibility:</strong> Rock, jazz, classical elements</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎺 Horn Section Features</h3>
                <p className="text-gray-700 mb-4">
                  Brass or woodwind sections that add harmonic density and 
                  rhythmic punctuation through ensemble playing.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-yellow-600 mb-2">Horn Section Elements</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Harmonic Support:</strong> Chord voicings and extensions</p>
                      <p><strong>Rhythmic Accents:</strong> Punctuation and emphasis</p>
                      <p><strong>Melodic Lines:</strong> Unison or harmony lines</p>
                    </div>
                    <div>
                      <p><strong>Call and Response:</strong> With other instruments</p>
                      <p><strong>Dynamic Power:</strong> Full ensemble impact</p>
                      <p><strong>Genre Association:</strong> Funk, soul, big band influence</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🥁 Drum/Percussion Features</h3>
                <p className="text-gray-700 mb-4">
                  Rhythm section features that explore rhythmic complexity and 
                  provide dynamic breaks in the song structure.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-600 mb-2">Rhythmic Section Functions</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Rhythmic Complexity:</strong> Polyrhythms, odd meters</p>
                      <p><strong>Dynamic Variation:</strong> Builds and releases</p>
                      <p><strong>Textural Elements:</strong> Different percussion colors</p>
                    </div>
                    <div>
                      <p><strong>Groove Exploration:</strong> Different rhythmic feels</p>
                      <p><strong>Solo Opportunities:</strong> Individual expression</p>
                      <p><strong>Transition Function:</strong> Bridge between sections</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Musical Development Techniques */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Musical Development in Instrumental Sections</h2>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 Motivic Development</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Statement:</strong> Present a clear musical idea</p>
                    <p><strong>Repetition:</strong> Establish familiarity</p>
                    <p><strong>Variation:</strong> Modify rhythm, pitch, or harmony</p>
                    <p><strong>Fragmentation:</strong> Break into smaller pieces</p>
                    <p><strong>Sequence:</strong> Repeat at different pitch levels</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🔄 Harmonic Exploration</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Modulation:</strong> Move to related keys</p>
                    <p><strong>Chord Substitution:</strong> Replace expected chords</p>
                    <p><strong>Modal Interchange:</strong> Borrow from parallel modes</p>
                    <p><strong>Extended Harmony:</strong> Add color tones</p>
                    <p><strong>Chromatic Movement:</strong> Non-diatonic connections</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Structural Considerations */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Placing Instrumental Sections Effectively</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📍 Strategic Placement</h3>
                <div className="bg-white rounded-lg p-4">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p><strong>Between Verses:</strong></p>
                      <p className="text-gray-600">Provides breathing space and variation</p>
                    </div>
                    <div>
                      <p><strong>After Second Chorus:</strong></p>
                      <p className="text-gray-600">Traditional solo placement for development</p>
                    </div>
                    <div>
                      <p><strong>As Introduction:</strong></p>
                      <p className="text-gray-600">Establishes musical themes early</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">⏱️ Length Considerations</h3>
                <div className="bg-white rounded-lg p-4">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p><strong>Short (8-16 bars):</strong></p>
                      <p className="text-gray-600">Quick instrumental breaks or fills</p>
                    </div>
                    <div>
                      <p><strong>Medium (16-32 bars):</strong></p>
                      <p className="text-gray-600">Standard solo length for development</p>
                    </div>
                    <div>
                      <p><strong>Extended (32+ bars):</strong></p>
                      <p className="text-gray-600">Major instrumental features or jams</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Analysis Framework */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Analyze Instrumental Sections</h2>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🔍 Musical Content</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li><strong>1.</strong> Identify the featured instrument(s)</li>
                    <li><strong>2.</strong> Analyze the harmonic foundation</li>
                    <li><strong>3.</strong> Note scale choices and melodic development</li>
                    <li><strong>4.</strong> Examine rhythmic patterns and complexity</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 Structural Function</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li><strong>1.</strong> Determine placement within song structure</li>
                    <li><strong>2.</strong> Assess connection to vocal themes</li>
                    <li><strong>3.</strong> Analyze energy and dynamic role</li>
                    <li><strong>4.</strong> Evaluate overall contribution to the song</li>
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
                Choose a song with a prominent instrumental section and analyze its construction:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-amber-700 ml-4">
                <li>Identify what type of instrumental section it is</li>
                <li>Analyze the underlying harmonic progression</li>
                <li>Note the scale choices and melodic development</li>
                <li>Examine how it relates to the song's vocal themes</li>
                <li>Assess its placement and function within the song structure</li>
                <li>Consider how it contributes to the overall musical narrative</li>
              </ol>
              <p className="text-amber-800 font-medium">
                This exercise will help you understand how instrumental sections function 
                as important musical statements that advance the song without words.
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
                href="/lessons/songs/breakdowns/solo"
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div>
                  <h4 className="font-semibold text-gray-900">Solo Analysis</h4>
                  <p className="text-sm text-gray-600">Detailed solo breakdown techniques</p>
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
