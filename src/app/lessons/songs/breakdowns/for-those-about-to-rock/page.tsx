"use client";

import React from "react";
import Link from "next/link";
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SimpleFretboardDiagram from "@/components/SimpleFretboardDiagram";
import { VexTab } from '@/components/VexTab';

export default function ForThoseAboutToRockBreakdown() {
  return (
    <Layout>
      <Header
        title="&quot;For Those About to Rock (We Salute You)&quot; - Complete Song Analysis"
        subtitle="Professional breakdown of AC/DC's anthemic masterpiece with theory, technique, and equipment analysis"
      />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8 text-sm">
          <Link href="/lessons/songs/breakdowns" className="text-cyan-600 hover:text-cyan-800">
            ← Back to Song Breakdowns
          </Link>
        </nav>

        {/* Song Header */}
        <section className="mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">For Those About to Rock (We Salute You)</h1>
              <div className="space-y-2 text-gray-700">
                <p><strong>Artist:</strong> AC/DC</p>
                <p><strong>Album:</strong> For Those About to Rock We Salute You</p>
                <p><strong>Released:</strong> 1981</p>
                <p><strong>Genre:</strong> Hard Rock / Heavy Metal</p>
                <p><strong>Tempo:</strong> 116 BPM</p>
                <p><strong>Duration:</strong> 5:44</p>
                <p><strong>Key:</strong> E major</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-orange-200">
              <h2 className="font-semibold text-gray-800 mb-3">Difficulty Analysis</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Overall Difficulty:</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full">Intermediate</span>
                </div>
                <div className="flex justify-between">
                  <span>Rhythm Guitar:</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Beginner+</span>
                </div>
                <div className="flex justify-between">
                  <span>Lead Guitar:</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full">Intermediate</span>
                </div>
                <div className="flex justify-between">
                  <span>Theory Complexity:</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Basic</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Musical Analysis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Key & Scale Analysis */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Key & Scale Structure</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-blue-800 font-medium">Primary Key: E Major</p>
                  <p className="text-blue-700">Classic major key with occasional blues inflections</p>
                </div>
                <div>
                  <p className="text-blue-800 font-medium">Scales Used:</p>
                  <ul className="text-blue-700 space-y-1">
                    <li>• E Major Scale (E-F#-G#-A-B-C#-D#)</li>
                    <li>• E Blues Scale (E-G-A-Bb-B-D)</li>
                    <li>• E Minor Pentatonic (for solo sections)</li>
                    <li>• A Major (relative key for chorus)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-blue-800 font-medium">Modal Character:</p>
                  <p className="text-blue-700">Primarily Ionian (major) with blues scale passages in solos</p>
                </div>
              </div>
              <div className="mt-4">
                <Link href="/lessons/songs/scales/major-scale" className="text-blue-600 hover:text-blue-800 text-sm">
                  → Learn Major Scale Theory
                </Link>
              </div>
            </div>

            {/* Chord Progression Analysis */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Chord Progressions</h3>
              
              {/* Main Progression with Diagrams */}
              <div className="mb-6">
                <p className="text-green-800 font-medium mb-3">Main Progression: E5 - A5 - B5 - E5</p>
                <p className="text-green-700 text-sm mb-4">I - IV - V - I (classic major key progression)</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <h5 className="font-medium text-sm mb-2">E5 (I)</h5>
                    <SimpleFretboardDiagram chord="E5" />
                    <p className="text-xs text-green-600 mt-1">Tonic</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-medium text-sm mb-2">A5 (IV)</h5>
                    <SimpleFretboardDiagram chord="A5" />
                    <p className="text-xs text-green-600 mt-1">Subdominant</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-medium text-sm mb-2">B5 (V)</h5>
                    <SimpleFretboardDiagram chord="B5" />
                    <p className="text-xs text-green-600 mt-1">Dominant</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-medium text-sm mb-2">E5 (I)</h5>
                    <SimpleFretboardDiagram chord="E5" />
                    <p className="text-xs text-green-600 mt-1">Resolution</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-green-800 font-medium">Verse: E5 - A5 - E5 - B5</p>
                  <p className="text-green-700">Modified I-IV-I-V creates tension without resolution</p>
                </div>
                <div>
                  <p className="text-green-800 font-medium">Chorus: E5 - A5 - B5 - E5</p>
                  <p className="text-green-700">Complete I-IV-V-I provides satisfying resolution</p>
                </div>
                <div>
                  <p className="text-green-800 font-medium">Bridge: C5 - G5 - D5 - A5</p>
                  <p className="text-green-700">♭VI - ♭III - ♭VII - IV (borrowed from parallel minor)</p>
                </div>
                <div>
                  <p className="text-green-800 font-medium">Function Analysis:</p>
                  <ul className="text-green-700 space-y-1">
                    <li>• Classic rock I-IV-V foundation</li>
                    <li>• Strong tonal center on E</li>
                    <li>• Power chords maintain driving energy</li>
                    <li>• Simple but effective harmonic rhythm</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <Link href="/lessons/songs/progressions/major-progressions" className="text-green-600 hover:text-green-800 text-sm">
                  → Explore Major Key Progressions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technique Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Playing Techniques</h2>
          
          {/* Main Riff */}
          <div className="bg-white rounded-xl p-6 shadow-sm border mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Main Riff Pattern</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Iconic Opening Riff</h4>
                  <p className="text-sm text-yellow-700 mb-3">E5 - A5 - B5 progression with signature rhythm:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q (0/6.2/5) | :q (0/5.2/4) | :q (2/5.4/4) | :qr
                    `}
                    width={500}
                    scale={0.8}
                  />
                  <div className="mt-3">
                    <p className="text-xs text-yellow-600 font-medium mb-1">Playing Notes:</p>
                    <ul className="text-xs text-yellow-600 space-y-1">
                      <li>• E5: Open E + 2nd fret A string</li>
                      <li>• A5: Open A + 2nd fret D string</li>
                      <li>• B5: 2nd fret A + 4th fret D string</li>
                      <li>• Strong downstrokes on each chord</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p><strong>Pattern:</strong> I-IV-V power chord progression</p>
                  <p><strong>Rhythm:</strong> Quarter notes with strong accents</p>
                </div>
                
                {/* Power Chord Diagrams */}
                <div className="mt-6">
                  <h4 className="font-medium text-gray-700 mb-3">Power Chord Shapes:</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <h5 className="font-medium text-xs mb-2">E5</h5>
                      <SimpleFretboardDiagram chord="E5" />
                      <p className="text-xs text-gray-500 mt-1">Open position</p>
                    </div>
                    <div className="text-center">
                      <h5 className="font-medium text-xs mb-2">A5</h5>
                      <SimpleFretboardDiagram chord="A5" />
                      <p className="text-xs text-gray-500 mt-1">5th string root</p>
                    </div>
                    <div className="text-center">
                      <h5 className="font-medium text-xs mb-2">B5</h5>
                      <SimpleFretboardDiagram chord="B5" />
                      <p className="text-xs text-gray-500 mt-1">2nd fret barre</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-700">Picking Technique:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Primary: Heavy downstrokes for maximum impact</li>
                    <li>• Consistent attack for driving rhythm</li>
                    <li>• Let chords ring for full sustain</li>
                    <li>• Emphasis on beats 1 and 3</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">AC/DC Style Notes:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Malcolm Young's rhythm guitar approach</li>
                    <li>• Clean but aggressive tone</li>
                    <li>• Minimal effects, maximum groove</li>
                    <li>• Pocket playing with drummer</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Chord Voicing:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• E5: Root (E) and fifth (B)</li>
                    <li>• A5: Root (A) and fifth (E)</li>
                    <li>• B5: Root (B) and fifth (F#)</li>
                    <li>• Optional octave doubling for thickness</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Rhythm Guitar Tips:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Lock in with bass drum hits</li>
                    <li>• Consistent dynamics throughout</li>
                    <li>• Clear chord changes, no sloppiness</li>
                    <li>• Think groove over speed</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/lessons/songs/techniques/power-chords" className="text-cyan-600 hover:text-cyan-800 text-sm">
                → Master Power Chord Techniques
              </Link>
            </div>
          </div>

          {/* Lead Guitar Techniques */}
          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <h3 className="text-xl font-semibold text-red-900 mb-4">Lead Guitar Analysis</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="bg-red-100 rounded-lg p-4 border border-red-300">
                  <h4 className="font-semibold text-red-800 mb-2">Angus Young's Solo Style</h4>
                  <p className="text-sm text-red-700 mb-3">E blues scale with major pentatonic mixing:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :8 12/1 15/1 | :8 12/1 14/1 | :8 12/2 14/2 | :8 12/2 15/2
                    `}
                    width={500}
                    scale={0.8}
                  />
                  <div className="mt-3">
                    <p className="text-xs text-red-600 font-medium mb-1">Solo Techniques:</p>
                    <ul className="text-xs text-red-600 space-y-1">
                      <li>• 12th fret area (box pattern)</li>
                      <li>• String bending and vibrato</li>
                      <li>• Fast alternate picking runs</li>
                      <li>• Blues scale over major progression</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-red-800 font-medium">Angus Young Signature Elements</p>
                <ul className="text-red-700 space-y-1">
                  <li>• Gibson SG guitar for thin, cutting tone</li>
                  <li>• High gain Marshall amplification</li>
                  <li>• E minor pentatonic as foundation</li>
                  <li>• Fast, melodic runs with blues feeling</li>
                  <li>• Expressive string bending and vibrato</li>
                  <li>• Chuck Berry influenced licks</li>
                </ul>
                <div className="mt-3">
                  <Link href="/lessons/songs/techniques/lead-guitar" className="text-red-600 hover:text-red-800 text-sm">
                    → Lead Guitar Techniques
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment & Tone */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Equipment & Tone Analysis</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Guitar Setup */}
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">🎸 Guitar Setup</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-amber-800 font-medium">Malcolm Young (Rhythm):</p>
                  <ul className="text-amber-700 space-y-1">
                    <li>• Gretsch G6120 (signature sound)</li>
                    <li>• Sometimes Gibson SG</li>
                    <li>• Standard tuning (E-A-D-G-B-E)</li>
                    <li>• Heavy gauge strings for chunk</li>
                  </ul>
                </div>
                <div>
                  <p className="text-amber-800 font-medium">Angus Young (Lead):</p>
                  <ul className="text-amber-700 space-y-1">
                    <li>• Gibson SG Standard</li>
                    <li>• Humbucker pickups</li>
                    <li>• Bridge pickup primarily</li>
                    <li>• Light gauge strings for bending</li>
                  </ul>
                </div>
                <div>
                  <p className="text-amber-800 font-medium">Alternative Guitars:</p>
                  <ul className="text-amber-700 space-y-1">
                    <li>• Gibson Les Paul</li>
                    <li>• Epiphone SG</li>
                    <li>• Any humbucker-equipped guitar</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <Link href="/lessons/songs/gear/acdc-guitar-tones" className="text-amber-600 hover:text-amber-800 text-sm">
                    → AC/DC Guitar Tone Guide
                  </Link>
                </div>
              </div>
            </div>

            {/* Amplifier */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-semibold text-red-900 mb-4">🔊 Amplifier</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-red-800 font-medium">Classic AC/DC Tone:</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• Marshall Super Lead (Plexi era)</li>
                    <li>• Marshall JTM45/100</li>
                    <li>• Cranked but not overly saturated</li>
                    <li>• Clear, punchy midrange</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-800 font-medium">Settings Guide:</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• Gain: 6-7/10 (moderate crunch)</li>
                    <li>• Bass: 7/10</li>
                    <li>• Mids: 8/10 (key to AC/DC tone)</li>
                    <li>• Treble: 7/10</li>
                    <li>• Presence: 6/10</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-800 font-medium">Modern Alternatives:</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• Marshall JCM800</li>
                    <li>• Orange OR15/30</li>
                    <li>• Friedman BE-OD pedal</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <Link href="/lessons/songs/gear/marshall-tones" className="text-red-600 hover:text-red-800 text-sm">
                    → Marshall Amp Settings
                  </Link>
                </div>
              </div>
            </div>

            {/* Effects */}
            <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
              <h3 className="text-xl font-semibold text-cyan-900 mb-4">🎛️ Effects Chain</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-cyan-800 font-medium">Minimal Effects Philosophy:</p>
                  <ul className="text-cyan-700 space-y-1">
                    <li>• Guitar straight into amp</li>
                    <li>• No pedals on rhythm guitar</li>
                    <li>• Amp distortion only</li>
                    <li>• Pure, unadulterated tone</li>
                  </ul>
                </div>
                <div>
                  <p className="text-cyan-800 font-medium">Lead Guitar Additions:</p>
                  <ul className="text-cyan-700 space-y-1">
                    <li>• Occasional wah pedal</li>
                    <li>• Light reverb from amp</li>
                    <li>• No delay or modulation</li>
                    <li>• Focus on playing, not effects</li>
                  </ul>
                </div>
                <div>
                  <p className="text-cyan-800 font-medium">Signal Chain (Simple):</p>
                  <p className="text-cyan-700 text-xs font-mono">
                    Guitar → Cable → Amp → Speaker Cabinet
                  </p>
                </div>
                <div>
                  <p className="text-cyan-800 font-medium">Modern Recreations:</p>
                  <ul className="text-cyan-700 space-y-1">
                    <li>• Marshall Plexi-style overdrive</li>
                    <li>• Boss Blues Driver (light setting)</li>
                    <li>• Catalinbread Dirty Little Secret</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <Link href="/lessons/songs/effects/classic-rock-tones" className="text-cyan-600 hover:text-cyan-800 text-sm">
                    → Classic Rock Tone Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Song Structure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Song Structure Analysis</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Timeline Structure</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">0:00-0:15</span>
                    <span>Intro Riff</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">0:15-0:45</span>
                    <span>Verse 1</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">0:45-1:15</span>
                    <span>Chorus 1</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">1:15-1:45</span>
                    <span>Verse 2</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">1:45-2:15</span>
                    <span>Chorus 2</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">2:15-3:45</span>
                    <span>Guitar Solo</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">3:45-4:15</span>
                    <span>Bridge</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">4:15-5:44</span>
                    <span>Final Chorus/Outro</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Arrangement Notes</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <p className="font-medium text-gray-800">Dynamic Build:</p>
                    <p>Song builds from simple riff to full band anthemic chorus with crowd participation</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Guitar Arrangement:</p>
                    <ul className="space-y-1">
                      <li>• Malcolm: Driving rhythm guitar throughout</li>
                      <li>• Angus: Lead fills and extended solo section</li>
                      <li>• Dual guitar harmony in chorus</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Iconic Elements:</p>
                    <ul className="space-y-1">
                      <li>• Cannon sound effects</li>
                      <li>• Crowd chant sections</li>
                      <li>• Extended guitar solo showcase</li>
                      <li>• Anthemic sing-along chorus</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Production Style:</p>
                    <p>Clear, powerful mix with emphasis on guitar clarity and punch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Path & Difficulty Progression</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Beginner Level */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-4">🟢 Beginner Level</h3>
              <div className="space-y-3 text-sm">
                <p className="text-green-800 font-medium">Start Here:</p>
                <ul className="text-green-700 space-y-1">
                  <li>• Learn basic E5, A5, B5 power chords</li>
                  <li>• Practice chord changes slowly</li>
                  <li>• Work on consistent downstrokes</li>
                  <li>• Play along with slower backing tracks</li>
                </ul>
                <p className="text-green-800 font-medium mt-3">Prerequisites:</p>
                <ul className="text-green-700 space-y-1">
                  <li>• Basic power chord knowledge</li>
                  <li>• Simple strumming patterns</li>
                  <li>• Basic rhythm keeping</li>
                </ul>
                <div className="mt-3">
                  <Link href="/lessons/songs/techniques/basic-chords" className="text-green-600 hover:text-green-800 text-sm">
                    → Basic Chord Lessons
                  </Link>
                </div>
              </div>
            </div>

            {/* Intermediate Level */}
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">🟡 Intermediate Level</h3>
              <div className="space-y-3 text-sm">
                <p className="text-orange-800 font-medium">Building Skills:</p>
                <ul className="text-orange-700 space-y-1">
                  <li>• Master the complete chord progression</li>
                  <li>• Add rhythmic variations and accents</li>
                  <li>• Learn basic lead guitar fills</li>
                  <li>• Work on tone and dynamics</li>
                </ul>
                <p className="text-orange-800 font-medium mt-3">Focus Areas:</p>
                <ul className="text-orange-700 space-y-1">
                  <li>• Tight rhythm guitar playing</li>
                  <li>• Basic blues scale patterns</li>
                  <li>• String bending technique</li>
                  <li>• AC/DC style and groove</li>
                </ul>
                <div className="mt-3">
                  <Link href="/lessons/songs/scales/blues-scale" className="text-orange-600 hover:text-orange-800 text-sm">
                    → Blues Scale Lessons
                  </Link>
                </div>
              </div>
            </div>

            {/* Advanced Level */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-semibold text-red-900 mb-4">🔴 Advanced Level</h3>
              <div className="space-y-3 text-sm">
                <p className="text-red-800 font-medium">Mastery Goals:</p>
                <ul className="text-red-700 space-y-1">
                  <li>• Play complete guitar solo</li>
                  <li>• Master Angus Young techniques</li>
                  <li>• Improvise in the style</li>
                  <li>• Perform with full band energy</li>
                </ul>
                <p className="text-red-800 font-medium mt-3">Advanced Techniques:</p>
                <ul className="text-red-700 space-y-1">
                  <li>• Fast alternate picking</li>
                  <li>• Expressive vibrato</li>
                  <li>• Chuck Berry influenced licks</li>
                  <li>• Stage presence and energy</li>
                </ul>
                <div className="mt-3">
                  <Link href="/lessons/songs/techniques/advanced-lead" className="text-red-600 hover:text-red-800 text-sm">
                    → Advanced Lead Guitar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Songs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Songs & Related Learning</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* AC/DC Songs */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Other AC/DC Classics</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <Link href="/lessons/songs/breakdowns/thunderstruck" className="text-cyan-600 hover:text-cyan-800">"Thunderstruck"</Link> - Similar energy, different techniques</li>
                <li>• <Link href="/lessons/songs/breakdowns/back-in-black" className="text-cyan-600 hover:text-cyan-800">"Back in Black"</Link> - Classic I-IV-V progression</li>
                <li>• <Link href="/lessons/songs/breakdowns/highway-to-hell" className="text-cyan-600 hover:text-cyan-800">"Highway to Hell"</Link> - Similar chord structure</li>
                <li>• "You Shook Me All Night Long" - Power chord mastery</li>
              </ul>
            </div>

            {/* Similar Style */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Similar Hard Rock Style</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• "We Will Rock You" - Queen (anthemic energy)</li>
                <li>• "Born to Be Wild" - Steppenwolf (driving rhythm)</li>
                <li>• "Smoke on the Water" - Deep Purple (simple, effective)</li>
                <li>• "Wild Thing" - The Troggs (I-IV-V foundation)</li>
              </ul>
            </div>

            {/* Technical Development */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Technical Development</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <Link href="/lessons/songs/techniques/rhythm-guitar" className="text-cyan-600 hover:text-cyan-800">Rhythm Guitar Mastery</Link></li>
                <li>• <Link href="/lessons/songs/techniques/power-chords" className="text-cyan-600 hover:text-cyan-800">Power Chord Techniques</Link></li>
                <li>• <Link href="/lessons/songs/scales/blues-scale" className="text-cyan-600 hover:text-cyan-800">Blues Scale Application</Link></li>
                <li>• <Link href="/lessons/songs/gear/classic-rock-tones" className="text-cyan-600 hover:text-cyan-800">Classic Rock Tone</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Deep Theory Analysis */}
        <section className="mb-12 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Deep Theory Analysis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Harmonic Analysis */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Harmonic Structure</h3>
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-medium text-gray-800">Key Center: E Major</p>
                  <p>Strong tonal center with clear I-IV-V relationships throughout</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Chord Functions:</p>
                  <ul className="space-y-1">
                    <li>• E5 (I): Tonic - home base, stability</li>
                    <li>• A5 (IV): Subdominant - away from home</li>
                    <li>• B5 (V): Dominant - tension, wants resolution</li>
                    <li>• C5-G5-D5 (♭VI-♭III-♭VII): Borrowed from parallel minor</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Modal Characteristics:</p>
                  <p>Primarily Ionian (major) with brief Mixolydian inflections in the bridge section</p>
                </div>
              </div>
            </div>

            {/* Rhythmic Analysis */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Rhythmic & Structural Elements</h3>
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-medium text-gray-800">Time Signature: 4/4</p>
                  <p>Straightforward rock rhythm with strong emphasis on beats 1 and 3</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Rhythmic Character:</p>
                  <ul className="space-y-1">
                    <li>• Quarter note emphasis creates march-like feel</li>
                    <li>• Consistent downstrokes for maximum impact</li>
                    <li>• Syncopated accents in chorus sections</li>
                    <li>• Building energy through arrangement</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Form Analysis:</p>
                  <p>Classic ABABCAB structure with extended solo section serving as bridge</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </Layout>
  );
}
