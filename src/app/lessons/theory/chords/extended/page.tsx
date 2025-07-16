'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
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

          <div className="grid gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Types of Ninth Chords</h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium mb-2 text-gray-800">Major 9th (Maj9)</h4>
                  <p className="text-sm mb-2"><strong>Formula:</strong> 1 - 3 - 5 - 7 - 9</p>
                  <p className="text-sm mb-2"><strong>Example:</strong> CMaj9 = C-E-G-B-D</p>
                  <p className="text-sm text-gray-600">Dreamy, sophisticated, floating quality</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Minor 9th (m9)</h4>
                  <p className="text-sm mb-2"><strong>Formula:</strong> 1 - ♭3 - 5 - ♭7 - 9</p>
                  <p className="text-sm mb-2"><strong>Example:</strong> Am9 = A-C-E-G-B</p>
                  <p className="text-sm text-gray-600">Mellow, contemplative, jazzy</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Dominant 9th (9)</h4>
                  <p className="text-sm mb-2"><strong>Formula:</strong> 1 - 3 - 5 - ♭7 - 9</p>
                  <p className="text-sm mb-2"><strong>Example:</strong> G9 = G-B-D-F-A</p>
                  <p className="text-sm text-gray-600">Bluesy, funky, with forward motion</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Add9 Chords</h4>
                  <p className="text-sm mb-2"><strong>Formula:</strong> 1 - 3 - 5 - 9 (no 7th)</p>
                  <p className="text-sm mb-2"><strong>Example:</strong> Cadd9 = C-E-G-D</p>
                  <p className="text-sm text-gray-600">Open, bright, contemporary pop sound</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Common 9th Chord Shapes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h4 className="font-medium mb-3">Cadd9</h4>
                  <SimpleFretboardDiagram chord="C" />
                  <p className="text-sm text-gray-600 mt-2">Simple add9 shape - very popular</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-3">Em9</h4>
                  <SimpleFretboardDiagram chord="Em7" />
                  <p className="text-sm text-gray-600 mt-2">Easy open Em9 voicing</p>
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

          <div className="grid gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Types of Eleventh Chords</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Minor 11th (m11)</h4>
                  <p className="text-sm mb-2"><strong>Formula:</strong> 1 - ♭3 - 5 - ♭7 - 9 - 11</p>
                  <p className="text-sm mb-2"><strong>Example:</strong> Am11 = A-C-E-G-B-D</p>
                  <p className="text-sm text-gray-600">Very stable, no conflict with 3rd</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Dominant 11th (11)</h4>
                  <p className="text-sm mb-2"><strong>Formula:</strong> 1 - 3 - 5 - ♭7 - 9 - 11</p>
                  <p className="text-sm mb-2"><strong>Example:</strong> G11 = G-B-D-F-A-C</p>
                  <p className="text-sm text-gray-600">Creates tension (11th conflicts with 3rd)</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Major 11th (Maj11)</h4>
                  <p className="text-sm mb-2"><strong>Formula:</strong> 1 - 3 - 5 - 7 - 9 - 11</p>
                  <p className="text-sm mb-2"><strong>Example:</strong> CMaj11 = C-E-G-B-D-F</p>
                  <p className="text-sm text-gray-600">Rare due to harsh dissonance</p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">💡 Important Note</h4>
                  <p className="text-sm text-gray-600">In major and dominant 11th chords, the 3rd is often omitted to avoid the harsh dissonance between the 3rd and 11th (a minor 9th interval).</p>
                </div>
              </div>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Types of Thirteenth Chords</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Dominant 13th (13)</h4>
                  <p className="text-sm mb-2"><strong>Formula:</strong> 1 - 3 - 5 - ♭7 - 9 - 11 - 13</p>
                  <p className="text-sm mb-2"><strong>Example:</strong> G13 = G-B-D-F-A-C-E</p>
                  <p className="text-sm text-gray-600">Ultimate jazz chord - rich and complex</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Minor 13th (m13)</h4>
                  <p className="text-sm mb-2"><strong>Formula:</strong> 1 - ♭3 - 5 - ♭7 - 9 - 11 - 13</p>
                  <p className="text-sm mb-2"><strong>Example:</strong> Am13 = A-C-E-G-B-D-F#</p>
                  <p className="text-sm text-gray-600">Lush, sophisticated minor harmony</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Major 13th (Maj13)</h4>
                  <p className="text-sm mb-2"><strong>Formula:</strong> 1 - 3 - 5 - 7 - 9 - 11 - 13</p>
                  <p className="text-sm mb-2"><strong>Example:</strong> CMaj13 = C-E-G-B-D-F-A</p>
                  <p className="text-sm text-gray-600">Extremely rich, often with omissions</p>
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

          <div className="grid gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Jazz and Contemporary Progressions</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Extended ii-V-I</h4>
                  <p className="text-sm mb-2"><strong>Basic:</strong> Dm7 - G7 - CMaj7</p>
                  <p className="text-sm mb-2"><strong>Extended:</strong> Dm9 - G13 - CMaj9</p>
                  <p className="text-sm text-gray-600">Jazz standard with maximum harmonic sophistication</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Add9 Pop Progression</h4>
                  <p className="text-sm mb-2"><strong>Example:</strong> Cadd9 - Gadd9 - Am7 - Fadd9</p>
                  <p className="text-sm text-gray-600">Contemporary pop/rock with extended color</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Neo-Soul Progression</h4>
                  <p className="text-sm mb-2"><strong>Example:</strong> Am11 - Dm9 - G13 - CMaj9</p>
                  <p className="text-sm text-gray-600">Rich, sophisticated R&B harmony</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Modal Jazz</h4>
                  <p className="text-sm mb-2"><strong>Example:</strong> Dm11 - Em11 - Dm11 - Gm11</p>
                  <p className="text-sm text-gray-600">Floating, modal quality with 11th extensions</p>
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
