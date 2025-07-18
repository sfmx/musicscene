'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import VexTabRenderer from '@/components/VexTabRenderer';
import Link from 'next/link';

export default function SeventhChordsPage() {
  return (
    <Layout>
      <Header
        title="Seventh Chord Theory"
        subtitle="Add color, sophistication, and tension to your harmony with the essential four-note chords that bridge triads and extended harmony."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/theory/chords" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Chord Theory
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Seventh Chords</h1>
          <p className="text-xl opacity-90 mb-4">
            Seventh chords add the fourth note to triads, creating richer harmony and sophisticated musical 
            colors essential in jazz, blues, and modern music.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Rich Harmony</span>
            <span className="bg-white/20 px-3 py-1 rounded">Jazz Essential</span>
            <span className="bg-white/20 px-3 py-1 rounded">Sophisticated Color</span>
            <span className="bg-white/20 px-3 py-1 rounded">Professional Sound</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">What Are Seventh Chords?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>Definition:</strong> Four-note chords built on triads</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>Construction:</strong> Root + 3rd + 5th + 7th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>Function:</strong> Add harmonic color and sophistication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Richer than triads, less complex than extensions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>Usage:</strong> Jazz, blues, pop, classical</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>Jazz Standards:</strong> Essential harmonic language</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>Blues Progressions:</strong> Dominant 7th foundation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>Pop Ballads:</strong> Major 7th emotional color</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>R&B/Soul:</strong> Minor 7th smooth progressions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Understanding Seventh Types */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Understanding Seventh Types</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Major 7th (Maj7)</h3>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• <strong>Formula:</strong> 1-3-5-7</li>
                <li>• <strong>Example:</strong> CMaj7 = C-E-G-B</li>
                <li>• <strong>Sound:</strong> Dreamy, sophisticated</li>
                <li>• <strong>Use:</strong> Jazz ballads, contemporary</li>
                <li>• <strong>Feel:</strong> Stable, beautiful resolution</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Minor 7th (m7)</h3>
              <ul className="text-green-700 text-sm space-y-2">
                <li>• <strong>Formula:</strong> 1-♭3-5-♭7</li>
                <li>• <strong>Example:</strong> Am7 = A-C-E-G</li>
                <li>• <strong>Sound:</strong> Mellow, jazzy</li>
                <li>• <strong>Use:</strong> Jazz, R&B, folk</li>
                <li>• <strong>Feel:</strong> Smooth, relaxed</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Dominant 7th (7)</h3>
              <ul className="text-orange-700 text-sm space-y-2">
                <li>• <strong>Formula:</strong> 1-3-5-♭7</li>
                <li>• <strong>Example:</strong> G7 = G-B-D-F</li>
                <li>• <strong>Sound:</strong> Bluesy, wants to resolve</li>
                <li>• <strong>Use:</strong> Blues, jazz, rock</li>
                <li>• <strong>Feel:</strong> Tension, forward motion</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Minor Major 7th (mMaj7)</h3>
              <ul className="text-purple-700 text-sm space-y-2">
                <li>• <strong>Formula:</strong> 1-♭3-5-7</li>
                <li>• <strong>Example:</strong> AmMaj7 = A-C-E-G#</li>
                <li>• <strong>Sound:</strong> Mysterious, tense</li>
                <li>• <strong>Use:</strong> Film scores, avant-garde</li>
                <li>• <strong>Feel:</strong> Dark, haunting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Essential Seventh Chord Shapes */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Essential Seventh Chord Shapes</h2>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-3">🎸 Start with These Shapes</h3>
            <p className="text-amber-700">Master these fundamental seventh chord forms before moving to more complex variations.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Open Seventh Chords</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3 text-gray-700">Dominant 7th Chords</h4>
                  <div className="space-y-4">
                    <div className="text-center bg-white rounded-lg p-4 border border-gray-200">
                      <h5 className="font-medium mb-2">G7</h5>
                      <div className="mb-3">
                        <SimpleFretboardDiagram chord="G7" />
                      </div>
                      <p className="text-sm text-gray-600">Essential blues and rock chord</p>
                    </div>
                    
                    <div className="text-center">
                      <h5 className="font-medium mb-2">E7</h5>
                      <div className="mb-3">
                        <SimpleFretboardDiagram chord="E7" />
                      </div>
                      <p className="text-sm text-gray-600">One finger change from E major</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Minor 7th Chords</h4>
                  <div className="space-y-4">
                    <div className="text-center">
                      <h5 className="font-medium mb-2">Am7</h5>
                      <div className="mb-3">
                        <SimpleFretboardDiagram chord="Am7" />
                      </div>
                      <p className="text-sm text-gray-600">Remove one finger from Am</p>
                    </div>
                    
                    <div className="text-center">
                      <h5 className="font-medium mb-2">Em7</h5>
                      <div className="mb-3">
                        <SimpleFretboardDiagram chord="Em7" />
                      </div>
                      <p className="text-sm text-gray-600">Same as Em, easier fingering</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Major 7th Chords</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h4 className="font-medium mb-3">CMaj7</h4>
                  <div className="mb-3">
                    <SimpleFretboardDiagram chord="CMaj7" />
                  </div>
                  <p className="text-sm text-gray-600">Sophisticated, jazzy character</p>
                </div>
                
                <div className="text-center">
                  <h4 className="font-medium mb-3">FMaj7</h4>
                  <div className="mb-3">
                    <SimpleFretboardDiagram chord="FMaj7" />
                  </div>
                  <p className="text-sm text-gray-600">Alternative to F barre chord</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barre Chord Seventh Forms */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Moveable Seventh Chord Forms</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">🎯 Barre Chord Sevenths</h3>
            <p className="text-blue-700">These moveable forms allow you to play seventh chords anywhere on the neck.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">6th String Root Forms</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3 text-gray-700">Major 7th (6th string root)</h4>
                  <div className="mb-3 bg-white rounded-lg p-4 border border-gray-200">
                    <SimpleFretboardDiagram chord="BMaj7_barre" />
                  </div>
                  <p className="text-sm text-gray-600">Root on 6th string, 2nd fret = BMaj7</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Dominant 7th (6th string root)</h4>
                  <div className="mb-3">
                    <SimpleFretboardDiagram chord="B7_barre" />
                  </div>
                  <p className="text-sm text-gray-600">Root on 6th string, 2nd fret = B7</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">5th String Root Forms</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Minor 7th (5th string root)</h4>
                  <div className="mb-3">
                    <SimpleFretboardDiagram chord="Dm7_barre" />
                  </div>
                  <p className="text-sm text-gray-600">Root on 5th string, 5th fret = Dm7</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Dominant 7th (5th string root)</h4>
                  <div className="mb-3">
                    <SimpleFretboardDiagram chord="D7_barre_5th" />
                  </div>
                  <p className="text-sm text-gray-600">Root on 5th string, 5th fret = D7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Musical Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Musical Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">🎵 Genre Applications</h3>
              <ul className="space-y-2 text-sm text-amber-700">
                <li>• <strong>Jazz:</strong> Essential harmonic foundation</li>
                <li>• <strong>Blues:</strong> Dominant 7ths create blues sound</li>
                <li>• <strong>R&B/Soul:</strong> Minor 7ths for smooth grooves</li>
                <li>• <strong>Funk:</strong> Extended 7th chords for rhythm</li>
                <li>• <strong>Pop:</strong> Major 7ths for sophisticated ballads</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">🎭 Emotional Characters</h3>
              <ul className="space-y-2 text-sm text-orange-700">
                <li>• <strong>Major 7th:</strong> Dreamy, floating</li>
                <li>• <strong>Minor 7th:</strong> Mellow, contemplative</li>
                <li>• <strong>Dominant 7th:</strong> Bluesy, restless</li>
                <li>• <strong>Minor Major 7th:</strong> Mysterious, dark</li>
                <li>• <strong>Half-diminished:</strong> Jazzy, sophisticated</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Chord Progressions */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Seventh Chord Progressions</h2>
          
          <div className="grid gap-8 mb-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              
              {/* ii-V-I Jazz Progression */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-4 text-center text-blue-700">Classic ii-V-I Jazz Progression</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Chord Sequence</h5>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Dm7" />
                        <p className="text-sm font-medium mt-1">Dm7</p>
                        <p className="text-xs text-gray-600">ii7</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="G7" />
                        <p className="text-sm font-medium mt-1">G7</p>
                        <p className="text-xs text-gray-600">V7</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="CMaj7" />
                        <p className="text-sm font-medium mt-1">CMaj7</p>
                        <p className="text-xs text-gray-600">IMaj7</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Strumming Pattern</h5>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-center mb-2">♪♪ ♩ ♪♪ ♩</p>
                      <p className="text-xs text-gray-600 text-center">UU - D - UU - D</p>
                      <p className="text-xs text-gray-600 text-center">Sophisticated jazz ballad feel</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 100-140 BPM</p>
                      <p className="mb-2"><strong>Feel:</strong> Swing 8ths</p>
                      <p><strong>Genre:</strong> Jazz Standards, Ballads</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=C
notes :w (X/6.X/5.0/4.2/3.1/2.1/1) | :w (3/6.2/5.0/4.0/3.0/2.1/1) | :w (X/6.3/5.2/4.0/3.0/2.0/1)
text :w,Dm7,:w,G7,:w,CMaj7
                  `}
                  width={600}
                  className="mb-4"
                />
                
                <p className="text-sm text-gray-600 italic text-center">
                  The foundation of jazz harmony - creates smooth voice leading found in "Autumn Leaves" and "All of Me"
                </p>
              </div>

              {/* Blues Progression */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-4 text-center text-amber-700">Classic Blues Progression</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Chord Sequence</h5>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="A7" />
                        <p className="text-sm font-medium mt-1">A7</p>
                        <p className="text-xs text-gray-600">I7</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="D7" />
                        <p className="text-sm font-medium mt-1">D7</p>
                        <p className="text-xs text-gray-600">IV7</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="E7" />
                        <p className="text-sm font-medium mt-1">E7</p>
                        <p className="text-xs text-gray-600">V7</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Strumming Pattern</h5>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-center mb-2">♩ ♪♪ ♩ ♪♪</p>
                      <p className="text-xs text-gray-600 text-center">D - DU - D - DU</p>
                      <p className="text-xs text-gray-600 text-center">Classic blues shuffle feel</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 80-120 BPM</p>
                      <p className="mb-2"><strong>Feel:</strong> Swing/Shuffle</p>
                      <p><strong>Genre:</strong> Blues, Early Rock, Country</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=A
notes :w (X/6.0/5.2/4.0/3.2/2.0/1) | :w (X/6.X/5.0/4.2/3.1/2.2/1) | :w (0/6.2/5.0/4.1/3.0/2.0/1)
text :w,A7,:w,D7,:w,E7
                  `}
                  width={600}
                  className="mb-4"
                />
                
                <p className="text-sm text-gray-600 italic text-center">
                  Authentic blues sound with dominant sevenths - foundation of "Sweet Home Chicago" and "Stormy Monday"
                </p>
              </div>

              {/* Circle of Fifths Jazz */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-4 text-center text-green-700">Circle of Fifths Jazz Movement</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Chord Sequence</h5>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="CMaj7" />
                        <p className="text-sm font-medium mt-1">CMaj7</p>
                        <p className="text-xs text-gray-600">IMaj7</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Am7" />
                        <p className="text-sm font-medium mt-1">Am7</p>
                        <p className="text-xs text-gray-600">vi7</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Dm7" />
                        <p className="text-sm font-medium mt-1">Dm7</p>
                        <p className="text-xs text-gray-600">ii7</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="G7" />
                        <p className="text-sm font-medium mt-1">G7</p>
                        <p className="text-xs text-gray-600">V7</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Strumming Pattern</h5>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-center mb-2">♪♪ ♪♪ ♪♪ ♪♪</p>
                      <p className="text-xs text-gray-600 text-center">UU - UU - UU - UU</p>
                      <p className="text-xs text-gray-600 text-center">Light jazz comp style</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 120-140 BPM</p>
                      <p className="mb-2"><strong>Feel:</strong> Smooth, flowing</p>
                      <p><strong>Genre:</strong> Jazz Standards, Bossa Nova</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=C
notes :w (X/6.3/5.2/4.0/3.0/2.0/1) | :w (X/6.0/5.2/4.0/3.1/2.0/1) | :w (X/6.X/5.0/4.2/3.1/2.1/1) | :w (3/6.2/5.0/4.0/3.0/2.1/1)
text :w,CMaj7,:w,Am7,:w,Dm7,:w,G7
                  `}
                  width={700}
                  className="mb-4"
                />
                
                <p className="text-sm text-gray-600 italic text-center">
                  Elegant harmonic movement following the circle of fifths - heard in "Fly Me to the Moon" and "Girl from Ipanema"
                </p>
              </div>

              {/* Pop Ballad with Sevenths */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h4 className="text-xl font-semibold mb-4 text-center text-purple-700">Sophisticated Pop Ballad</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Chord Sequence</h5>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="CMaj7" />
                        <p className="text-sm font-medium mt-1">CMaj7</p>
                        <p className="text-xs text-gray-600">IMaj7</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="FMaj7" />
                        <p className="text-sm font-medium mt-1">FMaj7</p>
                        <p className="text-xs text-gray-600">IVMaj7</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Am7" />
                        <p className="text-sm font-medium mt-1">Am7</p>
                        <p className="text-xs text-gray-600">vi7</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="G7" />
                        <p className="text-sm font-medium mt-1">G7</p>
                        <p className="text-xs text-gray-600">V7</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Strumming Pattern</h5>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-center mb-2">♩ ♪♪ ♩ ♪♪</p>
                      <p className="text-xs text-gray-600 text-center">D - DU - D - DU</p>
                      <p className="text-xs text-gray-600 text-center">Emotional ballad feel</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 70-90 BPM</p>
                      <p className="mb-2"><strong>Feel:</strong> Heartfelt, flowing</p>
                      <p><strong>Genre:</strong> Pop Ballads, Soft Rock</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=C
notes :w (X/6.3/5.2/4.0/3.0/2.0/1) | :w (1/6.3/5.2/4.1/3.0/2.X/1) | :w (X/6.0/5.2/4.0/3.1/2.0/1) | :w (3/6.2/5.0/4.0/3.0/2.1/1)
text :w,CMaj7,:w,FMaj7,:w,Am7,:w,G7
                  `}
                  width={700}
                  className="mb-4"
                />
                
                <p className="text-sm text-gray-600 italic text-center">
                  Modern pop progression enhanced with seventh chord sophistication - adds depth to "Don't Look Back in Anger" style ballads
                </p>
              </div>

              {/* Practice Tips */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mt-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-4">🎯 Practice Tips for Seventh Chord Progressions</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-blue-700 mb-2">Technique Focus</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Practice smooth voice leading between chords</li>
                      <li>• Focus on clean seventh intervals</li>
                      <li>• Use light touch for jazzy sophistication</li>
                      <li>• Work on chord transitions at slow tempo</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-700 mb-2">Musical Application</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Essential foundation of jazz harmony</li>
                      <li>• Perfect for blues and early rock styles</li>
                      <li>• Adds sophistication to pop progressions</li>
                      <li>• Creates smooth harmonic movement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Famous Examples */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Famous Songs Using Seventh Chords</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-100 rounded-lg p-6 border border-amber-200">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">🎸 Rock & Pop</h3>
              <ul className="space-y-2 text-sm text-amber-700">
                <li>• "Midnight City" - M83 (Major 7ths)</li>
                <li>• "Dreams" - Fleetwood Mac (FMaj7)</li>
                <li>• "Wonderful Tonight" - Eric Clapton (G7)</li>
                <li>• "Don't Look Back in Anger" - Oasis (CMaj7)</li>
                <li>• "Come As You Are" - Nirvana (Em7)</li>
              </ul>
            </div>

            <div className="bg-blue-100 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🎵 Jazz & Blues</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• "Autumn Leaves" - Jazz Standard (m7-7-Maj7)</li>
                <li>• "Girl from Ipanema" - Bossa Nova (Maj7s)</li>
                <li>• "Stormy Weather" - Jazz Standard</li>
                <li>• "Sweet Home Chicago" - Blues (A7-D7-E7)</li>
                <li>• "All of Me" - Jazz Standard</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Advanced Seventh Chords */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Advanced Seventh Chord Types</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">🎯 Beyond the Basics</h3>
            <p className="text-purple-700">Explore more sophisticated seventh chord variations for advanced harmony.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Altered Seventh Chords</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">7♯5 (Augmented 7th)</p>
                  <p className="text-sm text-gray-600">Formula: 1 - 3 - ♯5 - ♭7</p>
                  <p className="text-sm">Example: C7♯5 = C-E-G♯-B♭</p>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">7♭5 (Dominant 7 ♭5)</p>
                  <p className="text-sm text-gray-600">Formula: 1 - 3 - ♭5 - ♭7</p>
                  <p className="text-sm">Example: C7♭5 = C-E-G♭-B♭</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Half-Diminished & Diminished</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">m7♭5 (Half-Diminished)</p>
                  <p className="text-sm text-gray-600">Formula: 1 - ♭3 - ♭5 - ♭7</p>
                  <p className="text-sm">Example: Cm7♭5 = C-E♭-G♭-B♭</p>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">°7 (Diminished 7th)</p>
                  <p className="text-sm text-gray-600">Formula: 1 - ♭3 - ♭5 - ♭♭7</p>
                  <p className="text-sm">Example: C°7 = C-E♭-G♭-A</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-3">🎯 Building Seventh Chord Skills</h3>
            <p className="text-amber-700">These exercises will help you master seventh chords and their applications.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Exercise 1: Basic Seventh Chord Changes</h3>
              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                <p className="font-medium mb-2">Progression: CMaj7 - Am7 - Dm7 - G7</p>
                <p className="text-sm text-gray-600 mb-2">Play each chord for 4 beats, practice smooth transitions</p>
                <p className="text-sm">Focus on voice leading and clean chord changes</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 2: Jazz ii-V-I Practice</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Multiple Keys: Dm7-G7-CMaj7, Em7-A7-DMaj7, Am7-D7-GMaj7</p>
                <p className="text-sm text-gray-600 mb-2">Practice the most important jazz progression in different keys</p>
                <p className="text-sm">Use both open and barre chord forms</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Exercise 3: Blues with Sevenths</h3>
              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                <p className="font-medium mb-2">12-Bar Blues: A7 - A7 - A7 - A7 | D7 - D7 - A7 - A7 | E7 - D7 - A7 - E7</p>
                <p className="text-sm text-gray-600 mb-2">Practice authentic blues sound with dominant 7th chords</p>
                <p className="text-sm">Use different strumming patterns and rhythms</p>
              </div>
            </div>
          </div>
        </div>

        {/* Voice Leading */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Voice Leading with Seventh Chords</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🎵 Smooth Connections</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• Move individual notes minimally</li>
                <li>• Use common tones between chords</li>
                <li>• Practice chord inversions</li>
                <li>• Focus on bass line movement</li>
                <li>• Create smooth melodic lines in highest voice</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">🎸 Practical Tips</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Learn multiple fingerings for each chord</li>
                <li>• Practice chord progressions slowly</li>
                <li>• Listen to the harmonic movement</li>
                <li>• Use a metronome for timing</li>
                <li>• Record yourself to hear progress</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Continue Your Chord Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-amber-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Chord Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand seventh chords, explore more advanced chord types and harmonic concepts.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/chords/major" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">☀️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Major Chords</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Review the bright, happy foundation of harmony.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Back to basics →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/chords/extended" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <span className="text-2xl">🎼</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Extended Chords</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Master complex jazz harmony with 9ths, 11ths, and 13ths.
                </p>
                <span className="text-orange-600 font-medium text-sm group-hover:text-orange-700">
                  Expand harmony →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/chords/suspended" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Suspended Chords</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Create tension and release with suspended harmony.
                </p>
                <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                  Build tension →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
