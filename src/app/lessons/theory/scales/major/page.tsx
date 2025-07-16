"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { VexTab } from '@/components/VexTab';
import Link from 'next/link';

export default function MajorScalePage() {
  return (
    <Layout>
      <Header
        title="Major Scale"
        subtitle="The foundation of Western music - a bright, happy-sounding scale that serves as the cornerstone for understanding all other scales and harmony."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/theory/scales" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Scale Theory
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Major Scale</h1>
          <p className="text-xl opacity-90 mb-4">
            The major scale is the most fundamental scale in Western music, creating a bright, happy, 
            and uplifting sound that forms the foundation for countless songs across all genres.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">W-W-H-W-W-W-H</span>
            <span className="bg-white/20 px-3 py-1 rounded">7 Notes</span>
            <span className="bg-white/20 px-3 py-1 rounded">Bright & Happy</span>
            <span className="bg-white/20 px-3 py-1 rounded">Foundation Scale</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Scale Properties</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Formula:</strong> W-W-H-W-W-W-H</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Intervals:</strong> 1-2-3-4-5-6-7-8</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Semitones:</strong> 2-2-1-2-2-2-1</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Character:</strong> Bright, happy, resolved</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Function:</strong> Foundation for all music theory</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">C Major Example</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Notes:</strong> C-D-E-F-G-A-B-C</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>No accidentals:</strong> All natural notes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Half steps:</strong> E-F and B-C</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span><strong>Reference key:</strong> Starting point for all other keys</span>
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Fretboard Patterns</h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">C Major Scale - Open Position</h4>
                  <p className="text-sm text-yellow-700 mb-3">Starting position for beginners:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q 3/5 0/4 2/4 3/4 | :q 0/3 2/3 0/2 1/2 | :q 3/2 1/2 0/2 2/3 | :q 0/3 3/4 2/4 0/4 3/5
                    `}
                    width={500}
                    scale={0.8}
                  />
                  <div className="mt-3">
                    <p className="text-xs text-yellow-600 font-medium mb-1">Fingering Notes:</p>
                    <ul className="text-xs text-yellow-600 space-y-1">
                      <li>• Start with C on 5th string, 3rd fret</li>
                      <li>• Use open strings for D and G</li>
                      <li>• E-F is the natural half step</li>
                      <li>• B-C is the other natural half step</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-2">Alternative Pattern - 2nd Position</h4>
                  <p className="text-sm text-amber-700 mb-3">Higher position pattern:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q 3/5 5/5 2/4 3/4 | :q 5/4 2/3 4/3 1/2 | :q 3/2 4/3 2/3 5/4 | :q 3/4 2/4 5/5 3/5
                    `}
                    width={500}
                    scale={0.8}
                  />
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Complete Scale Pattern</h4>
                  <p className="text-sm text-green-700 mb-3">Two-octave major scale:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :8 3/5 5/5 2/4 3/4 5/4 2/3 4/3 1/2 | :8 3/2 5/2 7/2 8/2 10/2 7/1 8/1 10/1
                    `}
                    width={500}
                    scale={0.8}
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Harmonic Applications</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Diatonic Chords</h4>
                  <p className="text-sm text-blue-700 mb-2">Chords built from the major scale:</p>
                  <ul className="text-xs text-blue-600 space-y-1">
                    <li>• I: C major (C-E-G)</li>
                    <li>• ii: D minor (D-F-A)</li>
                    <li>• iii: E minor (E-G-B)</li>
                    <li>• IV: F major (F-A-C)</li>
                    <li>• V: G major (G-B-D)</li>
                    <li>• vi: A minor (A-C-E)</li>
                    <li>• vii°: B diminished (B-D-F)</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Scale Degrees</h4>
                  <p className="text-sm text-green-700 mb-2">Functional roles of each degree:</p>
                  <ul className="text-xs text-green-600 space-y-1">
                    <li>• 1st (Tonic): Home base, resolution</li>
                    <li>• 2nd (Supertonic): Mild tension</li>
                    <li>• 3rd (Mediant): Major quality</li>
                    <li>• 4th (Subdominant): Departure</li>
                    <li>• 5th (Dominant): Strong pull home</li>
                    <li>• 6th (Submediant): Relative minor</li>
                    <li>• 7th (Leading tone): Resolves up</li>
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Classic Examples</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Do-Re-Mi" - The Sound of Music</h4>
                  <p className="text-sm text-gray-600 mb-2">Famous demonstration of the major scale</p>
                  <p className="text-xs text-gray-500">Each note of the scale given a memorable syllable</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Happy Birthday"</h4>
                  <p className="text-sm text-gray-600 mb-2">Uses simple major scale intervals</p>
                  <p className="text-xs text-gray-500">Perfect example of major scale melody</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Classical Compositions</h4>
                  <p className="text-sm text-gray-600 mb-2">Mozart, Bach, and Beethoven masterworks</p>
                  <p className="text-xs text-gray-500">Foundation of Western classical tradition</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Modern Applications</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Pop Music</h4>
                  <p className="text-sm text-gray-600 mb-2">Bright, catchy melodies and progressions</p>
                  <p className="text-xs text-gray-500">I-V-vi-IV progression everywhere</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Country Music</h4>
                  <p className="text-sm text-gray-600 mb-2">Optimistic, uplifting character</p>
                  <p className="text-xs text-gray-500">Major pentatonic scales common</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Jazz Standards</h4>
                  <p className="text-sm text-gray-600 mb-2">Starting point for improvisation</p>
                  <p className="text-xs text-gray-500">Foundation for modes and extensions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">👂 Ear Training</h3>
              <ul className="text-yellow-700 text-sm space-y-2">
                <li>• Sing "Do-Re-Mi" scale patterns</li>
                <li>• Identify scale degrees by ear</li>
                <li>• Practice interval recognition</li>
                <li>• Listen to major vs minor scales</li>
                <li>• Recognize major key progressions</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• Practice all five CAGED positions</li>
                <li>• Work on smooth position shifts</li>
                <li>• Practice with metronome</li>
                <li>• Play ascending and descending</li>
                <li>• Learn in different keys</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• Improvise over major progressions</li>
                <li>• Create melodies using scale tones</li>
                <li>• Practice major scale sequences</li>
                <li>• Learn songs in major keys</li>
                <li>• Study classical etudes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Exercises with VexTab */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises with Notation</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Exercise 1: Scale Practice</h3>
              <p className="text-blue-700 text-sm mb-3">Practice the C major scale ascending and descending:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :8 3/5 5/5 2/4 3/4 5/4 2/3 4/3 1/2 | :8 3/2 1/2 4/3 2/3 5/4 3/4 2/4 5/5 3/5
                `}
                width={550}
                scale={0.9}
              />
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Exercise 2: Interval Practice</h3>
              <p className="text-green-700 text-sm mb-3">Practice thirds, fifths, and sevenths from C:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 3/5 2/4 3/5 5/4 | :q 3/5 2/3 3/5 1/2 | :q 3/5 4/3 3/5 3/2
                `}
                width={550}
                scale={0.9}
              />
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Common Progressions</h3>
              <p className="text-purple-700 text-sm mb-3">I-V-vi-IV progression (C-G-Am-F):</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :w (3/5.0/4.1/3) | :w (3/6.0/4.0/3) | :w (0/5.2/4.3/3) | :w (1/6.3/5.3/4)
                `}
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Relative & Parallel Relationships</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Relative Minor</h4>
                  <p className="text-sm text-gray-600">C major = A minor (same notes, different starting point)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Parallel Minor</h4>
                  <p className="text-sm text-gray-600">C major = C minor (same root, different intervals)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Circle of Fifths</h4>
                  <p className="text-sm text-gray-600">Key relationships and accidental patterns</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Modal Derivatives</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Seven Modes</h4>
                  <p className="text-sm text-gray-600">Major scale starting from different degrees</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Common Modes</h4>
                  <p className="text-sm text-gray-600">Dorian, Mixolydian most used in popular music</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Pentatonic Extraction</h4>
                  <p className="text-sm text-gray-600">Major pentatonic uses 1-2-3-5-6 of major scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Different Keys */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Major Scale in Different Keys</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">G Major Scale - Open Position</h3>
              <p className="text-sm text-green-700 mb-3">One sharp (F#) - great for beginners:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 3/6 0/5 2/5 3/5 | :q 0/4 2/4 0/3 2/3 | :q 3/3 2/3 0/3 2/4 | :q 0/4 3/5 2/5 0/5 3/6
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-green-600 mt-2">Notes: G-A-B-C-D-E-F#-G</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">D Major Scale - Open Position</h3>
              <p className="text-sm text-blue-700 mb-3">Two sharps (F#, C#) - bright sound:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 0/4 2/4 4/4 0/3 | :q 2/3 4/3 1/2 3/2 | :q 4/3 2/3 0/3 4/4 | :q 2/4 0/4
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-blue-600 mt-2">Notes: D-E-F#-G-A-B-C#-D</p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">F Major Scale - Open Position</h3>
              <p className="text-sm text-orange-700 mb-3">One flat (Bb) - warm tone:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 1/6 3/6 0/5 1/5 | :q 3/5 0/4 2/4 3/4 | :q 2/4 0/4 3/5 1/5 | :q 0/5 3/6 1/6
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-orange-600 mt-2">Notes: F-G-A-Bb-C-D-E-F</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">A Major Scale - Open Position</h3>
              <p className="text-sm text-purple-700 mb-3">Three sharps (F#, C#, G#) - bright key:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 0/5 2/5 4/5 2/4 | :q 4/4 1/3 2/3 4/3 | :q 2/3 1/3 4/4 2/4 | :q 4/5 2/5 0/5
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-purple-600 mt-2">Notes: A-B-C#-D-E-F#-G#-A</p>
            </div>
          </div>
        </div>

        {/* Related Scales */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Scales & Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Natural Minor</h3>
              <p className="text-sm text-blue-700 mb-2">♭3, ♭6, ♭7 - darker, sadder quality</p>
              <p className="text-xs text-blue-600">Relative minor shares same notes</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Major Pentatonic</h3>
              <p className="text-sm text-green-700 mb-2">5-note subset - removes 4th and 7th</p>
              <p className="text-xs text-green-600">Easier to use, always sounds good</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Mixolydian Mode</h3>
              <p className="text-sm text-purple-700 mb-2">Major scale with ♭7 - bluesy quality</p>
              <p className="text-xs text-purple-600">Dominant chord scale, rock/blues favorite</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-yellow-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Scale Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the major scale, explore its relationships with other scales and modes.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/scales/minor" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">🌙</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Natural Minor</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the emotional counterpart to the major scale's brightness.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Feel the contrast →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/scales/major-pentatonic" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Major Pentatonic</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Simplify the major scale to its most essential and usable notes.
                </p>
                <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                  Simplify & apply →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/scales/dorian" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dorian Mode</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Discover the first mode derived from the major scale pattern.
                </p>
                <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
                  Explore modes →
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

