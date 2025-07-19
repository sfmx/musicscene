import React from 'react';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import VexTabRenderer from '@/components/VexTabRenderer';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function IIVIProgressionPage() {
  return (
    <Layout>
      <Header
        title="ii-V-I Progression"
        subtitle="The cornerstone of jazz harmony - a sophisticated three-chord progression that creates the smoothest voice leading and most elegant harmonic movement in music."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/theory/progressions" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Progressions Theory
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">ii-V-I Progression</h1>
          <p className="text-xl opacity-90 mb-4">
            The ii-V-I progression is the most sophisticated and widely used harmonic sequence in jazz, 
            creating smooth voice leading and elegant harmonic movement that defines the jazz sound.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Supertonic-Dominant-Tonic</span>
            <span className="bg-white/20 px-3 py-1 rounded">3 Chords</span>
            <span className="bg-white/20 px-3 py-1 rounded">Smooth Voice Leading</span>
            <span className="bg-white/20 px-3 py-1 rounded">Jazz Standard</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Harmonic Functions</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>ii (Supertonic):</strong> Subdominant function, prepares the dominant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>V (Dominant):</strong> Creates tension that demands resolution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>I (Tonic):</strong> Home base, provides satisfying resolution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Voice Leading:</strong> Smoothest possible chord tone movement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Circle of Fifths:</strong> Root movement by descending fifths</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">C Major Example</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>ii:</strong> D minor (D-F-A)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>V:</strong> G Major (G-B-D)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>I:</strong> C Major (C-E-G)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Progression:</strong> Dm - G - C</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Jazz Version:</strong> Dm7 - G7 - Cmaj7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guitar Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Basic Chord Positions</h3>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">ii-V-I in C Major (Triads)</h4>
                  <p className="text-sm text-purple-700 mb-3">Basic open position chords:</p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <h5 className="font-medium text-sm mb-2">ii - D minor</h5>
                      <SimpleFretboardDiagram chord="D_minor" />
                      <p className="text-xs text-purple-600 mt-1">Supertonic - Preparation</p>
                    </div>
                    <div className="text-center">
                      <h5 className="font-medium text-sm mb-2">V - G Major</h5>
                      <SimpleFretboardDiagram chord="G_major" />
                      <p className="text-xs text-purple-600 mt-1">Dominant - Tension</p>
                    </div>
                    <div className="text-center">
                      <h5 className="font-medium text-sm mb-2">I - C Major</h5>
                      <SimpleFretboardDiagram chord="C_major" />
                      <p className="text-xs text-purple-600 mt-1">Tonic - Resolution</p>
                    </div>
                  </div>
                  <VexTabRenderer 
                    vextab="tabstave notation=true key=C time=4/4
                      notes :w (2/4.3/3.2/2.1/1) (3/6.2/5.0/4.0/3.3/2.3/1) C/5" 
                    width={450} 
                    scale={0.8}
                  />
                  <div className="mt-3">
                    <p className="text-xs text-purple-600 font-medium mb-1">Practice Notes:</p>
                    <ul className="text-xs text-purple-600 space-y-1">
                      <li>• Notice the smooth voice leading between chords</li>
                      <li>• F in Dm becomes F# in G (leading tone)</li>
                      <li>• D in Dm moves to D in G7 (common tone)</li>
                      <li>• B in G resolves to C in C major</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">Jazz Seventh Chords</h4>
                  <p className="text-sm text-indigo-700 mb-3">Professional jazz voicings:</p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <h5 className="font-medium text-sm mb-2">ii7 - Dm7</h5>
                      <SimpleFretboardDiagram chord="D_minor_7" />
                    </div>
                    <div className="text-center">
                      <h5 className="font-medium text-sm mb-2">V7 - G7</h5>
                      <SimpleFretboardDiagram chord="G_7" />
                    </div>
                    <div className="text-center">
                      <h5 className="font-medium text-sm mb-2">Imaj7 - Cmaj7</h5>
                      <SimpleFretboardDiagram chord="C_major_7" />
                    </div>
                  </div>
                  <VexTabRenderer 
                    vextab="tabstave notation=true key=C time=4/4
                      notes :w (x/6.5/5.3/4.5/3.5/2.x/1) (3/6.x/5.4/4.3/3.4/2.x/1) (x/6.3/5.2/4.4/3.5/2.x/1)" 
                    width={450} 
                    scale={0.8}
                  />
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Minor ii-V-i</h4>
                  <p className="text-sm text-blue-700 mb-3">ii-V-i in C minor:</p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <h5 className="font-medium text-sm mb-2">ii7♭5 - Dm7♭5</h5>
                      <SimpleFretboardDiagram chord="D_minor_7_flat_5" />
                    </div>
                    <div className="text-center">
                      <h5 className="font-medium text-sm mb-2">V7 - G7</h5>
                      <SimpleFretboardDiagram chord="G_7" />
                    </div>
                    <div className="text-center">
                      <h5 className="font-medium text-sm mb-2">i - Cm</h5>
                      <SimpleFretboardDiagram chord="C_minor" />
                    </div>
                  </div>
                  <VexTabRenderer 
                    vextab="tabstave notation=true key=Cm time=4/4
                      notes :w (x/6.x/5.1/4.2/3.1/2.x/1) (3/6.x/5.4/4.3/3.4/2.x/1) (x/6.x/5.1/4.1/3.0/2.x/1)" 
                    width={450} 
                    scale={0.8}
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Advanced Applications</h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Extended Chords</h4>
                  <p className="text-sm text-yellow-700 mb-2">Add sophistication with extensions:</p>
                  <ul className="text-xs text-yellow-600 space-y-1">
                    <li>• <strong>ii9:</strong> Dm9 (add E for color)</li>
                    <li>• <strong>ii11:</strong> Dm11 (add G for richness)</li>
                    <li>• <strong>V13:</strong> G13 (dominant with 13th)</li>
                    <li>• <strong>Imaj9:</strong> Cmaj9 (sophisticated resolution)</li>
                    <li>• <strong>I6/9:</strong> C6/9 (add 6th and 9th)</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Chord Substitutions</h4>
                  <p className="text-sm text-green-700 mb-2">Jazz harmony techniques:</p>
                  <ul className="text-xs text-green-600 space-y-1">
                    <li>• <strong>Tritone sub:</strong> Replace V7 with ♭II7</li>
                    <li>• <strong>Secondary dominant:</strong> V7/V before V7</li>
                    <li>• <strong>Chromatic approach:</strong> Add ♭ii before ii</li>
                    <li>• <strong>Modal interchange:</strong> Use ii from parallel minor</li>
                    <li>• <strong>Deceptive resolution:</strong> V7 to vi instead of I</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Key Transposition</h4>
                  <p className="text-sm text-red-700 mb-2">ii-V-I in common jazz keys:</p>
                  <ul className="text-xs text-red-600 space-y-1">
                    <li>• <strong>F Major:</strong> Gm7 - C7 - Fmaj7</li>
                    <li>• <strong>G Major:</strong> Am7 - D7 - Gmaj7</li>
                    <li>• <strong>D Major:</strong> Em7 - A7 - Dmaj7</li>
                    <li>• <strong>A Major:</strong> Bm7 - E7 - Amaj7</li>
                    <li>• <strong>E Major:</strong> F#m7 - B7 - Emaj7</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Musical Examples */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Musical Examples & Famous Uses</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Jazz Standards</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Autumn Leaves"</h4>
                  <p className="text-sm text-gray-600 mb-2">Multiple ii-V-I progressions throughout</p>
                  <p className="text-xs text-gray-500">Am7-D7-Gmaj7, Dm7-G7-Cmaj7 sequences</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"All The Things You Are"</h4>
                  <p className="text-sm text-gray-600 mb-2">Classic example of ii-V-I chains</p>
                  <p className="text-xs text-gray-500">Modulates through multiple keys via ii-V-I</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Fly Me To The Moon"</h4>
                  <p className="text-sm text-gray-600 mb-2">Simple but effective ii-V-I usage</p>
                  <p className="text-xs text-gray-500">Great for practicing basic ii-V-I movement</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Modern Applications</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Neo-Soul & R&B</h4>
                  <p className="text-sm text-gray-600 mb-2">D'Angelo, Erykah Badu, Robert Glasper</p>
                  <p className="text-xs text-gray-500">Modern interpretation with extended chords</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Gospel Music</h4>
                  <p className="text-sm text-gray-600 mb-2">Church music with sophisticated harmony</p>
                  <p className="text-xs text-gray-500">Often uses complex voicings and substitutions</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Bossa Nova</h4>
                  <p className="text-sm text-gray-600 mb-2">Brazilian jazz with gentle ii-V-I movement</p>
                  <p className="text-xs text-gray-500">"Girl From Ipanema", Antonio Carlos Jobim</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">🎸 Voice Leading</h3>
              <ul className="text-purple-700 text-sm space-y-2">
                <li>• Practice smooth chord transitions</li>
                <li>• Focus on minimal finger movement</li>
                <li>• Keep common tones when possible</li>
                <li>• Use metronome at 60 BPM</li>
                <li>• Listen for harmonic progression</li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">🎵 Jazz Comping</h3>
              <ul className="text-indigo-700 text-sm space-y-2">
                <li>• Practice with seventh chords</li>
                <li>• Try different rhythmic patterns</li>
                <li>• Work on chord tone movement</li>
                <li>• Practice with jazz standards</li>
                <li>• Experiment with extensions</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🎭 Improvisation</h3>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• Play scales over each chord</li>
                <li>• Focus on chord tones first</li>
                <li>• Practice ii-V-I licks</li>
                <li>• Use guide tones (3rd and 7th)</li>
                <li>• Create melodic lines</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Exercises with Notation */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises with Notation</h2>
          <div className="space-y-6">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Exercise 1: Basic ii-V-I</h3>
              <p className="text-purple-700 text-sm mb-3">Practice the fundamental progression in C major:</p>
              <VexTabRenderer 
                vextab="tabstave notation=true key=C time=4/4
                  notes :w (2/4.3/3.2/2.1/1) (3/6.2/5.0/4.0/3.3/2.3/1) C/5" 
                width={550} 
                scale={0.9}
              />
              <div className="mt-3">
                <p className="text-xs text-purple-600 font-medium mb-1">Practice Tips:</p>
                <ul className="text-xs text-purple-600 space-y-1">
                  <li>• Hold each chord for 4 beats</li>
                  <li>• Focus on smooth chord changes</li>
                  <li>• Listen for the voice leading</li>
                  <li>• Notice the circle of fifths movement</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Exercise 2: Jazz Seventh Chords</h3>
              <p className="text-indigo-700 text-sm mb-3">Practice with professional jazz voicings:</p>
              <VexTabRenderer 
                vextab="tabstave notation=true key=C time=4/4
                  notes :w (x/6.5/5.3/4.5/3.5/2.x/1) (3/6.x/5.4/4.3/3.4/2.x/1) (x/6.3/5.2/4.4/3.5/2.x/1)" 
                width={550} 
                scale={0.9}
              />
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Exercise 3: Minor ii-V-i</h3>
              <p className="text-blue-700 text-sm mb-3">Practice ii-V-i in C minor:</p>
              <VexTabRenderer 
                vextab="tabstave notation=true key=Cm time=4/4
                  notes :w (x/6.x/5.1/4.2/3.1/2.x/1) (3/6.x/5.4/4.3/3.4/2.x/1) (x/6.x/5.1/4.1/3.0/2.x/1)" 
                width={550} 
                scale={0.9}
              />
            </div>
          </div>
        </div>

        {/* Scale Relationships */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Scale Relationships & Theory</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Circle of Fifths Movement</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Root Movement in C Major</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>ii (D):</strong> 2nd degree of C major scale</li>
                  <li>• <strong>V (G):</strong> Down a perfect 5th from D</li>
                  <li>• <strong>I (C):</strong> Down a perfect 5th from G</li>
                  <li>• Creates strongest harmonic momentum</li>
                  <li>• Each root prepares the next chord</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Scale Degree Functions</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>ii:</strong> Supertonic, subdominant function</li>
                  <li>• <strong>V:</strong> Dominant, creates tension</li>
                  <li>• <strong>I:</strong> Tonic, provides resolution</li>
                  <li>• Natural progression from weak to strong</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Voice Leading Analysis</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Chord Tone Movement</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Dm to G:</strong> D→D (common), F→F# (half step), A→B (whole step)</li>
                  <li>• <strong>G to C:</strong> G→G (common), B→C (half step), D→E (whole step)</li>
                  <li>• Minimal movement creates smoothness</li>
                  <li>• Leading tones create forward motion</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Jazz Voice Leading</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 7th chords add harmonic richness</li>
                  <li>• Guide tones (3rd and 7th) are crucial</li>
                  <li>• Extensions add color without affecting function</li>
                  <li>• Drop voicings create better voice leading</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <section className="border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link 
              href="/lessons/theory/progressions/i-iv-v" 
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="mr-2">←</span>
              Previous: I-IV-V Progression
            </Link>
            <Link 
              href="/lessons/theory/progressions/i-v-vi-iv" 
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              Next: I-V-vi-IV Progression
              <span className="ml-2">→</span>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
