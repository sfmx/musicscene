"use client";

import React from "react";
import Link from "next/link";
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SimpleFretboardDiagram from "@/components/SimpleFretboardDiagram";
import { VexTab } from '@/components/VexTab';

export default function HighwayToHellAnalysis() {
  return (
    <Layout>
      <Header
        title="&quot;Highway to Hell&quot; - Complete Song Analysis"
        subtitle="Professional breakdown of AC/DC's highway anthem with theory, technique, and equipment analysis"
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
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Highway to Hell</h1>
              <div className="space-y-2 text-gray-700">
                <p><strong>Artist:</strong> AC/DC</p>
                <p><strong>Album:</strong> Highway to Hell</p>
                <p><strong>Released:</strong> 1979</p>
                <p><strong>Genre:</strong> Hard Rock / Heavy Metal</p>
                <p><strong>Tempo:</strong> 115 BPM</p>
                <p><strong>Duration:</strong> 3:28</p>
                <p><strong>Key:</strong> A major</p>
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
                  <p className="text-blue-800 font-medium">Primary Key: A Major</p>
                  <p className="text-blue-700">Bright, uplifting major key with driving character</p>
                </div>
                <div>
                  <p className="text-blue-800 font-medium">Scales Used:</p>
                  <ul className="text-blue-700 space-y-1">
                    <li>• A Major Scale (A-B-C#-D-E-F#-G#)</li>
                    <li>• A Minor Pentatonic (solo sections)</li>
                    <li>• A Blues Scale (lead embellishments)</li>
                    <li>• D Major (IV chord relationship)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-blue-800 font-medium">Modal Character:</p>
                  <p className="text-blue-700">Strong Ionian (major) with occasional blues notes</p>
                </div>
              </div>
            </div>

            {/* Chord Progression Analysis */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Chord Progressions</h3>
              
              {/* Main Progression */}
              <div className="mb-6">
                <p className="text-green-800 font-medium mb-3">Main Progression: A5 - D5 - G5 - D5 - A5</p>
                <p className="text-green-700 text-sm mb-4">I - IV - ♭VII - IV - I (classic rock progression)</p>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <h5 className="font-medium text-sm mb-2">A5 (I)</h5>
                    <SimpleFretboardDiagram chord="A5" />
                    <p className="text-xs text-green-600 mt-1">Tonic</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-medium text-sm mb-2">D5 (IV)</h5>
                    <SimpleFretboardDiagram chord="D5" />
                    <p className="text-xs text-green-600 mt-1">Subdominant</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-medium text-sm mb-2">G5 (♭VII)</h5>
                    <SimpleFretboardDiagram chord="G5" />
                    <p className="text-xs text-green-600 mt-1">Subtonic</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-green-800 font-medium">Verse: A5 - D5 - A5 - D5</p>
                  <p className="text-green-700">Simple I-IV alternation for driving rhythm</p>
                </div>
                <div>
                  <p className="text-green-800 font-medium">Chorus: A5 - D5 - G5 - D5 - A5</p>
                  <p className="text-green-700">Extended progression with ♭VII for edge</p>
                </div>
                <div>
                  <p className="text-green-800 font-medium">Bridge: D5 - G5 - A5</p>
                  <p className="text-green-700">IV - ♭VII - I ascending motion</p>
                </div>
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
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Driving Rhythm Pattern</h4>
                  <p className="text-sm text-orange-700 mb-3">A-D-G progression with signature rhythm:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q (0/5.2/4) | :q (0/4.2/3) | :q (3/6.5/5) | :q (0/4.2/3)
                    `}
                    width={500}
                    scale={0.8}
                  />
                  <div className="mt-3">
                    <p className="text-xs text-orange-600 font-medium mb-1">Chord Shapes:</p>
                    <ul className="text-xs text-orange-600 space-y-1">
                      <li>• A5: Open A + 2nd fret D string</li>
                      <li>• D5: Open D + 2nd fret G string</li>
                      <li>• G5: 3rd fret E + 5th fret A string</li>
                      <li>• Strong, consistent downstrokes</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-700">Rhythm Technique:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Heavy downstroke emphasis</li>
                    <li>• Tight, percussive feel</li>
                    <li>• Minimal palm muting</li>
                    <li>• Steady quarter-note pulse</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Malcolm Young Style:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Clean but aggressive attack</li>
                    <li>• Consistent dynamics</li>
                    <li>• Groove-focused playing</li>
                    <li>• Lock with bass drum</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Sound Character:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Crunchy, midrange-heavy tone</li>
                    <li>• Clear chord definition</li>
                    <li>• Driving energy</li>
                    <li>• Classic AC/DC chunk</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Solo Analysis */}
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">Guitar Solo Breakdown</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="bg-purple-100 rounded-lg p-4 border border-purple-300">
                  <h4 className="font-semibold text-purple-800 mb-2">Angus Young's Solo Style</h4>
                  <p className="text-sm text-purple-700 mb-3">A minor pentatonic with blues elements:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :8 5/3 8/3 | :8 5/3 7/3 | :q 5/2 | :8 7/2 8/2
                    `}
                    width={500}
                    scale={0.8}
                  />
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-purple-800 font-medium">Solo Characteristics:</p>
                <ul className="text-purple-700 space-y-1">
                  <li>• A minor pentatonic foundation</li>
                  <li>• 5th-8th fret area primarily</li>
                  <li>• String bending and vibrato</li>
                  <li>• Melodic phrasing</li>
                  <li>• Chuck Berry influences</li>
                  <li>• SG humbucker tone</li>
                </ul>
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
                    <li>• Gretsch G6120 Nashville</li>
                    <li>• Filter'Tron pickups</li>
                    <li>• Bridge pickup primarily</li>
                    <li>• Heavy strings (.012-.054)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-amber-800 font-medium">Angus Young (Lead):</p>
                  <ul className="text-amber-700 space-y-1">
                    <li>• Gibson SG Standard (1968)</li>
                    <li>• Original PAF humbuckers</li>
                    <li>• Both pickup positions used</li>
                    <li>• Light strings for bending</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Amplifier */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-semibold text-red-900 mb-4">🔊 Amplifier</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-red-800 font-medium">AC/DC Tone Recipe:</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• Marshall Super Lead 100W</li>
                    <li>• Marshall 1960A 4x12 cabs</li>
                    <li>• Plexi-era circuitry</li>
                    <li>• Natural tube saturation</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-800 font-medium">Amp Settings:</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• Volume: 7-8/10</li>
                    <li>• Treble: 7/10</li>
                    <li>• Middle: 8/10</li>
                    <li>• Bass: 6/10</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Effects */}
            <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
              <h3 className="text-xl font-semibold text-cyan-900 mb-4">🎛️ Effects</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-cyan-800 font-medium">Pure Tone Approach:</p>
                  <ul className="text-cyan-700 space-y-1">
                    <li>• No effects pedals used</li>
                    <li>• Guitar straight to amp</li>
                    <li>• Natural amp compression</li>
                    <li>• Room ambience only</li>
                  </ul>
                </div>
                <div>
                  <p className="text-cyan-800 font-medium">Studio Processing:</p>
                  <ul className="text-cyan-700 space-y-1">
                    <li>• Minimal EQ shaping</li>
                    <li>• Natural room sound</li>
                    <li>• Tape compression</li>
                  </ul>
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
                    <span className="font-medium">0:00-0:12</span>
                    <span>Intro</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">0:12-0:36</span>
                    <span>Verse 1</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">0:36-1:00</span>
                    <span>Chorus 1</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">1:00-1:24</span>
                    <span>Verse 2</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">1:24-1:48</span>
                    <span>Chorus 2</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">1:48-2:24</span>
                    <span>Guitar Solo</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">2:24-2:48</span>
                    <span>Verse 3</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">2:48-3:28</span>
                    <span>Final Chorus/Outro</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Arrangement Notes</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <p className="font-medium text-gray-800">Song Character:</p>
                    <p>Driving, anthemic rocker with infectious groove and memorable hooks</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Key Elements:</p>
                    <ul className="space-y-1">
                      <li>• Catchy main riff</li>
                      <li>• Singalong chorus</li>
                      <li>• Tight rhythm section</li>
                      <li>• Melodic guitar solo</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Production Notes:</p>
                    <p>Clean, punchy production that became the AC/DC template</p>
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
            
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-4">🟢 Beginner Level</h3>
              <div className="space-y-3 text-sm">
                <p className="text-green-800 font-medium">Start Here:</p>
                <ul className="text-green-700 space-y-1">
                  <li>• Learn A5, D5, G5 power chords</li>
                  <li>• Practice chord transitions</li>
                  <li>• Work on downstroke technique</li>
                  <li>• Simple strumming patterns</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">🟡 Intermediate Level</h3>
              <div className="space-y-3 text-sm">
                <p className="text-orange-800 font-medium">Building Skills:</p>
                <ul className="text-orange-700 space-y-1">
                  <li>• Master complete song structure</li>
                  <li>• Add rhythmic precision</li>
                  <li>• Learn basic solo phrases</li>
                  <li>• Work on AC/DC groove</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-semibold text-red-900 mb-4">🔴 Advanced Level</h3>
              <div className="space-y-3 text-sm">
                <p className="text-red-800 font-medium">Mastery Goals:</p>
                <ul className="text-red-700 space-y-1">
                  <li>• Complete guitar solo</li>
                  <li>• Perfect Malcolm's rhythm style</li>
                  <li>• Nail the tone and feel</li>
                  <li>• Performance-ready energy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Songs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Songs & Related Learning</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Other AC/DC Classics</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <Link href="/lessons/songs/song-analysis/back-in-black" className="text-cyan-600 hover:text-cyan-800">"Back in Black"</Link></li>
                <li>• <Link href="/lessons/songs/song-analysis/thunderstruck" className="text-cyan-600 hover:text-cyan-800">"Thunderstruck"</Link></li>
                <li>• <Link href="/lessons/songs/song-analysis/you-shook-me-all-night-long" className="text-cyan-600 hover:text-cyan-800">"You Shook Me All Night Long"</Link></li>
                <li>• <Link href="/lessons/songs/song-analysis/for-those-about-to-rock" className="text-cyan-600 hover:text-cyan-800">"For Those About to Rock"</Link></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Similar Progressions</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• "Sweet Home Alabama" - Lynyrd Skynyrd</li>
                <li>• "Free Bird" - Lynyrd Skynyrd</li>
                <li>• "Born to Be Wild" - Steppenwolf</li>
                <li>• "Bad to the Bone" - George Thorogood</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Technical Development</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <Link href="/lessons/songs/techniques/power-chords" className="text-cyan-600 hover:text-cyan-800">Power Chord Mastery</Link></li>
                <li>• <Link href="/lessons/songs/techniques/rhythm-guitar" className="text-cyan-600 hover:text-cyan-800">Rhythm Guitar</Link></li>
                <li>• <Link href="/lessons/songs/gear/marshall-tones" className="text-cyan-600 hover:text-cyan-800">Marshall Tones</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final Section */}
        <section className="text-center py-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Rock the Highway with AC/DC</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Continue your rock journey with more AC/DC classics and similar hard rock anthems.
          </p>
          <Link 
            href="/lessons/songs/song-analysis" 
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            View All Song Analyses
          </Link>
        </section>

      </main>
      
      <Footer />
    </Layout>
  );
}
