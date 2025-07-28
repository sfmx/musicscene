"use client";

import React from "react";
import Link from "next/link";
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SimpleFretboardDiagram from "@/components/SimpleFretboardDiagram";
import { VexTab } from '@/components/VexTab';

export default function YouShookMeAllNightLongAnalysis() {
  return (
    <Layout>
      <Header
        title="&quot;You Shook Me All Night Long&quot; - Complete Song Analysis"
        subtitle="Professional breakdown of AC/DC's groove masterpiece with theory, technique, and equipment analysis"
      />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8 text-sm">
          <Link href="/lessons/songs/song-analysis" className="text-cyan-600 hover:text-cyan-800">
            ← Back to Song Analysis
          </Link>
        </nav>

        {/* Song Header */}
        <section className="mb-12 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">You Shook Me All Night Long</h1>
              <div className="space-y-2 text-gray-700">
                <p><strong>Artist:</strong> AC/DC</p>
                <p><strong>Album:</strong> Back in Black</p>
                <p><strong>Released:</strong> 1980</p>
                <p><strong>Genre:</strong> Hard Rock / Heavy Metal</p>
                <p><strong>Tempo:</strong> 120 BPM</p>
                <p><strong>Duration:</strong> 3:30</p>
                <p><strong>Key:</strong> G major</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-teal-200">
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
                  <p className="text-blue-800 font-medium">Primary Key: G Major</p>
                  <p className="text-blue-700">Warm, accessible major key with great resonance</p>
                </div>
                <div>
                  <p className="text-blue-800 font-medium">Scales Used:</p>
                  <ul className="text-blue-700 space-y-1">
                    <li>• G Major Scale (G-A-B-C-D-E-F#)</li>
                    <li>• G Minor Pentatonic (solo sections)</li>
                    <li>• G Blues Scale (lead embellishments)</li>
                    <li>• C Major (IV chord relationship)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-blue-800 font-medium">Modal Character:</p>
                  <p className="text-blue-700">Solid Ionian (major) with pentatonic lead work</p>
                </div>
              </div>
            </div>

            {/* Chord Progression Analysis */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Chord Progressions</h3>
              
              {/* Main Progression */}
              <div className="mb-6">
                <p className="text-green-800 font-medium mb-3">Main Progression: G5 - C5 - G5 - D5</p>
                <p className="text-green-700 text-sm mb-4">I - IV - I - V (classic major key movement)</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <h5 className="font-medium text-sm mb-2">G5 (I)</h5>
                    <SimpleFretboardDiagram chord="G5" />
                    <p className="text-xs text-green-600 mt-1">Tonic</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-medium text-sm mb-2">C5 (IV)</h5>
                    <SimpleFretboardDiagram chord="C5" />
                    <p className="text-xs text-green-600 mt-1">Subdominant</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-medium text-sm mb-2">G5 (I)</h5>
                    <SimpleFretboardDiagram chord="G5" />
                    <p className="text-xs text-green-600 mt-1">Return</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-medium text-sm mb-2">D5 (V)</h5>
                    <SimpleFretboardDiagram chord="D5" />
                    <p className="text-xs text-green-600 mt-1">Dominant</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-green-800 font-medium">Verse: G5 - C5 - G5 - C5</p>
                  <p className="text-green-700">I-IV alternation creates steady groove</p>
                </div>
                <div>
                  <p className="text-green-800 font-medium">Chorus: G5 - C5 - G5 - D5 - G5</p>
                  <p className="text-green-700">Extended I-IV-I-V-I for resolution</p>
                </div>
                <div>
                  <p className="text-green-800 font-medium">Bridge: C5 - G5 - D5 - G5</p>
                  <p className="text-green-700">IV-I-V-I circular motion</p>
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
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Signature Riff Pattern</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                  <h4 className="font-semibold text-teal-800 mb-2">Groove-Based Riff</h4>
                  <p className="text-sm text-teal-700 mb-3">G-C power chord progression with rhythmic emphasis:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q (3/6.5/5) | :q (3/5.5/4) | :q (3/6.5/5) | :q (3/5.5/4)
                    `}
                    width={500}
                    scale={0.8}
                  />
                  <div className="mt-3">
                    <p className="text-xs text-teal-600 font-medium mb-1">Chord Positions:</p>
                    <ul className="text-xs text-teal-600 space-y-1">
                      <li>• G5: 3rd fret E + 5th fret A string</li>
                      <li>• C5: 3rd fret A + 5th fret D string</li>
                      <li>• Consistent downstroke pattern</li>
                      <li>• Slight swing feel to the rhythm</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-700">Rhythmic Feel:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Shuffled eighth-note feel</li>
                    <li>• Strong backbeat emphasis</li>
                    <li>• Groove-pocket playing</li>
                    <li>• Consistent dynamics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Malcolm's Approach:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Focus on the groove over speed</li>
                    <li>• Tight timing with rhythm section</li>
                    <li>• Clean chord changes</li>
                    <li>• Minimal sustain for clarity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Tone Character:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Warm, crunchy distortion</li>
                    <li>• Midrange-focused EQ</li>
                    <li>• Percussive attack</li>
                    <li>• Signature AC/DC chunk</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Solo Analysis */}
          <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-900 mb-4">Guitar Solo Breakdown</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="bg-amber-100 rounded-lg p-4 border border-amber-300">
                  <h4 className="font-semibold text-amber-800 mb-2">Angus Young's Solo Style</h4>
                  <p className="text-sm text-amber-700 mb-3">G minor pentatonic with melodic bends:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :8 3/2 6/2 | :8 3/2 5/2 | :q 3/1 | :8 5/1 6/1
                    `}
                    width={500}
                    scale={0.8}
                  />
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-amber-800 font-medium">Solo Characteristics:</p>
                <ul className="text-amber-700 space-y-1">
                  <li>• G minor pentatonic foundation</li>
                  <li>• 3rd-6th fret area primarily</li>
                  <li>• Melodic string bending</li>
                  <li>• Expressive vibrato</li>
                  <li>• Blues-influenced phrasing</li>
                  <li>• SG humbucker warmth</li>
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
                    <li>• Bridge pickup setting</li>
                    <li>• Heavy gauge strings</li>
                  </ul>
                </div>
                <div>
                  <p className="text-amber-800 font-medium">Angus Young (Lead):</p>
                  <ul className="text-amber-700 space-y-1">
                    <li>• Gibson SG Standard</li>
                    <li>• PAF humbucker pickups</li>
                    <li>• Both pickup positions</li>
                    <li>• Light gauge strings</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Amplifier */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-semibold text-red-900 mb-4">🔊 Amplifier</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-red-800 font-medium">Back in Black Era Tone:</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• Marshall Super Lead 100W</li>
                    <li>• Marshall 1960A cabinets</li>
                    <li>• Plexi-style overdrive</li>
                    <li>• High volume, moderate gain</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-800 font-medium">Settings Guide:</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• Volume: 7-8/10</li>
                    <li>• Treble: 6/10</li>
                    <li>• Middle: 8/10</li>
                    <li>• Bass: 7/10</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Effects */}
            <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
              <h3 className="text-xl font-semibold text-cyan-900 mb-4">🎛️ Effects</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-cyan-800 font-medium">Classic Simplicity:</p>
                  <ul className="text-cyan-700 space-y-1">
                    <li>• No effects pedals</li>
                    <li>• Direct guitar to amp</li>
                    <li>• Natural tube saturation</li>
                    <li>• Studio reverb only</li>
                  </ul>
                </div>
                <div>
                  <p className="text-cyan-800 font-medium">Signal Path:</p>
                  <ul className="text-cyan-700 space-y-1">
                    <li>• Guitar → Cable → Amp</li>
                    <li>• Minimal processing</li>
                    <li>• Pure tone philosophy</li>
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
                    <span className="font-medium">0:00-0:20</span>
                    <span>Intro</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">0:20-0:45</span>
                    <span>Verse 1</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">0:45-1:05</span>
                    <span>Chorus 1</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">1:05-1:30</span>
                    <span>Verse 2</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">1:30-1:50</span>
                    <span>Chorus 2</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">1:50-2:30</span>
                    <span>Guitar Solo</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">2:30-2:50</span>
                    <span>Verse 3</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">2:50-3:30</span>
                    <span>Final Chorus/Outro</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Arrangement Notes</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <p className="font-medium text-gray-800">Groove Focus:</p>
                    <p>Built around the infectious rhythm guitar groove and pocket playing</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Key Elements:</p>
                    <ul className="space-y-1">
                      <li>• Signature riff hook</li>
                      <li>• Memorable vocal melody</li>
                      <li>• Tight rhythm section</li>
                      <li>• Melodic guitar solo</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Production Style:</p>
                    <p>Warm, punchy mix with emphasis on groove and musicality</p>
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
                  <li>• Learn G5, C5, D5 power chords</li>
                  <li>• Practice smooth chord transitions</li>
                  <li>• Work on consistent strumming</li>
                  <li>• Focus on timing and groove</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">🟡 Intermediate Level</h3>
              <div className="space-y-3 text-sm">
                <p className="text-orange-800 font-medium">Building Skills:</p>
                <ul className="text-orange-700 space-y-1">
                  <li>• Master the shuffle feel</li>
                  <li>• Add rhythmic nuances</li>
                  <li>• Learn basic solo phrases</li>
                  <li>• Develop pocket playing</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-semibold text-red-900 mb-4">🔴 Advanced Level</h3>
              <div className="space-y-3 text-sm">
                <p className="text-red-800 font-medium">Mastery Goals:</p>
                <ul className="text-red-700 space-y-1">
                  <li>• Complete guitar solo</li>
                  <li>• Perfect the groove and feel</li>
                  <li>• Master AC/DC dynamics</li>
                  <li>• Performance-level execution</li>
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
                <li>• <Link href="/lessons/songs/song-analysis/highway-to-hell" className="text-cyan-600 hover:text-cyan-800">"Highway to Hell"</Link></li>
                <li>• <Link href="/lessons/songs/song-analysis/thunderstruck" className="text-cyan-600 hover:text-cyan-800">"Thunderstruck"</Link></li>
                <li>• <Link href="/lessons/songs/song-analysis/for-those-about-to-rock" className="text-cyan-600 hover:text-cyan-800">"For Those About to Rock"</Link></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Similar Groove Songs</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• "Pride and Joy" - Stevie Ray Vaughan</li>
                <li>• "Crossfire" - Stevie Ray Vaughan</li>
                <li>• "Bad to the Bone" - George Thorogood</li>
                <li>• "The House is Rockin'" - Stevie Ray Vaughan</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Technical Development</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <Link href="/lessons/songs/techniques/shuffle-rhythms" className="text-cyan-600 hover:text-cyan-800">Shuffle Rhythms</Link></li>
                <li>• <Link href="/lessons/songs/techniques/groove-guitar" className="text-cyan-600 hover:text-cyan-800">Groove Guitar</Link></li>
                <li>• <Link href="/lessons/songs/gear/classic-rock-tones" className="text-cyan-600 hover:text-cyan-800">Classic Rock Tones</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final Section */}
        <section className="text-center py-12 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Keep the AC/DC Groove Alive</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Continue your AC/DC journey with more groove-based classics and rhythm guitar mastery.
          </p>
          <Link 
            href="/lessons/songs/song-analysis" 
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            View All Song Analyses
          </Link>
        </section>

      </main>
      
      <Footer />
    </Layout>
  );
}
