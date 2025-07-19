"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { VexTab } from '@/components/VexTab';
import Link from 'next/link';

export default function LocrianModePage() {
  return (
    <Layout>
      <Header
        title="Locrian Mode"
        subtitle="The unstable and dissonant mode - creating tension and uncertainty with its flat 2nd and flat 5th degrees."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/theory/modes" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Modal Theory
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-600 to-slate-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Locrian Mode</h1>
          <p className="text-xl opacity-90 mb-4">
            The locrian mode is the seventh mode of the major scale, creating the most unstable and dissonant 
            sound due to its flat 2nd and flat 5th degrees. Rarely used as a tonal center but powerful for creating tension.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">H-W-W-H-W-W-W</span>
            <span className="bg-white/20 px-3 py-1 rounded">7 Notes</span>
            <span className="bg-white/20 px-3 py-1 rounded">♭2 & ♭5</span>
            <span className="bg-white/20 px-3 py-1 rounded">Unstable & Tense</span>
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
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Formula:</strong> 1-♭2-♭3-4-♭5-♭6-♭7</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Intervals:</strong> H-W-W-H-W-W-W</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Key characteristics:</strong> ♭2 and ♭5 create instability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Character:</strong> Dissonant, unstable, mysterious</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Function:</strong> Tension creation, avant-garde, metal</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">B Locrian Example</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Notes:</strong> B-C-D-E-F-G-A-B</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Parent scale:</strong> C major (starting on B)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Signature sound:</strong> ♭2 (C) and ♭5 (F) create tension</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Perfect for:</strong> Metal, avant-garde, brief tension passages</span>
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
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">B Locrian - Open Position</h4>
                  <p className="text-sm text-gray-700 mb-3">Natural fingering with open strings:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q 2/5 3/5 0/4 2/4 | :q 1/4 3/4 1/3 3/3 | :q 0/2 2/2 0/1
                    `}
                    width={500}
                    scale={0.8}
                  />
                  <div className="mt-3">
                    <p className="text-xs text-gray-600 font-medium mb-1">Pattern Notes:</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Root on 5th string, 2nd fret (B)</li>
                      <li>• ♭2 interval (C) immediately above root</li>
                      <li>• ♭5 interval (F) creates tritone instability</li>
                      <li>• Difficult to establish as tonal center</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-800 mb-2">F# Locrian - 2nd Position</h4>
                  <p className="text-sm text-slate-700 mb-3">Alternative fingering pattern:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q 2/6 3/6 5/6 2/5 | :q 4/5 5/5 2/4 4/4 | :q 2/3 4/3 2/2
                    `}
                    width={500}
                    scale={0.8}
                  />
                </div>
                
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">C# Locrian - 9th Position</h4>
                  <p className="text-sm text-red-700 mb-3">Higher register application:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q 9/6 10/6 12/6 9/5 | :q 11/5 12/5 9/4 11/4 | :q 9/3 11/3 9/2
                    `}
                    width={500}
                    scale={0.8}
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Musical Applications</h3>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Metal Applications</h4>
                  <p className="text-sm text-red-700 mb-2">Creating darkness and tension:</p>
                  <ul className="text-xs text-red-600 space-y-1">
                    <li>• Brief passages over diminished chords</li>
                    <li>• Chromatic approach tones</li>
                    <li>• Dissonant harmony creation</li>
                    <li>• Atmospheric intros and interludes</li>
                    <li>• Progressive metal tension sections</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Avant-Garde & Experimental</h4>
                  <p className="text-sm text-purple-700 mb-2">Modern classical and jazz applications:</p>
                  <ul className="text-xs text-purple-600 space-y-1">
                    <li>• Free jazz improvisation</li>
                    <li>• Contemporary classical composition</li>
                    <li>• Atonal melody creation</li>
                    <li>• Sound design and texture</li>
                    <li>• Experimental rock passages</li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Harmonic Context</h4>
                  <p className="text-sm text-orange-700 mb-2">Limited but powerful applications:</p>
                  <ul className="text-xs text-orange-600 space-y-1">
                    <li>• Over half-diminished chords (m7♭5)</li>
                    <li>• Chromatic passing tones</li>
                    <li>• Tension before resolution</li>
                    <li>• Brief modal interchange</li>
                    <li>• Leading into stable modes</li>
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Rare Classical Examples</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Björk - "Army of Me"</h4>
                  <p className="text-sm text-gray-600 mb-2">Industrial rock with locrian elements</p>
                  <p className="text-xs text-gray-500">Atmospheric use of unstable intervals</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Metallica - Occasional Passages</h4>
                  <p className="text-sm text-gray-600 mb-2">Brief locrian moments in complex songs</p>
                  <p className="text-xs text-gray-500">Creates tension before resolution</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Dream Theater - Progressive Sections</h4>
                  <p className="text-sm text-gray-600 mb-2">Technical metal applications</p>
                  <p className="text-xs text-gray-500">Complex harmonic movements</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Modern Applications</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Film Scoring</h4>
                  <p className="text-sm text-gray-600 mb-2">Horror and thriller soundtracks</p>
                  <p className="text-xs text-gray-500">Creating unease and tension</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Progressive Metal</h4>
                  <p className="text-sm text-gray-600 mb-2">Tool, Meshuggah</p>
                  <p className="text-xs text-gray-500">Atmospheric tension sections</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Ambient Music</h4>
                  <p className="text-sm text-gray-600 mb-2">Dark ambient compositions</p>
                  <p className="text-xs text-gray-500">Texture and atmosphere creation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">👂 Ear Training</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Compare to natural minor</li>
                <li>• Focus on ♭2 and ♭5 intervals</li>
                <li>• Identify the unstable character</li>
                <li>• Practice tension resolution</li>
                <li>• Listen to half-diminished chords</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• Learn basic patterns slowly</li>
                <li>• Practice tension and release</li>
                <li>• Work on chromatic connections</li>
                <li>• Connect to stable modes</li>
                <li>• Use sparingly in context</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-red-700 text-sm space-y-2">
                <li>• Create brief tension passages</li>
                <li>• Practice over Bm7♭5 chords</li>
                <li>• Study metal applications</li>
                <li>• Experiment with atmosphere</li>
                <li>• Always resolve to stable modes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Exercises with VexTab */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises with Notation</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Exercise 1: B Locrian Scale</h3>
              <p className="text-gray-700 text-sm mb-3">Practice the B locrian scale - notice the instability:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :8 2/5 3/5 0/4 2/4 1/4 3/4 1/3 3/3 | :8 3/3 1/3 3/4 1/4 2/4 0/4 3/5 2/5
                `}
                width={550}
                scale={0.9}
              />
            </div>
            
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Exercise 2: Tension and Release</h3>
              <p className="text-slate-700 text-sm mb-3">Brief locrian passage resolving to natural minor:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :8 2/5 3/5 1/4 :q 2/4 | :8 2/5 4/5 0/4 :q 2/4 | :h 2/5 | :w 2/5
                `}
                width={550}
                scale={0.9}
              />
            </div>
            
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Exercise 3: Chromatic Application</h3>
              <p className="text-red-700 text-sm mb-3">Using locrian as chromatic approach:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 2/5 :8 3/5 1/4 :q 0/4 | :q 2/5 :8 3/5 1/4 :q 0/4 | :h 0/4 | :w 0/4
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Relationship to Other Scales</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Natural Minor vs Locrian</h4>
                  <p className="text-sm text-gray-600">Locrian has ♭2 and ♭5 creating instability</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Major Scale Relationship</h4>
                  <p className="text-sm text-gray-600">Seventh mode of major scale</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Modal Character</h4>
                  <p className="text-sm text-gray-600">Most dissonant mode, unstable tonal center</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Related Modes</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Phrygian</h4>
                  <p className="text-sm text-gray-600">More stable minor with ♭2 but natural 5th</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Aeolian (Natural Minor)</h4>
                  <p className="text-sm text-gray-600">Stable minor alternative</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Half-Diminished</h4>
                  <p className="text-sm text-gray-600">Works over m7♭5 chord qualities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Different Keys */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Locrian Mode in Different Keys</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">F# Locrian - 2nd Position</h3>
              <p className="text-sm text-gray-700 mb-3">Alternative key center:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 2/6 3/6 5/6 2/5 4/5 | :q 5/5 2/4 4/4 2/3 | :q 4/3 2/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-gray-600 mt-2">Notes: F#-G-A-B-C-D-E-F#</p>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">C# Locrian - 9th Position</h3>
              <p className="text-sm text-slate-700 mb-3">Higher register pattern:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 9/6 10/6 12/6 9/5 11/5 | :q 12/5 9/4 11/4 9/3 | :q 11/3 9/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-slate-600 mt-2">Notes: C#-D-E-F#-G-A-B-C#</p>
            </div>
            
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">G# Locrian - 4th Position</h3>
              <p className="text-sm text-red-700 mb-3">Metal-friendly key:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 4/6 5/6 7/6 4/5 6/5 | :q 7/5 4/4 6/4 4/3 | :q 6/3 4/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-red-600 mt-2">Notes: G#-A-B-C#-D-E-F#-G#</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">D# Locrian - 11th Position</h3>
              <p className="text-sm text-purple-700 mb-3">Upper register application:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 11/6 12/6 14/6 11/5 13/5 | :q 14/5 11/4 13/4 11/3 | :q 13/3 11/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-purple-600 mt-2">Notes: D#-E-F#-G#-A-B-C#-D#</p>
            </div>
          </div>
        </div>

        {/* Related Scales */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Scales & Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Phrygian Mode</h3>
              <p className="text-sm text-gray-700 mb-2">Similar ♭2 but stable with natural 5th</p>
              <p className="text-xs text-gray-600">More usable as tonal center</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Natural Minor</h3>
              <p className="text-sm text-gray-700 mb-2">Stable minor alternative</p>
              <p className="text-xs text-gray-600">Same root, completely different character</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Diminished Scale</h3>
              <p className="text-sm text-gray-700 mb-2">Another unstable, tension-creating scale</p>
              <p className="text-xs text-gray-600">More symmetrical pattern</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Modal Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the most unstable mode, explore more practical and stable modes to expand your musical vocabulary.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/modes/phrygian" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <span className="text-2xl">🔥</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phrygian Mode</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the exotic Spanish-flavored mode with more stability.
                </p>
                <span className="text-red-600 font-medium text-sm group-hover:text-red-700">
                  Spanish flavor →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/modes/aeolian" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                  <span className="text-2xl">🌙</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Natural Minor</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Return to the stable and emotional natural minor scale.
                </p>
                <span className="text-indigo-600 font-medium text-sm group-hover:text-indigo-700">
                  Stable minor →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/modes" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">All Modes</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore all seven modes of the major scale.
                </p>
                <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
                  Complete journey →
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
