'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import VexTabRenderer from '@/components/VexTabRenderer';
import Link from 'next/link';

export default function MinorChordsPage() {
  return (
    <Layout>
      <Header
        title="Minor Chord Theory"
        subtitle="Explore the emotional depth and melancholic beauty of minor chords - the essential counterpart to major harmony."
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
        <div className="bg-gradient-to-r from-slate-600 to-gray-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Minor Chords</h1>
          <p className="text-xl opacity-90 mb-4">
            Minor chords provide the emotional counterpoint to major chords, bringing depth, introspection, 
            and melancholic beauty to music.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Emotional Depth</span>
            <span className="bg-white/20 px-3 py-1 rounded">Introspective Beauty</span>
            <span className="bg-white/20 px-3 py-1 rounded">Melancholic Power</span>
            <span className="bg-white/20 px-3 py-1 rounded">Human Expression</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">What Are Minor Chords?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>Definition:</strong> Three-note chords with lowered third</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>Formula:</strong> Root + Minor 3rd + Perfect 5th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>Interval Pattern:</strong> 3 semitones + 4 semitones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>Sound Quality:</strong> Sad, contemplative, emotional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>Function:</strong> ii, iii, vi chords in major keys</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Musical Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>Ballads:</strong> Emotional depth and expression</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>Folk Music:</strong> Storytelling and introspection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>Classical:</strong> Minor keys and modulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>Rock/Metal:</strong> Power and intensity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Understanding Minor Chord Construction */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Understanding Minor Chord Construction</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Root Note</h3>
              <p className="text-gray-600 mb-2">The foundation of the chord</p>
              <div className="text-sm text-gray-500">
                <p>• Determines the chord name</p>
                <p>• Usually the lowest note</p>
                <p>• Provides harmonic center</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Minor Third</h3>
              <p className="text-gray-600 mb-2">The characteristic interval</p>
              <div className="text-sm text-gray-500">
                <p>• 3 semitones from root</p>
                <p>• Creates the &quot;minor&quot; quality</p>
                <p>• Half-step lower than major third</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Perfect Fifth</h3>
              <p className="text-gray-600 mb-2">The stabilizing interval</p>
              <div className="text-sm text-gray-500">
                <p>• 7 semitones from root</p>
                <p>• Same as in major chords</p>
                <p>• Provides harmonic stability</p>
              </div>
            </div>
          </div>
        </div>

        {/* Essential Minor Chords */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Essential Minor Chords</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Am Chord */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">A Minor (Am)</h3>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <SimpleFretboardDiagram chord="Am" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-2">Notes: A - C - E</h4>
                  <p className="text-gray-600 mb-3">The most common minor chord for beginners.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Finger Position:</strong></p>
                    <p>• 2nd fret, D string (middle finger)</p>
                    <p>• 2nd fret, G string (ring finger)</p>
                    <p>• Open A, D, B, E strings</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Em Chord */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">E Minor (Em)</h3>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <SimpleFretboardDiagram chord="Em" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-2">Notes: E - G - B</h4>
                  <p className="text-gray-600 mb-3">Often the first chord students learn.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Finger Position:</strong></p>
                    <p>• 2nd fret, A string (middle finger)</p>
                    <p>• 2nd fret, D string (ring finger)</p>
                    <p>• Open E, G, B, E strings</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dm Chord */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">D Minor (Dm)</h3>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <SimpleFretboardDiagram chord="Dm" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-2">Notes: D - F - A</h4>
                  <p className="text-gray-600 mb-3">A beautiful, melancholic chord.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Finger Position:</strong></p>
                    <p>• 1st fret, E string (index finger)</p>
                    <p>• 2nd fret, G string (middle finger)</p>
                    <p>• 3rd fret, B string (ring finger)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fm Chord */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">F Minor (Fm)</h3>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <SimpleFretboardDiagram chord="Fm" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-2">Notes: F - Ab - C</h4>
                  <p className="text-gray-600 mb-3">A barre chord that requires finger strength.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Finger Position:</strong></p>
                    <p>• 1st fret barre (index finger)</p>
                    <p>• 3rd fret, A string (ring finger)</p>
                    <p>• 3rd fret, D string (pinky)</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Common Chord Progressions */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Minor Chord Progressions</h2>
          
          <div className="grid gap-8 mb-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              
              {/* Natural Minor vi-IV-I-V */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-4 text-center text-purple-700">Natural Minor vi-IV-I-V</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Chord Sequence</h5>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Am" />
                        <p className="text-sm font-medium mt-1">Am</p>
                        <p className="text-xs text-gray-600">vi (i)</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="F" />
                        <p className="text-sm font-medium mt-1">F</p>
                        <p className="text-xs text-gray-600">IV (♭VI)</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="C" />
                        <p className="text-sm font-medium mt-1">C</p>
                        <p className="text-xs text-gray-600">I (♭III)</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="G" />
                        <p className="text-sm font-medium mt-1">G</p>
                        <p className="text-xs text-gray-600">V (♭VII)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Strumming Pattern</h5>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-center mb-2">♩ ♪♪ ♩ ♪♪</p>
                      <p className="text-xs text-gray-600 text-center">D - DU - D - DU</p>
                      <p className="text-xs text-gray-600 text-center">Emotional pop ballad feel</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 70-100 BPM</p>
                      <p className="mb-2"><strong>Feel:</strong> Bittersweet, emotional</p>
                      <p><strong>Genre:</strong> Pop, Ballads, Folk</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=Am
notes :w (X/6.0/5.2/4.2/3.1/2.0/1) | :w (1/6.3/5.3/4.2/3.1/2.1/1) | :w (X/6.3/5.2/4.0/3.1/2.0/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1)
text :w,Am,:w,F,:w,C,:w,G
                  `}
                  width={700}
                  className="mb-4"
                />
                
                <p className="text-sm text-gray-600 italic text-center">
                  One of the most popular progressions in modern music - creates bittersweet emotion in "Someone Like You" and "Despacito"
                </p>
              </div>

              {/* Classical Minor i-iv-V-i */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-4 text-center text-blue-700">Classical Minor i-iv-V-i</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Chord Sequence</h5>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Am" />
                        <p className="text-sm font-medium mt-1">Am</p>
                        <p className="text-xs text-gray-600">i</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Dm" />
                        <p className="text-sm font-medium mt-1">Dm</p>
                        <p className="text-xs text-gray-600">iv</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="E" />
                        <p className="text-sm font-medium mt-1">E</p>
                        <p className="text-xs text-gray-600">V</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Am" />
                        <p className="text-sm font-medium mt-1">Am</p>
                        <p className="text-xs text-gray-600">i</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Strumming Pattern</h5>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-center mb-2">♪♪ ♩ ♪♪ ♩</p>
                      <p className="text-xs text-gray-600 text-center">UU - D - UU - D</p>
                      <p className="text-xs text-gray-600 text-center">Traditional, flowing</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 80-120 BPM</p>
                      <p className="mb-2"><strong>Feel:</strong> Classical, resolved</p>
                      <p><strong>Genre:</strong> Classical, Folk, Traditional</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=Am
notes :w (X/6.0/5.2/4.2/3.1/2.0/1) | :w (X/6.X/5.0/4.2/3.3/2.1/1) | :w (0/6.2/5.2/4.1/3.0/2.0/1) | :w (X/6.0/5.2/4.2/3.1/2.0/1)
text :w,Am,:w,Dm,:w,E,:w,Am
                  `}
                  width={700}
                  className="mb-4"
                />
                
                <p className="text-sm text-gray-600 italic text-center">
                  Traditional minor progression with strong resolution - foundation of "Greensleeves" and "Black Magic Woman"
                </p>
              </div>

              {/* Descending i-VII-VI-VII */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-4 text-center text-green-700">Rock Power Progression i-VII-VI-VII</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Chord Sequence</h5>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Am" />
                        <p className="text-sm font-medium mt-1">Am</p>
                        <p className="text-xs text-gray-600">i</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="G" />
                        <p className="text-sm font-medium mt-1">G</p>
                        <p className="text-xs text-gray-600">♭VII</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="F" />
                        <p className="text-sm font-medium mt-1">F</p>
                        <p className="text-xs text-gray-600">♭VI</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="G" />
                        <p className="text-sm font-medium mt-1">G</p>
                        <p className="text-xs text-gray-600">♭VII</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Strumming Pattern</h5>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-center mb-2">♩ ♩ ♩ ♩</p>
                      <p className="text-xs text-gray-600 text-center">D - D - D - D</p>
                      <p className="text-xs text-gray-600 text-center">Driving rock power</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 100-140 BPM</p>
                      <p className="mb-2"><strong>Feel:</strong> Powerful, driving</p>
                      <p><strong>Genre:</strong> Rock, Metal, Alternative</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=Am
notes :w (X/6.0/5.2/4.2/3.1/2.0/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1) | :w (1/6.3/5.3/4.2/3.1/2.1/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1)
text :w,Am,:w,G,:w,F,:w,G
                  `}
                  width={700}
                  className="mb-4"
                />
                
                <p className="text-sm text-gray-600 italic text-center">
                  Driving rock progression with powerful motion - heard in "Sultans of Swing" and "Another Brick in the Wall"
                </p>
              </div>

              {/* Andalusian Cadence */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h4 className="text-xl font-semibold mb-4 text-center text-orange-700">Andalusian Cadence i-VII-VI-V</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Chord Sequence</h5>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Am" />
                        <p className="text-sm font-medium mt-1">Am</p>
                        <p className="text-xs text-gray-600">i</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="G" />
                        <p className="text-sm font-medium mt-1">G</p>
                        <p className="text-xs text-gray-600">♭VII</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="F" />
                        <p className="text-sm font-medium mt-1">F</p>
                        <p className="text-xs text-gray-600">♭VI</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="E" />
                        <p className="text-sm font-medium mt-1">E</p>
                        <p className="text-xs text-gray-600">V</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Strumming Pattern</h5>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-center mb-2">♪♪ ♪♪ ♪♪ ♪♪</p>
                      <p className="text-xs text-gray-600 text-center">UU - UU - UU - UU</p>
                      <p className="text-xs text-gray-600 text-center">Flowing, descending</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 90-130 BPM</p>
                      <p className="mb-2"><strong>Feel:</strong> Mysterious, haunting</p>
                      <p><strong>Genre:</strong> Flamenco, Classical, Prog Rock</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=Am
notes :w (X/6.0/5.2/4.2/3.1/2.0/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1) | :w (1/6.3/5.3/4.2/3.1/2.1/1) | :w (0/6.2/5.2/4.1/3.0/2.0/1)
text :w,Am,:w,G,:w,F,:w,E
                  `}
                  width={700}
                  className="mb-4"
                />
                
                <p className="text-sm text-gray-600 italic text-center">
                  Haunting descending progression - creates tension and forward motion in "Hit the Road Jack" and "Stairway to Heaven"
                </p>
              </div>

              {/* Practice Tips */}
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200 mt-6">
                <h4 className="text-lg font-semibold text-purple-800 mb-4">🎯 Practice Tips for Minor Chord Progressions</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-purple-700 mb-2">Technique Focus</h5>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Practice smooth chord transitions slowly</li>
                      <li>• Focus on clean minor third intervals</li>
                      <li>• Work on consistent rhythm patterns</li>
                      <li>• Use metronome for steady timing</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-purple-700 mb-2">Musical Application</h5>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Perfect for emotional and dramatic songs</li>
                      <li>• Essential for ballads and introspective music</li>
                      <li>• Foundation of rock and metal progressions</li>
                      <li>• Creates powerful storytelling in folk music</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Techniques */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Techniques</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Beginner Focus</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Master Am and Em first</li>
                <li>• Practice chord transitions</li>
                <li>• Use a metronome</li>
                <li>• Focus on clean fretting</li>
                <li>• Avoid touching other strings</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Intermediate Practice</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Add Dm and Fm</li>
                <li>• Practice barre chords</li>
                <li>• Work on rhythm patterns</li>
                <li>• Learn minor progressions</li>
                <li>• Experiment with inversions</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Advanced Techniques</h3>
              <ul className="space-y-2 text-purple-700">
                <li>• Minor chord extensions</li>
                <li>• Voice leading</li>
                <li>• Altered minor chords</li>
                <li>• Jazz minor progressions</li>
                <li>• Compositional applications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emotional Context and Usage */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Emotional Context and Musical Usage</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Emotional Characteristics</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-slate-400 pl-4">
                  <h4 className="font-medium">Melancholy and Sadness</h4>
                  <p className="text-gray-600 text-sm">Minor chords naturally evoke feelings of sadness, loss, and introspection, making them perfect for ballads and emotional pieces.</p>
                </div>
                <div className="border-l-4 border-slate-400 pl-4">
                  <h4 className="font-medium">Tension and Drama</h4>
                  <p className="text-gray-600 text-sm">In rock and metal, minor chords create dramatic tension and can convey power, anger, or intensity.</p>
                </div>
                <div className="border-l-4 border-slate-400 pl-4">
                  <h4 className="font-medium">Mystery and Suspense</h4>
                  <p className="text-gray-600 text-sm">Minor harmonies are often used in film scores and ambient music to create atmosphere and suspense.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Genre Applications</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Folk and Country</h4>
                  <p className="text-gray-600 text-sm">Minor chords tell stories of hardship, love lost, and life&apos;s struggles.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Rock and Metal</h4>
                  <p className="text-gray-600 text-sm">Create heavy, powerful riffs and emotional solos.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Jazz and Blues</h4>
                  <p className="text-gray-600 text-sm">Essential for minor key improvisation and complex harmony.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Classical</h4>
                  <p className="text-gray-600 text-sm">Minor keys are fundamental to classical composition and emotional expression.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Your Chord Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Chord Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand minor chords, explore how they connect to other chord types and advanced harmonic concepts.
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
                  Brighten your sound →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/chords/seventh" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                  <span className="text-2xl">🎵</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Seventh Chords</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Add sophistication with jazzy four-note harmonies.
                </p>
                <span className="text-amber-600 font-medium text-sm group-hover:text-amber-700">
                  Add sophistication →
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

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <Link 
            href="/lessons/theory/chords/major" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Previous: Major Chords
          </Link>
          <Link 
            href="/lessons/theory/chords/seventh" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Next: Seventh Chords →
          </Link>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}