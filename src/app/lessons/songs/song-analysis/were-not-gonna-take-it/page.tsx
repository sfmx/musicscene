"use client";

import React from "react";
import Link from "next/link";
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TabAndNoteVisualizer from "@/components/TabAndNoteVisualizer";
import SimpleFretboardDiagram from "@/components/SimpleFretboardDiagram";
import { VexTab } from '@/components/VexTab';

export default function WereNotGonnaTakeItBreakdown() {
  return (
    <Layout>
      <Header
        title="&quot;We're Not Gonna Take It&quot; - Complete Song Analysis"
        subtitle="Professional breakdown of Twisted Sister's anthem with theory, technique, and equipment analysis"
      />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8 text-sm">
          <Link href="/lessons/songs/song-analysis" className="text-cyan-600 hover:text-cyan-800">
            ← Back to Song Analysis
          </Link>
        </nav>

        {/* Song Header */}
        <section className="mb-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">We're Not Gonna Take It</h1>
              <div className="space-y-2 text-gray-700">
                <p><strong>Artist:</strong> Twisted Sister</p>
                <p><strong>Album:</strong> Stay Hungry</p>
                <p><strong>Released:</strong> 1984</p>
                <p><strong>Genre:</strong> Glam Metal / Hard Rock</p>
                <p><strong>Tempo:</strong> 140 BPM</p>
                <p><strong>Duration:</strong> 3:38</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-orange-200">
              <h2 className="font-semibold text-gray-800 mb-3">Difficulty Analysis</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Overall Difficulty:</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Intermediate</span>
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
                  <p className="text-blue-800 font-medium">Primary Key: E Minor</p>
                  <p className="text-blue-700">The song centers around E minor with strong modal inflections</p>
                </div>
                <div>
                  <p className="text-blue-800 font-medium">Scales Used:</p>
                  <ul className="text-blue-700 space-y-1">
                    <li>• E Natural Minor (E-F#-G-A-B-C-D)</li>
                    <li>• E Minor Pentatonic (E-G-A-B-D)</li>
                    <li>• Brief E Dorian inflections (verse)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-blue-800 font-medium">Modal Character:</p>
                  <p className="text-blue-700">Primarily Aeolian (natural minor) with Dorian tendencies in the verse sections</p>
                </div>
              </div>
              <div className="mt-4">
                <Link href="/lessons/songs/scales/minor-pentatonic" className="text-blue-600 hover:text-blue-800 text-sm">
                  → Learn Minor Pentatonic Scale
                </Link>
              </div>
            </div>

            {/* Chord Progression Analysis */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Chord Progressions</h3>
              
              {/* Main Progression with Diagrams */}
              <div className="mb-6">
                <p className="text-green-800 font-medium mb-3">Main Progression: Em - C - G - D</p>
                <p className="text-green-700 text-sm mb-4">i - ♭VI - ♭III - ♭VII (classic minor progression)</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <h5 className="font-medium text-sm mb-2">Em (i)</h5>
                    <SimpleFretboardDiagram chord="E_minor" />
                    <p className="text-xs text-green-600 mt-1">Tonic Minor</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-medium text-sm mb-2">C (♭VI)</h5>
                    <SimpleFretboardDiagram chord="C_major" />
                    <p className="text-xs text-green-600 mt-1">Submediant</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-medium text-sm mb-2">G (♭III)</h5>
                    <SimpleFretboardDiagram chord="G_major" />
                    <p className="text-xs text-green-600 mt-1">Mediant</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-medium text-sm mb-2">D (♭VII)</h5>
                    <SimpleFretboardDiagram chord="D_major" />
                    <p className="text-xs text-green-600 mt-1">Subtonic</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-green-800 font-medium">Verse: Em - C - G - D</p>
                  <p className="text-green-700">Creates strong emotional pull with minor tonic</p>
                </div>
                <div>
                  <p className="text-green-800 font-medium">Chorus: Em - C - G - D - Em</p>
                  <p className="text-green-700">Same progression with resolution back to Em</p>
                </div>
                <div>
                  <p className="text-green-800 font-medium mb-3">Pre-Chorus: G - A - B</p>
                  <p className="text-green-700 text-sm mb-3">♭III - IV - V (building tension to chorus)</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-2">
                    <div className="text-center">
                      <h5 className="font-medium text-xs mb-1">G (♭III)</h5>
                      <SimpleFretboardDiagram chord="G_major" />
                    </div>
                    <div className="text-center">
                      <h5 className="font-medium text-xs mb-1">A (IV)</h5>
                      <SimpleFretboardDiagram chord="A_major" />
                    </div>
                    <div className="text-center">
                      <h5 className="font-medium text-xs mb-1">B (V)</h5>
                      <SimpleFretboardDiagram chord="B_major" />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-green-800 font-medium">Function Analysis:</p>
                  <ul className="text-green-700 space-y-1">
                    <li>• Classic rock vi-IV-I-V in relative major (G)</li>
                    <li>• Strong plagal motion (♭VI to i)</li>
                    <li>• Mixolydian ♭VII creates modal character</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <Link href="/lessons/songs/progressions/minor-progressions" className="text-green-600 hover:text-green-800 text-sm">
                  → Explore Minor Progressions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Playing Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Playing Techniques</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Rhythm Guitar Techniques */}
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Rhythm Guitar Techniques</h3>
              
              {/* Main Riff */}
              <div className="mb-6">
                <h4 className="font-semibold text-orange-800 mb-3">Main Riff Pattern</h4>
                <div className="bg-white rounded-lg p-4 mb-3">
                  <VexTab 
                    notation="tabstave notation=true tablature=true\nnotes :q 0/6 3/5 5/4 | :q 0/6 3/5 5/4 3/5" 
                    width={400} 
                    scale={0.8}
                  />
                </div>
                <div className="text-sm text-orange-700 space-y-2">
                  <p><strong>Fret Pattern:</strong> Open E string, 3rd fret A string, 5th fret D string</p>
                  <p><strong>Technique:</strong> Strong downstrokes with palm muting on E string</p>
                  <p><strong>Timing:</strong> Syncopated rhythm emphasizing off-beats</p>
                </div>
              </div>

              {/* Power Chord Sections */}
              <div className="mb-6">
                <h4 className="font-semibold text-orange-800 mb-3">Power Chord Sections</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-white rounded-lg p-3">
                    <p className="font-medium">Em Power Chord (Main)</p>
                    <p className="text-orange-700">7th fret A string, 9th fret D string</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="font-medium">C Power Chord</p>
                    <p className="text-orange-700">3rd fret A string, 5th fret D string</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="font-medium">G Power Chord</p>
                    <p className="text-orange-700">5th fret E string, 7th fret A string</p>
                  </div>
                </div>
              </div>

              {/* Rhythm Patterns */}
              <div>
                <h4 className="font-semibold text-orange-800 mb-3">Strumming Patterns</h4>
                <div className="space-y-2 text-sm text-orange-700">
                  <p><strong>Verse:</strong> D-D-U-D-U (emphasis on downstrokes)</p>
                  <p><strong>Chorus:</strong> D-D-U-D-U-D-U (driving rhythm)</p>
                  <p><strong>Pre-Chorus:</strong> D-U-D-U (lighter, building tension)</p>
                </div>
              </div>
            </div>

            {/* Lead Guitar Techniques */}
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Lead Guitar Techniques</h3>

              {/* Solo Section */}
              <div className="mb-6">
                <h4 className="font-semibold text-purple-800 mb-3">Guitar Solo Breakdown</h4>
                <div className="bg-white rounded-lg p-4 mb-3">
                  <VexTab 
                    notation="tabstave notation=true tablature=true\nnotes :q 7/3 9/3 10/3 | :q 7/2 9/2 10/2" 
                    width={400} 
                    scale={0.8}
                  />
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-white rounded-lg p-3">
                    <p className="font-medium text-purple-800">Position: 7th-12th Fret</p>
                    <p className="text-purple-700">Primary scale position for E minor pentatonic</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="font-medium text-purple-800">Key Techniques:</p>
                    <ul className="text-purple-700 space-y-1">
                      <li>• String bending (whole and half steps)</li>
                      <li>• Vibrato on sustained notes</li>
                      <li>• Hammer-ons and pull-offs</li>
                      <li>• Pentatonic scale runs</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Scale Patterns */}
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Essential Scale Patterns</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-white rounded-lg p-3">
                    <p className="font-medium">E Minor Pentatonic (Box 1)</p>
                    <p className="text-purple-700">Frets 12-15: Classic lead guitar position</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="font-medium">E Minor Pentatonic (Box 2)</p>
                    <p className="text-purple-700">Frets 7-10: Lower register melodic phrases</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment & Tone Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Equipment & Tone Analysis</h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Guitar Setup */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Guitar Setup</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-blue-800">Dee Snider's Guitar</p>
                  <p className="text-blue-700">B.C. Rich Mockingbird</p>
                </div>
                <div>
                  <p className="font-medium text-blue-800">Alternative Guitars</p>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Les Paul Standard</li>
                    <li>• Gibson SG</li>
                    <li>• Any humbucker-equipped guitar</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-blue-800">Pickup Configuration</p>
                  <p className="text-blue-700">High-output humbuckers for thick distortion</p>
                </div>
                <div>
                  <p className="font-medium text-blue-800">String Gauge</p>
                  <p className="text-blue-700">Medium (.010-.046) for balance of tone and playability</p>
                </div>
              </div>
            </div>

            {/* Amplifier Settings */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-4">Amplifier & Effects</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-red-800">Amplifier Type</p>
                  <p className="text-red-700">High-gain tube amp (Marshall JCM800 style)</p>
                </div>
                <div>
                  <p className="font-medium text-red-800">Gain Structure</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• Gain: 7-8/10</li>
                    <li>• Bass: 6/10</li>
                    <li>• Mids: 7/10</li>
                    <li>• Treble: 8/10</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-red-800">Essential Effects</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• Overdrive/Distortion (primary tone)</li>
                    <li>• Chorus (clean sections)</li>
                    <li>• Delay (lead guitar)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-red-800">Cabinet</p>
                  <p className="text-red-700">4x12 with Celestion V30 or G12T-75 speakers</p>
                </div>
              </div>
            </div>

            {/* Recording Techniques */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Production Notes</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-green-800">Recording Approach</p>
                  <p className="text-green-700">Double-tracked rhythm guitars for thickness</p>
                </div>
                <div>
                  <p className="font-medium text-green-800">Mixing Elements</p>
                  <ul className="text-green-700 space-y-1">
                    <li>• Panned rhythm guitars (L/R)</li>
                    <li>• Center lead guitar</li>
                    <li>• Compressed drums for punch</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-green-800">Signature Sound</p>
                  <p className="text-green-700">Thick, compressed distortion with clear note separation</p>
                </div>
                <div>
                  <p className="font-medium text-green-800">Home Recording Tips</p>
                  <ul className="text-green-700 space-y-1">
                    <li>• Use amp simulation plugins</li>
                    <li>• Layer multiple guitar tracks</li>
                    <li>• EQ to cut through mix</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Song Structure Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Song Structure Analysis</h2>
          
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Structure Breakdown */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Song Form</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-white rounded-lg p-3 border-l-4 border-blue-500">
                    <p className="font-medium">Intro (8 bars)</p>
                    <p className="text-gray-700">Main riff establishes key and energy</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border-l-4 border-green-500">
                    <p className="font-medium">Verse 1 (16 bars)</p>
                    <p className="text-gray-700">Em-C-G-D progression, verse melody</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border-l-4 border-orange-500">
                    <p className="font-medium">Pre-Chorus (8 bars)</p>
                    <p className="text-gray-700">G-A-B build-up, tension creation</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border-l-4 border-red-500">
                    <p className="font-medium">Chorus (16 bars)</p>
                    <p className="text-gray-700">Main hook, anthemic vocal line</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border-l-4 border-green-500">
                    <p className="font-medium">Verse 2 (16 bars)</p>
                    <p className="text-gray-700">Same as verse 1, new lyrics</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border-l-4 border-orange-500">
                    <p className="font-medium">Pre-Chorus (8 bars)</p>
                    <p className="text-gray-700">Building tension again</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border-l-4 border-red-500">
                    <p className="font-medium">Chorus (16 bars)</p>
                    <p className="text-gray-700">Second iteration of main hook</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border-l-4 border-purple-500">
                    <p className="font-medium">Guitar Solo (16 bars)</p>
                    <p className="text-gray-700">E minor pentatonic over verse progression</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border-l-4 border-red-500">
                    <p className="font-medium">Final Chorus (16 bars)</p>
                    <p className="text-gray-700">Climactic ending with extensions</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border-l-4 border-gray-500">
                    <p className="font-medium">Outro (8 bars)</p>
                    <p className="text-gray-700">Fade out on main riff</p>
                  </div>
                </div>
              </div>

              {/* Analysis Points */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Structural Analysis</h3>
                <div className="space-y-4 text-sm">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-medium text-blue-800 mb-2">Verse Strategy</h4>
                    <p className="text-blue-700">Lower energy, conversational vocal delivery builds anticipation for explosive chorus</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 className="font-medium text-green-800 mb-2">Pre-Chorus Function</h4>
                    <p className="text-green-700">Ascending chord progression (G-A-B) creates harmonic tension and melodic lift</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <h4 className="font-medium text-red-800 mb-2">Chorus Impact</h4>
                    <p className="text-red-700">Same chord progression as verse but with octave leap in melody and full arrangement</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h4 className="font-medium text-purple-800 mb-2">Solo Placement</h4>
                    <p className="text-purple-700">Traditional 3rd position allows guitar to shine without disrupting song flow</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <h4 className="font-medium text-orange-800 mb-2">Dynamic Arc</h4>
                    <p className="text-orange-700">Classic arena rock structure: build → release → build → bigger release</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Path & Difficulty Progression */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Path & Difficulty Progression</h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Beginner Path */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-4">🟢 Beginner Approach</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-green-800">Start With:</p>
                  <ul className="text-green-700 space-y-1">
                    <li>• Basic Em, C, G, D chord shapes</li>
                    <li>• Simple strumming patterns</li>
                    <li>• Power chord versions</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-green-800">Focus Areas:</p>
                  <ul className="text-green-700 space-y-1">
                    <li>• Clean chord transitions</li>
                    <li>• Steady rhythm keeping</li>
                    <li>• Basic palm muting</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-green-800">Practice Routine:</p>
                  <ul className="text-green-700 space-y-1">
                    <li>• 10 min chord practice</li>
                    <li>• 10 min rhythm patterns</li>
                    <li>• 10 min play-along</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-medium text-green-800">Estimated Timeline:</p>
                  <p className="text-green-700">2-3 months to play basic version</p>
                </div>
              </div>
            </div>

            {/* Intermediate Path */}
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-900 mb-4">🟡 Intermediate Approach</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-orange-800">Add to Foundation:</p>
                  <ul className="text-orange-700 space-y-1">
                    <li>• Full chord voicings</li>
                    <li>• Dynamic strumming</li>
                    <li>• Lead guitar basics</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-orange-800">Technical Skills:</p>
                  <ul className="text-orange-700 space-y-1">
                    <li>• E minor pentatonic scale</li>
                    <li>• Basic string bending</li>
                    <li>• Vibrato technique</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-orange-800">Song Elements:</p>
                  <ul className="text-orange-700 space-y-1">
                    <li>• Main riff accuracy</li>
                    <li>• Pre-chorus build-up</li>
                    <li>• Simple solo phrases</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-medium text-orange-800">Estimated Timeline:</p>
                  <p className="text-orange-700">3-4 months to master main parts</p>
                </div>
              </div>
            </div>

            {/* Advanced Path */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-4">🔴 Advanced Mastery</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-red-800">Professional Elements:</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• Complete guitar solo</li>
                    <li>• Tone matching</li>
                    <li>• Performance energy</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-red-800">Advanced Techniques:</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• Full pentatonic patterns</li>
                    <li>• Advanced bending</li>
                    <li>• Improvisation skills</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-red-800">Performance Skills:</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• Stage presence</li>
                    <li>• Audience interaction</li>
                    <li>• Band dynamics</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-medium text-red-800">Mastery Timeline:</p>
                  <p className="text-red-700">6+ months for complete mastery</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Songs & Related Learning */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Songs & Related Learning</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Similar Songs */}
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Songs with Similar Elements</h3>
              
              <div className="space-y-4 text-sm">
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-medium text-purple-800">Em-C-G-D Progression</h4>
                  <ul className="text-purple-700 space-y-1 mt-2">
                    <li>• "Horse with No Name" - America</li>
                    <li>• "Zombie" - The Cranberries</li>
                    <li>• "When I Come Around" - Green Day</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-medium text-purple-800">Similar Energy/Style</h4>
                  <ul className="text-purple-700 space-y-1 mt-2">
                    <li>• "I Love Rock 'N Roll" - Joan Jett</li>
                    <li>• "Cum on Feel the Noize" - Quiet Riot</li>
                    <li>• "Rock You Like a Hurricane" - Scorpions</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-medium text-purple-800">Same Key (E minor)</h4>
                  <ul className="text-purple-700 space-y-1 mt-2">
                    <li>• "Losing My Religion" - R.E.M.</li>
                    <li>• "The Thrill Is Gone" - B.B. King</li>
                    <li>• "Black" - Pearl Jam</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Learning Resources */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Recommended Learning Path</h3>
              
              <div className="space-y-4 text-sm">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-medium text-blue-800">Theory Foundations</h4>
                  <ul className="text-blue-700 space-y-1 mt-2">
                    <li>• <Link href="/lessons/theory/scales/minor" className="text-blue-600 hover:underline">Natural Minor Scale</Link></li>
                    <li>• <Link href="/lessons/theory/progressions/vi-IV-I-V" className="text-blue-600 hover:underline">vi-IV-I-V Progressions</Link></li>
                    <li>• <Link href="/lessons/theory/scales/minor-pentatonic" className="text-blue-600 hover:underline">Minor Pentatonic Scale</Link></li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-medium text-blue-800">Technique Development</h4>
                  <ul className="text-blue-700 space-y-1 mt-2">
                    <li>• <Link href="/lessons/technique/rhythm-guitar" className="text-blue-600 hover:underline">Rhythm Guitar Mastery</Link></li>
                    <li>• <Link href="/lessons/technique/power-chords" className="text-blue-600 hover:underline">Power Chord Techniques</Link></li>
                    <li>• <Link href="/lessons/technique/lead-guitar-basics" className="text-blue-600 hover:underline">Lead Guitar Fundamentals</Link></li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-medium text-blue-800">Gear & Tone</h4>
                  <ul className="text-blue-700 space-y-1 mt-2">
                    <li>• <Link href="/lessons/gear/amplifiers/tube-amps" className="text-blue-600 hover:underline">Tube Amplifier Guide</Link></li>
                    <li>• <Link href="/lessons/gear/effects/distortion" className="text-blue-600 hover:underline">Distortion Pedals</Link></li>
                    <li>• <Link href="/lessons/gear/guitars/rock-guitars" className="text-blue-600 hover:underline">Rock Guitar Selection</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-2 border-orange-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Master the Glam Metal Catalog</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Ready to tackle more arena rock anthems? Check out our complete song analysis collection 
            featuring the greatest hits of the 80s metal scene.
          </p>
          <div className="space-x-4">
            <Link 
              href="/lessons/songs/song-analysis" 
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
            >
              Explore More Song Analyses
            </Link>
            <Link 
              href="/lessons/theory/progressions" 
              className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-medium border border-orange-600 hover:bg-orange-50 transition-colors"
            >
              Learn More Progressions
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </Layout>
  );
}
