"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { VexTab } from '@/components/VexTab';
import Link from 'next/link';

export default function PhrygianModePage() {
  return (
    <Layout>
      <Header
        title="Phrygian Mode"
        subtitle="The exotic and Spanish-flavored mode - creating dark, mysterious atmospheres with its distinctive flat 2nd degree."
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
        <div className="bg-gradient-to-r from-red-600 to-orange-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Phrygian Mode</h1>
          <p className="text-xl opacity-90 mb-4">
            The phrygian mode is the third mode of the major scale, creating an exotic, Spanish-flavored sound with its 
            characteristic flat 2nd degree. This creates a dark, mysterious quality perfect for flamenco, metal, and Mediterranean music.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">H-W-W-W-H-W-W</span>
            <span className="bg-white/20 px-3 py-1 rounded">7 Notes</span>
            <span className="bg-white/20 px-3 py-1 rounded">♭2 (Flat 2nd)</span>
            <span className="bg-white/20 px-3 py-1 rounded">Exotic & Spanish</span>
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
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Formula:</strong> 1-♭2-♭3-4-5-♭6-♭7</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Intervals:</strong> H-W-W-W-H-W-W</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Key characteristic:</strong> ♭2 creates exotic, Spanish flavor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Character:</strong> Dark, exotic, mysterious, Spanish</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Function:</strong> Flamenco, metal, Mediterranean, exotic</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">E Phrygian Example</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Notes:</strong> E-F-G-A-B-C-D-E</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Parent scale:</strong> C major (starting on E)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Signature sound:</strong> F natural (♭2) creates exotic character</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Perfect for:</strong> Flamenco, metal, Middle Eastern music</span>
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
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">E Phrygian - Open Position</h4>
                  <p className="text-sm text-red-700 mb-3">Natural fingering emphasizing ♭2:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q 0/6 1/6 3/6 0/5 2/5 | :q 0/4 2/4 0/3 2/3 0/2 | :q 1/2 3/2
                    `}
                    width={500}
                    scale={0.8}
                  />
                  <div className="mt-3">
                    <p className="text-xs text-red-600 font-medium mb-1">Pattern Notes:</p>
                    <ul className="text-xs text-red-600 space-y-1">
                      <li>• Root on 6th string, open (E)</li>
                      <li>• ♭2 interval (F) on 6th string, 1st fret</li>
                      <li>• Creates semitone step above root</li>
                      <li>• Perfect for flamenco and Spanish styles</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">A Phrygian - 5th Position</h4>
                  <p className="text-sm text-orange-700 mb-3">Alternative fingering pattern:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q 5/6 6/6 8/6 5/5 7/5 | :q 5/4 7/4 5/3 7/3 5/2 | :q 6/2 8/2
                    `}
                    width={500}
                    scale={0.8}
                  />
                </div>
                
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-2">B Phrygian - 7th Position</h4>
                  <p className="text-sm text-amber-700 mb-3">Higher register application:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q 7/6 8/6 10/6 7/5 9/5 | :q 7/4 9/4 7/3 9/3 7/2 | :q 8/2 10/2
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
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Flamenco & Spanish Guitar</h4>
                  <p className="text-sm text-yellow-700 mb-2">Traditional and modern Spanish styles:</p>
                  <ul className="text-xs text-yellow-600 space-y-1">
                    <li>• Flamenco falsetas and solos</li>
                    <li>• Spanish classical guitar compositions</li>
                    <li>• Rumba and Latin guitar styles</li>
                    <li>• Gypsy jazz and Nouveau Flamenco</li>
                    <li>• Mediterranean folk traditions</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Metal & Heavy Music</h4>
                  <p className="text-sm text-gray-700 mb-2">Dark and heavy applications:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Death metal and black metal</li>
                    <li>• Doom metal atmospheric sections</li>
                    <li>• Progressive metal passages</li>
                    <li>• Thrash metal exotic riffs</li>
                    <li>• Gothic and dark ambient music</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Harmonic Context</h4>
                  <p className="text-sm text-purple-700 mb-2">Best chord progressions for phrygian:</p>
                  <ul className="text-xs text-purple-600 space-y-1">
                    <li>• i-♭II progressions (Em-F)</li>
                    <li>• i-♭II-i vamps and ostinatos</li>
                    <li>• Phrygian dominant applications</li>
                    <li>• Modal interchange with harmonic minor</li>
                    <li>• Spanish cadences and resolutions</li>
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Classical & Traditional</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Traditional Flamenco - Paco de Lucía</h4>
                  <p className="text-sm text-gray-600 mb-2">Authentic Spanish phrygian usage</p>
                  <p className="text-xs text-gray-500">Master of phrygian in flamenco context</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Asturias" - Isaac Albéniz</h4>
                  <p className="text-sm text-gray-600 mb-2">Classical Spanish composition</p>
                  <p className="text-xs text-gray-500">Perfect example of phrygian in classical music</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Middle Eastern Traditional Music</h4>
                  <p className="text-sm text-gray-600 mb-2">Ancient modal traditions</p>
                  <p className="text-xs text-gray-500">Historical use of phrygian-type scales</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Modern & Metal</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Metallica - "Creeping Death"</h4>
                  <p className="text-sm text-gray-600 mb-2">Thrash metal with phrygian elements</p>
                  <p className="text-xs text-gray-500">Dark, exotic riff passages</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Sepultura - "Roots Bloody Roots"</h4>
                  <p className="text-sm text-gray-600 mb-2">Brazilian metal with exotic scales</p>
                  <p className="text-xs text-gray-500">Modern phrygian in heavy context</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Tool - Progressive Sections</h4>
                  <p className="text-sm text-gray-600 mb-2">Dark progressive metal passages</p>
                  <p className="text-xs text-gray-500">Atmospheric phrygian applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">👂 Ear Training</h3>
              <ul className="text-red-700 text-sm space-y-2">
                <li>• Compare to natural minor</li>
                <li>• Focus on the ♭2 interval</li>
                <li>• Identify the Spanish character</li>
                <li>• Practice semitone relationships</li>
                <li>• Listen to flamenco examples</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-orange-700 text-sm space-y-2">
                <li>• Master all positions</li>
                <li>• Emphasize the ♭2 degree</li>
                <li>• Practice Spanish-style tremolo</li>
                <li>• Work on exotic phrasing</li>
                <li>• Connect to phrygian chords</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-amber-700 text-sm space-y-2">
                <li>• Create Spanish-flavored pieces</li>
                <li>• Practice over Em-F progressions</li>
                <li>• Study flamenco techniques</li>
                <li>• Experiment with metal riffs</li>
                <li>• Practice modal chord progressions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Exercises with VexTab */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises with Notation</h2>
          <div className="space-y-6">
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Exercise 1: E Phrygian Scale</h3>
              <p className="text-red-700 text-sm mb-3">Practice the E phrygian scale - feel the ♭2 interval:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :8 0/6 1/6 3/6 0/5 2/5 0/4 2/4 0/3 | :8 0/3 2/4 0/4 2/5 0/5 3/6 1/6 0/6
                `}
                width={550}
                scale={0.9}
              />
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Exercise 2: Spanish Sequences</h3>
              <p className="text-orange-700 text-sm mb-3">Practice phrygian in Spanish-style patterns:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :8 0/6 3/6 1/6 0/5 3/6 2/5 0/5 0/4 | :8 2/5 2/4 0/4 0/3 2/4 2/3 0/3 0/2
                `}
                width={550}
                scale={0.9}
              />
            </div>
            
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">Exercise 3: Exotic Melody</h3>
              <p className="text-amber-700 text-sm mb-3">Simple Spanish-flavored phrase emphasizing ♭2:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 0/6 1/6 :h 3/6 :q 0/5 | :q 2/5 0/4 :h 2/4 | :q 1/6 0/6 :h 2/5 | :q 0/6 :w 0/6
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
                  <h4 className="font-semibold text-gray-800">Natural Minor vs Phrygian</h4>
                  <p className="text-sm text-gray-600">Phrygian has ♭2 creating exotic, Spanish flavor</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Major Scale Relationship</h4>
                  <p className="text-sm text-gray-600">Third mode of major scale</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Modal Character</h4>
                  <p className="text-sm text-gray-600">Dark minor with exotic semitone step</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Related Modes</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Aeolian (Natural Minor)</h4>
                  <p className="text-sm text-gray-600">More stable minor with natural 2nd</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Harmonic Minor</h4>
                  <p className="text-sm text-gray-600">Related exotic scale with raised 7th</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Phrygian Dominant</h4>
                  <p className="text-sm text-gray-600">Phrygian with major 3rd, very Spanish</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Different Keys */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Phrygian Mode in Different Keys</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">A Phrygian - 5th Position</h3>
              <p className="text-sm text-green-700 mb-3">Common metal key:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 5/6 6/6 8/6 5/5 7/5 | :q 5/4 7/4 5/3 7/3 5/2 | :q 6/2 8/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-green-600 mt-2">Notes: A-B♭-C-D-E-F-G-A</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">D Phrygian - 10th Position</h3>
              <p className="text-sm text-blue-700 mb-3">Higher register pattern:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 10/6 11/6 13/6 10/5 12/5 | :q 10/4 12/4 10/3 12/3 10/2 | :q 11/2 13/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-blue-600 mt-2">Notes: D-E♭-F-G-A-B♭-C-D</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">F# Phrygian - 2nd Position</h3>
              <p className="text-sm text-purple-700 mb-3">Alternative fingering:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 2/6 3/6 5/6 2/5 4/5 | :q 2/4 4/4 2/3 4/3 2/2 | :q 3/2 5/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-purple-600 mt-2">Notes: F#-G-A-B-C#-D-E-F#</p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">B Phrygian - 7th Position</h3>
              <p className="text-sm text-orange-700 mb-3">Metal-friendly position:</p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 7/6 8/6 10/6 7/5 9/5 | :q 7/4 9/4 7/3 9/3 7/2 | :q 8/2 10/2
                `}
                width={500}
                scale={0.8}
              />
              <p className="text-xs text-orange-600 mt-2">Notes: B-C-D-E-F#-G-A-B</p>
            </div>
          </div>
        </div>

        {/* Related Scales */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Scales & Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Natural Minor</h3>
              <p className="text-sm text-gray-700 mb-2">Same as phrygian but with natural 2nd</p>
              <p className="text-xs text-gray-600">More stable, less exotic sound</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Harmonic Minor</h3>
              <p className="text-sm text-gray-700 mb-2">Another exotic minor scale</p>
              <p className="text-xs text-gray-600">With raised 7th for classical sound</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Hungarian Minor</h3>
              <p className="text-sm text-gray-700 mb-2">Even more exotic with #4</p>
              <p className="text-xs text-gray-600">Combines phrygian with lydian elements</p>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Modal Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the exotic phrygian mode, explore other modes to expand your palette of musical colors and cultural flavors.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/modes/aeolian" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                  <span className="text-2xl">🌙</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Aeolian (Natural Minor)</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Compare with the stable natural minor scale.
                </p>
                <span className="text-indigo-600 font-medium text-sm group-hover:text-indigo-700">
                  Stable foundation →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/modes/dorian" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <span className="text-2xl">🎷</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dorian Mode</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the sophisticated, jazzy minor mode.
                </p>
                <span className="text-teal-600 font-medium text-sm group-hover:text-teal-700">
                  Jazz sophistication →
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
