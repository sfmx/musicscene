'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function SuspendedChordsPage() {
  return (
    <Layout>
      <Header
        title="Suspended Chord Theory"
        subtitle="Create tension, movement, and unique harmonic colors with suspended chords"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Suspended Chords</h1>
          <p className="text-xl opacity-90 mb-4">
            Suspended chords replace the third with either the second or fourth, creating ambiguous harmony that's neither major nor minor.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Neither Major nor Minor</span>
            <span className="bg-white/20 px-3 py-1 rounded">Creates Tension</span>
            <span className="bg-white/20 px-3 py-1 rounded">Wants Resolution</span>
            <span className="bg-white/20 px-3 py-1 rounded">Rock & Folk</span>
          </div>
        </div>

        {/* Theory Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Suspended Chord Theory</h2>
          
          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">What Makes a Chord Suspended?</h3>
            <p className="mb-2">Suspended chords replace the third (which determines major/minor) with either the 2nd or 4th degree of the scale.</p>
            <p className="text-sm text-gray-600">This creates harmonic ambiguity and tension that typically resolves to a major or minor chord.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-cyan-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Sus2 Chords</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Root (1st):</span>
                  <span>C</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Second (2nd):</span>
                  <span className="text-teal-600 font-bold">D</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Perfect Fifth (5th):</span>
                  <span>G</span>
                </div>
              </div>
              <div className="bg-white rounded p-3 mt-4">
                <p className="text-sm"><strong>Formula:</strong> 1 - 2 - 5</p>
                <p className="text-sm"><strong>Example:</strong> Csus2 = C-D-G</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Sus4 Chords</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Root (1st):</span>
                  <span>C</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Fourth (4th):</span>
                  <span className="text-blue-600 font-bold">F</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Perfect Fifth (5th):</span>
                  <span>G</span>
                </div>
              </div>
              <div className="bg-white rounded p-3 mt-4">
                <p className="text-sm"><strong>Formula:</strong> 1 - 4 - 5</p>
                <p className="text-sm"><strong>Example:</strong> Csus4 = C-F-G</p>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Suspended Chord Shapes */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Essential Suspended Chord Shapes</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎸 Start with These Shapes</h3>
            <p>These common suspended chord forms are easy to play and sound great in many musical contexts.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Open Sus4 Chords</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-medium mb-3">Dsus4</h4>
                  <div className="mb-3">
                    <SimpleFretboardDiagram chord="Dsus4" />
                  </div>
                  <p className="text-sm text-gray-600">Add pinky to D chord</p>
                </div>

                <div className="text-center">
                  <h4 className="font-medium mb-3">Asus4</h4>
                  <div className="mb-3">
                    <SimpleFretboardDiagram chord="Asus4" />
                  </div>
                  <p className="text-sm text-gray-600">Add one finger to A chord</p>
                </div>

                <div className="text-center">
                  <h4 className="font-medium mb-3">Esus4</h4>
                  <div className="mb-3">
                    <SimpleFretboardDiagram chord="Esus4" />
                  </div>
                  <p className="text-sm text-gray-600">Add finger to E chord</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Open Sus2 Chords</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-medium mb-3">Dsus2</h4>
                  <div className="mb-3">
                    <SimpleFretboardDiagram chord="Dsus2" />
                  </div>
                  <p className="text-sm text-gray-600">Remove middle finger from D</p>
                </div>

                <div className="text-center">
                  <h4 className="font-medium mb-3">Asus2</h4>
                  <div className="mb-3">
                    <SimpleFretboardDiagram chord="Asus2" />
                  </div>
                  <p className="text-sm text-gray-600">Just two fingers needed</p>
                </div>

                <div className="text-center">
                  <h4 className="font-medium mb-3">Esus2</h4>
                  <div className="mb-3">
                    <SimpleFretboardDiagram chord="Esus2" />
                  </div>
                  <p className="text-sm text-gray-600">Gentle resolution potential</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resolution and Movement */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Resolution and Movement</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎵 The Power of Resolution</h3>
            <p className="mb-2">Suspended chords create tension that naturally wants to resolve. This movement is fundamental to their musical power.</p>
            <p className="text-sm text-gray-600">The suspended note typically moves by step to complete the resolution.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Common Resolutions</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Sus4 to Major</h4>
                  <p className="text-sm mb-2">The 4th resolves down to the 3rd</p>
                  <div className="mb-3">
                    <MusicScore
                      title="Sus4 to Major Resolution"
                      staves={[{
                        id: 'sus4-major-resolution',
                        notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :h (2/4.0/3.3/2.3/1) :h (2/4.1/3.2/2.3/1)`,
                        width: 300,
                        scale: 1.0,
                        title: 'Dsus4 to D'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Classic resolution: tension to release</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Sus4 to Minor</h4>
                  <p className="text-sm mb-2">The 4th can also resolve to minor third</p>
                  <div className="mb-3">
                    <MusicScore
                      title="Sus4 to Minor Resolution"
                      staves={[{
                        id: 'sus4-minor-resolution',
                        notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :h (0/5.2/4.2/3.3/2.0/1) :h (0/5.2/4.2/3.1/2.0/1)`,
                        width: 300,
                        scale: 1.0,
                        title: 'Asus4 to Am'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">More unexpected, emotional resolution</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Sus2 to Major</h4>
                  <p className="text-sm mb-2">The 2nd resolves up to the 3rd</p>
                  <div className="mb-3">
                    <MusicScore
                      title="Sus2 to Major Resolution"
                      staves={[{
                        id: 'sus2-major-resolution',
                        notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :h (0/5.2/4.2/3.0/2.0/1) :h (0/5.2/4.2/3.2/2.0/1)`,
                        width: 300,
                        scale: 1.0,
                        title: 'Asus2 to A'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Gentle, upward resolution</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Applications */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Musical Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Genre Applications</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Rock:</strong> Power chords and emotional builds</li>
                <li>• <strong>Folk:</strong> Gentle, acoustic progressions</li>
                <li>• <strong>Pop:</strong> Catchy hooks and transitions</li>
                <li>• <strong>Country:</strong> Open, ringing chords</li>
                <li>• <strong>Alternative:</strong> Atmospheric textures</li>
              </ul>
            </div>

            <div className="bg-cyan-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎭 Emotional Character</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Sus4:</strong> Anticipation, yearning</li>
                <li>• <strong>Sus2:</strong> Openness, lightness</li>
                <li>• <strong>Resolution:</strong> Satisfaction, completion</li>
                <li>• <strong>Non-resolution:</strong> Mystery, ambiguity</li>
                <li>• <strong>Movement:</strong> Forward momentum</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Suspended Chord Progressions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Common Suspended Chord Progressions</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎵 Essential Progressions</h3>
            <p>These progressions showcase the movement and resolution power of suspended chords.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Classic Suspended Progressions</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">The "Wonderwall" Progression</h4>
                  <p className="text-sm mb-2"><strong>Pattern:</strong> Em7 - Cadd9 - Dsus4 - D</p>
                  <div className="mb-3">
                    <MusicScore
                      title="Wonderwall-Style Progression"
                      staves={[{
                        id: 'wonderwall-progression',
                        notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (0/6.2/5.0/4.0/3.0/2.0/1) | :w (0/5.1/4.0/3.2/2.3/1) | :w (2/4.0/3.3/2.3/1) | :w (2/4.1/3.2/2.3/1)`,
                        width: 600,
                        scale: 1.0,
                        title: 'Em7 - Cadd9 - Dsus4 - D'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Made famous by Oasis, used in countless songs</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Suspended Resolution Chain</h4>
                  <p className="text-sm mb-2"><strong>Pattern:</strong> Asus4 - A - Dsus2 - D</p>
                  <div className="mb-3">
                    <MusicScore
                      title="Suspended Resolution Chain"
                      staves={[{
                        id: 'sus-resolution-chain',
                        notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (0/5.2/4.2/3.3/2.0/1) | :w (0/5.2/4.2/3.2/2.0/1) | :w (2/4.0/3.2/2.3/1) | :w (2/4.1/3.2/2.3/1)`,
                        width: 600,
                        scale: 1.0,
                        title: 'Asus4 - A - Dsus2 - D'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Chain of tensions and resolutions</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Folk Sus Progression</h4>
                  <p className="text-sm mb-2"><strong>Pattern:</strong> Gsus4 - G - Cadd9 - Dsus4 - D</p>
                  <div className="mb-3">
                    <MusicScore
                      title="Folk Sus Progression"
                      staves={[{
                        id: 'folk-sus-progression',
                        notation: `options space=20 font-size=14
tabstave notation=true time=4/4
notes :w (3/6.0/5.0/4.0/3.1/2.3/1) | :w (3/6.2/5.0/4.0/3.0/2.3/1) | :w (0/5.1/4.0/3.2/2.3/1) | :w (2/4.0/3.3/2.3/1) | :w (2/4.1/3.2/2.3/1)`,
                        width: 750,
                        scale: 1.0,
                        title: 'Gsus4 - G - Cadd9 - Dsus4 - D'
                      }]}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Common in folk and acoustic music</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Examples */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Famous Songs Using Suspended Chords</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-teal-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Rock & Alternative</h3>
              <ul className="space-y-2 text-sm">
                <li>• "Wonderwall" - Oasis (Dsus4)</li>
                <li>• "The One I Love" - R.E.M. (Gsus4)</li>
                <li>• "Pinball Wizard" - The Who (Bsus4)</li>
                <li>• "Tom Sawyer" - Rush (Csus2/Csus4)</li>
                <li>• "Iris" - Goo Goo Dolls (Dsus2)</li>
              </ul>
            </div>

            <div className="bg-cyan-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Folk & Pop</h3>
              <ul className="space-y-2 text-sm">
                <li>• "Landslide" - Fleetwood Mac (Csus4)</li>
                <li>• "Dust in the Wind" - Kansas (Csus2/Asus2)</li>
                <li>• "Blackbird" - The Beatles (Gsus4)</li>
                <li>• "More Than Words" - Extreme (Csus2)</li>
                <li>• "Wild World" - Cat Stevens (Dsus4)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Advanced Suspended Concepts */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Advanced Suspended Concepts</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 Beyond Basic Sus Chords</h3>
            <p>Explore more sophisticated suspended chord variations and applications.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Extended Suspended Chords</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">Sus7 Chords</p>
                  <p className="text-sm text-gray-600">Add 7th to suspended chords</p>
                  <p className="text-sm">Example: Gsus47 = G-C-D-F</p>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">Sus9 Chords</p>
                  <p className="text-sm text-gray-600">Suspend the 3rd, add 9th</p>
                  <p className="text-sm">Example: Gsus9 = G-A-D</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Compositional Techniques</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">Delayed Resolution</p>
                  <p className="text-sm text-gray-600">Hold the tension longer than expected</p>
                  <p className="text-sm">Creates anticipation and drama</p>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">Non-Resolution</p>
                  <p className="text-sm text-gray-600">Move to different chord without resolving</p>
                  <p className="text-sm">Creates ambiguity and modern sound</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Playing Techniques */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Playing Techniques</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Fingerpicking</h3>
              <ul className="space-y-2 text-sm">
                <li>• Sus chords sound beautiful fingerpicked</li>
                <li>• Emphasize the suspended note</li>
                <li>• Use open strings for resonance</li>
                <li>• Practice smooth chord transitions</li>
                <li>• Experiment with arpeggiation patterns</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Strumming</h3>
              <ul className="space-y-2 text-sm">
                <li>• Let chords ring out for full effect</li>
                <li>• Use dynamics to emphasize resolution</li>
                <li>• Practice quick chord changes</li>
                <li>• Try different picking attacks</li>
                <li>• Experiment with partial chord voicings</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Practice Exercises</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 Building Suspended Chord Skills</h3>
            <p>These exercises will help you master suspended chords and their resolutions.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 1: Basic Resolutions</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Practice: Dsus4 - D, Asus4 - A, Gsus4 - G</p>
                <p className="text-sm text-gray-600 mb-2">Focus on smooth voice leading and clear resolution</p>
                <p className="text-sm">Listen to the tension and release</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 2: Sus2 to Major</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Practice: Asus2 - A, Dsus2 - D, Esus2 - E</p>
                <p className="text-sm text-gray-600 mb-2">Practice the gentler sus2 resolutions</p>
                <p className="text-sm">Notice the upward movement of the suspended note</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 3: Mixed Progressions</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Progression: Gsus4 - G - Cadd9 - Dsus4 - D</p>
                <p className="text-sm text-gray-600 mb-2">Combine suspended chords with added tone chords</p>
                <p className="text-sm">Practice common folk/rock progression patterns</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Topics */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Related Topics</h2>
          
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Continue Your Learning Journey</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Chord Theory</h4>
                <ul className="text-sm space-y-1">
                  <li>• Add9 and Add11 Chords</li>
                  <li>• Voice Leading</li>
                  <li>• Non-Chord Tones</li>
                  <li>• Tension and Resolution</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Practical Application</h4>
                <ul className="text-sm space-y-1">
                  <li>• Songwriting with Sus Chords</li>
                  <li>• Fingerpicking Patterns</li>
                  <li>• Folk Guitar Techniques</li>
                  <li>• Modern Pop Harmony</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <a 
            href="/lessons/theory/chords/seventh" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Previous: Seventh Chords
          </a>
          <a 
            href="/lessons/theory/chords/diminished" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Next: Diminished Chords →
          </a>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
