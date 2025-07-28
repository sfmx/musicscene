"use client";

import React from "react";
import Link from "next/link";
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SimpleFretboardDiagram from "@/components/SimpleFretboardDiagram";
import { VexTab } from '@/components/VexTab';

export default function BackInBlackAnalysis() {
  return (
    <Layout>
      <Header
        title="&quot;Back in Black&quot; - Complete Song Analysis"
        subtitle="Professional breakdown of AC/DC's defining anthem with theory, technique, and equipment analysis"
      />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8 text-sm">
          <Link href="/lessons/songs/song-analysis" className="text-cyan-600 hover:text-cyan-800">
            ← Back to Song Analysis
          </Link>
        </nav>

        {/* Song Header */}
        <section className="mb-12 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8 border-2 border-gray-300">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Back in Black</h1>
              <div className="space-y-2 text-gray-700">
                <p><strong>Artist:</strong> AC/DC</p>
                <p><strong>Album:</strong> Back in Black</p>
                <p><strong>Released:</strong> 1980</p>
                <p><strong>Genre:</strong> Hard Rock / Heavy Metal</p>
                <p><strong>Tempo:</strong> 94 BPM</p>
                <p><strong>Duration:</strong> 4:15</p>
                <p><strong>Key:</strong> E major</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-300">
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
                  <p className="text-blue-800 font-medium">Primary Key: E Major</p>
                  <p className="text-blue-700">Classic rock key with powerful, open sound</p>
                </div>
                <div>
                  <p className="text-blue-800 font-medium">Scales Used:</p>
                  <ul className="text-blue-700 space-y-1">
                    <li>• E Major Scale (E-F#-G#-A-B-C#-D#)</li>
                    <li>• E Minor Pentatonic (solo sections)</li>
                    <li>• E Blues Scale (lead embellishments)</li>
                    <li>• A Major (IV chord sections)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-blue-800 font-medium">Modal Character:</p>
                  <p className="text-blue-700">Strong Ionian (major) foundation with blues inflections</p>
                </div>
              </div>
            </div>

            {/* Chord Progression Analysis */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Chord Progressions</h3>
              
              {/* Main Progression */}
              <div className="mb-6">
                <p className="text-green-800 font-medium mb-3">Main Progression: E5 - A5 - B5 - E5</p>
                <p className="text-green-700 text-sm mb-4">I - IV - V - I (the ultimate rock progression)</p>
                
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
                  <p className="text-green-800 font-medium">Verse: E5 - D5 - A5 - E5</p>
                  <p className="text-green-700">I - ♭VII - IV - I (borrowed ♭VII adds edge)</p>
                </div>
                <div>
                  <p className="text-green-800 font-medium">Chorus: E5 - A5 - B5 - E5</p>
                  <p className="text-green-700">Pure I-IV-V-I for maximum impact</p>
                </div>
                <div>
                  <p className="text-green-800 font-medium">Bridge: A5 - E5 - B5 - E5</p>
                  <p className="text-green-700">IV-I-V-I for dynamic variation</p>
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
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Iconic Main Riff</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Opening Riff Pattern</h4>
                  <p className="text-sm text-gray-700 mb-3">E major pentatonic with rhythmic emphasis:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :q 0/6 | :8 0/6 3/6 | :8 0/6 2/5 | :q 0/6
                    `}
                    width={500}
                    scale={0.8}
                  />
                  <div className="mt-3">
                    <p className="text-xs text-gray-600 font-medium mb-1">Riff Breakdown:</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• E note: Open low E string</li>
                      <li>• G note: 3rd fret low E string</li>
                      <li>• B note: 2nd fret A string</li>
                      <li>• Strong downstroke emphasis</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-700">Picking Technique:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Heavy downstrokes for power</li>
                    <li>• Slight palm muting for chunk</li>
                    <li>• Consistent attack on each note</li>
                    <li>• Emphasis on groove over speed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Rhythmic Elements:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Syncopated accents</li>
                    <li>• Strong beat 1 emphasis</li>
                    <li>• Pocket playing with bass</li>
                    <li>• Controlled dynamics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Sound Character:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Dark, heavy tone</li>
                    <li>• Minimal sustain</li>
                    <li>• Percussive attack</li>
                    <li>• Signature AC/DC crunch</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Solo Analysis */}
          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <h3 className="text-xl font-semibold text-yellow-900 mb-4">Guitar Solo Analysis</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="bg-yellow-100 rounded-lg p-4 border border-yellow-300">
                  <h4 className="font-semibold text-yellow-800 mb-2">Angus Young's Solo Style</h4>
                  <p className="text-sm text-yellow-700 mb-3">E minor pentatonic with blues bends:</p>
                  <VexTab 
                    notation={`
                      options space=20 font-size=14
                      tabstave notation=true time=4/4
                      notes :8 12/1 15/1 | :8 12/1 14/1 | :q 12/2 | :8 14/2 15/2
                    `}
                    width={500}
                    scale={0.8}
                  />
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-yellow-800 font-medium">Solo Characteristics:</p>
                <ul className="text-yellow-700 space-y-1">
                  <li>• E minor pentatonic foundation</li>
                  <li>• 12th-17th fret area primarily</li>
                  <li>• String bending and vibrato</li>
                  <li>• Fast alternate picking runs</li>
                  <li>• Blues-influenced phrasing</li>
                  <li>• Gibson SG tone signature</li>
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
                    <li>• Standard tuning</li>
                    <li>• Heavy strings for chunk</li>
                  </ul>
                </div>
                <div>
                  <p className="text-amber-800 font-medium">Angus Young (Lead):</p>
                  <ul className="text-amber-700 space-y-1">
                    <li>• Gibson SG Standard</li>
                    <li>• Humbucker pickups</li>
                    <li>• Bridge pickup for solo</li>
                    <li>• Light strings (.009-.042)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Amplifier */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-semibold text-red-900 mb-4">🔊 Amplifier</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-red-800 font-medium">Classic Setup:</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• Marshall Super Lead heads</li>
                    <li>• Marshall 4x12 cabinets</li>
                    <li>• Natural tube saturation</li>
                    <li>• High volume, moderate gain</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-800 font-medium">Tone Settings:</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• Gain: 6-7/10</li>
                    <li>• Bass: 7/10</li>
                    <li>• Mids: 8/10</li>
                    <li>• Treble: 6/10</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Effects */}
            <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
              <h3 className="text-xl font-semibold text-cyan-900 mb-4">🎛️ Effects</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-cyan-800 font-medium">Signal Chain:</p>
                  <ul className="text-cyan-700 space-y-1">
                    <li>• Guitar → Amp (direct)</li>
                    <li>• No effects pedals</li>
                    <li>• Pure amp tone</li>
                    <li>• Natural compression</li>
                  </ul>
                </div>
                <div>
                  <p className="text-cyan-800 font-medium">Studio Effects:</p>
                  <ul className="text-cyan-700 space-y-1">
                    <li>• Plate reverb</li>
                    <li>• Tape compression</li>
                    <li>• EQ shaping</li>
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
                    <span className="font-medium">0:00-0:25</span>
                    <span>Intro Riff</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">0:25-0:50</span>
                    <span>Verse 1</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">0:50-1:15</span>
                    <span>Chorus 1</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">1:15-1:40</span>
                    <span>Verse 2</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">1:40-2:05</span>
                    <span>Chorus 2</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">2:05-2:55</span>
                    <span>Guitar Solo</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">2:55-3:20</span>
                    <span>Verse 3</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">3:20-4:15</span>
                    <span>Final Chorus/Outro</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Arrangement Notes</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <p className="font-medium text-gray-800">Dynamic Control:</p>
                    <p>Consistent energy throughout with subtle builds and releases</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Iconic Elements:</p>
                    <ul className="space-y-1">
                      <li>• Opening riff hook</li>
                      <li>• Signature guitar tone</li>
                      <li>• Memorable vocal melody</li>
                      <li>• Extended guitar solo</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Production Style:</p>
                    <p>Dry, punchy mix with guitars upfront and tight rhythm section</p>
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
                  <li>• Learn E5, A5, B5, D5 power chords</li>
                  <li>• Practice the main riff slowly</li>
                  <li>• Work on downstroke technique</li>
                  <li>• Basic chord progression</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">🟡 Intermediate Level</h3>
              <div className="space-y-3 text-sm">
                <p className="text-orange-800 font-medium">Building Skills:</p>
                <ul className="text-orange-700 space-y-1">
                  <li>• Master the complete riff at tempo</li>
                  <li>• Add palm muting dynamics</li>
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
                  <li>• Perfect the tone and feel</li>
                  <li>• Improvise in AC/DC style</li>
                  <li>• Full performance energy</li>
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
                <li>• <Link href="/lessons/songs/song-analysis/highway-to-hell" className="text-cyan-600 hover:text-cyan-800">"Highway to Hell"</Link></li>
                <li>• <Link href="/lessons/songs/song-analysis/thunderstruck" className="text-cyan-600 hover:text-cyan-800">"Thunderstruck"</Link></li>
                <li>• <Link href="/lessons/songs/song-analysis/you-shook-me-all-night-long" className="text-cyan-600 hover:text-cyan-800">"You Shook Me All Night Long"</Link></li>
                <li>• <Link href="/lessons/songs/song-analysis/for-those-about-to-rock" className="text-cyan-600 hover:text-cyan-800">"For Those About to Rock"</Link></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Similar I-IV-V Songs</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• "Wild Thing" - The Troggs</li>
                <li>• "La Bamba" - Ritchie Valens</li>
                <li>• "Twist and Shout" - The Beatles</li>
                <li>• "Louie Louie" - The Kingsmen</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Technical Development</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <Link href="/lessons/songs/techniques/power-chords" className="text-cyan-600 hover:text-cyan-800">Power Chord Mastery</Link></li>
                <li>• <Link href="/lessons/songs/techniques/palm-muting" className="text-cyan-600 hover:text-cyan-800">Palm Muting Techniques</Link></li>
                <li>• <Link href="/lessons/songs/gear/marshall-tones" className="text-cyan-600 hover:text-cyan-800">Marshall Amp Tones</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final Section */}
        <section className="text-center py-12 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl border-2 border-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Master the AC/DC Catalog</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Continue building your AC/DC repertoire with our comprehensive song analyses.
          </p>
          <Link 
            href="/lessons/songs/song-analysis" 
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
          >
            View All Song Analyses
          </Link>
        </section>

      </main>
      
      <Footer />
    </Layout>
  );
}
