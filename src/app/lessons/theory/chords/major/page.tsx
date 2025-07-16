'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import Link from 'next/link';

export default function MajorChordsPage() {
  return (
    <Layout>
      <Header
        title="Major Chord Theory"
        subtitle="Master the foundation of Western harmony with major chords - the bright, stable, and joyful building blocks of countless songs."
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
        <div className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Major Chords</h1>
          <p className="text-xl opacity-90 mb-4">
            Major chords are the foundation of Western harmony, providing the bright, stable, and universally 
            pleasant sound that defines countless songs across all genres.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Foundation of Harmony</span>
            <span className="bg-white/20 px-3 py-1 rounded">Bright & Stable</span>
            <span className="bg-white/20 px-3 py-1 rounded">Universal Appeal</span>
            <span className="bg-white/20 px-3 py-1 rounded">Essential Building Block</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">What Are Major Chords?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Definition:</strong> Three-note chords built from major scales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Formula:</strong> Root + Major 3rd + Perfect 5th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Interval Pattern:</strong> 4 semitones + 3 semitones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Sound Quality:</strong> Bright, happy, stable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Function:</strong> Tonic, dominant, subdominant harmony</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Musical Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Pop Music:</strong> I-V-vi-IV progressions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Folk/Country:</strong> Simple three-chord songs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Classical:</strong> Tonal harmony foundation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Rock:</strong> Power chord extensions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Understanding Major Chord Construction */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Understanding Major Chord Construction</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">C Major Example</h3>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• <strong>Root:</strong> C (1st degree)</li>
                <li>• <strong>Major 3rd:</strong> E (3rd degree)</li>
                <li>• <strong>Perfect 5th:</strong> G (5th degree)</li>
                <li>• <strong>Semitones:</strong> C→E (4), E→G (3)</li>
                <li>• <strong>Result:</strong> Bright, stable triad</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Interval Quality</h3>
              <ul className="text-green-700 text-sm space-y-2">
                <li>• <strong>Major 3rd:</strong> Defines major quality</li>
                <li>• <strong>Perfect 5th:</strong> Provides stability</li>
                <li>• <strong>Consonance:</strong> Stable, pleasant sound</li>
                <li>• <strong>Function:</strong> Rest point in harmony</li>
                <li>• <strong>Psychology:</strong> Happy, uplifting mood</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Scale Relationship</h3>
              <ul className="text-purple-700 text-sm space-y-2">
                <li>• <strong>Built from:</strong> Major scale degrees 1-3-5</li>
                <li>• <strong>Key centers:</strong> I, IV, V in major keys</li>
                <li>• <strong>Diatonic:</strong> Natural part of major scales</li>
                <li>• <strong>Progressions:</strong> Foundation of tonal music</li>
                <li>• <strong>Cadences:</strong> Strong resolution points</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Essential Open Major Chords */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Essential Open Major Chords</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">🎸 Start Here</h3>
            <p className="text-blue-700">These are the fundamental open major chords every guitarist should master first.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">C Major</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="C" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> C-E-G</p>
                <p><strong>Fingering:</strong> Easy, foundational</p>
                <p><strong>Use:</strong> Key of C, Am, F, G</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">G Major</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="G" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> G-B-D</p>
                <p><strong>Fingering:</strong> Two-finger option</p>
                <p><strong>Use:</strong> Key of G, Em, C, D</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">D Major</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="D" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> D-F#-A</p>
                <p><strong>Fingering:</strong> Compact shape</p>
                <p><strong>Use:</strong> Key of D, Bm, G, A</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">A Major</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="A" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> A-C#-E</p>
                <p><strong>Fingering:</strong> Three fingers, 2nd fret</p>
                <p><strong>Use:</strong> Key of A, F#m, D, E</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">E Major</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="E" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> E-G#-B</p>
                <p><strong>Fingering:</strong> Close together</p>
                <p><strong>Use:</strong> Key of E, C#m, A, B</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">F Major</h3>
              <div className="text-center mb-4">
                <SimpleFretboardDiagram chord="F" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Notes:</strong> F-A-C</p>
                <p><strong>Fingering:</strong> Barre or partial</p>
                <p><strong>Use:</strong> Key of F, Dm, Bb, C</p>
              </div>
            </div>
          </div>
        </div>

        {/* Barre Chord Major Forms */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Moveable Major Chord Forms</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3">🎯 Barre Chords</h3>
            <p className="text-green-700">These moveable forms allow you to play major chords anywhere on the neck.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">6th String Root Forms</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium mb-2 text-gray-700">E-Shape Barre (6th string root)</h4>
                  <div className="text-center mb-2">
                    <SimpleFretboardDiagram chord="F_barre" />
                  </div>
                  <p className="text-sm text-gray-600">Based on open E major shape</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">5th String Root Forms</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium mb-2 text-gray-700">A-Shape Barre (5th string root)</h4>
                  <div className="text-center mb-2">
                    <SimpleFretboardDiagram chord="B_barre_A_shape" />
                  </div>
                  <p className="text-sm text-gray-600">Based on open A major shape</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Major Chord Progressions */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Major Chord Progressions</h2>
          
          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-cyan-800 mb-3">🎵 Essential Progressions</h3>
            <p className="text-cyan-700">These progressions use major chords to create the foundation of countless songs.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Pop & Rock Progressions</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium mb-2">I-V-vi-IV (Pop Progression)</h4>
                  <p className="text-sm mb-2"><strong>Key of C:</strong> C - G - Am - F</p>
                  <p className="text-sm text-gray-600">Used in thousands of pop songs</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium mb-2">I-IV-V (Three-Chord Song)</h4>
                  <p className="text-sm mb-2"><strong>Key of G:</strong> G - C - D</p>
                  <p className="text-sm text-gray-600">Foundation of folk and country</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium mb-2">vi-IV-I-V (Emotional)</h4>
                  <p className="text-sm mb-2"><strong>Key of C:</strong> Am - F - C - G</p>
                  <p className="text-sm text-gray-600">Starts minor, resolves major</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Classical & Traditional</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium mb-2">I-vi-IV-V (50s Progression)</h4>
                  <p className="text-sm mb-2"><strong>Key of C:</strong> C - Am - F - G</p>
                  <p className="text-sm text-gray-600">Doo-wop and 1950s style</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium mb-2">I-V-I (Perfect Cadence)</h4>
                  <p className="text-sm mb-2"><strong>Key of G:</strong> G - D - G</p>
                  <p className="text-sm text-gray-600">Strongest resolution in music</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium mb-2">IV-V-I (Plagal Cadence)</h4>
                  <p className="text-sm mb-2"><strong>Key of C:</strong> F - G - C</p>
                  <p className="text-sm text-gray-600">"Amen" cadence in hymns</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Famous Songs with Major Chords */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Famous Songs Using Major Chords</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-100 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🎸 Rock & Pop Classics</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• "Let It Be" - The Beatles (C-G-Am-F)</li>
                <li>• "Don't Stop Believin'" - Journey (E-B-C#m-A)</li>
                <li>• "Sweet Child O' Mine" - Guns N' Roses (D-C-G)</li>
                <li>• "Wonderwall" - Oasis (Em-G-D-C)</li>
                <li>• "Hey Jude" - The Beatles (F-C-G)</li>
              </ul>
            </div>

            <div className="bg-green-100 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">🎵 Folk & Country</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• "House of the Rising Sun" - Animals (Am-C-D-F)</li>
                <li>• "Blowin' in the Wind" - Bob Dylan (G-C-D)</li>
                <li>• "Country Roads" - John Denver (G-Em-C-D)</li>
                <li>• "Ring of Fire" - Johnny Cash (G-C-D)</li>
                <li>• "Hallelujah" - Leonard Cohen (C-Am-F-G)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">🎯 Building Major Chord Skills</h3>
            <p className="text-blue-700">These exercises will help you master major chords and their applications.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Exercise 1: Open Chord Changes</h3>
              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                <p className="font-medium mb-2">Progression: C - G - D - A - E - F</p>
                <p className="text-sm text-gray-600 mb-2">Practice clean transitions between all open major chords</p>
                <p className="text-sm">Start slowly, focus on finger placement and timing</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Exercise 2: I-IV-V in Different Keys</h3>
              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                <p className="font-medium mb-2">Keys: G-C-D, C-F-G, D-G-A, A-D-E</p>
                <p className="text-sm text-gray-600 mb-2">Practice the foundational three-chord progression</p>
                <p className="text-sm">Essential for country, folk, and rock songs</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Exercise 3: Pop Progression Mastery</h3>
              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                <p className="font-medium mb-2">Pattern: I-V-vi-IV in multiple keys</p>
                <p className="text-sm text-gray-600 mb-2">C-G-Am-F, G-D-Em-C, D-A-Bm-G</p>
                <p className="text-sm">Learn the most popular progression in modern music</p>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Concepts */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Advanced Major Chord Concepts</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">🎸 Chord Inversions</h3>
              <ul className="space-y-2 text-sm text-purple-700">
                <li>• <strong>Root Position:</strong> C-E-G (root in bass)</li>
                <li>• <strong>First Inversion:</strong> E-G-C (3rd in bass)</li>
                <li>• <strong>Second Inversion:</strong> G-C-E (5th in bass)</li>
                <li>• <strong>Voice Leading:</strong> Smoother progressions</li>
                <li>• <strong>Bass Lines:</strong> More interesting movement</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">🎵 Chord Extensions</h3>
              <ul className="space-y-2 text-sm text-orange-700">
                <li>• <strong>Add9:</strong> Major chord + 9th (Cadd9)</li>
                <li>• <strong>6th Chords:</strong> Major chord + 6th (C6)</li>
                <li>• <strong>Major 7th:</strong> Major chord + 7th (CMaj7)</li>
                <li>• <strong>Sus Chords:</strong> Suspended 2nd or 4th</li>
                <li>• <strong>Color Tones:</strong> Added harmonic richness</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Continue Your Chord Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Chord Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand major chords, explore how they connect to other chord types and advanced harmonic concepts.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/chords/minor" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">🌙</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minor Chords</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore emotional depth and melancholic beauty in harmony.
                </p>
                <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
                  Feel the emotion →
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
                  Add rich color and jazz sophistication to your playing.
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
      </main>
      
      <Footer />
    </Layout>
  );
}