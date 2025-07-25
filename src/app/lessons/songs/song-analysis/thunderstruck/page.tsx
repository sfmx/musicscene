"use client";

import React from "react";
import Link from "next/link";
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SimpleFretboardDiagram from "@/components/SimpleFretboardDiagram";
import { VexTab } from '@/components/VexTab';

export default function ThunderstruckAnalysis() {
  return (
    <Layout>
      <Header
        title="&quot;Thunderstruck&quot; - Complete Song Analysis"
        subtitle="Professional breakdown of AC/DC's electrifying masterpiece with theory, technique, and equipment analysis"
      />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8 text-sm">
          <Link href="/lessons/songs/song-analysis" className="text-cyan-600 hover:text-cyan-800">
            ← Back to Song Analysis
          </Link>
        </nav>

        {/* Song Header */}
        <section className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Thunderstruck</h1>
              <div className="space-y-2 text-gray-700">
                <p><strong>Artist:</strong> AC/DC</p>
                <p><strong>Album:</strong> The Razors Edge</p>
                <p><strong>Released:</strong> 1990</p>
                <p><strong>Genre:</strong> Hard Rock / Heavy Metal</p>
                <p><strong>Tempo:</strong> 133 BPM</p>
                <p><strong>Duration:</strong> 4:52</p>
                <p><strong>Key:</strong> B major</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-purple-200">
              <h2 className="font-semibold text-gray-800 mb-3">Difficulty Analysis</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Overall Difficulty:</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full">Advanced</span>
                </div>
                <div className="flex justify-between">
                  <span>Rhythm Guitar:</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full">Intermediate</span>
                </div>
                <div className="flex justify-between">
                  <span>Lead Guitar:</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full">Advanced</span>
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
                  <p className="text-blue-800 font-medium">Primary Key: B Major</p>
                  <p className="text-blue-700">Bright major key with energetic character</p>
                </div>
                <div>
                  <p className="text-blue-800 font-medium">Scales Used:</p>
                  <ul className="text-blue-700 space-y-1">
                    <li>• B Major Scale (B-C#-D#-E-F#-G#-A#)</li>
                    <li>• B Minor Pentatonic (lead sections)</li>
                    <li>• B Blues Scale (solo embellishments)</li>
                    <li>• E Major (relative key sections)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-blue-800 font-medium">Modal Character:</p>
                  <p className="text-blue-700">Primarily Ionian (major) with pentatonic lead work</p>
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
                <p className="text-green-800 font-medium mb-3">Main Progression: B5 - E5 - F#5 - B5</p>
                <p className="text-green-700 text-sm mb-4">I - IV - V - I (classic major key progression)</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <h5 className="font-medium text-sm mb-2">B5 (I)</h5>
                    <SimpleFretboardDiagram chord="B5" />
                    <p className="text-xs text-green-600 mt-1">Tonic</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-medium text-sm mb-2">E5 (IV)</h5>
                    <SimpleFretboardDiagram chord="E5" />
                    <p className="text-xs text-green-600 mt-1">Subdominant</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-medium text-sm mb-2">F#5 (V)</h5>
                    <SimpleFretboardDiagram chord="F#5" />
                    <p className="text-xs text-green-600 mt-1">Dominant</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-medium text-sm mb-2">B5 (I)</h5>
                    <SimpleFretboardDiagram chord="B5" />
                    <p className="text-xs text-green-600 mt-1">Resolution</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-green-800 font-medium">Verse: B5 - E5 - B5 - F#5</p>
                  <p className="text-green-700">Modified I-IV-I-V creates building tension</p>
                </div>
                <div>
                  <p className="text-green-800 font-medium">Chorus: B5 - E5 - F#5 - B5</p>
                  <p className="text-green-700">Complete I-IV-V-I provides anthemic resolution</p>
                </div>
                <div>
                  <p className="text-green-800 font-medium">Intro Riff: Single-note B-E-F#</p>
                  <p className="text-green-700">Iconic fingerpicked pattern outlining I-IV-V</p>
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
          
          {/* Iconic Intro Riff */}
          <div className="bg-white rounded-xl p-6 shadow-sm border mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Iconic Intro Riff</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Fingerpicked Pattern</h4>
                  <p className="text-sm text-purple-700 mb-3">Single-note fingerpicking in B major:</p>
                  <VexTab 
                    notation={`
                      tabstave notation=true
                      notes 2/5 2/5 0/4 0/4 | 2/4 2/4 2/5 ##
                    `}
                    width={500}
                    scale={0.8}
                  />
                  <div className="mt-3">
                    <p className="text-xs text-purple-600 font-medium mb-1">Fingerpicking Notes:</p>
                    <ul className="text-xs text-purple-600 space-y-1">
                      <li>• B note: 2nd fret A string</li>
                      <li>• E note: Open D string</li>
                      <li>• F# note: 2nd fret D string</li>
                      <li>• Use thumb and fingers for clean articulation</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p><strong>Pattern:</strong> Arpeggiated I-IV-V outline</p>
                  <p><strong>Technique:</strong> Fingerpicking with precise timing</p>
                </div>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-700">Fingerpicking Technique:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Thumb (p): Low B note on A string</li>
                    <li>• Index (i): E note on D string</li>
                    <li>• Middle (m): F# note on D string</li>
                    <li>• Clean, precise articulation essential</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Timing & Rhythm:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Steady eighth-note feel</li>
                    <li>• Slight accent on beat 1</li>
                    <li>• Consistent velocity for driving effect</li>
                    <li>• Build intensity through repetition</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Performance Tips:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Start slowly, build to tempo</li>
                    <li>• Use metronome for precision</li>
                    <li>• Keep right hand relaxed but firm</li>
                    <li>• Focus on note clarity over speed</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/lessons/songs/techniques/fingerpicking" className="text-cyan-600 hover:text-cyan-800 text-sm">
                → Master Fingerpicking Techniques
              </Link>
            </div>
          </div>

          {/* Power Chord Section */}
          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <h3 className="text-xl font-semibold text-red-900 mb-4">Power Chord Sections</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="bg-red-100 rounded-lg p-4 border border-red-300">
                  <h4 className="font-semibold text-red-800 mb-2">Chorus Power Chords</h4>
                  <p className="text-sm text-red-700 mb-3">Full band arrangement with driving rhythm:</p>
                  <VexTab 
                    notation={`
                      tabstave notation=true
                      notes (2/5.4/4) (0/4.2/3) (2/4.4/3) (2/5.4/4)
                    `}
                    width={500}
                    scale={0.8}
                  />
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-red-800 font-medium">Malcolm Young Style Elements</p>
                <ul className="text-red-700 space-y-1">
                  <li>• Heavy downstroke emphasis</li>
                  <li>• Tight, percussive attack</li>
                  <li>• Minimal sustain for clarity</li>
                  <li>• Lock with bass and drums</li>
                  <li>• Consistent dynamics</li>
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
                    <li>• Standard tuning</li>
                    <li>• Heavy gauge strings (.012-.054)</li>
                    <li>• Bridge pickup primarily</li>
                  </ul>
                </div>
                <div>
                  <p className="text-amber-800 font-medium">Angus Young (Lead):</p>
                  <ul className="text-amber-700 space-y-1">
                    <li>• Gibson SG Standard</li>
                    <li>• Humbucker pickups</li>
                    <li>• Light strings for bending (.009-.042)</li>
                    <li>• Both pickups used</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Amplifier */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-semibold text-red-900 mb-4">🔊 Amplifier</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-red-800 font-medium">AC/DC Signature Tone:</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• Marshall JTM45/100 heads</li>
                    <li>• Marshall 1960A cabinets</li>
                    <li>• Moderate gain, high volume</li>
                    <li>• Natural tube compression</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-800 font-medium">Settings:</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• Gain: 6/10</li>
                    <li>• Bass: 7/10</li>
                    <li>• Mids: 8/10</li>
                    <li>• Treble: 7/10</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Effects */}
            <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
              <h3 className="text-xl font-semibold text-cyan-900 mb-4">🎛️ Effects</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-cyan-800 font-medium">Minimal Setup:</p>
                  <ul className="text-cyan-700 space-y-1">
                    <li>• Direct guitar to amp</li>
                    <li>• No pedals for rhythm</li>
                    <li>• Natural amp overdrive</li>
                    <li>• Studio reverb only</li>
                  </ul>
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
                  <li>• Learn B5, E5, F#5 power chords</li>
                  <li>• Practice chord progression slowly</li>
                  <li>• Basic fingerpicking patterns</li>
                  <li>• Work on timing with metronome</li>
                </ul>
              </div>
            </div>

            {/* Intermediate Level */}
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">🟡 Intermediate Level</h3>
              <div className="space-y-3 text-sm">
                <p className="text-orange-800 font-medium">Building Skills:</p>
                <ul className="text-orange-700 space-y-1">
                  <li>• Master the intro fingerpicking</li>
                  <li>• Combine picking and strumming</li>
                  <li>• Work on dynamics and accents</li>
                  <li>• Learn complete song structure</li>
                </ul>
              </div>
            </div>

            {/* Advanced Level */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-semibold text-red-900 mb-4">🔴 Advanced Level</h3>
              <div className="space-y-3 text-sm">
                <p className="text-red-800 font-medium">Mastery Goals:</p>
                <ul className="text-red-700 space-y-1">
                  <li>• Perfect the intro at full tempo</li>
                  <li>• Add lead guitar embellishments</li>
                  <li>• Master the complete arrangement</li>
                  <li>• Perform with AC/DC energy and precision</li>
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
                <li>• <Link href="/lessons/songs/song-analysis/for-those-about-to-rock" className="text-cyan-600 hover:text-cyan-800">"For Those About to Rock"</Link></li>
                <li>• <Link href="/lessons/songs/song-analysis/you-shook-me-all-night-long" className="text-cyan-600 hover:text-cyan-800">"You Shook Me All Night Long"</Link></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Similar Techniques</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• "Stairway to Heaven" - Led Zeppelin (fingerpicking)</li>
                <li>• "Blackbird" - The Beatles (fingerpicking patterns)</li>
                <li>• "Dust in the Wind" - Kansas (fingerpicking)</li>
                <li>• "More Than Words" - Extreme (fingerpicking)</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Technical Development</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <Link href="/lessons/songs/techniques/fingerpicking" className="text-cyan-600 hover:text-cyan-800">Fingerpicking Mastery</Link></li>
                <li>• <Link href="/lessons/songs/techniques/power-chords" className="text-cyan-600 hover:text-cyan-800">Power Chord Techniques</Link></li>
                <li>• <Link href="/lessons/songs/gear/classic-rock-tones" className="text-cyan-600 hover:text-cyan-800">Classic Rock Tone</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final Section */}
        <section className="text-center py-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Master More AC/DC Classics</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Continue your AC/DC journey with our comprehensive analysis of their greatest hits.
          </p>
          <Link 
            href="/lessons/songs/song-analysis" 
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            View All Song Analyses
          </Link>
        </section>

      </main>
      
      <Footer />
    </Layout>
  );
}
