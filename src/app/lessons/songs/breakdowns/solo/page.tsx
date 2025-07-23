import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SoloAnalysisPage() {
  return (
    <Layout>
      <Header
        title="Solo Analysis"
        subtitle="Breaking down solo construction, scale choices, and how leads interact with underlying progressions"
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
          <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Guitar Solos: Where Theory Meets Expression</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                Guitar solos represent the perfect marriage of technical skill, music theory knowledge, 
                and personal expression. By analyzing great solos, we can understand how theory informs 
                melodic choices, how scales relate to chord progressions, and how musical ideas develop 
                over time to create compelling instrumental narratives.
              </p>
            </div>
          </section>

          {/* Solo Functions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Solos Accomplish</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">🎭 Musical Expression</h3>
                <p className="text-gray-700 mb-4">
                  Solos provide a platform for individual musical expression within the 
                  context of the song's harmonic and structural framework.
                </p>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Expression Elements:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Personal melodic interpretation</li>
                    <li>• Emotional intensity and dynamics</li>
                    <li>• Unique phrasing and timing</li>
                    <li>• Technical virtuosity display</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">🎼 Harmonic Exploration</h3>
                <p className="text-gray-700 mb-4">
                  Solos explore the harmonic possibilities within the song's chord 
                  progression, revealing new melodic potential.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Harmonic Techniques:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Chord tone targeting</li>
                    <li>• Scale choice over progressions</li>
                    <li>• Tension and resolution patterns</li>
                    <li>• Modal interchange exploration</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-purple-600 mb-3">🏗️ Structural Development</h3>
                <p className="text-gray-700 mb-4">
                  Great solos have their own internal structure, developing musical 
                  ideas through repetition, variation, and climax.
                </p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Development Techniques:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Motivic development and variation</li>
                    <li>• Call and response patterns</li>
                    <li>• Dynamic and register progression</li>
                    <li>• Rhythmic complexity evolution</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">🔄 Song Integration</h3>
                <p className="text-gray-700 mb-4">
                  Effective solos connect to the song's themes, complementing rather 
                  than competing with the vocal melody and overall arrangement.
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Integration Elements:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Thematic references to vocal melody</li>
                    <li>• Appropriate energy and mood</li>
                    <li>• Stylistic consistency</li>
                    <li>• Harmonic support of song structure</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Scale-Chord Relationships */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Scale Choices Over Chord Progressions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎼 Diatonic Approach</h3>
                <p className="text-gray-700 mb-4">
                  Using scales that belong to the song's key center, following the 
                  natural harmonic relationships.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-600 mb-2">Example: "Hotel California" Solo</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Key:</strong> B minor</p>
                      <p><strong>Progression:</strong> Bm-F#-A-E-G-D-Em-F#</p>
                      <p><strong>Scale Choice:</strong> B natural minor throughout</p>
                    </div>
                    <div>
                      <p><strong>Approach:</strong> Single scale over entire progression</p>
                      <p><strong>Strength:</strong> Cohesive, melodic sound</p>
                      <p><strong>Character:</strong> Smooth, flowing melodic lines</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎯 Chord-by-Chord Approach</h3>
                <p className="text-gray-700 mb-4">
                  Changing scales or modes to match each chord, creating more 
                  sophisticated harmonic colors and tensions.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-600 mb-2">Jazz-Influenced Approach</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Cmaj7:</strong> C Ionian (major scale)</p>
                      <p><strong>Am7:</strong> A Dorian mode</p>
                      <p><strong>Dm7:</strong> D Dorian mode</p>
                      <p><strong>G7:</strong> G Mixolydian mode</p>
                    </div>
                    <div>
                      <p><strong>Approach:</strong> Mode per chord</p>
                      <p><strong>Strength:</strong> Rich harmonic colors</p>
                      <p><strong>Character:</strong> Sophisticated, jazz-influenced sound</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎸 Pentatonic Foundation</h3>
                <p className="text-gray-700 mb-4">
                  Using pentatonic scales as a foundation, adding chromatic passing tones 
                  and blue notes for expression and character.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-600 mb-2">Blues-Rock Approach</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Foundation:</strong> Minor pentatonic scale</p>
                      <p><strong>Additions:</strong> Blue notes (b5, b3)</p>
                      <p><strong>Passing Tones:</strong> Chromatic connections</p>
                    </div>
                    <div>
                      <p><strong>Approach:</strong> Pentatonic + expression</p>
                      <p><strong>Strength:</strong> Emotional, bluesy character</p>
                      <p><strong>Character:</strong> Rock and blues authenticity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Solo Structure */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Solo Construction and Development</h2>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">📈 Building Intensity</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Register:</strong> Start low/mid, build to higher notes</p>
                    <p><strong>Rhythm:</strong> Begin simple, add complexity</p>
                    <p><strong>Dynamics:</strong> Gradual volume and intensity increase</p>
                    <p><strong>Density:</strong> Sparse to dense note patterns</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 Motivic Development</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Statement:</strong> Introduce a simple musical idea</p>
                    <p><strong>Repetition:</strong> Repeat for familiarity</p>
                    <p><strong>Variation:</strong> Modify rhythm, pitch, or harmony</p>
                    <p><strong>Development:</strong> Extend and elaborate the idea</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Famous Solo Analysis */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Case Study: Analyzing Great Solos</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎸 "Stairway to Heaven" Solo Analysis</h3>
                <div className="bg-white rounded-lg p-4 border-l-4 border-gold-500">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Key:</strong> A minor</p>
                      <p><strong>Scale Choice:</strong> A minor pentatonic + natural minor</p>
                      <p><strong>Structure:</strong> 3 distinct sections with building intensity</p>
                      <p><strong>Techniques:</strong> Bending, vibrato, legato phrasing</p>
                    </div>
                    <div>
                      <p><strong>Section 1:</strong> Melodic, song-like phrases</p>
                      <p><strong>Section 2:</strong> Increased rhythmic activity</p>
                      <p><strong>Section 3:</strong> Climactic high register passages</p>
                      <p><strong>Resolution:</strong> Returns to song's main theme</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎺 "Comfortably Numb" Solo Analysis</h3>
                <div className="bg-white rounded-lg p-4 border-l-4 border-pink-500">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Key:</strong> B minor</p>
                      <p><strong>Scale Choice:</strong> B minor pentatonic primarily</p>
                      <p><strong>Approach:</strong> Melodic storytelling over virtuosity</p>
                      <p><strong>Techniques:</strong> Sustain, bending, space usage</p>
                    </div>
                    <div>
                      <p><strong>Character:</strong> Emotional expression over speed</p>
                      <p><strong>Phrasing:</strong> Vocal-like melodic lines</p>
                      <p><strong>Development:</strong> Simple motifs expanded gradually</p>
                      <p><strong>Impact:</strong> Every note serves the emotional content</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Analysis Framework */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Analyze Any Solo</h2>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🔍 Harmonic Analysis</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li><strong>1.</strong> Identify the underlying chord progression</li>
                    <li><strong>2.</strong> Determine the key center and any modulations</li>
                    <li><strong>3.</strong> Analyze scale choices over each chord</li>
                    <li><strong>4.</strong> Note chord tone vs. non-chord tone usage</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 Structural Analysis</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li><strong>1.</strong> Map the solo's internal structure</li>
                    <li><strong>2.</strong> Identify main musical motifs</li>
                    <li><strong>3.</strong> Trace the development of ideas</li>
                    <li><strong>4.</strong> Analyze the climax and resolution</li>
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
                Choose a guitar solo from a song you love and analyze its construction:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-amber-700 ml-4">
                <li>Learn the underlying chord progression by ear or research</li>
                <li>Identify the primary scale(s) used in the solo</li>
                <li>Map out the solo's structure - where are the main sections?</li>
                <li>Note how the soloist builds intensity throughout</li>
                <li>Identify the main musical motifs and how they develop</li>
                <li>Analyze what makes this solo memorable and effective</li>
              </ol>
              <p className="text-amber-800 font-medium">
                This exercise will help you understand how great solos combine technical 
                skill with musical knowledge to create compelling instrumental narratives.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Analysis Journey</h3>
            <div className="grid gap-4 md:grid-cols-2">
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
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
