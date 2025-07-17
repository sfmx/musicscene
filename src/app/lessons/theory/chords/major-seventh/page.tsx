'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import VexTabRenderer from '@/components/VexTabRenderer';
import Link from 'next/link';

export default function MajorSeventhChordsPage() {
  return (
    <Layout>
      <Header
        title="Major Seventh Chord Theory"
        subtitle="Explore the dreamy, sophisticated harmony of major seventh chords - the floating, ethereal sound that defines modern jazz and contemporary music."
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
        <div className="bg-gradient-to-r from-pink-600 to-rose-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Major Seventh Chords</h1>
          <p className="text-xl opacity-90 mb-4">
            Major seventh chords create a dreamy, floating quality that adds sophistication and beauty to harmony. 
            They're essential for jazz, pop ballads, and contemporary music.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Dreamy Sound</span>
            <span className="bg-white/20 px-3 py-1 rounded">Jazz Essential</span>
            <span className="bg-white/20 px-3 py-1 rounded">Floating Quality</span>
            <span className="bg-white/20 px-3 py-1 rounded">Sophisticated</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">What Are Major Seventh Chords?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span><strong>Definition:</strong> Four-note chords combining major triads with major sevenths</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span><strong>Formula:</strong> Root + Major 3rd + Perfect 5th + Major 7th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span><strong>Interval Pattern:</strong> 4 + 3 + 4 semitones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span><strong>Sound Quality:</strong> Dreamy, floating, ethereal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span><strong>Function:</strong> Color harmony, jazz sophistication</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Musical Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span><strong>Jazz:</strong> ii-V-I progressions, ballads</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span><strong>Pop Ballads:</strong> Emotional sophistication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span><strong>R&B/Soul:</strong> Smooth progressions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span><strong>Neo-Soul:</strong> Modern harmonic color</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Understanding Major Seventh Chord Construction */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Understanding Major Seventh Chord Construction</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
              <h3 className="text-lg font-semibold text-pink-800 mb-3">CMaj7 Example</h3>
              <ul className="text-pink-700 text-sm space-y-2">
                <li>• <strong>Root:</strong> C (1st degree)</li>
                <li>• <strong>Major 3rd:</strong> E (3rd degree)</li>
                <li>• <strong>Perfect 5th:</strong> G (5th degree)</li>
                <li>• <strong>Major 7th:</strong> B (7th degree)</li>
                <li>• <strong>Result:</strong> Dreamy, floating sound</li>
              </ul>
            </div>
            <div className="bg-rose-50 rounded-lg p-4 border border-rose-200">
              <h3 className="text-lg font-semibold text-rose-800 mb-3">Interval Quality</h3>
              <ul className="text-rose-700 text-sm space-y-2">
                <li>• <strong>Major 7th:</strong> Creates floating character</li>
                <li>• <strong>Dissonance:</strong> Mild tension, beautiful color</li>
                <li>• <strong>Resolution:</strong> Often stays unresolved</li>
                <li>• <strong>Function:</strong> Color chord, sophistication</li>
                <li>• <strong>Psychology:</strong> Dreamy, contemplative</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Jazz Relationship</h3>
              <ul className="text-purple-700 text-sm space-y-2">
                <li>• <strong>Built from:</strong> Major scale degrees 1-3-5-7</li>
                <li>• <strong>Key centers:</strong> I, IV in major keys</li>
                <li>• <strong>Jazz standard:</strong> Essential harmony</li>
                <li>• <strong>Progressions:</strong> ii-V-I, ballads</li>
                <li>• <strong>Voicings:</strong> Rootless, upper structures</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Essential Open Major Seventh Chords */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Essential Open Major Seventh Chords</h2>
          
          <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-pink-800 mb-3">🎸 Start Here</h3>
            <p className="text-pink-700">These beautiful major seventh shapes will add sophistication to your playing.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">CMaj7</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="CMaj7" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> C-E-G-B</p>
                <p><strong>Fingering:</strong> Easy, open strings</p>
                <p><strong>Use:</strong> Jazz ballads, pop</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">AMaj7</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="AMaj7" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> A-C#-E-G#</p>
                <p><strong>Fingering:</strong> Beautiful open shape</p>
                <p><strong>Use:</strong> Neo-soul, R&B</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">DMaj7</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="DMaj7" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> D-F#-A-C#</p>
                <p><strong>Fingering:</strong> Compact, sweet</p>
                <p><strong>Use:</strong> Folk, pop ballads</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">EMaj7</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="EMaj7" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> E-G#-B-D#</p>
                <p><strong>Fingering:</strong> Rich, full sound</p>
                <p><strong>Use:</strong> Jazz, sophisticated pop</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">GMaj7</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="GMaj7" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> G-B-D-F#</p>
                <p><strong>Fingering:</strong> Dreamy, floating</p>
                <p><strong>Use:</strong> Jazz, neo-soul</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">FMaj7</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="FMaj7" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> F-A-C-E</p>
                <p><strong>Fingering:</strong> Barre variation</p>
                <p><strong>Use:</strong> Ballads, jazz standards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Progressions */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Major Seventh Progressions</h2>
          
          <div className="grid gap-8 mb-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              
              {/* Jazz Ballad Progression */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-4 text-center text-pink-700">Classic Jazz Ballad</h4>
                
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
                      <p className="text-sm font-mono text-center mb-2">♪♪ ♩ ♪♪ ♩</p>
                      <p className="text-xs text-gray-600 text-center">UU - D - UU - D</p>
                      <p className="text-xs text-gray-600 text-center">Smooth jazz ballad feel</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 80-100 BPM</p>
                      <p className="mb-2"><strong>Feel:</strong> Sophisticated, flowing</p>
                      <p><strong>Genre:</strong> Jazz Ballads, Lounge, Pop</p>
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
                  The quintessential jazz ballad progression - smooth voice leading with sophisticated major seventh harmony
                </p>
              </div>

              {/* Neo-Soul Movement */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-4 text-center text-purple-700">Neo-Soul Movement</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Chord Sequence</h5>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="AMaj7" />
                        <p className="text-sm font-medium mt-1">AMaj7</p>
                        <p className="text-xs text-gray-600">IMaj7</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="F#m7" />
                        <p className="text-sm font-medium mt-1">F#m7</p>
                        <p className="text-xs text-gray-600">vi7</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="DMaj7" />
                        <p className="text-sm font-medium mt-1">DMaj7</p>
                        <p className="text-xs text-gray-600">IVMaj7</p>
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
                      <p className="text-sm font-mono text-center mb-2">♩ ♪♪ ♪♪ ♩</p>
                      <p className="text-xs text-gray-600 text-center">D - DU - DU - D</p>
                      <p className="text-xs text-gray-600 text-center">Modern R&B groove</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 90-110 BPM</p>
                      <p className="mb-2"><strong>Feel:</strong> Soulful, contemporary</p>
                      <p><strong>Genre:</strong> Neo-Soul, R&B, Hip-Hop</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=A
notes :w (X/6.0/5.2/4.1/3.2/2.0/1) | :w (2/6.4/5.2/4.2/3.2/2.2/1) | :w (X/6.X/5.0/4.2/3.2/2.2/1) | :w (0/6.2/5.0/4.1/3.0/2.0/1)
text :w,AMaj7,:w,F#m7,:w,DMaj7,:w,E7
                  `}
                  width={700}
                  className="mb-4"
                />
                
                <p className="text-sm text-gray-600 italic text-center">
                  Contemporary R&B progression featuring major seventh chords for modern, sophisticated soul harmony
                </p>
              </div>

              {/* Bossa Nova Progression */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-4 text-center text-blue-700">Bossa Nova Romance</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Chord Sequence</h5>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="GMaj7" />
                        <p className="text-sm font-medium mt-1">GMaj7</p>
                        <p className="text-xs text-gray-600">IMaj7</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Em7" />
                        <p className="text-sm font-medium mt-1">Em7</p>
                        <p className="text-xs text-gray-600">vi7</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Am7" />
                        <p className="text-sm font-medium mt-1">Am7</p>
                        <p className="text-xs text-gray-600">ii7</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="DMaj7" />
                        <p className="text-sm font-medium mt-1">DMaj7</p>
                        <p className="text-xs text-gray-600">VMaj7</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Strumming Pattern</h5>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-center mb-2">♪♪ ♪♪ ♪♪ ♪♪</p>
                      <p className="text-xs text-gray-600 text-center">UU - UU - UU - UU</p>
                      <p className="text-xs text-gray-600 text-center">Light bossa nova rhythm</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 120-140 BPM</p>
                      <p className="mb-2"><strong>Feel:</strong> Romantic, sophisticated</p>
                      <p><strong>Genre:</strong> Bossa Nova, Latin Jazz, Lounge</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=G
notes :w (3/6.2/5.0/4.0/3.0/2.2/1) | :w (0/6.2/5.2/4.0/3.0/2.0/1) | :w (X/6.0/5.2/4.0/3.1/2.0/1) | :w (X/6.X/5.0/4.2/3.2/2.2/1)
text :w,GMaj7,:w,Em7,:w,Am7,:w,DMaj7
                  `}
                  width={700}
                  className="mb-4"
                />
                
                <p className="text-sm text-gray-600 italic text-center">
                  Smooth bossa nova progression with romantic major seventh harmony - perfect for intimate, sophisticated settings
                </p>
              </div>

              {/* Contemporary Pop Progression */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h4 className="text-xl font-semibold mb-4 text-center text-green-700">Contemporary Pop Dream</h4>
                
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
                        <SimpleFretboardDiagram chord="G" />
                        <p className="text-sm font-medium mt-1">G</p>
                        <p className="text-xs text-gray-600">V</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Am7" />
                        <p className="text-sm font-medium mt-1">Am7</p>
                        <p className="text-xs text-gray-600">vi7</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="FMaj7" />
                        <p className="text-sm font-medium mt-1">FMaj7</p>
                        <p className="text-xs text-gray-600">IVMaj7</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Strumming Pattern</h5>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-center mb-2">♩ ♪♪ ♩ ♪♪</p>
                      <p className="text-xs text-gray-600 text-center">D - DU - D - DU</p>
                      <p className="text-xs text-gray-600 text-center">Modern pop ballad feel</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 70-90 BPM</p>
                      <p className="mb-2"><strong>Feel:</strong> Dreamy, emotional</p>
                      <p><strong>Genre:</strong> Pop Ballads, Indie, Alternative</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=C
notes :w (X/6.3/5.2/4.0/3.0/2.0/1) | :w (3/6.2/5.0/4.0/3.0/2.3/1) | :w (X/6.0/5.2/4.0/3.1/2.0/1) | :w (1/6.3/5.2/4.1/3.0/2.X/1)
text :w,CMaj7,:w,G,:w,Am7,:w,FMaj7
                  `}
                  width={700}
                  className="mb-4"
                />
                
                <p className="text-sm text-gray-600 italic text-center">
                  Modern pop progression mixing major sevenths with triads - creates dreamy, emotional atmosphere
                </p>
              </div>

              {/* Practice Tips */}
              <div className="bg-pink-50 rounded-lg p-6 border border-pink-200 mt-6">
                <h4 className="text-lg font-semibold text-pink-800 mb-4">🎯 Practice Tips for Major Seventh Progressions</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-pink-700 mb-2">Technique Focus</h5>
                    <ul className="text-sm text-pink-700 space-y-1">
                      <li>• Let major seventh intervals ring clearly</li>
                      <li>• Practice smooth voice leading</li>
                      <li>• Use light touch for floating quality</li>
                      <li>• Focus on clean chord transitions</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-pink-700 mb-2">Musical Application</h5>
                    <ul className="text-sm text-pink-700 space-y-1">
                      <li>• Perfect for ballads and slow songs</li>
                      <li>• Great for creating dreamy atmospheres</li>
                      <li>• Essential for jazz and R&B styles</li>
                      <li>• Use for sophisticated pop harmony</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
              <h3 className="text-lg font-semibold text-pink-800 mb-3">Exercise 1: Basic Shapes</h3>
              <div className="space-y-2 text-sm text-pink-700">
                <p className="font-medium mb-2">Practice: CMaj7 - AMaj7 - DMaj7 - GMaj7</p>
                <p>Focus on clean fretting and letting notes ring</p>
                <p>Listen for the dreamy, floating quality</p>
              </div>
            </div>
            
            <div className="bg-rose-50 rounded-lg p-4 border border-rose-200">
              <h3 className="text-lg font-semibold text-rose-800 mb-3">Exercise 2: Jazz Progression</h3>
              <div className="space-y-2 text-sm text-rose-700">
                <p className="font-medium mb-2">Play: CMaj7 - Am7 - Dm7 - G7</p>
                <p>Practice smooth transitions between chords</p>
                <p>Work on jazzy rhythm patterns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Your Chord Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-pink-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Chord Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand major seventh chords, explore how they connect to other chord types and harmonic concepts.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/chords/minor-seventh" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-200 transition-colors">
                  <span className="text-2xl">🌙</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minor Seventh Chords</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the smooth, jazzy sophistication of minor sevenths.
                </p>
                <span className="text-slate-600 font-medium text-sm group-hover:text-slate-700">
                  Add sophistication →
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
