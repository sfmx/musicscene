'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import VexTabRenderer from '@/components/VexTabRenderer';
import Link from 'next/link';

export default function ExtendedChordsPage() {
  return (
    <Layout>
      <Header
        title="Extended Chord Theory"
        subtitle="Explore the rich, complex harmony of 9th, 11th, and 13th chords that add sophistication and color to your musical palette."
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
        <div className="bg-gradient-to-r from-rose-600 to-pink-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Extended Chords</h1>
          <p className="text-xl opacity-90 mb-4">
            Extended chords add 9ths, 11ths, and 13ths to basic triads and seventh chords, creating rich, 
            complex harmony essential for jazz, fusion, and contemporary music.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Complex Harmony</span>
            <span className="bg-white/20 px-3 py-1 rounded">Jazz Essential</span>
            <span className="bg-white/20 px-3 py-1 rounded">Rich Color</span>
            <span className="bg-white/20 px-3 py-1 rounded">Professional Sound</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">What Are Extended Chords?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span><strong>Definition:</strong> Chords that include intervals beyond the 7th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span><strong>Extensions:</strong> 9th, 11th, and 13th degrees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span><strong>Function:</strong> Add color without changing harmony</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span><strong>Complexity:</strong> Rich, sophisticated sound</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span><strong>Usage:</strong> Jazz, fusion, contemporary music</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Extension Types</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span><strong>9th:</strong> Same as 2nd, octave higher</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span><strong>11th:</strong> Same as 4th, octave higher</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span><strong>13th:</strong> Same as 6th, octave higher</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span><strong>Add chords:</strong> Extensions without 7th</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Understanding Extensions */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Understanding Extensions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
              <h3 className="text-lg font-semibold text-pink-800 mb-3">9th Chords</h3>
              <ul className="text-pink-700 text-sm space-y-2">
                <li>• <strong>Extension:</strong> 9th (same as 2nd, octave higher)</li>
                <li>• <strong>Formula:</strong> 1-3-5-7-9</li>
                <li>• <strong>Sound:</strong> Open, colorful</li>
                <li>• <strong>Use:</strong> Jazz, pop, contemporary</li>
                <li>• <strong>Example:</strong> CMaj9 = C-E-G-B-D</li>
              </ul>
            </div>
            <div className="bg-rose-50 rounded-lg p-4 border border-rose-200">
              <h3 className="text-lg font-semibold text-rose-800 mb-3">11th Chords</h3>
              <ul className="text-rose-700 text-sm space-y-2">
                <li>• <strong>Extension:</strong> 11th (same as 4th, octave higher)</li>
                <li>• <strong>Formula:</strong> 1-3-5-7-9-11</li>
                <li>• <strong>Sound:</strong> Suspended, floating</li>
                <li>• <strong>Use:</strong> Modal jazz, fusion</li>
                <li>• <strong>Example:</strong> Am11 = A-C-E-G-B-D</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">13th Chords</h3>
              <ul className="text-purple-700 text-sm space-y-2">
                <li>• <strong>Extension:</strong> 13th (same as 6th, octave higher)</li>
                <li>• <strong>Formula:</strong> 1-3-5-7-9-11-13</li>
                <li>• <strong>Sound:</strong> Maximum complexity</li>
                <li>• <strong>Use:</strong> Advanced jazz harmony</li>
                <li>• <strong>Example:</strong> G13 = G-B-D-F-A-C-E</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ninth Chords */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ninth Chords</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">🎵 Understanding 9th Chords</h3>
            <p className="text-blue-700">Ninth chords add the 9th degree (same as the 2nd, but an octave higher) to seventh chords, creating open, colorful harmony.</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Types of Ninth Chords</h3>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Cmaj9 Chord */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Major 9th (Cmaj9)</h4>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <SimpleFretboardDiagram chord="Cmaj9" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium mb-2">Notes: C - E - G - B - D</h5>
                    <p className="text-gray-600 mb-3">Dreamy, sophisticated, floating quality perfect for jazz ballads.</p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Formula:</strong> 1 - 3 - 5 - 7 - 9</p>
                      <p><strong>Use in:</strong> Jazz standards, bossa nova, contemporary pop</p>
                      <p><strong>Character:</strong> Bright and sophisticated</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dm9 Chord */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Minor 9th (Dm9)</h4>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <SimpleFretboardDiagram chord="Dm9" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium mb-2">Notes: D - F - A - C - E</h5>
                    <p className="text-gray-600 mb-3">Smooth and melancholic with atmospheric quality.</p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Formula:</strong> 1 - ♭3 - 5 - ♭7 - 9</p>
                      <p><strong>Use in:</strong> Neo-soul, ambient jazz, R&B</p>
                      <p><strong>Character:</strong> Mellow and contemplative</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* C9 Chord */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Dominant 9th (C9)</h4>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <SimpleFretboardDiagram chord="C9" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium mb-2">Notes: C - E - G - Bb - D</h5>
                    <p className="text-gray-600 mb-3">Bluesy and driving sound with forward motion.</p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Formula:</strong> 1 - 3 - 5 - ♭7 - 9</p>
                      <p><strong>Use in:</strong> Blues, funk, soul, rock</p>
                      <p><strong>Character:</strong> Bluesy with tension</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Am9 Chord */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Minor 9th (Am9)</h4>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <SimpleFretboardDiagram chord="Am9" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium mb-2">Notes: A - C - E - G - B</h5>
                    <p className="text-gray-600 mb-3">Smooth and contemplative with rich harmonic color.</p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Formula:</strong> 1 - ♭3 - 5 - ♭7 - 9</p>
                      <p><strong>Use in:</strong> Jazz, neo-soul, contemporary pop</p>
                      <p><strong>Character:</strong> Jazzy and sophisticated</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fmaj9 Chord */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Major 9th (Fmaj9)</h4>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <SimpleFretboardDiagram chord="Fmaj9" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium mb-2">Notes: F - A - C - E - G</h5>
                    <p className="text-gray-600 mb-3">Warm and sophisticated with dreamy quality.</p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Formula:</strong> 1 - 3 - 5 - 7 - 9</p>
                      <p><strong>Use in:</strong> Jazz standards, bossa nova</p>
                      <p><strong>Character:</strong> Warm and floating</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gmaj9 Chord */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Major 9th (Gmaj9)</h4>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <SimpleFretboardDiagram chord="Gmaj9" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium mb-2">Notes: G - B - D - F# - A</h5>
                    <p className="text-gray-600 mb-3">Open and airy sound perfect for contemporary music.</p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Formula:</strong> 1 - 3 - 5 - 7 - 9</p>
                      <p><strong>Use in:</strong> Contemporary folk, indie pop</p>
                      <p><strong>Character:</strong> Open and bright</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Eleventh Chords */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Eleventh Chords</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3">🎵 Understanding 11th Chords</h3>
            <p className="text-green-700">Eleventh chords add the 11th degree (same as the 4th, but an octave higher), creating suspension and harmonic tension.</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Types of Eleventh Chords</h3>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Am11 Chord */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Minor 11th (Am11)</h4>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <SimpleFretboardDiagram chord="Am11" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium mb-2">Notes: A - C - E - G - B - D</h5>
                    <p className="text-gray-600 mb-3">Very stable with no harsh dissonance between 3rd and 11th.</p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Formula:</strong> 1 - ♭3 - 5 - ♭7 - 9 - 11</p>
                      <p><strong>Use in:</strong> Jazz, ambient, neo-soul</p>
                      <p><strong>Character:</strong> Floating and atmospheric</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dm11 Chord */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Minor 11th (Dm11)</h4>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <SimpleFretboardDiagram chord="Dm11" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium mb-2">Notes: D - F - A - C - E - G</h5>
                    <p className="text-gray-600 mb-3">Rich, contemplative sound perfect for ballads.</p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Formula:</strong> 1 - ♭3 - 5 - ♭7 - 9 - 11</p>
                      <p><strong>Use in:</strong> Jazz ballads, contemplative music</p>
                      <p><strong>Character:</strong> Deep and introspective</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Em11 Chord */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Minor 11th (Em11)</h4>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <SimpleFretboardDiagram chord="Em11" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium mb-2">Notes: E - G - B - D - F# - A</h5>
                    <p className="text-gray-600 mb-3">Open, resonant sound using all open strings.</p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Formula:</strong> 1 - ♭3 - 5 - ♭7 - 9 - 11</p>
                      <p><strong>Use in:</strong> Ambient music, drone effects</p>
                      <p><strong>Character:</strong> Ethereal and open</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* C11 Chord */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Dominant 11th (C11)</h4>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <SimpleFretboardDiagram chord="C11" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium mb-2">Notes: C - F - G - Bb - D - F</h5>
                    <p className="text-gray-600 mb-3">Often played without the 3rd to avoid dissonance.</p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Formula:</strong> 1 - (♭3) - 5 - ♭7 - 9 - 11</p>
                      <p><strong>Use in:</strong> Jazz, funk, modal harmony</p>
                      <p><strong>Character:</strong> Suspended and driving</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
              <h4 className="text-lg font-semibold text-yellow-800 mb-3">💡 Important Note About 11th Chords</h4>
              <p className="text-yellow-700">
                In major and dominant 11th chords, the 3rd is often omitted to avoid the harsh dissonance 
                between the 3rd and 11th (a minor 9th interval). Minor 11th chords don't have this problem 
                since the minor 3rd creates a consonant major 6th with the 11th.
              </p>
            </div>
          </div>
        </div>

        {/* Thirteenth Chords */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Thirteenth Chords</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">🎵 Understanding 13th Chords</h3>
            <p className="text-purple-700">Thirteenth chords represent the ultimate extension, adding the 13th degree (same as the 6th, but an octave higher) for maximum harmonic richness.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Types of Thirteenth Chords</h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex flex-col items-center">
                    <SimpleFretboardDiagram chord="G13" />
                    <h4 className="font-medium mb-2">Dominant 13th (13)</h4>
                    <p className="text-sm mb-1"><strong>Formula:</strong> 1-3-5-♭7-9-11-13</p>
                    <p className="text-sm mb-1"><strong>Example:</strong> G13</p>
                    <p className="text-xs text-gray-600">Ultimate jazz chord</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex flex-col items-center">
                    <SimpleFretboardDiagram chord="Am13" />
                    <h4 className="font-medium mb-2">Minor 13th (m13)</h4>
                    <p className="text-sm mb-1"><strong>Formula:</strong> 1-♭3-5-♭7-9-11-13</p>
                    <p className="text-sm mb-1"><strong>Example:</strong> Am13</p>
                    <p className="text-xs text-gray-600">Lush minor harmony</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex flex-col items-center">
                    <SimpleFretboardDiagram chord="CMaj13" />
                    <h4 className="font-medium mb-2">Major 13th (Maj13)</h4>
                    <p className="text-sm mb-1"><strong>Formula:</strong> 1-3-5-7-9-11-13</p>
                    <p className="text-sm mb-1"><strong>Example:</strong> CMaj13</p>
                    <p className="text-xs text-gray-600">Extremely rich sound</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practical Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-rose-50 rounded-lg p-6 border border-rose-200">
              <h3 className="text-lg font-semibold text-rose-800 mb-3">🎵 Genre Applications</h3>
              <ul className="space-y-2 text-sm text-rose-700">
                <li>• <strong>Jazz:</strong> Essential for sophisticated harmony</li>
                <li>• <strong>Fusion:</strong> Complex, modern sounds</li>
                <li>• <strong>R&B/Neo-Soul:</strong> Rich, smooth progressions</li>
                <li>• <strong>Pop/Rock:</strong> Add9 chords for color</li>
                <li>• <strong>Film Scores:</strong> Emotional, cinematic quality</li>
              </ul>
            </div>

            <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
              <h3 className="text-lg font-semibold text-pink-800 mb-3">🎭 Musical Functions</h3>
              <ul className="space-y-2 text-sm text-pink-700">
                <li>• Add harmonic color without changing function</li>
                <li>• Create smoother voice leading</li>
                <li>• Provide alternatives to basic triads</li>
                <li>• Express sophisticated emotions</li>
                <li>• Bridge between different chord types</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Voicing and Practical Considerations */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Voicing Extended Chords on Guitar</h2>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-orange-800 mb-3">🎸 Guitar Challenges and Solutions</h3>
            <p className="text-orange-700">Extended chords contain many notes, but guitar has only 6 strings. Strategic omissions and voicings make these chords playable.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Common Voicing Strategies</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Root Omission</h4>
                  <p className="text-sm text-gray-600">Often omit the root when playing with a bass player. Focus on extensions and color tones.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Fifth Omission</h4>
                  <p className="text-sm text-gray-600">The fifth is the least important note harmonically and can be omitted to make room for extensions.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Strategic Doubling</h4>
                  <p className="text-sm text-gray-600">Double important notes like the 3rd, 7th, or extensions rather than trying to include every note.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Open String Usage</h4>
                  <p className="text-sm text-gray-600">Use open strings creatively to access extended harmonies in guitar-friendly keys.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Extended Chord Progressions */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Extended Chord Progressions</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3">🎵 Essential Progressions</h3>
            <p className="text-green-700">These progressions showcase the rich harmonic possibilities of extended chords.</p>
          </div>

          <div className="grid gap-8 mb-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Jazz and Contemporary Progressions</h3>
              
              {/* Extended ii-V-I Progression */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-4 text-center text-blue-700">Extended ii-V-I Progression</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Chord Sequence</h5>
                    <div className="flex justify-center space-x-4 mb-4">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Dm9" />
                        <p className="text-sm font-medium mt-1">Dm9</p>
                        <p className="text-xs text-gray-600">ii9</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="G13" />
                        <p className="text-sm font-medium mt-1">G13</p>
                        <p className="text-xs text-gray-600">V13</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="CMaj9" />
                        <p className="text-sm font-medium mt-1">CMaj9</p>
                        <p className="text-xs text-gray-600">IMaj9</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Strumming Pattern</h5>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-center mb-2">♩ ♪♪ ♩ ♪♪</p>
                      <p className="text-xs text-gray-600 text-center">D - DU - D - DU</p>
                      <p className="text-xs text-gray-600 text-center">Smooth jazz feel, emphasize beat 1 and 3</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 120-140 BPM</p>
                      <p className="mb-2"><strong>Feel:</strong> Swing 8ths</p>
                      <p><strong>Genre:</strong> Jazz, Neo-Soul, R&B</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=C
notes :w (X/X.10/5.12/4.10/3.10/2) | :w (3/6.3/5.5/4.3/3.5/2) | :w (X/6.3/5.2/4.4/3.5/2)
text :w,Dm9,:w,G13,:w,CMaj9
                  `}
                  width={600}
                  className="mb-4"
                />
                
                <p className="text-sm text-gray-600 italic text-center">
                  The cornerstone of jazz harmony - extended ii-V-I with 9th and 13th tensions for sophisticated color
                </p>
              </div>

              {/* Add9 Pop Progression */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-4 text-center text-green-700">Add9 Pop Progression</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Chord Sequence</h5>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Cadd9" />
                        <p className="text-sm font-medium mt-1">Cadd9</p>
                        <p className="text-xs text-gray-600">I add9</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Gadd9" />
                        <p className="text-sm font-medium mt-1">Gadd9</p>
                        <p className="text-xs text-gray-600">V add9</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Am7" />
                        <p className="text-sm font-medium mt-1">Am7</p>
                        <p className="text-xs text-gray-600">vi7</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Fadd9" />
                        <p className="text-sm font-medium mt-1">Fadd9</p>
                        <p className="text-xs text-gray-600">IV add9</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Strumming Pattern</h5>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-center mb-2">♩ ♪♪ ♪♪ ♪♪</p>
                      <p className="text-xs text-gray-600 text-center">D - DU - DU - DU</p>
                      <p className="text-xs text-gray-600 text-center">Modern pop/rock feel with steady drive</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 80-120 BPM</p>
                      <p className="mb-2"><strong>Feel:</strong> Straight 8ths</p>
                      <p><strong>Genre:</strong> Pop, Indie Rock, Alternative</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=C
notes :w (X/X.3/5.2/4.0/3.3/2.0/1) | :w (3/6.0/5.0/4.2/3.0/2.3/1) | :w (X/X.0/5.2/4.0/3.1/2.0/1) | :w (1/6.0/5.3/4.0/3.1/2.1/1)
text :w,Cadd9,:w,Gadd9,:w,Am7,:w,Fadd9
                  `}
                  width={700}
                  className="mb-4"
                />
                
                <p className="text-sm text-gray-600 italic text-center">
                  Contemporary pop progression with add9 extensions - creates open, airy sound perfect for modern songwriting
                </p>
              </div>

              {/* Neo-Soul Progression */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-4 text-center text-purple-700">Neo-Soul Progression</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Chord Sequence</h5>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Am11" />
                        <p className="text-sm font-medium mt-1">Am11</p>
                        <p className="text-xs text-gray-600">vi11</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Dm9" />
                        <p className="text-sm font-medium mt-1">Dm9</p>
                        <p className="text-xs text-gray-600">ii9</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="G13" />
                        <p className="text-sm font-medium mt-1">G13</p>
                        <p className="text-xs text-gray-600">V13</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="CMaj9" />
                        <p className="text-sm font-medium mt-1">CMaj9</p>
                        <p className="text-xs text-gray-600">IMaj9</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Strumming Pattern</h5>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-center mb-2">♪♪ ♩ ♪♪ ♩</p>
                      <p className="text-xs text-gray-600 text-center">UU - D - UU - D</p>
                      <p className="text-xs text-gray-600 text-center">Syncopated neo-soul groove</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 70-95 BPM</p>
                      <p className="mb-2"><strong>Feel:</strong> Laid-back groove</p>
                      <p><strong>Genre:</strong> Neo-Soul, R&B, Contemporary Jazz</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=C
notes :w (X/X.0/5.0/4.0/3.1/2.0/1) | :w (X/X.10/5.12/4.10/3.10/2) | :w (3/6.3/5.5/4.3/3.5/2) | :w (X/6.3/5.2/4.4/3.5/2)
text :w,Am11,:w,Dm9,:w,G13,:w,CMaj9
                  `}
                  width={700}
                  className="mb-4"
                />
                
                <p className="text-sm text-gray-600 italic text-center">
                  Rich, sophisticated R&B harmony with extended tensions - perfect for creating lush, emotional soundscapes
                </p>
              </div>

              {/* Modal Jazz */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h4 className="text-xl font-semibold mb-4 text-center text-red-700">Modal Jazz Progression</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Chord Sequence</h5>
                    <div className="flex justify-center space-x-4 mb-4">
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Dm11" />
                        <p className="text-sm font-medium mt-1">Dm11</p>
                        <p className="text-xs text-gray-600">i11</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Em11" />
                        <p className="text-sm font-medium mt-1">Em11</p>
                        <p className="text-xs text-gray-600">ii11</p>
                      </div>
                      <div className="text-center">
                        <SimpleFretboardDiagram chord="Gm11" />
                        <p className="text-sm font-medium mt-1">Gm11</p>
                        <p className="text-xs text-gray-600">iv11</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Strumming Pattern</h5>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-mono text-center mb-2">♩. ♪ ♩ ♩</p>
                      <p className="text-xs text-gray-600 text-center">D. U - D - D</p>
                      <p className="text-xs text-gray-600 text-center">Floating, spacious modal feel</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Tempo:</strong> 60-80 BPM</p>
                      <p className="mb-2"><strong>Feel:</strong> Open, floating</p>
                      <p><strong>Genre:</strong> Modal Jazz, Ambient, Film Score</p>
                    </div>
                  </div>
                </div>

                <VexTabRenderer
                  vextab={`
options space=25 font-size=12
tabstave notation=true time=4/4 key=D
notes :w (X/X.0/5.0/4.0/3.1/2.1/1) | :w (0/6.0/5.0/4.0/3.0/2.0/1) | :w (X/X.0/5.0/4.0/3.1/2.1/1) | :w (3/6.3/5.3/4.3/3.3/2.3/1)
text :w,Dm11,:w,Em11,:w,Dm11,:w,Gm11
                  `}
                  width={700}
                  className="mb-4"
                />
                
                <p className="text-sm text-gray-600 italic text-center">
                  Floating modal harmony with 11th extensions - creates mysterious, open soundscapes without traditional resolution
                </p>
              </div>

              {/* Practice Tips */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mt-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-4">🎯 Practice Tips for Extended Progressions</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-blue-700 mb-2">Technique Focus</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Practice chord transitions slowly</li>
                      <li>• Focus on minimal finger movement</li>
                      <li>• Use a metronome for timing</li>
                      <li>• Let rings sustain between changes</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-700 mb-2">Musical Application</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Start with simple strumming patterns</li>
                      <li>• Experiment with fingerpicking</li>
                      <li>• Try different voicings up the neck</li>
                      <li>• Record yourself for timing analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Famous Examples */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Famous Songs Using Extended Chords</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-rose-100 rounded-lg p-6 border border-rose-200">
              <h3 className="text-lg font-semibold text-rose-800 mb-3">🎸 Classic Examples</h3>
              <ul className="space-y-2 text-sm text-rose-700">
                <li>• "Giant Steps" - John Coltrane (Maj7#11 chords)</li>
                <li>• "Maiden Voyage" - Herbie Hancock (sus chords)</li>
                <li>• "So What" - Miles Davis (Em11 and Dm11)</li>
                <li>• "Lush Life" - Billy Strayhorn (complex extensions)</li>
                <li>• "Body and Soul" - Jazz Standard (13th chords)</li>
              </ul>
            </div>

            <div className="bg-pink-100 rounded-lg p-6 border border-pink-200">
              <h3 className="text-lg font-semibold text-pink-800 mb-3">🎵 Contemporary Examples</h3>
              <ul className="space-y-2 text-sm text-pink-700">
                <li>• "Wonderwall" - Oasis (Em7 and Cadd9)</li>
                <li>• "More Than Words" - Extreme (add9 chords)</li>
                <li>• "Golden" - Jill Scott (9th and 11th chords)</li>
                <li>• "Come Away With Me" - Norah Jones (9th chords)</li>
                <li>• "Killing Me Softly" - Various (extended jazz harmony)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-orange-800 mb-3">🎯 Building Extended Chord Skills</h3>
            <p className="text-orange-700">These exercises will help you understand and use extended chords effectively.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Exercise 1: Add9 Chord Substitutions</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Take basic progression: C - G - Am - F</p>
                <p className="font-medium mb-2">Replace with: Cadd9 - Gadd9 - Am9 - Fadd9</p>
                <p className="text-sm text-gray-600">Notice how extensions add color without changing the harmony</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 2: Extended ii-V-I Practice</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Start with: Dm7 - G7 - CMaj7</p>
                <p className="font-medium mb-2">Extend to: Dm9 - G13 - CMaj9</p>
                <p className="text-sm text-gray-600">Focus on smooth voice leading and rich harmony</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 3: Modal 11th Chords</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Practice: Am11 - Dm11 - Gm11 - Cm11</p>
                <p className="text-sm text-gray-600">Experience the floating, suspended quality of 11th chords</p>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Concepts */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Advanced Concepts</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🎸 Altered Extensions</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• <strong>♭9 chords:</strong> Add tension and color</li>
                <li>• <strong>#9 chords:</strong> Hendrix chord (E7#9)</li>
                <li>• <strong>#11 chords:</strong> Lydian sound, very open</li>
                <li>• <strong>♭13 chords:</strong> Dark, mysterious quality</li>
                <li>• Mix and match for unique sounds</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">🎵 Polychords</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Stack simple triads for complex harmony</li>
                <li>• Example: D/C = CMaj9#11</li>
                <li>• Upper structure triads in jazz</li>
                <li>• Create extended sounds with simple shapes</li>
                <li>• Easier than traditional extended voicings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Continue Your Chord Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-rose-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Chord Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand extended chords, explore how they connect to other chord types and harmonic concepts.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/chords/seventh" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                  <span className="text-2xl">🎵</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Seventh Chords</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Review the foundation of jazz sophistication.
                </p>
                <span className="text-amber-600 font-medium text-sm group-hover:text-amber-700">
                  Back to basics →
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
            
            <Link href="/lessons/theory/chords/diminished" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <span className="text-2xl">⚫</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Diminished Chords</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Add tension and drama with diminished harmony.
                </p>
                <span className="text-red-600 font-medium text-sm group-hover:text-red-700">
                  Add tension →
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
